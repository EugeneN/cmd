(ns cmd.ui
  (:require [goog.events :as events]
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
(set! *print-fn* #(.log js/console %))

(def motd "# Welcome to CMD

It is an explosive mixture of ***ClojureScript, Rx, React/Om, core.async, github CORS api, ace, pagedown*** crafted together to give you *the best* gist editing tool, ever.
It's currently an alfa-quality prototype, so do not expect to much.


To begin:

- just provide your Github username and a *secret*,
- or select a gist from the list above if you are logged in already :-)")

(def state (atom {:preview-output nil}))

(def AppBus (chan 1))

(defn set-state
  [state key new-state]
  (swap! state assoc key new-state))

(defn reset-state
  [state]
  (swap! state (fn [& _] {})))

(defn get-state
  [state key]
  (key @state))

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
    clj
    ))

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

(defn md->html
  [text]
  (let [converter (new js/Markdown.Converter)]
    (.. converter (makeHtml text))))

(defn html->react
  [html]
  html)

(defn ^:export setcookie [name value]
  (.set goog.net.cookies name value -1))

(defn ^:export getcookie [name]
  (.get goog.net.cookies name))




;; bl section ------------------------------------------------------------------



(defn process
  [md cb]
  (go
    (let [[maybe resp] (<! (wmd->html md))]
      (case maybe
        :just (cb resp)
        :nothing (cb "<Error>")))))





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
    (let [[maybe result] (<! (PATCH (str "/gists/" gist-id) new-content (auth-param (get-state state :username)
                                                                                    (get-state state :auth-token))))
          clj-result (raw->clj result)]
      (case maybe
        :just clj-result
        :nothing (handle-io-error clj-result)))))


;; ui section ------------------------------------------------------------------

(def input (. js/document (getElementById "editor")))
(def preview (. js/document (getElementById "preview")))
(def preview-container (. js/document (getElementById "preview-container")))

(defn ace-set-value
  [content]
  (.. (get-state state :ace) (getSession) (setValue content)))

(defn set-input
  [gist-id]
  (let [gist (get-state state :current-gist)
        [_ first-file] (-> (gist "files") first)
        content (first-file "content")]
    (ace-set-value content)))

(defn reset-input [] (ace-set-value motd))

(defn set-preview []
  (let [ace (get-state state :ace)
        ace-value (.. ace (getSession) (getValue))]
    (process ace-value #(html! preview %))))

(defn handle-pull
  [_]
  (load-gist (get-state state :current-gist-id)))

(defn handle-push
  [_]
  (let [ace (get-state state :ace)
        md-raw (.. ace (getSession) (getValue))
        gist-id (get-state state :current-gist-id)
        file-name (get-state state :current-file-id)
        new-content {:description file-name :files {(keyword file-name) {:content md-raw}}}
        result (save-gist gist-id new-content)]
    (set-state state :current-gist result)))

(defn handle-logout
  [_]
  (do
    (say "Logout")
    (reset-state state)
    (setcookie "username" "")
    (setcookie "auth-token" "")

    (go (>! AppBus [:user-has-logged-out true]))))

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
            (dom/label #js {:className "ios7"} "SELECT_G!ST: ")
            (dom/div #js {:id "gist-list"}
              (apply dom/select #js {:className "hello"
                                     :onChange handle-select}
                (map (fn [gist] (dom/option #js {:value (gist "id")} (-> (gist "files") keys join-gist-names))) (:gists state))))

            (let [current-gist (state :current-gist)
                  href (if (= current-gist nil) nil (current-gist "html_url"))]
              (say current-gist)
              (say href)
              (if (not (= href nil))
                (dom/a #js {:id "view-orig"
                            :target "_blank"
                            :href href} "VIEW!ORIGINAL")))


            (dom/button #js {:id "pull"
                             :onClick handle-pull} ">>PULL")
            (dom/button #js {:id "push"
                             :onClick handle-push} "PUSH>>")

            (dom/button #js {:id "log-out"
                         :onClick handle-logout} "LOG^OUT"))
        :else
          (dom/div nil
            (dom/label nil "USERN@ME: ")
            (dom/input #js {:type "text"
                            :id "username"})

            (dom/label nil "SECRET: ")
            (dom/input #js {:type "text"
                            :id "auth-token"})

            (dom/button #js {:id "go"
                             :onClick handle-auth} "LOG>>IN")

            (if (error-set? state)
              (dom/span #js {:id "error-msg"}) (str (state :error)))

            ))
      )))

; main section -----------------------------------------------------------------

(defn render-toolbar
  [state]
  (om/root toolbar state
    {:target (. js/document (getElementById "toolbar"))}))


(defn setup-editor-listeners
  []
  (let [session (.. (get-state state :ace) (getSession))]

    (.. js/Rx -Observable
      (create (fn [observer] (.. session (on "changeScrollTop" #(.. observer (onNext %))))))
      (throttle 15)
      (subscribe #(set! (.-scrollTop preview-container) %)))

    (.. js/Rx -Observable
      (create (fn [observer] (.. session (on "change" #(.. observer (onNext))))))
      (throttle 300)
      (subscribe #(set-preview)))

    (.. js/Rx -Observable
      (fromEvent preview-container "scroll")
      (throttle 15)
      (subscribe #(.. session (setScrollTop (.-scrollTop preview-container)))))
    ))


(defn setup-ace
  []
  (let [editor (.. js/ace (edit "input"))
        session (.. editor (getSession))]
    (set-state state :ace editor)
    (.. session (setMode "ace/mode/markdown"))
    (.. session (setUseWrapMode true))))

(defn subscribe-appbus
  [app-bus]
  (go (loop [[msg payload] (<! app-bus)]
        (case msg
          :user-is-authenticated (load-gists)
          :gist-loaded (set-input payload)
          :user-has-logged-out (reset-input))

        (recur (<! app-bus)))))


(defn main
  [state app-bus]
  (let [username (getcookie "username")
        auth-token (getcookie "auth-token")
        last-opened-gist-id (getcookie "last-gist")]

    (subscribe-appbus app-bus)
    (setup-ace)
    (setup-editor-listeners)

    (authenticate username auth-token)

    (render-toolbar state)

    (reset-input)

    (let [worker (new js/Worker "resources/public/js/worker.js")]
      (set-state state :worker worker))

    ))

; Entry point
(main state AppBus)


