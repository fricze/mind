// Compiled by ClojureScript 0.0-3211 {}
goog.provide('mind.views');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
mind.views.new_thought_component = (function mind$views$new_thought_component(){
var val = reagent.core.atom.call(null,"new thought");
return ((function (val){
return (function (props){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (val){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-thought","add-thought",1065665845),cljs.core.deref.call(null,val)], null));

return cljs.core.reset_BANG_.call(null,val,"");
});})(val))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"new thought"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__23447_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__23447_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"create"], null)], null);
});
;})(val))
});
mind.views.thought_component = (function mind$views$thought_component(thought){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid black",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"300px"], null)], null),[cljs.core.str(thought)].join('')], null);
});
mind.views.home_panel = (function mind$views$home_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
var thoughts = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thoughts","thoughts",1862571083)], null));
return ((function (name,thoughts){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("Hello. This is your mind.")].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mind.views.new_thought_component], null),(function (){var iter__18914__auto__ = ((function (name,thoughts){
return (function mind$views$home_panel_$_iter__23452(s__23453){
return (new cljs.core.LazySeq(null,((function (name,thoughts){
return (function (){
var s__23453__$1 = s__23453;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23453__$1);
if(temp__4126__auto__){
var s__23453__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23453__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__23453__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__23455 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__23454 = (0);
while(true){
if((i__23454 < size__18913__auto__)){
var th = cljs.core._nth.call(null,c__18912__auto__,i__23454);
cljs.core.chunk_append.call(null,b__23455,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mind.views.thought_component.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(th))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(th)], null)));

var G__23456 = (i__23454 + (1));
i__23454 = G__23456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23455),mind$views$home_panel_$_iter__23452.call(null,cljs.core.chunk_rest.call(null,s__23453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23455),null);
}
} else {
var th = cljs.core.first.call(null,s__23453__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mind.views.thought_component.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(th))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(th)], null)),mind$views$home_panel_$_iter__23452.call(null,cljs.core.rest.call(null,s__23453__$2)));
}
} else {
return null;
}
break;
}
});})(name,thoughts))
,null,null));
});})(name,thoughts))
;
return iter__18914__auto__.call(null,cljs.core.deref.call(null,thoughts));
})()], null);
});
;})(name,thoughts))
});
mind.views.about_panel = (function mind$views$about_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the About Page.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null)], null);
});
});
if(typeof mind.views.panels !== 'undefined'){
} else {
mind.views.panels = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mind.views","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,mind.views.panels,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mind.views.home_panel], null);
}));
cljs.core._add_method.call(null,mind.views.panels,new cljs.core.Keyword(null,"about-panel","about-panel",334628515),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mind.views.about_panel], null);
}));
cljs.core._add_method.call(null,mind.views.panels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
mind.views.main_panel = (function mind$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return ((function (active_panel){
return (function (){
return mind.views.panels.call(null,cljs.core.deref.call(null,active_panel));
});
;})(active_panel))
});
mind.views.lister = (function mind$views$lister(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__18914__auto__ = (function mind$views$lister_$_iter__23461(s__23462){
return (new cljs.core.LazySeq(null,(function (){
var s__23462__$1 = s__23462;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23462__$1);
if(temp__4126__auto__){
var s__23462__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23462__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__23462__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__23464 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__23463 = (0);
while(true){
if((i__23463 < size__18913__auto__)){
var item = cljs.core._nth.call(null,c__18912__auto__,i__23463);
cljs.core.chunk_append.call(null,b__23464,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__23465 = (i__23463 + (1));
i__23463 = G__23465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23464),mind$views$lister_$_iter__23461.call(null,cljs.core.chunk_rest.call(null,s__23462__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23464),null);
}
} else {
var item = cljs.core.first.call(null,s__23462__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),mind$views$lister_$_iter__23461.call(null,cljs.core.rest.call(null,s__23462__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18914__auto__.call(null,items);
})()], null);
});
mind.views.lister_user = (function mind$views$lister_user(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Here is a list:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mind.views.lister,cljs.core.range.call(null,(3))], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1445010688572