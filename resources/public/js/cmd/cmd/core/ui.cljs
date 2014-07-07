(ns cmd.core.ui
  (:require [clojure.browser.repl :as repl]
            [om.core :as om]
            [goog.events :as events]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :refer [put!]]
            [cmd.core :refer [hello]])
  (:import [goog.events KeyHandler KeyCodes EventType]))

(enable-console-print!)
(repl/connect "http://localhost:8000/repl")

(def system 0)

(om/root
  (fn [cursor _]
    (reify
      om/IDisplayName
      (display-name [_] "info")
      om/IRender
      (render [_]
        (html
          [:div
           [:span (hello 123)]]))))
  (:state system)
  {:target (.getElementById js/document "div")})
