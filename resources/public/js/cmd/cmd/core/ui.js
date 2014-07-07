// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.core.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cmd.core');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('clojure.browser.repl');
goog.require('goog.events.KeyHandler');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('cmd.core');
goog.require('goog.events.KeyCodes');
goog.require('clojure.browser.repl');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
clojure.browser.repl.connect.call(null,"http://localhost:8000/repl");
cmd.core.ui.system = 0;
om.core.root.call(null,(function (cursor,_){if(typeof cmd.core.ui.t10471 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.core.ui.t10471 = (function (_,cursor,meta10472){
this._ = _;
this.cursor = cursor;
this.meta10472 = meta10472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.core.ui.t10471.cljs$lang$type = true;
cmd.core.ui.t10471.cljs$lang$ctorStr = "cmd.core.ui/t10471";
cmd.core.ui.t10471.cljs$lang$ctorPrWriter = (function (this__4430__auto__,writer__4431__auto__,opt__4432__auto__){return cljs.core._write.call(null,writer__4431__auto__,"cmd.core.ui/t10471");
});
cmd.core.ui.t10471.prototype.om$core$IRender$ = true;
cmd.core.ui.t10471.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div(null,(function (){var attrs10474 = cmd.core.hello.call(null,123);if(cljs.core.map_QMARK_.call(null,attrs10474))
{return React.DOM.span(sablono.interpreter.attributes.call(null,attrs10474),null);
} else
{return React.DOM.span(null,sablono.interpreter.interpret.call(null,attrs10474));
}
})());
});
cmd.core.ui.t10471.prototype.om$core$IDisplayName$ = true;
cmd.core.ui.t10471.prototype.om$core$IDisplayName$display_name$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return "info";
});
cmd.core.ui.t10471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10473){var self__ = this;
var _10473__$1 = this;return self__.meta10472;
});
cmd.core.ui.t10471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10473,meta10472__$1){var self__ = this;
var _10473__$1 = this;return (new cmd.core.ui.t10471(self__._,self__.cursor,meta10472__$1));
});
cmd.core.ui.__GT_t10471 = (function __GT_t10471(___$1,cursor__$1,meta10472){return (new cmd.core.ui.t10471(___$1,cursor__$1,meta10472));
});
}
return (new cmd.core.ui.t10471(_,cursor,null));
}),new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(cmd.core.ui.system),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("div")], null));

//# sourceMappingURL=ui.js.map