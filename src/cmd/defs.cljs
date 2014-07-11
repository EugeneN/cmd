(ns cmd.defs)

; dom operation here is a special case!
(def local-motd (.-text (.getElementById js/document "motd")))

(def default-title "C.MD")

(def default-motd-id "58a15db96ca12b952f8e")

(def all-panels #{"t" "e" "p"})