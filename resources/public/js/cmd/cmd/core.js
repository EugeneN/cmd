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
cmd.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),0,new cljs.core.Keyword(null,"messages","messages",551810238),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Welcome to CMD :-)"], null)], null));
cmd.core.AppBus = cljs.core.async.chan.call(null,1);
cmd.core.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.core.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,cljs.core.select_keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace","ace",1014000629),new cljs.core.Keyword(null,"worker","worker",4526786288),new cljs.core.Keyword(null,"motd","motd",1017261828),new cljs.core.Keyword(null,"active-requests","active-requests",3616398877)], null));
});
cmd.core.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.core.say = (function say(msg){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.conj.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238)),msg));
var c__5608__auto___8567 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___8567){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___8567){
return (function (state_8558){var state_val_8559 = (state_8558[1]);if((state_val_8559 === 2))
{var inst_8556 = (state_8558[2]);var state_8558__$1 = state_8558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8558__$1,inst_8556);
} else
{if((state_val_8559 === 1))
{var inst_8553 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_8554 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8553,null));var state_8558__$1 = state_8558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8558__$1,2,cmd.core.AppBus,inst_8554);
} else
{return null;
}
}
});})(c__5608__auto___8567))
;return ((function (switch__5593__auto__,c__5608__auto___8567){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8563 = [null,null,null,null,null,null,null];(statearr_8563[0] = state_machine__5594__auto__);
(statearr_8563[1] = 1);
return statearr_8563;
});
var state_machine__5594__auto____1 = (function (state_8558){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8558);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8564){if((e8564 instanceof Object))
{var ex__5597__auto__ = e8564;var statearr_8565_8568 = state_8558;(statearr_8565_8568[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8558);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8569 = state_8558;
state_8558 = G__8569;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8558){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___8567))
})();var state__5610__auto__ = (function (){var statearr_8566 = f__5609__auto__.call(null);(statearr_8566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___8567);
return statearr_8566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___8567))
);
return console.log(msg);
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,data,worker,ch){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,data,worker,ch){
return (function (state_8592){var state_val_8593 = (state_8592[1]);if((state_val_8593 === 2))
{var inst_8589 = (state_8592[2]);var inst_8590 = cljs.core.async.close_BANG_.call(null,ch);var state_8592__$1 = (function (){var statearr_8594 = state_8592;(statearr_8594[7] = inst_8589);
return statearr_8594;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8592__$1,inst_8590);
} else
{if((state_val_8593 === 1))
{var inst_8586 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_8587 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8586,null));var state_8592__$1 = state_8592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8592__$1,2,ch,inst_8587);
} else
{return null;
}
}
});})(c__5608__auto__,data,worker,ch))
;return ((function (switch__5593__auto__,c__5608__auto__,data,worker,ch){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8598 = [null,null,null,null,null,null,null,null];(statearr_8598[0] = state_machine__5594__auto__);
(statearr_8598[1] = 1);
return statearr_8598;
});
var state_machine__5594__auto____1 = (function (state_8592){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8592);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8599){if((e8599 instanceof Object))
{var ex__5597__auto__ = e8599;var statearr_8600_8602 = state_8592;(statearr_8600_8602[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8592);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8603 = state_8592;
state_8592 = G__8603;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8592){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,data,worker,ch))
})();var state__5610__auto__ = (function (){var statearr_8601 = f__5609__auto__.call(null);(statearr_8601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8601;
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
return (function (state_8645){var state_val_8646 = (state_8645[1]);if((state_val_8646 === 5))
{var inst_8640 = cb.call(null,"<Error>");var state_8645__$1 = state_8645;var statearr_8647_8660 = state_8645__$1;(statearr_8647_8660[2] = inst_8640);
(statearr_8647_8660[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8646 === 4))
{var inst_8637 = (state_8645[7]);var inst_8638 = cb.call(null,inst_8637);var state_8645__$1 = state_8645;var statearr_8648_8661 = state_8645__$1;(statearr_8648_8661[2] = inst_8638);
(statearr_8648_8661[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8646 === 3))
{var inst_8643 = (state_8645[2]);var state_8645__$1 = state_8645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8645__$1,inst_8643);
} else
{if((state_val_8646 === 2))
{var inst_8635 = (state_8645[2]);var inst_8636 = cljs.core.nth.call(null,inst_8635,0,null);var inst_8637 = cljs.core.nth.call(null,inst_8635,1,null);var state_8645__$1 = (function (){var statearr_8649 = state_8645;(statearr_8649[7] = inst_8637);
return statearr_8649;
})();var G__8650_8662 = inst_8636;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8650_8662))
{var statearr_8651_8663 = state_8645__$1;(statearr_8651_8663[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8650_8662))
{var statearr_8652_8664 = state_8645__$1;(statearr_8652_8664[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8636)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8646 === 1))
{var inst_8633 = cmd.core.wmd__GT_html.call(null,md);var state_8645__$1 = state_8645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8645__$1,2,inst_8633);
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
var state_machine__5594__auto____0 = (function (){var statearr_8656 = [null,null,null,null,null,null,null,null];(statearr_8656[0] = state_machine__5594__auto__);
(statearr_8656[1] = 1);
return statearr_8656;
});
var state_machine__5594__auto____1 = (function (state_8645){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8645);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8657){if((e8657 instanceof Object))
{var ex__5597__auto__ = e8657;var statearr_8658_8665 = state_8645;(statearr_8658_8665[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8657;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8666 = state_8645;
state_8645 = G__8666;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8645){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8659 = f__5609__auto__.call(null);(statearr_8659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj8670 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj8670;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj8674 = {"Content-Type":"application/json"};return obj8674;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__8675_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__8675_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.core.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8738){var state_val_8739 = (state_8738[1]);if((state_val_8739 === 6))
{var inst_8725 = (state_8738[7]);var inst_8733 = cmd.core.handle_io_error.call(null,inst_8725);var state_8738__$1 = state_8738;var statearr_8740_8754 = state_8738__$1;(statearr_8740_8754[2] = inst_8733);
(statearr_8740_8754[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8739 === 5))
{var inst_8726 = (state_8738[8]);var inst_8730 = (state_8738[2]);var inst_8731 = inst_8726.call(null,inst_8730);var state_8738__$1 = state_8738;var statearr_8741_8755 = state_8738__$1;(statearr_8741_8755[2] = inst_8731);
(statearr_8741_8755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8739 === 4))
{var inst_8725 = (state_8738[7]);var inst_8726 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_8725);var inst_8727 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_8728 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8727,null));var state_8738__$1 = (function (){var statearr_8742 = state_8738;(statearr_8742[8] = inst_8726);
return statearr_8742;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8738__$1,5,cmd.core.AppBus,inst_8728);
} else
{if((state_val_8739 === 3))
{var inst_8736 = (state_8738[2]);var state_8738__$1 = state_8738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8738__$1,inst_8736);
} else
{if((state_val_8739 === 2))
{var inst_8722 = (state_8738[2]);var inst_8723 = cljs.core.nth.call(null,inst_8722,0,null);var inst_8724 = cljs.core.nth.call(null,inst_8722,1,null);var inst_8725 = cmd.utils.raw__GT_clj.call(null,inst_8724);var state_8738__$1 = (function (){var statearr_8743 = state_8738;(statearr_8743[7] = inst_8725);
return statearr_8743;
})();var G__8744_8756 = inst_8723;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8744_8756))
{var statearr_8745_8757 = state_8738__$1;(statearr_8745_8757[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8744_8756))
{var statearr_8746_8758 = state_8738__$1;(statearr_8746_8758[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8723)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8739 === 1))
{var inst_8716 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8717 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8718 = [cljs.core.str("/users/"),cljs.core.str(inst_8716),cljs.core.str("/gists")].join('');var inst_8719 = cmd.core.auth_param_fallback.call(null,inst_8716,inst_8717);var inst_8720 = cmd.lib.GET.call(null,inst_8718,inst_8719);var state_8738__$1 = state_8738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8738__$1,2,inst_8720);
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
var state_machine__5594__auto____0 = (function (){var statearr_8750 = [null,null,null,null,null,null,null,null,null];(statearr_8750[0] = state_machine__5594__auto__);
(statearr_8750[1] = 1);
return statearr_8750;
});
var state_machine__5594__auto____1 = (function (state_8738){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8738);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8751){if((e8751 instanceof Object))
{var ex__5597__auto__ = e8751;var statearr_8752_8759 = state_8738;(statearr_8752_8759[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8738);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8760 = state_8738;
state_8738 = G__8760;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8738){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8753 = f__5609__auto__.call(null);(statearr_8753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.get_motd = (function get_motd(gist_id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8835){var state_val_8836 = (state_8835[1]);if((state_val_8836 === 6))
{var inst_8828 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_8829 = cmd.core.say.call(null,"Sorry, can't load motd");var inst_8830 = inst_8828.call(null,inst_8829);var state_8835__$1 = state_8835;var statearr_8837_8851 = state_8835__$1;(statearr_8837_8851[2] = inst_8830);
(statearr_8837_8851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8836 === 5))
{var inst_8821 = (state_8835[7]);var inst_8825 = (state_8835[2]);var inst_8826 = inst_8821.call(null,inst_8825);var state_8835__$1 = state_8835;var statearr_8838_8852 = state_8835__$1;(statearr_8838_8852[2] = inst_8826);
(statearr_8838_8852[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8836 === 4))
{var inst_8813 = (state_8835[8]);var inst_8815 = cmd.utils.raw__GT_clj.call(null,inst_8813);var inst_8816 = inst_8815.call(null,"files");var inst_8817 = cljs.core.first.call(null,inst_8816);var inst_8818 = cljs.core.nth.call(null,inst_8817,0,null);var inst_8819 = cljs.core.nth.call(null,inst_8817,1,null);var inst_8820 = inst_8819.call(null,"content");var inst_8821 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_8820);var inst_8822 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_8820];var inst_8823 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8822,null));var state_8835__$1 = (function (){var statearr_8839 = state_8835;(statearr_8839[9] = inst_8818);
(statearr_8839[7] = inst_8821);
return statearr_8839;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8835__$1,5,cmd.core.AppBus,inst_8823);
} else
{if((state_val_8836 === 3))
{var inst_8833 = (state_8835[2]);var state_8835__$1 = state_8835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8835__$1,inst_8833);
} else
{if((state_val_8836 === 2))
{var inst_8811 = (state_8835[2]);var inst_8812 = cljs.core.nth.call(null,inst_8811,0,null);var inst_8813 = cljs.core.nth.call(null,inst_8811,1,null);var state_8835__$1 = (function (){var statearr_8840 = state_8835;(statearr_8840[8] = inst_8813);
return statearr_8840;
})();var G__8841_8853 = inst_8812;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8841_8853))
{var statearr_8842_8854 = state_8835__$1;(statearr_8842_8854[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8841_8853))
{var statearr_8843_8855 = state_8835__$1;(statearr_8843_8855[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8812)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8836 === 1))
{var inst_8807 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_8808 = cmd.core.auth_param_anon.call(null);var inst_8809 = cmd.lib.GET.call(null,inst_8807,inst_8808);var state_8835__$1 = state_8835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8835__$1,2,inst_8809);
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
var state_machine__5594__auto____0 = (function (){var statearr_8847 = [null,null,null,null,null,null,null,null,null,null];(statearr_8847[0] = state_machine__5594__auto__);
(statearr_8847[1] = 1);
return statearr_8847;
});
var state_machine__5594__auto____1 = (function (state_8835){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8835);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8848){if((e8848 instanceof Object))
{var ex__5597__auto__ = e8848;var statearr_8849_8856 = state_8835;(statearr_8849_8856[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8857 = state_8835;
state_8835 = G__8857;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8835){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8850 = f__5609__auto__.call(null);(statearr_8850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8936){var state_val_8937 = (state_8936[1]);if((state_val_8937 === 6))
{var inst_8914 = (state_8936[7]);var inst_8930 = cmd.utils.raw__GT_clj.call(null,inst_8914);var inst_8931 = cmd.core.handle_io_error.call(null,inst_8930);var state_8936__$1 = state_8936;var statearr_8938_8952 = state_8936__$1;(statearr_8938_8952[2] = inst_8931);
(statearr_8938_8952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8937 === 5))
{var inst_8928 = (state_8936[2]);var state_8936__$1 = state_8936;var statearr_8939_8953 = state_8936__$1;(statearr_8939_8953[2] = inst_8928);
(statearr_8939_8953[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8937 === 4))
{var inst_8914 = (state_8936[7]);var inst_8916 = cmd.utils.raw__GT_clj.call(null,inst_8914);var inst_8917 = inst_8916.call(null,"files");var inst_8918 = cljs.core.first.call(null,inst_8917);var inst_8919 = cljs.core.nth.call(null,inst_8918,0,null);var inst_8920 = cljs.core.nth.call(null,inst_8918,1,null);var inst_8921 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_8919);var inst_8922 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8916);var inst_8923 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_8924 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_8925 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_8926 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8925,null));var state_8936__$1 = (function (){var statearr_8940 = state_8936;(statearr_8940[8] = inst_8924);
(statearr_8940[9] = inst_8921);
(statearr_8940[10] = inst_8920);
(statearr_8940[11] = inst_8923);
(statearr_8940[12] = inst_8922);
return statearr_8940;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8936__$1,5,cmd.core.AppBus,inst_8926);
} else
{if((state_val_8937 === 3))
{var inst_8934 = (state_8936[2]);var state_8936__$1 = state_8936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8936__$1,inst_8934);
} else
{if((state_val_8937 === 2))
{var inst_8912 = (state_8936[2]);var inst_8913 = cljs.core.nth.call(null,inst_8912,0,null);var inst_8914 = cljs.core.nth.call(null,inst_8912,1,null);var state_8936__$1 = (function (){var statearr_8941 = state_8936;(statearr_8941[7] = inst_8914);
return statearr_8941;
})();var G__8942_8954 = inst_8913;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8942_8954))
{var statearr_8943_8955 = state_8936__$1;(statearr_8943_8955[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8942_8954))
{var statearr_8944_8956 = state_8936__$1;(statearr_8944_8956[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8913)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8937 === 1))
{var inst_8906 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_8907 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8908 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8909 = cmd.core.auth_param_fallback.call(null,inst_8907,inst_8908);var inst_8910 = cmd.lib.GET.call(null,inst_8906,inst_8909);var state_8936__$1 = state_8936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8936__$1,2,inst_8910);
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
var state_machine__5594__auto____0 = (function (){var statearr_8948 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8948[0] = state_machine__5594__auto__);
(statearr_8948[1] = 1);
return statearr_8948;
});
var state_machine__5594__auto____1 = (function (state_8936){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8936);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8949){if((e8949 instanceof Object))
{var ex__5597__auto__ = e8949;var statearr_8950_8957 = state_8936;(statearr_8950_8957[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8958 = state_8936;
state_8936 = G__8958;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8936){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8951 = f__5609__auto__.call(null);(statearr_8951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9015){var state_val_9016 = (state_9015[1]);if((state_val_9016 === 5))
{var inst_9005 = (state_9015[7]);var inst_9010 = cmd.core.handle_io_error.call(null,inst_9005);var state_9015__$1 = state_9015;var statearr_9017_9031 = state_9015__$1;(statearr_9017_9031[2] = inst_9010);
(statearr_9017_9031[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9016 === 4))
{var inst_9005 = (state_9015[7]);var inst_9006 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9005);var inst_9007 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_9008 = cmd.core.say.call(null,inst_9007);var state_9015__$1 = (function (){var statearr_9018 = state_9015;(statearr_9018[8] = inst_9006);
return statearr_9018;
})();var statearr_9019_9032 = state_9015__$1;(statearr_9019_9032[2] = inst_9008);
(statearr_9019_9032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9016 === 3))
{var inst_9013 = (state_9015[2]);var state_9015__$1 = state_9015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9015__$1,inst_9013);
} else
{if((state_val_9016 === 2))
{var inst_9002 = (state_9015[2]);var inst_9003 = cljs.core.nth.call(null,inst_9002,0,null);var inst_9004 = cljs.core.nth.call(null,inst_9002,1,null);var inst_9005 = cmd.utils.raw__GT_clj.call(null,inst_9004);var state_9015__$1 = (function (){var statearr_9020 = state_9015;(statearr_9020[7] = inst_9005);
return statearr_9020;
})();var G__9021_9033 = inst_9003;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9021_9033))
{var statearr_9022_9034 = state_9015__$1;(statearr_9022_9034[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9021_9033))
{var statearr_9023_9035 = state_9015__$1;(statearr_9023_9035[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9003)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9016 === 1))
{var inst_8996 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_8997 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8998 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8999 = cmd.core.auth_param_strict.call(null,inst_8997,inst_8998);var inst_9000 = cmd.lib.PATCH.call(null,inst_8996,new_content,inst_8999);var state_9015__$1 = state_9015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9015__$1,2,inst_9000);
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
var state_machine__5594__auto____0 = (function (){var statearr_9027 = [null,null,null,null,null,null,null,null,null];(statearr_9027[0] = state_machine__5594__auto__);
(statearr_9027[1] = 1);
return statearr_9027;
});
var state_machine__5594__auto____1 = (function (state_9015){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9015);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9028){if((e9028 instanceof Object))
{var ex__5597__auto__ = e9028;var statearr_9029_9036 = state_9015;(statearr_9029_9036[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9037 = state_9015;
state_9015 = G__9037;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9015){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9030 = f__5609__auto__.call(null);(statearr_9030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9098){var state_val_9099 = (state_9098[1]);if((state_val_9099 === 5))
{var inst_9085 = (state_9098[7]);var inst_9093 = cmd.core.handle_io_error.call(null,inst_9085);var state_9098__$1 = state_9098;var statearr_9100_9114 = state_9098__$1;(statearr_9100_9114[2] = inst_9093);
(statearr_9100_9114[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9099 === 4))
{var inst_9085 = (state_9098[7]);var inst_9086 = inst_9085.call(null,"id");var inst_9087 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_9088 = cmd.core.load_gists.call(null);var inst_9089 = cmd.core.load_gist.call(null,inst_9086);var inst_9090 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_9086)].join('');var inst_9091 = cmd.core.say.call(null,inst_9090);var state_9098__$1 = (function (){var statearr_9101 = state_9098;(statearr_9101[8] = inst_9088);
(statearr_9101[9] = inst_9087);
(statearr_9101[10] = inst_9089);
return statearr_9101;
})();var statearr_9102_9115 = state_9098__$1;(statearr_9102_9115[2] = inst_9091);
(statearr_9102_9115[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9099 === 3))
{var inst_9096 = (state_9098[2]);var state_9098__$1 = state_9098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9098__$1,inst_9096);
} else
{if((state_val_9099 === 2))
{var inst_9082 = (state_9098[2]);var inst_9083 = cljs.core.nth.call(null,inst_9082,0,null);var inst_9084 = cljs.core.nth.call(null,inst_9082,1,null);var inst_9085 = cmd.utils.raw__GT_clj.call(null,inst_9084);var state_9098__$1 = (function (){var statearr_9103 = state_9098;(statearr_9103[7] = inst_9085);
return statearr_9103;
})();var G__9104_9116 = inst_9083;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9104_9116))
{var statearr_9105_9117 = state_9098__$1;(statearr_9105_9117[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9104_9116))
{var statearr_9106_9118 = state_9098__$1;(statearr_9106_9118[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9083)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9099 === 1))
{var inst_9077 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9078 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9079 = cmd.core.auth_param_strict.call(null,inst_9077,inst_9078);var inst_9080 = cmd.lib.POST.call(null,"/gists",new_content,inst_9079);var state_9098__$1 = state_9098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9098__$1,2,inst_9080);
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
var state_machine__5594__auto____0 = (function (){var statearr_9110 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9110[0] = state_machine__5594__auto__);
(statearr_9110[1] = 1);
return statearr_9110;
});
var state_machine__5594__auto____1 = (function (state_9098){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9098);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9111){if((e9111 instanceof Object))
{var ex__5597__auto__ = e9111;var statearr_9112_9119 = state_9098;(statearr_9112_9119[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9111;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9120 = state_9098;
state_9098 = G__9120;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9098){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9113 = f__5609__auto__.call(null);(statearr_9113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9113;
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
return (function (state_9140){var state_val_9141 = (state_9140[1]);if((state_val_9141 === 2))
{var inst_9138 = (state_9140[2]);var state_9140__$1 = state_9140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9140__$1,inst_9138);
} else
{if((state_val_9141 === 1))
{var inst_9135 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9136 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9135,null));var state_9140__$1 = state_9140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9140__$1,2,cmd.core.AppBus,inst_9136);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9145 = [null,null,null,null,null,null,null];(statearr_9145[0] = state_machine__5594__auto__);
(statearr_9145[1] = 1);
return statearr_9145;
});
var state_machine__5594__auto____1 = (function (state_9140){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9140);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9146){if((e9146 instanceof Object))
{var ex__5597__auto__ = e9146;var statearr_9147_9149 = state_9140;(statearr_9147_9149[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9140);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9150 = state_9140;
state_9140 = G__9150;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9140){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9148 = f__5609__auto__.call(null);(statearr_9148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__5608__auto___9179 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___9179,error_msg){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___9179,error_msg){
return (function (state_9170){var state_val_9171 = (state_9170[1]);if((state_val_9171 === 2))
{var inst_9168 = (state_9170[2]);var state_9170__$1 = state_9170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9170__$1,inst_9168);
} else
{if((state_val_9171 === 1))
{var inst_9165 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_9166 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9165,null));var state_9170__$1 = state_9170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9170__$1,2,cmd.core.AppBus,inst_9166);
} else
{return null;
}
}
});})(c__5608__auto___9179,error_msg))
;return ((function (switch__5593__auto__,c__5608__auto___9179,error_msg){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9175 = [null,null,null,null,null,null,null];(statearr_9175[0] = state_machine__5594__auto__);
(statearr_9175[1] = 1);
return statearr_9175;
});
var state_machine__5594__auto____1 = (function (state_9170){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9170);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9176){if((e9176 instanceof Object))
{var ex__5597__auto__ = e9176;var statearr_9177_9180 = state_9170;(statearr_9177_9180[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9176;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9181 = state_9170;
state_9170 = G__9181;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9170){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___9179,error_msg))
})();var state__5610__auto__ = (function (){var statearr_9178 = f__5609__auto__.call(null);(statearr_9178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___9179);
return statearr_9178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___9179,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9227){var state_val_9228 = (state_9227[1]);if((state_val_9228 === 5))
{var inst_9219 = (state_9227[7]);var inst_9222 = cmd.core.unauthorized.call(null,inst_9219);var state_9227__$1 = state_9227;var statearr_9229_9242 = state_9227__$1;(statearr_9229_9242[2] = inst_9222);
(statearr_9229_9242[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9228 === 4))
{var inst_9220 = cmd.core.logged_in.call(null,username,auth_token);var state_9227__$1 = state_9227;var statearr_9230_9243 = state_9227__$1;(statearr_9230_9243[2] = inst_9220);
(statearr_9230_9243[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9228 === 3))
{var inst_9225 = (state_9227[2]);var state_9227__$1 = state_9227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9227__$1,inst_9225);
} else
{if((state_val_9228 === 2))
{var inst_9217 = (state_9227[2]);var inst_9218 = cljs.core.nth.call(null,inst_9217,0,null);var inst_9219 = cljs.core.nth.call(null,inst_9217,1,null);var state_9227__$1 = (function (){var statearr_9231 = state_9227;(statearr_9231[7] = inst_9219);
return statearr_9231;
})();var G__9232_9244 = inst_9218;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9232_9244))
{var statearr_9233_9245 = state_9227__$1;(statearr_9233_9245[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9232_9244))
{var statearr_9234_9246 = state_9227__$1;(statearr_9234_9246[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9218)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9228 === 1))
{var inst_9213 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9214 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_9215 = cmd.lib.GET.call(null,inst_9213,inst_9214);var state_9227__$1 = state_9227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9227__$1,2,inst_9215);
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
var state_machine__5594__auto____0 = (function (){var statearr_9238 = [null,null,null,null,null,null,null,null];(statearr_9238[0] = state_machine__5594__auto__);
(statearr_9238[1] = 1);
return statearr_9238;
});
var state_machine__5594__auto____1 = (function (state_9227){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9227);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9239){if((e9239 instanceof Object))
{var ex__5597__auto__ = e9239;var statearr_9240_9247 = state_9227;(statearr_9240_9247[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9227);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9248 = state_9227;
state_9227 = G__9248;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9227){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9241 = f__5609__auto__.call(null);(statearr_9241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9241;
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
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9250 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9250,0,null);var first_file = cljs.core.nth.call(null,vec__9250,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});

//# sourceMappingURL=core.js.map