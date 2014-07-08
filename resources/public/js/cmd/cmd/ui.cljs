(ns cmd.ui
  (:require [goog.events :as events]
            ;[goog.dom :as dom]
            [markdown.core :as md]
            ;[cmd.core :as core]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]

            [goog.net.XhrIo :as io]
            [goog.net.cookies :as cookie]
            [cljs.core.async :refer [chan close! >! <!]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]
  )
  (:import [goog.events KeyHandler KeyCodes EventType]))

(enable-console-print!)

;; utils section ---------------------------------------------------------------

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
    (say json)
    (say clj)
    clj
    ))

(defn md->html
  [text]
  (.mdToHtml markdown.core text))

(defn html->react
  [html]
  html)

(defn ^:export setcookie [name value]
  (.set goog.net.cookies name value -1))

(defn ^:export getcookie [name]
  (.get goog.net.cookies name))




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


(defn auth-param [username auth-token] (js-obj "Authorization" (str "Basic " auth-token)
                                               "Content-Type" "application/json"))

;; io section ------------------------------------------------------------------

(defn resp-handler
  [ch event]
  (let [error-code (-> event .-target .getLastErrorCode)
        res (-> event .-target .getResponseText)]
    (condp = error-code
      goog.net.ErrorCode.NO_ERROR (go (>! ch [:just res])
                                    (close! ch))

      (go (>! ch [:nothing res])
        (close! ch))
      )
    ))

(defn api-url
  [suffix]
  (str "https://api.github.com" suffix))

(defn GET [url auth-param]
  (let [ch (chan 1)]
    (io/send (api-url url)
      (partial resp-handler ch)
      "GET"
      nil
      auth-param)
    ch))

(defn POST [url data auth-param]
  (let [ch (chan 1)]
    (io/send (api-url url)
      (partial resp-handler ch)
      "POST"
      (.serialize (goog.json.Serializer.) (clj->js data))
      auth-param)
    ch))

(defn PATCH [url data auth-param]
  (let [ch (chan 1)]
    (io/send (api-url url)
      (partial resp-handler ch)
      "PATCH"
      (.serialize (goog.json.Serializer.) (clj->js data))
      auth-param)
    ch))

;; /io section -----------------------------------------------------------------

(defn find-gist
  [state gist-id]
  (filter #(= gist-id (% "id")) (get-state state :gists)))

(defn handle-io-error
  [resp]
    (let [error-msg (resp "message")]
      (set-state state :error error-msg)
      (say (str "IO Error: " error-msg))))

(defn load-gists
  []
  (go
    (let [username (get-state state :username)
          auth-token (get-state state :auth-token)
          [maybe resp] (<! (GET (str "/users/" username "/gists") (auth-param username auth-token)))
          resp-clj (raw->clj resp)]
      (case maybe
        :just (set-state state :gists resp-clj)
        :nothing (handle-io-error resp-clj)))))

(defn load-gist
  [id]
  (go
    (let [url (str "/gists/" id)
          [maybe resp] (<! (GET url (auth-param (get-state state :username) (get-state state :auth-token))))]
      (case maybe
        :just (do (let [gist (raw->clj resp)
                        [first-file-name _] (-> (gist "files") first)]
                    (set-state state :current-file-id first-file-name)
                    (set-state state :current-gist gist)
                    (>! AppBus [:gist-loaded id])))
        :nothing (handle-io-error (raw->clj resp))))))

(defn save-gist
  [gist-id new-content]
  (go
    (let [[maybe result] (<! (PATCH (str "/gists/" gist-id) new-content (auth-param (get-state state :username) (get-state state :auth-token))))]
      (case maybe
        :just (raw->clj result)
        :nothing (handle-io-error (raw->clj result))))))


;; ui section ------------------------------------------------------------------

(def input (. js/document (getElementById "editor")))
(def preview (. js/document (getElementById "preview")))
(def preview-container (. js/document (getElementById "preview-container")))
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
        new-content {:description file-name :files {(keyword file-name) {:content md-raw}}}
        result (save-gist gist-id new-content)]
    (set-state state :current-gist result)))

(defn handle-logout
  [_]
  (say "Logout")
  (set-state state :valid-credentials false))

(defn handle-select
  [e]
  (let [selected-id (.. e -target -value)]
    (set-state state :current-gist-id selected-id)
    (load-gist selected-id)))

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
    (say (str "Auth Error: " error-msg))))

(defn authenticate
  [username auth-token]
  (go
    (let [[maybe resp] (<! (GET (str "/users/" username "/gists") (auth-param username auth-token)))]
      (case maybe
        :just (logged-in username auth-token)
        :nothing (unauthorized resp)))))

(defn handle-auth
  [e]
  (let [username (.-value (. js/document (getElementById "username")))
        auth-token (.-value (. js/document (getElementById "auth-token")))]
    (authenticate username auth-token)
    ))



(defn authenticated-om? [state]
  (state :valid-credentials))

(defn authenticated? [state]
  (get-state state :valid-credentials))

(defn error-set? [state]
  (state :error))


(defn toolbar [state owner]
  (reify
    om/IRender
    (render [_]
      (cond
        (authenticated-om? state)
          (dom/div nil
            (dom/label #js {:className "ios7"} "Select gist:")
            (dom/div #js {:id "gist-list"}
              (apply dom/select #js {:className "hello"
                                     :onChange handle-select}
                (map (fn [gist] (dom/option #js {:value (gist "id")} (-> (gist "files") keys join-gist-names))) (:gists state))))

            (let [current-gist (state :current-gist)]
              (if (not (= current-gist nil))
                (dom/a #js {:id "view-orig"
                            :target "_blank"
                            :href (current-gist "html_url")} "View on gisthub")))


            (dom/button #js {:id "pull"
                             :onClick handle-pull} "_ Pull")
            (dom/button #js {:id "push"
                             :onClick handle-push} "^ Push")

            (dom/button #js {:id "log-out"
                         :onClick handle-logout} "Log out"))
        :else
          (dom/div nil
            (dom/label nil "Username:")
            (dom/input #js {:type "text"
                            :id "username"})

            (dom/label nil "Auth token:")
            (dom/input #js {:type "text"
                            :id "auth-token"})

            (dom/button #js {:id "go"
                             :onClick handle-auth} "Let's go >>")

            (if (error-set? state)
              (dom/span #js {:id "error-msg"}) (str (state :error)))

            ))
      )))

; main section & entry points --------------------------------------------------

(defn render-toolbar
  [state]
  (om/root toolbar state
    {:target (. js/document (getElementById "toolbar"))}))


(defn setup-common-listeners
  []
  (events/listen input
    goog.events.EventType.KEYUP set-preview)

  (events/listen input
    goog.events.EventType.SCROLL #(set! (.-scrollTop preview-container) (.-scrollTop input)))

  (events/listen preview-container
    goog.events.EventType.SCROLL #(set! (.-scrollTop input) (.-scrollTop preview-container)))
  )

(defn subscribe-appbus
  [app-bus]
  (go (loop [[msg payload] (<! app-bus)]
        (case msg
          :user-is-authenticated (load-gists)
          :gist-loaded (do (set-input payload)
                           (set-preview nil)))

    (recur (<! app-bus)))))



(defn main
  [state app-bus]
  (let [username (getcookie "username")
        auth-token (getcookie "auth-token")]

    (subscribe-appbus app-bus)
    (setup-common-listeners)

    (authenticate username auth-token)

    (render-toolbar state)

    ))

; Entry point
(main state AppBus)


