(ns mind.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent :refer [atom]]
            [mind.motion :as motion]))

(enable-console-print!)

(defn debugger []
  (js/eval "debugger"))

;; --------------------
(def input-style
  {:outline :none
   :border-right "1px solid #fff"
   :border-bottom "2px solid black"
   :border-top "2px solid #fff"
   :border-left "2px solid #fff"
   :box-sizing :border-box
   :padding "5px"
   :height "26px"})

(defn new-thought-component []
  (let [val (atom "new thought")
        submit-button-focus (atom false)
        thought-input-focus (atom false)]

    (fn [props]
      [:form
       {:on-submit (fn [e]
                     (.preventDefault e)
                     (re-frame.core/dispatch [:add-thought @val])
                     (reset! val ""))}

       [:h1 "new thought"]
       [:input {:type :text
                :value @val
                :on-change #(reset! val (-> % .-target .-value))
                :on-focus #(reset! thought-input-focus true)
                :on-blur #(reset! thought-input-focus false)
                :style input-style}]

       [:button
        {:type :submit
         :on-focus #(reset! submit-button-focus true)
         :on-blur #(reset! submit-button-focus false)
         :style {:outline (if @submit-button-focus "1px solid #333" "1px solid #ddd")
                 :border :none
                 :background-color "#ddd"
                 :color "#333"
                 :text-shadow "1px 1px 1px #fff"
                 :margin-left "20px"
                 :box-sizing :border-box
                 :height "24px"}}
        "create"]])))

(defn thought-component [thought height]
  (let [show-content (atom false)]
    (fn []
      [:div
       {:style {:border-bottom "1px solid black"
                :padding-bottom "5px"
                :padding-top "10px"
                :margin-top "10px"
                :cursor :pointer
                :overflow :hidden
                :height (* height 3.4)
                :width "25vw"}}
       [:div
        {:style {:position :static
                 :display :flex
                 :flex-direction :reverse
                 :justify-content :space-between}}

        [:div
         {:on-click #(re-frame.core/dispatch
                      [:connect-thought (:id thought)])
          :style {:-webkit-user-select :none
                  :font-variant :small-caps
                  :cursor :pointer
                  :order 2
                  :margin-right 15
                  :flex "0 1 auto"}}
         "connect"]

        [:div
         {:on-click #(re-frame.core/dispatch
                      [:remove-thought (:id thought)])
          :style {:-webkit-user-select :none
                  :font-variant :small-caps
                  :cursor :pointer
                  :order 2
                  :flex "0 1 auto"}}
         "remove"]

        [:div
         {:style {:flex "2 1 auto"
                  :order 1
                  :position :relative
                  :display :block}
          :on-mouse-enter #(reset! show-content true)
          :on-mouse-leave #(reset! show-content false)}
         [:span
          {:style {:position :absolute
                   :left -25}}
          (str "{" (:id thought) "}")]

         [:span (str (:title thought))]]

        (when @show-content
          [:div
           {:style {:position :absolute
                    :top "14vw"
                    :width "20vw"
                    :right "20vw"}}
           "Lorem ipsum dolor sit amet, and more freaky content
            multiline? yeah, why not!"])]])))

(defn thoughts-list-component [thoughts]
  [motion/transition-motion
   #_{:defaultStyle {:x 0}
    :style {:x (motion/spring 10)}}
   {:defaultStyles {:x 5}
    :styles {:x (motion/spring 40)}
    :willLeave (fn [key style]
                 (debugger)
                 {:x (motion/spring 20)})
    :willEnter (fn [key]
                 (debugger)
                 {:x (motion/spring 10)})}

   (fn [configs]
     (let [height (.-x configs)]
       (println configs)
       (reagent/create-element
        (reagent/reactify-component
         (fn [] [:div (for [th thoughts]
                        ^{:key (:id th)}
                        [thought-component th height])])))))])

(defn home-panel []
  (let [name (re-frame/subscribe [:name])
        thoughts (re-frame/subscribe [:thoughts])
        search-query (atom "")]

    (fn []
      [:div
       {:style {:font-family :sans-serif
                :width "500px"
                :margin-left "30%"
                :margin-top "5vw"}}
       #_(str "Hello. This is your mind.")
       [:form
        [:label
         [:p "search through your mind"]
         [:input {:type :text
                  :style input-style
                  :on-change (fn [e]
                               (reset! search-query (-> e .-target .-value))
                               (re-frame.core/dispatch
                                [:search-query-change @search-query]))}]]]

       [new-thought-component]
       (thoughts-list-component (doall @thoughts))])))

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
