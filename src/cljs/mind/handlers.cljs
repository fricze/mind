(ns mind.handlers
  (:require [re-frame.core :as re-frame]
            [mind.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/register-handler
 :add-thought
 (fn [db [_ thought]]
   (let [new-id (:thought-id db)]
     (assoc db
            :thoughts (conj (:thoughts db) {:content thought :id new-id})
            :thought-id (inc new-id)))))
