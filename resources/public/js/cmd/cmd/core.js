// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.core');
goog.require('cljs.core');
goog.require('cmd.utils');
goog.require('cmd.defs');
goog.require('cljs.core.async');
goog.require('cmd.lib');
goog.require('cljs.core.async');
goog.require('cmd.defs');
goog.require('cmd.lib');
goog.require('cmd.utils');
goog.require('clojure.set');
cmd.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),0,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c47fbe2ad4d50f6ffe16",null], null), null),new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.PersistentVector.EMPTY], null));
cmd.core.AppBus = cljs.core.async.chan.call(null,1);
cmd.core.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.core.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,cljs.core.select_keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace","ace",1014000629),new cljs.core.Keyword(null,"worker","worker",4526786288),new cljs.core.Keyword(null,"motd","motd",1017261828),new cljs.core.Keyword(null,"active-requests","active-requests",3616398877)], null));
});
cmd.core.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.core.say = (function say(msg){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.conj.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238)),msg));
var c__6728__auto___10415 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___10415){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___10415){
return (function (state_10406){var state_val_10407 = (state_10406[1]);if((state_val_10407 === 2))
{var inst_10404 = (state_10406[2]);var state_10406__$1 = state_10406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10406__$1,inst_10404);
} else
{if((state_val_10407 === 1))
{var inst_10401 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_10402 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10401,null));var state_10406__$1 = state_10406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10406__$1,2,cmd.core.AppBus,inst_10402);
} else
{return null;
}
}
});})(c__6728__auto___10415))
;return ((function (switch__6713__auto__,c__6728__auto___10415){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10411 = [null,null,null,null,null,null,null];(statearr_10411[0] = state_machine__6714__auto__);
(statearr_10411[1] = 1);
return statearr_10411;
});
var state_machine__6714__auto____1 = (function (state_10406){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10406);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10412){if((e10412 instanceof Object))
{var ex__6717__auto__ = e10412;var statearr_10413_10416 = state_10406;(statearr_10413_10416[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10412;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10417 = state_10406;
state_10406 = G__10417;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10406){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___10415))
})();var state__6730__auto__ = (function (){var statearr_10414 = f__6729__auto__.call(null);(statearr_10414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___10415);
return statearr_10414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___10415))
);
return console.log(msg);
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__,data,worker,ch){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__,data,worker,ch){
return (function (state_10440){var state_val_10441 = (state_10440[1]);if((state_val_10441 === 2))
{var inst_10437 = (state_10440[2]);var inst_10438 = cljs.core.async.close_BANG_.call(null,ch);var state_10440__$1 = (function (){var statearr_10442 = state_10440;(statearr_10442[7] = inst_10437);
return statearr_10442;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10440__$1,inst_10438);
} else
{if((state_val_10441 === 1))
{var inst_10434 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_10435 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10434,null));var state_10440__$1 = state_10440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10440__$1,2,ch,inst_10435);
} else
{return null;
}
}
});})(c__6728__auto__,data,worker,ch))
;return ((function (switch__6713__auto__,c__6728__auto__,data,worker,ch){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10446 = [null,null,null,null,null,null,null,null];(statearr_10446[0] = state_machine__6714__auto__);
(statearr_10446[1] = 1);
return statearr_10446;
});
var state_machine__6714__auto____1 = (function (state_10440){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10440);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10447){if((e10447 instanceof Object))
{var ex__6717__auto__ = e10447;var statearr_10448_10450 = state_10440;(statearr_10448_10450[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10440);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10451 = state_10440;
state_10440 = G__10451;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10440){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__,data,worker,ch))
})();var state__6730__auto__ = (function (){var statearr_10449 = f__6729__auto__.call(null);(statearr_10449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__,data,worker,ch))
);
return c__6728__auto__;
});})(worker,ch))
,false);
worker.postMessage(text);
return ch;
});
cmd.core.html__GT_react = (function html__GT_react(html){return html;
});
cmd.core.process = (function process__$1(md,cb){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10493){var state_val_10494 = (state_10493[1]);if((state_val_10494 === 5))
{var inst_10488 = cb.call(null,"<Error>");var state_10493__$1 = state_10493;var statearr_10495_10508 = state_10493__$1;(statearr_10495_10508[2] = inst_10488);
(statearr_10495_10508[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10494 === 4))
{var inst_10485 = (state_10493[7]);var inst_10486 = cb.call(null,inst_10485);var state_10493__$1 = state_10493;var statearr_10496_10509 = state_10493__$1;(statearr_10496_10509[2] = inst_10486);
(statearr_10496_10509[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10494 === 3))
{var inst_10491 = (state_10493[2]);var state_10493__$1 = state_10493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10493__$1,inst_10491);
} else
{if((state_val_10494 === 2))
{var inst_10483 = (state_10493[2]);var inst_10484 = cljs.core.nth.call(null,inst_10483,0,null);var inst_10485 = cljs.core.nth.call(null,inst_10483,1,null);var state_10493__$1 = (function (){var statearr_10497 = state_10493;(statearr_10497[7] = inst_10485);
return statearr_10497;
})();var G__10498_10510 = inst_10484;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10498_10510))
{var statearr_10499_10511 = state_10493__$1;(statearr_10499_10511[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10498_10510))
{var statearr_10500_10512 = state_10493__$1;(statearr_10500_10512[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10484)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10494 === 1))
{var inst_10481 = cmd.core.wmd__GT_html.call(null,md);var state_10493__$1 = state_10493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10493__$1,2,inst_10481);
} else
{return null;
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10504 = [null,null,null,null,null,null,null,null];(statearr_10504[0] = state_machine__6714__auto__);
(statearr_10504[1] = 1);
return statearr_10504;
});
var state_machine__6714__auto____1 = (function (state_10493){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10493);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10505){if((e10505 instanceof Object))
{var ex__6717__auto__ = e10505;var statearr_10506_10513 = state_10493;(statearr_10506_10513[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10493);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10514 = state_10493;
state_10493 = G__10514;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10493){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10507 = f__6729__auto__.call(null);(statearr_10507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj10518 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj10518;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj10522 = {"Content-Type":"application/json"};return obj10522;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__10523_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__10523_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.core.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10586){var state_val_10587 = (state_10586[1]);if((state_val_10587 === 6))
{var inst_10573 = (state_10586[7]);var inst_10581 = cmd.core.handle_io_error.call(null,inst_10573);var state_10586__$1 = state_10586;var statearr_10588_10602 = state_10586__$1;(statearr_10588_10602[2] = inst_10581);
(statearr_10588_10602[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10587 === 5))
{var inst_10574 = (state_10586[8]);var inst_10578 = (state_10586[2]);var inst_10579 = inst_10574.call(null,inst_10578);var state_10586__$1 = state_10586;var statearr_10589_10603 = state_10586__$1;(statearr_10589_10603[2] = inst_10579);
(statearr_10589_10603[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10587 === 4))
{var inst_10573 = (state_10586[7]);var inst_10574 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_10573);var inst_10575 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_10576 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10575,null));var state_10586__$1 = (function (){var statearr_10590 = state_10586;(statearr_10590[8] = inst_10574);
return statearr_10590;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10586__$1,5,cmd.core.AppBus,inst_10576);
} else
{if((state_val_10587 === 3))
{var inst_10584 = (state_10586[2]);var state_10586__$1 = state_10586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10586__$1,inst_10584);
} else
{if((state_val_10587 === 2))
{var inst_10570 = (state_10586[2]);var inst_10571 = cljs.core.nth.call(null,inst_10570,0,null);var inst_10572 = cljs.core.nth.call(null,inst_10570,1,null);var inst_10573 = cmd.utils.raw__GT_clj.call(null,inst_10572);var state_10586__$1 = (function (){var statearr_10591 = state_10586;(statearr_10591[7] = inst_10573);
return statearr_10591;
})();var G__10592_10604 = inst_10571;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10592_10604))
{var statearr_10593_10605 = state_10586__$1;(statearr_10593_10605[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10592_10604))
{var statearr_10594_10606 = state_10586__$1;(statearr_10594_10606[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10571)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10587 === 1))
{var inst_10564 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10565 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10566 = [cljs.core.str("/users/"),cljs.core.str(inst_10564),cljs.core.str("/gists")].join('');var inst_10567 = cmd.core.auth_param_fallback.call(null,inst_10564,inst_10565);var inst_10568 = cmd.lib.GET.call(null,inst_10566,inst_10567);var state_10586__$1 = state_10586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10586__$1,2,inst_10568);
} else
{return null;
}
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10598 = [null,null,null,null,null,null,null,null,null];(statearr_10598[0] = state_machine__6714__auto__);
(statearr_10598[1] = 1);
return statearr_10598;
});
var state_machine__6714__auto____1 = (function (state_10586){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10586);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10599){if((e10599 instanceof Object))
{var ex__6717__auto__ = e10599;var statearr_10600_10607 = state_10586;(statearr_10600_10607[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10608 = state_10586;
state_10586 = G__10608;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10586){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10601 = f__6729__auto__.call(null);(statearr_10601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.get_motd = (function get_motd(gist_id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10683){var state_val_10684 = (state_10683[1]);if((state_val_10684 === 6))
{var inst_10676 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_10677 = cmd.core.say.call(null,"Sorry, can't load motd");var inst_10678 = inst_10676.call(null,inst_10677);var state_10683__$1 = state_10683;var statearr_10685_10699 = state_10683__$1;(statearr_10685_10699[2] = inst_10678);
(statearr_10685_10699[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10684 === 5))
{var inst_10669 = (state_10683[7]);var inst_10673 = (state_10683[2]);var inst_10674 = inst_10669.call(null,inst_10673);var state_10683__$1 = state_10683;var statearr_10686_10700 = state_10683__$1;(statearr_10686_10700[2] = inst_10674);
(statearr_10686_10700[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10684 === 4))
{var inst_10661 = (state_10683[8]);var inst_10663 = cmd.utils.raw__GT_clj.call(null,inst_10661);var inst_10664 = inst_10663.call(null,"files");var inst_10665 = cljs.core.first.call(null,inst_10664);var inst_10666 = cljs.core.nth.call(null,inst_10665,0,null);var inst_10667 = cljs.core.nth.call(null,inst_10665,1,null);var inst_10668 = inst_10667.call(null,"content");var inst_10669 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_10668);var inst_10670 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_10668];var inst_10671 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10670,null));var state_10683__$1 = (function (){var statearr_10687 = state_10683;(statearr_10687[9] = inst_10666);
(statearr_10687[7] = inst_10669);
return statearr_10687;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10683__$1,5,cmd.core.AppBus,inst_10671);
} else
{if((state_val_10684 === 3))
{var inst_10681 = (state_10683[2]);var state_10683__$1 = state_10683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10683__$1,inst_10681);
} else
{if((state_val_10684 === 2))
{var inst_10659 = (state_10683[2]);var inst_10660 = cljs.core.nth.call(null,inst_10659,0,null);var inst_10661 = cljs.core.nth.call(null,inst_10659,1,null);var state_10683__$1 = (function (){var statearr_10688 = state_10683;(statearr_10688[8] = inst_10661);
return statearr_10688;
})();var G__10689_10701 = inst_10660;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10689_10701))
{var statearr_10690_10702 = state_10683__$1;(statearr_10690_10702[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10689_10701))
{var statearr_10691_10703 = state_10683__$1;(statearr_10691_10703[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10660)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10684 === 1))
{var inst_10655 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10656 = cmd.core.auth_param_anon.call(null);var inst_10657 = cmd.lib.GET.call(null,inst_10655,inst_10656);var state_10683__$1 = state_10683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10683__$1,2,inst_10657);
} else
{return null;
}
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10695 = [null,null,null,null,null,null,null,null,null,null];(statearr_10695[0] = state_machine__6714__auto__);
(statearr_10695[1] = 1);
return statearr_10695;
});
var state_machine__6714__auto____1 = (function (state_10683){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10683);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10696){if((e10696 instanceof Object))
{var ex__6717__auto__ = e10696;var statearr_10697_10704 = state_10683;(statearr_10697_10704[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10696;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10705 = state_10683;
state_10683 = G__10705;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10683){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10698 = f__6729__auto__.call(null);(statearr_10698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10784){var state_val_10785 = (state_10784[1]);if((state_val_10785 === 6))
{var inst_10762 = (state_10784[7]);var inst_10778 = cmd.utils.raw__GT_clj.call(null,inst_10762);var inst_10779 = cmd.core.handle_io_error.call(null,inst_10778);var state_10784__$1 = state_10784;var statearr_10786_10800 = state_10784__$1;(statearr_10786_10800[2] = inst_10779);
(statearr_10786_10800[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10785 === 5))
{var inst_10776 = (state_10784[2]);var state_10784__$1 = state_10784;var statearr_10787_10801 = state_10784__$1;(statearr_10787_10801[2] = inst_10776);
(statearr_10787_10801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10785 === 4))
{var inst_10762 = (state_10784[7]);var inst_10764 = cmd.utils.raw__GT_clj.call(null,inst_10762);var inst_10765 = inst_10764.call(null,"files");var inst_10766 = cljs.core.first.call(null,inst_10765);var inst_10767 = cljs.core.nth.call(null,inst_10766,0,null);var inst_10768 = cljs.core.nth.call(null,inst_10766,1,null);var inst_10769 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_10767);var inst_10770 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10764);var inst_10771 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_10772 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_10773 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_10774 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10773,null));var state_10784__$1 = (function (){var statearr_10788 = state_10784;(statearr_10788[8] = inst_10768);
(statearr_10788[9] = inst_10771);
(statearr_10788[10] = inst_10772);
(statearr_10788[11] = inst_10770);
(statearr_10788[12] = inst_10769);
return statearr_10788;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10784__$1,5,cmd.core.AppBus,inst_10774);
} else
{if((state_val_10785 === 3))
{var inst_10782 = (state_10784[2]);var state_10784__$1 = state_10784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10784__$1,inst_10782);
} else
{if((state_val_10785 === 2))
{var inst_10760 = (state_10784[2]);var inst_10761 = cljs.core.nth.call(null,inst_10760,0,null);var inst_10762 = cljs.core.nth.call(null,inst_10760,1,null);var state_10784__$1 = (function (){var statearr_10789 = state_10784;(statearr_10789[7] = inst_10762);
return statearr_10789;
})();var G__10790_10802 = inst_10761;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10790_10802))
{var statearr_10791_10803 = state_10784__$1;(statearr_10791_10803[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10790_10802))
{var statearr_10792_10804 = state_10784__$1;(statearr_10792_10804[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10761)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10785 === 1))
{var inst_10754 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_10755 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10756 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10757 = cmd.core.auth_param_fallback.call(null,inst_10755,inst_10756);var inst_10758 = cmd.lib.GET.call(null,inst_10754,inst_10757);var state_10784__$1 = state_10784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10784__$1,2,inst_10758);
} else
{return null;
}
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10796 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10796[0] = state_machine__6714__auto__);
(statearr_10796[1] = 1);
return statearr_10796;
});
var state_machine__6714__auto____1 = (function (state_10784){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10784);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10797){if((e10797 instanceof Object))
{var ex__6717__auto__ = e10797;var statearr_10798_10805 = state_10784;(statearr_10798_10805[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10784);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10806 = state_10784;
state_10784 = G__10806;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10784){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10799 = f__6729__auto__.call(null);(statearr_10799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10865){var state_val_10866 = (state_10865[1]);if((state_val_10866 === 5))
{var inst_10854 = (state_10865[7]);var inst_10860 = cmd.core.handle_io_error.call(null,inst_10854);var state_10865__$1 = state_10865;var statearr_10867_10881 = state_10865__$1;(statearr_10867_10881[2] = inst_10860);
(statearr_10867_10881[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10866 === 4))
{var inst_10854 = (state_10865[7]);var inst_10855 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10854);var inst_10856 = cmd.core.load_gists.call(null);var inst_10857 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_10858 = cmd.core.say.call(null,inst_10857);var state_10865__$1 = (function (){var statearr_10868 = state_10865;(statearr_10868[8] = inst_10856);
(statearr_10868[9] = inst_10855);
return statearr_10868;
})();var statearr_10869_10882 = state_10865__$1;(statearr_10869_10882[2] = inst_10858);
(statearr_10869_10882[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10866 === 3))
{var inst_10863 = (state_10865[2]);var state_10865__$1 = state_10865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10865__$1,inst_10863);
} else
{if((state_val_10866 === 2))
{var inst_10851 = (state_10865[2]);var inst_10852 = cljs.core.nth.call(null,inst_10851,0,null);var inst_10853 = cljs.core.nth.call(null,inst_10851,1,null);var inst_10854 = cmd.utils.raw__GT_clj.call(null,inst_10853);var state_10865__$1 = (function (){var statearr_10870 = state_10865;(statearr_10870[7] = inst_10854);
return statearr_10870;
})();var G__10871_10883 = inst_10852;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10871_10883))
{var statearr_10872_10884 = state_10865__$1;(statearr_10872_10884[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10871_10883))
{var statearr_10873_10885 = state_10865__$1;(statearr_10873_10885[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10852)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10866 === 1))
{var inst_10845 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10846 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10847 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10848 = cmd.core.auth_param_strict.call(null,inst_10846,inst_10847);var inst_10849 = cmd.lib.PATCH.call(null,inst_10845,new_content,inst_10848);var state_10865__$1 = state_10865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10865__$1,2,inst_10849);
} else
{return null;
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10877 = [null,null,null,null,null,null,null,null,null,null];(statearr_10877[0] = state_machine__6714__auto__);
(statearr_10877[1] = 1);
return statearr_10877;
});
var state_machine__6714__auto____1 = (function (state_10865){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10865);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10878){if((e10878 instanceof Object))
{var ex__6717__auto__ = e10878;var statearr_10879_10886 = state_10865;(statearr_10879_10886[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10865);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10887 = state_10865;
state_10865 = G__10887;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10865){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10880 = f__6729__auto__.call(null);(statearr_10880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10948){var state_val_10949 = (state_10948[1]);if((state_val_10949 === 5))
{var inst_10935 = (state_10948[7]);var inst_10943 = cmd.core.handle_io_error.call(null,inst_10935);var state_10948__$1 = state_10948;var statearr_10950_10964 = state_10948__$1;(statearr_10950_10964[2] = inst_10943);
(statearr_10950_10964[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 4))
{var inst_10935 = (state_10948[7]);var inst_10936 = inst_10935.call(null,"id");var inst_10937 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_10938 = cmd.core.load_gists.call(null);var inst_10939 = cmd.core.load_gist.call(null,inst_10936);var inst_10940 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_10936)].join('');var inst_10941 = cmd.core.say.call(null,inst_10940);var state_10948__$1 = (function (){var statearr_10951 = state_10948;(statearr_10951[8] = inst_10937);
(statearr_10951[9] = inst_10939);
(statearr_10951[10] = inst_10938);
return statearr_10951;
})();var statearr_10952_10965 = state_10948__$1;(statearr_10952_10965[2] = inst_10941);
(statearr_10952_10965[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 3))
{var inst_10946 = (state_10948[2]);var state_10948__$1 = state_10948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10948__$1,inst_10946);
} else
{if((state_val_10949 === 2))
{var inst_10932 = (state_10948[2]);var inst_10933 = cljs.core.nth.call(null,inst_10932,0,null);var inst_10934 = cljs.core.nth.call(null,inst_10932,1,null);var inst_10935 = cmd.utils.raw__GT_clj.call(null,inst_10934);var state_10948__$1 = (function (){var statearr_10953 = state_10948;(statearr_10953[7] = inst_10935);
return statearr_10953;
})();var G__10954_10966 = inst_10933;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10954_10966))
{var statearr_10955_10967 = state_10948__$1;(statearr_10955_10967[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10954_10966))
{var statearr_10956_10968 = state_10948__$1;(statearr_10956_10968[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10933)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 1))
{var inst_10927 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10928 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10929 = cmd.core.auth_param_strict.call(null,inst_10927,inst_10928);var inst_10930 = cmd.lib.POST.call(null,"/gists",new_content,inst_10929);var state_10948__$1 = state_10948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10948__$1,2,inst_10930);
} else
{return null;
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10960 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10960[0] = state_machine__6714__auto__);
(statearr_10960[1] = 1);
return statearr_10960;
});
var state_machine__6714__auto____1 = (function (state_10948){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10948);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10961){if((e10961 instanceof Object))
{var ex__6717__auto__ = e10961;var statearr_10962_10969 = state_10948;(statearr_10962_10969[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10970 = state_10948;
state_10948 = G__10970;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10948){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10963 = f__6729__auto__.call(null);(statearr_10963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.logged_in = (function logged_in(username,auth_token){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792),username);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430),auth_token);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),true);
cmd.utils.setcookie.call(null,"username",username);
cmd.utils.setcookie.call(null,"auth-token",auth_token);
var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10990){var state_val_10991 = (state_10990[1]);if((state_val_10991 === 2))
{var inst_10988 = (state_10990[2]);var state_10990__$1 = state_10990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10990__$1,inst_10988);
} else
{if((state_val_10991 === 1))
{var inst_10985 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_10986 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10985,null));var state_10990__$1 = state_10990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10990__$1,2,cmd.core.AppBus,inst_10986);
} else
{return null;
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10995 = [null,null,null,null,null,null,null];(statearr_10995[0] = state_machine__6714__auto__);
(statearr_10995[1] = 1);
return statearr_10995;
});
var state_machine__6714__auto____1 = (function (state_10990){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10990);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10996){if((e10996 instanceof Object))
{var ex__6717__auto__ = e10996;var statearr_10997_10999 = state_10990;(statearr_10997_10999[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10990);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11000 = state_10990;
state_10990 = G__11000;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10990){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10998 = f__6729__auto__.call(null);(statearr_10998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__6728__auto___11029 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11029,error_msg){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11029,error_msg){
return (function (state_11020){var state_val_11021 = (state_11020[1]);if((state_val_11021 === 2))
{var inst_11018 = (state_11020[2]);var state_11020__$1 = state_11020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11020__$1,inst_11018);
} else
{if((state_val_11021 === 1))
{var inst_11015 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_11016 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11015,null));var state_11020__$1 = state_11020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11020__$1,2,cmd.core.AppBus,inst_11016);
} else
{return null;
}
}
});})(c__6728__auto___11029,error_msg))
;return ((function (switch__6713__auto__,c__6728__auto___11029,error_msg){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11025 = [null,null,null,null,null,null,null];(statearr_11025[0] = state_machine__6714__auto__);
(statearr_11025[1] = 1);
return statearr_11025;
});
var state_machine__6714__auto____1 = (function (state_11020){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11020);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11026){if((e11026 instanceof Object))
{var ex__6717__auto__ = e11026;var statearr_11027_11030 = state_11020;(statearr_11027_11030[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11031 = state_11020;
state_11020 = G__11031;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11020){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11029,error_msg))
})();var state__6730__auto__ = (function (){var statearr_11028 = f__6729__auto__.call(null);(statearr_11028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11029);
return statearr_11028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11029,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11077){var state_val_11078 = (state_11077[1]);if((state_val_11078 === 5))
{var inst_11069 = (state_11077[7]);var inst_11072 = cmd.core.unauthorized.call(null,inst_11069);var state_11077__$1 = state_11077;var statearr_11079_11092 = state_11077__$1;(statearr_11079_11092[2] = inst_11072);
(statearr_11079_11092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11078 === 4))
{var inst_11070 = cmd.core.logged_in.call(null,username,auth_token);var state_11077__$1 = state_11077;var statearr_11080_11093 = state_11077__$1;(statearr_11080_11093[2] = inst_11070);
(statearr_11080_11093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11078 === 3))
{var inst_11075 = (state_11077[2]);var state_11077__$1 = state_11077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11077__$1,inst_11075);
} else
{if((state_val_11078 === 2))
{var inst_11067 = (state_11077[2]);var inst_11068 = cljs.core.nth.call(null,inst_11067,0,null);var inst_11069 = cljs.core.nth.call(null,inst_11067,1,null);var state_11077__$1 = (function (){var statearr_11081 = state_11077;(statearr_11081[7] = inst_11069);
return statearr_11081;
})();var G__11082_11094 = inst_11068;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11082_11094))
{var statearr_11083_11095 = state_11077__$1;(statearr_11083_11095[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11082_11094))
{var statearr_11084_11096 = state_11077__$1;(statearr_11084_11096[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11068)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11078 === 1))
{var inst_11063 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_11064 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_11065 = cmd.lib.GET.call(null,inst_11063,inst_11064);var state_11077__$1 = state_11077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11077__$1,2,inst_11065);
} else
{return null;
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11088 = [null,null,null,null,null,null,null,null];(statearr_11088[0] = state_machine__6714__auto__);
(statearr_11088[1] = 1);
return statearr_11088;
});
var state_machine__6714__auto____1 = (function (state_11077){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11077);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11089){if((e11089 instanceof Object))
{var ex__6717__auto__ = e11089;var statearr_11090_11097 = state_11077;(statearr_11090_11097[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11098 = state_11077;
state_11077 = G__11098;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11077){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11091 = f__6729__auto__.call(null);(statearr_11091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.authenticated_om_QMARK_ = (function authenticated_om_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.core.authenticated_QMARK_ = (function authenticated_QMARK_(state){return cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.core.error_set_QMARK_ = (function error_set_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"error","error",1110689146));
});
cmd.core.parse_location_hash = (function parse_location_hash(){var hash = document.location.hash;if((cljs.core.count.call(null,hash) > 1))
{return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gist-id","gist-id",1053270999),new cljs.core.Keyword(null,"panels","panels",4313328225)], null),cljs.core.subs.call(null,hash,1).split(";"));
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
cmd.core.get_gist_id_from_location_hash = (function get_gist_id_from_location_hash(){var x = cmd.core.parse_location_hash.call(null).call(null,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999));if(cljs.core._EQ_.call(null,x,""))
{return null;
} else
{return x;
}
});
cmd.core.get_panels_from_location_hash = (function get_panels_from_location_hash(){var x = cmd.core.parse_location_hash.call(null).call(null,new cljs.core.Keyword(null,"panels","panels",4313328225));return x;
});
cmd.core.set_title = (function set_title(title){return document.title = [cljs.core.str(title),cljs.core.str(" : "),cljs.core.str(cmd.defs.default_title)].join('');
});
cmd.core.set_location_hash = (function set_location_hash(hash_hash){var gist_id = (function (){var or__3481__auto__ = hash_hash.call(null,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999));if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return "";
}
})();var panels = hash_hash.call(null,new cljs.core.Keyword(null,"panels","panels",4313328225));var chunks = (((panels == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gist_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gist_id,panels], null));return document.location.hash = clojure.string.join.call(null,";",chunks);
});
cmd.core.set_location_hash_gist_id = (function set_location_hash_gist_id(gist_id){var lh = cmd.core.parse_location_hash.call(null);var new_lh = cljs.core.assoc.call(null,lh,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999),gist_id);return cmd.core.set_location_hash.call(null,new_lh);
});
cmd.core.set_location_hash_panels = (function set_location_hash_panels(panels){var lh = cmd.core.parse_location_hash.call(null);var new_lh = cljs.core.assoc.call(null,lh,new cljs.core.Keyword(null,"panels","panels",4313328225),clojure.string.join.call(null,panels));return cmd.core.set_location_hash.call(null,new_lh);
});
cmd.core.load_initial_content = (function load_initial_content(){var gist_id = cmd.core.get_gist_id_from_location_hash.call(null);if((gist_id == null))
{return cmd.core.get_motd.call(null,cmd.defs.default_motd_id);
} else
{return cmd.core.load_gist.call(null,gist_id);
}
});
cmd.core.ace_set_value = (function ace_set_value(content){return cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__11100 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__11100,0,null);var first_file = cljs.core.nth.call(null,vec__11100,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.core.get_pinned_gists = (function get_pinned_gists(state){return cljs.core.filter.call(null,(function (x){return clojure.set.contains_QMARK_.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149).cljs$core$IFn$_invoke$arity$1(state),x.call(null,"id"));
}),new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=core.js.map