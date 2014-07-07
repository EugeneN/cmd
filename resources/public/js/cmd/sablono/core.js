// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__14287__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__14286 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__14286,0,null);var body = cljs.core.nthnext.call(null,vec__14286,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__14287 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14287__delegate.call(this,args);};
G__14287.cljs$lang$maxFixedArity = 0;
G__14287.cljs$lang$applyTo = (function (arglist__14288){
var args = cljs.core.seq(arglist__14288);
return G__14287__delegate(args);
});
G__14287.cljs$core$IFn$_invoke$arity$variadic = G__14287__delegate;
return G__14287;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4580__auto__ = (function iter__14293(s__14294){return (new cljs.core.LazySeq(null,(function (){var s__14294__$1 = s__14294;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14294__$1);if(temp__4126__auto__)
{var s__14294__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14294__$2))
{var c__4578__auto__ = cljs.core.chunk_first.call(null,s__14294__$2);var size__4579__auto__ = cljs.core.count.call(null,c__4578__auto__);var b__14296 = cljs.core.chunk_buffer.call(null,size__4579__auto__);if((function (){var i__14295 = 0;while(true){
if((i__14295 < size__4579__auto__))
{var args = cljs.core._nth.call(null,c__4578__auto__,i__14295);cljs.core.chunk_append.call(null,b__14296,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__14297 = (i__14295 + 1);
i__14295 = G__14297;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14296),iter__14293.call(null,cljs.core.chunk_rest.call(null,s__14294__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14296),null);
}
} else
{var args = cljs.core.first.call(null,s__14294__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__14293.call(null,cljs.core.rest.call(null,s__14294__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4580__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4580__auto__ = (function iter__14302(s__14303){return (new cljs.core.LazySeq(null,(function (){var s__14303__$1 = s__14303;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14303__$1);if(temp__4126__auto__)
{var s__14303__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14303__$2))
{var c__4578__auto__ = cljs.core.chunk_first.call(null,s__14303__$2);var size__4579__auto__ = cljs.core.count.call(null,c__4578__auto__);var b__14305 = cljs.core.chunk_buffer.call(null,size__4579__auto__);if((function (){var i__14304 = 0;while(true){
if((i__14304 < size__4579__auto__))
{var style = cljs.core._nth.call(null,c__4578__auto__,i__14304);cljs.core.chunk_append.call(null,b__14305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__14306 = (i__14304 + 1);
i__14304 = G__14306;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14305),iter__14302.call(null,cljs.core.chunk_rest.call(null,s__14303__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14305),null);
}
} else
{var style = cljs.core.first.call(null,s__14303__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__14302.call(null,cljs.core.rest.call(null,s__14303__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4580__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__14307){
var styles = cljs.core.seq(arglist__14307);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to14308 = (function() { 
var link_to14308__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to14308 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to14308__delegate.call(this,url,content);};
link_to14308.cljs$lang$maxFixedArity = 1;
link_to14308.cljs$lang$applyTo = (function (arglist__14309){
var url = cljs.core.first(arglist__14309);
var content = cljs.core.rest(arglist__14309);
return link_to14308__delegate(url,content);
});
link_to14308.cljs$core$IFn$_invoke$arity$variadic = link_to14308__delegate;
return link_to14308;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14308);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to14310 = (function() { 
var mail_to14310__delegate = function (e_mail,p__14311){var vec__14313 = p__14311;var content = cljs.core.nth.call(null,vec__14313,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3863__auto__ = content;if(cljs.core.truth_(or__3863__auto__))
{return or__3863__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to14310 = function (e_mail,var_args){
var p__14311 = null;if (arguments.length > 1) {
  p__14311 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to14310__delegate.call(this,e_mail,p__14311);};
mail_to14310.cljs$lang$maxFixedArity = 1;
mail_to14310.cljs$lang$applyTo = (function (arglist__14314){
var e_mail = cljs.core.first(arglist__14314);
var p__14311 = cljs.core.rest(arglist__14314);
return mail_to14310__delegate(e_mail,p__14311);
});
mail_to14310.cljs$core$IFn$_invoke$arity$variadic = mail_to14310__delegate;
return mail_to14310;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14310);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list14315 = (function unordered_list14315(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4580__auto__ = (function iter__14320(s__14321){return (new cljs.core.LazySeq(null,(function (){var s__14321__$1 = s__14321;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14321__$1);if(temp__4126__auto__)
{var s__14321__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14321__$2))
{var c__4578__auto__ = cljs.core.chunk_first.call(null,s__14321__$2);var size__4579__auto__ = cljs.core.count.call(null,c__4578__auto__);var b__14323 = cljs.core.chunk_buffer.call(null,size__4579__auto__);if((function (){var i__14322 = 0;while(true){
if((i__14322 < size__4579__auto__))
{var x = cljs.core._nth.call(null,c__4578__auto__,i__14322);cljs.core.chunk_append.call(null,b__14323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__14324 = (i__14322 + 1);
i__14322 = G__14324;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14323),iter__14320.call(null,cljs.core.chunk_rest.call(null,s__14321__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14323),null);
}
} else
{var x = cljs.core.first.call(null,s__14321__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__14320.call(null,cljs.core.rest.call(null,s__14321__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4580__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14315);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list14325 = (function ordered_list14325(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4580__auto__ = (function iter__14330(s__14331){return (new cljs.core.LazySeq(null,(function (){var s__14331__$1 = s__14331;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14331__$1);if(temp__4126__auto__)
{var s__14331__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14331__$2))
{var c__4578__auto__ = cljs.core.chunk_first.call(null,s__14331__$2);var size__4579__auto__ = cljs.core.count.call(null,c__4578__auto__);var b__14333 = cljs.core.chunk_buffer.call(null,size__4579__auto__);if((function (){var i__14332 = 0;while(true){
if((i__14332 < size__4579__auto__))
{var x = cljs.core._nth.call(null,c__4578__auto__,i__14332);cljs.core.chunk_append.call(null,b__14333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__14334 = (i__14332 + 1);
i__14332 = G__14334;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14333),iter__14330.call(null,cljs.core.chunk_rest.call(null,s__14331__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14333),null);
}
} else
{var x = cljs.core.first.call(null,s__14331__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__14330.call(null,cljs.core.rest.call(null,s__14331__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4580__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14325);
/**
* Create an image element.
*/
sablono.core.image14335 = (function() {
var image14335 = null;
var image14335__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image14335__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image14335 = function(src,alt){
switch(arguments.length){
case 1:
return image14335__1.call(this,src);
case 2:
return image14335__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image14335.cljs$core$IFn$_invoke$arity$1 = image14335__1;
image14335.cljs$core$IFn$_invoke$arity$2 = image14335__2;
return image14335;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14335);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__14336_SHARP_,p2__14337_SHARP_){return [cljs.core.str(p1__14336_SHARP_),cljs.core.str("["),cljs.core.str(p2__14337_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__14338_SHARP_,p2__14339_SHARP_){return [cljs.core.str(p1__14338_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14339_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field14340 = (function() {
var color_field14340 = null;
var color_field14340__1 = (function (name__5323__auto__){return color_field14340.call(null,name__5323__auto__,null);
});
var color_field14340__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__5323__auto__,value__5324__auto__);
});
color_field14340 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return color_field14340__1.call(this,name__5323__auto__);
case 2:
return color_field14340__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field14340.cljs$core$IFn$_invoke$arity$1 = color_field14340__1;
color_field14340.cljs$core$IFn$_invoke$arity$2 = color_field14340__2;
return color_field14340;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14340);
/**
* Creates a date input field.
*/
sablono.core.date_field14341 = (function() {
var date_field14341 = null;
var date_field14341__1 = (function (name__5323__auto__){return date_field14341.call(null,name__5323__auto__,null);
});
var date_field14341__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__5323__auto__,value__5324__auto__);
});
date_field14341 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return date_field14341__1.call(this,name__5323__auto__);
case 2:
return date_field14341__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field14341.cljs$core$IFn$_invoke$arity$1 = date_field14341__1;
date_field14341.cljs$core$IFn$_invoke$arity$2 = date_field14341__2;
return date_field14341;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14341);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field14342 = (function() {
var datetime_field14342 = null;
var datetime_field14342__1 = (function (name__5323__auto__){return datetime_field14342.call(null,name__5323__auto__,null);
});
var datetime_field14342__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__5323__auto__,value__5324__auto__);
});
datetime_field14342 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return datetime_field14342__1.call(this,name__5323__auto__);
case 2:
return datetime_field14342__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field14342.cljs$core$IFn$_invoke$arity$1 = datetime_field14342__1;
datetime_field14342.cljs$core$IFn$_invoke$arity$2 = datetime_field14342__2;
return datetime_field14342;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14342);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field14343 = (function() {
var datetime_local_field14343 = null;
var datetime_local_field14343__1 = (function (name__5323__auto__){return datetime_local_field14343.call(null,name__5323__auto__,null);
});
var datetime_local_field14343__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__5323__auto__,value__5324__auto__);
});
datetime_local_field14343 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return datetime_local_field14343__1.call(this,name__5323__auto__);
case 2:
return datetime_local_field14343__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field14343.cljs$core$IFn$_invoke$arity$1 = datetime_local_field14343__1;
datetime_local_field14343.cljs$core$IFn$_invoke$arity$2 = datetime_local_field14343__2;
return datetime_local_field14343;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14343);
/**
* Creates a email input field.
*/
sablono.core.email_field14344 = (function() {
var email_field14344 = null;
var email_field14344__1 = (function (name__5323__auto__){return email_field14344.call(null,name__5323__auto__,null);
});
var email_field14344__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__5323__auto__,value__5324__auto__);
});
email_field14344 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return email_field14344__1.call(this,name__5323__auto__);
case 2:
return email_field14344__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field14344.cljs$core$IFn$_invoke$arity$1 = email_field14344__1;
email_field14344.cljs$core$IFn$_invoke$arity$2 = email_field14344__2;
return email_field14344;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14344);
/**
* Creates a file input field.
*/
sablono.core.file_field14345 = (function() {
var file_field14345 = null;
var file_field14345__1 = (function (name__5323__auto__){return file_field14345.call(null,name__5323__auto__,null);
});
var file_field14345__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__5323__auto__,value__5324__auto__);
});
file_field14345 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return file_field14345__1.call(this,name__5323__auto__);
case 2:
return file_field14345__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field14345.cljs$core$IFn$_invoke$arity$1 = file_field14345__1;
file_field14345.cljs$core$IFn$_invoke$arity$2 = file_field14345__2;
return file_field14345;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14345);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field14346 = (function() {
var hidden_field14346 = null;
var hidden_field14346__1 = (function (name__5323__auto__){return hidden_field14346.call(null,name__5323__auto__,null);
});
var hidden_field14346__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__5323__auto__,value__5324__auto__);
});
hidden_field14346 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return hidden_field14346__1.call(this,name__5323__auto__);
case 2:
return hidden_field14346__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field14346.cljs$core$IFn$_invoke$arity$1 = hidden_field14346__1;
hidden_field14346.cljs$core$IFn$_invoke$arity$2 = hidden_field14346__2;
return hidden_field14346;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14346);
/**
* Creates a month input field.
*/
sablono.core.month_field14347 = (function() {
var month_field14347 = null;
var month_field14347__1 = (function (name__5323__auto__){return month_field14347.call(null,name__5323__auto__,null);
});
var month_field14347__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__5323__auto__,value__5324__auto__);
});
month_field14347 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return month_field14347__1.call(this,name__5323__auto__);
case 2:
return month_field14347__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field14347.cljs$core$IFn$_invoke$arity$1 = month_field14347__1;
month_field14347.cljs$core$IFn$_invoke$arity$2 = month_field14347__2;
return month_field14347;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14347);
/**
* Creates a number input field.
*/
sablono.core.number_field14348 = (function() {
var number_field14348 = null;
var number_field14348__1 = (function (name__5323__auto__){return number_field14348.call(null,name__5323__auto__,null);
});
var number_field14348__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__5323__auto__,value__5324__auto__);
});
number_field14348 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return number_field14348__1.call(this,name__5323__auto__);
case 2:
return number_field14348__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field14348.cljs$core$IFn$_invoke$arity$1 = number_field14348__1;
number_field14348.cljs$core$IFn$_invoke$arity$2 = number_field14348__2;
return number_field14348;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14348);
/**
* Creates a password input field.
*/
sablono.core.password_field14349 = (function() {
var password_field14349 = null;
var password_field14349__1 = (function (name__5323__auto__){return password_field14349.call(null,name__5323__auto__,null);
});
var password_field14349__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__5323__auto__,value__5324__auto__);
});
password_field14349 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return password_field14349__1.call(this,name__5323__auto__);
case 2:
return password_field14349__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field14349.cljs$core$IFn$_invoke$arity$1 = password_field14349__1;
password_field14349.cljs$core$IFn$_invoke$arity$2 = password_field14349__2;
return password_field14349;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14349);
/**
* Creates a range input field.
*/
sablono.core.range_field14350 = (function() {
var range_field14350 = null;
var range_field14350__1 = (function (name__5323__auto__){return range_field14350.call(null,name__5323__auto__,null);
});
var range_field14350__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__5323__auto__,value__5324__auto__);
});
range_field14350 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return range_field14350__1.call(this,name__5323__auto__);
case 2:
return range_field14350__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field14350.cljs$core$IFn$_invoke$arity$1 = range_field14350__1;
range_field14350.cljs$core$IFn$_invoke$arity$2 = range_field14350__2;
return range_field14350;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14350);
/**
* Creates a search input field.
*/
sablono.core.search_field14351 = (function() {
var search_field14351 = null;
var search_field14351__1 = (function (name__5323__auto__){return search_field14351.call(null,name__5323__auto__,null);
});
var search_field14351__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__5323__auto__,value__5324__auto__);
});
search_field14351 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return search_field14351__1.call(this,name__5323__auto__);
case 2:
return search_field14351__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field14351.cljs$core$IFn$_invoke$arity$1 = search_field14351__1;
search_field14351.cljs$core$IFn$_invoke$arity$2 = search_field14351__2;
return search_field14351;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14351);
/**
* Creates a tel input field.
*/
sablono.core.tel_field14352 = (function() {
var tel_field14352 = null;
var tel_field14352__1 = (function (name__5323__auto__){return tel_field14352.call(null,name__5323__auto__,null);
});
var tel_field14352__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__5323__auto__,value__5324__auto__);
});
tel_field14352 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return tel_field14352__1.call(this,name__5323__auto__);
case 2:
return tel_field14352__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field14352.cljs$core$IFn$_invoke$arity$1 = tel_field14352__1;
tel_field14352.cljs$core$IFn$_invoke$arity$2 = tel_field14352__2;
return tel_field14352;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14352);
/**
* Creates a text input field.
*/
sablono.core.text_field14353 = (function() {
var text_field14353 = null;
var text_field14353__1 = (function (name__5323__auto__){return text_field14353.call(null,name__5323__auto__,null);
});
var text_field14353__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__5323__auto__,value__5324__auto__);
});
text_field14353 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return text_field14353__1.call(this,name__5323__auto__);
case 2:
return text_field14353__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field14353.cljs$core$IFn$_invoke$arity$1 = text_field14353__1;
text_field14353.cljs$core$IFn$_invoke$arity$2 = text_field14353__2;
return text_field14353;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14353);
/**
* Creates a time input field.
*/
sablono.core.time_field14354 = (function() {
var time_field14354 = null;
var time_field14354__1 = (function (name__5323__auto__){return time_field14354.call(null,name__5323__auto__,null);
});
var time_field14354__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__5323__auto__,value__5324__auto__);
});
time_field14354 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return time_field14354__1.call(this,name__5323__auto__);
case 2:
return time_field14354__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field14354.cljs$core$IFn$_invoke$arity$1 = time_field14354__1;
time_field14354.cljs$core$IFn$_invoke$arity$2 = time_field14354__2;
return time_field14354;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14354);
/**
* Creates a url input field.
*/
sablono.core.url_field14355 = (function() {
var url_field14355 = null;
var url_field14355__1 = (function (name__5323__auto__){return url_field14355.call(null,name__5323__auto__,null);
});
var url_field14355__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__5323__auto__,value__5324__auto__);
});
url_field14355 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return url_field14355__1.call(this,name__5323__auto__);
case 2:
return url_field14355__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field14355.cljs$core$IFn$_invoke$arity$1 = url_field14355__1;
url_field14355.cljs$core$IFn$_invoke$arity$2 = url_field14355__2;
return url_field14355;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14355);
/**
* Creates a week input field.
*/
sablono.core.week_field14356 = (function() {
var week_field14356 = null;
var week_field14356__1 = (function (name__5323__auto__){return week_field14356.call(null,name__5323__auto__,null);
});
var week_field14356__2 = (function (name__5323__auto__,value__5324__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__5323__auto__,value__5324__auto__);
});
week_field14356 = function(name__5323__auto__,value__5324__auto__){
switch(arguments.length){
case 1:
return week_field14356__1.call(this,name__5323__auto__);
case 2:
return week_field14356__2.call(this,name__5323__auto__,value__5324__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field14356.cljs$core$IFn$_invoke$arity$1 = week_field14356__1;
week_field14356.cljs$core$IFn$_invoke$arity$2 = week_field14356__2;
return week_field14356;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14356);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box14357 = (function() {
var check_box14357 = null;
var check_box14357__1 = (function (name){return check_box14357.call(null,name,null);
});
var check_box14357__2 = (function (name,checked_QMARK_){return check_box14357.call(null,name,checked_QMARK_,"true");
});
var check_box14357__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box14357 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box14357__1.call(this,name);
case 2:
return check_box14357__2.call(this,name,checked_QMARK_);
case 3:
return check_box14357__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box14357.cljs$core$IFn$_invoke$arity$1 = check_box14357__1;
check_box14357.cljs$core$IFn$_invoke$arity$2 = check_box14357__2;
check_box14357.cljs$core$IFn$_invoke$arity$3 = check_box14357__3;
return check_box14357;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14357);
/**
* Creates a radio button.
*/
sablono.core.radio_button14358 = (function() {
var radio_button14358 = null;
var radio_button14358__1 = (function (group){return radio_button14358.call(null,group,null);
});
var radio_button14358__2 = (function (group,checked_QMARK_){return radio_button14358.call(null,group,checked_QMARK_,"true");
});
var radio_button14358__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button14358 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button14358__1.call(this,group);
case 2:
return radio_button14358__2.call(this,group,checked_QMARK_);
case 3:
return radio_button14358__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button14358.cljs$core$IFn$_invoke$arity$1 = radio_button14358__1;
radio_button14358.cljs$core$IFn$_invoke$arity$2 = radio_button14358__2;
radio_button14358.cljs$core$IFn$_invoke$arity$3 = radio_button14358__3;
return radio_button14358;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14358);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options14359 = (function() {
var select_options14359 = null;
var select_options14359__1 = (function (coll){return select_options14359.call(null,coll,null);
});
var select_options14359__2 = (function (coll,selected){var iter__4580__auto__ = (function iter__14368(s__14369){return (new cljs.core.LazySeq(null,(function (){var s__14369__$1 = s__14369;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14369__$1);if(temp__4126__auto__)
{var s__14369__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14369__$2))
{var c__4578__auto__ = cljs.core.chunk_first.call(null,s__14369__$2);var size__4579__auto__ = cljs.core.count.call(null,c__4578__auto__);var b__14371 = cljs.core.chunk_buffer.call(null,size__4579__auto__);if((function (){var i__14370 = 0;while(true){
if((i__14370 < size__4579__auto__))
{var x = cljs.core._nth.call(null,c__4578__auto__,i__14370);cljs.core.chunk_append.call(null,b__14371,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14374 = x;var text = cljs.core.nth.call(null,vec__14374,0,null);var val = cljs.core.nth.call(null,vec__14374,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options14359.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__14376 = (i__14370 + 1);
i__14370 = G__14376;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14371),iter__14368.call(null,cljs.core.chunk_rest.call(null,s__14369__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14371),null);
}
} else
{var x = cljs.core.first.call(null,s__14369__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14375 = x;var text = cljs.core.nth.call(null,vec__14375,0,null);var val = cljs.core.nth.call(null,vec__14375,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options14359.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__14368.call(null,cljs.core.rest.call(null,s__14369__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4580__auto__.call(null,coll);
});
select_options14359 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options14359__1.call(this,coll);
case 2:
return select_options14359__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options14359.cljs$core$IFn$_invoke$arity$1 = select_options14359__1;
select_options14359.cljs$core$IFn$_invoke$arity$2 = select_options14359__2;
return select_options14359;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14359);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down14377 = (function() {
var drop_down14377 = null;
var drop_down14377__2 = (function (name,options){return drop_down14377.call(null,name,options,null);
});
var drop_down14377__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down14377 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down14377__2.call(this,name,options);
case 3:
return drop_down14377__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down14377.cljs$core$IFn$_invoke$arity$2 = drop_down14377__2;
drop_down14377.cljs$core$IFn$_invoke$arity$3 = drop_down14377__3;
return drop_down14377;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14377);
/**
* Creates a text area element.
*/
sablono.core.text_area14378 = (function() {
var text_area14378 = null;
var text_area14378__1 = (function (name){return text_area14378.call(null,name,null);
});
var text_area14378__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area14378 = function(name,value){
switch(arguments.length){
case 1:
return text_area14378__1.call(this,name);
case 2:
return text_area14378__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area14378.cljs$core$IFn$_invoke$arity$1 = text_area14378__1;
text_area14378.cljs$core$IFn$_invoke$arity$2 = text_area14378__2;
return text_area14378;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14378);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label14379 = (function label14379(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14379);
/**
* Creates a submit button.
*/
sablono.core.submit_button14380 = (function submit_button14380(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14380);
/**
* Creates a form reset button.
*/
sablono.core.reset_button14381 = (function reset_button14381(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14381);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to14382 = (function() { 
var form_to14382__delegate = function (p__14383,body){var vec__14385 = p__14383;var method = cljs.core.nth.call(null,vec__14385,0,null);var action = cljs.core.nth.call(null,vec__14385,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to14382 = function (p__14383,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to14382__delegate.call(this,p__14383,body);};
form_to14382.cljs$lang$maxFixedArity = 1;
form_to14382.cljs$lang$applyTo = (function (arglist__14386){
var p__14383 = cljs.core.first(arglist__14386);
var body = cljs.core.rest(arglist__14386);
return form_to14382__delegate(p__14383,body);
});
form_to14382.cljs$core$IFn$_invoke$arity$variadic = form_to14382__delegate;
return form_to14382;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14382);

//# sourceMappingURL=core.js.map