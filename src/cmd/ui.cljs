(ns cmd.ui
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [chan close! >! <!]]

            clojure.set
            clojure.string

            [goog.style :as gstyle]

            [cmd.defs :refer [default-title default-motd-id all-panels]]
            [cmd.utils :refer [ html! join-gist-names]]
            [cmd.core :refer [say set-state reset-state get-state process load-gists load-gist create-gist
             save-gist authenticate authenticated-om? error-set? state AppBus get-motd
             find-gist load-initial-content set-location-hash-gist-id set-title set-input
             get-panels-from-location-hash get-gist-id-from-location-hash set-prefs get-prefs
             reset-input-with-motd get-pinned-gists]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]
  ))

(enable-console-print!)
(set! *print-fn* #(.log js/console %))

;; dom section

(defn $ [id-str] (.getElementById js/document id-str))
;(defn visible? [el] (.isElementShown goog.style el))
(defn visible? [el] (.. (js/$ el) (is ":visible")))
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

(defn jq-toggle
  ([el] (.. (js/$ el) (slideToggle 200)))
  ([el complete-cb] (.. (js/$ el) (slideToggle 200 complete-cb))))

;; ui bl section ---------------------------------------------------------------

(defn set-preview []
  (let [ace (get-state state :ace)
        ace-value (.. ace (getSession) (getValue))]
    (process ace-value
             (fn [value]
              (do
                (html! ($ "preview") value)
                ;(js/setTimeout
                ;  #(.Queue js/MathJax.Hub ["Typeset" (.-Hub js/MathJax) "preview"])
                ;  300)
                )))))

(defn handle-pull
  [_]
  (load-gist (get-state state :current-gist-id)))

(defn handle-logout
  [_]
  (do
    (say "Bye, c u l8r :-)")
    (reset-state state)
    (set-prefs "username" nil)
    (set-prefs "auth-token" nil)

    (go (>! AppBus [:user-has-logged-out true]))))

(defn handle-push
  [_]
  (let [ace (get-state state :ace)
        md-raw (.. ace (getSession) (getValue))

        mode (get-state state :mode)]
    (case mode
      :new-gist (let [file-name (.-value ($ "new-gist-name"))
                      new-content {:description file-name :public false :files {(keyword file-name) {:content md-raw}}}]
                  (if (< (count file-name) 4)
                    (say "Bad new gist file name")
                    ;else
                    (create-gist new-content)))
      ;default
      (let [gist-id (get-state state :current-gist-id)
            file-name (get-state state :current-file-id)
            new-content {:description file-name :files {(keyword file-name) {:content md-raw}}}]
        (save-gist gist-id new-content)))))

(defn handle-new-gist
  [ev]
  (let [mode (get-state state :mode)
        new-gist-name-el ($ "new-gist-name")]
    (case mode
      :new-gist ((do
                   (toggle-slide-left new-gist-name-el)
                   (set! (.-value new-gist-name-el) "")
                   (set-state state :mode nil)
                   (reset-input-with-motd)))
      (do
        (toggle-slide-left ($ "new-gist-name"))
        (.. ($ "new-gist-name") (focus))
        (set-state state :mode :new-gist)
        (set-state state :current-gist nil)
        (set-state state :current-gist-id nil)
        (set-state state :current-file-id nil)))))

(defn handle-auth
  [e]
  (let [username (.-value ($ "username"))
        auth-token (.-value ($ "auth-token"))]
    (authenticate username auth-token)
    ))


(defn has-parent
  [el parent]
  (case el
    nil false
    (if (= el parent)
      true
      (has-parent (.-parentNode el) parent))))

(defn setup-toolbar-listeners
  []
  (let [toolbar-toggler   ($ "toolbar-toggler")
        editor-toggler    ($ "editor-toggler")
        console-toggler   ($ "console-toggler")
        info-toggler      ($ "info-toggler")
        toolbar           ($ "toolbar")
        console           ($ "console")
        preview           ($ "preview-container")
        editor            ($ "input")
        preview-toggler   ($ "preview-toggler")]

    (.. js/Rx -Observable
      (fromEvent toolbar-toggler "click")
      (subscribe (fn [] (do (jq-toggle toolbar #(set-state state :toolbar-autohide (not (visible? toolbar))))))))


    (.. js/Rx -Observable
        (fromEvent js/document "click")
        (filter #(not (has-parent (.. % -target) ($ "gist-list")) ))
        (subscribe #(slide-up ($ "gist-list"))))

    (.. js/Rx -Observable
      (fromEvent preview-toggler "click")
      (subscribe #(do
                   (toggle-slide-right preview))))

    (.. js/Rx -Observable
      (fromEvent editor-toggler "click")
      (subscribe #(toggle-slide-left editor)))

    (.. js/Rx -Observable
      (fromEvent info-toggler "click")
      (subscribe #(say (str "No info available currently"))))


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
    
    (.. js/Rx -Observable
      (fromEvent console-toggler "click")
      (subscribe (fn [] (do (jq-toggle console)))))

    ))

(defn setup-editor-listeners
  []
  (let [editor (get-state state :ace)
        session (.. editor (getSession))
        preview-container ($ "preview-container")
        editor-container  ($ "input")
        preview ($ "preview")]

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
      (subscribe #(if (visible? preview-container)
                   (set! (.-scrollTop preview-container) (calc-offset-top-preview %)))))


    (.. js/Rx -Observable
      (fromEvent preview-container "scroll")
      (throttle 15)
      (subscribe #(if (visible? editor-container)
                   (.. session (setScrollTop (calc-offset-top-input (.-scrollTop preview-container)))))))

    ))

(defn setup-ace
  []
  (let [editor  (.. js/ace (edit "input"))
        session (.. editor (getSession))]
    (set-state state :ace editor)
    (.. session (setMode "ace/mode/markdown"))
    (.. session (setUseWrapMode true))))

(defn setup-panels
  []
  (let [x                 (or (get-panels-from-location-hash) all-panels)
        y                 (clojure.set/intersection all-panels x)
        no-flags-set      (= 0 (count y))
        panels-to-hide    (if no-flags-set #{} (clojure.set/difference all-panels y))
        toolbar           ($ "toolbar")
        console           ($ "console")
        preview           ($ "preview-container")
        editor            ($ "input")]
    (if (some #{"t"} panels-to-hide) (hide toolbar))
    (if (some #{"e"} panels-to-hide) (hide editor))
    (if (some #{"p"} panels-to-hide) (hide preview))
    ;(if (and (not no-flags-set) (not (some #{"c"} panels-to-hide))) (jq-toggle console))
  ))

;; ui view section -------------------------------------------------------------

(defn toggle-pin-gist
  [state]
  (let [current-gist-id (@state :current-gist-id)
        is-pinned (contains? (@state :pinned-gists) current-gist-id)]
    (if is-pinned
      (do
        (om/transact! state :pinned-gists (fn [old-pinned]
                                          (clojure.set/difference old-pinned #{current-gist-id})))
        (say (str "Unpinned gist " current-gist-id)))
      (do
        (om/transact! state :pinned-gists (fn [old-pinned]
                                          (clojure.set/union old-pinned #{current-gist-id})))
        (say (str "Pinned gist " current-gist-id))))))

(defn handle-select-panel-click
  [ev]
  (let [gist-id (.. ev -target (getAttribute "data-value"))
        select-panel ($ "gist-list")]
    (do
      (load-gist gist-id)
      (slide-up select-panel))))

(defn gist-list-str
  [gist]
  (-> (gist "files") keys join-gist-names))

(defn valid-query?
  [query]
  (not (or (= query "") (= query nil))))

(defn gist-matches-query?
  [gist query]
  (let [norm-source (-> (str (gist-list-str gist)) (.toLowerCase))
        norm-query (-> query (.toLowerCase))]
    (-> norm-source (.indexOf norm-query) (> -1))))

(defn render-list
  [gists]
  (apply dom/ul #js {:className "select-panel-list"
                     :title "Select a gist for a good start :-)"}
    (map (fn [gist]
          (dom/li
            #js {:data-value (gist "id")
                 :onClick handle-select-panel-click}
            (gist-list-str gist)))
        gists)))

(defn gist-select [state owner]
  (reify
    om/IRender
    (render [_]
      (let [gists (filter (fn [gist]
                            (let [query (:query state)]
                              (if (valid-query? query)
                                (gist-matches-query? gist query)
                                true)))
                          (:gists state))
            latest-created (sort (fn [a b] (> (a "created_at") (b "created_at"))) gists)
            latest-edited (sort (fn [a b] (> (a "updated_at") (b "updated_at"))) gists)
            pinned (sort (fn [a b] (> (gist-list-str a) (gist-list-str b))) (get-pinned-gists state))]

        (dom/div #js {:className "gist-select-container"}

          (dom/div #js {:className: "select-panel"}
                  (dom/div #js {:className "select-panel-title"} "Latest created")
                  (dom/div #js {:className "select-panel-list-wrapper"}
                           (render-list latest-created)))

          (dom/div #js {:className: "select-panel"}
                  (dom/div  #js {:className "select-panel-title"} "Latest edited")
                  (dom/div #js {:className "select-panel-list-wrapper"}
                           (render-list latest-edited)))

          (dom/div #js {:className: "select-panel"}
                  (dom/div  #js {:className "select-panel-title"} "Pinned")
                  (dom/div #js {:className "select-panel-list-wrapper"}
                           (render-list pinned)))
          )))))


(defn toolbar [state owner]
  (reify
    om/IRender
    (render [_]
      (cond
        (authenticated-om? state)
          (dom/div nil
            (dom/img #js {:id "loading-indicator"
                          :src "resources/public/img/loading1.gif"
                          :style (if (> (:active-requests state) 0)
                                   #js {:display "block"}
                                   #js {:display "none"})})

            (dom/button #js {:id "new-gist"
                            :onClick handle-new-gist
                            :className "ios7"} (if (= (:mode state) :new-gist)
                                                                         ":C@NCEL: "
                                                                         ":NEW_G!ST: "))

            (dom/input #js {:type "text"
                            :title "Filename"
                            :style (if (= (:mode state) :new-gist)
                                     #js {:display "inline-block"
                                          :placeholder "Enter a new gist name"}
                                     #js {:display "none" :value "" :placeholder "Enter a new gist name"})
                            :id "new-gist-name"})

            (dom/input #js {:className "ios7"
                            :type "text"
                            :placeholder "Type here to select a gist..."
                            :onChange #(om/transact! state :query (fn [_] (.. % -target -value)))
                            :onClick #(let [panel ($ "gist-list")] (if (visible? panel)
                                                                     (slide-up panel)
                                                                     (slide-down panel)))} "SELECT_G!ST: ")

            (dom/div #js {:id "gist-list"}
              (om/build  gist-select state))

            (let [current-gist (state :current-gist)
                  href (if (nil? current-gist) nil (current-gist "html_url"))]
              (if (nil? href)
                (dom/span #js {:id "warn-no-gist"} "NO_G?ST")
                (dom/a #js {:id "view-orig"
                            :target "_blank"
                            :title "View gist in Github (in a new tab/window)"
                            :href href} (state :current-file-id))))


            (dom/button #js {:id "pull"
                             :title "Reload gist from Github"
                             :disabled (if (nil? (state :current-gist))
                                        true
                                        false)
                             :onClick handle-pull} ">>PULL")
            (dom/button #js {:id "push"
                             :title "Save current gist state to Github"
                             :disabled (if (and (nil? (state :current-gist)) (not (= (state :mode) :new-gist)))
                                        true
                                        false)
                             :onClick handle-push} "PUSH>>")

            (dom/button #js {:id "pin"
                             :title "Pin current gist for this session"
                             :disabled (if (and (nil? (state :current-gist)) (not (= (state :mode) :new-gist)))
                                         true
                                         false)
                             :onClick #(toggle-pin-gist state) } (if (contains? (state :pinned-gists) (state :current-gist-id)) "UNP!N" "P!N"))

            (dom/span #js {:className "toolbar-separator"} "|")

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

(defn console [state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil

        (dom/div #js {:id "msgs-list"}
          (apply dom/ul #js {:className "hello"}
                 (map-indexed (fn [idx msg]
                                (if (= idx 0) (dom/li #js {:className "current-message"}
                                                      (str "> " msg))
                                              (dom/li nil msg)))
                      (reverse (state :messages)))))
      ))))

(defn render-console
  [state]
  (om/root console state {:target ($ "console")}))

(defn subscribe-appbus
  [app-bus]
  (go (loop [[msg payload] (<! app-bus)]
        (case msg
          :user-is-authenticated (case payload
                                   true (do (load-initial-content)
                                            (load-gists))
                                   false (load-initial-content))

          :gist-loaded (let [title (get-state state :current-file-id)
                             gist-id payload]
                         (set-input payload)
                         (set-title title)
                         (set-location-hash-gist-id gist-id))

          :user-has-logged-out (reset-input-with-motd)

          :motd-loaded (reset-input-with-motd)

          :gists-loaded (let [[hash-gist & _] (find-gist state (get-gist-id-from-location-hash))]
                          (if (not (nil? hash-gist))
                            (load-gist (hash-gist "id"))))

          :new-console-msg (let [console ($ "console")]
                             (if (not (visible? console))
                               (do
                                 (jq-toggle console)
                                 (js/setTimeout #(jq-toggle console) 2000))))

          :reload-gists (load-gists)

          (say (str "Unknown message from AppBus: " msg " : " payload)))

        (recur (<! app-bus)))))

; main section -----------------------------------------------------------------

(defn main
  [state app-bus]
  (let [username (get-prefs "username")
        auth-token (get-prefs "auth-token")
        last-opened-gist-id (get-prefs "last-gist")]

    (subscribe-appbus app-bus)

    (let [worker (new js/Worker "resources/public/js/worker.js")]
      (set-state state :worker worker))

    (setup-ace)
    (setup-editor-listeners)
    (setup-toolbar-listeners)

    (authenticate username auth-token)

    (render-toolbar state)

    (render-console state)

    (setup-panels)

    (say "Welcome to CMD :-)")

    ))

; Entry point ------------------------------------------------------------------
(main state AppBus)