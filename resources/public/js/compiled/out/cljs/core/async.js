// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25957 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25957 = (function (f,fn_handler,meta25958){
this.f = f;
this.fn_handler = fn_handler;
this.meta25958 = meta25958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25957.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25959){
var self__ = this;
var _25959__$1 = this;
return self__.meta25958;
});

cljs.core.async.t25957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25959,meta25958__$1){
var self__ = this;
var _25959__$1 = this;
return (new cljs.core.async.t25957(self__.f,self__.fn_handler,meta25958__$1));
});

cljs.core.async.t25957.cljs$lang$type = true;

cljs.core.async.t25957.cljs$lang$ctorStr = "cljs.core.async/t25957";

cljs.core.async.t25957.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t25957");
});

cljs.core.async.__GT_t25957 = (function cljs$core$async$fn_handler_$___GT_t25957(f__$1,fn_handler__$1,meta25958){
return (new cljs.core.async.t25957(f__$1,fn_handler__$1,meta25958));
});

}

return (new cljs.core.async.t25957(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25961 = buff;
if(G__25961){
var bit__18834__auto__ = null;
if(cljs.core.truth_((function (){var or__18160__auto__ = bit__18834__auto__;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return G__25961.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25961.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25961);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25961);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__25963 = arguments.length;
switch (G__25963) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__25966 = arguments.length;
switch (G__25966) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25968 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25968);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25968,ret){
return (function (){
return fn1.call(null,val_25968);
});})(val_25968,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__25970 = arguments.length;
switch (G__25970) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19045__auto___25972 = n;
var x_25973 = (0);
while(true){
if((x_25973 < n__19045__auto___25972)){
(a[x_25973] = (0));

var G__25974 = (x_25973 + (1));
x_25973 = G__25974;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25975 = (i + (1));
i = G__25975;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25979 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25979 = (function (flag,alt_flag,meta25980){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25980 = meta25980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25979.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25981){
var self__ = this;
var _25981__$1 = this;
return self__.meta25980;
});})(flag))
;

cljs.core.async.t25979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25981,meta25980__$1){
var self__ = this;
var _25981__$1 = this;
return (new cljs.core.async.t25979(self__.flag,self__.alt_flag,meta25980__$1));
});})(flag))
;

cljs.core.async.t25979.cljs$lang$type = true;

cljs.core.async.t25979.cljs$lang$ctorStr = "cljs.core.async/t25979";

cljs.core.async.t25979.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t25979");
});})(flag))
;

cljs.core.async.__GT_t25979 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25979(flag__$1,alt_flag__$1,meta25980){
return (new cljs.core.async.t25979(flag__$1,alt_flag__$1,meta25980));
});})(flag))
;

}

return (new cljs.core.async.t25979(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25985 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25985 = (function (cb,flag,alt_handler,meta25986){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25986 = meta25986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25985.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25987){
var self__ = this;
var _25987__$1 = this;
return self__.meta25986;
});

cljs.core.async.t25985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25987,meta25986__$1){
var self__ = this;
var _25987__$1 = this;
return (new cljs.core.async.t25985(self__.cb,self__.flag,self__.alt_handler,meta25986__$1));
});

cljs.core.async.t25985.cljs$lang$type = true;

cljs.core.async.t25985.cljs$lang$ctorStr = "cljs.core.async/t25985";

cljs.core.async.t25985.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t25985");
});

cljs.core.async.__GT_t25985 = (function cljs$core$async$alt_handler_$___GT_t25985(cb__$1,flag__$1,alt_handler__$1,meta25986){
return (new cljs.core.async.t25985(cb__$1,flag__$1,alt_handler__$1,meta25986));
});

}

