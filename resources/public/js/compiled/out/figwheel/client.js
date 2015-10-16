// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28604__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28605__i = 0, G__28605__a = new Array(arguments.length -  0);
while (G__28605__i < G__28605__a.length) {G__28605__a[G__28605__i] = arguments[G__28605__i + 0]; ++G__28605__i;}
  args = new cljs.core.IndexedSeq(G__28605__a,0);
} 
return G__28604__delegate.call(this,args);};
G__28604.cljs$lang$maxFixedArity = 0;
G__28604.cljs$lang$applyTo = (function (arglist__28606){
var args = cljs.core.seq(arglist__28606);
return G__28604__delegate(args);
});
G__28604.cljs$core$IFn$_invoke$arity$variadic = G__28604__delegate;
return G__28604;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28607){
var map__28609 = p__28607;
var map__28609__$1 = ((cljs.core.seq_QMARK_.call(null,map__28609))?cljs.core.apply.call(null,cljs.core.hash_map,map__28609):map__28609);
var class$ = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18160__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18148__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18148__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18148__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21384__auto___28738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28738,ch){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28738,ch){
return (function (state_28712){
var state_val_28713 = (state_28712[(1)]);
if((state_val_28713 === (7))){
var inst_28708 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28714_28739 = state_28712__$1;
(statearr_28714_28739[(2)] = inst_28708);

(statearr_28714_28739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (1))){
var state_28712__$1 = state_28712;
var statearr_28715_28740 = state_28712__$1;
(statearr_28715_28740[(2)] = null);

(statearr_28715_28740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (4))){
var inst_28676 = (state_28712[(7)]);
var inst_28676__$1 = (state_28712[(2)]);
var state_28712__$1 = (function (){var statearr_28716 = state_28712;
(statearr_28716[(7)] = inst_28676__$1);

return statearr_28716;
})();
if(cljs.core.truth_(inst_28676__$1)){
var statearr_28717_28741 = state_28712__$1;
(statearr_28717_28741[(1)] = (5));

} else {
var statearr_28718_28742 = state_28712__$1;
(statearr_28718_28742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (13))){
var state_28712__$1 = state_28712;
var statearr_28719_28743 = state_28712__$1;
(statearr_28719_28743[(2)] = null);

(statearr_28719_28743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (6))){
var state_28712__$1 = state_28712;
var statearr_28720_28744 = state_28712__$1;
(statearr_28720_28744[(2)] = null);

(statearr_28720_28744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (3))){
var inst_28710 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28712__$1,inst_28710);
} else {
if((state_val_28713 === (12))){
var inst_28683 = (state_28712[(8)]);
var inst_28696 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28683);
var inst_28697 = cljs.core.first.call(null,inst_28696);
var inst_28698 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28697);
var inst_28699 = console.warn("Figwheel: Not loading code with warnings - ",inst_28698);
var state_28712__$1 = state_28712;
var statearr_28721_28745 = state_28712__$1;
(statearr_28721_28745[(2)] = inst_28699);

(statearr_28721_28745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (2))){
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28712__$1,(4),ch);
} else {
if((state_val_28713 === (11))){
var inst_28692 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28722_28746 = state_28712__$1;
(statearr_28722_28746[(2)] = inst_28692);

(statearr_28722_28746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (9))){
var inst_28682 = (state_28712[(9)]);
var inst_28694 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28682,opts);
var state_28712__$1 = state_28712;
if(cljs.core.truth_(inst_28694)){
var statearr_28723_28747 = state_28712__$1;
(statearr_28723_28747[(1)] = (12));

} else {
var statearr_28724_28748 = state_28712__$1;
(statearr_28724_28748[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (5))){
var inst_28676 = (state_28712[(7)]);
var inst_28682 = (state_28712[(9)]);
var inst_28678 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28679 = (new cljs.core.PersistentArrayMap(null,2,inst_28678,null));
var inst_28680 = (new cljs.core.PersistentHashSet(null,inst_28679,null));
var inst_28681 = figwheel.client.focus_msgs.call(null,inst_28680,inst_28676);
var inst_28682__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28681);
var inst_28683 = cljs.core.first.call(null,inst_28681);
var inst_28684 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28682__$1,opts);
var state_28712__$1 = (function (){var statearr_28725 = state_28712;
(statearr_28725[(9)] = inst_28682__$1);

(statearr_28725[(8)] = inst_28683);

return statearr_28725;
})();
if(cljs.core.truth_(inst_28684)){
var statearr_28726_28749 = state_28712__$1;
(statearr_28726_28749[(1)] = (8));

} else {
var statearr_28727_28750 = state_28712__$1;
(statearr_28727_28750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (14))){
var inst_28702 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28728_28751 = state_28712__$1;
(statearr_28728_28751[(2)] = inst_28702);

(statearr_28728_28751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (10))){
var inst_28704 = (state_28712[(2)]);
var state_28712__$1 = (function (){var statearr_28729 = state_28712;
(statearr_28729[(10)] = inst_28704);

return statearr_28729;
})();
var statearr_28730_28752 = state_28712__$1;
(statearr_28730_28752[(2)] = null);

(statearr_28730_28752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (8))){
var inst_28683 = (state_28712[(8)]);
var inst_28686 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28687 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28683);
var inst_28688 = cljs.core.async.timeout.call(null,(1000));
var inst_28689 = [inst_28687,inst_28688];
var inst_28690 = (new cljs.core.PersistentVector(null,2,(5),inst_28686,inst_28689,null));
var state_28712__$1 = state_28712;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28712__$1,(11),inst_28690);
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
});})(c__21384__auto___28738,ch))
;
return ((function (switch__21322__auto__,c__21384__auto___28738,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____0 = (function (){
var statearr_28734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28734[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__);

(statearr_28734[(1)] = (1));

return statearr_28734;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____1 = (function (state_28712){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28735){if((e28735 instanceof Object)){
var ex__21326__auto__ = e28735;
var statearr_28736_28753 = state_28712;
(statearr_28736_28753[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28754 = state_28712;
state_28712 = G__28754;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__ = function(state_28712){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____1.call(this,state_28712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28738,ch))
})();
var state__21386__auto__ = (function (){var statearr_28737 = f__21385__auto__.call(null);
(statearr_28737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28738);

return statearr_28737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28738,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28755_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28755_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28762 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28762){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28760 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28761 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28760,_STAR_print_newline_STAR_28761,base_path_28762){
return (function() { 
var G__28763__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28764__i = 0, G__28764__a = new Array(arguments.length -  0);
while (G__28764__i < G__28764__a.length) {G__28764__a[G__28764__i] = arguments[G__28764__i + 0]; ++G__28764__i;}
  args = new cljs.core.IndexedSeq(G__28764__a,0);
} 
return G__28763__delegate.call(this,args);};
G__28763.cljs$lang$maxFixedArity = 0;
G__28763.cljs$lang$applyTo = (function (arglist__28765){
var args = cljs.core.seq(arglist__28765);
return G__28763__delegate(args);
});
G__28763.cljs$core$IFn$_invoke$arity$variadic = G__28763__delegate;
return G__28763;
})()
;})(_STAR_print_fn_STAR_28760,_STAR_print_newline_STAR_28761,base_path_28762))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28761;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28760;
}}catch (e28759){if((e28759 instanceof Error)){
var e = e28759;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28762], null));
} else {
var e = e28759;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28762))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28766){
var map__28771 = p__28766;
var map__28771__$1 = ((cljs.core.seq_QMARK_.call(null,map__28771))?cljs.core.apply.call(null,cljs.core.hash_map,map__28771):map__28771);
var opts = map__28771__$1;
var build_id = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28771,map__28771__$1,opts,build_id){
return (function (p__28772){
var vec__28773 = p__28772;
var map__28774 = cljs.core.nth.call(null,vec__28773,(0),null);
var map__28774__$1 = ((cljs.core.seq_QMARK_.call(null,map__28774))?cljs.core.apply.call(null,cljs.core.hash_map,map__28774):map__28774);
var msg = map__28774__$1;
var msg_name = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28773,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28773,map__28774,map__28774__$1,msg,msg_name,_,map__28771,map__28771__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28773,map__28774,map__28774__$1,msg,msg_name,_,map__28771,map__28771__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28771,map__28771__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28778){
var vec__28779 = p__28778;
var map__28780 = cljs.core.nth.call(null,vec__28779,(0),null);
var map__28780__$1 = ((cljs.core.seq_QMARK_.call(null,map__28780))?cljs.core.apply.call(null,cljs.core.hash_map,map__28780):map__28780);
var msg = map__28780__$1;
var msg_name = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28779,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28781){
var map__28789 = p__28781;
var map__28789__$1 = ((cljs.core.seq_QMARK_.call(null,map__28789))?cljs.core.apply.call(null,cljs.core.hash_map,map__28789):map__28789);
var on_compile_fail = cljs.core.get.call(null,map__28789__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28789__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28789,map__28789__$1,on_compile_fail,on_compile_warning){
return (function (p__28790){
var vec__28791 = p__28790;
var map__28792 = cljs.core.nth.call(null,vec__28791,(0),null);
var map__28792__$1 = ((cljs.core.seq_QMARK_.call(null,map__28792))?cljs.core.apply.call(null,cljs.core.hash_map,map__28792):map__28792);
var msg = map__28792__$1;
var msg_name = cljs.core.get.call(null,map__28792__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28791,(1));
var pred__28793 = cljs.core._EQ_;
var expr__28794 = msg_name;
if(cljs.core.truth_(pred__28793.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28794))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28793.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28794))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28789,map__28789__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,msg_hist,msg_names,msg){
return (function (state_28995){
var state_val_28996 = (state_28995[(1)]);
if((state_val_28996 === (7))){
var inst_28929 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_28997_29038 = state_28995__$1;
(statearr_28997_29038[(2)] = inst_28929);

(statearr_28997_29038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (20))){
var inst_28957 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28957)){
var statearr_28998_29039 = state_28995__$1;
(statearr_28998_29039[(1)] = (22));

} else {
var statearr_28999_29040 = state_28995__$1;
(statearr_28999_29040[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (27))){
var inst_28969 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28970 = figwheel.client.heads_up.display_warning.call(null,inst_28969);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(30),inst_28970);
} else {
if((state_val_28996 === (1))){
var inst_28917 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28917)){
var statearr_29000_29041 = state_28995__$1;
(statearr_29000_29041[(1)] = (2));

} else {
var statearr_29001_29042 = state_28995__$1;
(statearr_29001_29042[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (24))){
var inst_28985 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29002_29043 = state_28995__$1;
(statearr_29002_29043[(2)] = inst_28985);

(statearr_29002_29043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (4))){
var inst_28993 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28995__$1,inst_28993);
} else {
if((state_val_28996 === (15))){
var inst_28945 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28946 = figwheel.client.format_messages.call(null,inst_28945);
var inst_28947 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28948 = figwheel.client.heads_up.display_error.call(null,inst_28946,inst_28947);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(18),inst_28948);
} else {
if((state_val_28996 === (21))){
var inst_28987 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29003_29044 = state_28995__$1;
(statearr_29003_29044[(2)] = inst_28987);

(statearr_29003_29044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (31))){
var inst_28976 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(34),inst_28976);
} else {
if((state_val_28996 === (32))){
var state_28995__$1 = state_28995;
var statearr_29004_29045 = state_28995__$1;
(statearr_29004_29045[(2)] = null);

(statearr_29004_29045[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (33))){
var inst_28981 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29005_29046 = state_28995__$1;
(statearr_29005_29046[(2)] = inst_28981);

(statearr_29005_29046[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (13))){
var inst_28935 = (state_28995[(2)]);
var inst_28936 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28937 = figwheel.client.format_messages.call(null,inst_28936);
var inst_28938 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28939 = figwheel.client.heads_up.display_error.call(null,inst_28937,inst_28938);
var state_28995__$1 = (function (){var statearr_29006 = state_28995;
(statearr_29006[(7)] = inst_28935);

return statearr_29006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(14),inst_28939);
} else {
if((state_val_28996 === (22))){
var inst_28959 = figwheel.client.heads_up.clear.call(null);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(25),inst_28959);
} else {
if((state_val_28996 === (29))){
var inst_28983 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29007_29047 = state_28995__$1;
(statearr_29007_29047[(2)] = inst_28983);

(statearr_29007_29047[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (6))){
var inst_28925 = figwheel.client.heads_up.clear.call(null);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(9),inst_28925);
} else {
if((state_val_28996 === (28))){
var inst_28974 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28974)){
var statearr_29008_29048 = state_28995__$1;
(statearr_29008_29048[(1)] = (31));

} else {
var statearr_29009_29049 = state_28995__$1;
(statearr_29009_29049[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (25))){
var inst_28961 = (state_28995[(2)]);
var inst_28962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28963 = figwheel.client.heads_up.display_warning.call(null,inst_28962);
var state_28995__$1 = (function (){var statearr_29010 = state_28995;
(statearr_29010[(8)] = inst_28961);

return statearr_29010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(26),inst_28963);
} else {
if((state_val_28996 === (34))){
var inst_28978 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29011_29050 = state_28995__$1;
(statearr_29011_29050[(2)] = inst_28978);

(statearr_29011_29050[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (17))){
var inst_28989 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29012_29051 = state_28995__$1;
(statearr_29012_29051[(2)] = inst_28989);

(statearr_29012_29051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (3))){
var inst_28931 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28931)){
var statearr_29013_29052 = state_28995__$1;
(statearr_29013_29052[(1)] = (10));

} else {
var statearr_29014_29053 = state_28995__$1;
(statearr_29014_29053[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (12))){
var inst_28991 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29015_29054 = state_28995__$1;
(statearr_29015_29054[(2)] = inst_28991);

(statearr_29015_29054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (2))){
var inst_28919 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28919)){
var statearr_29016_29055 = state_28995__$1;
(statearr_29016_29055[(1)] = (5));

} else {
var statearr_29017_29056 = state_28995__$1;
(statearr_29017_29056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (23))){
var inst_28967 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28967)){
var statearr_29018_29057 = state_28995__$1;
(statearr_29018_29057[(1)] = (27));

} else {
var statearr_29019_29058 = state_28995__$1;
(statearr_29019_29058[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (19))){
var inst_28954 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28955 = figwheel.client.heads_up.append_message.call(null,inst_28954);
var state_28995__$1 = state_28995;
var statearr_29020_29059 = state_28995__$1;
(statearr_29020_29059[(2)] = inst_28955);

(statearr_29020_29059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (11))){
var inst_28943 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28943)){
var statearr_29021_29060 = state_28995__$1;
(statearr_29021_29060[(1)] = (15));

} else {
var statearr_29022_29061 = state_28995__$1;
(statearr_29022_29061[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (9))){
var inst_28927 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29023_29062 = state_28995__$1;
(statearr_29023_29062[(2)] = inst_28927);

(statearr_29023_29062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (5))){
var inst_28921 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(8),inst_28921);
} else {
if((state_val_28996 === (14))){
var inst_28941 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29024_29063 = state_28995__$1;
(statearr_29024_29063[(2)] = inst_28941);

(statearr_29024_29063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (26))){
var inst_28965 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29025_29064 = state_28995__$1;
(statearr_29025_29064[(2)] = inst_28965);

(statearr_29025_29064[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (16))){
var inst_28952 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28952)){
var statearr_29026_29065 = state_28995__$1;
(statearr_29026_29065[(1)] = (19));

} else {
var statearr_29027_29066 = state_28995__$1;
(statearr_29027_29066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (30))){
var inst_28972 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29028_29067 = state_28995__$1;
(statearr_29028_29067[(2)] = inst_28972);

(statearr_29028_29067[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (10))){
var inst_28933 = figwheel.client.heads_up.clear.call(null);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(13),inst_28933);
} else {
if((state_val_28996 === (18))){
var inst_28950 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29029_29068 = state_28995__$1;
(statearr_29029_29068[(2)] = inst_28950);

(statearr_29029_29068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (8))){
var inst_28923 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29030_29069 = state_28995__$1;
(statearr_29030_29069[(2)] = inst_28923);

(statearr_29030_29069[(1)] = (7));


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
});})(c__21384__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21322__auto__,c__21384__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____0 = (function (){
var statearr_29034 = [null,null,null,null,null,null,null,null,null];
(statearr_29034[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__);

(statearr_29034[(1)] = (1));

return statearr_29034;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____1 = (function (state_28995){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29035){if((e29035 instanceof Object)){
var ex__21326__auto__ = e29035;
var statearr_29036_29070 = state_28995;
(statearr_29036_29070[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29071 = state_28995;
state_28995 = G__29071;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__ = function(state_28995){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____1.call(this,state_28995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,msg_hist,msg_names,msg))
})();
var state__21386__auto__ = (function (){var statearr_29037 = f__21385__auto__.call(null);
(statearr_29037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,msg_hist,msg_names,msg))
);

return c__21384__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21384__auto___29134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___29134,ch){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___29134,ch){
return (function (state_29117){
var state_val_29118 = (state_29117[(1)]);
if((state_val_29118 === (8))){
var inst_29109 = (state_29117[(2)]);
var state_29117__$1 = (function (){var statearr_29119 = state_29117;
(statearr_29119[(7)] = inst_29109);

return statearr_29119;
})();
var statearr_29120_29135 = state_29117__$1;
(statearr_29120_29135[(2)] = null);

(statearr_29120_29135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (7))){
var inst_29113 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29121_29136 = state_29117__$1;
(statearr_29121_29136[(2)] = inst_29113);

(statearr_29121_29136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (6))){
var state_29117__$1 = state_29117;
var statearr_29122_29137 = state_29117__$1;
(statearr_29122_29137[(2)] = null);

(statearr_29122_29137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (5))){
var inst_29105 = (state_29117[(8)]);
var inst_29107 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29105);
var state_29117__$1 = state_29117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29117__$1,(8),inst_29107);
} else {
if((state_val_29118 === (4))){
var inst_29105 = (state_29117[(8)]);
var inst_29105__$1 = (state_29117[(2)]);
var state_29117__$1 = (function (){var statearr_29123 = state_29117;
(statearr_29123[(8)] = inst_29105__$1);

return statearr_29123;
})();
if(cljs.core.truth_(inst_29105__$1)){
var statearr_29124_29138 = state_29117__$1;
(statearr_29124_29138[(1)] = (5));

} else {
var statearr_29125_29139 = state_29117__$1;
(statearr_29125_29139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (3))){
var inst_29115 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29117__$1,inst_29115);
} else {
if((state_val_29118 === (2))){
var state_29117__$1 = state_29117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29117__$1,(4),ch);
} else {
if((state_val_29118 === (1))){
var state_29117__$1 = state_29117;
var statearr_29126_29140 = state_29117__$1;
(statearr_29126_29140[(2)] = null);

(statearr_29126_29140[(1)] = (2));


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
});})(c__21384__auto___29134,ch))
;
return ((function (switch__21322__auto__,c__21384__auto___29134,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21323__auto____0 = (function (){
var statearr_29130 = [null,null,null,null,null,null,null,null,null];
(statearr_29130[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21323__auto__);

(statearr_29130[(1)] = (1));

return statearr_29130;
});
var figwheel$client$heads_up_plugin_$_state_machine__21323__auto____1 = (function (state_29117){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29131){if((e29131 instanceof Object)){
var ex__21326__auto__ = e29131;
var statearr_29132_29141 = state_29117;
(statearr_29132_29141[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29142 = state_29117;
state_29117 = G__29142;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21323__auto__ = function(state_29117){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21323__auto____1.call(this,state_29117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21323__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21323__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___29134,ch))
})();
var state__21386__auto__ = (function (){var statearr_29133 = f__21385__auto__.call(null);
(statearr_29133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___29134);

return statearr_29133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___29134,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (2))){
var inst_29160 = (state_29163[(2)]);
var inst_29161 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29163__$1 = (function (){var statearr_29165 = state_29163;
(statearr_29165[(7)] = inst_29160);

return statearr_29165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29163__$1,inst_29161);
} else {
if((state_val_29164 === (1))){
var inst_29158 = cljs.core.async.timeout.call(null,(3000));
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(2),inst_29158);
} else {
return null;
}
}
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____0 = (function (){
var statearr_29169 = [null,null,null,null,null,null,null,null];
(statearr_29169[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__);

(statearr_29169[(1)] = (1));

return statearr_29169;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____1 = (function (state_29163){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29170){if((e29170 instanceof Object)){
var ex__21326__auto__ = e29170;
var statearr_29171_29173 = state_29163;
(statearr_29171_29173[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29174 = state_29163;
state_29163 = G__29174;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_29172 = f__21385__auto__.call(null);
(statearr_29172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29175){
var map__29181 = p__29175;
var map__29181__$1 = ((cljs.core.seq_QMARK_.call(null,map__29181))?cljs.core.apply.call(null,cljs.core.hash_map,map__29181):map__29181);
var ed = map__29181__$1;
var cause = cljs.core.get.call(null,map__29181__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__29181__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__29181__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29182_29186 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29183_29187 = null;
var count__29184_29188 = (0);
var i__29185_29189 = (0);
while(true){
if((i__29185_29189 < count__29184_29188)){
var msg_29190 = cljs.core._nth.call(null,chunk__29183_29187,i__29185_29189);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29190);

var G__29191 = seq__29182_29186;
var G__29192 = chunk__29183_29187;
var G__29193 = count__29184_29188;
var G__29194 = (i__29185_29189 + (1));
seq__29182_29186 = G__29191;
chunk__29183_29187 = G__29192;
count__29184_29188 = G__29193;
i__29185_29189 = G__29194;
continue;
} else {
var temp__4126__auto___29195 = cljs.core.seq.call(null,seq__29182_29186);
if(temp__4126__auto___29195){
var seq__29182_29196__$1 = temp__4126__auto___29195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29182_29196__$1)){
var c__18945__auto___29197 = cljs.core.chunk_first.call(null,seq__29182_29196__$1);
var G__29198 = cljs.core.chunk_rest.call(null,seq__29182_29196__$1);
var G__29199 = c__18945__auto___29197;
var G__29200 = cljs.core.count.call(null,c__18945__auto___29197);
var G__29201 = (0);
seq__29182_29186 = G__29198;
chunk__29183_29187 = G__29199;
count__29184_29188 = G__29200;
i__29185_29189 = G__29201;
continue;
} else {
var msg_29202 = cljs.core.first.call(null,seq__29182_29196__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29202);

var G__29203 = cljs.core.next.call(null,seq__29182_29196__$1);
var G__29204 = null;
var G__29205 = (0);
var G__29206 = (0);
seq__29182_29186 = G__29203;
chunk__29183_29187 = G__29204;
count__29184_29188 = G__29205;
i__29185_29189 = G__29206;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29207){
var map__29209 = p__29207;
var map__29209__$1 = ((cljs.core.seq_QMARK_.call(null,map__29209))?cljs.core.apply.call(null,cljs.core.hash_map,map__29209):map__29209);
var w = map__29209__$1;
var message = cljs.core.get.call(null,map__29209__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18148__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18148__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18148__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29216 = cljs.core.seq.call(null,plugins);
var chunk__29217 = null;
var count__29218 = (0);
var i__29219 = (0);
while(true){
if((i__29219 < count__29218)){
var vec__29220 = cljs.core._nth.call(null,chunk__29217,i__29219);
var k = cljs.core.nth.call(null,vec__29220,(0),null);
var plugin = cljs.core.nth.call(null,vec__29220,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29222 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29216,chunk__29217,count__29218,i__29219,pl_29222,vec__29220,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29222.call(null,msg_hist);
});})(seq__29216,chunk__29217,count__29218,i__29219,pl_29222,vec__29220,k,plugin))
);
} else {
}

var G__29223 = seq__29216;
var G__29224 = chunk__29217;
var G__29225 = count__29218;
var G__29226 = (i__29219 + (1));
seq__29216 = G__29223;
chunk__29217 = G__29224;
count__29218 = G__29225;
i__29219 = G__29226;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29216);
if(temp__4126__auto__){
var seq__29216__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29216__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__29216__$1);
var G__29227 = cljs.core.chunk_rest.call(null,seq__29216__$1);
var G__29228 = c__18945__auto__;
var G__29229 = cljs.core.count.call(null,c__18945__auto__);
var G__29230 = (0);
seq__29216 = G__29227;
chunk__29217 = G__29228;
count__29218 = G__29229;
i__29219 = G__29230;
continue;
} else {
var vec__29221 = cljs.core.first.call(null,seq__29216__$1);
var k = cljs.core.nth.call(null,vec__29221,(0),null);
var plugin = cljs.core.nth.call(null,vec__29221,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29231 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29216,chunk__29217,count__29218,i__29219,pl_29231,vec__29221,k,plugin,seq__29216__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29231.call(null,msg_hist);
});})(seq__29216,chunk__29217,count__29218,i__29219,pl_29231,vec__29221,k,plugin,seq__29216__$1,temp__4126__auto__))
);
} else {
}

var G__29232 = cljs.core.next.call(null,seq__29216__$1);
var G__29233 = null;
var G__29234 = (0);
var G__29235 = (0);
seq__29216 = G__29232;
chunk__29217 = G__29233;
count__29218 = G__29234;
i__29219 = G__29235;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__29237 = arguments.length;
switch (G__29237) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29240){
var map__29241 = p__29240;
var map__29241__$1 = ((cljs.core.seq_QMARK_.call(null,map__29241))?cljs.core.apply.call(null,cljs.core.hash_map,map__29241):map__29241);
var opts = map__29241__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29239){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29239));
});

//# sourceMappingURL=client.js.map?rel=1442499281685