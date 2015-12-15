(ns mind.core
  (:require [reagent.core :as reagent]
            [re-frame.core]
            [mind.handlers]
            [mind.subs]
            [mind.routes :as routes]
            [mind.views :as views]))

(enable-console-print!)

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "mind")))

(defn ^:export init []
  (println "initłem")
  ;; (routes/app-routes)
  (re-frame.core/dispatch-sync [:initialize-db])
  (mount-root))

