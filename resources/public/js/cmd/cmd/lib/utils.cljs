(ns cmd.lib.utils
  (:require         [cljs.core.async :refer [chan close! >! <!]]
                    [cmd.globals :refer (state AppBus)])
  (:require-macros  [cljs.core.async.macros :refer [go alt!]]))


(defn raw->clj
  [raw]
  (let [json (.parse js/JSON raw)
        clj (js->clj json)]
    clj))

(defn set-state
  [state key new-state]
  (swap! state assoc key new-state))

(defn reset-state
  [state]
  (swap! state select-keys [:ace :worker :motd :active-requests]))

(defn get-state
  [state key]
  (key @state))

; # <gist-id> ; [tep]
(defn parse-location-hash
  []
  (let [hash (.. js/document -location -hash)]
    (if (> (count hash) 1)
      (zipmap [:gist-id :panels] (.split (subs hash 1) ";"))
      {})))

(defn set-location-hash
  [hash-hash]
  (let [gist-id (or (hash-hash :gist-id) "")
        panels (hash-hash :panels)
        chunks (if (nil? panels) [gist-id] [gist-id panels])]
    (set! (.. js/document -location -hash) (clojure.string/join ";" chunks))))

(defn say
  [msg]
  (do (go (>! AppBus [:new-console-msg msg]))
      (.log js/console msg)))