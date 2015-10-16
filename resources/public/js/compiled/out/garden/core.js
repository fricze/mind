// Compiled by ClojureScript 0.0-3211 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 * CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq31587){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31587));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 * the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq31588){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31588));
});

//# sourceMappingURL=core.js.map?rel=1442499397461