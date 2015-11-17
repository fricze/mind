(ns mind.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :name
 (fn [db]
   (reaction (:name @db))))

(re-frame/register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))

(re-frame/register-sub
 :thoughts
 (fn [db]
   (let [search-query (reaction (:search-query @db))]
     (reaction (->>
                (:thoughts @db)
                (filter
                 #(re-find (js.RegExp. (str @search-query))
                           (str (:title %))))
                (sort-by :id))))))

