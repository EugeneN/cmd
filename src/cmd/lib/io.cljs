(ns cmd.lib.io
  (:require [goog.net.XhrIo :as io]
            [cljs.core.async :refer [chan close! >! <!]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]))

(defn auth-param-strict [username auth-token]
  (js-obj "Authorization" (str "Basic " auth-token)
          "Content-Type" "application/json"))

(defn auth-param-anon [] (js-obj "Content-Type" "application/json"))

(defn auth-param-fallback [username auth-token]
  (if (nil? auth-token)
    (auth-param-anon)
    (auth-param-strict username auth-token)))

(def active-requests (atom 0))

(defn active+1 [] (swap! active-requests inc))
(defn active-1 [] (swap! active-requests dec))

(defn resp-handler
  [ch event]
  (let [error-code (-> event .-target .getLastErrorCode)
        res (-> event .-target .getResponseText)]
    (active-1)
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
    (do
      (active+1)
      (io/send (api-url url)
             (partial resp-handler ch)
             "GET"
             nil
             auth-param))
    ch))

(defn DELETE [url auth-param]
  (let [ch (chan 1)]
    (do
      (active+1)
      (io/send (api-url url)
             (partial resp-handler ch)
             "DELETE"
             nil
             auth-param))
    ch))

(defn POST [url data auth-param]
  (let [ch (chan 1)]
    (active+1)
    (io/send (api-url url)
             (partial resp-handler ch)
             "POST"
             (.serialize (goog.json.Serializer.) (clj->js data))
             auth-param)
    ch))

(defn PATCH [url data auth-param]
  (let [ch (chan 1)]
    (active+1)
    (io/send (api-url url)
             (partial resp-handler ch)
             "PATCH"
             (.serialize (goog.json.Serializer.) (clj->js data))
             auth-param)
    ch))
