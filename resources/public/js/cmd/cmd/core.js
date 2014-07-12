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
cmd.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),0,new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.PersistentVector.EMPTY], null));
cmd.core.AppBus = cljs.core.async.chan.call(null,1);
cmd.core.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.core.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,cljs.core.select_keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace","ace",1014000629),new cljs.core.Keyword(null,"worker","worker",4526786288),new cljs.core.Keyword(null,"motd","motd",1017261828),new cljs.core.Keyword(null,"active-requests","active-requests",3616398877)], null));
});
cmd.core.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.core.say = (function say(msg){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.conj.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238)),msg));
var c__5608__auto___10367 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___10367){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___10367){
return (function (state_10358){var state_val_10359 = (state_10358[1]);if((state_val_10359 === 2))
{var inst_10356 = (state_10358[2]);var state_10358__$1 = state_10358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10358__$1,inst_10356);
} else
{if((state_val_10359 === 1))
{var inst_10353 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_10354 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10353,null));var state_10358__$1 = state_10358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10358__$1,2,cmd.core.AppBus,inst_10354);
} else
{return null;
}
}
});})(c__5608__auto___10367))
;return ((function (switch__5593__auto__,c__5608__auto___10367){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10363 = [null,null,null,null,null,null,null];(statearr_10363[0] = state_machine__5594__auto__);
(statearr_10363[1] = 1);
return statearr_10363;
});
var state_machine__5594__auto____1 = (function (state_10358){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10358);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10364){if((e10364 instanceof Object))
{var ex__5597__auto__ = e10364;var statearr_10365_10368 = state_10358;(statearr_10365_10368[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10358);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10369 = state_10358;
state_10358 = G__10369;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10358){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___10367))
})();var state__5610__auto__ = (function (){var statearr_10366 = f__5609__auto__.call(null);(statearr_10366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___10367);
return statearr_10366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___10367))
);
return console.log(msg);
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,data,worker,ch){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,data,worker,ch){
return (function (state_10392){var state_val_10393 = (state_10392[1]);if((state_val_10393 === 2))
{var inst_10389 = (state_10392[2]);var inst_10390 = cljs.core.async.close_BANG_.call(null,ch);var state_10392__$1 = (function (){var statearr_10394 = state_10392;(statearr_10394[7] = inst_10389);
return statearr_10394;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10392__$1,inst_10390);
} else
{if((state_val_10393 === 1))
{var inst_10386 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_10387 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10386,null));var state_10392__$1 = state_10392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10392__$1,2,ch,inst_10387);
} else
{return null;
}
}
});})(c__5608__auto__,data,worker,ch))
;return ((function (switch__5593__auto__,c__5608__auto__,data,worker,ch){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10398 = [null,null,null,null,null,null,null,null];(statearr_10398[0] = state_machine__5594__auto__);
(statearr_10398[1] = 1);
return statearr_10398;
});
var state_machine__5594__auto____1 = (function (state_10392){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10392);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10399){if((e10399 instanceof Object))
{var ex__5597__auto__ = e10399;var statearr_10400_10402 = state_10392;(statearr_10400_10402[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10392);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10403 = state_10392;
state_10392 = G__10403;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10392){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,data,worker,ch))
})();var state__5610__auto__ = (function (){var statearr_10401 = f__5609__auto__.call(null);(statearr_10401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__,data,worker,ch))
);
return c__5608__auto__;
});})(worker,ch))
,false);
worker.postMessage(text);
return ch;
});
cmd.core.html__GT_react = (function html__GT_react(html){return html;
});
cmd.core.process = (function process__$1(md,cb){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10445){var state_val_10446 = (state_10445[1]);if((state_val_10446 === 5))
{var inst_10440 = cb.call(null,"<Error>");var state_10445__$1 = state_10445;var statearr_10447_10460 = state_10445__$1;(statearr_10447_10460[2] = inst_10440);
(statearr_10447_10460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10446 === 4))
{var inst_10437 = (state_10445[7]);var inst_10438 = cb.call(null,inst_10437);var state_10445__$1 = state_10445;var statearr_10448_10461 = state_10445__$1;(statearr_10448_10461[2] = inst_10438);
(statearr_10448_10461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10446 === 3))
{var inst_10443 = (state_10445[2]);var state_10445__$1 = state_10445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10445__$1,inst_10443);
} else
{if((state_val_10446 === 2))
{var inst_10435 = (state_10445[2]);var inst_10436 = cljs.core.nth.call(null,inst_10435,0,null);var inst_10437 = cljs.core.nth.call(null,inst_10435,1,null);var state_10445__$1 = (function (){var statearr_10449 = state_10445;(statearr_10449[7] = inst_10437);
return statearr_10449;
})();var G__10450_10462 = inst_10436;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10450_10462))
{var statearr_10451_10463 = state_10445__$1;(statearr_10451_10463[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10450_10462))
{var statearr_10452_10464 = state_10445__$1;(statearr_10452_10464[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10436)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10446 === 1))
{var inst_10433 = cmd.core.wmd__GT_html.call(null,md);var state_10445__$1 = state_10445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10445__$1,2,inst_10433);
} else
{return null;
}
}
}
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10456 = [null,null,null,null,null,null,null,null];(statearr_10456[0] = state_machine__5594__auto__);
(statearr_10456[1] = 1);
return statearr_10456;
});
var state_machine__5594__auto____1 = (function (state_10445){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10457){if((e10457 instanceof Object))
{var ex__5597__auto__ = e10457;var statearr_10458_10465 = state_10445;(statearr_10458_10465[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10466 = state_10445;
state_10445 = G__10466;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10445){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10459 = f__5609__auto__.call(null);(statearr_10459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj10470 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj10470;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj10474 = {"Content-Type":"application/json"};return obj10474;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__10475_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__10475_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.core.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10538){var state_val_10539 = (state_10538[1]);if((state_val_10539 === 6))
{var inst_10525 = (state_10538[7]);var inst_10533 = cmd.core.handle_io_error.call(null,inst_10525);var state_10538__$1 = state_10538;var statearr_10540_10554 = state_10538__$1;(statearr_10540_10554[2] = inst_10533);
(statearr_10540_10554[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10539 === 5))
{var inst_10526 = (state_10538[8]);var inst_10530 = (state_10538[2]);var inst_10531 = inst_10526.call(null,inst_10530);var state_10538__$1 = state_10538;var statearr_10541_10555 = state_10538__$1;(statearr_10541_10555[2] = inst_10531);
(statearr_10541_10555[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10539 === 4))
{var inst_10525 = (state_10538[7]);var inst_10526 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_10525);var inst_10527 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_10528 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10527,null));var state_10538__$1 = (function (){var statearr_10542 = state_10538;(statearr_10542[8] = inst_10526);
return statearr_10542;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10538__$1,5,cmd.core.AppBus,inst_10528);
} else
{if((state_val_10539 === 3))
{var inst_10536 = (state_10538[2]);var state_10538__$1 = state_10538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10538__$1,inst_10536);
} else
{if((state_val_10539 === 2))
{var inst_10522 = (state_10538[2]);var inst_10523 = cljs.core.nth.call(null,inst_10522,0,null);var inst_10524 = cljs.core.nth.call(null,inst_10522,1,null);var inst_10525 = cmd.utils.raw__GT_clj.call(null,inst_10524);var state_10538__$1 = (function (){var statearr_10543 = state_10538;(statearr_10543[7] = inst_10525);
return statearr_10543;
})();var G__10544_10556 = inst_10523;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10544_10556))
{var statearr_10545_10557 = state_10538__$1;(statearr_10545_10557[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10544_10556))
{var statearr_10546_10558 = state_10538__$1;(statearr_10546_10558[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10523)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10539 === 1))
{var inst_10516 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10517 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10518 = [cljs.core.str("/users/"),cljs.core.str(inst_10516),cljs.core.str("/gists")].join('');var inst_10519 = cmd.core.auth_param_fallback.call(null,inst_10516,inst_10517);var inst_10520 = cmd.lib.GET.call(null,inst_10518,inst_10519);var state_10538__$1 = state_10538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10538__$1,2,inst_10520);
} else
{return null;
}
}
}
}
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10550 = [null,null,null,null,null,null,null,null,null];(statearr_10550[0] = state_machine__5594__auto__);
(statearr_10550[1] = 1);
return statearr_10550;
});
var state_machine__5594__auto____1 = (function (state_10538){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10538);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10551){if((e10551 instanceof Object))
{var ex__5597__auto__ = e10551;var statearr_10552_10559 = state_10538;(statearr_10552_10559[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10538);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10560 = state_10538;
state_10538 = G__10560;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10538){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10553 = f__5609__auto__.call(null);(statearr_10553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.get_motd = (function get_motd(gist_id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10635){var state_val_10636 = (state_10635[1]);if((state_val_10636 === 6))
{var inst_10628 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_10629 = cmd.core.say.call(null,"Sorry, can't load motd");var inst_10630 = inst_10628.call(null,inst_10629);var state_10635__$1 = state_10635;var statearr_10637_10651 = state_10635__$1;(statearr_10637_10651[2] = inst_10630);
(statearr_10637_10651[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10636 === 5))
{var inst_10621 = (state_10635[7]);var inst_10625 = (state_10635[2]);var inst_10626 = inst_10621.call(null,inst_10625);var state_10635__$1 = state_10635;var statearr_10638_10652 = state_10635__$1;(statearr_10638_10652[2] = inst_10626);
(statearr_10638_10652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10636 === 4))
{var inst_10613 = (state_10635[8]);var inst_10615 = cmd.utils.raw__GT_clj.call(null,inst_10613);var inst_10616 = inst_10615.call(null,"files");var inst_10617 = cljs.core.first.call(null,inst_10616);var inst_10618 = cljs.core.nth.call(null,inst_10617,0,null);var inst_10619 = cljs.core.nth.call(null,inst_10617,1,null);var inst_10620 = inst_10619.call(null,"content");var inst_10621 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_10620);var inst_10622 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_10620];var inst_10623 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10622,null));var state_10635__$1 = (function (){var statearr_10639 = state_10635;(statearr_10639[9] = inst_10618);
(statearr_10639[7] = inst_10621);
return statearr_10639;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10635__$1,5,cmd.core.AppBus,inst_10623);
} else
{if((state_val_10636 === 3))
{var inst_10633 = (state_10635[2]);var state_10635__$1 = state_10635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10635__$1,inst_10633);
} else
{if((state_val_10636 === 2))
{var inst_10611 = (state_10635[2]);var inst_10612 = cljs.core.nth.call(null,inst_10611,0,null);var inst_10613 = cljs.core.nth.call(null,inst_10611,1,null);var state_10635__$1 = (function (){var statearr_10640 = state_10635;(statearr_10640[8] = inst_10613);
return statearr_10640;
})();var G__10641_10653 = inst_10612;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10641_10653))
{var statearr_10642_10654 = state_10635__$1;(statearr_10642_10654[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10641_10653))
{var statearr_10643_10655 = state_10635__$1;(statearr_10643_10655[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10612)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10636 === 1))
{var inst_10607 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10608 = cmd.core.auth_param_anon.call(null);var inst_10609 = cmd.lib.GET.call(null,inst_10607,inst_10608);var state_10635__$1 = state_10635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10635__$1,2,inst_10609);
} else
{return null;
}
}
}
}
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10647 = [null,null,null,null,null,null,null,null,null,null];(statearr_10647[0] = state_machine__5594__auto__);
(statearr_10647[1] = 1);
return statearr_10647;
});
var state_machine__5594__auto____1 = (function (state_10635){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10635);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10648){if((e10648 instanceof Object))
{var ex__5597__auto__ = e10648;var statearr_10649_10656 = state_10635;(statearr_10649_10656[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10635);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10657 = state_10635;
state_10635 = G__10657;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10635){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10650 = f__5609__auto__.call(null);(statearr_10650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10736){var state_val_10737 = (state_10736[1]);if((state_val_10737 === 6))
{var inst_10714 = (state_10736[7]);var inst_10730 = cmd.utils.raw__GT_clj.call(null,inst_10714);var inst_10731 = cmd.core.handle_io_error.call(null,inst_10730);var state_10736__$1 = state_10736;var statearr_10738_10752 = state_10736__$1;(statearr_10738_10752[2] = inst_10731);
(statearr_10738_10752[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10737 === 5))
{var inst_10728 = (state_10736[2]);var state_10736__$1 = state_10736;var statearr_10739_10753 = state_10736__$1;(statearr_10739_10753[2] = inst_10728);
(statearr_10739_10753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10737 === 4))
{var inst_10714 = (state_10736[7]);var inst_10716 = cmd.utils.raw__GT_clj.call(null,inst_10714);var inst_10717 = inst_10716.call(null,"files");var inst_10718 = cljs.core.first.call(null,inst_10717);var inst_10719 = cljs.core.nth.call(null,inst_10718,0,null);var inst_10720 = cljs.core.nth.call(null,inst_10718,1,null);var inst_10721 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_10719);var inst_10722 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10716);var inst_10723 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_10724 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_10725 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_10726 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10725,null));var state_10736__$1 = (function (){var statearr_10740 = state_10736;(statearr_10740[8] = inst_10724);
(statearr_10740[9] = inst_10720);
(statearr_10740[10] = inst_10723);
(statearr_10740[11] = inst_10721);
(statearr_10740[12] = inst_10722);
return statearr_10740;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10736__$1,5,cmd.core.AppBus,inst_10726);
} else
{if((state_val_10737 === 3))
{var inst_10734 = (state_10736[2]);var state_10736__$1 = state_10736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10736__$1,inst_10734);
} else
{if((state_val_10737 === 2))
{var inst_10712 = (state_10736[2]);var inst_10713 = cljs.core.nth.call(null,inst_10712,0,null);var inst_10714 = cljs.core.nth.call(null,inst_10712,1,null);var state_10736__$1 = (function (){var statearr_10741 = state_10736;(statearr_10741[7] = inst_10714);
return statearr_10741;
})();var G__10742_10754 = inst_10713;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10742_10754))
{var statearr_10743_10755 = state_10736__$1;(statearr_10743_10755[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10742_10754))
{var statearr_10744_10756 = state_10736__$1;(statearr_10744_10756[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10713)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10737 === 1))
{var inst_10706 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_10707 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10708 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10709 = cmd.core.auth_param_fallback.call(null,inst_10707,inst_10708);var inst_10710 = cmd.lib.GET.call(null,inst_10706,inst_10709);var state_10736__$1 = state_10736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10736__$1,2,inst_10710);
} else
{return null;
}
}
}
}
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10748 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10748[0] = state_machine__5594__auto__);
(statearr_10748[1] = 1);
return statearr_10748;
});
var state_machine__5594__auto____1 = (function (state_10736){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10736);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10749){if((e10749 instanceof Object))
{var ex__5597__auto__ = e10749;var statearr_10750_10757 = state_10736;(statearr_10750_10757[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10758 = state_10736;
state_10736 = G__10758;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10736){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10751 = f__5609__auto__.call(null);(statearr_10751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10815){var state_val_10816 = (state_10815[1]);if((state_val_10816 === 5))
{var inst_10805 = (state_10815[7]);var inst_10810 = cmd.core.handle_io_error.call(null,inst_10805);var state_10815__$1 = state_10815;var statearr_10817_10831 = state_10815__$1;(statearr_10817_10831[2] = inst_10810);
(statearr_10817_10831[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 4))
{var inst_10805 = (state_10815[7]);var inst_10806 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10805);var inst_10807 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_10808 = cmd.core.say.call(null,inst_10807);var state_10815__$1 = (function (){var statearr_10818 = state_10815;(statearr_10818[8] = inst_10806);
return statearr_10818;
})();var statearr_10819_10832 = state_10815__$1;(statearr_10819_10832[2] = inst_10808);
(statearr_10819_10832[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 3))
{var inst_10813 = (state_10815[2]);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10815__$1,inst_10813);
} else
{if((state_val_10816 === 2))
{var inst_10802 = (state_10815[2]);var inst_10803 = cljs.core.nth.call(null,inst_10802,0,null);var inst_10804 = cljs.core.nth.call(null,inst_10802,1,null);var inst_10805 = cmd.utils.raw__GT_clj.call(null,inst_10804);var state_10815__$1 = (function (){var statearr_10820 = state_10815;(statearr_10820[7] = inst_10805);
return statearr_10820;
})();var G__10821_10833 = inst_10803;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10821_10833))
{var statearr_10822_10834 = state_10815__$1;(statearr_10822_10834[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10821_10833))
{var statearr_10823_10835 = state_10815__$1;(statearr_10823_10835[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10803)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 1))
{var inst_10796 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10797 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10798 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10799 = cmd.core.auth_param_strict.call(null,inst_10797,inst_10798);var inst_10800 = cmd.lib.PATCH.call(null,inst_10796,new_content,inst_10799);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10815__$1,2,inst_10800);
} else
{return null;
}
}
}
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10827 = [null,null,null,null,null,null,null,null,null];(statearr_10827[0] = state_machine__5594__auto__);
(statearr_10827[1] = 1);
return statearr_10827;
});
var state_machine__5594__auto____1 = (function (state_10815){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10815);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10828){if((e10828 instanceof Object))
{var ex__5597__auto__ = e10828;var statearr_10829_10836 = state_10815;(statearr_10829_10836[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10837 = state_10815;
state_10815 = G__10837;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10815){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10830 = f__5609__auto__.call(null);(statearr_10830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10898){var state_val_10899 = (state_10898[1]);if((state_val_10899 === 5))
{var inst_10885 = (state_10898[7]);var inst_10893 = cmd.core.handle_io_error.call(null,inst_10885);var state_10898__$1 = state_10898;var statearr_10900_10914 = state_10898__$1;(statearr_10900_10914[2] = inst_10893);
(statearr_10900_10914[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 4))
{var inst_10885 = (state_10898[7]);var inst_10886 = inst_10885.call(null,"id");var inst_10887 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_10888 = cmd.core.load_gists.call(null);var inst_10889 = cmd.core.load_gist.call(null,inst_10886);var inst_10890 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_10886)].join('');var inst_10891 = cmd.core.say.call(null,inst_10890);var state_10898__$1 = (function (){var statearr_10901 = state_10898;(statearr_10901[8] = inst_10888);
(statearr_10901[9] = inst_10889);
(statearr_10901[10] = inst_10887);
return statearr_10901;
})();var statearr_10902_10915 = state_10898__$1;(statearr_10902_10915[2] = inst_10891);
(statearr_10902_10915[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 3))
{var inst_10896 = (state_10898[2]);var state_10898__$1 = state_10898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10898__$1,inst_10896);
} else
{if((state_val_10899 === 2))
{var inst_10882 = (state_10898[2]);var inst_10883 = cljs.core.nth.call(null,inst_10882,0,null);var inst_10884 = cljs.core.nth.call(null,inst_10882,1,null);var inst_10885 = cmd.utils.raw__GT_clj.call(null,inst_10884);var state_10898__$1 = (function (){var statearr_10903 = state_10898;(statearr_10903[7] = inst_10885);
return statearr_10903;
})();var G__10904_10916 = inst_10883;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10904_10916))
{var statearr_10905_10917 = state_10898__$1;(statearr_10905_10917[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10904_10916))
{var statearr_10906_10918 = state_10898__$1;(statearr_10906_10918[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10883)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 1))
{var inst_10877 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10878 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10879 = cmd.core.auth_param_strict.call(null,inst_10877,inst_10878);var inst_10880 = cmd.lib.POST.call(null,"/gists",new_content,inst_10879);var state_10898__$1 = state_10898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10898__$1,2,inst_10880);
} else
{return null;
}
}
}
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10910 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10910[0] = state_machine__5594__auto__);
(statearr_10910[1] = 1);
return statearr_10910;
});
var state_machine__5594__auto____1 = (function (state_10898){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10911){if((e10911 instanceof Object))
{var ex__5597__auto__ = e10911;var statearr_10912_10919 = state_10898;(statearr_10912_10919[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10911;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10920 = state_10898;
state_10898 = G__10920;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10898){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10913 = f__5609__auto__.call(null);(statearr_10913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.logged_in = (function logged_in(username,auth_token){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792),username);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430),auth_token);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),true);
cmd.utils.setcookie.call(null,"username",username);
cmd.utils.setcookie.call(null,"auth-token",auth_token);
var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10940){var state_val_10941 = (state_10940[1]);if((state_val_10941 === 2))
{var inst_10938 = (state_10940[2]);var state_10940__$1 = state_10940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10940__$1,inst_10938);
} else
{if((state_val_10941 === 1))
{var inst_10935 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_10936 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10935,null));var state_10940__$1 = state_10940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10940__$1,2,cmd.core.AppBus,inst_10936);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10945 = [null,null,null,null,null,null,null];(statearr_10945[0] = state_machine__5594__auto__);
(statearr_10945[1] = 1);
return statearr_10945;
});
var state_machine__5594__auto____1 = (function (state_10940){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10940);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10946){if((e10946 instanceof Object))
{var ex__5597__auto__ = e10946;var statearr_10947_10949 = state_10940;(statearr_10947_10949[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10940);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10950 = state_10940;
state_10940 = G__10950;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10940){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10948 = f__5609__auto__.call(null);(statearr_10948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__5608__auto___10979 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___10979,error_msg){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___10979,error_msg){
return (function (state_10970){var state_val_10971 = (state_10970[1]);if((state_val_10971 === 2))
{var inst_10968 = (state_10970[2]);var state_10970__$1 = state_10970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10970__$1,inst_10968);
} else
{if((state_val_10971 === 1))
{var inst_10965 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_10966 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10965,null));var state_10970__$1 = state_10970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10970__$1,2,cmd.core.AppBus,inst_10966);
} else
{return null;
}
}
});})(c__5608__auto___10979,error_msg))
;return ((function (switch__5593__auto__,c__5608__auto___10979,error_msg){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10975 = [null,null,null,null,null,null,null];(statearr_10975[0] = state_machine__5594__auto__);
(statearr_10975[1] = 1);
return statearr_10975;
});
var state_machine__5594__auto____1 = (function (state_10970){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10976){if((e10976 instanceof Object))
{var ex__5597__auto__ = e10976;var statearr_10977_10980 = state_10970;(statearr_10977_10980[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10970);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10981 = state_10970;
state_10970 = G__10981;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10970){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___10979,error_msg))
})();var state__5610__auto__ = (function (){var statearr_10978 = f__5609__auto__.call(null);(statearr_10978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___10979);
return statearr_10978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___10979,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_11027){var state_val_11028 = (state_11027[1]);if((state_val_11028 === 5))
{var inst_11019 = (state_11027[7]);var inst_11022 = cmd.core.unauthorized.call(null,inst_11019);var state_11027__$1 = state_11027;var statearr_11029_11042 = state_11027__$1;(statearr_11029_11042[2] = inst_11022);
(statearr_11029_11042[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 4))
{var inst_11020 = cmd.core.logged_in.call(null,username,auth_token);var state_11027__$1 = state_11027;var statearr_11030_11043 = state_11027__$1;(statearr_11030_11043[2] = inst_11020);
(statearr_11030_11043[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 3))
{var inst_11025 = (state_11027[2]);var state_11027__$1 = state_11027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11027__$1,inst_11025);
} else
{if((state_val_11028 === 2))
{var inst_11017 = (state_11027[2]);var inst_11018 = cljs.core.nth.call(null,inst_11017,0,null);var inst_11019 = cljs.core.nth.call(null,inst_11017,1,null);var state_11027__$1 = (function (){var statearr_11031 = state_11027;(statearr_11031[7] = inst_11019);
return statearr_11031;
})();var G__11032_11044 = inst_11018;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11032_11044))
{var statearr_11033_11045 = state_11027__$1;(statearr_11033_11045[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11032_11044))
{var statearr_11034_11046 = state_11027__$1;(statearr_11034_11046[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11018)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 1))
{var inst_11013 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_11014 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_11015 = cmd.lib.GET.call(null,inst_11013,inst_11014);var state_11027__$1 = state_11027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11027__$1,2,inst_11015);
} else
{return null;
}
}
}
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_11038 = [null,null,null,null,null,null,null,null];(statearr_11038[0] = state_machine__5594__auto__);
(statearr_11038[1] = 1);
return statearr_11038;
});
var state_machine__5594__auto____1 = (function (state_11027){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_11027);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e11039){if((e11039 instanceof Object))
{var ex__5597__auto__ = e11039;var statearr_11040_11047 = state_11027;(statearr_11040_11047[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11027);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11048 = state_11027;
state_11027 = G__11048;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_11027){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_11027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_11041 = f__5609__auto__.call(null);(statearr_11041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_11041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
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
cmd.core.set_location_hash = (function set_location_hash(hash_hash){var gist_id = (function (){var or__3451__auto__ = hash_hash.call(null,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999));if(cljs.core.truth_(or__3451__auto__))
{return or__3451__auto__;
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
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__11050 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__11050,0,null);var first_file = cljs.core.nth.call(null,vec__11050,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});

//# sourceMappingURL=core.js.map