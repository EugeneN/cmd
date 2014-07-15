(defproject cmd "0.1.0-SNAPSHOT"
  :description "cmd"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/google-closure-library-third-party "0.0-20130212-95c19e7f0f5f"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [org.clojure/core.match "0.2.1"]
                 [servant "0.1.3"]
;                 [sablono "0.2.14"]
                 [alandipert/storage-atom "1.2.3"]
                 [om "0.6.1"]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :source-paths ["src"]
  :profiles {:dev {:source-paths ["src"]
                   :cljsbuild    {:builds [{:id           "cmd"
                                            :source-paths ["src"]
                                            :compiler     {:output-to     "resources/public/js/cmd/cmd.js"
                                                           :output-dir    "resources/public/js/cmd"
                                                           :optimizations :none
                                                           :source-map    true}}]}}}
  :aliases {"build" ["do" ["clean"] ["cljsbuild" "once"]]})

