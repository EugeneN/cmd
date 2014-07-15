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
cmd.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),0,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["58a15db96ca12b952f8e",null], null), null),new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.PersistentVector.EMPTY], null));
cmd.core.AppBus = cljs.core.async.chan.call(null,1);
cmd.core.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.core.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,cljs.core.select_keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace","ace",1014000629),new cljs.core.Keyword(null,"worker","worker",4526786288),new cljs.core.Keyword(null,"motd","motd",1017261828),new cljs.core.Keyword(null,"active-requests","active-requests",3616398877)], null));
});
cmd.core.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.core.say = (function say(msg){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.conj.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238)),msg));
var c__6728__auto___10418 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___10418){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___10418){
return (function (state_10409){var state_val_10410 = (state_10409[1]);if((state_val_10410 === 2))
{var inst_10407 = (state_10409[2]);var state_10409__$1 = state_10409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10409__$1,inst_10407);
} else
{if((state_val_10410 === 1))
{var inst_10404 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_10405 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10404,null));var state_10409__$1 = state_10409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10409__$1,2,cmd.core.AppBus,inst_10405);
} else
{return null;
}
}
});})(c__6728__auto___10418))
;return ((function (switch__6713__auto__,c__6728__auto___10418){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10414 = [null,null,null,null,null,null,null];(statearr_10414[0] = state_machine__6714__auto__);
(statearr_10414[1] = 1);
return statearr_10414;
});
var state_machine__6714__auto____1 = (function (state_10409){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10409);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10415){if((e10415 instanceof Object))
{var ex__6717__auto__ = e10415;var statearr_10416_10419 = state_10409;(statearr_10416_10419[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10420 = state_10409;
state_10409 = G__10420;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10409){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___10418))
})();var state__6730__auto__ = (function (){var statearr_10417 = f__6729__auto__.call(null);(statearr_10417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___10418);
return statearr_10417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___10418))
);
return console.log(msg);
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__,data,worker,ch){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__,data,worker,ch){
return (function (state_10443){var state_val_10444 = (state_10443[1]);if((state_val_10444 === 2))
{var inst_10440 = (state_10443[2]);var inst_10441 = cljs.core.async.close_BANG_.call(null,ch);var state_10443__$1 = (function (){var statearr_10445 = state_10443;(statearr_10445[7] = inst_10440);
return statearr_10445;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10443__$1,inst_10441);
} else
{if((state_val_10444 === 1))
{var inst_10437 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_10438 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10437,null));var state_10443__$1 = state_10443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10443__$1,2,ch,inst_10438);
} else
{return null;
}
}
});})(c__6728__auto__,data,worker,ch))
;return ((function (switch__6713__auto__,c__6728__auto__,data,worker,ch){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10449 = [null,null,null,null,null,null,null,null];(statearr_10449[0] = state_machine__6714__auto__);
(statearr_10449[1] = 1);
return statearr_10449;
});
var state_machine__6714__auto____1 = (function (state_10443){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10443);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10450){if((e10450 instanceof Object))
{var ex__6717__auto__ = e10450;var statearr_10451_10453 = state_10443;(statearr_10451_10453[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10443);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10454 = state_10443;
state_10443 = G__10454;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10443){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__,data,worker,ch))
})();var state__6730__auto__ = (function (){var statearr_10452 = f__6729__auto__.call(null);(statearr_10452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10452;
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
return (function (state_10496){var state_val_10497 = (state_10496[1]);if((state_val_10497 === 5))
{var inst_10491 = cb.call(null,"<Error>");var state_10496__$1 = state_10496;var statearr_10498_10511 = state_10496__$1;(statearr_10498_10511[2] = inst_10491);
(statearr_10498_10511[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 4))
{var inst_10488 = (state_10496[7]);var inst_10489 = cb.call(null,inst_10488);var state_10496__$1 = state_10496;var statearr_10499_10512 = state_10496__$1;(statearr_10499_10512[2] = inst_10489);
(statearr_10499_10512[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 3))
{var inst_10494 = (state_10496[2]);var state_10496__$1 = state_10496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10496__$1,inst_10494);
} else
{if((state_val_10497 === 2))
{var inst_10486 = (state_10496[2]);var inst_10487 = cljs.core.nth.call(null,inst_10486,0,null);var inst_10488 = cljs.core.nth.call(null,inst_10486,1,null);var state_10496__$1 = (function (){var statearr_10500 = state_10496;(statearr_10500[7] = inst_10488);
return statearr_10500;
})();var G__10501_10513 = inst_10487;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10501_10513))
{var statearr_10502_10514 = state_10496__$1;(statearr_10502_10514[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10501_10513))
{var statearr_10503_10515 = state_10496__$1;(statearr_10503_10515[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10487)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 1))
{var inst_10484 = cmd.core.wmd__GT_html.call(null,md);var state_10496__$1 = state_10496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10496__$1,2,inst_10484);
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
var state_machine__6714__auto____0 = (function (){var statearr_10507 = [null,null,null,null,null,null,null,null];(statearr_10507[0] = state_machine__6714__auto__);
(statearr_10507[1] = 1);
return statearr_10507;
});
var state_machine__6714__auto____1 = (function (state_10496){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10508){if((e10508 instanceof Object))
{var ex__6717__auto__ = e10508;var statearr_10509_10516 = state_10496;(statearr_10509_10516[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10517 = state_10496;
state_10496 = G__10517;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10496){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10510 = f__6729__auto__.call(null);(statearr_10510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj10521 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj10521;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj10525 = {"Content-Type":"application/json"};return obj10525;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__10526_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__10526_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.core.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10589){var state_val_10590 = (state_10589[1]);if((state_val_10590 === 6))
{var inst_10576 = (state_10589[7]);var inst_10584 = cmd.core.handle_io_error.call(null,inst_10576);var state_10589__$1 = state_10589;var statearr_10591_10605 = state_10589__$1;(statearr_10591_10605[2] = inst_10584);
(statearr_10591_10605[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10590 === 5))
{var inst_10577 = (state_10589[8]);var inst_10581 = (state_10589[2]);var inst_10582 = inst_10577.call(null,inst_10581);var state_10589__$1 = state_10589;var statearr_10592_10606 = state_10589__$1;(statearr_10592_10606[2] = inst_10582);
(statearr_10592_10606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10590 === 4))
{var inst_10576 = (state_10589[7]);var inst_10577 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_10576);var inst_10578 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_10579 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10578,null));var state_10589__$1 = (function (){var statearr_10593 = state_10589;(statearr_10593[8] = inst_10577);
return statearr_10593;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10589__$1,5,cmd.core.AppBus,inst_10579);
} else
{if((state_val_10590 === 3))
{var inst_10587 = (state_10589[2]);var state_10589__$1 = state_10589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10589__$1,inst_10587);
} else
{if((state_val_10590 === 2))
{var inst_10573 = (state_10589[2]);var inst_10574 = cljs.core.nth.call(null,inst_10573,0,null);var inst_10575 = cljs.core.nth.call(null,inst_10573,1,null);var inst_10576 = cmd.utils.raw__GT_clj.call(null,inst_10575);var state_10589__$1 = (function (){var statearr_10594 = state_10589;(statearr_10594[7] = inst_10576);
return statearr_10594;
})();var G__10595_10607 = inst_10574;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10595_10607))
{var statearr_10596_10608 = state_10589__$1;(statearr_10596_10608[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10595_10607))
{var statearr_10597_10609 = state_10589__$1;(statearr_10597_10609[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10574)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10590 === 1))
{var inst_10567 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10568 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10569 = [cljs.core.str("/users/"),cljs.core.str(inst_10567),cljs.core.str("/gists")].join('');var inst_10570 = cmd.core.auth_param_fallback.call(null,inst_10567,inst_10568);var inst_10571 = cmd.lib.GET.call(null,inst_10569,inst_10570);var state_10589__$1 = state_10589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10589__$1,2,inst_10571);
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
var state_machine__6714__auto____0 = (function (){var statearr_10601 = [null,null,null,null,null,null,null,null,null];(statearr_10601[0] = state_machine__6714__auto__);
(statearr_10601[1] = 1);
return statearr_10601;
});
var state_machine__6714__auto____1 = (function (state_10589){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10589);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10602){if((e10602 instanceof Object))
{var ex__6717__auto__ = e10602;var statearr_10603_10610 = state_10589;(statearr_10603_10610[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10611 = state_10589;
state_10589 = G__10611;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10589){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10604 = f__6729__auto__.call(null);(statearr_10604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.get_motd = (function get_motd(gist_id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10686){var state_val_10687 = (state_10686[1]);if((state_val_10687 === 6))
{var inst_10679 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_10680 = cmd.core.say.call(null,"Sorry, can't load motd");var inst_10681 = inst_10679.call(null,inst_10680);var state_10686__$1 = state_10686;var statearr_10688_10702 = state_10686__$1;(statearr_10688_10702[2] = inst_10681);
(statearr_10688_10702[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10687 === 5))
{var inst_10672 = (state_10686[7]);var inst_10676 = (state_10686[2]);var inst_10677 = inst_10672.call(null,inst_10676);var state_10686__$1 = state_10686;var statearr_10689_10703 = state_10686__$1;(statearr_10689_10703[2] = inst_10677);
(statearr_10689_10703[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10687 === 4))
{var inst_10664 = (state_10686[8]);var inst_10666 = cmd.utils.raw__GT_clj.call(null,inst_10664);var inst_10667 = inst_10666.call(null,"files");var inst_10668 = cljs.core.first.call(null,inst_10667);var inst_10669 = cljs.core.nth.call(null,inst_10668,0,null);var inst_10670 = cljs.core.nth.call(null,inst_10668,1,null);var inst_10671 = inst_10670.call(null,"content");var inst_10672 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_10671);var inst_10673 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_10671];var inst_10674 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10673,null));var state_10686__$1 = (function (){var statearr_10690 = state_10686;(statearr_10690[9] = inst_10669);
(statearr_10690[7] = inst_10672);
return statearr_10690;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10686__$1,5,cmd.core.AppBus,inst_10674);
} else
{if((state_val_10687 === 3))
{var inst_10684 = (state_10686[2]);var state_10686__$1 = state_10686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10686__$1,inst_10684);
} else
{if((state_val_10687 === 2))
{var inst_10662 = (state_10686[2]);var inst_10663 = cljs.core.nth.call(null,inst_10662,0,null);var inst_10664 = cljs.core.nth.call(null,inst_10662,1,null);var state_10686__$1 = (function (){var statearr_10691 = state_10686;(statearr_10691[8] = inst_10664);
return statearr_10691;
})();var G__10692_10704 = inst_10663;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10692_10704))
{var statearr_10693_10705 = state_10686__$1;(statearr_10693_10705[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10692_10704))
{var statearr_10694_10706 = state_10686__$1;(statearr_10694_10706[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10663)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10687 === 1))
{var inst_10658 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10659 = cmd.core.auth_param_anon.call(null);var inst_10660 = cmd.lib.GET.call(null,inst_10658,inst_10659);var state_10686__$1 = state_10686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10686__$1,2,inst_10660);
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
var state_machine__6714__auto____0 = (function (){var statearr_10698 = [null,null,null,null,null,null,null,null,null,null];(statearr_10698[0] = state_machine__6714__auto__);
(statearr_10698[1] = 1);
return statearr_10698;
});
var state_machine__6714__auto____1 = (function (state_10686){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10686);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10699){if((e10699 instanceof Object))
{var ex__6717__auto__ = e10699;var statearr_10700_10707 = state_10686;(statearr_10700_10707[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10686);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10708 = state_10686;
state_10686 = G__10708;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10686){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10701 = f__6729__auto__.call(null);(statearr_10701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10787){var state_val_10788 = (state_10787[1]);if((state_val_10788 === 6))
{var inst_10765 = (state_10787[7]);var inst_10781 = cmd.utils.raw__GT_clj.call(null,inst_10765);var inst_10782 = cmd.core.handle_io_error.call(null,inst_10781);var state_10787__$1 = state_10787;var statearr_10789_10803 = state_10787__$1;(statearr_10789_10803[2] = inst_10782);
(statearr_10789_10803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 5))
{var inst_10779 = (state_10787[2]);var state_10787__$1 = state_10787;var statearr_10790_10804 = state_10787__$1;(statearr_10790_10804[2] = inst_10779);
(statearr_10790_10804[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 4))
{var inst_10765 = (state_10787[7]);var inst_10767 = cmd.utils.raw__GT_clj.call(null,inst_10765);var inst_10768 = inst_10767.call(null,"files");var inst_10769 = cljs.core.first.call(null,inst_10768);var inst_10770 = cljs.core.nth.call(null,inst_10769,0,null);var inst_10771 = cljs.core.nth.call(null,inst_10769,1,null);var inst_10772 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_10770);var inst_10773 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10767);var inst_10774 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_10775 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_10776 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_10777 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10776,null));var state_10787__$1 = (function (){var statearr_10791 = state_10787;(statearr_10791[8] = inst_10774);
(statearr_10791[9] = inst_10773);
(statearr_10791[10] = inst_10771);
(statearr_10791[11] = inst_10772);
(statearr_10791[12] = inst_10775);
return statearr_10791;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10787__$1,5,cmd.core.AppBus,inst_10777);
} else
{if((state_val_10788 === 3))
{var inst_10785 = (state_10787[2]);var state_10787__$1 = state_10787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10787__$1,inst_10785);
} else
{if((state_val_10788 === 2))
{var inst_10763 = (state_10787[2]);var inst_10764 = cljs.core.nth.call(null,inst_10763,0,null);var inst_10765 = cljs.core.nth.call(null,inst_10763,1,null);var state_10787__$1 = (function (){var statearr_10792 = state_10787;(statearr_10792[7] = inst_10765);
return statearr_10792;
})();var G__10793_10805 = inst_10764;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10793_10805))
{var statearr_10794_10806 = state_10787__$1;(statearr_10794_10806[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10793_10805))
{var statearr_10795_10807 = state_10787__$1;(statearr_10795_10807[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10764)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 1))
{var inst_10757 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_10758 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10759 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10760 = cmd.core.auth_param_fallback.call(null,inst_10758,inst_10759);var inst_10761 = cmd.lib.GET.call(null,inst_10757,inst_10760);var state_10787__$1 = state_10787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10787__$1,2,inst_10761);
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
var state_machine__6714__auto____0 = (function (){var statearr_10799 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10799[0] = state_machine__6714__auto__);
(statearr_10799[1] = 1);
return statearr_10799;
});
var state_machine__6714__auto____1 = (function (state_10787){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10787);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10800){if((e10800 instanceof Object))
{var ex__6717__auto__ = e10800;var statearr_10801_10808 = state_10787;(statearr_10801_10808[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10809 = state_10787;
state_10787 = G__10809;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10787){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10802 = f__6729__auto__.call(null);(statearr_10802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10868){var state_val_10869 = (state_10868[1]);if((state_val_10869 === 5))
{var inst_10857 = (state_10868[7]);var inst_10863 = cmd.core.handle_io_error.call(null,inst_10857);var state_10868__$1 = state_10868;var statearr_10870_10884 = state_10868__$1;(statearr_10870_10884[2] = inst_10863);
(statearr_10870_10884[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10869 === 4))
{var inst_10857 = (state_10868[7]);var inst_10858 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10857);var inst_10859 = cmd.core.load_gists.call(null);var inst_10860 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_10861 = cmd.core.say.call(null,inst_10860);var state_10868__$1 = (function (){var statearr_10871 = state_10868;(statearr_10871[8] = inst_10858);
(statearr_10871[9] = inst_10859);
return statearr_10871;
})();var statearr_10872_10885 = state_10868__$1;(statearr_10872_10885[2] = inst_10861);
(statearr_10872_10885[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10869 === 3))
{var inst_10866 = (state_10868[2]);var state_10868__$1 = state_10868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10868__$1,inst_10866);
} else
{if((state_val_10869 === 2))
{var inst_10854 = (state_10868[2]);var inst_10855 = cljs.core.nth.call(null,inst_10854,0,null);var inst_10856 = cljs.core.nth.call(null,inst_10854,1,null);var inst_10857 = cmd.utils.raw__GT_clj.call(null,inst_10856);var state_10868__$1 = (function (){var statearr_10873 = state_10868;(statearr_10873[7] = inst_10857);
return statearr_10873;
})();var G__10874_10886 = inst_10855;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10874_10886))
{var statearr_10875_10887 = state_10868__$1;(statearr_10875_10887[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10874_10886))
{var statearr_10876_10888 = state_10868__$1;(statearr_10876_10888[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10855)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10869 === 1))
{var inst_10848 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10849 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10850 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10851 = cmd.core.auth_param_strict.call(null,inst_10849,inst_10850);var inst_10852 = cmd.lib.PATCH.call(null,inst_10848,new_content,inst_10851);var state_10868__$1 = state_10868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10868__$1,2,inst_10852);
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
var state_machine__6714__auto____0 = (function (){var statearr_10880 = [null,null,null,null,null,null,null,null,null,null];(statearr_10880[0] = state_machine__6714__auto__);
(statearr_10880[1] = 1);
return statearr_10880;
});
var state_machine__6714__auto____1 = (function (state_10868){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10868);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10881){if((e10881 instanceof Object))
{var ex__6717__auto__ = e10881;var statearr_10882_10889 = state_10868;(statearr_10882_10889[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10868);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10890 = state_10868;
state_10868 = G__10890;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10868){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10883 = f__6729__auto__.call(null);(statearr_10883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10951){var state_val_10952 = (state_10951[1]);if((state_val_10952 === 5))
{var inst_10938 = (state_10951[7]);var inst_10946 = cmd.core.handle_io_error.call(null,inst_10938);var state_10951__$1 = state_10951;var statearr_10953_10967 = state_10951__$1;(statearr_10953_10967[2] = inst_10946);
(statearr_10953_10967[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 4))
{var inst_10938 = (state_10951[7]);var inst_10939 = inst_10938.call(null,"id");var inst_10940 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_10941 = cmd.core.load_gists.call(null);var inst_10942 = cmd.core.load_gist.call(null,inst_10939);var inst_10943 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_10939)].join('');var inst_10944 = cmd.core.say.call(null,inst_10943);var state_10951__$1 = (function (){var statearr_10954 = state_10951;(statearr_10954[8] = inst_10940);
(statearr_10954[9] = inst_10942);
(statearr_10954[10] = inst_10941);
return statearr_10954;
})();var statearr_10955_10968 = state_10951__$1;(statearr_10955_10968[2] = inst_10944);
(statearr_10955_10968[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 3))
{var inst_10949 = (state_10951[2]);var state_10951__$1 = state_10951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10951__$1,inst_10949);
} else
{if((state_val_10952 === 2))
{var inst_10935 = (state_10951[2]);var inst_10936 = cljs.core.nth.call(null,inst_10935,0,null);var inst_10937 = cljs.core.nth.call(null,inst_10935,1,null);var inst_10938 = cmd.utils.raw__GT_clj.call(null,inst_10937);var state_10951__$1 = (function (){var statearr_10956 = state_10951;(statearr_10956[7] = inst_10938);
return statearr_10956;
})();var G__10957_10969 = inst_10936;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10957_10969))
{var statearr_10958_10970 = state_10951__$1;(statearr_10958_10970[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10957_10969))
{var statearr_10959_10971 = state_10951__$1;(statearr_10959_10971[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10936)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 1))
{var inst_10930 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10931 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10932 = cmd.core.auth_param_strict.call(null,inst_10930,inst_10931);var inst_10933 = cmd.lib.POST.call(null,"/gists",new_content,inst_10932);var state_10951__$1 = state_10951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10951__$1,2,inst_10933);
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
var state_machine__6714__auto____0 = (function (){var statearr_10963 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10963[0] = state_machine__6714__auto__);
(statearr_10963[1] = 1);
return statearr_10963;
});
var state_machine__6714__auto____1 = (function (state_10951){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10951);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10964){if((e10964 instanceof Object))
{var ex__6717__auto__ = e10964;var statearr_10965_10972 = state_10951;(statearr_10965_10972[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10973 = state_10951;
state_10951 = G__10973;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10951){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10966 = f__6729__auto__.call(null);(statearr_10966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10966;
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
return (function (state_10993){var state_val_10994 = (state_10993[1]);if((state_val_10994 === 2))
{var inst_10991 = (state_10993[2]);var state_10993__$1 = state_10993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10993__$1,inst_10991);
} else
{if((state_val_10994 === 1))
{var inst_10988 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_10989 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10988,null));var state_10993__$1 = state_10993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10993__$1,2,cmd.core.AppBus,inst_10989);
} else
{return null;
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10998 = [null,null,null,null,null,null,null];(statearr_10998[0] = state_machine__6714__auto__);
(statearr_10998[1] = 1);
return statearr_10998;
});
var state_machine__6714__auto____1 = (function (state_10993){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10993);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10999){if((e10999 instanceof Object))
{var ex__6717__auto__ = e10999;var statearr_11000_11002 = state_10993;(statearr_11000_11002[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11003 = state_10993;
state_10993 = G__11003;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10993){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11001 = f__6729__auto__.call(null);(statearr_11001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__6728__auto___11032 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11032,error_msg){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11032,error_msg){
return (function (state_11023){var state_val_11024 = (state_11023[1]);if((state_val_11024 === 2))
{var inst_11021 = (state_11023[2]);var state_11023__$1 = state_11023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11023__$1,inst_11021);
} else
{if((state_val_11024 === 1))
{var inst_11018 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_11019 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11018,null));var state_11023__$1 = state_11023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11023__$1,2,cmd.core.AppBus,inst_11019);
} else
{return null;
}
}
});})(c__6728__auto___11032,error_msg))
;return ((function (switch__6713__auto__,c__6728__auto___11032,error_msg){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11028 = [null,null,null,null,null,null,null];(statearr_11028[0] = state_machine__6714__auto__);
(statearr_11028[1] = 1);
return statearr_11028;
});
var state_machine__6714__auto____1 = (function (state_11023){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11029){if((e11029 instanceof Object))
{var ex__6717__auto__ = e11029;var statearr_11030_11033 = state_11023;(statearr_11030_11033[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11034 = state_11023;
state_11023 = G__11034;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11023){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11032,error_msg))
})();var state__6730__auto__ = (function (){var statearr_11031 = f__6729__auto__.call(null);(statearr_11031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11032);
return statearr_11031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11032,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11080){var state_val_11081 = (state_11080[1]);if((state_val_11081 === 5))
{var inst_11072 = (state_11080[7]);var inst_11075 = cmd.core.unauthorized.call(null,inst_11072);var state_11080__$1 = state_11080;var statearr_11082_11095 = state_11080__$1;(statearr_11082_11095[2] = inst_11075);
(statearr_11082_11095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11081 === 4))
{var inst_11073 = cmd.core.logged_in.call(null,username,auth_token);var state_11080__$1 = state_11080;var statearr_11083_11096 = state_11080__$1;(statearr_11083_11096[2] = inst_11073);
(statearr_11083_11096[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11081 === 3))
{var inst_11078 = (state_11080[2]);var state_11080__$1 = state_11080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11080__$1,inst_11078);
} else
{if((state_val_11081 === 2))
{var inst_11070 = (state_11080[2]);var inst_11071 = cljs.core.nth.call(null,inst_11070,0,null);var inst_11072 = cljs.core.nth.call(null,inst_11070,1,null);var state_11080__$1 = (function (){var statearr_11084 = state_11080;(statearr_11084[7] = inst_11072);
return statearr_11084;
})();var G__11085_11097 = inst_11071;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11085_11097))
{var statearr_11086_11098 = state_11080__$1;(statearr_11086_11098[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11085_11097))
{var statearr_11087_11099 = state_11080__$1;(statearr_11087_11099[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11071)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11081 === 1))
{var inst_11066 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_11067 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_11068 = cmd.lib.GET.call(null,inst_11066,inst_11067);var state_11080__$1 = state_11080;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11080__$1,2,inst_11068);
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
var state_machine__6714__auto____0 = (function (){var statearr_11091 = [null,null,null,null,null,null,null,null];(statearr_11091[0] = state_machine__6714__auto__);
(statearr_11091[1] = 1);
return statearr_11091;
});
var state_machine__6714__auto____1 = (function (state_11080){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11080);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11092){if((e11092 instanceof Object))
{var ex__6717__auto__ = e11092;var statearr_11093_11100 = state_11080;(statearr_11093_11100[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11080);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11101 = state_11080;
state_11080 = G__11101;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11080){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11094 = f__6729__auto__.call(null);(statearr_11094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11094;
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
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__11103 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__11103,0,null);var first_file = cljs.core.nth.call(null,vec__11103,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.core.get_pinned_gists = (function get_pinned_gists(state){return cljs.core.filter.call(null,(function (gist){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149).cljs$core$IFn$_invoke$arity$1(state),gist.call(null,"id"));
}),new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=core.js.map