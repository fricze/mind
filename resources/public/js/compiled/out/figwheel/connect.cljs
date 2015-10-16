(ns figwheel.connect (:require [mind.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/mind.core.mount-root (apply js/mind.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'mind.core/mount-root' is missing"))), :nrepl-port 7888, :build-id "dev"})

