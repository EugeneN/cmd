(ns cmd.ui
  (:require [goog.events :as events]
            ;[goog.dom :as dom]
            [markdown.core :as md]
            ;[cmd.core :as core]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]

            [goog.net.XhrIo :as io]
            [cljs.core.async :refer [chan close! >! <!]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]
  )
  (:import [goog.events KeyHandler KeyCodes EventType]))

(enable-console-print!)

;; utils section

(defn say
  [smth]
  (.log js/console smth))

(defn html!
  [node html]
  (set! (.-innerHTML node) html))

;; bl section

(defn md->html
  [text]
  (.mdToHtml markdown.core text))

(def state (atom {:preview-output nil}))

(defn html->react
  [html]
  html)

(defn process
  [md]
  (let [html (md->html md)
        preview-output (html->react html)]
    preview-output))

(defn set-state
  [key new-state]
  (swap! state assoc key new-state))



;; api section

; this is the real token
(def auth-token "ea69c0bf54df678124e1788d87efaf94374e149b")
; ea69c0bf54df678124e1788d87efaf94374e149b:x-oauth-basic -> base64
(def auth-token-b64 "ZWE2OWMwYmY1NGRmNjc4MTI0ZTE3ODhkODdlZmFmOTQzNzRlMTQ5Yjp4LW9hdXRoLWJhc2lj")
(def auth-param (js-obj "Authorization" (str "Basic " auth-token-b64)))

;; io section

(defn resp-handler
  [ch event]
  (let [res (-> event .-target .getResponseText)]
    (go (>! ch res)
      (close! ch))))

(defn GET [url]
  (let [ch (chan 1)]
    (io/send url
             (partial resp-handler ch)
             "GET"
             nil
             auth-param)
    ch))

(defn POST [url data]
  (let [ch (chan 1)]
    (io/send url
             (partial resp-handler ch)
             "POST"
             data
             auth-param)
    ch))


;; ui section


(def input (. js/document (getElementById "editor")))
(def preview (. js/document (getElementById "preview")))


(defn handle-input
  [_]
  (html! preview (process (.-value input))))

;; main section



(defn join-gist-names
  [file-keys]
  (apply str (interpose " <;> " file-keys)))

(defn raw->clj
  [raw]
  (js->clj (.parse js/JSON raw)))

(defn load-gist
  [url]
  (go
    (let [raw-file (<! (GET url))
          gist (raw->clj raw-file)
          [_ first-file] (-> (gist "files") first)
          content (first-file "content")]
      (set! (.-value input) content)
      (handle-input nil))))

(defn handle-select
  [e]
  (let [selected-id (.. e -target -value)]
    (load-gist (str "https://api.github.com/gists/" selected-id))))

(defn gist-list [data owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/select #js {:className "hello"
                             :onChange handle-select}
        (map (fn [gist] (dom/option #js {:value (gist "id")} (-> (gist "files") keys join-gist-names))) (:gists data))))
      ))

(om/root gist-list state
  {:target (. js/document (getElementById "gist-list"))})


(events/listen input
  goog.events.EventType.KEYUP handle-input)


(go
  (let [resp (<! (GET "https://api.github.com/users/EugeneN/gists"))
        clj-resp (raw->clj resp)]
    (say clj-resp)
    (set-state :gists clj-resp)))


