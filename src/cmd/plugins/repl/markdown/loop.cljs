(ns cmd.lib.plugins.markdown.loop
  (:require [cmd.lib.utils :refer [say get-state set-state]]
            [cmd.plugins.markdown.core :refer [load-initial-content load-gists set-input
                                               set-title set-location-hash-gist-id
                                               reset-input-with-motd find-gist load-gist
                                               get-gist-id-from-location-hash]]
            [cmd.globals :refer [state]]
            [cljs.core.async  :refer [chan close! >! <!]]
            [cmd.lib.dom :refer [visible? toggle]]
            )
  (:require-macros [cljs.core.async.macros   :refer [go alt!]]))

(defn subscribe-appbus
  [app-bus]
  (go (loop [[msg payload] (<! app-bus)]
        (case msg
          :user-is-authenticated (case payload
                                   true (do (load-initial-content)
                                            (load-gists))
                                   false (load-initial-content))

          :gist-loaded (let [title (get-state state :current-file-id)
                             gist-id payload]
                         (set-input payload)
                         (set-title title)
                         (set-location-hash-gist-id gist-id))

          :user-has-logged-out (reset-input-with-motd)

          :motd-loaded (reset-input-with-motd)

          :gists-loaded (let [[hash-gist & _] (find-gist state (get-gist-id-from-location-hash))]
                          (if (not (nil? hash-gist))
                            (load-gist (hash-gist "id"))))

          :new-console-msg (let [console ($ "console")]
                             (do
                               (set-state state :messages (conj (get-state state :messages) msg))
                               (if (not (visible? console))
                                 (do
                                   (toggle console)
                                   (js/setTimeout #(toggle console) 2000)))))

          (say (str "Unknown message from AppBus: " msg " : " payload)))

        (recur (<! app-bus)))))