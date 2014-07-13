(ns cmd.plugins.markdown.core
  (:require [cmd.lib.utils  :refer [raw->clj get-state set-state say]]
            [cmd.lib.io     :refer [GET POST PATCH auth-param-fallback auth-param-strict]]

            [cmd.globals    :refer [state AppBus]]
            [cljs.core.async  :refer [chan close! >! <!]]

            clojure.set
            clojure.string)

  (:require-macros [cljs.core.async.macros   :refer [go alt!]]))


(defn join-gist-names
  [file-keys]
  (apply str (interpose " <*> " file-keys)))

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
    (let [[maybe result] (<! (PATCH (str "/gists/" gist-id) new-content (auth-param-strict
                                                                          (get-state state :username)
                                                                          (get-state state :auth-token))))
          clj-result (raw->clj result)]
      (case maybe
        :just (do (set-state state :current-gist clj-result)
                  (say (str "Ok, gist " gist-id " saved")))
        :nothing (handle-io-error clj-result)))))

(defn create-gist
  [new-content]
  (go
    (let [[maybe res] (<! (POST "/gists" new-content (auth-param-strict
                                                       (get-state state :username)
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

(defn get-gist-id-from-location-hash []
  (let [x ((parse-location-hash) :gist-id)]
    (if (= x "") nil x)))

(defn get-panels-from-location-hash []
  (let [x ((parse-location-hash) :panels)] x))

(defn set-title
  [title]
  (set! (.. js/document -title) (str title " : " default-title)))

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

(defn get-repl
  []
  (reify
        IRepl
        (read [this input-source-element global-state app-bus]
          (do
            (setup-ace)
            (setup-editor-listeners)))                        ; must send messages via app-bus to :eval

        (eval [this ? global-state app-bus])

        (print [this output-element global-state app-bus])

        (loop [this])                                             ; start reactive loop
        ))