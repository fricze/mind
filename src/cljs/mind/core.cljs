(ns mind.core
  (:require [reagent.core :as reagent]
            [re-frame.core]
            [mind.handlers]
            [mind.subs]
            [mind.routes :as routes]
            [mind.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame.core/dispatch-sync [:initialize-db])
  (mount-root))
