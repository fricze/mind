// Compiled by ClojureScript 0.0-3211 {}
goog.provide('mind.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
mind.routes.hook_browser_navigation_BANG_ = (function mind$routes$hook_browser_navigation_BANG_(){
var G__22294 = (new goog.History());
goog.events.listen(G__22294,goog.history.EventType.NAVIGATE,((function (G__22294){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__22294))
);

G__22294.setEnabled(true);

return G__22294;
});
mind.routes.app_routes = (function mind$routes$app_routes(){
var action__22183__auto___22303 = (function (params__22184__auto__){
if(cljs.core.map_QMARK_.call(null,params__22184__auto__)){
var map__22299 = params__22184__auto__;
var map__22299__$1 = ((cljs.core.seq_QMARK_.call(null,map__22299))?cljs.core.apply.call(null,cljs.core.hash_map,map__22299):map__22299);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22184__auto__)){
var vec__22300 = params__22184__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22183__auto___22303);


var action__22183__auto___22304 = (function (params__22184__auto__){
if(cljs.core.map_QMARK_.call(null,params__22184__auto__)){
var map__22301 = params__22184__auto__;
var map__22301__$1 = ((cljs.core.seq_QMARK_.call(null,map__22301))?cljs.core.apply.call(null,cljs.core.hash_map,map__22301):map__22301);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22184__auto__)){
var vec__22302 = params__22184__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__22183__auto___22304);


return mind.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1445008024879