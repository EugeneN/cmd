(ns cmd.ui
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [markdown.core :as md]
            ;[cmd.core :as core]

            [goog.net.XhrIo :as io]
            [cljs.core.async :refer [chan close! >! <!]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]
  )
  (:import [goog.events KeyHandler KeyCodes EventType]))

(enable-console-print!)


(defn GET [url]
  (let [ch (chan 1)]
    (io/send url
            (fn [event]
              (let [res (-> event .-target .getResponseText)]
                (go (>! ch res)
                  (close! ch)))))
    ch))


(def input (. js/document (getElementById "editor")))
(def preview (. js/document (getElementById "preview")))

(defn md->html
  [text]
  (.mdToHtml markdown.core text))

(defn render-preview
  [_]
  (let [raw (.-value input)]
    (.log js/console raw)
    (set! (.-innerHTML preview) (md->html raw))))

(events/listen input
  goog.events.EventType.KEYUP render-preview)


(go
  (set! (.-innerHTML preview) (<! (GET "http://google.com"))) )


