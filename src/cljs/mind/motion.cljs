(ns mind.motion
  (:require [reagent.core :as reagent :refer [atom]]
            [cljsjs.react-motion]))

(def react-motion js/ReactMotion)

(def motion
  (reagent/adapt-react-class (.-Motion react-motion)))
(def staggered-motion
  (reagent/adapt-react-class (.-StaggeredMotion react-motion)))
(def transition-motion
  (reagent/adapt-react-class (.-TransitionMotion react-motion)))

(def spring (.-spring react-motion))
(def presets (.-presets react-motion))

(defn index-of [coll value]
  (some (fn [[idx item]]
          (when (= value item)
            idx))
        (map-indexed vector coll)))

(defn clamp
  [n a b]
  (max (min n b) a))

(defn re-insert
  [xs from to]
  (let [[from to]   [(Math/min from to) (Math/max from to)]
        x           (nth xs from)]
    (vec (concat (subvec xs 0 from)
                 (subvec xs (inc from) (inc to))
                 [x]
                 (subvec xs (inc to))))))
