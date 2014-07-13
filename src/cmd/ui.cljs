(ns cmd.ui
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [chan close! >! <!]]
            [cmd.lib.dom :refer [$ toggle hide slide-up slide-down toggle-slide-right
                                 toggle-slide-left visible? ]]

            clojure.set

            [cmd.defs :refer [default-title default-motd-id all-panels]]
            [cmd.lib.utils :refer [say reset-state set-state get-state]]
            [cmd.globals :refer [state AppBus]]
            [cmd.utils :refer [ html! join-gist-names setcookie getcookie]]
            [cmd.core :refer [ process load-gists load-gist create-gist
             save-gist authenticate authenticated-om? error-set? state AppBus get-motd
             find-gist load-initial-content set-location-hash-gist-id set-title set-input
             get-panels-from-location-hash get-gist-id-from-location-hash
             reset-input-with-motd]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]
  ))

(enable-console-print!)
(set! *print-fn* #(.log js/console %))

;; dom section



;; ui bl section ---------------------------------------------------------------

(defn handle-logout
  [_]
  (do
    (say "Bye, c u l8r :-)")
    (reset-state state)
    (setcookie "username" "")
    (setcookie "auth-token" "")

    (go (>! AppBus [:user-has-logged-out true]))))

(defn handle-auth
  [e]
  (let [username (.-value ($ "username"))
        auth-token (.-value ($ "auth-token"))]
    (authenticate username auth-token)
    ))

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
      (subscribe (fn [] (do (toggle toolbar #(set-state state :toolbar-autohide (not (visible? toolbar))))))))

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
      (subscribe (fn [] (do (toggle console)))))

    ))

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
    ;(if (and (not no-flags-set) (not (some #{"c"} panels-to-hide))) (toggle console))
  ))

;; ui view section -------------------------------------------------------------

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
                             (do
                               (set-state state :messages (conj (get-state state :messages) msg))
                               (if (not (visible? console))
                                 (do
                                   (toggle console)
                                   (js/setTimeout #(toggle console) 2000)))))

          (say (str "Unknown message from AppBus: " msg " : " payload)))

        (recur (<! app-bus)))))

; main section -----------------------------------------------------------------

(defn main
  [state app-bus]
  (let [username (getcookie "username")
        auth-token (getcookie "auth-token")
        last-opened-gist-id (getcookie "last-gist")]

    (subscribe-appbus app-bus)

    (let [worker (new js/Worker "resources/public/js/worker.js")]
      (set-state state :worker worker))

    (let [repls (get-repl-plugins)
          default-repl xxx
          current-repl (current-repl/get-repl app-bus state [input toolbar])]

      (. current-repl (loop))
      )



    ;(setup-ace)
    ;(setup-editor-listeners)
    (setup-toolbar-listeners)

    (authenticate username auth-token)

    (render-toolbar state)
    (render-console state)

    (setup-panels)
    (say "Welcome to CMD :-)")

    ))

; Entry point ------------------------------------------------------------------
(main state AppBus)