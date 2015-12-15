(ns mind.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent :refer [atom]]
            [mind.motion :as motion]
            [mind.layout :as layout]))

(enable-console-print!)

(defn debugger []
  (js/eval "debugger"))

;; --------------------
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
                :style layout/input-style}]

       [:button
        {:type :submit
         :on-focus #(reset! submit-button-focus true)
         :on-blur #(reset! submit-button-focus false)
         :style (layout/button-style @submit-button-focus)}
        "create"]])))

(defn thought-component [{thought :data layout :layout}
                         active-thought
                         connections]
  (let [show-content (atom false)
        is-active (= (:id thought) active-thought)
        is-connected-with-active
        (seq (filter #{#{(:id thought) active-thought}} connections))]

    [:div
     {:style (layout/thought-style is-active)}

     [:div
      {:style {:position :absolute
               :top (:top layout)
               :display :flex
               :flex-direction :reverse
               :transition "500ms top ease-in-out"
               :flex-wrap :wrap
               :justify-content :flex-start}}

      [:div
       {:on-click #(re-frame.core/dispatch
                    [:activate-thought (:id thought)])
        :style {:-webkit-user-select :none
                :font-variant :small-caps
                :cursor :pointer
                :order 2
                :margin-right 15
                :flex "0 1 auto"}}
       "focus"]

      (when-not is-active [:div
                           {:on-click #(re-frame.core/dispatch
                                        [:connect-thought
                                         (:id thought)
                                         active-thought])
                            :style {:-webkit-user-select :none
                                    :font-variant :small-caps
                                    :cursor :pointer
                                    :order 2
                                    :flex "0 1 auto"
                                    :font-weight (if is-connected-with-active
                                                   700
                                                   400)}}
                           "connect"])

      (when is-active [:div
                       {:on-click #(re-frame.core/dispatch
                                    [:remove-thought (:id thought)])
                        :style {:-webkit-user-select :none
                                :font-variant :small-caps
                                :cursor :pointer
                                :order 2
                                :flex "0 1 auto"}}
                       "remove"])

      [:div
       {:style {:flex "0 1 auto"
                :order 1
                :position :relative
                :margin-right 15
                :display :inline-block}
        :on-mouse-enter #(reset! show-content true)
        :on-mouse-leave #(reset! show-content false)}

       [:span (str (:title thought))]]

      (when #_@show-content false
            [:div
             {:style {:flex "3 1 auto"
                      :order 2
                      :cursor :text
                      :margin-top 10}}
             "Lorem ipsum dolor sit amet, and more freaky content
            multiline? yeah, why not!"])]]))

(defn thoughts-list-component [thoughts]
  (let [thoughts (doall @thoughts)
        active-thought (re-frame/subscribe [:active-thought])
        active-thought @active-thought
        connections (re-frame/subscribe [:connections])
        connections @connections
        active-shown (seq (filter #(= (:id %) active-thought) thoughts))
        thoughts-number (count thoughts)
        current-layout (layout/thoughts thoughts (if active-shown
                                                   active-thought
                                                   -1))]

    [:div
     {:style {:display :inline-block
              :top 20
              :position :relative}}

     (map (fn [component]
            ^{:key (:title (:data component))}
            [thought-component component active-thought connections])
          current-layout)]))

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
       [:form
        [:label
         [:p
          {:style {:display :inline-block
                   :margin-right 5
                   :position :relative
                   :top 2}}
          "search through your mind"]
         [:input {:type :text
                  :style layout/input-style
                  :on-change (fn [e]
                               (reset! search-query (-> e .-target .-value))
                               (re-frame.core/dispatch
                                [:search-query-change @search-query]))}]]]

       [new-thought-component]

       [thoughts-list-component thoughts]])))

;; --------------------

(defmulti panels identity)

(defmethod panels :home-panel [] [home-panel])
(defmethod panels :default [] [:div])

(defn main-panel []
  (home-panel)
  #_(let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      (panels @active-panel))))
