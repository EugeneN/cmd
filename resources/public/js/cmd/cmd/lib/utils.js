// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.lib.utils');
goog.require('cljs.core');
goog.require('cmd.globals');
goog.require('cljs.core.async');
goog.require('cmd.globals');
goog.require('cljs.core.async');
cmd.lib.utils.raw__GT_clj = (function raw__GT_clj(raw){var json = JSON.parse(raw);var clj = cljs.core.js__GT_clj.call(null,json);return clj;
});
cmd.lib.utils.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.lib.utils.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,cljs.core.select_keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace","ace",1014000629),new cljs.core.Keyword(null,"worker","worker",4526786288),new cljs.core.Keyword(null,"motd","motd",1017261828),new cljs.core.Keyword(null,"active-requests","active-requests",3616398877)], null));
});
cmd.lib.utils.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.lib.utils.parse_location_hash = (function parse_location_hash(){var hash = document.location.hash;if((cljs.core.count.call(null,hash) > 1))
{return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gist-id","gist-id",1053270999),new cljs.core.Keyword(null,"panels","panels",4313328225)], null),cljs.core.subs.call(null,hash,1).split(";"));
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
cmd.lib.utils.set_location_hash = (function set_location_hash(hash_hash){var gist_id = (function (){var or__3451__auto__ = hash_hash.call(null,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999));if(cljs.core.truth_(or__3451__auto__))
{return or__3451__auto__;
} else
{return "";
}
})();var panels = hash_hash.call(null,new cljs.core.Keyword(null,"panels","panels",4313328225));var chunks = (((panels == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gist_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gist_id,panels], null));return document.location.hash = clojure.string.join.call(null,";",chunks);
});
cmd.lib.utils.say = (function say(msg){var c__5608__auto___8733 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___8733){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___8733){
return (function (state_8724){var state_val_8725 = (state_8724[1]);if((state_val_8725 === 2))
{var inst_8722 = (state_8724[2]);var state_8724__$1 = state_8724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8724__$1,inst_8722);
} else
{if((state_val_8725 === 1))
{var inst_8719 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_8720 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8719,null));var state_8724__$1 = state_8724;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8724__$1,2,cmd.globals.AppBus,inst_8720);
} else
{return null;
}
}
});})(c__5608__auto___8733))
;return ((function (switch__5593__auto__,c__5608__auto___8733){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8729 = [null,null,null,null,null,null,null];(statearr_8729[0] = state_machine__5594__auto__);
(statearr_8729[1] = 1);
return statearr_8729;
});
var state_machine__5594__auto____1 = (function (state_8724){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8724);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8730){if((e8730 instanceof Object))
{var ex__5597__auto__ = e8730;var statearr_8731_8734 = state_8724;(statearr_8731_8734[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8724);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8735 = state_8724;
state_8724 = G__8735;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8724){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___8733))
})();var state__5610__auto__ = (function (){var statearr_8732 = f__5609__auto__.call(null);(statearr_8732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___8733);
return statearr_8732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___8733))
);
return console.log(msg);
});

//# sourceMappingURL=utils.js.map