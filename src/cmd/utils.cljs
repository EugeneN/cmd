(ns cmd.utils
  (:require [goog.net.cookies :as cookies]))


(defn say
  [smth]
  (.log js/console smth))

(defn html!
  [node html]
  (set! (.-innerHTML node) html))

(defn join-gist-names
  [file-keys]
  (apply str (interpose " <*> " file-keys)))

(defn raw->clj
  [raw]
  (let [json (.parse js/JSON raw)
        clj (js->clj json)]
    clj))

(defn setcookie [name value]
  (.set goog.net.cookies name value -1))

(defn getcookie [name]
  (.get goog.net.cookies name))
