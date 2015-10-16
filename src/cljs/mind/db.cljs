(ns mind.db
  (:require [reagent.core :as reagent]))


(def default-db
  {:name "re-frame"

   :thoughts [{:content "first one" :id 0}]

   :thought-id 1})
