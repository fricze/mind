// Compiled by ClojureScript 0.0-3211 {}
goog.provide('mind.handlers');
goog.require('cljs.core');
goog.require('mind.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return mind.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__23417){
var vec__23418 = p__23417;
var _ = cljs.core.nth.call(null,vec__23418,(0),null);
var active_panel = cljs.core.nth.call(null,vec__23418,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-thought","add-thought",1065665845),(function (db,p__23419){
var vec__23420 = p__23419;
var _ = cljs.core.nth.call(null,vec__23420,(0),null);
var thought = cljs.core.nth.call(null,vec__23420,(1),null);
var new_id = new cljs.core.Keyword(null,"thought-id","thought-id",-1135367546).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"thoughts","thoughts",1862571083),cljs.core.conj.call(null,new cljs.core.Keyword(null,"thoughts","thoughts",1862571083).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),thought,new cljs.core.Keyword(null,"id","id",-1388402092),new_id], null)),new cljs.core.Keyword(null,"thought-id","thought-id",-1135367546),(new_id + (1)));
}));

//# sourceMappingURL=handlers.js.map?rel=1445010645460