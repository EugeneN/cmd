(ns cmd.plugins.repl.markdown.print
  (:require [cmd.lib.dom :refer [$ html!]]
            [cmd.lib.utils :refer [get-state]]
            [cmd.globals :refer [state]]))


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