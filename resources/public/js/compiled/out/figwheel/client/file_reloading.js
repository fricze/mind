// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29658_SHARP_,p2__29659_SHARP_){
var and__18148__auto__ = p1__29658_SHARP_;
if(cljs.core.truth_(and__18148__auto__)){
return p2__29659_SHARP_;
} else {
return and__18148__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18160__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18160__auto__){
return or__18160__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18160__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18160__auto__){
return or__18160__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18160__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29660){
var map__29661 = p__29660;
var map__29661__$1 = ((cljs.core.seq_QMARK_.call(null,map__29661))?cljs.core.apply.call(null,cljs.core.hash_map,map__29661):map__29661);
var file = cljs.core.get.call(null,map__29661__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29662){
var map__29663 = p__29662;
var map__29663__$1 = ((cljs.core.seq_QMARK_.call(null,map__29663))?cljs.core.apply.call(null,cljs.core.hash_map,map__29663):map__29663);
var namespace = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29664){if((e29664 instanceof Error)){
var e = e29664;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29664;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29666 = arguments.length;
switch (G__29666) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29668,callback){
var map__29670 = p__29668;
var map__29670__$1 = ((cljs.core.seq_QMARK_.call(null,map__29670))?cljs.core.apply.call(null,cljs.core.hash_map,map__29670):map__29670);
var file_msg = map__29670__$1;
var request_url = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29670,map__29670__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29670,map__29670__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29671){
var map__29673 = p__29671;
var map__29673__$1 = ((cljs.core.seq_QMARK_.call(null,map__29673))?cljs.core.apply.call(null,cljs.core.hash_map,map__29673):map__29673);
var file_msg = map__29673__$1;
var meta_data = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18160__auto__ = meta_data;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18148__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18148__auto__){
var or__18160__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto____$1)){
return or__18160__auto____$1;
} else {
var and__18148__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18148__auto____$1){
var or__18160__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18160__auto____$2){
return or__18160__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18148__auto____$1;
}
}
}
} else {
return and__18148__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29674,callback){
var map__29676 = p__29674;
var map__29676__$1 = ((cljs.core.seq_QMARK_.call(null,map__29676))?cljs.core.apply.call(null,cljs.core.hash_map,map__29676):map__29676);
var file_msg = map__29676__$1;
var namespace = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21384__auto___29763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___29763,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___29763,out){
return (function (state_29745){
var state_val_29746 = (state_29745[(1)]);
if((state_val_29746 === (7))){
var inst_29729 = (state_29745[(7)]);
var inst_29735 = (state_29745[(2)]);
var inst_29736 = cljs.core.async.put_BANG_.call(null,out,inst_29735);
var inst_29725 = inst_29729;
var state_29745__$1 = (function (){var statearr_29747 = state_29745;
(statearr_29747[(8)] = inst_29725);

(statearr_29747[(9)] = inst_29736);

return statearr_29747;
})();
var statearr_29748_29764 = state_29745__$1;
(statearr_29748_29764[(2)] = null);

(statearr_29748_29764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (6))){
var inst_29741 = (state_29745[(2)]);
var state_29745__$1 = state_29745;
var statearr_29749_29765 = state_29745__$1;
(statearr_29749_29765[(2)] = inst_29741);

(statearr_29749_29765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (5))){
var inst_29739 = cljs.core.async.close_BANG_.call(null,out);
var state_29745__$1 = state_29745;
var statearr_29750_29766 = state_29745__$1;
(statearr_29750_29766[(2)] = inst_29739);

(statearr_29750_29766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (4))){
var inst_29728 = (state_29745[(10)]);
var inst_29733 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29728);
var state_29745__$1 = state_29745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29745__$1,(7),inst_29733);
} else {
if((state_val_29746 === (3))){
var inst_29743 = (state_29745[(2)]);
var state_29745__$1 = state_29745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29745__$1,inst_29743);
} else {
if((state_val_29746 === (2))){
var inst_29725 = (state_29745[(8)]);
var inst_29728 = (state_29745[(10)]);
var inst_29728__$1 = cljs.core.nth.call(null,inst_29725,(0),null);
var inst_29729 = cljs.core.nthnext.call(null,inst_29725,(1));
var inst_29730 = (inst_29728__$1 == null);
var inst_29731 = cljs.core.not.call(null,inst_29730);
var state_29745__$1 = (function (){var statearr_29751 = state_29745;
(statearr_29751[(7)] = inst_29729);

(statearr_29751[(10)] = inst_29728__$1);

return statearr_29751;
})();
if(inst_29731){
var statearr_29752_29767 = state_29745__$1;
(statearr_29752_29767[(1)] = (4));

} else {
var statearr_29753_29768 = state_29745__$1;
(statearr_29753_29768[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (1))){
var inst_29723 = cljs.core.nth.call(null,files,(0),null);
var inst_29724 = cljs.core.nthnext.call(null,files,(1));
var inst_29725 = files;
var state_29745__$1 = (function (){var statearr_29754 = state_29745;
(statearr_29754[(8)] = inst_29725);

(statearr_29754[(11)] = inst_29723);

(statearr_29754[(12)] = inst_29724);

return statearr_29754;
})();
var statearr_29755_29769 = state_29745__$1;
(statearr_29755_29769[(2)] = null);

(statearr_29755_29769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21384__auto___29763,out))
;
return ((function (switch__21322__auto__,c__21384__auto___29763,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____0 = (function (){
var statearr_29759 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29759[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__);

(statearr_29759[(1)] = (1));

return statearr_29759;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____1 = (function (state_29745){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29760){if((e29760 instanceof Object)){
var ex__21326__auto__ = e29760;
var statearr_29761_29770 = state_29745;
(statearr_29761_29770[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29771 = state_29745;
state_29745 = G__29771;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__ = function(state_29745){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____1.call(this,state_29745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___29763,out))
})();
var state__21386__auto__ = (function (){var statearr_29762 = f__21385__auto__.call(null);
(statearr_29762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___29763);

return statearr_29762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___29763,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29772,p__29773){
var map__29776 = p__29772;
var map__29776__$1 = ((cljs.core.seq_QMARK_.call(null,map__29776))?cljs.core.apply.call(null,cljs.core.hash_map,map__29776):map__29776);
var opts = map__29776__$1;
var url_rewriter = cljs.core.get.call(null,map__29776__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29777 = p__29773;
var map__29777__$1 = ((cljs.core.seq_QMARK_.call(null,map__29777))?cljs.core.apply.call(null,cljs.core.hash_map,map__29777):map__29777);
var file_msg = map__29777__$1;
var file = cljs.core.get.call(null,map__29777__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29778){
var map__29781 = p__29778;
var map__29781__$1 = ((cljs.core.seq_QMARK_.call(null,map__29781))?cljs.core.apply.call(null,cljs.core.hash_map,map__29781):map__29781);
var file = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18148__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18148__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18148__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29782){var e = e29782;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29787,p__29788){
var map__29990 = p__29787;
var map__29990__$1 = ((cljs.core.seq_QMARK_.call(null,map__29990))?cljs.core.apply.call(null,cljs.core.hash_map,map__29990):map__29990);
var opts = map__29990__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29990__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29990__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29990__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29991 = p__29788;
var map__29991__$1 = ((cljs.core.seq_QMARK_.call(null,map__29991))?cljs.core.apply.call(null,cljs.core.hash_map,map__29991):map__29991);
var msg = map__29991__$1;
var files = cljs.core.get.call(null,map__29991__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function (state_30116){
var state_val_30117 = (state_30116[(1)]);
if((state_val_30117 === (7))){
var inst_30004 = (state_30116[(7)]);
var inst_30006 = (state_30116[(8)]);
var inst_30005 = (state_30116[(9)]);
var inst_30003 = (state_30116[(10)]);
var inst_30011 = cljs.core._nth.call(null,inst_30004,inst_30006);
var inst_30012 = figwheel.client.file_reloading.eval_body.call(null,inst_30011);
var inst_30013 = (inst_30006 + (1));
var tmp30118 = inst_30004;
var tmp30119 = inst_30005;
var tmp30120 = inst_30003;
var inst_30003__$1 = tmp30120;
var inst_30004__$1 = tmp30118;
var inst_30005__$1 = tmp30119;
var inst_30006__$1 = inst_30013;
var state_30116__$1 = (function (){var statearr_30121 = state_30116;
(statearr_30121[(7)] = inst_30004__$1);

(statearr_30121[(8)] = inst_30006__$1);

(statearr_30121[(9)] = inst_30005__$1);

(statearr_30121[(11)] = inst_30012);

(statearr_30121[(10)] = inst_30003__$1);

return statearr_30121;
})();
var statearr_30122_30191 = state_30116__$1;
(statearr_30122_30191[(2)] = null);

(statearr_30122_30191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (20))){
var inst_30053 = (state_30116[(12)]);
var inst_30055 = (state_30116[(13)]);
var inst_30052 = (state_30116[(14)]);
var inst_30049 = (state_30116[(15)]);
var inst_30048 = (state_30116[(16)]);
var inst_30058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30060 = (function (){var files_not_loaded = inst_30055;
var res = inst_30053;
var res_SINGLEQUOTE_ = inst_30052;
var files_SINGLEQUOTE_ = inst_30049;
var all_files = inst_30048;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30053,inst_30055,inst_30052,inst_30049,inst_30048,inst_30058,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function (p__30059){
var map__30123 = p__30059;
var map__30123__$1 = ((cljs.core.seq_QMARK_.call(null,map__30123))?cljs.core.apply.call(null,cljs.core.hash_map,map__30123):map__30123);
var file = cljs.core.get.call(null,map__30123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__30123__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30053,inst_30055,inst_30052,inst_30049,inst_30048,inst_30058,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
})();
var inst_30061 = cljs.core.map.call(null,inst_30060,inst_30053);
var inst_30062 = cljs.core.pr_str.call(null,inst_30061);
var inst_30063 = figwheel.client.utils.log.call(null,inst_30062);
var inst_30064 = (function (){var files_not_loaded = inst_30055;
var res = inst_30053;
var res_SINGLEQUOTE_ = inst_30052;
var files_SINGLEQUOTE_ = inst_30049;
var all_files = inst_30048;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30053,inst_30055,inst_30052,inst_30049,inst_30048,inst_30058,inst_30060,inst_30061,inst_30062,inst_30063,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30053,inst_30055,inst_30052,inst_30049,inst_30048,inst_30058,inst_30060,inst_30061,inst_30062,inst_30063,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
})();
var inst_30065 = setTimeout(inst_30064,(10));
var state_30116__$1 = (function (){var statearr_30124 = state_30116;
(statearr_30124[(17)] = inst_30063);

(statearr_30124[(18)] = inst_30058);

return statearr_30124;
})();
var statearr_30125_30192 = state_30116__$1;
(statearr_30125_30192[(2)] = inst_30065);

(statearr_30125_30192[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (27))){
var inst_30075 = (state_30116[(19)]);
var state_30116__$1 = state_30116;
var statearr_30126_30193 = state_30116__$1;
(statearr_30126_30193[(2)] = inst_30075);

(statearr_30126_30193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (1))){
var inst_29995 = (state_30116[(20)]);
var inst_29992 = before_jsload.call(null,files);
var inst_29993 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29994 = (function (){return ((function (inst_29995,inst_29992,inst_29993,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function (p1__29783_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29783_SHARP_);
});
;})(inst_29995,inst_29992,inst_29993,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
})();
var inst_29995__$1 = cljs.core.filter.call(null,inst_29994,files);
var inst_29996 = cljs.core.not_empty.call(null,inst_29995__$1);
var state_30116__$1 = (function (){var statearr_30127 = state_30116;
(statearr_30127[(21)] = inst_29992);

(statearr_30127[(20)] = inst_29995__$1);

(statearr_30127[(22)] = inst_29993);

return statearr_30127;
})();
if(cljs.core.truth_(inst_29996)){
var statearr_30128_30194 = state_30116__$1;
(statearr_30128_30194[(1)] = (2));

} else {
var statearr_30129_30195 = state_30116__$1;
(statearr_30129_30195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (24))){
var state_30116__$1 = state_30116;
var statearr_30130_30196 = state_30116__$1;
(statearr_30130_30196[(2)] = null);

(statearr_30130_30196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (4))){
var inst_30040 = (state_30116[(2)]);
var inst_30041 = (function (){return ((function (inst_30040,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function (p1__29784_SHARP_){
var and__18148__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29784_SHARP_);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29784_SHARP_));
} else {
return and__18148__auto__;
}
});
;})(inst_30040,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
})();
var inst_30042 = cljs.core.filter.call(null,inst_30041,files);
var state_30116__$1 = (function (){var statearr_30131 = state_30116;
(statearr_30131[(23)] = inst_30040);

(statearr_30131[(24)] = inst_30042);

return statearr_30131;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30132_30197 = state_30116__$1;
(statearr_30132_30197[(1)] = (16));

} else {
var statearr_30133_30198 = state_30116__$1;
(statearr_30133_30198[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (15))){
var inst_30030 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
var statearr_30134_30199 = state_30116__$1;
(statearr_30134_30199[(2)] = inst_30030);

(statearr_30134_30199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (21))){
var state_30116__$1 = state_30116;
var statearr_30135_30200 = state_30116__$1;
(statearr_30135_30200[(2)] = null);

(statearr_30135_30200[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (31))){
var inst_30083 = (state_30116[(25)]);
var inst_30093 = (state_30116[(2)]);
var inst_30094 = cljs.core.not_empty.call(null,inst_30083);
var state_30116__$1 = (function (){var statearr_30136 = state_30116;
(statearr_30136[(26)] = inst_30093);

return statearr_30136;
})();
if(cljs.core.truth_(inst_30094)){
var statearr_30137_30201 = state_30116__$1;
(statearr_30137_30201[(1)] = (32));

} else {
var statearr_30138_30202 = state_30116__$1;
(statearr_30138_30202[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (32))){
var inst_30083 = (state_30116[(25)]);
var inst_30096 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30083);
var inst_30097 = cljs.core.pr_str.call(null,inst_30096);
var inst_30098 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30097)].join('');
var inst_30099 = figwheel.client.utils.log.call(null,inst_30098);
var state_30116__$1 = state_30116;
var statearr_30139_30203 = state_30116__$1;
(statearr_30139_30203[(2)] = inst_30099);

(statearr_30139_30203[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (33))){
var state_30116__$1 = state_30116;
var statearr_30140_30204 = state_30116__$1;
(statearr_30140_30204[(2)] = null);

(statearr_30140_30204[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (13))){
var inst_30016 = (state_30116[(27)]);
var inst_30020 = cljs.core.chunk_first.call(null,inst_30016);
var inst_30021 = cljs.core.chunk_rest.call(null,inst_30016);
var inst_30022 = cljs.core.count.call(null,inst_30020);
var inst_30003 = inst_30021;
var inst_30004 = inst_30020;
var inst_30005 = inst_30022;
var inst_30006 = (0);
var state_30116__$1 = (function (){var statearr_30141 = state_30116;
(statearr_30141[(7)] = inst_30004);

(statearr_30141[(8)] = inst_30006);

(statearr_30141[(9)] = inst_30005);

(statearr_30141[(10)] = inst_30003);

return statearr_30141;
})();
var statearr_30142_30205 = state_30116__$1;
(statearr_30142_30205[(2)] = null);

(statearr_30142_30205[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (22))){
var inst_30055 = (state_30116[(13)]);
var inst_30068 = (state_30116[(2)]);
var inst_30069 = cljs.core.not_empty.call(null,inst_30055);
var state_30116__$1 = (function (){var statearr_30143 = state_30116;
(statearr_30143[(28)] = inst_30068);

return statearr_30143;
})();
if(cljs.core.truth_(inst_30069)){
var statearr_30144_30206 = state_30116__$1;
(statearr_30144_30206[(1)] = (23));

} else {
var statearr_30145_30207 = state_30116__$1;
(statearr_30145_30207[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (36))){
var state_30116__$1 = state_30116;
var statearr_30146_30208 = state_30116__$1;
(statearr_30146_30208[(2)] = null);

(statearr_30146_30208[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (29))){
var inst_30084 = (state_30116[(29)]);
var inst_30087 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30084);
var inst_30088 = cljs.core.pr_str.call(null,inst_30087);
var inst_30089 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30088)].join('');
var inst_30090 = figwheel.client.utils.log.call(null,inst_30089);
var state_30116__$1 = state_30116;
var statearr_30147_30209 = state_30116__$1;
(statearr_30147_30209[(2)] = inst_30090);

(statearr_30147_30209[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (6))){
var inst_30037 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
var statearr_30148_30210 = state_30116__$1;
(statearr_30148_30210[(2)] = inst_30037);

(statearr_30148_30210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (28))){
var inst_30084 = (state_30116[(29)]);
var inst_30081 = (state_30116[(2)]);
var inst_30082 = cljs.core.get.call(null,inst_30081,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30083 = cljs.core.get.call(null,inst_30081,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30084__$1 = cljs.core.get.call(null,inst_30081,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30085 = cljs.core.not_empty.call(null,inst_30084__$1);
var state_30116__$1 = (function (){var statearr_30149 = state_30116;
(statearr_30149[(25)] = inst_30083);

(statearr_30149[(30)] = inst_30082);

(statearr_30149[(29)] = inst_30084__$1);

return statearr_30149;
})();
if(cljs.core.truth_(inst_30085)){
var statearr_30150_30211 = state_30116__$1;
(statearr_30150_30211[(1)] = (29));

} else {
var statearr_30151_30212 = state_30116__$1;
(statearr_30151_30212[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (25))){
var inst_30114 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30116__$1,inst_30114);
} else {
if((state_val_30117 === (34))){
var inst_30082 = (state_30116[(30)]);
var inst_30102 = (state_30116[(2)]);
var inst_30103 = cljs.core.not_empty.call(null,inst_30082);
var state_30116__$1 = (function (){var statearr_30152 = state_30116;
(statearr_30152[(31)] = inst_30102);

return statearr_30152;
})();
if(cljs.core.truth_(inst_30103)){
var statearr_30153_30213 = state_30116__$1;
(statearr_30153_30213[(1)] = (35));

} else {
var statearr_30154_30214 = state_30116__$1;
(statearr_30154_30214[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (17))){
var inst_30042 = (state_30116[(24)]);
var state_30116__$1 = state_30116;
var statearr_30155_30215 = state_30116__$1;
(statearr_30155_30215[(2)] = inst_30042);

(statearr_30155_30215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (3))){
var state_30116__$1 = state_30116;
var statearr_30156_30216 = state_30116__$1;
(statearr_30156_30216[(2)] = null);

(statearr_30156_30216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (12))){
var inst_30033 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
var statearr_30157_30217 = state_30116__$1;
(statearr_30157_30217[(2)] = inst_30033);

(statearr_30157_30217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (2))){
var inst_29995 = (state_30116[(20)]);
var inst_30002 = cljs.core.seq.call(null,inst_29995);
var inst_30003 = inst_30002;
var inst_30004 = null;
var inst_30005 = (0);
var inst_30006 = (0);
var state_30116__$1 = (function (){var statearr_30158 = state_30116;
(statearr_30158[(7)] = inst_30004);

(statearr_30158[(8)] = inst_30006);

(statearr_30158[(9)] = inst_30005);

(statearr_30158[(10)] = inst_30003);

return statearr_30158;
})();
var statearr_30159_30218 = state_30116__$1;
(statearr_30159_30218[(2)] = null);

(statearr_30159_30218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (23))){
var inst_30053 = (state_30116[(12)]);
var inst_30055 = (state_30116[(13)]);
var inst_30052 = (state_30116[(14)]);
var inst_30049 = (state_30116[(15)]);
var inst_30048 = (state_30116[(16)]);
var inst_30075 = (state_30116[(19)]);
var inst_30071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30074 = (function (){var files_not_loaded = inst_30055;
var res = inst_30053;
var res_SINGLEQUOTE_ = inst_30052;
var files_SINGLEQUOTE_ = inst_30049;
var all_files = inst_30048;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30053,inst_30055,inst_30052,inst_30049,inst_30048,inst_30075,inst_30071,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function (p__30073){
var map__30160 = p__30073;
var map__30160__$1 = ((cljs.core.seq_QMARK_.call(null,map__30160))?cljs.core.apply.call(null,cljs.core.hash_map,map__30160):map__30160);
var meta_data = cljs.core.get.call(null,map__30160__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30053,inst_30055,inst_30052,inst_30049,inst_30048,inst_30075,inst_30071,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
})();
var inst_30075__$1 = cljs.core.group_by.call(null,inst_30074,inst_30055);
var inst_30076 = cljs.core.seq_QMARK_.call(null,inst_30075__$1);
var state_30116__$1 = (function (){var statearr_30161 = state_30116;
(statearr_30161[(32)] = inst_30071);

(statearr_30161[(19)] = inst_30075__$1);

return statearr_30161;
})();
if(inst_30076){
var statearr_30162_30219 = state_30116__$1;
(statearr_30162_30219[(1)] = (26));

} else {
var statearr_30163_30220 = state_30116__$1;
(statearr_30163_30220[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (35))){
var inst_30082 = (state_30116[(30)]);
var inst_30105 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30082);
var inst_30106 = cljs.core.pr_str.call(null,inst_30105);
var inst_30107 = [cljs.core.str("not required: "),cljs.core.str(inst_30106)].join('');
var inst_30108 = figwheel.client.utils.log.call(null,inst_30107);
var state_30116__$1 = state_30116;
var statearr_30164_30221 = state_30116__$1;
(statearr_30164_30221[(2)] = inst_30108);

(statearr_30164_30221[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (19))){
var inst_30053 = (state_30116[(12)]);
var inst_30052 = (state_30116[(14)]);
var inst_30049 = (state_30116[(15)]);
var inst_30048 = (state_30116[(16)]);
var inst_30052__$1 = (state_30116[(2)]);
var inst_30053__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30052__$1);
var inst_30054 = (function (){var res = inst_30053__$1;
var res_SINGLEQUOTE_ = inst_30052__$1;
var files_SINGLEQUOTE_ = inst_30049;
var all_files = inst_30048;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30053,inst_30052,inst_30049,inst_30048,inst_30052__$1,inst_30053__$1,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function (p1__29786_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29786_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30053,inst_30052,inst_30049,inst_30048,inst_30052__$1,inst_30053__$1,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
})();
var inst_30055 = cljs.core.filter.call(null,inst_30054,inst_30052__$1);
var inst_30056 = cljs.core.not_empty.call(null,inst_30053__$1);
var state_30116__$1 = (function (){var statearr_30165 = state_30116;
(statearr_30165[(12)] = inst_30053__$1);

(statearr_30165[(13)] = inst_30055);

(statearr_30165[(14)] = inst_30052__$1);

return statearr_30165;
})();
if(cljs.core.truth_(inst_30056)){
var statearr_30166_30222 = state_30116__$1;
(statearr_30166_30222[(1)] = (20));

} else {
var statearr_30167_30223 = state_30116__$1;
(statearr_30167_30223[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (11))){
var state_30116__$1 = state_30116;
var statearr_30168_30224 = state_30116__$1;
(statearr_30168_30224[(2)] = null);

(statearr_30168_30224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (9))){
var inst_30035 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
var statearr_30169_30225 = state_30116__$1;
(statearr_30169_30225[(2)] = inst_30035);

(statearr_30169_30225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (5))){
var inst_30006 = (state_30116[(8)]);
var inst_30005 = (state_30116[(9)]);
var inst_30008 = (inst_30006 < inst_30005);
var inst_30009 = inst_30008;
var state_30116__$1 = state_30116;
if(cljs.core.truth_(inst_30009)){
var statearr_30170_30226 = state_30116__$1;
(statearr_30170_30226[(1)] = (7));

} else {
var statearr_30171_30227 = state_30116__$1;
(statearr_30171_30227[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (14))){
var inst_30016 = (state_30116[(27)]);
var inst_30025 = cljs.core.first.call(null,inst_30016);
var inst_30026 = figwheel.client.file_reloading.eval_body.call(null,inst_30025);
var inst_30027 = cljs.core.next.call(null,inst_30016);
var inst_30003 = inst_30027;
var inst_30004 = null;
var inst_30005 = (0);
var inst_30006 = (0);
var state_30116__$1 = (function (){var statearr_30172 = state_30116;
(statearr_30172[(7)] = inst_30004);

(statearr_30172[(33)] = inst_30026);

(statearr_30172[(8)] = inst_30006);

(statearr_30172[(9)] = inst_30005);

(statearr_30172[(10)] = inst_30003);

return statearr_30172;
})();
var statearr_30173_30228 = state_30116__$1;
(statearr_30173_30228[(2)] = null);

(statearr_30173_30228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (26))){
var inst_30075 = (state_30116[(19)]);
var inst_30078 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30075);
var state_30116__$1 = state_30116;
var statearr_30174_30229 = state_30116__$1;
(statearr_30174_30229[(2)] = inst_30078);

(statearr_30174_30229[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (16))){
var inst_30042 = (state_30116[(24)]);
var inst_30044 = (function (){var all_files = inst_30042;
return ((function (all_files,inst_30042,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function (p1__29785_SHARP_){
return cljs.core.update_in.call(null,p1__29785_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30042,state_val_30117,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
})();
var inst_30045 = cljs.core.map.call(null,inst_30044,inst_30042);
var state_30116__$1 = state_30116;
var statearr_30175_30230 = state_30116__$1;
(statearr_30175_30230[(2)] = inst_30045);

(statearr_30175_30230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (30))){
var state_30116__$1 = state_30116;
var statearr_30176_30231 = state_30116__$1;
(statearr_30176_30231[(2)] = null);

(statearr_30176_30231[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (10))){
var inst_30016 = (state_30116[(27)]);
var inst_30018 = cljs.core.chunked_seq_QMARK_.call(null,inst_30016);
var state_30116__$1 = state_30116;
if(inst_30018){
var statearr_30177_30232 = state_30116__$1;
(statearr_30177_30232[(1)] = (13));

} else {
var statearr_30178_30233 = state_30116__$1;
(statearr_30178_30233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (18))){
var inst_30049 = (state_30116[(15)]);
var inst_30048 = (state_30116[(16)]);
var inst_30048__$1 = (state_30116[(2)]);
var inst_30049__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30048__$1);
var inst_30050 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30049__$1);
var state_30116__$1 = (function (){var statearr_30179 = state_30116;
(statearr_30179[(15)] = inst_30049__$1);

(statearr_30179[(16)] = inst_30048__$1);

return statearr_30179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30116__$1,(19),inst_30050);
} else {
if((state_val_30117 === (37))){
var inst_30111 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
var statearr_30180_30234 = state_30116__$1;
(statearr_30180_30234[(2)] = inst_30111);

(statearr_30180_30234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (8))){
var inst_30016 = (state_30116[(27)]);
var inst_30003 = (state_30116[(10)]);
var inst_30016__$1 = cljs.core.seq.call(null,inst_30003);
var state_30116__$1 = (function (){var statearr_30181 = state_30116;
(statearr_30181[(27)] = inst_30016__$1);

return statearr_30181;
})();
if(inst_30016__$1){
var statearr_30182_30235 = state_30116__$1;
(statearr_30182_30235[(1)] = (10));

} else {
var statearr_30183_30236 = state_30116__$1;
(statearr_30183_30236[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
;
return ((function (switch__21322__auto__,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____0 = (function (){
var statearr_30187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30187[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__);

(statearr_30187[(1)] = (1));

return statearr_30187;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____1 = (function (state_30116){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_30116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e30188){if((e30188 instanceof Object)){
var ex__21326__auto__ = e30188;
var statearr_30189_30237 = state_30116;
(statearr_30189_30237[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30238 = state_30116;
state_30116 = G__30238;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__ = function(state_30116){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____1.call(this,state_30116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
})();
var state__21386__auto__ = (function (){var statearr_30190 = f__21385__auto__.call(null);
(statearr_30190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_30190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,map__29990,map__29990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29991,map__29991__$1,msg,files))
);

return c__21384__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30241,link){
var map__30243 = p__30241;
var map__30243__$1 = ((cljs.core.seq_QMARK_.call(null,map__30243))?cljs.core.apply.call(null,cljs.core.hash_map,map__30243):map__30243);
var file = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__30243,map__30243__$1,file){
return (function (p1__30239_SHARP_,p2__30240_SHARP_){
if(cljs.core._EQ_.call(null,p1__30239_SHARP_,p2__30240_SHARP_)){
return p1__30239_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__30243,map__30243__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30247){
var map__30248 = p__30247;
var map__30248__$1 = ((cljs.core.seq_QMARK_.call(null,map__30248))?cljs.core.apply.call(null,cljs.core.hash_map,map__30248):map__30248);
var current_url_length = cljs.core.get.call(null,map__30248__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30248__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30244_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30244_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__30250 = arguments.length;
switch (G__30250) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30252){
var map__30254 = p__30252;
var map__30254__$1 = ((cljs.core.seq_QMARK_.call(null,map__30254))?cljs.core.apply.call(null,cljs.core.hash_map,map__30254):map__30254);
var f_data = map__30254__$1;
var request_url = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18160__auto__ = request_url;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30255,files_msg){
var map__30277 = p__30255;
var map__30277__$1 = ((cljs.core.seq_QMARK_.call(null,map__30277))?cljs.core.apply.call(null,cljs.core.hash_map,map__30277):map__30277);
var opts = map__30277__$1;
var on_cssload = cljs.core.get.call(null,map__30277__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30278_30298 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30279_30299 = null;
var count__30280_30300 = (0);
var i__30281_30301 = (0);
while(true){
if((i__30281_30301 < count__30280_30300)){
var f_30302 = cljs.core._nth.call(null,chunk__30279_30299,i__30281_30301);
figwheel.client.file_reloading.reload_css_file.call(null,f_30302);

var G__30303 = seq__30278_30298;
var G__30304 = chunk__30279_30299;
var G__30305 = count__30280_30300;
var G__30306 = (i__30281_30301 + (1));
seq__30278_30298 = G__30303;
chunk__30279_30299 = G__30304;
count__30280_30300 = G__30305;
i__30281_30301 = G__30306;
continue;
} else {
var temp__4126__auto___30307 = cljs.core.seq.call(null,seq__30278_30298);
if(temp__4126__auto___30307){
var seq__30278_30308__$1 = temp__4126__auto___30307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30278_30308__$1)){
var c__18945__auto___30309 = cljs.core.chunk_first.call(null,seq__30278_30308__$1);
var G__30310 = cljs.core.chunk_rest.call(null,seq__30278_30308__$1);
var G__30311 = c__18945__auto___30309;
var G__30312 = cljs.core.count.call(null,c__18945__auto___30309);
var G__30313 = (0);
seq__30278_30298 = G__30310;
chunk__30279_30299 = G__30311;
count__30280_30300 = G__30312;
i__30281_30301 = G__30313;
continue;
} else {
var f_30314 = cljs.core.first.call(null,seq__30278_30308__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30314);

var G__30315 = cljs.core.next.call(null,seq__30278_30308__$1);
var G__30316 = null;
var G__30317 = (0);
var G__30318 = (0);
seq__30278_30298 = G__30315;
chunk__30279_30299 = G__30316;
count__30280_30300 = G__30317;
i__30281_30301 = G__30318;
continue;
}
} else {
}
}
break;
}

var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,map__30277,map__30277__$1,opts,on_cssload){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,map__30277,map__30277__$1,opts,on_cssload){
return (function (state_30288){
var state_val_30289 = (state_30288[(1)]);
if((state_val_30289 === (2))){
var inst_30284 = (state_30288[(2)]);
var inst_30285 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30286 = on_cssload.call(null,inst_30285);
var state_30288__$1 = (function (){var statearr_30290 = state_30288;
(statearr_30290[(7)] = inst_30284);

return statearr_30290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30288__$1,inst_30286);
} else {
if((state_val_30289 === (1))){
var inst_30282 = cljs.core.async.timeout.call(null,(100));
var state_30288__$1 = state_30288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30288__$1,(2),inst_30282);
} else {
return null;
}
}
});})(c__21384__auto__,map__30277,map__30277__$1,opts,on_cssload))
;
return ((function (switch__21322__auto__,c__21384__auto__,map__30277,map__30277__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____0 = (function (){
var statearr_30294 = [null,null,null,null,null,null,null,null];
(statearr_30294[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__);

(statearr_30294[(1)] = (1));

return statearr_30294;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____1 = (function (state_30288){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_30288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e30295){if((e30295 instanceof Object)){
var ex__21326__auto__ = e30295;
var statearr_30296_30319 = state_30288;
(statearr_30296_30319[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30320 = state_30288;
state_30288 = G__30320;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__ = function(state_30288){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____1.call(this,state_30288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,map__30277,map__30277__$1,opts,on_cssload))
})();
var state__21386__auto__ = (function (){var statearr_30297 = f__21385__auto__.call(null);
(statearr_30297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_30297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,map__30277,map__30277__$1,opts,on_cssload))
);

return c__21384__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1442499282569