(ns mind.layout)

(def input-style
  {:outline :none
   :border-right "1px solid #fff"
   :border-bottom "2px solid black"
   :border-top "2px solid #fff"
   :border-left "2px solid #fff"
   :box-sizing :border-box
   :padding "5px"
   :height "26px"})

(defn button-style [focused]
  {:outline (if focused
              "1px solid #333"
              "1px solid #ddd")
   :border :none
   :background-color "#ddd"
   :color "#333"
   :text-shadow "1px 1px 1px #fff"
   :margin-left "20px"
   :box-sizing :border-box
   :height "24px"})

(defn thought-style [is-active]
  {:font-weight (if is-active
                  600
                  400)
   :padding-bottom "5px"
   :padding-top "10px"
   :margin-top "10px"
   :cursor :pointer
   :overflow :hidden
   :width "25vw"})

(defn _thoughts [quantity active-id]
  (let [pos 40]
    (for [id (range quantity)]
      (let [current-pos (* id pos)]
        {:top (cond
                (= id active-id) 0
                (< id active-id) (+ pos current-pos)
                :else current-pos)}))))

(def thoughts (memoize _thoughts))
