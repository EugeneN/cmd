(ns cmd.core
  (:require
            [cmd.utils :refer [raw->clj setcookie getcookie]]
            [cmd.lib :refer [GET PATCH POST active-requests]]
            [cmd.defs :refer [local-motd default-title default-motd-id]]
            [cljs.core.async :refer [chan close! >! <!]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]
    ))

; State:
; {
;   :ace
;   :gists
;   :current-gist
;   :current-gist-id
;   :current-file-id
;   :error
;   :worker
;   :toolbar-autohide
;   :mode [:new-gist :edit-gist nil]
;   :motd
;   :active-requests
;   :messages
;   :pinned-gists #{}
; }

; AppBus
; [
;  :user-is-authenticated
;  :gist-loaded
;  :user-has-logged-out
;  :motd-loaded
;  :gists-loaded
;  :new-console-msg
;  :reload-gists
; ]

(def state (atom {:active-requests 0
                  :pinned-gists #{"58a15db96ca12b952f8e"}
                  :messages []}))
(def AppBus (chan 1))

(defn set-state
  [state key new-state]
  (swap! state assoc key new-state))

(defn reset-state
  [state]
  (swap! state select-keys [:ace :worker :motd :active-requests]))

(defn get-state
  [state key]
  (key @state))

(defn say
  [msg]
  (set-state state :messages (conj (get-state state :messages) msg))
  (go (>! AppBus [:new-console-msg msg]))
  (.log js/console msg))

(add-watch active-requests nil (fn [key ref old new] (set-state state :active-requests new)))

(defn wmd->html
  [text]
  (let [worker (get-state state :worker)
        ch (chan 1)]
    (.addEventListener worker
                       "message"
                       (fn [e]
                         (let [data (.-data e)]
                           (go (>! ch [:just data])
                               (close! ch))))
                       false)
    (.postMessage worker text)
    ch))

(defn html->react [html] html)


(defn process
  [md cb]
  (go
    (let [[maybe resp] (<! (wmd->html md))]
      (case maybe
        :just (cb resp)
        :nothing (cb "<Error>")))))


(defn auth-param-strict [username auth-token]
  (js-obj "Authorization" (str "Basic " auth-token)
          "Content-Type" "application/json"))

(defn auth-param-anon [] (js-obj "Content-Type" "application/json"))

(defn auth-param-fallback [username auth-token]
  (if (nil? auth-token)
    (auth-param-anon)
    (auth-param-strict username auth-token)))

