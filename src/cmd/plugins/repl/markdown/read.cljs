(ns cmd.plugins.markdown.read
  (:refer [cmd.lib.utils :refer [get-state set-state say]]
          [cmd.globals :refer [state]]

          [cmd.lib.dom :refer [$ toggle-slide-left]]
          [cmd.plugins.markdown.core :refer [reset-input-with-motd load-gist save-gist create-gist]]
          [cljs.core.async  :refer [chan close! >! <!]])

  (:require-macros [cljs.core.async.macros   :refer [go alt!]]))


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
                    (say "Bad new gist file name")
                    ;else
                    (create-gist new-content)))
      ;default
      (let [gist-id (get-state state :current-gist-id)
            file-name (get-state state :current-file-id)
            new-content {:description file-name :files {(keyword file-name) {:content md-raw}}}]
        (save-gist gist-id new-content)))))

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
                   (reset-input-with-motd)))
      (do
        (toggle-slide-left ($ "new-gist-name"))
        (.. ($ "new-gist-name") (focus))
        (set-state state :mode :new-gist)
        (set-state state :current-gist nil)
        (set-state state :current-gist-id nil)
        (set-state state :current-file-id nil)))))

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

