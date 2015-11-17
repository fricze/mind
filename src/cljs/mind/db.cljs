(ns mind.db
  (:require [reagent.core :as reagent]))

(def default-db
  {:name "re-frame"

   :thoughts [{:title "first one"
               :id 0
               :content "some basic content"}]

   :thought-id 1})
