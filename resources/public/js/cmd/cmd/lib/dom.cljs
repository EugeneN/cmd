(ns cmd.lib.dom
    (:require [goog.net.cookies :as cookies]
              [goog.style :as gstyle]))

(defn $ [id-str] (.getElementById js/document id-str))

;(defn visible? [el] (.isElementShown goog.style el))
(defn visible? [el] (.. (js/$ el) (is ":visible")))

(defn set-width [el width] (set! (.. el -style -width) width))

(defn show [el] (if (not (visible? el)) (.showElement goog.style el true)))

(defn hide [el] (if (visible? el) (.showElement goog.style el false)))

(defn slide-up [el] (.. (js/$ el) (slideUp 200)))

(defn slide-down [el] (.. (js/$ el) (slideDown 200)))

(defn toggle-slide-left
  [el]
  (.. (js/$ el) (toggle #js {:effect "slide" :duration 200 :direction "left"})))

(defn toggle-slide-right
  [el]
  (.. (js/$ el) (toggle #js {:effect "slide" :duration 200 :direction "right"})))

;(defn toggle [el] (if (visible? el) (hide el) (show el)))
(defn toggle
  ([el] (.. (js/$ el) (slideToggle 200)))
  ([el complete-cb] (.. (js/$ el) (slideToggle 200 complete-cb))))

(defn html!
  [node html]
  (set! (.-innerHTML node) html))

(defn setcookie [name value]
  (.set goog.net.cookies name value -1))

(defn getcookie [name]
  (.get goog.net.cookies name))