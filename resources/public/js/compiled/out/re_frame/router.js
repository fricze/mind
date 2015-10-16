// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_25918){
var state_val_25919 = (state_25918[(1)]);
if((state_val_25919 === (7))){
var inst_25903 = (state_25918[(2)]);
var state_25918__$1 = (function (){var statearr_25920 = state_25918;
(statearr_25920[(7)] = inst_25903);

return statearr_25920;
})();
var statearr_25921_25941 = state_25918__$1;
(statearr_25921_25941[(2)] = null);

(statearr_25921_25941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (1))){
var state_25918__$1 = state_25918;
var statearr_25922_25942 = state_25918__$1;
(statearr_25922_25942[(2)] = null);

(statearr_25922_25942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (4))){
var inst_25890 = (state_25918[(8)]);
var inst_25890__$1 = (state_25918[(2)]);
var inst_25891 = cljs.core.meta.call(null,inst_25890__$1);
var inst_25892 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_25891);
var state_25918__$1 = (function (){var statearr_25923 = state_25918;
(statearr_25923[(8)] = inst_25890__$1);

return statearr_25923;
})();
if(cljs.core.truth_(inst_25892)){
var statearr_25924_25943 = state_25918__$1;
(statearr_25924_25943[(1)] = (5));

} else {
var statearr_25925_25944 = state_25918__$1;
(statearr_25925_25944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (6))){
var inst_25899 = cljs.core.async.timeout.call(null,(0));
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25918__$1,(9),inst_25899);
} else {
if((state_val_25919 === (3))){
var inst_25916 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25918__$1,inst_25916);
} else {
if((state_val_25919 === (12))){
var inst_25890 = (state_25918[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25918,(11),Object,null,(10));
var inst_25911 = re_frame.handlers.handle.call(null,inst_25890);
var state_25918__$1 = state_25918;
var statearr_25926_25945 = state_25918__$1;
(statearr_25926_25945[(2)] = inst_25911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25918__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (2))){
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25918__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_25919 === (11))){
var inst_25904 = (state_25918[(2)]);
var inst_25905 = re_frame.router.purge_chan.call(null);
var inst_25906 = re_frame$router$router_loop.call(null);
var inst_25907 = (function(){throw inst_25904})();
var state_25918__$1 = (function (){var statearr_25927 = state_25918;
(statearr_25927[(9)] = inst_25906);

(statearr_25927[(10)] = inst_25905);

return statearr_25927;
})();
var statearr_25928_25946 = state_25918__$1;
(statearr_25928_25946[(2)] = inst_25907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25918__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (9))){
var inst_25901 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25929_25947 = state_25918__$1;
(statearr_25929_25947[(2)] = inst_25901);

(statearr_25929_25947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (5))){
var inst_25894 = reagent.core.flush.call(null);
var inst_25895 = cljs.core.async.timeout.call(null,(20));
var state_25918__$1 = (function (){var statearr_25930 = state_25918;
(statearr_25930[(11)] = inst_25894);

return statearr_25930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25918__$1,(8),inst_25895);
} else {
if((state_val_25919 === (10))){
var inst_25913 = (state_25918[(2)]);
var state_25918__$1 = (function (){var statearr_25931 = state_25918;
(statearr_25931[(12)] = inst_25913);

return statearr_25931;
})();
var statearr_25932_25948 = state_25918__$1;
(statearr_25932_25948[(2)] = null);

(statearr_25932_25948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (8))){
var inst_25897 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25933_25949 = state_25918__$1;
(statearr_25933_25949[(2)] = inst_25897);

(statearr_25933_25949[(1)] = (7));


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
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21323__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21323__auto____0 = (function (){
var statearr_25937 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25937[(0)] = re_frame$router$router_loop_$_state_machine__21323__auto__);

(statearr_25937[(1)] = (1));

return statearr_25937;
});
var re_frame$router$router_loop_$_state_machine__21323__auto____1 = (function (state_25918){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_25918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e25938){if((e25938 instanceof Object)){
var ex__21326__auto__ = e25938;
var statearr_25939_25950 = state_25918;
(statearr_25939_25950[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25951 = state_25918;
state_25918 = G__25951;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21323__auto__ = function(state_25918){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21323__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21323__auto____1.call(this,state_25918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21323__auto____0;
re_frame$router$router_loop_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21323__auto____1;
return re_frame$router$router_loop_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_25940 = f__21385__auto__.call(null);
(statearr_25940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_25940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1442499279256