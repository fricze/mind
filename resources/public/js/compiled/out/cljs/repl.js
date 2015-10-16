// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29611_29623 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29612_29624 = null;
var count__29613_29625 = (0);
var i__29614_29626 = (0);
while(true){
if((i__29614_29626 < count__29613_29625)){
var f_29627 = cljs.core._nth.call(null,chunk__29612_29624,i__29614_29626);
cljs.core.println.call(null,"  ",f_29627);

var G__29628 = seq__29611_29623;
var G__29629 = chunk__29612_29624;
var G__29630 = count__29613_29625;
var G__29631 = (i__29614_29626 + (1));
seq__29611_29623 = G__29628;
chunk__29612_29624 = G__29629;
count__29613_29625 = G__29630;
i__29614_29626 = G__29631;
continue;
} else {
var temp__4126__auto___29632 = cljs.core.seq.call(null,seq__29611_29623);
if(temp__4126__auto___29632){
var seq__29611_29633__$1 = temp__4126__auto___29632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29611_29633__$1)){
var c__18945__auto___29634 = cljs.core.chunk_first.call(null,seq__29611_29633__$1);
var G__29635 = cljs.core.chunk_rest.call(null,seq__29611_29633__$1);
var G__29636 = c__18945__auto___29634;
var G__29637 = cljs.core.count.call(null,c__18945__auto___29634);
var G__29638 = (0);
seq__29611_29623 = G__29635;
chunk__29612_29624 = G__29636;
count__29613_29625 = G__29637;
i__29614_29626 = G__29638;
continue;
} else {
var f_29639 = cljs.core.first.call(null,seq__29611_29633__$1);
cljs.core.println.call(null,"  ",f_29639);

var G__29640 = cljs.core.next.call(null,seq__29611_29633__$1);
var G__29641 = null;
var G__29642 = (0);
var G__29643 = (0);
seq__29611_29623 = G__29640;
chunk__29612_29624 = G__29641;
count__29613_29625 = G__29642;
i__29614_29626 = G__29643;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29615 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29616 = null;
var count__29617 = (0);
var i__29618 = (0);
while(true){
if((i__29618 < count__29617)){
var vec__29619 = cljs.core._nth.call(null,chunk__29616,i__29618);
var name = cljs.core.nth.call(null,vec__29619,(0),null);
var map__29620 = cljs.core.nth.call(null,vec__29619,(1),null);
var map__29620__$1 = ((cljs.core.seq_QMARK_.call(null,map__29620))?cljs.core.apply.call(null,cljs.core.hash_map,map__29620):map__29620);
var arglists = cljs.core.get.call(null,map__29620__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29620__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29644 = seq__29615;
var G__29645 = chunk__29616;
var G__29646 = count__29617;
var G__29647 = (i__29618 + (1));
seq__29615 = G__29644;
chunk__29616 = G__29645;
count__29617 = G__29646;
i__29618 = G__29647;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29615);
if(temp__4126__auto__){
var seq__29615__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29615__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__29615__$1);
var G__29648 = cljs.core.chunk_rest.call(null,seq__29615__$1);
var G__29649 = c__18945__auto__;
var G__29650 = cljs.core.count.call(null,c__18945__auto__);
var G__29651 = (0);
seq__29615 = G__29648;
chunk__29616 = G__29649;
count__29617 = G__29650;
i__29618 = G__29651;
continue;
} else {
var vec__29621 = cljs.core.first.call(null,seq__29615__$1);
var name = cljs.core.nth.call(null,vec__29621,(0),null);
var map__29622 = cljs.core.nth.call(null,vec__29621,(1),null);
var map__29622__$1 = ((cljs.core.seq_QMARK_.call(null,map__29622))?cljs.core.apply.call(null,cljs.core.hash_map,map__29622):map__29622);
var arglists = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29652 = cljs.core.next.call(null,seq__29615__$1);
var G__29653 = null;
var G__29654 = (0);
var G__29655 = (0);
seq__29615 = G__29652;
chunk__29616 = G__29653;
count__29617 = G__29654;
i__29618 = G__29655;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1442499282207