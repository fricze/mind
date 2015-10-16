// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('mind.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__22234__delegate = function (x){
if(cljs.core.truth_(mind.core.mount_root)){
return cljs.core.apply.call(null,mind.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'mind.core/mount-root' is missing");
}
};
var G__22234 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__22235__i = 0, G__22235__a = new Array(arguments.length -  0);
while (G__22235__i < G__22235__a.length) {G__22235__a[G__22235__i] = arguments[G__22235__i + 0]; ++G__22235__i;}
  x = new cljs.core.IndexedSeq(G__22235__a,0);
} 
return G__22234__delegate.call(this,x);};
G__22234.cljs$lang$maxFixedArity = 0;
G__22234.cljs$lang$applyTo = (function (arglist__22236){
var x = cljs.core.seq(arglist__22236);
return G__22234__delegate(x);
});
G__22234.cljs$core$IFn$_invoke$arity$variadic = G__22234__delegate;
return G__22234;
})()
,new cljs.core.Keyword(null,"nrepl-port","nrepl-port",672044751),(7888),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1445009168555