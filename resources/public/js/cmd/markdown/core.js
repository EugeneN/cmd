// Compiled by ClojureScript 0.0-2202
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function init_transformer(p__10151){var map__10157 = p__10151;var map__10157__$1 = ((cljs.core.seq_QMARK_.call(null,map__10157))?cljs.core.apply.call(null,cljs.core.hash_map,map__10157):map__10157);var custom_transformers = cljs.core.get.call(null,map__10157__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",2925052616));var replacement_transformers = cljs.core.get.call(null,map__10157__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",2324106695));return ((function (map__10157,map__10157__$1,custom_transformers,replacement_transformers){
return (function (html,line,next_line,state){var _STAR_next_line_STAR_10158 = markdown.transformers._STAR_next_line_STAR_;try{markdown.transformers._STAR_next_line_STAR_ = next_line;
var vec__10159 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_10158,map__10157,map__10157__$1,custom_transformers,replacement_transformers){
return (function (p__10160,transformer){var vec__10161 = p__10160;var text = cljs.core.nth.call(null,vec__10161,0,null);var state__$1 = cljs.core.nth.call(null,vec__10161,1,null);return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_10158,map__10157,map__10157__$1,custom_transformers,replacement_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3451__auto__ = replacement_transformers;if(cljs.core.truth_(or__3451__auto__))
{return or__3451__auto__;
} else
{return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());var text = cljs.core.nth.call(null,vec__10159,0,null);var new_state = cljs.core.nth.call(null,vec__10159,1,null);html.append(text);
return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_10158;
}});
;})(map__10157,map__10157__$1,custom_transformers,replacement_transformers))
});
/**
* Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
* @param {...*} var_args
*/
markdown.core.format = (function() { 
var format__delegate = function (fmt,args){return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__10162){
var fmt = cljs.core.first(arglist__10162);
var args = cljs.core.rest(arglist__10162);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* processes input text line by line and outputs an HTML string
* @param {...*} var_args
*/
markdown.core.mdToHtml = (function() { 
var mdToHtml__delegate = function (text,params){var _STAR_substring_STAR_10169 = markdown.transformers._STAR_substring_STAR_;var formatter10170 = markdown.transformers.formatter;try{markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_10169,formatter10170){
return (function (s,n){return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_10169,formatter10170))
;
markdown.transformers.formatter = markdown.core.format;
var transformer = markdown.core.init_transformer.call(null,params);var html = (new goog.string.StringBuffer(""));var G__10172_10175 = text.split("\n");var vec__10173_10176 = G__10172_10175;var line_10177 = cljs.core.nth.call(null,vec__10173_10176,0,null);var more_10178 = cljs.core.nthnext.call(null,vec__10173_10176,1);var state_10179 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clojurescript","clojurescript",4763057185),true], null),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),false),params);var G__10172_10180__$1 = G__10172_10175;var state_10181__$1 = state_10179;while(true){
var vec__10174_10182 = G__10172_10180__$1;var line_10183__$1 = cljs.core.nth.call(null,vec__10174_10182,0,null);var more_10184__$1 = cljs.core.nthnext.call(null,vec__10174_10182,1);var state_10185__$2 = state_10181__$1;var state_10186__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",1014002149).cljs$core$IFn$_invoke$arity$1(state_10185__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",1014002149).cljs$core$IFn$_invoke$arity$1(state_10185__$2),cljs.core.first.call(null,more_10184__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_10185__$2,new cljs.core.Keyword(null,"buf","buf",1014002149),new cljs.core.Keyword(null,"lists","lists",1116886791)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),true)):state_10185__$2);if(cljs.core.truth_(cljs.core.first.call(null,more_10184__$1)))
{{
var G__10187 = more_10184__$1;
var G__10188 = cljs.core.assoc.call(null,transformer.call(null,html,line_10183__$1,cljs.core.first.call(null,more_10184__$1),state_10186__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),cljs.core.empty_QMARK_.call(null,line_10183__$1));
G__10172_10180__$1 = G__10187;
state_10181__$1 = G__10188;
continue;
}
} else
{transformer.call(null,html,line_10183__$1,"",cljs.core.assoc.call(null,state_10186__$3,new cljs.core.Keyword(null,"eof","eof",1014004846),true));
}
break;
}
return html.toString();
}finally {markdown.transformers.formatter = formatter10170;
markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_10169;
}};
var mdToHtml = function (text,var_args){
var params = null;if (arguments.length > 1) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mdToHtml__delegate.call(this,text,params);};
mdToHtml.cljs$lang$maxFixedArity = 1;
mdToHtml.cljs$lang$applyTo = (function (arglist__10189){
var text = cljs.core.first(arglist__10189);
var params = cljs.core.rest(arglist__10189);
return mdToHtml__delegate(text,params);
});
mdToHtml.cljs$core$IFn$_invoke$arity$variadic = mdToHtml__delegate;
return mdToHtml;
})()
;
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

//# sourceMappingURL=core.js.map