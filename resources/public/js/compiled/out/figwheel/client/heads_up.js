// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19200__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19200__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29368_29376 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29369_29377 = null;
var count__29370_29378 = (0);
var i__29371_29379 = (0);
while(true){
if((i__29371_29379 < count__29370_29378)){
var k_29380 = cljs.core._nth.call(null,chunk__29369_29377,i__29371_29379);
e.setAttribute(cljs.core.name.call(null,k_29380),cljs.core.get.call(null,attrs,k_29380));

var G__29381 = seq__29368_29376;
var G__29382 = chunk__29369_29377;
var G__29383 = count__29370_29378;
var G__29384 = (i__29371_29379 + (1));
seq__29368_29376 = G__29381;
chunk__29369_29377 = G__29382;
count__29370_29378 = G__29383;
i__29371_29379 = G__29384;
continue;
} else {
var temp__4126__auto___29385 = cljs.core.seq.call(null,seq__29368_29376);
if(temp__4126__auto___29385){
var seq__29368_29386__$1 = temp__4126__auto___29385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29368_29386__$1)){
var c__18945__auto___29387 = cljs.core.chunk_first.call(null,seq__29368_29386__$1);
var G__29388 = cljs.core.chunk_rest.call(null,seq__29368_29386__$1);
var G__29389 = c__18945__auto___29387;
var G__29390 = cljs.core.count.call(null,c__18945__auto___29387);
var G__29391 = (0);
seq__29368_29376 = G__29388;
chunk__29369_29377 = G__29389;
count__29370_29378 = G__29390;
i__29371_29379 = G__29391;
continue;
} else {
var k_29392 = cljs.core.first.call(null,seq__29368_29386__$1);
e.setAttribute(cljs.core.name.call(null,k_29392),cljs.core.get.call(null,attrs,k_29392));

var G__29393 = cljs.core.next.call(null,seq__29368_29386__$1);
var G__29394 = null;
var G__29395 = (0);
var G__29396 = (0);
seq__29368_29376 = G__29393;
chunk__29369_29377 = G__29394;
count__29370_29378 = G__29395;
i__29371_29379 = G__29396;
continue;
}
} else {
}
}
break;
}

