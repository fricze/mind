(ns mind.db
  (:require [reagent.core :as reagent]))

(def default-db
  {:name "re-frame"

   :thoughts [{:title "first one"
               :id 0}]

   :thought-id 1

   :connections #{}})
