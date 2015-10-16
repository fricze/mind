// Compiled by ClojureScript 0.0-3211 {}
goog.provide('mind.core');
goog.require('cljs.core');
goog.require('mind.views');
goog.require('mind.routes');
goog.require('mind.subs');
goog.require('mind.handlers');
goog.require('re_frame.core');
goog.require('reagent.core');
mind.core.mount_root = (function mind$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mind.views.main_panel], null),document.getElementById("app"));
});
mind.core.init = (function mind$core$init(){
mind.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return mind.core.mount_root.call(null);
});
goog.exportSymbol('mind.core.init', mind.core.init);

//# sourceMappingURL=core.js.map?rel=1445008501149