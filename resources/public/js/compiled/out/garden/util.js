// Compiled by ClojureScript 0.0-3211 {}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('garden.types');
goog.require('clojure.string');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(){
var argseq__19200__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19200__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq31856){
var G__31857 = cljs.core.first.call(null,seq31856);
var seq31856__$1 = cljs.core.next.call(null,seq31856);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__31857,seq31856__$1);
});

garden.util.ToString = (function (){var obj31859 = {};
return obj31859;
})();

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((function (){var and__18148__auto__ = this$;
if(and__18148__auto__){
return this$.garden$util$ToString$to_str$arity$1;
} else {
return and__18148__auto__;
}
})()){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__18796__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18160__auto__ = (garden.util.to_str[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (garden.util.to_str["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
})().call(null,this$);
}
});

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

cljs.core.Keyword.prototype.garden$util$ToString$ = true;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq31860){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31860));
});
/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(){
var argseq__19200__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19200__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__31863){
var vec__31864 = p__31863;
var radix = cljs.core.nth.call(null,vec__31864,(0),null);
var radix__$1 = (function (){var or__18160__auto__ = radix;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq31861){
var G__31862 = cljs.core.first.call(null,seq31861);
var seq31861__$1 = cljs.core.next.call(null,seq31861);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__31862,seq31861__$1);
});
/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(){
var argseq__19200__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19200__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__31867){
var vec__31868 = p__31867;
var radix = cljs.core.nth.call(null,vec__31868,(0),null);
var radix__$1 = (function (){var or__18160__auto__ = radix;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq31865){
var G__31866 = cljs.core.first.call(null,seq31865);
var seq31865__$1 = cljs.core.next.call(null,seq31865);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__31866,seq31865__$1);
});
/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__18914__auto__ = (function garden$util$comma_join_$_iter__31873(s__31874){
return (new cljs.core.LazySeq(null,(function (){
var s__31874__$1 = s__31874;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31874__$1);
if(temp__4126__auto__){
var s__31874__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31874__$2)){
var c__18912__auto__ = cljs.core.chunk_first.call(null,s__31874__$2);
var size__18913__auto__ = cljs.core.count.call(null,c__18912__auto__);
var b__31876 = cljs.core.chunk_buffer.call(null,size__18913__auto__);
if((function (){var i__31875 = (0);
while(true){
if((i__31875 < size__18913__auto__)){
var x = cljs.core._nth.call(null,c__18912__auto__,i__31875);
cljs.core.chunk_append.call(null,b__31876,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__31877 = (i__31875 + (1));
i__31875 = G__31877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31876),garden$util$comma_join_$_iter__31873.call(null,cljs.core.chunk_rest.call(null,s__31874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31876),null);
}
} else {
var x = cljs.core.first.call(null,s__31874__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__31873.call(null,cljs.core.rest.call(null,s__31874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18914__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
/**
 * True if x is an instance of or satisfies clojure.lang.IRecord.
 */
garden.util.record_QMARK_ = (function garden$util$record_QMARK_(x){
var G__31879 = x;
if(G__31879){
var bit__18834__auto__ = (G__31879.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__18834__auto__) || (G__31879.cljs$core$IRecord$)){
return true;
} else {
if((!G__31879.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__31879);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__31879);
}
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.not.call(null,garden.util.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__18148__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__18148__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__18148__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__18148__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__18148__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__18148__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str(p__$1),cljs.core.str(s)].join('');
} else {
return [cljs.core.str(p__$1),cljs.core.str("-"),cljs.core.str(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str("-"),cljs.core.str(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__18479__auto__ = a;
var y__18480__auto__ = b;
return ((x__18479__auto__ < y__18480__auto__) ? x__18479__auto__ : y__18480__auto__);
})();
var top = (function (){var x__18472__auto__ = a;
var y__18473__auto__ = b;
return ((x__18472__auto__ > y__18473__auto__) ? x__18472__auto__ : y__18473__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__31881 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__31881,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__31881,(1),null);
var x__18472__auto__ = a__$1;
var y__18473__auto__ = (function (){var x__18479__auto__ = b__$1;
var y__18480__auto__ = n;
return ((x__18479__auto__ < y__18480__auto__) ? x__18479__auto__ : y__18480__auto__);
})();
return ((x__18472__auto__ > y__18473__auto__) ? x__18472__auto__ : y__18473__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(){
var argseq__19200__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19200__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq31882){
var G__31883 = cljs.core.first.call(null,seq31882);
var seq31882__$1 = cljs.core.next.call(null,seq31882);
var G__31884 = cljs.core.first.call(null,seq31882__$1);
var seq31882__$2 = cljs.core.next.call(null,seq31882__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__31883,G__31884,seq31882__$2);
});
/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4124__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4124__auto__){
var rst = temp__4124__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__31886 = (i - (1));
var G__31887 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__31886;
v_seqs__$2 = G__31887;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq31885){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31885));
});

//# sourceMappingURL=util.js.map?rel=1442499398661