(defn find-gist
  [state gist-id]
  (filter #(= gist-id (% "id")) (get-state state :gists)))

(defn handle-io-error
  [resp]
  (let [error-msg (resp "message")]
    (set-state state :error error-msg)
    (say (str "All of a sudden... an IO Error: " error-msg))))

(defn load-gists
  []
  (go
    (let [username (get-state state :username)
          auth-token (get-state state :auth-token)
          [maybe resp] (<! (GET (str "/users/" username "/gists") (auth-param-fallback username auth-token)))
          resp-clj (raw->clj resp)]
      (case maybe
        :just ((set-state state :gists resp-clj)
               (>! AppBus [:gists-loaded nil]))
        :nothing (handle-io-error resp-clj)))))



(defn get-motd
  [gist-id]
  (go
    (let [url (str "/gists/" gist-id)
          [maybe resp] (<! (GET url (auth-param-anon)))]
      (case maybe
        :just (let [gist (raw->clj resp)
                    [_ first-file] (-> (gist "files") first)
                    content (first-file "content")]
                ((set-state state :motd content)
                 (>! AppBus [:motd-loaded content])))

        :nothing ((set-state state :motd local-motd)
                  (say "Sorry, can't load motd"))))))

(defn load-gist
  [id]
  (go
    (let [url (str "/gists/" id)
          [maybe resp] (<! (GET url (auth-param-fallback (get-state state :username) (get-state state :auth-token))))]
      (case maybe
        :just (do (let [gist (raw->clj resp)
                        [first-file-name _] (-> (gist "files") first)]
                    (set-state state :current-file-id first-file-name)
                    (set-state state :current-gist gist)
                    (set-state state :current-gist-id id)
                    (set-state state :mode :edit-gist)
                    (>! AppBus [:gist-loaded id])))
        :nothing (handle-io-error (raw->clj resp))))))

(defn save-gist
  [gist-id new-content]
  (go
    (let [[maybe result] (<! (PATCH (str "/gists/" gist-id) new-content (auth-param-strict (get-state state :username)
                                                                                    (get-state state :auth-token))))
          clj-result (raw->clj result)]
      (case maybe
        :just (do (set-state state :current-gist clj-result)
                  (load-gists)
                  (say (str "Ok, gist " gist-id " saved")))
        :nothing (handle-io-error clj-result)))))

(defn create-gist
  [new-content]
  (go
    (let [[maybe res] (<! (POST "/gists" new-content (auth-param-strict (get-state state :username)
                                                                 (get-state state :auth-token))))
          clj-result (raw->clj res)]
      (case maybe
        :just (let [new-gist-id (clj-result "id")]
                (do
                  (set-state state :mode nil)
                  (load-gists)
                  (load-gist new-gist-id)
                  (say (str "Ok, created a gist, got id " new-gist-id))))

        :nothing (handle-io-error clj-result)))))

(defn logged-in [username auth-token]
  (set-state state :username username)
  (set-state state :auth-token auth-token)
  (set-state state :valid-credentials true)
  (setcookie "username" username)
  (setcookie "auth-token" auth-token)
  (go (>! AppBus [:user-is-authenticated true])))

(defn unauthorized [resp]
  (let [error-msg (raw->clj resp)]
    (set-state state :valid-credentials false)
    (set-state state :error error-msg)
    (go (>! AppBus [:user-is-authenticated false]))
    (say (str "Looks like you've got an authentication error: " error-msg))))

(defn authenticate
  [username auth-token]
  (go
    (let [[maybe resp] (<! (GET (str "/users/" username "/gists") (auth-param-fallback username auth-token)))]
      (case maybe
        :just (logged-in username auth-token)
        :nothing (unauthorized resp)))))

(defn authenticated-om? [state]
  (state :valid-credentials))

(defn authenticated? [state]
  (get-state state :valid-credentials))

(defn error-set? [state]
  (state :error))

; # <gist-id> ; [tep]
(defn parse-location-hash
  []
  (let [hash (.. js/document -location -hash)]
    (if (> (count hash) 1)
      (zipmap [:gist-id :panels] (.split (subs hash 1) ";"))
      {})))

(defn get-gist-id-from-location-hash []
  (let [x ((parse-location-hash) :gist-id)]
    (if (= x "") nil x)))

(defn get-panels-from-location-hash []
  (let [x ((parse-location-hash) :panels)] x))

(defn set-title
  [title]
  (set! (.. js/document -title) (str title " : " default-title)))

(defn set-location-hash
  [hash-hash]
  (let [gist-id (or (hash-hash :gist-id) "")
        panels (hash-hash :panels)
        chunks (if (nil? panels) [gist-id] [gist-id panels])]
    (set! (.. js/document -location -hash) (clojure.string/join ";" chunks))))

(defn set-location-hash-gist-id
  [gist-id]
  (let [lh (parse-location-hash)
        new-lh (assoc lh :gist-id gist-id)]
    (set-location-hash new-lh)))

(defn set-location-hash-panels
  [panels]
  (let [lh (parse-location-hash)
        new-lh (assoc lh :panels (clojure.string/join panels))]
    (set-location-hash new-lh)))

(defn load-initial-content
  []
  (let [gist-id (get-gist-id-from-location-hash)]
    (if (nil? gist-id)
      (get-motd default-motd-id)
      (load-gist gist-id))))

(defn ace-set-value
  [content]
  (.. (get-state state :ace) (getSession) (setValue content)))

(defn set-input
  [gist-id]
  (let [gist (get-state state :current-gist)
        [_ first-file] (-> (gist "files") first)
        content (first-file "content")]
    (ace-set-value content)))

(defn reset-input-with-motd [] (ace-set-value (get-state state :motd)))

(defn get-pinned-gists
  [state]
  (filter (fn [gist] (contains? (:pinned-gists state) (gist "id"))) (:gists state)))