return (new cljs.core.async.t25985(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25988_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25988_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25989_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25989_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18160__auto__ = wport;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25990 = (i + (1));
i = G__25990;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18160__auto__ = ret;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18148__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18148__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19200__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19200__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25993){
var map__25994 = p__25993;
var map__25994__$1 = ((cljs.core.seq_QMARK_.call(null,map__25994))?cljs.core.apply.call(null,cljs.core.hash_map,map__25994):map__25994);
var opts = map__25994__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25991){
var G__25992 = cljs.core.first.call(null,seq25991);
var seq25991__$1 = cljs.core.next.call(null,seq25991);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25992,seq25991__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25996 = arguments.length;
switch (G__25996) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21384__auto___26045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___26045){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___26045){
return (function (state_26020){
var state_val_26021 = (state_26020[(1)]);
if((state_val_26021 === (7))){
var inst_26016 = (state_26020[(2)]);
var state_26020__$1 = state_26020;
var statearr_26022_26046 = state_26020__$1;
(statearr_26022_26046[(2)] = inst_26016);

(statearr_26022_26046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (1))){
var state_26020__$1 = state_26020;
var statearr_26023_26047 = state_26020__$1;
(statearr_26023_26047[(2)] = null);

(statearr_26023_26047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (4))){
var inst_25999 = (state_26020[(7)]);
var inst_25999__$1 = (state_26020[(2)]);
var inst_26000 = (inst_25999__$1 == null);
var state_26020__$1 = (function (){var statearr_26024 = state_26020;
(statearr_26024[(7)] = inst_25999__$1);

return statearr_26024;
})();
if(cljs.core.truth_(inst_26000)){
var statearr_26025_26048 = state_26020__$1;
(statearr_26025_26048[(1)] = (5));

} else {
var statearr_26026_26049 = state_26020__$1;
(statearr_26026_26049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (13))){
var state_26020__$1 = state_26020;
var statearr_26027_26050 = state_26020__$1;
(statearr_26027_26050[(2)] = null);

(statearr_26027_26050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (6))){
var inst_25999 = (state_26020[(7)]);
var state_26020__$1 = state_26020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26020__$1,(11),to,inst_25999);
} else {
if((state_val_26021 === (3))){
var inst_26018 = (state_26020[(2)]);
var state_26020__$1 = state_26020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26020__$1,inst_26018);
} else {
if((state_val_26021 === (12))){
var state_26020__$1 = state_26020;
var statearr_26028_26051 = state_26020__$1;
(statearr_26028_26051[(2)] = null);

(statearr_26028_26051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (2))){
var state_26020__$1 = state_26020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26020__$1,(4),from);
} else {
if((state_val_26021 === (11))){
var inst_26009 = (state_26020[(2)]);
var state_26020__$1 = state_26020;
if(cljs.core.truth_(inst_26009)){
var statearr_26029_26052 = state_26020__$1;
(statearr_26029_26052[(1)] = (12));

} else {
var statearr_26030_26053 = state_26020__$1;
(statearr_26030_26053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (9))){
var state_26020__$1 = state_26020;
var statearr_26031_26054 = state_26020__$1;
(statearr_26031_26054[(2)] = null);

(statearr_26031_26054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (5))){
var state_26020__$1 = state_26020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26032_26055 = state_26020__$1;
(statearr_26032_26055[(1)] = (8));

} else {
var statearr_26033_26056 = state_26020__$1;
(statearr_26033_26056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (14))){
var inst_26014 = (state_26020[(2)]);
var state_26020__$1 = state_26020;
var statearr_26034_26057 = state_26020__$1;
(statearr_26034_26057[(2)] = inst_26014);

(statearr_26034_26057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (10))){
var inst_26006 = (state_26020[(2)]);
var state_26020__$1 = state_26020;
var statearr_26035_26058 = state_26020__$1;
(statearr_26035_26058[(2)] = inst_26006);

(statearr_26035_26058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (8))){
var inst_26003 = cljs.core.async.close_BANG_.call(null,to);
var state_26020__$1 = state_26020;
var statearr_26036_26059 = state_26020__$1;
(statearr_26036_26059[(2)] = inst_26003);

(statearr_26036_26059[(1)] = (10));


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
});})(c__21384__auto___26045))
;
return ((function (switch__21322__auto__,c__21384__auto___26045){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_26040 = [null,null,null,null,null,null,null,null];
(statearr_26040[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_26040[(1)] = (1));

return statearr_26040;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_26020){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26041){if((e26041 instanceof Object)){
var ex__21326__auto__ = e26041;
var statearr_26042_26060 = state_26020;
(statearr_26042_26060[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26061 = state_26020;
state_26020 = G__26061;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_26020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_26020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___26045))
})();
var state__21386__auto__ = (function (){var statearr_26043 = f__21385__auto__.call(null);
(statearr_26043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26045);

return statearr_26043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___26045))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26245){
var vec__26246 = p__26245;
var v = cljs.core.nth.call(null,vec__26246,(0),null);
var p = cljs.core.nth.call(null,vec__26246,(1),null);
var job = vec__26246;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21384__auto___26428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___26428,res,vec__26246,v,p,job,jobs,results){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___26428,res,vec__26246,v,p,job,jobs,results){
return (function (state_26251){
var state_val_26252 = (state_26251[(1)]);
if((state_val_26252 === (2))){
var inst_26248 = (state_26251[(2)]);
var inst_26249 = cljs.core.async.close_BANG_.call(null,res);
var state_26251__$1 = (function (){var statearr_26253 = state_26251;
(statearr_26253[(7)] = inst_26248);

return statearr_26253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26251__$1,inst_26249);
} else {
if((state_val_26252 === (1))){
var state_26251__$1 = state_26251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26251__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21384__auto___26428,res,vec__26246,v,p,job,jobs,results))
;
return ((function (switch__21322__auto__,c__21384__auto___26428,res,vec__26246,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26257 = [null,null,null,null,null,null,null,null];
(statearr_26257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26257[(1)] = (1));

return statearr_26257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26251){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26258){if((e26258 instanceof Object)){
var ex__21326__auto__ = e26258;
var statearr_26259_26429 = state_26251;
(statearr_26259_26429[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26430 = state_26251;
state_26251 = G__26430;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___26428,res,vec__26246,v,p,job,jobs,results))
})();
var state__21386__auto__ = (function (){var statearr_26260 = f__21385__auto__.call(null);
(statearr_26260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26428);

return statearr_26260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___26428,res,vec__26246,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26261){
var vec__26262 = p__26261;
var v = cljs.core.nth.call(null,vec__26262,(0),null);
var p = cljs.core.nth.call(null,vec__26262,(1),null);
var job = vec__26262;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19045__auto___26431 = n;
var __26432 = (0);
while(true){
if((__26432 < n__19045__auto___26431)){
var G__26263_26433 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26263_26433) {
case "async":
var c__21384__auto___26435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26432,c__21384__auto___26435,G__26263_26433,n__19045__auto___26431,jobs,results,process,async){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (__26432,c__21384__auto___26435,G__26263_26433,n__19045__auto___26431,jobs,results,process,async){
return (function (state_26276){
var state_val_26277 = (state_26276[(1)]);
if((state_val_26277 === (7))){
var inst_26272 = (state_26276[(2)]);
var state_26276__$1 = state_26276;
var statearr_26278_26436 = state_26276__$1;
(statearr_26278_26436[(2)] = inst_26272);

(statearr_26278_26436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26277 === (6))){
var state_26276__$1 = state_26276;
var statearr_26279_26437 = state_26276__$1;
(statearr_26279_26437[(2)] = null);

(statearr_26279_26437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26277 === (5))){
var state_26276__$1 = state_26276;
var statearr_26280_26438 = state_26276__$1;
(statearr_26280_26438[(2)] = null);

(statearr_26280_26438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26277 === (4))){
var inst_26266 = (state_26276[(2)]);
var inst_26267 = async.call(null,inst_26266);
var state_26276__$1 = state_26276;
if(cljs.core.truth_(inst_26267)){
var statearr_26281_26439 = state_26276__$1;
(statearr_26281_26439[(1)] = (5));

} else {
var statearr_26282_26440 = state_26276__$1;
(statearr_26282_26440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26277 === (3))){
var inst_26274 = (state_26276[(2)]);
var state_26276__$1 = state_26276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26276__$1,inst_26274);
} else {
if((state_val_26277 === (2))){
var state_26276__$1 = state_26276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26276__$1,(4),jobs);
} else {
if((state_val_26277 === (1))){
var state_26276__$1 = state_26276;
var statearr_26283_26441 = state_26276__$1;
(statearr_26283_26441[(2)] = null);

(statearr_26283_26441[(1)] = (2));


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
});})(__26432,c__21384__auto___26435,G__26263_26433,n__19045__auto___26431,jobs,results,process,async))
;
return ((function (__26432,switch__21322__auto__,c__21384__auto___26435,G__26263_26433,n__19045__auto___26431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26287 = [null,null,null,null,null,null,null];
(statearr_26287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26287[(1)] = (1));

return statearr_26287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26276){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26288){if((e26288 instanceof Object)){
var ex__21326__auto__ = e26288;
var statearr_26289_26442 = state_26276;
(statearr_26289_26442[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26443 = state_26276;
state_26276 = G__26443;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(__26432,switch__21322__auto__,c__21384__auto___26435,G__26263_26433,n__19045__auto___26431,jobs,results,process,async))
})();
var state__21386__auto__ = (function (){var statearr_26290 = f__21385__auto__.call(null);
(statearr_26290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26435);

return statearr_26290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(__26432,c__21384__auto___26435,G__26263_26433,n__19045__auto___26431,jobs,results,process,async))
);


break;
case "compute":
var c__21384__auto___26444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26432,c__21384__auto___26444,G__26263_26433,n__19045__auto___26431,jobs,results,process,async){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (__26432,c__21384__auto___26444,G__26263_26433,n__19045__auto___26431,jobs,results,process,async){
return (function (state_26303){
var state_val_26304 = (state_26303[(1)]);
if((state_val_26304 === (7))){
var inst_26299 = (state_26303[(2)]);
var state_26303__$1 = state_26303;
var statearr_26305_26445 = state_26303__$1;
(statearr_26305_26445[(2)] = inst_26299);

(statearr_26305_26445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (6))){
var state_26303__$1 = state_26303;
var statearr_26306_26446 = state_26303__$1;
(statearr_26306_26446[(2)] = null);

(statearr_26306_26446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (5))){
var state_26303__$1 = state_26303;
var statearr_26307_26447 = state_26303__$1;
(statearr_26307_26447[(2)] = null);

(statearr_26307_26447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (4))){
var inst_26293 = (state_26303[(2)]);
var inst_26294 = process.call(null,inst_26293);
var state_26303__$1 = state_26303;
if(cljs.core.truth_(inst_26294)){
var statearr_26308_26448 = state_26303__$1;
(statearr_26308_26448[(1)] = (5));

} else {
var statearr_26309_26449 = state_26303__$1;
(statearr_26309_26449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (3))){
var inst_26301 = (state_26303[(2)]);
var state_26303__$1 = state_26303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26303__$1,inst_26301);
} else {
if((state_val_26304 === (2))){
var state_26303__$1 = state_26303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26303__$1,(4),jobs);
} else {
if((state_val_26304 === (1))){
var state_26303__$1 = state_26303;
var statearr_26310_26450 = state_26303__$1;
(statearr_26310_26450[(2)] = null);

(statearr_26310_26450[(1)] = (2));


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
});})(__26432,c__21384__auto___26444,G__26263_26433,n__19045__auto___26431,jobs,results,process,async))
;
return ((function (__26432,switch__21322__auto__,c__21384__auto___26444,G__26263_26433,n__19045__auto___26431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26314 = [null,null,null,null,null,null,null];
(statearr_26314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26314[(1)] = (1));

return statearr_26314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26303){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26315){if((e26315 instanceof Object)){
var ex__21326__auto__ = e26315;
var statearr_26316_26451 = state_26303;
(statearr_26316_26451[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26452 = state_26303;
state_26303 = G__26452;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(__26432,switch__21322__auto__,c__21384__auto___26444,G__26263_26433,n__19045__auto___26431,jobs,results,process,async))
})();
var state__21386__auto__ = (function (){var statearr_26317 = f__21385__auto__.call(null);
(statearr_26317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26444);

return statearr_26317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(__26432,c__21384__auto___26444,G__26263_26433,n__19045__auto___26431,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26453 = (__26432 + (1));
__26432 = G__26453;
continue;
} else {
}
break;
}

var c__21384__auto___26454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___26454,jobs,results,process,async){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___26454,jobs,results,process,async){
return (function (state_26339){
var state_val_26340 = (state_26339[(1)]);
if((state_val_26340 === (9))){
var inst_26332 = (state_26339[(2)]);
var state_26339__$1 = (function (){var statearr_26341 = state_26339;
(statearr_26341[(7)] = inst_26332);

return statearr_26341;
})();
var statearr_26342_26455 = state_26339__$1;
(statearr_26342_26455[(2)] = null);

(statearr_26342_26455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (8))){
var inst_26325 = (state_26339[(8)]);
var inst_26330 = (state_26339[(2)]);
var state_26339__$1 = (function (){var statearr_26343 = state_26339;
(statearr_26343[(9)] = inst_26330);

return statearr_26343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26339__$1,(9),results,inst_26325);
} else {
if((state_val_26340 === (7))){
var inst_26335 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26344_26456 = state_26339__$1;
(statearr_26344_26456[(2)] = inst_26335);

(statearr_26344_26456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (6))){
var inst_26320 = (state_26339[(10)]);
var inst_26325 = (state_26339[(8)]);
var inst_26325__$1 = cljs.core.async.chan.call(null,(1));
var inst_26326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26327 = [inst_26320,inst_26325__$1];
var inst_26328 = (new cljs.core.PersistentVector(null,2,(5),inst_26326,inst_26327,null));
var state_26339__$1 = (function (){var statearr_26345 = state_26339;
(statearr_26345[(8)] = inst_26325__$1);

return statearr_26345;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26339__$1,(8),jobs,inst_26328);
} else {
if((state_val_26340 === (5))){
var inst_26323 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26339__$1 = state_26339;
var statearr_26346_26457 = state_26339__$1;
(statearr_26346_26457[(2)] = inst_26323);

(statearr_26346_26457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (4))){
var inst_26320 = (state_26339[(10)]);
var inst_26320__$1 = (state_26339[(2)]);
var inst_26321 = (inst_26320__$1 == null);
var state_26339__$1 = (function (){var statearr_26347 = state_26339;
(statearr_26347[(10)] = inst_26320__$1);

return statearr_26347;
})();
if(cljs.core.truth_(inst_26321)){
var statearr_26348_26458 = state_26339__$1;
(statearr_26348_26458[(1)] = (5));

} else {
var statearr_26349_26459 = state_26339__$1;
(statearr_26349_26459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (3))){
var inst_26337 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26339__$1,inst_26337);
} else {
if((state_val_26340 === (2))){
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(4),from);
} else {
if((state_val_26340 === (1))){
var state_26339__$1 = state_26339;
var statearr_26350_26460 = state_26339__$1;
(statearr_26350_26460[(2)] = null);

(statearr_26350_26460[(1)] = (2));


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
});})(c__21384__auto___26454,jobs,results,process,async))
;
return ((function (switch__21322__auto__,c__21384__auto___26454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26354[(1)] = (1));

return statearr_26354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26339){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26355){if((e26355 instanceof Object)){
var ex__21326__auto__ = e26355;
var statearr_26356_26461 = state_26339;
(statearr_26356_26461[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26462 = state_26339;
state_26339 = G__26462;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___26454,jobs,results,process,async))
})();
var state__21386__auto__ = (function (){var statearr_26357 = f__21385__auto__.call(null);
(statearr_26357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26454);

return statearr_26357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___26454,jobs,results,process,async))
);


var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,jobs,results,process,async){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,jobs,results,process,async){
return (function (state_26395){
var state_val_26396 = (state_26395[(1)]);
if((state_val_26396 === (7))){
var inst_26391 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26397_26463 = state_26395__$1;
(statearr_26397_26463[(2)] = inst_26391);

(statearr_26397_26463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (20))){
var state_26395__$1 = state_26395;
var statearr_26398_26464 = state_26395__$1;
(statearr_26398_26464[(2)] = null);

(statearr_26398_26464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (1))){
var state_26395__$1 = state_26395;
var statearr_26399_26465 = state_26395__$1;
(statearr_26399_26465[(2)] = null);

(statearr_26399_26465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (4))){
var inst_26360 = (state_26395[(7)]);
var inst_26360__$1 = (state_26395[(2)]);
var inst_26361 = (inst_26360__$1 == null);
var state_26395__$1 = (function (){var statearr_26400 = state_26395;
(statearr_26400[(7)] = inst_26360__$1);

return statearr_26400;
})();
if(cljs.core.truth_(inst_26361)){
var statearr_26401_26466 = state_26395__$1;
(statearr_26401_26466[(1)] = (5));

} else {
var statearr_26402_26467 = state_26395__$1;
(statearr_26402_26467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (15))){
var inst_26373 = (state_26395[(8)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26395__$1,(18),to,inst_26373);
} else {
if((state_val_26396 === (21))){
var inst_26386 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26403_26468 = state_26395__$1;
(statearr_26403_26468[(2)] = inst_26386);

(statearr_26403_26468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (13))){
var inst_26388 = (state_26395[(2)]);
var state_26395__$1 = (function (){var statearr_26404 = state_26395;
(statearr_26404[(9)] = inst_26388);

return statearr_26404;
})();
var statearr_26405_26469 = state_26395__$1;
(statearr_26405_26469[(2)] = null);

(statearr_26405_26469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (6))){
var inst_26360 = (state_26395[(7)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(11),inst_26360);
} else {
if((state_val_26396 === (17))){
var inst_26381 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26381)){
var statearr_26406_26470 = state_26395__$1;
(statearr_26406_26470[(1)] = (19));

} else {
var statearr_26407_26471 = state_26395__$1;
(statearr_26407_26471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (3))){
var inst_26393 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26395__$1,inst_26393);
} else {
if((state_val_26396 === (12))){
var inst_26370 = (state_26395[(10)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(14),inst_26370);
} else {
if((state_val_26396 === (2))){
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(4),results);
} else {
if((state_val_26396 === (19))){
var state_26395__$1 = state_26395;
var statearr_26408_26472 = state_26395__$1;
(statearr_26408_26472[(2)] = null);

(statearr_26408_26472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (11))){
var inst_26370 = (state_26395[(2)]);
var state_26395__$1 = (function (){var statearr_26409 = state_26395;
(statearr_26409[(10)] = inst_26370);

return statearr_26409;
})();
var statearr_26410_26473 = state_26395__$1;
(statearr_26410_26473[(2)] = null);

(statearr_26410_26473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (9))){
var state_26395__$1 = state_26395;
var statearr_26411_26474 = state_26395__$1;
(statearr_26411_26474[(2)] = null);

(statearr_26411_26474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (5))){
var state_26395__$1 = state_26395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26412_26475 = state_26395__$1;
(statearr_26412_26475[(1)] = (8));

} else {
var statearr_26413_26476 = state_26395__$1;
(statearr_26413_26476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (14))){
var inst_26373 = (state_26395[(8)]);
var inst_26375 = (state_26395[(11)]);
var inst_26373__$1 = (state_26395[(2)]);
var inst_26374 = (inst_26373__$1 == null);
var inst_26375__$1 = cljs.core.not.call(null,inst_26374);
var state_26395__$1 = (function (){var statearr_26414 = state_26395;
(statearr_26414[(8)] = inst_26373__$1);

(statearr_26414[(11)] = inst_26375__$1);

return statearr_26414;
})();
if(inst_26375__$1){
var statearr_26415_26477 = state_26395__$1;
(statearr_26415_26477[(1)] = (15));

} else {
var statearr_26416_26478 = state_26395__$1;
(statearr_26416_26478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (16))){
var inst_26375 = (state_26395[(11)]);
var state_26395__$1 = state_26395;
var statearr_26417_26479 = state_26395__$1;
(statearr_26417_26479[(2)] = inst_26375);

(statearr_26417_26479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (10))){
var inst_26367 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26418_26480 = state_26395__$1;
(statearr_26418_26480[(2)] = inst_26367);

(statearr_26418_26480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (18))){
var inst_26378 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26419_26481 = state_26395__$1;
(statearr_26419_26481[(2)] = inst_26378);

(statearr_26419_26481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (8))){
var inst_26364 = cljs.core.async.close_BANG_.call(null,to);
var state_26395__$1 = state_26395;
var statearr_26420_26482 = state_26395__$1;
(statearr_26420_26482[(2)] = inst_26364);

(statearr_26420_26482[(1)] = (10));


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
});})(c__21384__auto__,jobs,results,process,async))
;
return ((function (switch__21322__auto__,c__21384__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26424 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26424[(1)] = (1));

return statearr_26424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26395){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26425){if((e26425 instanceof Object)){
var ex__21326__auto__ = e26425;
var statearr_26426_26483 = state_26395;
(statearr_26426_26483[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26484 = state_26395;
state_26395 = G__26484;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,jobs,results,process,async))
})();
var state__21386__auto__ = (function (){var statearr_26427 = f__21385__auto__.call(null);
(statearr_26427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,jobs,results,process,async))
);

return c__21384__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__26486 = arguments.length;
switch (G__26486) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__26489 = arguments.length;
switch (G__26489) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__26492 = arguments.length;
switch (G__26492) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21384__auto___26544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___26544,tc,fc){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___26544,tc,fc){
return (function (state_26518){
var state_val_26519 = (state_26518[(1)]);
if((state_val_26519 === (7))){
var inst_26514 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26520_26545 = state_26518__$1;
(statearr_26520_26545[(2)] = inst_26514);

(statearr_26520_26545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (1))){
var state_26518__$1 = state_26518;
var statearr_26521_26546 = state_26518__$1;
(statearr_26521_26546[(2)] = null);

(statearr_26521_26546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (4))){
var inst_26495 = (state_26518[(7)]);
var inst_26495__$1 = (state_26518[(2)]);
var inst_26496 = (inst_26495__$1 == null);
var state_26518__$1 = (function (){var statearr_26522 = state_26518;
(statearr_26522[(7)] = inst_26495__$1);

return statearr_26522;
})();
if(cljs.core.truth_(inst_26496)){
var statearr_26523_26547 = state_26518__$1;
(statearr_26523_26547[(1)] = (5));

} else {
var statearr_26524_26548 = state_26518__$1;
(statearr_26524_26548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (13))){
var state_26518__$1 = state_26518;
var statearr_26525_26549 = state_26518__$1;
(statearr_26525_26549[(2)] = null);

(statearr_26525_26549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (6))){
var inst_26495 = (state_26518[(7)]);
var inst_26501 = p.call(null,inst_26495);
var state_26518__$1 = state_26518;
if(cljs.core.truth_(inst_26501)){
var statearr_26526_26550 = state_26518__$1;
(statearr_26526_26550[(1)] = (9));

} else {
var statearr_26527_26551 = state_26518__$1;
(statearr_26527_26551[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (3))){
var inst_26516 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26518__$1,inst_26516);
} else {
if((state_val_26519 === (12))){
var state_26518__$1 = state_26518;
var statearr_26528_26552 = state_26518__$1;
(statearr_26528_26552[(2)] = null);

(statearr_26528_26552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (2))){
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26518__$1,(4),ch);
} else {
if((state_val_26519 === (11))){
var inst_26495 = (state_26518[(7)]);
var inst_26505 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26518__$1,(8),inst_26505,inst_26495);
} else {
if((state_val_26519 === (9))){
var state_26518__$1 = state_26518;
var statearr_26529_26553 = state_26518__$1;
(statearr_26529_26553[(2)] = tc);

(statearr_26529_26553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (5))){
var inst_26498 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26499 = cljs.core.async.close_BANG_.call(null,fc);
var state_26518__$1 = (function (){var statearr_26530 = state_26518;
(statearr_26530[(8)] = inst_26498);

return statearr_26530;
})();
var statearr_26531_26554 = state_26518__$1;
(statearr_26531_26554[(2)] = inst_26499);

(statearr_26531_26554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (14))){
var inst_26512 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26532_26555 = state_26518__$1;
(statearr_26532_26555[(2)] = inst_26512);

(statearr_26532_26555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (10))){
var state_26518__$1 = state_26518;
var statearr_26533_26556 = state_26518__$1;
(statearr_26533_26556[(2)] = fc);

(statearr_26533_26556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (8))){
var inst_26507 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
if(cljs.core.truth_(inst_26507)){
var statearr_26534_26557 = state_26518__$1;
(statearr_26534_26557[(1)] = (12));

} else {
var statearr_26535_26558 = state_26518__$1;
(statearr_26535_26558[(1)] = (13));

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
});})(c__21384__auto___26544,tc,fc))
;
return ((function (switch__21322__auto__,c__21384__auto___26544,tc,fc){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_26539 = [null,null,null,null,null,null,null,null,null];
(statearr_26539[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_26539[(1)] = (1));

return statearr_26539;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_26518){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26540){if((e26540 instanceof Object)){
var ex__21326__auto__ = e26540;
var statearr_26541_26559 = state_26518;
(statearr_26541_26559[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26560 = state_26518;
state_26518 = G__26560;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_26518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_26518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___26544,tc,fc))
})();
var state__21386__auto__ = (function (){var statearr_26542 = f__21385__auto__.call(null);
(statearr_26542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26544);

return statearr_26542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___26544,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_26607){
var state_val_26608 = (state_26607[(1)]);
if((state_val_26608 === (7))){
var inst_26603 = (state_26607[(2)]);
var state_26607__$1 = state_26607;
var statearr_26609_26625 = state_26607__$1;
(statearr_26609_26625[(2)] = inst_26603);

(statearr_26609_26625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (6))){
var inst_26596 = (state_26607[(7)]);
var inst_26593 = (state_26607[(8)]);
var inst_26600 = f.call(null,inst_26593,inst_26596);
var inst_26593__$1 = inst_26600;
var state_26607__$1 = (function (){var statearr_26610 = state_26607;
(statearr_26610[(8)] = inst_26593__$1);

return statearr_26610;
})();
var statearr_26611_26626 = state_26607__$1;
(statearr_26611_26626[(2)] = null);

(statearr_26611_26626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (5))){
var inst_26593 = (state_26607[(8)]);
var state_26607__$1 = state_26607;
var statearr_26612_26627 = state_26607__$1;
(statearr_26612_26627[(2)] = inst_26593);

(statearr_26612_26627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (4))){
var inst_26596 = (state_26607[(7)]);
var inst_26596__$1 = (state_26607[(2)]);
var inst_26597 = (inst_26596__$1 == null);
var state_26607__$1 = (function (){var statearr_26613 = state_26607;
(statearr_26613[(7)] = inst_26596__$1);

return statearr_26613;
})();
if(cljs.core.truth_(inst_26597)){
var statearr_26614_26628 = state_26607__$1;
(statearr_26614_26628[(1)] = (5));

} else {
var statearr_26615_26629 = state_26607__$1;
(statearr_26615_26629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (3))){
var inst_26605 = (state_26607[(2)]);
var state_26607__$1 = state_26607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26607__$1,inst_26605);
} else {
if((state_val_26608 === (2))){
var state_26607__$1 = state_26607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26607__$1,(4),ch);
} else {
if((state_val_26608 === (1))){
var inst_26593 = init;
var state_26607__$1 = (function (){var statearr_26616 = state_26607;
(statearr_26616[(8)] = inst_26593);

return statearr_26616;
})();
var statearr_26617_26630 = state_26607__$1;
(statearr_26617_26630[(2)] = null);

(statearr_26617_26630[(1)] = (2));


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
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21323__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21323__auto____0 = (function (){
var statearr_26621 = [null,null,null,null,null,null,null,null,null];
(statearr_26621[(0)] = cljs$core$async$reduce_$_state_machine__21323__auto__);

(statearr_26621[(1)] = (1));

return statearr_26621;
});
var cljs$core$async$reduce_$_state_machine__21323__auto____1 = (function (state_26607){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26622){if((e26622 instanceof Object)){
var ex__21326__auto__ = e26622;
var statearr_26623_26631 = state_26607;
(statearr_26623_26631[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26632 = state_26607;
state_26607 = G__26632;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21323__auto__ = function(state_26607){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21323__auto____1.call(this,state_26607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21323__auto____0;
cljs$core$async$reduce_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21323__auto____1;
return cljs$core$async$reduce_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_26624 = f__21385__auto__.call(null);
(statearr_26624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_26624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__26634 = arguments.length;
switch (G__26634) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_26659){
var state_val_26660 = (state_26659[(1)]);
if((state_val_26660 === (7))){
var inst_26641 = (state_26659[(2)]);
var state_26659__$1 = state_26659;
var statearr_26661_26685 = state_26659__$1;
(statearr_26661_26685[(2)] = inst_26641);

(statearr_26661_26685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (1))){
var inst_26635 = cljs.core.seq.call(null,coll);
var inst_26636 = inst_26635;
var state_26659__$1 = (function (){var statearr_26662 = state_26659;
(statearr_26662[(7)] = inst_26636);

return statearr_26662;
})();
var statearr_26663_26686 = state_26659__$1;
(statearr_26663_26686[(2)] = null);

(statearr_26663_26686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (4))){
var inst_26636 = (state_26659[(7)]);
var inst_26639 = cljs.core.first.call(null,inst_26636);
var state_26659__$1 = state_26659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26659__$1,(7),ch,inst_26639);
} else {
if((state_val_26660 === (13))){
var inst_26653 = (state_26659[(2)]);
var state_26659__$1 = state_26659;
var statearr_26664_26687 = state_26659__$1;
(statearr_26664_26687[(2)] = inst_26653);

(statearr_26664_26687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (6))){
var inst_26644 = (state_26659[(2)]);
var state_26659__$1 = state_26659;
if(cljs.core.truth_(inst_26644)){
var statearr_26665_26688 = state_26659__$1;
(statearr_26665_26688[(1)] = (8));

} else {
var statearr_26666_26689 = state_26659__$1;
(statearr_26666_26689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (3))){
var inst_26657 = (state_26659[(2)]);
var state_26659__$1 = state_26659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26659__$1,inst_26657);
} else {
if((state_val_26660 === (12))){
var state_26659__$1 = state_26659;
var statearr_26667_26690 = state_26659__$1;
(statearr_26667_26690[(2)] = null);

(statearr_26667_26690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (2))){
var inst_26636 = (state_26659[(7)]);
var state_26659__$1 = state_26659;
if(cljs.core.truth_(inst_26636)){
var statearr_26668_26691 = state_26659__$1;
(statearr_26668_26691[(1)] = (4));

} else {
var statearr_26669_26692 = state_26659__$1;
(statearr_26669_26692[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (11))){
var inst_26650 = cljs.core.async.close_BANG_.call(null,ch);
var state_26659__$1 = state_26659;
var statearr_26670_26693 = state_26659__$1;
(statearr_26670_26693[(2)] = inst_26650);

(statearr_26670_26693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (9))){
var state_26659__$1 = state_26659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26671_26694 = state_26659__$1;
(statearr_26671_26694[(1)] = (11));

} else {
var statearr_26672_26695 = state_26659__$1;
(statearr_26672_26695[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (5))){
var inst_26636 = (state_26659[(7)]);
var state_26659__$1 = state_26659;
var statearr_26673_26696 = state_26659__$1;
(statearr_26673_26696[(2)] = inst_26636);

(statearr_26673_26696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (10))){
var inst_26655 = (state_26659[(2)]);
var state_26659__$1 = state_26659;
var statearr_26674_26697 = state_26659__$1;
(statearr_26674_26697[(2)] = inst_26655);

(statearr_26674_26697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (8))){
var inst_26636 = (state_26659[(7)]);
var inst_26646 = cljs.core.next.call(null,inst_26636);
var inst_26636__$1 = inst_26646;
var state_26659__$1 = (function (){var statearr_26675 = state_26659;
(statearr_26675[(7)] = inst_26636__$1);

return statearr_26675;
})();
var statearr_26676_26698 = state_26659__$1;
(statearr_26676_26698[(2)] = null);

(statearr_26676_26698[(1)] = (2));


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
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_26680 = [null,null,null,null,null,null,null,null];
(statearr_26680[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_26680[(1)] = (1));

return statearr_26680;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_26659){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26681){if((e26681 instanceof Object)){
var ex__21326__auto__ = e26681;
var statearr_26682_26699 = state_26659;
(statearr_26682_26699[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26700 = state_26659;
state_26659 = G__26700;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_26659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_26659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_26683 = f__21385__auto__.call(null);
(statearr_26683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_26683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26702 = {};
return obj26702;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18148__auto__ = _;
if(and__18148__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18796__auto__ = (((_ == null))?null:_);
return (function (){var or__18160__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26704 = {};
return obj26704;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26926 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26926 = (function (cs,ch,mult,meta26927){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26927 = meta26927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26926.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26926.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26926.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26926.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26926.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26928){
var self__ = this;
var _26928__$1 = this;
return self__.meta26927;
});})(cs))
;

cljs.core.async.t26926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26928,meta26927__$1){
var self__ = this;
var _26928__$1 = this;
return (new cljs.core.async.t26926(self__.cs,self__.ch,self__.mult,meta26927__$1));
});})(cs))
;

cljs.core.async.t26926.cljs$lang$type = true;

cljs.core.async.t26926.cljs$lang$ctorStr = "cljs.core.async/t26926";

cljs.core.async.t26926.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26926");
});})(cs))
;

cljs.core.async.__GT_t26926 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26926(cs__$1,ch__$1,mult__$1,meta26927){
return (new cljs.core.async.t26926(cs__$1,ch__$1,mult__$1,meta26927));
});})(cs))
;

}

return (new cljs.core.async.t26926(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21384__auto___27147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27147,cs,m,dchan,dctr,done){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27147,cs,m,dchan,dctr,done){
return (function (state_27059){
var state_val_27060 = (state_27059[(1)]);
if((state_val_27060 === (7))){
var inst_27055 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27061_27148 = state_27059__$1;
(statearr_27061_27148[(2)] = inst_27055);

(statearr_27061_27148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (20))){
var inst_26960 = (state_27059[(7)]);
var inst_26970 = cljs.core.first.call(null,inst_26960);
var inst_26971 = cljs.core.nth.call(null,inst_26970,(0),null);
var inst_26972 = cljs.core.nth.call(null,inst_26970,(1),null);
var state_27059__$1 = (function (){var statearr_27062 = state_27059;
(statearr_27062[(8)] = inst_26971);

return statearr_27062;
})();
if(cljs.core.truth_(inst_26972)){
var statearr_27063_27149 = state_27059__$1;
(statearr_27063_27149[(1)] = (22));

} else {
var statearr_27064_27150 = state_27059__$1;
(statearr_27064_27150[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (27))){
var inst_26931 = (state_27059[(9)]);
var inst_27002 = (state_27059[(10)]);
var inst_27007 = (state_27059[(11)]);
var inst_27000 = (state_27059[(12)]);
var inst_27007__$1 = cljs.core._nth.call(null,inst_27000,inst_27002);
var inst_27008 = cljs.core.async.put_BANG_.call(null,inst_27007__$1,inst_26931,done);
var state_27059__$1 = (function (){var statearr_27065 = state_27059;
(statearr_27065[(11)] = inst_27007__$1);

return statearr_27065;
})();
if(cljs.core.truth_(inst_27008)){
var statearr_27066_27151 = state_27059__$1;
(statearr_27066_27151[(1)] = (30));

} else {
var statearr_27067_27152 = state_27059__$1;
(statearr_27067_27152[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (1))){
var state_27059__$1 = state_27059;
var statearr_27068_27153 = state_27059__$1;
(statearr_27068_27153[(2)] = null);

(statearr_27068_27153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (24))){
var inst_26960 = (state_27059[(7)]);
var inst_26977 = (state_27059[(2)]);
var inst_26978 = cljs.core.next.call(null,inst_26960);
var inst_26940 = inst_26978;
var inst_26941 = null;
var inst_26942 = (0);
var inst_26943 = (0);
var state_27059__$1 = (function (){var statearr_27069 = state_27059;
(statearr_27069[(13)] = inst_26942);

(statearr_27069[(14)] = inst_26943);

(statearr_27069[(15)] = inst_26940);

(statearr_27069[(16)] = inst_26941);

(statearr_27069[(17)] = inst_26977);

return statearr_27069;
})();
var statearr_27070_27154 = state_27059__$1;
(statearr_27070_27154[(2)] = null);

(statearr_27070_27154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (39))){
var state_27059__$1 = state_27059;
var statearr_27074_27155 = state_27059__$1;
(statearr_27074_27155[(2)] = null);

(statearr_27074_27155[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (4))){
var inst_26931 = (state_27059[(9)]);
var inst_26931__$1 = (state_27059[(2)]);
var inst_26932 = (inst_26931__$1 == null);
var state_27059__$1 = (function (){var statearr_27075 = state_27059;
(statearr_27075[(9)] = inst_26931__$1);

return statearr_27075;
})();
if(cljs.core.truth_(inst_26932)){
var statearr_27076_27156 = state_27059__$1;
(statearr_27076_27156[(1)] = (5));

} else {
var statearr_27077_27157 = state_27059__$1;
(statearr_27077_27157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (15))){
var inst_26942 = (state_27059[(13)]);
var inst_26943 = (state_27059[(14)]);
var inst_26940 = (state_27059[(15)]);
var inst_26941 = (state_27059[(16)]);
var inst_26956 = (state_27059[(2)]);
var inst_26957 = (inst_26943 + (1));
var tmp27071 = inst_26942;
var tmp27072 = inst_26940;
var tmp27073 = inst_26941;
var inst_26940__$1 = tmp27072;
var inst_26941__$1 = tmp27073;
var inst_26942__$1 = tmp27071;
var inst_26943__$1 = inst_26957;
var state_27059__$1 = (function (){var statearr_27078 = state_27059;
(statearr_27078[(13)] = inst_26942__$1);

(statearr_27078[(14)] = inst_26943__$1);

(statearr_27078[(15)] = inst_26940__$1);

(statearr_27078[(16)] = inst_26941__$1);

(statearr_27078[(18)] = inst_26956);

return statearr_27078;
})();
var statearr_27079_27158 = state_27059__$1;
(statearr_27079_27158[(2)] = null);

(statearr_27079_27158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (21))){
var inst_26981 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27083_27159 = state_27059__$1;
(statearr_27083_27159[(2)] = inst_26981);

(statearr_27083_27159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (31))){
var inst_27007 = (state_27059[(11)]);
var inst_27011 = done.call(null,null);
var inst_27012 = cljs.core.async.untap_STAR_.call(null,m,inst_27007);
var state_27059__$1 = (function (){var statearr_27084 = state_27059;
(statearr_27084[(19)] = inst_27011);

return statearr_27084;
})();
var statearr_27085_27160 = state_27059__$1;
(statearr_27085_27160[(2)] = inst_27012);

(statearr_27085_27160[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (32))){
var inst_27002 = (state_27059[(10)]);
var inst_26999 = (state_27059[(20)]);
var inst_27000 = (state_27059[(12)]);
var inst_27001 = (state_27059[(21)]);
var inst_27014 = (state_27059[(2)]);
var inst_27015 = (inst_27002 + (1));
var tmp27080 = inst_26999;
var tmp27081 = inst_27000;
var tmp27082 = inst_27001;
var inst_26999__$1 = tmp27080;
var inst_27000__$1 = tmp27081;
var inst_27001__$1 = tmp27082;
var inst_27002__$1 = inst_27015;
var state_27059__$1 = (function (){var statearr_27086 = state_27059;
(statearr_27086[(22)] = inst_27014);

(statearr_27086[(10)] = inst_27002__$1);

(statearr_27086[(20)] = inst_26999__$1);

(statearr_27086[(12)] = inst_27000__$1);

(statearr_27086[(21)] = inst_27001__$1);

return statearr_27086;
})();
var statearr_27087_27161 = state_27059__$1;
(statearr_27087_27161[(2)] = null);

(statearr_27087_27161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (40))){
var inst_27027 = (state_27059[(23)]);
var inst_27031 = done.call(null,null);
var inst_27032 = cljs.core.async.untap_STAR_.call(null,m,inst_27027);
var state_27059__$1 = (function (){var statearr_27088 = state_27059;
(statearr_27088[(24)] = inst_27031);

return statearr_27088;
})();
var statearr_27089_27162 = state_27059__$1;
(statearr_27089_27162[(2)] = inst_27032);

(statearr_27089_27162[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (33))){
var inst_27018 = (state_27059[(25)]);
var inst_27020 = cljs.core.chunked_seq_QMARK_.call(null,inst_27018);
var state_27059__$1 = state_27059;
if(inst_27020){
var statearr_27090_27163 = state_27059__$1;
(statearr_27090_27163[(1)] = (36));

} else {
var statearr_27091_27164 = state_27059__$1;
(statearr_27091_27164[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (13))){
var inst_26950 = (state_27059[(26)]);
var inst_26953 = cljs.core.async.close_BANG_.call(null,inst_26950);
var state_27059__$1 = state_27059;
var statearr_27092_27165 = state_27059__$1;
(statearr_27092_27165[(2)] = inst_26953);

(statearr_27092_27165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (22))){
var inst_26971 = (state_27059[(8)]);
var inst_26974 = cljs.core.async.close_BANG_.call(null,inst_26971);
var state_27059__$1 = state_27059;
var statearr_27093_27166 = state_27059__$1;
(statearr_27093_27166[(2)] = inst_26974);

(statearr_27093_27166[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (36))){
var inst_27018 = (state_27059[(25)]);
var inst_27022 = cljs.core.chunk_first.call(null,inst_27018);
var inst_27023 = cljs.core.chunk_rest.call(null,inst_27018);
var inst_27024 = cljs.core.count.call(null,inst_27022);
var inst_26999 = inst_27023;
var inst_27000 = inst_27022;
var inst_27001 = inst_27024;
var inst_27002 = (0);
var state_27059__$1 = (function (){var statearr_27094 = state_27059;
(statearr_27094[(10)] = inst_27002);

(statearr_27094[(20)] = inst_26999);

(statearr_27094[(12)] = inst_27000);

(statearr_27094[(21)] = inst_27001);

return statearr_27094;
})();
var statearr_27095_27167 = state_27059__$1;
(statearr_27095_27167[(2)] = null);

(statearr_27095_27167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (41))){
var inst_27018 = (state_27059[(25)]);
var inst_27034 = (state_27059[(2)]);
var inst_27035 = cljs.core.next.call(null,inst_27018);
var inst_26999 = inst_27035;
var inst_27000 = null;
var inst_27001 = (0);
var inst_27002 = (0);
var state_27059__$1 = (function (){var statearr_27096 = state_27059;
(statearr_27096[(27)] = inst_27034);

(statearr_27096[(10)] = inst_27002);

(statearr_27096[(20)] = inst_26999);

(statearr_27096[(12)] = inst_27000);

(statearr_27096[(21)] = inst_27001);

return statearr_27096;
})();
var statearr_27097_27168 = state_27059__$1;
(statearr_27097_27168[(2)] = null);

(statearr_27097_27168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (43))){
var state_27059__$1 = state_27059;
var statearr_27098_27169 = state_27059__$1;
(statearr_27098_27169[(2)] = null);

(statearr_27098_27169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (29))){
var inst_27043 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27099_27170 = state_27059__$1;
(statearr_27099_27170[(2)] = inst_27043);

(statearr_27099_27170[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (44))){
var inst_27052 = (state_27059[(2)]);
var state_27059__$1 = (function (){var statearr_27100 = state_27059;
(statearr_27100[(28)] = inst_27052);

return statearr_27100;
})();
var statearr_27101_27171 = state_27059__$1;
(statearr_27101_27171[(2)] = null);

(statearr_27101_27171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (6))){
var inst_26991 = (state_27059[(29)]);
var inst_26990 = cljs.core.deref.call(null,cs);
var inst_26991__$1 = cljs.core.keys.call(null,inst_26990);
var inst_26992 = cljs.core.count.call(null,inst_26991__$1);
var inst_26993 = cljs.core.reset_BANG_.call(null,dctr,inst_26992);
var inst_26998 = cljs.core.seq.call(null,inst_26991__$1);
var inst_26999 = inst_26998;
var inst_27000 = null;
var inst_27001 = (0);
var inst_27002 = (0);
var state_27059__$1 = (function (){var statearr_27102 = state_27059;
(statearr_27102[(29)] = inst_26991__$1);

(statearr_27102[(10)] = inst_27002);

(statearr_27102[(20)] = inst_26999);

(statearr_27102[(30)] = inst_26993);

(statearr_27102[(12)] = inst_27000);

(statearr_27102[(21)] = inst_27001);

return statearr_27102;
})();
var statearr_27103_27172 = state_27059__$1;
(statearr_27103_27172[(2)] = null);

(statearr_27103_27172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (28))){
var inst_27018 = (state_27059[(25)]);
var inst_26999 = (state_27059[(20)]);
var inst_27018__$1 = cljs.core.seq.call(null,inst_26999);
var state_27059__$1 = (function (){var statearr_27104 = state_27059;
(statearr_27104[(25)] = inst_27018__$1);

return statearr_27104;
})();
if(inst_27018__$1){
var statearr_27105_27173 = state_27059__$1;
(statearr_27105_27173[(1)] = (33));

} else {
var statearr_27106_27174 = state_27059__$1;
(statearr_27106_27174[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (25))){
var inst_27002 = (state_27059[(10)]);
var inst_27001 = (state_27059[(21)]);
var inst_27004 = (inst_27002 < inst_27001);
var inst_27005 = inst_27004;
var state_27059__$1 = state_27059;
if(cljs.core.truth_(inst_27005)){
var statearr_27107_27175 = state_27059__$1;
(statearr_27107_27175[(1)] = (27));

} else {
var statearr_27108_27176 = state_27059__$1;
(statearr_27108_27176[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (34))){
var state_27059__$1 = state_27059;
var statearr_27109_27177 = state_27059__$1;
(statearr_27109_27177[(2)] = null);

(statearr_27109_27177[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (17))){
var state_27059__$1 = state_27059;
var statearr_27110_27178 = state_27059__$1;
(statearr_27110_27178[(2)] = null);

(statearr_27110_27178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (3))){
var inst_27057 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27059__$1,inst_27057);
} else {
if((state_val_27060 === (12))){
var inst_26986 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27111_27179 = state_27059__$1;
(statearr_27111_27179[(2)] = inst_26986);

(statearr_27111_27179[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (2))){
var state_27059__$1 = state_27059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27059__$1,(4),ch);
} else {
if((state_val_27060 === (23))){
var state_27059__$1 = state_27059;
var statearr_27112_27180 = state_27059__$1;
(statearr_27112_27180[(2)] = null);

(statearr_27112_27180[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (35))){
var inst_27041 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27113_27181 = state_27059__$1;
(statearr_27113_27181[(2)] = inst_27041);

(statearr_27113_27181[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (19))){
var inst_26960 = (state_27059[(7)]);
var inst_26964 = cljs.core.chunk_first.call(null,inst_26960);
var inst_26965 = cljs.core.chunk_rest.call(null,inst_26960);
var inst_26966 = cljs.core.count.call(null,inst_26964);
var inst_26940 = inst_26965;
var inst_26941 = inst_26964;
var inst_26942 = inst_26966;
var inst_26943 = (0);
var state_27059__$1 = (function (){var statearr_27114 = state_27059;
(statearr_27114[(13)] = inst_26942);

(statearr_27114[(14)] = inst_26943);

(statearr_27114[(15)] = inst_26940);

(statearr_27114[(16)] = inst_26941);

return statearr_27114;
})();
var statearr_27115_27182 = state_27059__$1;
(statearr_27115_27182[(2)] = null);

(statearr_27115_27182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (11))){
var inst_26940 = (state_27059[(15)]);
var inst_26960 = (state_27059[(7)]);
var inst_26960__$1 = cljs.core.seq.call(null,inst_26940);
var state_27059__$1 = (function (){var statearr_27116 = state_27059;
(statearr_27116[(7)] = inst_26960__$1);

return statearr_27116;
})();
if(inst_26960__$1){
var statearr_27117_27183 = state_27059__$1;
(statearr_27117_27183[(1)] = (16));

} else {
var statearr_27118_27184 = state_27059__$1;
(statearr_27118_27184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (9))){
var inst_26988 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27119_27185 = state_27059__$1;
(statearr_27119_27185[(2)] = inst_26988);

(statearr_27119_27185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (5))){
var inst_26938 = cljs.core.deref.call(null,cs);
var inst_26939 = cljs.core.seq.call(null,inst_26938);
var inst_26940 = inst_26939;
var inst_26941 = null;
var inst_26942 = (0);
var inst_26943 = (0);
var state_27059__$1 = (function (){var statearr_27120 = state_27059;
(statearr_27120[(13)] = inst_26942);

(statearr_27120[(14)] = inst_26943);

(statearr_27120[(15)] = inst_26940);

(statearr_27120[(16)] = inst_26941);

return statearr_27120;
})();
var statearr_27121_27186 = state_27059__$1;
(statearr_27121_27186[(2)] = null);

(statearr_27121_27186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (14))){
var state_27059__$1 = state_27059;
var statearr_27122_27187 = state_27059__$1;
(statearr_27122_27187[(2)] = null);

(statearr_27122_27187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (45))){
var inst_27049 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27123_27188 = state_27059__$1;
(statearr_27123_27188[(2)] = inst_27049);

(statearr_27123_27188[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (26))){
var inst_26991 = (state_27059[(29)]);
var inst_27045 = (state_27059[(2)]);
var inst_27046 = cljs.core.seq.call(null,inst_26991);
var state_27059__$1 = (function (){var statearr_27124 = state_27059;
(statearr_27124[(31)] = inst_27045);

return statearr_27124;
})();
if(inst_27046){
var statearr_27125_27189 = state_27059__$1;
(statearr_27125_27189[(1)] = (42));

} else {
var statearr_27126_27190 = state_27059__$1;
(statearr_27126_27190[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (16))){
var inst_26960 = (state_27059[(7)]);
var inst_26962 = cljs.core.chunked_seq_QMARK_.call(null,inst_26960);
var state_27059__$1 = state_27059;
if(inst_26962){
var statearr_27127_27191 = state_27059__$1;
(statearr_27127_27191[(1)] = (19));

} else {
var statearr_27128_27192 = state_27059__$1;
(statearr_27128_27192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (38))){
var inst_27038 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27129_27193 = state_27059__$1;
(statearr_27129_27193[(2)] = inst_27038);

(statearr_27129_27193[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (30))){
var state_27059__$1 = state_27059;
var statearr_27130_27194 = state_27059__$1;
(statearr_27130_27194[(2)] = null);

(statearr_27130_27194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (10))){
var inst_26943 = (state_27059[(14)]);
var inst_26941 = (state_27059[(16)]);
var inst_26949 = cljs.core._nth.call(null,inst_26941,inst_26943);
var inst_26950 = cljs.core.nth.call(null,inst_26949,(0),null);
var inst_26951 = cljs.core.nth.call(null,inst_26949,(1),null);
var state_27059__$1 = (function (){var statearr_27131 = state_27059;
(statearr_27131[(26)] = inst_26950);

return statearr_27131;
})();
if(cljs.core.truth_(inst_26951)){
var statearr_27132_27195 = state_27059__$1;
(statearr_27132_27195[(1)] = (13));

} else {
var statearr_27133_27196 = state_27059__$1;
(statearr_27133_27196[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (18))){
var inst_26984 = (state_27059[(2)]);
var state_27059__$1 = state_27059;
var statearr_27134_27197 = state_27059__$1;
(statearr_27134_27197[(2)] = inst_26984);

(statearr_27134_27197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (42))){
var state_27059__$1 = state_27059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27059__$1,(45),dchan);
} else {
if((state_val_27060 === (37))){
var inst_26931 = (state_27059[(9)]);
var inst_27018 = (state_27059[(25)]);
var inst_27027 = (state_27059[(23)]);
var inst_27027__$1 = cljs.core.first.call(null,inst_27018);
var inst_27028 = cljs.core.async.put_BANG_.call(null,inst_27027__$1,inst_26931,done);
var state_27059__$1 = (function (){var statearr_27135 = state_27059;
(statearr_27135[(23)] = inst_27027__$1);

return statearr_27135;
})();
if(cljs.core.truth_(inst_27028)){
var statearr_27136_27198 = state_27059__$1;
(statearr_27136_27198[(1)] = (39));

} else {
var statearr_27137_27199 = state_27059__$1;
(statearr_27137_27199[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27060 === (8))){
var inst_26942 = (state_27059[(13)]);
var inst_26943 = (state_27059[(14)]);
var inst_26945 = (inst_26943 < inst_26942);
var inst_26946 = inst_26945;
var state_27059__$1 = state_27059;
if(cljs.core.truth_(inst_26946)){
var statearr_27138_27200 = state_27059__$1;
(statearr_27138_27200[(1)] = (10));

} else {
var statearr_27139_27201 = state_27059__$1;
(statearr_27139_27201[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21384__auto___27147,cs,m,dchan,dctr,done))
;
return ((function (switch__21322__auto__,c__21384__auto___27147,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21323__auto__ = null;
var cljs$core$async$mult_$_state_machine__21323__auto____0 = (function (){
var statearr_27143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27143[(0)] = cljs$core$async$mult_$_state_machine__21323__auto__);

(statearr_27143[(1)] = (1));

return statearr_27143;
});
var cljs$core$async$mult_$_state_machine__21323__auto____1 = (function (state_27059){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27144){if((e27144 instanceof Object)){
var ex__21326__auto__ = e27144;
var statearr_27145_27202 = state_27059;
(statearr_27145_27202[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27203 = state_27059;
state_27059 = G__27203;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21323__auto__ = function(state_27059){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21323__auto____1.call(this,state_27059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21323__auto____0;
cljs$core$async$mult_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21323__auto____1;
return cljs$core$async$mult_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27147,cs,m,dchan,dctr,done))
})();
var state__21386__auto__ = (function (){var statearr_27146 = f__21385__auto__.call(null);
(statearr_27146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27147);

return statearr_27146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27147,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27205 = arguments.length;
switch (G__27205) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27208 = {};
return obj27208;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19200__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19200__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27213){
var map__27214 = p__27213;
var map__27214__$1 = ((cljs.core.seq_QMARK_.call(null,map__27214))?cljs.core.apply.call(null,cljs.core.hash_map,map__27214):map__27214);
var opts = map__27214__$1;
var statearr_27215_27218 = state;
(statearr_27215_27218[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27214,map__27214__$1,opts){
return (function (val){
var statearr_27216_27219 = state;
(statearr_27216_27219[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27214,map__27214__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27217_27220 = state;
(statearr_27217_27220[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27209){
var G__27210 = cljs.core.first.call(null,seq27209);
var seq27209__$1 = cljs.core.next.call(null,seq27209);
var G__27211 = cljs.core.first.call(null,seq27209__$1);
var seq27209__$2 = cljs.core.next.call(null,seq27209__$1);
var G__27212 = cljs.core.first.call(null,seq27209__$2);
var seq27209__$3 = cljs.core.next.call(null,seq27209__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27210,G__27211,G__27212,seq27209__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27340 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27340 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27341){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27341 = meta27341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27340.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27340.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27340.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27340.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27340.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27340.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27340.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27342){
var self__ = this;
var _27342__$1 = this;
return self__.meta27341;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27342,meta27341__$1){
var self__ = this;
var _27342__$1 = this;
return (new cljs.core.async.t27340(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27341__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27340.cljs$lang$type = true;

cljs.core.async.t27340.cljs$lang$ctorStr = "cljs.core.async/t27340";

cljs.core.async.t27340.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27340");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27340 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27340(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27341){
return (new cljs.core.async.t27340(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27341));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27340(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21384__auto___27459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27412){
var state_val_27413 = (state_27412[(1)]);
if((state_val_27413 === (7))){
var inst_27356 = (state_27412[(7)]);
var inst_27361 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27356);
var state_27412__$1 = state_27412;
var statearr_27414_27460 = state_27412__$1;
(statearr_27414_27460[(2)] = inst_27361);

(statearr_27414_27460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (20))){
var inst_27371 = (state_27412[(8)]);
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27412__$1,(23),out,inst_27371);
} else {
if((state_val_27413 === (1))){
var inst_27346 = (state_27412[(9)]);
var inst_27346__$1 = calc_state.call(null);
var inst_27347 = cljs.core.seq_QMARK_.call(null,inst_27346__$1);
var state_27412__$1 = (function (){var statearr_27415 = state_27412;
(statearr_27415[(9)] = inst_27346__$1);

return statearr_27415;
})();
if(inst_27347){
var statearr_27416_27461 = state_27412__$1;
(statearr_27416_27461[(1)] = (2));

} else {
var statearr_27417_27462 = state_27412__$1;
(statearr_27417_27462[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (24))){
var inst_27364 = (state_27412[(10)]);
var inst_27356 = inst_27364;
var state_27412__$1 = (function (){var statearr_27418 = state_27412;
(statearr_27418[(7)] = inst_27356);

return statearr_27418;
})();
var statearr_27419_27463 = state_27412__$1;
(statearr_27419_27463[(2)] = null);

(statearr_27419_27463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (4))){
var inst_27346 = (state_27412[(9)]);
var inst_27352 = (state_27412[(2)]);
var inst_27353 = cljs.core.get.call(null,inst_27352,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27354 = cljs.core.get.call(null,inst_27352,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27355 = cljs.core.get.call(null,inst_27352,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27356 = inst_27346;
var state_27412__$1 = (function (){var statearr_27420 = state_27412;
(statearr_27420[(7)] = inst_27356);

(statearr_27420[(11)] = inst_27355);

(statearr_27420[(12)] = inst_27353);

(statearr_27420[(13)] = inst_27354);

return statearr_27420;
})();
var statearr_27421_27464 = state_27412__$1;
(statearr_27421_27464[(2)] = null);

(statearr_27421_27464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (15))){
var state_27412__$1 = state_27412;
var statearr_27422_27465 = state_27412__$1;
(statearr_27422_27465[(2)] = null);

(statearr_27422_27465[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (21))){
var inst_27364 = (state_27412[(10)]);
var inst_27356 = inst_27364;
var state_27412__$1 = (function (){var statearr_27423 = state_27412;
(statearr_27423[(7)] = inst_27356);

return statearr_27423;
})();
var statearr_27424_27466 = state_27412__$1;
(statearr_27424_27466[(2)] = null);

(statearr_27424_27466[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (13))){
var inst_27408 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27425_27467 = state_27412__$1;
(statearr_27425_27467[(2)] = inst_27408);

(statearr_27425_27467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (22))){
var inst_27406 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27426_27468 = state_27412__$1;
(statearr_27426_27468[(2)] = inst_27406);

(statearr_27426_27468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (6))){
var inst_27410 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27412__$1,inst_27410);
} else {
if((state_val_27413 === (25))){
var state_27412__$1 = state_27412;
var statearr_27427_27469 = state_27412__$1;
(statearr_27427_27469[(2)] = null);

(statearr_27427_27469[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (17))){
var inst_27386 = (state_27412[(14)]);
var state_27412__$1 = state_27412;
var statearr_27428_27470 = state_27412__$1;
(statearr_27428_27470[(2)] = inst_27386);

(statearr_27428_27470[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (3))){
var inst_27346 = (state_27412[(9)]);
var state_27412__$1 = state_27412;
var statearr_27429_27471 = state_27412__$1;
(statearr_27429_27471[(2)] = inst_27346);

(statearr_27429_27471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (12))){
var inst_27386 = (state_27412[(14)]);
var inst_27367 = (state_27412[(15)]);
var inst_27372 = (state_27412[(16)]);
var inst_27386__$1 = inst_27367.call(null,inst_27372);
var state_27412__$1 = (function (){var statearr_27430 = state_27412;
(statearr_27430[(14)] = inst_27386__$1);

return statearr_27430;
})();
if(cljs.core.truth_(inst_27386__$1)){
var statearr_27431_27472 = state_27412__$1;
(statearr_27431_27472[(1)] = (17));

} else {
var statearr_27432_27473 = state_27412__$1;
(statearr_27432_27473[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (2))){
var inst_27346 = (state_27412[(9)]);
var inst_27349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27346);
var state_27412__$1 = state_27412;
var statearr_27433_27474 = state_27412__$1;
(statearr_27433_27474[(2)] = inst_27349);

(statearr_27433_27474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (23))){
var inst_27397 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27397)){
var statearr_27434_27475 = state_27412__$1;
(statearr_27434_27475[(1)] = (24));

} else {
var statearr_27435_27476 = state_27412__$1;
(statearr_27435_27476[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (19))){
var inst_27394 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27394)){
var statearr_27436_27477 = state_27412__$1;
(statearr_27436_27477[(1)] = (20));

} else {
var statearr_27437_27478 = state_27412__$1;
(statearr_27437_27478[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (11))){
var inst_27371 = (state_27412[(8)]);
var inst_27377 = (inst_27371 == null);
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27377)){
var statearr_27438_27479 = state_27412__$1;
(statearr_27438_27479[(1)] = (14));

} else {
var statearr_27439_27480 = state_27412__$1;
(statearr_27439_27480[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (9))){
var inst_27364 = (state_27412[(10)]);
var inst_27364__$1 = (state_27412[(2)]);
var inst_27365 = cljs.core.get.call(null,inst_27364__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27366 = cljs.core.get.call(null,inst_27364__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27367 = cljs.core.get.call(null,inst_27364__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27412__$1 = (function (){var statearr_27440 = state_27412;
(statearr_27440[(15)] = inst_27367);

(statearr_27440[(10)] = inst_27364__$1);

(statearr_27440[(17)] = inst_27366);

return statearr_27440;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27412__$1,(10),inst_27365);
} else {
if((state_val_27413 === (5))){
var inst_27356 = (state_27412[(7)]);
var inst_27359 = cljs.core.seq_QMARK_.call(null,inst_27356);
var state_27412__$1 = state_27412;
if(inst_27359){
var statearr_27441_27481 = state_27412__$1;
(statearr_27441_27481[(1)] = (7));

} else {
var statearr_27442_27482 = state_27412__$1;
(statearr_27442_27482[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (14))){
var inst_27372 = (state_27412[(16)]);
var inst_27379 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27372);
var state_27412__$1 = state_27412;
var statearr_27443_27483 = state_27412__$1;
(statearr_27443_27483[(2)] = inst_27379);

(statearr_27443_27483[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (26))){
var inst_27402 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27444_27484 = state_27412__$1;
(statearr_27444_27484[(2)] = inst_27402);

(statearr_27444_27484[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (16))){
var inst_27382 = (state_27412[(2)]);
var inst_27383 = calc_state.call(null);
var inst_27356 = inst_27383;
var state_27412__$1 = (function (){var statearr_27445 = state_27412;
(statearr_27445[(7)] = inst_27356);

(statearr_27445[(18)] = inst_27382);

return statearr_27445;
})();
var statearr_27446_27485 = state_27412__$1;
(statearr_27446_27485[(2)] = null);

(statearr_27446_27485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (10))){
var inst_27371 = (state_27412[(8)]);
var inst_27372 = (state_27412[(16)]);
var inst_27370 = (state_27412[(2)]);
var inst_27371__$1 = cljs.core.nth.call(null,inst_27370,(0),null);
var inst_27372__$1 = cljs.core.nth.call(null,inst_27370,(1),null);
var inst_27373 = (inst_27371__$1 == null);
var inst_27374 = cljs.core._EQ_.call(null,inst_27372__$1,change);
var inst_27375 = (inst_27373) || (inst_27374);
var state_27412__$1 = (function (){var statearr_27447 = state_27412;
(statearr_27447[(8)] = inst_27371__$1);

(statearr_27447[(16)] = inst_27372__$1);

return statearr_27447;
})();
if(cljs.core.truth_(inst_27375)){
var statearr_27448_27486 = state_27412__$1;
(statearr_27448_27486[(1)] = (11));

} else {
var statearr_27449_27487 = state_27412__$1;
(statearr_27449_27487[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (18))){
var inst_27367 = (state_27412[(15)]);
var inst_27372 = (state_27412[(16)]);
var inst_27366 = (state_27412[(17)]);
var inst_27389 = cljs.core.empty_QMARK_.call(null,inst_27367);
var inst_27390 = inst_27366.call(null,inst_27372);
var inst_27391 = cljs.core.not.call(null,inst_27390);
var inst_27392 = (inst_27389) && (inst_27391);
var state_27412__$1 = state_27412;
var statearr_27450_27488 = state_27412__$1;
(statearr_27450_27488[(2)] = inst_27392);

(statearr_27450_27488[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (8))){
var inst_27356 = (state_27412[(7)]);
var state_27412__$1 = state_27412;
var statearr_27451_27489 = state_27412__$1;
(statearr_27451_27489[(2)] = inst_27356);

(statearr_27451_27489[(1)] = (9));


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
});})(c__21384__auto___27459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21322__auto__,c__21384__auto___27459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21323__auto__ = null;
var cljs$core$async$mix_$_state_machine__21323__auto____0 = (function (){
var statearr_27455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27455[(0)] = cljs$core$async$mix_$_state_machine__21323__auto__);

(statearr_27455[(1)] = (1));

return statearr_27455;
});
var cljs$core$async$mix_$_state_machine__21323__auto____1 = (function (state_27412){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27456){if((e27456 instanceof Object)){
var ex__21326__auto__ = e27456;
var statearr_27457_27490 = state_27412;
(statearr_27457_27490[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27491 = state_27412;
state_27412 = G__27491;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21323__auto__ = function(state_27412){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21323__auto____1.call(this,state_27412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21323__auto____0;
cljs$core$async$mix_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21323__auto____1;
return cljs$core$async$mix_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21386__auto__ = (function (){var statearr_27458 = f__21385__auto__.call(null);
(statearr_27458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27459);

return statearr_27458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27459,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27493 = {};
return obj27493;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27495 = arguments.length;
switch (G__27495) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__27499 = arguments.length;
switch (G__27499) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18160__auto__,mults){
return (function (p1__27497_SHARP_){
if(cljs.core.truth_(p1__27497_SHARP_.call(null,topic))){
return p1__27497_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27497_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18160__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27500 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27500 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta27501){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta27501 = meta27501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27500.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27500.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27500.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27500.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27500.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27500.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27502){
var self__ = this;
var _27502__$1 = this;
return self__.meta27501;
});})(mults,ensure_mult))
;

cljs.core.async.t27500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27502,meta27501__$1){
var self__ = this;
var _27502__$1 = this;
return (new cljs.core.async.t27500(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta27501__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27500.cljs$lang$type = true;

cljs.core.async.t27500.cljs$lang$ctorStr = "cljs.core.async/t27500";

cljs.core.async.t27500.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27500");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27500 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27500(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27501){
return (new cljs.core.async.t27500(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27501));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27500(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21384__auto___27623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27623,mults,ensure_mult,p){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27623,mults,ensure_mult,p){
return (function (state_27574){
var state_val_27575 = (state_27574[(1)]);
if((state_val_27575 === (7))){
var inst_27570 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
var statearr_27576_27624 = state_27574__$1;
(statearr_27576_27624[(2)] = inst_27570);

(statearr_27576_27624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (20))){
var state_27574__$1 = state_27574;
var statearr_27577_27625 = state_27574__$1;
(statearr_27577_27625[(2)] = null);

(statearr_27577_27625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (1))){
var state_27574__$1 = state_27574;
var statearr_27578_27626 = state_27574__$1;
(statearr_27578_27626[(2)] = null);

(statearr_27578_27626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (24))){
var inst_27553 = (state_27574[(7)]);
var inst_27562 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27553);
var state_27574__$1 = state_27574;
var statearr_27579_27627 = state_27574__$1;
(statearr_27579_27627[(2)] = inst_27562);

(statearr_27579_27627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (4))){
var inst_27505 = (state_27574[(8)]);
var inst_27505__$1 = (state_27574[(2)]);
var inst_27506 = (inst_27505__$1 == null);
var state_27574__$1 = (function (){var statearr_27580 = state_27574;
(statearr_27580[(8)] = inst_27505__$1);

return statearr_27580;
})();
if(cljs.core.truth_(inst_27506)){
var statearr_27581_27628 = state_27574__$1;
(statearr_27581_27628[(1)] = (5));

} else {
var statearr_27582_27629 = state_27574__$1;
(statearr_27582_27629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (15))){
var inst_27547 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
var statearr_27583_27630 = state_27574__$1;
(statearr_27583_27630[(2)] = inst_27547);

(statearr_27583_27630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (21))){
var inst_27567 = (state_27574[(2)]);
var state_27574__$1 = (function (){var statearr_27584 = state_27574;
(statearr_27584[(9)] = inst_27567);

return statearr_27584;
})();
var statearr_27585_27631 = state_27574__$1;
(statearr_27585_27631[(2)] = null);

(statearr_27585_27631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (13))){
var inst_27529 = (state_27574[(10)]);
var inst_27531 = cljs.core.chunked_seq_QMARK_.call(null,inst_27529);
var state_27574__$1 = state_27574;
if(inst_27531){
var statearr_27586_27632 = state_27574__$1;
(statearr_27586_27632[(1)] = (16));

} else {
var statearr_27587_27633 = state_27574__$1;
(statearr_27587_27633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (22))){
var inst_27559 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
if(cljs.core.truth_(inst_27559)){
var statearr_27588_27634 = state_27574__$1;
(statearr_27588_27634[(1)] = (23));

} else {
var statearr_27589_27635 = state_27574__$1;
(statearr_27589_27635[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (6))){
var inst_27555 = (state_27574[(11)]);
var inst_27505 = (state_27574[(8)]);
var inst_27553 = (state_27574[(7)]);
var inst_27553__$1 = topic_fn.call(null,inst_27505);
var inst_27554 = cljs.core.deref.call(null,mults);
var inst_27555__$1 = cljs.core.get.call(null,inst_27554,inst_27553__$1);
var state_27574__$1 = (function (){var statearr_27590 = state_27574;
(statearr_27590[(11)] = inst_27555__$1);

(statearr_27590[(7)] = inst_27553__$1);

return statearr_27590;
})();
if(cljs.core.truth_(inst_27555__$1)){
var statearr_27591_27636 = state_27574__$1;
(statearr_27591_27636[(1)] = (19));

} else {
var statearr_27592_27637 = state_27574__$1;
(statearr_27592_27637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (25))){
var inst_27564 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
var statearr_27593_27638 = state_27574__$1;
(statearr_27593_27638[(2)] = inst_27564);

(statearr_27593_27638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (17))){
var inst_27529 = (state_27574[(10)]);
var inst_27538 = cljs.core.first.call(null,inst_27529);
var inst_27539 = cljs.core.async.muxch_STAR_.call(null,inst_27538);
var inst_27540 = cljs.core.async.close_BANG_.call(null,inst_27539);
var inst_27541 = cljs.core.next.call(null,inst_27529);
var inst_27515 = inst_27541;
var inst_27516 = null;
var inst_27517 = (0);
var inst_27518 = (0);
var state_27574__$1 = (function (){var statearr_27594 = state_27574;
(statearr_27594[(12)] = inst_27515);

(statearr_27594[(13)] = inst_27518);

(statearr_27594[(14)] = inst_27517);

(statearr_27594[(15)] = inst_27540);

(statearr_27594[(16)] = inst_27516);

return statearr_27594;
})();
var statearr_27595_27639 = state_27574__$1;
(statearr_27595_27639[(2)] = null);

(statearr_27595_27639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (3))){
var inst_27572 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27574__$1,inst_27572);
} else {
if((state_val_27575 === (12))){
var inst_27549 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
var statearr_27596_27640 = state_27574__$1;
(statearr_27596_27640[(2)] = inst_27549);

(statearr_27596_27640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (2))){
var state_27574__$1 = state_27574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27574__$1,(4),ch);
} else {
if((state_val_27575 === (23))){
var state_27574__$1 = state_27574;
var statearr_27597_27641 = state_27574__$1;
(statearr_27597_27641[(2)] = null);

(statearr_27597_27641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (19))){
var inst_27555 = (state_27574[(11)]);
var inst_27505 = (state_27574[(8)]);
var inst_27557 = cljs.core.async.muxch_STAR_.call(null,inst_27555);
var state_27574__$1 = state_27574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27574__$1,(22),inst_27557,inst_27505);
} else {
if((state_val_27575 === (11))){
var inst_27515 = (state_27574[(12)]);
var inst_27529 = (state_27574[(10)]);
var inst_27529__$1 = cljs.core.seq.call(null,inst_27515);
var state_27574__$1 = (function (){var statearr_27598 = state_27574;
(statearr_27598[(10)] = inst_27529__$1);

return statearr_27598;
})();
if(inst_27529__$1){
var statearr_27599_27642 = state_27574__$1;
(statearr_27599_27642[(1)] = (13));

} else {
var statearr_27600_27643 = state_27574__$1;
(statearr_27600_27643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (9))){
var inst_27551 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
var statearr_27601_27644 = state_27574__$1;
(statearr_27601_27644[(2)] = inst_27551);

(statearr_27601_27644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (5))){
var inst_27512 = cljs.core.deref.call(null,mults);
var inst_27513 = cljs.core.vals.call(null,inst_27512);
var inst_27514 = cljs.core.seq.call(null,inst_27513);
var inst_27515 = inst_27514;
var inst_27516 = null;
var inst_27517 = (0);
var inst_27518 = (0);
var state_27574__$1 = (function (){var statearr_27602 = state_27574;
(statearr_27602[(12)] = inst_27515);

(statearr_27602[(13)] = inst_27518);

(statearr_27602[(14)] = inst_27517);

(statearr_27602[(16)] = inst_27516);

return statearr_27602;
})();
var statearr_27603_27645 = state_27574__$1;
(statearr_27603_27645[(2)] = null);

(statearr_27603_27645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (14))){
var state_27574__$1 = state_27574;
var statearr_27607_27646 = state_27574__$1;
(statearr_27607_27646[(2)] = null);

(statearr_27607_27646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (16))){
var inst_27529 = (state_27574[(10)]);
var inst_27533 = cljs.core.chunk_first.call(null,inst_27529);
var inst_27534 = cljs.core.chunk_rest.call(null,inst_27529);
var inst_27535 = cljs.core.count.call(null,inst_27533);
var inst_27515 = inst_27534;
var inst_27516 = inst_27533;
var inst_27517 = inst_27535;
var inst_27518 = (0);
var state_27574__$1 = (function (){var statearr_27608 = state_27574;
(statearr_27608[(12)] = inst_27515);

(statearr_27608[(13)] = inst_27518);

(statearr_27608[(14)] = inst_27517);

(statearr_27608[(16)] = inst_27516);

return statearr_27608;
})();
var statearr_27609_27647 = state_27574__$1;
(statearr_27609_27647[(2)] = null);

(statearr_27609_27647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (10))){
var inst_27515 = (state_27574[(12)]);
var inst_27518 = (state_27574[(13)]);
var inst_27517 = (state_27574[(14)]);
var inst_27516 = (state_27574[(16)]);
var inst_27523 = cljs.core._nth.call(null,inst_27516,inst_27518);
var inst_27524 = cljs.core.async.muxch_STAR_.call(null,inst_27523);
var inst_27525 = cljs.core.async.close_BANG_.call(null,inst_27524);
var inst_27526 = (inst_27518 + (1));
var tmp27604 = inst_27515;
var tmp27605 = inst_27517;
var tmp27606 = inst_27516;
var inst_27515__$1 = tmp27604;
var inst_27516__$1 = tmp27606;
var inst_27517__$1 = tmp27605;
var inst_27518__$1 = inst_27526;
var state_27574__$1 = (function (){var statearr_27610 = state_27574;
(statearr_27610[(12)] = inst_27515__$1);

(statearr_27610[(13)] = inst_27518__$1);

(statearr_27610[(14)] = inst_27517__$1);

(statearr_27610[(17)] = inst_27525);

(statearr_27610[(16)] = inst_27516__$1);

return statearr_27610;
})();
var statearr_27611_27648 = state_27574__$1;
(statearr_27611_27648[(2)] = null);

(statearr_27611_27648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (18))){
var inst_27544 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
var statearr_27612_27649 = state_27574__$1;
(statearr_27612_27649[(2)] = inst_27544);

(statearr_27612_27649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27575 === (8))){
var inst_27518 = (state_27574[(13)]);
var inst_27517 = (state_27574[(14)]);
var inst_27520 = (inst_27518 < inst_27517);
var inst_27521 = inst_27520;
var state_27574__$1 = state_27574;
if(cljs.core.truth_(inst_27521)){
var statearr_27613_27650 = state_27574__$1;
(statearr_27613_27650[(1)] = (10));

} else {
var statearr_27614_27651 = state_27574__$1;
(statearr_27614_27651[(1)] = (11));

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
});})(c__21384__auto___27623,mults,ensure_mult,p))
;
return ((function (switch__21322__auto__,c__21384__auto___27623,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27618[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27618[(1)] = (1));

return statearr_27618;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27574){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27619){if((e27619 instanceof Object)){
var ex__21326__auto__ = e27619;
var statearr_27620_27652 = state_27574;
(statearr_27620_27652[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27653 = state_27574;
state_27574 = G__27653;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27623,mults,ensure_mult,p))
})();
var state__21386__auto__ = (function (){var statearr_27621 = f__21385__auto__.call(null);
(statearr_27621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27623);

return statearr_27621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27623,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__27655 = arguments.length;
switch (G__27655) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__27658 = arguments.length;
switch (G__27658) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__27661 = arguments.length;
switch (G__27661) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21384__auto___27731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27700){
var state_val_27701 = (state_27700[(1)]);
if((state_val_27701 === (7))){
var state_27700__$1 = state_27700;
var statearr_27702_27732 = state_27700__$1;
(statearr_27702_27732[(2)] = null);

(statearr_27702_27732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (1))){
var state_27700__$1 = state_27700;
var statearr_27703_27733 = state_27700__$1;
(statearr_27703_27733[(2)] = null);

(statearr_27703_27733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (4))){
var inst_27664 = (state_27700[(7)]);
var inst_27666 = (inst_27664 < cnt);
var state_27700__$1 = state_27700;
if(cljs.core.truth_(inst_27666)){
var statearr_27704_27734 = state_27700__$1;
(statearr_27704_27734[(1)] = (6));

} else {
var statearr_27705_27735 = state_27700__$1;
(statearr_27705_27735[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (15))){
var inst_27696 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27706_27736 = state_27700__$1;
(statearr_27706_27736[(2)] = inst_27696);

(statearr_27706_27736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (13))){
var inst_27689 = cljs.core.async.close_BANG_.call(null,out);
var state_27700__$1 = state_27700;
var statearr_27707_27737 = state_27700__$1;
(statearr_27707_27737[(2)] = inst_27689);

(statearr_27707_27737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (6))){
var state_27700__$1 = state_27700;
var statearr_27708_27738 = state_27700__$1;
(statearr_27708_27738[(2)] = null);

(statearr_27708_27738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (3))){
var inst_27698 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27700__$1,inst_27698);
} else {
if((state_val_27701 === (12))){
var inst_27686 = (state_27700[(8)]);
var inst_27686__$1 = (state_27700[(2)]);
var inst_27687 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27686__$1);
var state_27700__$1 = (function (){var statearr_27709 = state_27700;
(statearr_27709[(8)] = inst_27686__$1);

return statearr_27709;
})();
if(cljs.core.truth_(inst_27687)){
var statearr_27710_27739 = state_27700__$1;
(statearr_27710_27739[(1)] = (13));

} else {
var statearr_27711_27740 = state_27700__$1;
(statearr_27711_27740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (2))){
var inst_27663 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27664 = (0);
var state_27700__$1 = (function (){var statearr_27712 = state_27700;
(statearr_27712[(7)] = inst_27664);

(statearr_27712[(9)] = inst_27663);

return statearr_27712;
})();
var statearr_27713_27741 = state_27700__$1;
(statearr_27713_27741[(2)] = null);

(statearr_27713_27741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (11))){
var inst_27664 = (state_27700[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27700,(10),Object,null,(9));
var inst_27673 = chs__$1.call(null,inst_27664);
var inst_27674 = done.call(null,inst_27664);
var inst_27675 = cljs.core.async.take_BANG_.call(null,inst_27673,inst_27674);
var state_27700__$1 = state_27700;
var statearr_27714_27742 = state_27700__$1;
(statearr_27714_27742[(2)] = inst_27675);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27700__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (9))){
var inst_27664 = (state_27700[(7)]);
var inst_27677 = (state_27700[(2)]);
var inst_27678 = (inst_27664 + (1));
var inst_27664__$1 = inst_27678;
var state_27700__$1 = (function (){var statearr_27715 = state_27700;
(statearr_27715[(7)] = inst_27664__$1);

(statearr_27715[(10)] = inst_27677);

return statearr_27715;
})();
var statearr_27716_27743 = state_27700__$1;
(statearr_27716_27743[(2)] = null);

(statearr_27716_27743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (5))){
var inst_27684 = (state_27700[(2)]);
var state_27700__$1 = (function (){var statearr_27717 = state_27700;
(statearr_27717[(11)] = inst_27684);

return statearr_27717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27700__$1,(12),dchan);
} else {
if((state_val_27701 === (14))){
var inst_27686 = (state_27700[(8)]);
var inst_27691 = cljs.core.apply.call(null,f,inst_27686);
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27700__$1,(16),out,inst_27691);
} else {
if((state_val_27701 === (16))){
var inst_27693 = (state_27700[(2)]);
var state_27700__$1 = (function (){var statearr_27718 = state_27700;
(statearr_27718[(12)] = inst_27693);

return statearr_27718;
})();
var statearr_27719_27744 = state_27700__$1;
(statearr_27719_27744[(2)] = null);

(statearr_27719_27744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (10))){
var inst_27668 = (state_27700[(2)]);
var inst_27669 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27700__$1 = (function (){var statearr_27720 = state_27700;
(statearr_27720[(13)] = inst_27668);

return statearr_27720;
})();
var statearr_27721_27745 = state_27700__$1;
(statearr_27721_27745[(2)] = inst_27669);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27700__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (8))){
var inst_27682 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27722_27746 = state_27700__$1;
(statearr_27722_27746[(2)] = inst_27682);

(statearr_27722_27746[(1)] = (5));


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
});})(c__21384__auto___27731,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21322__auto__,c__21384__auto___27731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27726[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27726[(1)] = (1));

return statearr_27726;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27700){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27727){if((e27727 instanceof Object)){
var ex__21326__auto__ = e27727;
var statearr_27728_27747 = state_27700;
(statearr_27728_27747[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27748 = state_27700;
state_27700 = G__27748;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27731,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21386__auto__ = (function (){var statearr_27729 = f__21385__auto__.call(null);
(statearr_27729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27731);

return statearr_27729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27731,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__27751 = arguments.length;
switch (G__27751) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___27806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27806,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27806,out){
return (function (state_27781){
var state_val_27782 = (state_27781[(1)]);
if((state_val_27782 === (7))){
var inst_27760 = (state_27781[(7)]);
var inst_27761 = (state_27781[(8)]);
var inst_27760__$1 = (state_27781[(2)]);
var inst_27761__$1 = cljs.core.nth.call(null,inst_27760__$1,(0),null);
var inst_27762 = cljs.core.nth.call(null,inst_27760__$1,(1),null);
var inst_27763 = (inst_27761__$1 == null);
var state_27781__$1 = (function (){var statearr_27783 = state_27781;
(statearr_27783[(7)] = inst_27760__$1);

(statearr_27783[(9)] = inst_27762);

(statearr_27783[(8)] = inst_27761__$1);

return statearr_27783;
})();
if(cljs.core.truth_(inst_27763)){
var statearr_27784_27807 = state_27781__$1;
(statearr_27784_27807[(1)] = (8));

} else {
var statearr_27785_27808 = state_27781__$1;
(statearr_27785_27808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (1))){
var inst_27752 = cljs.core.vec.call(null,chs);
var inst_27753 = inst_27752;
var state_27781__$1 = (function (){var statearr_27786 = state_27781;
(statearr_27786[(10)] = inst_27753);

return statearr_27786;
})();
var statearr_27787_27809 = state_27781__$1;
(statearr_27787_27809[(2)] = null);

(statearr_27787_27809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (4))){
var inst_27753 = (state_27781[(10)]);
var state_27781__$1 = state_27781;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27781__$1,(7),inst_27753);
} else {
if((state_val_27782 === (6))){
var inst_27777 = (state_27781[(2)]);
var state_27781__$1 = state_27781;
var statearr_27788_27810 = state_27781__$1;
(statearr_27788_27810[(2)] = inst_27777);

(statearr_27788_27810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (3))){
var inst_27779 = (state_27781[(2)]);
var state_27781__$1 = state_27781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27781__$1,inst_27779);
} else {
if((state_val_27782 === (2))){
var inst_27753 = (state_27781[(10)]);
var inst_27755 = cljs.core.count.call(null,inst_27753);
var inst_27756 = (inst_27755 > (0));
var state_27781__$1 = state_27781;
if(cljs.core.truth_(inst_27756)){
var statearr_27790_27811 = state_27781__$1;
(statearr_27790_27811[(1)] = (4));

} else {
var statearr_27791_27812 = state_27781__$1;
(statearr_27791_27812[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (11))){
var inst_27753 = (state_27781[(10)]);
var inst_27770 = (state_27781[(2)]);
var tmp27789 = inst_27753;
var inst_27753__$1 = tmp27789;
var state_27781__$1 = (function (){var statearr_27792 = state_27781;
(statearr_27792[(10)] = inst_27753__$1);

(statearr_27792[(11)] = inst_27770);

return statearr_27792;
})();
var statearr_27793_27813 = state_27781__$1;
(statearr_27793_27813[(2)] = null);

(statearr_27793_27813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (9))){
var inst_27761 = (state_27781[(8)]);
var state_27781__$1 = state_27781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27781__$1,(11),out,inst_27761);
} else {
if((state_val_27782 === (5))){
var inst_27775 = cljs.core.async.close_BANG_.call(null,out);
var state_27781__$1 = state_27781;
var statearr_27794_27814 = state_27781__$1;
(statearr_27794_27814[(2)] = inst_27775);

(statearr_27794_27814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (10))){
var inst_27773 = (state_27781[(2)]);
var state_27781__$1 = state_27781;
var statearr_27795_27815 = state_27781__$1;
(statearr_27795_27815[(2)] = inst_27773);

(statearr_27795_27815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (8))){
var inst_27753 = (state_27781[(10)]);
var inst_27760 = (state_27781[(7)]);
var inst_27762 = (state_27781[(9)]);
var inst_27761 = (state_27781[(8)]);
var inst_27765 = (function (){var c = inst_27762;
var v = inst_27761;
var vec__27758 = inst_27760;
var cs = inst_27753;
return ((function (c,v,vec__27758,cs,inst_27753,inst_27760,inst_27762,inst_27761,state_val_27782,c__21384__auto___27806,out){
return (function (p1__27749_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27749_SHARP_);
});
;})(c,v,vec__27758,cs,inst_27753,inst_27760,inst_27762,inst_27761,state_val_27782,c__21384__auto___27806,out))
})();
var inst_27766 = cljs.core.filterv.call(null,inst_27765,inst_27753);
var inst_27753__$1 = inst_27766;
var state_27781__$1 = (function (){var statearr_27796 = state_27781;
(statearr_27796[(10)] = inst_27753__$1);

return statearr_27796;
})();
var statearr_27797_27816 = state_27781__$1;
(statearr_27797_27816[(2)] = null);

(statearr_27797_27816[(1)] = (2));


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
});})(c__21384__auto___27806,out))
;
return ((function (switch__21322__auto__,c__21384__auto___27806,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27801 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27801[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27801[(1)] = (1));

return statearr_27801;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27781){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27802){if((e27802 instanceof Object)){
var ex__21326__auto__ = e27802;
var statearr_27803_27817 = state_27781;
(statearr_27803_27817[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27818 = state_27781;
state_27781 = G__27818;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27806,out))
})();
var state__21386__auto__ = (function (){var statearr_27804 = f__21385__auto__.call(null);
(statearr_27804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27806);

return statearr_27804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27806,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27820 = arguments.length;
switch (G__27820) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___27868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27868,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27868,out){
return (function (state_27844){
var state_val_27845 = (state_27844[(1)]);
if((state_val_27845 === (7))){
var inst_27826 = (state_27844[(7)]);
var inst_27826__$1 = (state_27844[(2)]);
var inst_27827 = (inst_27826__$1 == null);
var inst_27828 = cljs.core.not.call(null,inst_27827);
var state_27844__$1 = (function (){var statearr_27846 = state_27844;
(statearr_27846[(7)] = inst_27826__$1);

return statearr_27846;
})();
if(inst_27828){
var statearr_27847_27869 = state_27844__$1;
(statearr_27847_27869[(1)] = (8));

} else {
var statearr_27848_27870 = state_27844__$1;
(statearr_27848_27870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (1))){
var inst_27821 = (0);
var state_27844__$1 = (function (){var statearr_27849 = state_27844;
(statearr_27849[(8)] = inst_27821);

return statearr_27849;
})();
var statearr_27850_27871 = state_27844__$1;
(statearr_27850_27871[(2)] = null);

(statearr_27850_27871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (4))){
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27844__$1,(7),ch);
} else {
if((state_val_27845 === (6))){
var inst_27839 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27851_27872 = state_27844__$1;
(statearr_27851_27872[(2)] = inst_27839);

(statearr_27851_27872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (3))){
var inst_27841 = (state_27844[(2)]);
var inst_27842 = cljs.core.async.close_BANG_.call(null,out);
var state_27844__$1 = (function (){var statearr_27852 = state_27844;
(statearr_27852[(9)] = inst_27841);

return statearr_27852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27844__$1,inst_27842);
} else {
if((state_val_27845 === (2))){
var inst_27821 = (state_27844[(8)]);
var inst_27823 = (inst_27821 < n);
var state_27844__$1 = state_27844;
if(cljs.core.truth_(inst_27823)){
var statearr_27853_27873 = state_27844__$1;
(statearr_27853_27873[(1)] = (4));

} else {
var statearr_27854_27874 = state_27844__$1;
(statearr_27854_27874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (11))){
var inst_27821 = (state_27844[(8)]);
var inst_27831 = (state_27844[(2)]);
var inst_27832 = (inst_27821 + (1));
var inst_27821__$1 = inst_27832;
var state_27844__$1 = (function (){var statearr_27855 = state_27844;
(statearr_27855[(10)] = inst_27831);

(statearr_27855[(8)] = inst_27821__$1);

return statearr_27855;
})();
var statearr_27856_27875 = state_27844__$1;
(statearr_27856_27875[(2)] = null);

(statearr_27856_27875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (9))){
var state_27844__$1 = state_27844;
var statearr_27857_27876 = state_27844__$1;
(statearr_27857_27876[(2)] = null);

(statearr_27857_27876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (5))){
var state_27844__$1 = state_27844;
var statearr_27858_27877 = state_27844__$1;
(statearr_27858_27877[(2)] = null);

(statearr_27858_27877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (10))){
var inst_27836 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27859_27878 = state_27844__$1;
(statearr_27859_27878[(2)] = inst_27836);

(statearr_27859_27878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (8))){
var inst_27826 = (state_27844[(7)]);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27844__$1,(11),out,inst_27826);
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
});})(c__21384__auto___27868,out))
;
return ((function (switch__21322__auto__,c__21384__auto___27868,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27863[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27863[(1)] = (1));

return statearr_27863;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27844){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27864){if((e27864 instanceof Object)){
var ex__21326__auto__ = e27864;
var statearr_27865_27879 = state_27844;
(statearr_27865_27879[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27880 = state_27844;
state_27844 = G__27880;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27868,out))
})();
var state__21386__auto__ = (function (){var statearr_27866 = f__21385__auto__.call(null);
(statearr_27866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27868);

return statearr_27866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27868,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27888 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27888 = (function (ch,f,map_LT_,meta27889){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27889 = meta27889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27888.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27888.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27891 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27891 = (function (fn1,_,meta27889,map_LT_,f,ch,meta27892){
this.fn1 = fn1;
this._ = _;
this.meta27889 = meta27889;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27892 = meta27892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27891.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27881_SHARP_){
return f1.call(null,(((p1__27881_SHARP_ == null))?null:self__.f.call(null,p1__27881_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27893){
var self__ = this;
var _27893__$1 = this;
return self__.meta27892;
});})(___$1))
;

cljs.core.async.t27891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27893,meta27892__$1){
var self__ = this;
var _27893__$1 = this;
return (new cljs.core.async.t27891(self__.fn1,self__._,self__.meta27889,self__.map_LT_,self__.f,self__.ch,meta27892__$1));
});})(___$1))
;

cljs.core.async.t27891.cljs$lang$type = true;

cljs.core.async.t27891.cljs$lang$ctorStr = "cljs.core.async/t27891";

cljs.core.async.t27891.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27891");
});})(___$1))
;

cljs.core.async.__GT_t27891 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27891(fn1__$1,___$2,meta27889__$1,map_LT___$1,f__$1,ch__$1,meta27892){
return (new cljs.core.async.t27891(fn1__$1,___$2,meta27889__$1,map_LT___$1,f__$1,ch__$1,meta27892));
});})(___$1))
;

}

return (new cljs.core.async.t27891(fn1,___$1,self__.meta27889,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18148__auto__ = ret;
if(cljs.core.truth_(and__18148__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18148__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27888.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27888.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27890){
var self__ = this;
var _27890__$1 = this;
return self__.meta27889;
});

cljs.core.async.t27888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27890,meta27889__$1){
var self__ = this;
var _27890__$1 = this;
return (new cljs.core.async.t27888(self__.ch,self__.f,self__.map_LT_,meta27889__$1));
});

cljs.core.async.t27888.cljs$lang$type = true;

cljs.core.async.t27888.cljs$lang$ctorStr = "cljs.core.async/t27888";

cljs.core.async.t27888.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27888");
});

cljs.core.async.__GT_t27888 = (function cljs$core$async$map_LT__$___GT_t27888(ch__$1,f__$1,map_LT___$1,meta27889){
return (new cljs.core.async.t27888(ch__$1,f__$1,map_LT___$1,meta27889));
});

}

return (new cljs.core.async.t27888(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27897 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27897 = (function (ch,f,map_GT_,meta27898){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27898 = meta27898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27897.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27897.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27897.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27899){
var self__ = this;
var _27899__$1 = this;
return self__.meta27898;
});

cljs.core.async.t27897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27899,meta27898__$1){
var self__ = this;
var _27899__$1 = this;
return (new cljs.core.async.t27897(self__.ch,self__.f,self__.map_GT_,meta27898__$1));
});

cljs.core.async.t27897.cljs$lang$type = true;

cljs.core.async.t27897.cljs$lang$ctorStr = "cljs.core.async/t27897";

cljs.core.async.t27897.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27897");
});

cljs.core.async.__GT_t27897 = (function cljs$core$async$map_GT__$___GT_t27897(ch__$1,f__$1,map_GT___$1,meta27898){
return (new cljs.core.async.t27897(ch__$1,f__$1,map_GT___$1,meta27898));
});

}

return (new cljs.core.async.t27897(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27903 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27903 = (function (ch,p,filter_GT_,meta27904){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27904 = meta27904;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27903.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27903.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27903.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27903.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27905){
var self__ = this;
var _27905__$1 = this;
return self__.meta27904;
});

cljs.core.async.t27903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27905,meta27904__$1){
var self__ = this;
var _27905__$1 = this;
return (new cljs.core.async.t27903(self__.ch,self__.p,self__.filter_GT_,meta27904__$1));
});

cljs.core.async.t27903.cljs$lang$type = true;

cljs.core.async.t27903.cljs$lang$ctorStr = "cljs.core.async/t27903";

cljs.core.async.t27903.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27903");
});

cljs.core.async.__GT_t27903 = (function cljs$core$async$filter_GT__$___GT_t27903(ch__$1,p__$1,filter_GT___$1,meta27904){
return (new cljs.core.async.t27903(ch__$1,p__$1,filter_GT___$1,meta27904));
});

}

return (new cljs.core.async.t27903(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__27907 = arguments.length;
switch (G__27907) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___27950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27950,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27950,out){
return (function (state_27928){
var state_val_27929 = (state_27928[(1)]);
if((state_val_27929 === (7))){
var inst_27924 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
var statearr_27930_27951 = state_27928__$1;
(statearr_27930_27951[(2)] = inst_27924);

(statearr_27930_27951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (1))){
var state_27928__$1 = state_27928;
var statearr_27931_27952 = state_27928__$1;
(statearr_27931_27952[(2)] = null);

(statearr_27931_27952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (4))){
var inst_27910 = (state_27928[(7)]);
var inst_27910__$1 = (state_27928[(2)]);
var inst_27911 = (inst_27910__$1 == null);
var state_27928__$1 = (function (){var statearr_27932 = state_27928;
(statearr_27932[(7)] = inst_27910__$1);

return statearr_27932;
})();
if(cljs.core.truth_(inst_27911)){
var statearr_27933_27953 = state_27928__$1;
(statearr_27933_27953[(1)] = (5));

} else {
var statearr_27934_27954 = state_27928__$1;
(statearr_27934_27954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (6))){
var inst_27910 = (state_27928[(7)]);
var inst_27915 = p.call(null,inst_27910);
var state_27928__$1 = state_27928;
if(cljs.core.truth_(inst_27915)){
var statearr_27935_27955 = state_27928__$1;
(statearr_27935_27955[(1)] = (8));

} else {
var statearr_27936_27956 = state_27928__$1;
(statearr_27936_27956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (3))){
var inst_27926 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27928__$1,inst_27926);
} else {
if((state_val_27929 === (2))){
var state_27928__$1 = state_27928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27928__$1,(4),ch);
} else {
if((state_val_27929 === (11))){
var inst_27918 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
var statearr_27937_27957 = state_27928__$1;
(statearr_27937_27957[(2)] = inst_27918);

(statearr_27937_27957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (9))){
var state_27928__$1 = state_27928;
var statearr_27938_27958 = state_27928__$1;
(statearr_27938_27958[(2)] = null);

(statearr_27938_27958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (5))){
var inst_27913 = cljs.core.async.close_BANG_.call(null,out);
var state_27928__$1 = state_27928;
var statearr_27939_27959 = state_27928__$1;
(statearr_27939_27959[(2)] = inst_27913);

(statearr_27939_27959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (10))){
var inst_27921 = (state_27928[(2)]);
var state_27928__$1 = (function (){var statearr_27940 = state_27928;
(statearr_27940[(8)] = inst_27921);

return statearr_27940;
})();
var statearr_27941_27960 = state_27928__$1;
(statearr_27941_27960[(2)] = null);

(statearr_27941_27960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (8))){
var inst_27910 = (state_27928[(7)]);
var state_27928__$1 = state_27928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27928__$1,(11),out,inst_27910);
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
});})(c__21384__auto___27950,out))
;
return ((function (switch__21322__auto__,c__21384__auto___27950,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27945 = [null,null,null,null,null,null,null,null,null];
(statearr_27945[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27945[(1)] = (1));

return statearr_27945;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27928){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27946){if((e27946 instanceof Object)){
var ex__21326__auto__ = e27946;
var statearr_27947_27961 = state_27928;
(statearr_27947_27961[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27962 = state_27928;
state_27928 = G__27962;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27950,out))
})();
var state__21386__auto__ = (function (){var statearr_27948 = f__21385__auto__.call(null);
(statearr_27948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27950);

return statearr_27948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27950,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27964 = arguments.length;
switch (G__27964) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_28131){
var state_val_28132 = (state_28131[(1)]);
if((state_val_28132 === (7))){
var inst_28127 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
var statearr_28133_28174 = state_28131__$1;
(statearr_28133_28174[(2)] = inst_28127);

(statearr_28133_28174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (20))){
var inst_28097 = (state_28131[(7)]);
var inst_28108 = (state_28131[(2)]);
var inst_28109 = cljs.core.next.call(null,inst_28097);
var inst_28083 = inst_28109;
var inst_28084 = null;
var inst_28085 = (0);
var inst_28086 = (0);
var state_28131__$1 = (function (){var statearr_28134 = state_28131;
(statearr_28134[(8)] = inst_28084);

(statearr_28134[(9)] = inst_28085);

(statearr_28134[(10)] = inst_28086);

(statearr_28134[(11)] = inst_28108);

(statearr_28134[(12)] = inst_28083);

return statearr_28134;
})();
var statearr_28135_28175 = state_28131__$1;
(statearr_28135_28175[(2)] = null);

(statearr_28135_28175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (1))){
var state_28131__$1 = state_28131;
var statearr_28136_28176 = state_28131__$1;
(statearr_28136_28176[(2)] = null);

(statearr_28136_28176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (4))){
var inst_28072 = (state_28131[(13)]);
var inst_28072__$1 = (state_28131[(2)]);
var inst_28073 = (inst_28072__$1 == null);
var state_28131__$1 = (function (){var statearr_28137 = state_28131;
(statearr_28137[(13)] = inst_28072__$1);

return statearr_28137;
})();
if(cljs.core.truth_(inst_28073)){
var statearr_28138_28177 = state_28131__$1;
(statearr_28138_28177[(1)] = (5));

} else {
var statearr_28139_28178 = state_28131__$1;
(statearr_28139_28178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (15))){
var state_28131__$1 = state_28131;
var statearr_28143_28179 = state_28131__$1;
(statearr_28143_28179[(2)] = null);

(statearr_28143_28179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (21))){
var state_28131__$1 = state_28131;
var statearr_28144_28180 = state_28131__$1;
(statearr_28144_28180[(2)] = null);

(statearr_28144_28180[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (13))){
var inst_28084 = (state_28131[(8)]);
var inst_28085 = (state_28131[(9)]);
var inst_28086 = (state_28131[(10)]);
var inst_28083 = (state_28131[(12)]);
var inst_28093 = (state_28131[(2)]);
var inst_28094 = (inst_28086 + (1));
var tmp28140 = inst_28084;
var tmp28141 = inst_28085;
var tmp28142 = inst_28083;
var inst_28083__$1 = tmp28142;
var inst_28084__$1 = tmp28140;
var inst_28085__$1 = tmp28141;
var inst_28086__$1 = inst_28094;
var state_28131__$1 = (function (){var statearr_28145 = state_28131;
(statearr_28145[(8)] = inst_28084__$1);

(statearr_28145[(9)] = inst_28085__$1);

(statearr_28145[(10)] = inst_28086__$1);

(statearr_28145[(14)] = inst_28093);

(statearr_28145[(12)] = inst_28083__$1);

return statearr_28145;
})();
var statearr_28146_28181 = state_28131__$1;
(statearr_28146_28181[(2)] = null);

(statearr_28146_28181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (22))){
var state_28131__$1 = state_28131;
var statearr_28147_28182 = state_28131__$1;
(statearr_28147_28182[(2)] = null);

(statearr_28147_28182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (6))){
var inst_28072 = (state_28131[(13)]);
var inst_28081 = f.call(null,inst_28072);
var inst_28082 = cljs.core.seq.call(null,inst_28081);
var inst_28083 = inst_28082;
var inst_28084 = null;
var inst_28085 = (0);
var inst_28086 = (0);
var state_28131__$1 = (function (){var statearr_28148 = state_28131;
(statearr_28148[(8)] = inst_28084);

(statearr_28148[(9)] = inst_28085);

(statearr_28148[(10)] = inst_28086);

(statearr_28148[(12)] = inst_28083);

return statearr_28148;
})();
var statearr_28149_28183 = state_28131__$1;
(statearr_28149_28183[(2)] = null);

(statearr_28149_28183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (17))){
var inst_28097 = (state_28131[(7)]);
var inst_28101 = cljs.core.chunk_first.call(null,inst_28097);
var inst_28102 = cljs.core.chunk_rest.call(null,inst_28097);
var inst_28103 = cljs.core.count.call(null,inst_28101);
var inst_28083 = inst_28102;
var inst_28084 = inst_28101;
var inst_28085 = inst_28103;
var inst_28086 = (0);
var state_28131__$1 = (function (){var statearr_28150 = state_28131;
(statearr_28150[(8)] = inst_28084);

(statearr_28150[(9)] = inst_28085);

(statearr_28150[(10)] = inst_28086);

(statearr_28150[(12)] = inst_28083);

return statearr_28150;
})();
var statearr_28151_28184 = state_28131__$1;
(statearr_28151_28184[(2)] = null);

(statearr_28151_28184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (3))){
var inst_28129 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28131__$1,inst_28129);
} else {
if((state_val_28132 === (12))){
var inst_28117 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
var statearr_28152_28185 = state_28131__$1;
(statearr_28152_28185[(2)] = inst_28117);

(statearr_28152_28185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (2))){
var state_28131__$1 = state_28131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28131__$1,(4),in$);
} else {
if((state_val_28132 === (23))){
var inst_28125 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
var statearr_28153_28186 = state_28131__$1;
(statearr_28153_28186[(2)] = inst_28125);

(statearr_28153_28186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (19))){
var inst_28112 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
var statearr_28154_28187 = state_28131__$1;
(statearr_28154_28187[(2)] = inst_28112);

(statearr_28154_28187[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (11))){
var inst_28097 = (state_28131[(7)]);
var inst_28083 = (state_28131[(12)]);
var inst_28097__$1 = cljs.core.seq.call(null,inst_28083);
var state_28131__$1 = (function (){var statearr_28155 = state_28131;
(statearr_28155[(7)] = inst_28097__$1);

return statearr_28155;
})();
if(inst_28097__$1){
var statearr_28156_28188 = state_28131__$1;
(statearr_28156_28188[(1)] = (14));

} else {
var statearr_28157_28189 = state_28131__$1;
(statearr_28157_28189[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (9))){
var inst_28119 = (state_28131[(2)]);
var inst_28120 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28131__$1 = (function (){var statearr_28158 = state_28131;
(statearr_28158[(15)] = inst_28119);

return statearr_28158;
})();
if(cljs.core.truth_(inst_28120)){
var statearr_28159_28190 = state_28131__$1;
(statearr_28159_28190[(1)] = (21));

} else {
var statearr_28160_28191 = state_28131__$1;
(statearr_28160_28191[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (5))){
var inst_28075 = cljs.core.async.close_BANG_.call(null,out);
var state_28131__$1 = state_28131;
var statearr_28161_28192 = state_28131__$1;
(statearr_28161_28192[(2)] = inst_28075);

(statearr_28161_28192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (14))){
var inst_28097 = (state_28131[(7)]);
var inst_28099 = cljs.core.chunked_seq_QMARK_.call(null,inst_28097);
var state_28131__$1 = state_28131;
if(inst_28099){
var statearr_28162_28193 = state_28131__$1;
(statearr_28162_28193[(1)] = (17));

} else {
var statearr_28163_28194 = state_28131__$1;
(statearr_28163_28194[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (16))){
var inst_28115 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
var statearr_28164_28195 = state_28131__$1;
(statearr_28164_28195[(2)] = inst_28115);

(statearr_28164_28195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (10))){
var inst_28084 = (state_28131[(8)]);
var inst_28086 = (state_28131[(10)]);
var inst_28091 = cljs.core._nth.call(null,inst_28084,inst_28086);
var state_28131__$1 = state_28131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28131__$1,(13),out,inst_28091);
} else {
if((state_val_28132 === (18))){
var inst_28097 = (state_28131[(7)]);
var inst_28106 = cljs.core.first.call(null,inst_28097);
var state_28131__$1 = state_28131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28131__$1,(20),out,inst_28106);
} else {
if((state_val_28132 === (8))){
var inst_28085 = (state_28131[(9)]);
var inst_28086 = (state_28131[(10)]);
var inst_28088 = (inst_28086 < inst_28085);
var inst_28089 = inst_28088;
var state_28131__$1 = state_28131;
if(cljs.core.truth_(inst_28089)){
var statearr_28165_28196 = state_28131__$1;
(statearr_28165_28196[(1)] = (10));

} else {
var statearr_28166_28197 = state_28131__$1;
(statearr_28166_28197[(1)] = (11));

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
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_28170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28170[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__);

(statearr_28170[(1)] = (1));

return statearr_28170;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____1 = (function (state_28131){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28171){if((e28171 instanceof Object)){
var ex__21326__auto__ = e28171;
var statearr_28172_28198 = state_28131;
(statearr_28172_28198[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28199 = state_28131;
state_28131 = G__28199;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__ = function(state_28131){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____1.call(this,state_28131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_28173 = f__21385__auto__.call(null);
(statearr_28173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_28173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28201 = arguments.length;
switch (G__28201) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28204 = arguments.length;
switch (G__28204) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28207 = arguments.length;
switch (G__28207) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___28257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28257,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28257,out){
return (function (state_28231){
var state_val_28232 = (state_28231[(1)]);
if((state_val_28232 === (7))){
var inst_28226 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28233_28258 = state_28231__$1;
(statearr_28233_28258[(2)] = inst_28226);

(statearr_28233_28258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (1))){
var inst_28208 = null;
var state_28231__$1 = (function (){var statearr_28234 = state_28231;
(statearr_28234[(7)] = inst_28208);

return statearr_28234;
})();
var statearr_28235_28259 = state_28231__$1;
(statearr_28235_28259[(2)] = null);

(statearr_28235_28259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (4))){
var inst_28211 = (state_28231[(8)]);
var inst_28211__$1 = (state_28231[(2)]);
var inst_28212 = (inst_28211__$1 == null);
var inst_28213 = cljs.core.not.call(null,inst_28212);
var state_28231__$1 = (function (){var statearr_28236 = state_28231;
(statearr_28236[(8)] = inst_28211__$1);

return statearr_28236;
})();
if(inst_28213){
var statearr_28237_28260 = state_28231__$1;
(statearr_28237_28260[(1)] = (5));

} else {
var statearr_28238_28261 = state_28231__$1;
(statearr_28238_28261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (6))){
var state_28231__$1 = state_28231;
var statearr_28239_28262 = state_28231__$1;
(statearr_28239_28262[(2)] = null);

(statearr_28239_28262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (3))){
var inst_28228 = (state_28231[(2)]);
var inst_28229 = cljs.core.async.close_BANG_.call(null,out);
var state_28231__$1 = (function (){var statearr_28240 = state_28231;
(statearr_28240[(9)] = inst_28228);

return statearr_28240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28231__$1,inst_28229);
} else {
if((state_val_28232 === (2))){
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(4),ch);
} else {
if((state_val_28232 === (11))){
var inst_28211 = (state_28231[(8)]);
var inst_28220 = (state_28231[(2)]);
var inst_28208 = inst_28211;
var state_28231__$1 = (function (){var statearr_28241 = state_28231;
(statearr_28241[(10)] = inst_28220);

(statearr_28241[(7)] = inst_28208);

return statearr_28241;
})();
var statearr_28242_28263 = state_28231__$1;
(statearr_28242_28263[(2)] = null);

(statearr_28242_28263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (9))){
var inst_28211 = (state_28231[(8)]);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28231__$1,(11),out,inst_28211);
} else {
if((state_val_28232 === (5))){
var inst_28211 = (state_28231[(8)]);
var inst_28208 = (state_28231[(7)]);
var inst_28215 = cljs.core._EQ_.call(null,inst_28211,inst_28208);
var state_28231__$1 = state_28231;
if(inst_28215){
var statearr_28244_28264 = state_28231__$1;
(statearr_28244_28264[(1)] = (8));

} else {
var statearr_28245_28265 = state_28231__$1;
(statearr_28245_28265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (10))){
var inst_28223 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28246_28266 = state_28231__$1;
(statearr_28246_28266[(2)] = inst_28223);

(statearr_28246_28266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (8))){
var inst_28208 = (state_28231[(7)]);
var tmp28243 = inst_28208;
var inst_28208__$1 = tmp28243;
var state_28231__$1 = (function (){var statearr_28247 = state_28231;
(statearr_28247[(7)] = inst_28208__$1);

return statearr_28247;
})();
var statearr_28248_28267 = state_28231__$1;
(statearr_28248_28267[(2)] = null);

(statearr_28248_28267[(1)] = (2));


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
});})(c__21384__auto___28257,out))
;
return ((function (switch__21322__auto__,c__21384__auto___28257,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_28252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28252[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_28252[(1)] = (1));

return statearr_28252;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_28231){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28253){if((e28253 instanceof Object)){
var ex__21326__auto__ = e28253;
var statearr_28254_28268 = state_28231;
(statearr_28254_28268[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28269 = state_28231;
state_28231 = G__28269;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_28231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_28231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28257,out))
})();
var state__21386__auto__ = (function (){var statearr_28255 = f__21385__auto__.call(null);
(statearr_28255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28257);

return statearr_28255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28257,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28271 = arguments.length;
switch (G__28271) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___28340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28340,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28340,out){
return (function (state_28309){
var state_val_28310 = (state_28309[(1)]);
if((state_val_28310 === (7))){
var inst_28305 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28311_28341 = state_28309__$1;
(statearr_28311_28341[(2)] = inst_28305);

(statearr_28311_28341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (1))){
var inst_28272 = (new Array(n));
var inst_28273 = inst_28272;
var inst_28274 = (0);
var state_28309__$1 = (function (){var statearr_28312 = state_28309;
(statearr_28312[(7)] = inst_28273);

(statearr_28312[(8)] = inst_28274);

return statearr_28312;
})();
var statearr_28313_28342 = state_28309__$1;
(statearr_28313_28342[(2)] = null);

(statearr_28313_28342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (4))){
var inst_28277 = (state_28309[(9)]);
var inst_28277__$1 = (state_28309[(2)]);
var inst_28278 = (inst_28277__$1 == null);
var inst_28279 = cljs.core.not.call(null,inst_28278);
var state_28309__$1 = (function (){var statearr_28314 = state_28309;
(statearr_28314[(9)] = inst_28277__$1);

return statearr_28314;
})();
if(inst_28279){
var statearr_28315_28343 = state_28309__$1;
(statearr_28315_28343[(1)] = (5));

} else {
var statearr_28316_28344 = state_28309__$1;
(statearr_28316_28344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (15))){
var inst_28299 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28317_28345 = state_28309__$1;
(statearr_28317_28345[(2)] = inst_28299);

(statearr_28317_28345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (13))){
var state_28309__$1 = state_28309;
var statearr_28318_28346 = state_28309__$1;
(statearr_28318_28346[(2)] = null);

(statearr_28318_28346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (6))){
var inst_28274 = (state_28309[(8)]);
var inst_28295 = (inst_28274 > (0));
var state_28309__$1 = state_28309;
if(cljs.core.truth_(inst_28295)){
var statearr_28319_28347 = state_28309__$1;
(statearr_28319_28347[(1)] = (12));

} else {
var statearr_28320_28348 = state_28309__$1;
(statearr_28320_28348[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (3))){
var inst_28307 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28309__$1,inst_28307);
} else {
if((state_val_28310 === (12))){
var inst_28273 = (state_28309[(7)]);
var inst_28297 = cljs.core.vec.call(null,inst_28273);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,(15),out,inst_28297);
} else {
if((state_val_28310 === (2))){
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28309__$1,(4),ch);
} else {
if((state_val_28310 === (11))){
var inst_28289 = (state_28309[(2)]);
var inst_28290 = (new Array(n));
var inst_28273 = inst_28290;
var inst_28274 = (0);
var state_28309__$1 = (function (){var statearr_28321 = state_28309;
(statearr_28321[(7)] = inst_28273);

(statearr_28321[(10)] = inst_28289);

(statearr_28321[(8)] = inst_28274);

return statearr_28321;
})();
var statearr_28322_28349 = state_28309__$1;
(statearr_28322_28349[(2)] = null);

(statearr_28322_28349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (9))){
var inst_28273 = (state_28309[(7)]);
var inst_28287 = cljs.core.vec.call(null,inst_28273);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,(11),out,inst_28287);
} else {
if((state_val_28310 === (5))){
var inst_28273 = (state_28309[(7)]);
var inst_28282 = (state_28309[(11)]);
var inst_28277 = (state_28309[(9)]);
var inst_28274 = (state_28309[(8)]);
var inst_28281 = (inst_28273[inst_28274] = inst_28277);
var inst_28282__$1 = (inst_28274 + (1));
var inst_28283 = (inst_28282__$1 < n);
var state_28309__$1 = (function (){var statearr_28323 = state_28309;
(statearr_28323[(12)] = inst_28281);

(statearr_28323[(11)] = inst_28282__$1);

return statearr_28323;
})();
if(cljs.core.truth_(inst_28283)){
var statearr_28324_28350 = state_28309__$1;
(statearr_28324_28350[(1)] = (8));

} else {
var statearr_28325_28351 = state_28309__$1;
(statearr_28325_28351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (14))){
var inst_28302 = (state_28309[(2)]);
var inst_28303 = cljs.core.async.close_BANG_.call(null,out);
var state_28309__$1 = (function (){var statearr_28327 = state_28309;
(statearr_28327[(13)] = inst_28302);

return statearr_28327;
})();
var statearr_28328_28352 = state_28309__$1;
(statearr_28328_28352[(2)] = inst_28303);

(statearr_28328_28352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (10))){
var inst_28293 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28329_28353 = state_28309__$1;
(statearr_28329_28353[(2)] = inst_28293);

(statearr_28329_28353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (8))){
var inst_28273 = (state_28309[(7)]);
var inst_28282 = (state_28309[(11)]);
var tmp28326 = inst_28273;
var inst_28273__$1 = tmp28326;
var inst_28274 = inst_28282;
var state_28309__$1 = (function (){var statearr_28330 = state_28309;
(statearr_28330[(7)] = inst_28273__$1);

(statearr_28330[(8)] = inst_28274);

return statearr_28330;
})();
var statearr_28331_28354 = state_28309__$1;
(statearr_28331_28354[(2)] = null);

(statearr_28331_28354[(1)] = (2));


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
});})(c__21384__auto___28340,out))
;
return ((function (switch__21322__auto__,c__21384__auto___28340,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_28335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28335[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_28335[(1)] = (1));

return statearr_28335;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_28309){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28336){if((e28336 instanceof Object)){
var ex__21326__auto__ = e28336;
var statearr_28337_28355 = state_28309;
(statearr_28337_28355[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28356 = state_28309;
state_28309 = G__28356;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_28309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_28309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28340,out))
})();
var state__21386__auto__ = (function (){var statearr_28338 = f__21385__auto__.call(null);
(statearr_28338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28340);

return statearr_28338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28340,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28358 = arguments.length;
switch (G__28358) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___28431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28431,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28431,out){
return (function (state_28400){
var state_val_28401 = (state_28400[(1)]);
if((state_val_28401 === (7))){
var inst_28396 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
var statearr_28402_28432 = state_28400__$1;
(statearr_28402_28432[(2)] = inst_28396);

(statearr_28402_28432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (1))){
var inst_28359 = [];
var inst_28360 = inst_28359;
var inst_28361 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28400__$1 = (function (){var statearr_28403 = state_28400;
(statearr_28403[(7)] = inst_28361);

(statearr_28403[(8)] = inst_28360);

return statearr_28403;
})();
var statearr_28404_28433 = state_28400__$1;
(statearr_28404_28433[(2)] = null);

(statearr_28404_28433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (4))){
var inst_28364 = (state_28400[(9)]);
var inst_28364__$1 = (state_28400[(2)]);
var inst_28365 = (inst_28364__$1 == null);
var inst_28366 = cljs.core.not.call(null,inst_28365);
var state_28400__$1 = (function (){var statearr_28405 = state_28400;
(statearr_28405[(9)] = inst_28364__$1);

return statearr_28405;
})();
if(inst_28366){
var statearr_28406_28434 = state_28400__$1;
(statearr_28406_28434[(1)] = (5));

} else {
var statearr_28407_28435 = state_28400__$1;
(statearr_28407_28435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (15))){
var inst_28390 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
var statearr_28408_28436 = state_28400__$1;
(statearr_28408_28436[(2)] = inst_28390);

(statearr_28408_28436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (13))){
var state_28400__$1 = state_28400;
var statearr_28409_28437 = state_28400__$1;
(statearr_28409_28437[(2)] = null);

(statearr_28409_28437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (6))){
var inst_28360 = (state_28400[(8)]);
var inst_28385 = inst_28360.length;
var inst_28386 = (inst_28385 > (0));
var state_28400__$1 = state_28400;
if(cljs.core.truth_(inst_28386)){
var statearr_28410_28438 = state_28400__$1;
(statearr_28410_28438[(1)] = (12));

} else {
var statearr_28411_28439 = state_28400__$1;
(statearr_28411_28439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (3))){
var inst_28398 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28400__$1,inst_28398);
} else {
if((state_val_28401 === (12))){
var inst_28360 = (state_28400[(8)]);
var inst_28388 = cljs.core.vec.call(null,inst_28360);
var state_28400__$1 = state_28400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28400__$1,(15),out,inst_28388);
} else {
if((state_val_28401 === (2))){
var state_28400__$1 = state_28400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28400__$1,(4),ch);
} else {
if((state_val_28401 === (11))){
var inst_28368 = (state_28400[(10)]);
var inst_28364 = (state_28400[(9)]);
var inst_28378 = (state_28400[(2)]);
var inst_28379 = [];
var inst_28380 = inst_28379.push(inst_28364);
var inst_28360 = inst_28379;
var inst_28361 = inst_28368;
var state_28400__$1 = (function (){var statearr_28412 = state_28400;
(statearr_28412[(7)] = inst_28361);

(statearr_28412[(11)] = inst_28380);

(statearr_28412[(8)] = inst_28360);

(statearr_28412[(12)] = inst_28378);

return statearr_28412;
})();
var statearr_28413_28440 = state_28400__$1;
(statearr_28413_28440[(2)] = null);

(statearr_28413_28440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (9))){
var inst_28360 = (state_28400[(8)]);
var inst_28376 = cljs.core.vec.call(null,inst_28360);
var state_28400__$1 = state_28400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28400__$1,(11),out,inst_28376);
} else {
if((state_val_28401 === (5))){
var inst_28361 = (state_28400[(7)]);
var inst_28368 = (state_28400[(10)]);
var inst_28364 = (state_28400[(9)]);
var inst_28368__$1 = f.call(null,inst_28364);
var inst_28369 = cljs.core._EQ_.call(null,inst_28368__$1,inst_28361);
var inst_28370 = cljs.core.keyword_identical_QMARK_.call(null,inst_28361,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28371 = (inst_28369) || (inst_28370);
var state_28400__$1 = (function (){var statearr_28414 = state_28400;
(statearr_28414[(10)] = inst_28368__$1);

return statearr_28414;
})();
if(cljs.core.truth_(inst_28371)){
var statearr_28415_28441 = state_28400__$1;
(statearr_28415_28441[(1)] = (8));

} else {
var statearr_28416_28442 = state_28400__$1;
(statearr_28416_28442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (14))){
var inst_28393 = (state_28400[(2)]);
var inst_28394 = cljs.core.async.close_BANG_.call(null,out);
var state_28400__$1 = (function (){var statearr_28418 = state_28400;
(statearr_28418[(13)] = inst_28393);

return statearr_28418;
})();
var statearr_28419_28443 = state_28400__$1;
(statearr_28419_28443[(2)] = inst_28394);

(statearr_28419_28443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (10))){
var inst_28383 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
var statearr_28420_28444 = state_28400__$1;
(statearr_28420_28444[(2)] = inst_28383);

(statearr_28420_28444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28401 === (8))){
var inst_28360 = (state_28400[(8)]);
var inst_28368 = (state_28400[(10)]);
var inst_28364 = (state_28400[(9)]);
var inst_28373 = inst_28360.push(inst_28364);
var tmp28417 = inst_28360;
var inst_28360__$1 = tmp28417;
var inst_28361 = inst_28368;
var state_28400__$1 = (function (){var statearr_28421 = state_28400;
(statearr_28421[(14)] = inst_28373);

(statearr_28421[(7)] = inst_28361);

(statearr_28421[(8)] = inst_28360__$1);

return statearr_28421;
})();
var statearr_28422_28445 = state_28400__$1;
(statearr_28422_28445[(2)] = null);

(statearr_28422_28445[(1)] = (2));


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
});})(c__21384__auto___28431,out))
;
return ((function (switch__21322__auto__,c__21384__auto___28431,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_28426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28426[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_28426[(1)] = (1));

return statearr_28426;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_28400){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28427){if((e28427 instanceof Object)){
var ex__21326__auto__ = e28427;
var statearr_28428_28446 = state_28400;
(statearr_28428_28446[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28447 = state_28400;
state_28400 = G__28447;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_28400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_28400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28431,out))
})();
var state__21386__auto__ = (function (){var statearr_28429 = f__21385__auto__.call(null);
(statearr_28429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28431);

return statearr_28429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28431,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1442499280766