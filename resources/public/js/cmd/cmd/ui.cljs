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

;; api section -----------------------------------------------------------------

; this is the real token
(def auth-token "ea69c0bf54df678124e1788d87efaf94374e149b")
; ea69c0bf54df678124e1788d87efaf94374e149b:x-oauth-basic -> base64
(def auth-token-b64 "ZWE2OWMwYmY1NGRmNjc4MTI0ZTE3ODhkODdlZmFmOTQzNzRlMTQ5Yjp4LW9hdXRoLWJhc2lj")
(def auth-param (js-obj "Authorization" (str "Basic " auth-token-b64)
                        "Content-Type" "application/json"))


;; utils section ---------------------------------------------------------------

(defn say
  [smth]
  (.log js/console smth))

(defn html!
  [node html]
  (set! (.-innerHTML node) html))

(defn join-gist-names
  [file-keys]
  (apply str (interpose " <;> " file-keys)))

(defn raw->clj
  [raw]
  (js->clj (.parse js/JSON raw)))

(defn md->html
  [text]
  (.mdToHtml markdown.core text))

(defn html->react
  [html]
  html)


;; io section ------------------------------------------------------------------

(defn resp-handler
  [ch event]
  (let [res (-> event .-target .getResponseText)]
    (go (>! ch res)
      (close! ch))))

(defn api-url
  [suffix]
  (str "https://api.github.com" suffix))

(defn GET [url]
  (let [ch (chan 1)]
    (io/send (api-url url)
             (partial resp-handler ch)
             "GET"
             nil
             auth-param)
    ch))

(defn POST [url data]
  (let [ch (chan 1)]
    (io/send (api-url url)
             (partial resp-handler ch)
             "POST"
             (.serialize (goog.json.Serializer.) (clj->js data))
             auth-param)
    ch))

(defn PATCH [url data]
  (let [ch (chan 1)]
    (io/send (api-url url)
             (partial resp-handler ch)
             "PATCH"
             (.serialize (goog.json.Serializer.) (clj->js data))
             auth-param)
    ch))


;; bl section ------------------------------------------------------------------

(def state (atom {:preview-output nil}))

(def AppBus (chan 1))

(defn process
  [md]
  (let [html (md->html md)
        preview-output (html->react html)]
    preview-output))

(defn set-state
  [state key new-state]
  (swap! state assoc key new-state))

(defn get-state
  [state key]
  (key @state))

(defn find-gist
  [state gist-id]
  (filter #(= gist-id (% "id")) (get-state state :gists)))

(defn load-gists
  []
  (go
    (let [resp (<! (GET "/users/EugeneN/gists"))
          clj-resp (raw->clj resp)]
      (set-state state :gists clj-resp))))

(defn load-gist
  [id]
  (go
    (let [url (str "/gists/" id)
          raw-file (<! (GET url))
          gist (raw->clj raw-file)
          [first-file-name _] (-> (gist "files") first)]
      (set-state state :current-file-id first-file-name)
      (set-state state :current-gist gist)
      (>! AppBus [:gist-loaded id]))))

(defn save-gist
  [gist-id new-content]
  (go
    (let [result (<! (PATCH (str "/gists/" gist-id) new-content))]
      (raw->clj result))))


;; ui section ------------------------------------------------------------------

(def input (. js/document (getElementById "editor")))
(def preview (. js/document (getElementById "preview")))
(def pull-button (. js/document (getElementById "pull")))
(def push-button (. js/document (getElementById "push")))

(defn set-input
  [gist-id]
  (let [gist (get-state state :current-gist)
        [_ first-file] (-> (gist "files") first)
        content (first-file "content")]
    (set! (.-value input) content)))


(defn set-preview
  [_]
  (html! preview (process (.-value input))))

(defn handle-pull
  [_]
  (load-gist (get-state state :current-gist-id)))

(defn handle-push
  [_]
  (let [md-raw (.-value input)
        gist-id (get-state state :current-gist-id)
        file-name (get-state state :current-file-id)
        new-content {:description "cmd push" :files {(keyword file-name) {:content md-raw}}}
        result (save-gist gist-id new-content)]
    (set-state state :current-gist result)))

(defn handle-select
  [e]
  (let [selected-id (.. e -target -value)]
    (set-state state :current-gist-id selected-id)
    (load-gist selected-id)))

(defn gist-list [data owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/select #js {:className "hello"
                             :onChange handle-select}
        (map (fn [gist] (dom/option #js {:value (gist "id")} (-> (gist "files") keys join-gist-names))) (:gists data))))
      ))


; main section & entry points --------------------------------------------------

(om/root gist-list state
  {:target (. js/document (getElementById "gist-list"))})


(events/listen input
  goog.events.EventType.KEYUP set-preview)

(events/listen pull-button
  goog.events.EventType.CLICK handle-pull)

(events/listen push-button
  goog.events.EventType.CLICK handle-push)

(defn subscribe-appbus
  []
  (go (loop [[msg payload] (<! AppBus)]

    (set-input payload)
    (set-preview nil)
    (recur (<! AppBus)))))

(subscribe-appbus)
(load-gists)


