(ns cmd.ui
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [chan close! >! <!]]

            [goog.style :as gstyle]

            [cmd.utils :refer [say html! join-gist-names setcookie getcookie]]
            [cmd.core :refer [set-state reset-state get-state process load-gists load-gist
             save-gist authenticate authenticated-om? error-set? state AppBus]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]
  ))

(enable-console-print!)
(set! *print-fn* #(.log js/console %))

(def motd "# Welcome to mCMD

It is an explosive mixture of ***ClojureScript, Rx, React/Om, core.async, github CORS api, ace, pagedown, web worker(s)*** crafted together to give you *the best* gist editing tool, ever.
It's currently an alfa-quality prototype, so do not expect to much.


To begin:

- just provide your Github username and a *secret*,
- or select a gist from the list above if you are logged in already :-)

```
(println \"Heil Clojure!\")
```
")

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

(defn process-cb
  [value]
  (do
    (html! preview value)
    ;(js/setTimeout
    ;  #(.Queue js/MathJax.Hub ["Typeset" (.-Hub js/MathJax) "preview"])
    ;  300)
    ))

(defn set-preview []
  (let [ace (get-state state :ace)
        ace-value (.. ace (getSession) (getValue))]
    (process ace-value process-cb)))

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
    (say "Bye bye")
    (reset-state state)
    (setcookie "username" "")
    (setcookie "auth-token" "")

    (go (>! AppBus [:user-has-logged-out true]))))

(defn handle-select
  [e]
  (let [selected-id (.. e -target -value)]
    (set-state state :current-gist-id selected-id)
    (load-gist selected-id)))

(defn handle-auth
  [e]
  (let [username (.-value (. js/document (getElementById "username")))
        auth-token (.-value (. js/document (getElementById "auth-token")))]
    (authenticate username auth-token)
    ))

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
                                     :title "Select a gist for a good start :-)"
                                     :onChange handle-select}
                (map (fn [gist] (dom/option #js {:value (gist "id")} (-> (gist "files") keys join-gist-names))) (:gists state))))

            (let [current-gist (state :current-gist)
                  href (if (= current-gist nil) nil (current-gist "html_url"))]
              (if (not (= href nil))
                (dom/a #js {:id "view-orig"
                            :target "_blank"
                            :title "View gist in Github (in a new tab/window)"
                            :href href} "VIEW!ORIGINAL")))


            (dom/button #js {:id "pull"
                             :title "Reload gist from Github"
                             :onClick handle-pull} ">>PULL")
            (dom/button #js {:id "push"
                             :title "Save current gist state to Github"
                             :onClick handle-push} "PUSH>>")

            (dom/button #js {:id "log-out"
                             :title "Log out and remove autologin cookies"
                             :onClick handle-logout} "LOG^OUT"))
        :else
          (dom/div nil
            (dom/label nil "USERN@ME: ")
            (dom/input #js {:type "text"
                            :title "Your Github username"
                            :id "username"})

            (dom/label nil "S#CRET: ")
            (dom/input #js {:type "text"
                            :title "Github auth token in base64 :-P"
                            :id "auth-token"})

            (dom/button #js {:id "go"
                             :title "Log in to access and work with your gists"
                             :onClick handle-auth} "LOG>>IN")

            (if (error-set? state)
              (dom/span #js {:id "error-msg"}) (str (state :error)))

            ))
      )))

(defn render-toolbar
  [state]
  (om/root toolbar state
    {:target (. js/document (getElementById "toolbar"))}))

; main section -----------------------------------------------------------------

(defn $ [id-str] (.getElementById js/document id-str))
(defn visible? [el] (.isElementShown goog.style el))
(defn set-width [el width] (set! (.. el -style -width) width))
(defn toggle [el] (.showElement goog.style el (not (visible? el))))

(defn setup-toolbar-listeners
  []
  (let [toolbar-toggler   ($ "toolbar-toggler")
        editor-toggler    ($ "editor-toggler")
        toolbar           ($ "toolbar")
        preview           ($ "preview-container")
        preview-container ($ "outer-preview-container")
        editor            ($ "input")
        preview-toggler   ($ "preview-toggler")]

    (.. js/Rx -Observable
      (fromEvent toolbar-toggler "click")
      (subscribe #(toggle toolbar)))

    (.. js/Rx -Observable
      (fromEvent preview-toggler "click")
      (subscribe #(do
                   (toggle preview)
                   (if (visible? preview)
                     (set-width preview-container "49%")
                     (set-width preview-container "20px")))))

    (.. js/Rx -Observable
      (fromEvent editor-toggler "click")
      (subscribe #(toggle editor)))

    ))

(defn setup-editor-listeners
  []
  (let [editor (get-state state :ace)
        session (.. editor (getSession))]

    (.. js/Rx -Observable
      (create (fn [observer] (.. session (on "change" #(.. observer (onNext))))))
      (throttle 300)
      (subscribe #(set-preview)))

    ;editor.getSession().getScreenLength()
                  * editor.renderer.lineHeight

    (defn calc-offset-top-preview
      [ot1]
      (let [ch1 (* (.. session (getScreenLength)) (.. editor -renderer -lineHeight))
            ch2 (.-clientHeight preview)]
        (/ (* ot1 ch2) ch1)))

    (defn calc-offset-top-input
      [ot2]
      (let [ch1 (* (.. session (getScreenLength)) (.. editor -renderer -lineHeight))
            ch2 (.-clientHeight preview)]
        (/ (* ot2 ch1) ch2)))

    (.. js/Rx -Observable
      (create (fn [observer] (.. session (on "changeScrollTop" #(.. observer (onNext %))))))
      (throttle 15)
      (subscribe #(set! (.-scrollTop preview-container) (calc-offset-top-preview %))))


    (.. js/Rx -Observable
      (fromEvent preview-container "scroll")
      (throttle 15)
      (subscribe #(.. session (setScrollTop (calc-offset-top-input (.-scrollTop preview-container))))))
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
    (setup-toolbar-listeners)

    (authenticate username auth-token)

    (render-toolbar state)

    (reset-input)

    (let [worker (new js/Worker "resources/public/js/worker.js")]
      (set-state state :worker worker))

    ))

; Entry point ------------------------------------------------------------------
(main state AppBus)