var seq__29372_29397 = cljs.core.seq.call(null,children);
var chunk__29373_29398 = null;
var count__29374_29399 = (0);
var i__29375_29400 = (0);
while(true){
if((i__29375_29400 < count__29374_29399)){
var ch_29401 = cljs.core._nth.call(null,chunk__29373_29398,i__29375_29400);
e.appendChild(ch_29401);

var G__29402 = seq__29372_29397;
var G__29403 = chunk__29373_29398;
var G__29404 = count__29374_29399;
var G__29405 = (i__29375_29400 + (1));
seq__29372_29397 = G__29402;
chunk__29373_29398 = G__29403;
count__29374_29399 = G__29404;
i__29375_29400 = G__29405;
continue;
} else {
var temp__4126__auto___29406 = cljs.core.seq.call(null,seq__29372_29397);
if(temp__4126__auto___29406){
var seq__29372_29407__$1 = temp__4126__auto___29406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29372_29407__$1)){
var c__18945__auto___29408 = cljs.core.chunk_first.call(null,seq__29372_29407__$1);
var G__29409 = cljs.core.chunk_rest.call(null,seq__29372_29407__$1);
var G__29410 = c__18945__auto___29408;
var G__29411 = cljs.core.count.call(null,c__18945__auto___29408);
var G__29412 = (0);
seq__29372_29397 = G__29409;
chunk__29373_29398 = G__29410;
count__29374_29399 = G__29411;
i__29375_29400 = G__29412;
continue;
} else {
var ch_29413 = cljs.core.first.call(null,seq__29372_29407__$1);
e.appendChild(ch_29413);

var G__29414 = cljs.core.next.call(null,seq__29372_29407__$1);
var G__29415 = null;
var G__29416 = (0);
var G__29417 = (0);
seq__29372_29397 = G__29414;
chunk__29373_29398 = G__29415;
count__29374_29399 = G__29416;
i__29375_29400 = G__29417;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29365){
var G__29366 = cljs.core.first.call(null,seq29365);
var seq29365__$1 = cljs.core.next.call(null,seq29365);
var G__29367 = cljs.core.first.call(null,seq29365__$1);
var seq29365__$2 = cljs.core.next.call(null,seq29365__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29366,G__29367,seq29365__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__,hierarchy__19059__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__,hierarchy__19059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29418 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29418.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29418.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29418.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29418);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29419,st_map){
var map__29423 = p__29419;
var map__29423__$1 = ((cljs.core.seq_QMARK_.call(null,map__29423))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);
var container_el = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29423,map__29423__$1,container_el){
return (function (p__29424){
var vec__29425 = p__29424;
var k = cljs.core.nth.call(null,vec__29425,(0),null);
var v = cljs.core.nth.call(null,vec__29425,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29423,map__29423__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29426,dom_str){
var map__29428 = p__29426;
var map__29428__$1 = ((cljs.core.seq_QMARK_.call(null,map__29428))?cljs.core.apply.call(null,cljs.core.hash_map,map__29428):map__29428);
var c = map__29428__$1;
var content_area_el = cljs.core.get.call(null,map__29428__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29429){
var map__29431 = p__29429;
var map__29431__$1 = ((cljs.core.seq_QMARK_.call(null,map__29431))?cljs.core.apply.call(null,cljs.core.hash_map,map__29431):map__29431);
var content_area_el = cljs.core.get.call(null,map__29431__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_29473){
var state_val_29474 = (state_29473[(1)]);
if((state_val_29474 === (2))){
var inst_29458 = (state_29473[(7)]);
var inst_29467 = (state_29473[(2)]);
var inst_29468 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29469 = ["auto"];
var inst_29470 = cljs.core.PersistentHashMap.fromArrays(inst_29468,inst_29469);
var inst_29471 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29458,inst_29470);
var state_29473__$1 = (function (){var statearr_29475 = state_29473;
(statearr_29475[(8)] = inst_29467);

return statearr_29475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29473__$1,inst_29471);
} else {
if((state_val_29474 === (1))){
var inst_29458 = (state_29473[(7)]);
var inst_29458__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29459 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29460 = ["10px","10px","100%","68px","1.0"];
var inst_29461 = cljs.core.PersistentHashMap.fromArrays(inst_29459,inst_29460);
var inst_29462 = cljs.core.merge.call(null,inst_29461,style);
var inst_29463 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29458__$1,inst_29462);
var inst_29464 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29458__$1,msg);
var inst_29465 = cljs.core.async.timeout.call(null,(300));
var state_29473__$1 = (function (){var statearr_29476 = state_29473;
(statearr_29476[(9)] = inst_29463);

(statearr_29476[(10)] = inst_29464);

(statearr_29476[(7)] = inst_29458__$1);

return statearr_29476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29473__$1,(2),inst_29465);
} else {
return null;
}
}
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____0 = (function (){
var statearr_29480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29480[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__);

(statearr_29480[(1)] = (1));

return statearr_29480;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____1 = (function (state_29473){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29481){if((e29481 instanceof Object)){
var ex__21326__auto__ = e29481;
var statearr_29482_29484 = state_29473;
(statearr_29482_29484[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29485 = state_29473;
state_29473 = G__29485;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__ = function(state_29473){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____1.call(this,state_29473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_29483 = f__21385__auto__.call(null);
(statearr_29483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__29487 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__29487,(0),null);
var ln = cljs.core.nth.call(null,vec__29487,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29490 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29490,(0),null);
var file_line = cljs.core.nth.call(null,vec__29490,(1),null);
var file_column = cljs.core.nth.call(null,vec__29490,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29490,file_name,file_line,file_column){
return (function (p1__29488_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__29488_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__29490,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18160__auto__ = file_line;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
var and__18148__auto__ = cause;
if(cljs.core.truth_(and__18148__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18148__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29492 = figwheel.client.heads_up.ensure_container.call(null);
var map__29492__$1 = ((cljs.core.seq_QMARK_.call(null,map__29492))?cljs.core.apply.call(null,cljs.core.hash_map,map__29492):map__29492);
var content_area_el = cljs.core.get.call(null,map__29492__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_29539){
var state_val_29540 = (state_29539[(1)]);
if((state_val_29540 === (3))){
var inst_29522 = (state_29539[(7)]);
var inst_29536 = (state_29539[(2)]);
var inst_29537 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29522,"");
var state_29539__$1 = (function (){var statearr_29541 = state_29539;
(statearr_29541[(8)] = inst_29536);

return statearr_29541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29539__$1,inst_29537);
} else {
if((state_val_29540 === (2))){
var inst_29522 = (state_29539[(7)]);
var inst_29529 = (state_29539[(2)]);
var inst_29530 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29531 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29532 = cljs.core.PersistentHashMap.fromArrays(inst_29530,inst_29531);
var inst_29533 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29522,inst_29532);
var inst_29534 = cljs.core.async.timeout.call(null,(200));
var state_29539__$1 = (function (){var statearr_29542 = state_29539;
(statearr_29542[(9)] = inst_29529);

(statearr_29542[(10)] = inst_29533);

return statearr_29542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29539__$1,(3),inst_29534);
} else {
if((state_val_29540 === (1))){
var inst_29522 = (state_29539[(7)]);
var inst_29522__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29523 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29524 = ["0.0"];
var inst_29525 = cljs.core.PersistentHashMap.fromArrays(inst_29523,inst_29524);
var inst_29526 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29522__$1,inst_29525);
var inst_29527 = cljs.core.async.timeout.call(null,(300));
var state_29539__$1 = (function (){var statearr_29543 = state_29539;
(statearr_29543[(7)] = inst_29522__$1);

(statearr_29543[(11)] = inst_29526);

return statearr_29543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29539__$1,(2),inst_29527);
} else {
return null;
}
}
}
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21323__auto____0 = (function (){
var statearr_29547 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29547[(0)] = figwheel$client$heads_up$clear_$_state_machine__21323__auto__);

(statearr_29547[(1)] = (1));

return statearr_29547;
});
var figwheel$client$heads_up$clear_$_state_machine__21323__auto____1 = (function (state_29539){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29548){if((e29548 instanceof Object)){
var ex__21326__auto__ = e29548;
var statearr_29549_29551 = state_29539;
(statearr_29549_29551[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29552 = state_29539;
state_29539 = G__29552;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21323__auto__ = function(state_29539){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21323__auto____1.call(this,state_29539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21323__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21323__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_29550 = f__21385__auto__.call(null);
(statearr_29550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_29584){
var state_val_29585 = (state_29584[(1)]);
if((state_val_29585 === (4))){
var inst_29582 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29584__$1,inst_29582);
} else {
if((state_val_29585 === (3))){
var inst_29579 = (state_29584[(2)]);
var inst_29580 = figwheel.client.heads_up.clear.call(null);
var state_29584__$1 = (function (){var statearr_29586 = state_29584;
(statearr_29586[(7)] = inst_29579);

return statearr_29586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(4),inst_29580);
} else {
if((state_val_29585 === (2))){
var inst_29576 = (state_29584[(2)]);
var inst_29577 = cljs.core.async.timeout.call(null,(400));
var state_29584__$1 = (function (){var statearr_29587 = state_29584;
(statearr_29587[(8)] = inst_29576);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(3),inst_29577);
} else {
if((state_val_29585 === (1))){
var inst_29574 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(2),inst_29574);
} else {
return null;
}
}
}
}
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____0 = (function (){
var statearr_29591 = [null,null,null,null,null,null,null,null,null];
(statearr_29591[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__);

(statearr_29591[(1)] = (1));

return statearr_29591;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____1 = (function (state_29584){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29592){if((e29592 instanceof Object)){
var ex__21326__auto__ = e29592;
var statearr_29593_29595 = state_29584;
(statearr_29593_29595[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29596 = state_29584;
state_29584 = G__29596;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__ = function(state_29584){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____1.call(this,state_29584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_29594 = f__21385__auto__.call(null);
(statearr_29594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1442499282159