(ns cmd.plugins.markdown.eval
  (:require [cmd.lib.utils :refer [raw->clj get-state set-state say]]
            [cljs.core.async  :refer [chan close! >! <!]]
            [cmd.globals :refer [state]])
  (:require-macros [cljs.core.async.macros   :refer [go alt!]]))


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

(defn process
  [md cb]
  (go
    (let [[maybe resp] (<! (wmd->html md))]
      (case maybe
        :just (cb resp)
        :nothing (cb "<Error>")))))