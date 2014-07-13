(ns cmd.globals
  (:require [cljs.core.async  :refer [chan close! >! <!]])
  (:require-macros [cljs.core.async.macros   :refer [go alt!]]))

; State:
; {
;   :ace
;   :gists
;   :current-gist
;   :current-gist-id
;   :current-file-id
;   :error
;   :worker
;   :toolbar-autohide
;   :mode [:new-gist :edit-gist nil]
;   :motd
;   :active-requests
;   :messages
; }
(def state (atom {:active-requests 0
                  :messages []
                  :plugins []}))

; AppBus
; [
;  :user-is-authenticated
;  :gist-loaded
;  :user-has-logged-out
;  :motd-loaded
;  :gists-loaded
;  :new-console-msg
; ]
(def AppBus (chan 1))
