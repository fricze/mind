(ns mind.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent :refer [atom]]
            [garden.core :refer [css]]))


(enable-console-print!)

;; --------------------
(defn new-thought-component []
  (let [val (atom "new thought")]

    (fn [props]
      [:form
       {:on-submit (fn []
                     (re-frame.core/dispatch [:add-thought @val])
                     (reset! val ""))}
       [:h1 "new thought"]
       [:input {:type :text
                :value @val
                :on-change #(reset! val (-> % .-target .-value))}]
       [:button
        {:type :submit}
        "create"]])))

(defn thought-component [thought]
  [:div
   {:style {:border-bottom "1px solid black"
            :padding-bottom "10px"
            :width "300px"}}
   (str thought)])

(defn home-panel []
  (let [name (re-frame/subscribe [:name])
        thoughts (re-frame/subscribe [:thoughts])]

    (fn []
      [:div (str "Hello. This is your mind.")

       [new-thought-component]

       (for [th @thoughts]
         ^{:key (:id th)}
         [:div (thought-component (:content th))])])))

(defn about-panel []
  (fn []
    [:div
     "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))

;; --------------------

(defmulti panels identity)

(defmethod panels :home-panel [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      (panels @active-panel))))

(defn lister [items]
  [:ul
   (for [item items]
     ^{:key item} [:li "Item " item])])

(defn lister-user []
  [:div
   "Here is a list:"
   [lister (range 3)]])
