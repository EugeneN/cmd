(ns cmd.ui
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [chan close! >! <!]]

            [goog.style :as gstyle]

            [cmd.utils :refer [say html! join-gist-names setcookie getcookie]]
            [cmd.core :refer [set-state reset-state get-state process load-gists load-gist create-gist
             save-gist authenticate authenticated-om? error-set? state AppBus]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]
  ))

(enable-console-print!)
(set! *print-fn* #(.log js/console %))

;; dom section

(defn $ [id-str] (.getElementById js/document id-str))
(defn visible? [el] (.isElementShown goog.style el))
(defn set-width [el width] (set! (.. el -style -width) width))

(defn show [el] (if (not (visible? el)) (.showElement goog.style el true)))
(defn hide [el] (if (visible? el) (.showElement goog.style el false)))

(defn toggle [el] (if (visible? el) (hide el) (show el)))

(defn slide-up [el] (.. (js/$ el) (slideUp 200)))
(defn slide-down [el] (.. (js/$ el) (slideDown 200)))

(defn toggle-slide-left
  [el]
  (.. (js/$ el) (toggle #js {:effect "slide" :duration 200 :direction "left"})))

(defn toggle-slide-right
  [el]
  (.. (js/$ el) (toggle #js {:effect "slide" :duration 200 :direction "right"})))

(defn jq-toggle [el complete-cb] (.. (js/$ el) (slideToggle 200 complete-cb)))


;; some section

(def motd (.-text ($ "motd")))

(def new-gist-motd (.-text ($ "new-gist-motd")))

;; ui section ------------------------------------------------------------------

(def input ($ "editor"))
(def preview ($ "preview"))
(def preview-container ($ "preview-container"))

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

(defn reset-input-new-gist [] (ace-set-value new-gist-motd))

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

        mode (get-state state :mode)]
    (case mode
      :new-gist (let [file-name (.-value ($ "new-gist-name"))
                      new-content {:description file-name :public false :files {(keyword file-name) {:content md-raw}}}]
                  (if (< (count file-name) 4)
                    (js/alert "Bad new gist file name")
                    ;else
                    (create-gist new-content)))
      ;default
      (let [gist-id (get-state state :current-gist-id)
            file-name (get-state state :current-file-id)
            new-content {:description file-name :files {(keyword file-name) {:content md-raw}}}]
        (save-gist gist-id new-content)))))

(defn handle-logout
  [_]
  (do
    (say "Bye, c u l8r :-)")
    (reset-state state)
    (setcookie "username" "")
    (setcookie "auth-token" "")

    (go (>! AppBus [:user-has-logged-out true]))))

(defn handle-select
  [e]
  (let [selected-id (.. e -target -value)]
    (load-gist selected-id)))

(defn handle-new-gist
  [ev]
  (let [mode (get-state state :mode)
        new-gist-name-el ($ "new-gist-name")]
    (case mode
      :new-gist ((do
                   (toggle-slide-left new-gist-name-el)
                   (set! (.-value new-gist-name-el) "")
                   (set-state state :mode nil)
                   (reset-input)))
      (do
        (toggle-slide-left ($ "new-gist-name"))
        (set-state state :mode :new-gist)
        (set-state state :current-gist nil)
        (set-state state :current-gist-id nil)
        (set-state state :current-file-id nil)

        ;(reset-input-new-gist)
        ))
    ))

(defn handle-auth
  [e]
  (let [username (.-value ($ "username"))
        auth-token (.-value ($ "auth-token"))]
    (authenticate username auth-token)
    ))

(defn toolbar [state owner]
  (reify
    om/IRender
    (render [_]
      (cond
        (authenticated-om? state)
          (dom/div nil
            (dom/button #js {:id "new-gist"
                            :onClick handle-new-gist
                            :className "ios7"} ":NEW_G!ST: ")

            (dom/input #js {:type "text"
                            :title "Filename"
                            :style (if (= (:mode state) :new-gist)
                                     #js {:display "inline-block"}
                                     #js {:display "none" :value ""})
                            :id "new-gist-name"})

            (dom/label #js {:className "ios7"} "SELECT_G!ST: ")
            (dom/div #js {:id "gist-list"}
              (apply dom/select #js {:className "hello"
                                     :title "Select a gist for a good start :-)"
                                     :value (:current-gist-id state)
                                     :onChange handle-select}
                (map (fn [gist]
                       (dom/option
                         #js {:value (gist "id")}
                         (-> (gist "files") keys join-gist-names)))
                     (:gists state))))

            (let [current-gist (state :current-gist)
                  href (if (= current-gist nil) nil (current-gist "html_url"))]
              (if (not (= href nil))
                (dom/a #js {:id "view-orig"
                            :target "_blank"
                            :title "View gist in Github (in a new tab/window)"
                            :href href} (state :current-file-id))))


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

(defn setup-toolbar-listeners
  []
  (let [toolbar-toggler   ($ "toolbar-toggler")
        editor-toggler    ($ "editor-toggler")
        toolbar           ($ "toolbar")
        preview           ($ "preview-container")
        editor            ($ "input")
        preview-toggler   ($ "preview-toggler")]

    (.. js/Rx -Observable
      (fromEvent toolbar-toggler "click")
      (subscribe (fn [] (do (jq-toggle toolbar #(set-state state :toolbar-autohide (not (visible? toolbar))))))))

    (.. js/Rx -Observable
      (fromEvent preview-toggler "click")
      (subscribe #(do
                   (toggle-slide-right preview)
                   )))

    (.. js/Rx -Observable
      (fromEvent editor-toggler "click")
      (subscribe #(toggle-slide-left editor)))


    (.. js/Rx -Observable
      (fromEvent js/document "mousemove")
      (throttle 50)
      (filter (fn [ev] (and (get-state state :toolbar-autohide) (< (.-clientY ev) 28))))
      (subscribe #(slide-down toolbar)))

    (.. js/Rx -Observable
        (fromEvent js/document "mousemove")
        (throttle 50)
        (filter (fn [ev] (and (get-state state :toolbar-autohide) (> (.-clientY ev) 28))))
        (subscribe #(slide-up toolbar)))

    ))

(defn setup-editor-listeners
  []
  (let [editor (get-state state :ace)
        session (.. editor (getSession))]

    (.. js/Rx -Observable
      (create (fn [observer] (.. session (on "change" #(.. observer (onNext))))))
      (throttle 300)
      (subscribe #(set-preview)))

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