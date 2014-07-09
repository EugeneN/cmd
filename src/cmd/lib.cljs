(ns cmd.lib

  (:require [goog.net.XhrIo :as io]
            [cljs.core.async :refer [chan close! >! <!]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]))

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
