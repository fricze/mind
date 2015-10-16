// Compiled by ClojureScript 0.0-3211 {}
goog.provide('garden.types');
goog.require('cljs.core');

/**
* @constructor
* @param {*} unit
* @param {*} magnitude
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18755__auto__,k__18756__auto__){
var self__ = this;
var this__18755__auto____$1 = this;
return cljs.core._lookup.call(null,this__18755__auto____$1,k__18756__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18757__auto__,k31891,else__18758__auto__){
var self__ = this;
var this__18757__auto____$1 = this;
var G__31893 = (((k31891 instanceof cljs.core.Keyword))?k31891.fqn:null);
switch (G__31893) {
case "magnitude":
return self__.magnitude;

break;
case "unit":
return self__.unit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31891,else__18758__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18769__auto__,writer__18770__auto__,opts__18771__auto__){
var self__ = this;
var this__18769__auto____$1 = this;
var pr_pair__18772__auto__ = ((function (this__18769__auto____$1){
return (function (keyval__18773__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18770__auto__,cljs.core.pr_writer,""," ","",opts__18771__auto__,keyval__18773__auto__);
});})(this__18769__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18770__auto__,pr_pair__18772__auto__,"#garden.types.CSSUnit{",", ","}",opts__18771__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18753__auto__){
var self__ = this;
var this__18753__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18749__auto__){
var self__ = this;
var this__18749__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18759__auto__){
var self__ = this;
var this__18759__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18750__auto__){
var self__ = this;
var this__18750__auto____$1 = this;
var h__18576__auto__ = self__.__hash;
if(!((h__18576__auto__ == null))){
return h__18576__auto__;
} else {
var h__18576__auto____$1 = cljs.core.hash_imap.call(null,this__18750__auto____$1);
self__.__hash = h__18576__auto____$1;

return h__18576__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18751__auto__,other__18752__auto__){
var self__ = this;
var this__18751__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18148__auto__ = other__18752__auto__;
if(cljs.core.truth_(and__18148__auto__)){
var and__18148__auto____$1 = (this__18751__auto____$1.constructor === other__18752__auto__.constructor);
if(and__18148__auto____$1){
return cljs.core.equiv_map.call(null,this__18751__auto____$1,other__18752__auto__);
} else {
return and__18148__auto____$1;
}
} else {
return and__18148__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18764__auto__,k__18765__auto__){
var self__ = this;
var this__18764__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__18765__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18764__auto____$1),self__.__meta),k__18765__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18765__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18762__auto__,k__18763__auto__,G__31890){
var self__ = this;
var this__18762__auto____$1 = this;
var pred__31894 = cljs.core.keyword_identical_QMARK_;
var expr__31895 = k__18763__auto__;
if(cljs.core.truth_(pred__31894.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__31895))){
return (new garden.types.CSSUnit(G__31890,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31894.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__31895))){
return (new garden.types.CSSUnit(self__.unit,G__31890,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18763__auto__,G__31890),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18767__auto__){
var self__ = this;
var this__18767__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18754__auto__,G__31890){
var self__ = this;
var this__18754__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__31890,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18760__auto__,entry__18761__auto__){
var self__ = this;
var this__18760__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18761__auto__)){
return cljs.core._assoc.call(null,this__18760__auto____$1,cljs.core._nth.call(null,entry__18761__auto__,(0)),cljs.core._nth.call(null,entry__18761__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18760__auto____$1,entry__18761__auto__);
}
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__18789__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__18789__auto__,writer__18790__auto__){
return cljs.core._write.call(null,writer__18790__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__31892){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__31892),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__31892),null,cljs.core.dissoc.call(null,G__31892,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)),null));
});


/**
* @constructor
* @param {*} function$
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18755__auto__,k__18756__auto__){
var self__ = this;
var this__18755__auto____$1 = this;
return cljs.core._lookup.call(null,this__18755__auto____$1,k__18756__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18757__auto__,k31899,else__18758__auto__){
var self__ = this;
var this__18757__auto____$1 = this;
var G__31901 = (((k31899 instanceof cljs.core.Keyword))?k31899.fqn:null);
switch (G__31901) {
case "args":
return self__.args;

break;
case "function":
return self__.function$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31899,else__18758__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18769__auto__,writer__18770__auto__,opts__18771__auto__){
var self__ = this;
var this__18769__auto____$1 = this;
var pr_pair__18772__auto__ = ((function (this__18769__auto____$1){
return (function (keyval__18773__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18770__auto__,cljs.core.pr_writer,""," ","",opts__18771__auto__,keyval__18773__auto__);
});})(this__18769__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18770__auto__,pr_pair__18772__auto__,"#garden.types.CSSFunction{",", ","}",opts__18771__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18753__auto__){
var self__ = this;
var this__18753__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18749__auto__){
var self__ = this;
var this__18749__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18759__auto__){
var self__ = this;
var this__18759__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18750__auto__){
var self__ = this;
var this__18750__auto____$1 = this;
var h__18576__auto__ = self__.__hash;
if(!((h__18576__auto__ == null))){
return h__18576__auto__;
} else {
var h__18576__auto____$1 = cljs.core.hash_imap.call(null,this__18750__auto____$1);
self__.__hash = h__18576__auto____$1;

return h__18576__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18751__auto__,other__18752__auto__){
var self__ = this;
var this__18751__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18148__auto__ = other__18752__auto__;
if(cljs.core.truth_(and__18148__auto__)){
var and__18148__auto____$1 = (this__18751__auto____$1.constructor === other__18752__auto__.constructor);
if(and__18148__auto____$1){
return cljs.core.equiv_map.call(null,this__18751__auto____$1,other__18752__auto__);
} else {
return and__18148__auto____$1;
}
} else {
return and__18148__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18764__auto__,k__18765__auto__){
var self__ = this;
var this__18764__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__18765__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18764__auto____$1),self__.__meta),k__18765__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18765__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18762__auto__,k__18763__auto__,G__31898){
var self__ = this;
var this__18762__auto____$1 = this;
var pred__31902 = cljs.core.keyword_identical_QMARK_;
var expr__31903 = k__18763__auto__;
if(cljs.core.truth_(pred__31902.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__31903))){
return (new garden.types.CSSFunction(G__31898,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31902.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__31903))){
return (new garden.types.CSSFunction(self__.function$,G__31898,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18763__auto__,G__31898),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18767__auto__){
var self__ = this;
var this__18767__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18754__auto__,G__31898){
var self__ = this;
var this__18754__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__31898,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18760__auto__,entry__18761__auto__){
var self__ = this;
var this__18760__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18761__auto__)){
return cljs.core._assoc.call(null,this__18760__auto____$1,cljs.core._nth.call(null,entry__18761__auto__,(0)),cljs.core._nth.call(null,entry__18761__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18760__auto____$1,entry__18761__auto__);
}
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__18789__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__18789__auto__,writer__18790__auto__){
return cljs.core._write.call(null,writer__18790__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__31900){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__31900),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__31900),null,cljs.core.dissoc.call(null,G__31900,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
* @param {*} identifier
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18755__auto__,k__18756__auto__){
var self__ = this;
var this__18755__auto____$1 = this;
return cljs.core._lookup.call(null,this__18755__auto____$1,k__18756__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18757__auto__,k31907,else__18758__auto__){
var self__ = this;
var this__18757__auto____$1 = this;
var G__31909 = (((k31907 instanceof cljs.core.Keyword))?k31907.fqn:null);
switch (G__31909) {
case "value":
return self__.value;

break;
case "identifier":
return self__.identifier;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31907,else__18758__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18769__auto__,writer__18770__auto__,opts__18771__auto__){
var self__ = this;
var this__18769__auto____$1 = this;
var pr_pair__18772__auto__ = ((function (this__18769__auto____$1){
return (function (keyval__18773__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18770__auto__,cljs.core.pr_writer,""," ","",opts__18771__auto__,keyval__18773__auto__);
});})(this__18769__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18770__auto__,pr_pair__18772__auto__,"#garden.types.CSSAtRule{",", ","}",opts__18771__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18753__auto__){
var self__ = this;
var this__18753__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18749__auto__){
var self__ = this;
var this__18749__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18759__auto__){
var self__ = this;
var this__18759__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18750__auto__){
var self__ = this;
var this__18750__auto____$1 = this;
var h__18576__auto__ = self__.__hash;
if(!((h__18576__auto__ == null))){
return h__18576__auto__;
} else {
var h__18576__auto____$1 = cljs.core.hash_imap.call(null,this__18750__auto____$1);
self__.__hash = h__18576__auto____$1;

return h__18576__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18751__auto__,other__18752__auto__){
var self__ = this;
var this__18751__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18148__auto__ = other__18752__auto__;
if(cljs.core.truth_(and__18148__auto__)){
var and__18148__auto____$1 = (this__18751__auto____$1.constructor === other__18752__auto__.constructor);
if(and__18148__auto____$1){
return cljs.core.equiv_map.call(null,this__18751__auto____$1,other__18752__auto__);
} else {
return and__18148__auto____$1;
}
} else {
return and__18148__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18764__auto__,k__18765__auto__){
var self__ = this;
var this__18764__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__18765__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18764__auto____$1),self__.__meta),k__18765__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18765__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18762__auto__,k__18763__auto__,G__31906){
var self__ = this;
var this__18762__auto____$1 = this;
var pred__31910 = cljs.core.keyword_identical_QMARK_;
var expr__31911 = k__18763__auto__;
if(cljs.core.truth_(pred__31910.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__31911))){
return (new garden.types.CSSAtRule(G__31906,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31910.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__31911))){
return (new garden.types.CSSAtRule(self__.identifier,G__31906,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18763__auto__,G__31906),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18767__auto__){
var self__ = this;
var this__18767__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18754__auto__,G__31906){
var self__ = this;
var this__18754__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__31906,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18760__auto__,entry__18761__auto__){
var self__ = this;
var this__18760__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18761__auto__)){
return cljs.core._assoc.call(null,this__18760__auto____$1,cljs.core._nth.call(null,entry__18761__auto__,(0)),cljs.core._nth.call(null,entry__18761__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18760__auto____$1,entry__18761__auto__);
}
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__18789__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__18789__auto__,writer__18790__auto__){
return cljs.core._write.call(null,writer__18790__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__31908){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__31908),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__31908),null,cljs.core.dissoc.call(null,G__31908,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


//# sourceMappingURL=types.js.map?rel=1442499398799