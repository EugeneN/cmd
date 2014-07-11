(ns cmd.core
  (:require
            [cmd.utils :refer [say raw->clj setcookie getcookie]]
            [cmd.lib :refer [GET PATCH POST active-requests]]
            [cmd.defs :refer [local-motd]]
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
; }

; AppBus
; [
;  :user-is-authenticated
;  :gist-loaded
;  :user-has-logged-out
;  :motd-loaded
;  :gists-loaded
; ]

(def state (atom {:active-requests 0}))
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
    (say (str "IO Error: " error-msg))))

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
                 (>! AppBus [:motd-loaded content])
                 (say "Loaded remote motd")))

        :nothing ((set-state state :motd local-motd)
                  (say "Error getting remote motd"))))))

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
        :just (set-state state :current-gist clj-result)
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
                  (load-gist new-gist-id)))

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
    (say (str "Auth Error: " error-msg))))

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