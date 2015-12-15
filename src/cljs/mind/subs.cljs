(ns mind.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(defn string-contains [string search-string]
  (not= -1 (.indexOf string search-string)))

(re-frame/register-sub
 :name
 (fn [db]
   (reaction (:name @db))))

(re-frame/register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))

(re-frame/register-sub
 :search-query
 (fn [db _]
   (reaction (:search-query @db))))

(re-frame/register-sub
 :thoughts
 (fn [db]
   (let [search-query (reaction (:search-query @db))
         active-thought (reaction (:active-thought @db))]
     (reaction
      (->>
       (:thoughts @db)
       (filter
        (fn [thought]
          (or
           (= @active-thought (:id thought))
           (string-contains (str (:title thought))
                            (str @search-query)))))
       (sort-by :id))))))

(re-frame/register-sub
 :active-thought
 (fn [db _]
   (reaction (:active-thought @db))))

(re-frame/register-sub
 :connections
 (fn [db _]
   (reaction (:connections @db))))
