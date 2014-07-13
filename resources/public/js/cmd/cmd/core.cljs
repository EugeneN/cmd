(ns cmd.core
  (:require
            [cmd.globals      :refer [state AppBus]]
            [cmd.lib.dom      :refer [setcookie getcookie]]
            [cmd.lib.utils    :refer [say raw->clj set-state get-state]]
            [cmd.lib.io       :refer [GET PATCH POST active-requests]]
            [cmd.defs         :refer [local-motd default-title default-motd-id]]
            [cljs.core.async  :refer [chan close! >! <!]])
  (:require-macros
    [cljs.core.async.macros   :refer [go alt!]]
    ))



(defprotocol IRepl
  (read [_ app-bus state inut-el])
  (eval [_ app-bus state])
  (print [_ app-bus state output-el])
  (loop [_ app-bus state]))

(add-watch active-requests nil (fn [key ref old new] (set-state state :active-requests new)))



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
    (say (str "Looks like you've got an authentication error: " error-msg))) )

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






