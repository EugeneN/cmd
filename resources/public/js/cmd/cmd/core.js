// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.core');
goog.require('cljs.core');
goog.require('cmd.defs');
goog.require('cmd.utils');
goog.require('cljs.core.async');
goog.require('cmd.lib');
goog.require('cljs.core.async');
goog.require('cmd.defs');
goog.require('cmd.lib');
goog.require('cmd.utils');
cmd.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),0], null));
cmd.core.AppBus = cljs.core.async.chan.call(null,1);
cmd.core.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.core.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,cljs.core.select_keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace","ace",1014000629),new cljs.core.Keyword(null,"worker","worker",4526786288),new cljs.core.Keyword(null,"motd","motd",1017261828),new cljs.core.Keyword(null,"active-requests","active-requests",3616398877)], null));
});
cmd.core.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,data,worker,ch){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,data,worker,ch){
return (function (state_8561){var state_val_8562 = (state_8561[1]);if((state_val_8562 === 2))
{var inst_8558 = (state_8561[2]);var inst_8559 = cljs.core.async.close_BANG_.call(null,ch);var state_8561__$1 = (function (){var statearr_8563 = state_8561;(statearr_8563[7] = inst_8558);
return statearr_8563;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8561__$1,inst_8559);
} else
{if((state_val_8562 === 1))
{var inst_8555 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_8556 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8555,null));var state_8561__$1 = state_8561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8561__$1,2,ch,inst_8556);
} else
{return null;
}
}
});})(c__5608__auto__,data,worker,ch))
;return ((function (switch__5593__auto__,c__5608__auto__,data,worker,ch){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8567 = [null,null,null,null,null,null,null,null];(statearr_8567[0] = state_machine__5594__auto__);
(statearr_8567[1] = 1);
return statearr_8567;
});
var state_machine__5594__auto____1 = (function (state_8561){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8561);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8568){if((e8568 instanceof Object))
{var ex__5597__auto__ = e8568;var statearr_8569_8571 = state_8561;(statearr_8569_8571[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8572 = state_8561;
state_8561 = G__8572;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8561){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,data,worker,ch))
})();var state__5610__auto__ = (function (){var statearr_8570 = f__5609__auto__.call(null);(statearr_8570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8570;
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
return (function (state_8614){var state_val_8615 = (state_8614[1]);if((state_val_8615 === 5))
{var inst_8609 = cb.call(null,"<Error>");var state_8614__$1 = state_8614;var statearr_8616_8629 = state_8614__$1;(statearr_8616_8629[2] = inst_8609);
(statearr_8616_8629[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8615 === 4))
{var inst_8606 = (state_8614[7]);var inst_8607 = cb.call(null,inst_8606);var state_8614__$1 = state_8614;var statearr_8617_8630 = state_8614__$1;(statearr_8617_8630[2] = inst_8607);
(statearr_8617_8630[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8615 === 3))
{var inst_8612 = (state_8614[2]);var state_8614__$1 = state_8614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8614__$1,inst_8612);
} else
{if((state_val_8615 === 2))
{var inst_8604 = (state_8614[2]);var inst_8605 = cljs.core.nth.call(null,inst_8604,0,null);var inst_8606 = cljs.core.nth.call(null,inst_8604,1,null);var state_8614__$1 = (function (){var statearr_8618 = state_8614;(statearr_8618[7] = inst_8606);
return statearr_8618;
})();var G__8619_8631 = inst_8605;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8619_8631))
{var statearr_8620_8632 = state_8614__$1;(statearr_8620_8632[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8619_8631))
{var statearr_8621_8633 = state_8614__$1;(statearr_8621_8633[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8605)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8615 === 1))
{var inst_8602 = cmd.core.wmd__GT_html.call(null,md);var state_8614__$1 = state_8614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8614__$1,2,inst_8602);
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
var state_machine__5594__auto____0 = (function (){var statearr_8625 = [null,null,null,null,null,null,null,null];(statearr_8625[0] = state_machine__5594__auto__);
(statearr_8625[1] = 1);
return statearr_8625;
});
var state_machine__5594__auto____1 = (function (state_8614){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8614);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8626){if((e8626 instanceof Object))
{var ex__5597__auto__ = e8626;var statearr_8627_8634 = state_8614;(statearr_8627_8634[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8635 = state_8614;
state_8614 = G__8635;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8614){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8628 = f__5609__auto__.call(null);(statearr_8628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj8639 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj8639;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj8643 = {"Content-Type":"application/json"};return obj8643;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__8644_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__8644_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.utils.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8707){var state_val_8708 = (state_8707[1]);if((state_val_8708 === 6))
{var inst_8694 = (state_8707[7]);var inst_8702 = cmd.core.handle_io_error.call(null,inst_8694);var state_8707__$1 = state_8707;var statearr_8709_8723 = state_8707__$1;(statearr_8709_8723[2] = inst_8702);
(statearr_8709_8723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8708 === 5))
{var inst_8695 = (state_8707[8]);var inst_8699 = (state_8707[2]);var inst_8700 = inst_8695.call(null,inst_8699);var state_8707__$1 = state_8707;var statearr_8710_8724 = state_8707__$1;(statearr_8710_8724[2] = inst_8700);
(statearr_8710_8724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8708 === 4))
{var inst_8694 = (state_8707[7]);var inst_8695 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_8694);var inst_8696 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_8697 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8696,null));var state_8707__$1 = (function (){var statearr_8711 = state_8707;(statearr_8711[8] = inst_8695);
return statearr_8711;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8707__$1,5,cmd.core.AppBus,inst_8697);
} else
{if((state_val_8708 === 3))
{var inst_8705 = (state_8707[2]);var state_8707__$1 = state_8707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8707__$1,inst_8705);
} else
{if((state_val_8708 === 2))
{var inst_8691 = (state_8707[2]);var inst_8692 = cljs.core.nth.call(null,inst_8691,0,null);var inst_8693 = cljs.core.nth.call(null,inst_8691,1,null);var inst_8694 = cmd.utils.raw__GT_clj.call(null,inst_8693);var state_8707__$1 = (function (){var statearr_8712 = state_8707;(statearr_8712[7] = inst_8694);
return statearr_8712;
})();var G__8713_8725 = inst_8692;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8713_8725))
{var statearr_8714_8726 = state_8707__$1;(statearr_8714_8726[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8713_8725))
{var statearr_8715_8727 = state_8707__$1;(statearr_8715_8727[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8692)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8708 === 1))
{var inst_8685 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8686 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8687 = [cljs.core.str("/users/"),cljs.core.str(inst_8685),cljs.core.str("/gists")].join('');var inst_8688 = cmd.core.auth_param_fallback.call(null,inst_8685,inst_8686);var inst_8689 = cmd.lib.GET.call(null,inst_8687,inst_8688);var state_8707__$1 = state_8707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8707__$1,2,inst_8689);
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
var state_machine__5594__auto____0 = (function (){var statearr_8719 = [null,null,null,null,null,null,null,null,null];(statearr_8719[0] = state_machine__5594__auto__);
(statearr_8719[1] = 1);
return statearr_8719;
});
var state_machine__5594__auto____1 = (function (state_8707){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8707);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8720){if((e8720 instanceof Object))
{var ex__5597__auto__ = e8720;var statearr_8721_8728 = state_8707;(statearr_8721_8728[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8707);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8720;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8729 = state_8707;
state_8707 = G__8729;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8707){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8722 = f__5609__auto__.call(null);(statearr_8722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.get_motd = (function get_motd(gist_id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8806){var state_val_8807 = (state_8806[1]);if((state_val_8807 === 6))
{var inst_8799 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_8800 = cmd.utils.say.call(null,"Error getting remote motd");var inst_8801 = inst_8799.call(null,inst_8800);var state_8806__$1 = state_8806;var statearr_8808_8822 = state_8806__$1;(statearr_8808_8822[2] = inst_8801);
(statearr_8808_8822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8807 === 5))
{var inst_8791 = (state_8806[7]);var inst_8795 = (state_8806[2]);var inst_8796 = cmd.utils.say.call(null,"Loaded remote motd");var inst_8797 = inst_8791.call(null,inst_8795,inst_8796);var state_8806__$1 = state_8806;var statearr_8809_8823 = state_8806__$1;(statearr_8809_8823[2] = inst_8797);
(statearr_8809_8823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8807 === 4))
{var inst_8783 = (state_8806[8]);var inst_8785 = cmd.utils.raw__GT_clj.call(null,inst_8783);var inst_8786 = inst_8785.call(null,"files");var inst_8787 = cljs.core.first.call(null,inst_8786);var inst_8788 = cljs.core.nth.call(null,inst_8787,0,null);var inst_8789 = cljs.core.nth.call(null,inst_8787,1,null);var inst_8790 = inst_8789.call(null,"content");var inst_8791 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_8790);var inst_8792 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_8790];var inst_8793 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8792,null));var state_8806__$1 = (function (){var statearr_8810 = state_8806;(statearr_8810[9] = inst_8788);
(statearr_8810[7] = inst_8791);
return statearr_8810;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8806__$1,5,cmd.core.AppBus,inst_8793);
} else
{if((state_val_8807 === 3))
{var inst_8804 = (state_8806[2]);var state_8806__$1 = state_8806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8806__$1,inst_8804);
} else
{if((state_val_8807 === 2))
{var inst_8781 = (state_8806[2]);var inst_8782 = cljs.core.nth.call(null,inst_8781,0,null);var inst_8783 = cljs.core.nth.call(null,inst_8781,1,null);var state_8806__$1 = (function (){var statearr_8811 = state_8806;(statearr_8811[8] = inst_8783);
return statearr_8811;
})();var G__8812_8824 = inst_8782;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8812_8824))
{var statearr_8813_8825 = state_8806__$1;(statearr_8813_8825[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8812_8824))
{var statearr_8814_8826 = state_8806__$1;(statearr_8814_8826[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8782)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8807 === 1))
{var inst_8777 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_8778 = cmd.core.auth_param_anon.call(null);var inst_8779 = cmd.lib.GET.call(null,inst_8777,inst_8778);var state_8806__$1 = state_8806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8806__$1,2,inst_8779);
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
var state_machine__5594__auto____0 = (function (){var statearr_8818 = [null,null,null,null,null,null,null,null,null,null];(statearr_8818[0] = state_machine__5594__auto__);
(statearr_8818[1] = 1);
return statearr_8818;
});
var state_machine__5594__auto____1 = (function (state_8806){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8806);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8819){if((e8819 instanceof Object))
{var ex__5597__auto__ = e8819;var statearr_8820_8827 = state_8806;(statearr_8820_8827[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8806);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8828 = state_8806;
state_8806 = G__8828;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8806){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8821 = f__5609__auto__.call(null);(statearr_8821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8907){var state_val_8908 = (state_8907[1]);if((state_val_8908 === 6))
{var inst_8885 = (state_8907[7]);var inst_8901 = cmd.utils.raw__GT_clj.call(null,inst_8885);var inst_8902 = cmd.core.handle_io_error.call(null,inst_8901);var state_8907__$1 = state_8907;var statearr_8909_8923 = state_8907__$1;(statearr_8909_8923[2] = inst_8902);
(statearr_8909_8923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8908 === 5))
{var inst_8899 = (state_8907[2]);var state_8907__$1 = state_8907;var statearr_8910_8924 = state_8907__$1;(statearr_8910_8924[2] = inst_8899);
(statearr_8910_8924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8908 === 4))
{var inst_8885 = (state_8907[7]);var inst_8887 = cmd.utils.raw__GT_clj.call(null,inst_8885);var inst_8888 = inst_8887.call(null,"files");var inst_8889 = cljs.core.first.call(null,inst_8888);var inst_8890 = cljs.core.nth.call(null,inst_8889,0,null);var inst_8891 = cljs.core.nth.call(null,inst_8889,1,null);var inst_8892 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_8890);var inst_8893 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8887);var inst_8894 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_8895 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_8896 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_8897 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8896,null));var state_8907__$1 = (function (){var statearr_8911 = state_8907;(statearr_8911[8] = inst_8893);
(statearr_8911[9] = inst_8892);
(statearr_8911[10] = inst_8891);
(statearr_8911[11] = inst_8894);
(statearr_8911[12] = inst_8895);
return statearr_8911;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8907__$1,5,cmd.core.AppBus,inst_8897);
} else
{if((state_val_8908 === 3))
{var inst_8905 = (state_8907[2]);var state_8907__$1 = state_8907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8907__$1,inst_8905);
} else
{if((state_val_8908 === 2))
{var inst_8883 = (state_8907[2]);var inst_8884 = cljs.core.nth.call(null,inst_8883,0,null);var inst_8885 = cljs.core.nth.call(null,inst_8883,1,null);var state_8907__$1 = (function (){var statearr_8912 = state_8907;(statearr_8912[7] = inst_8885);
return statearr_8912;
})();var G__8913_8925 = inst_8884;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8913_8925))
{var statearr_8914_8926 = state_8907__$1;(statearr_8914_8926[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8913_8925))
{var statearr_8915_8927 = state_8907__$1;(statearr_8915_8927[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8884)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8908 === 1))
{var inst_8877 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_8878 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8879 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8880 = cmd.core.auth_param_fallback.call(null,inst_8878,inst_8879);var inst_8881 = cmd.lib.GET.call(null,inst_8877,inst_8880);var state_8907__$1 = state_8907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8907__$1,2,inst_8881);
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
var state_machine__5594__auto____0 = (function (){var statearr_8919 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8919[0] = state_machine__5594__auto__);
(statearr_8919[1] = 1);
return statearr_8919;
});
var state_machine__5594__auto____1 = (function (state_8907){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8907);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8920){if((e8920 instanceof Object))
{var ex__5597__auto__ = e8920;var statearr_8921_8928 = state_8907;(statearr_8921_8928[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8929 = state_8907;
state_8907 = G__8929;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8907){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8922 = f__5609__auto__.call(null);(statearr_8922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8981){var state_val_8982 = (state_8981[1]);if((state_val_8982 === 5))
{var inst_8973 = (state_8981[7]);var inst_8976 = cmd.core.handle_io_error.call(null,inst_8973);var state_8981__$1 = state_8981;var statearr_8983_8996 = state_8981__$1;(statearr_8983_8996[2] = inst_8976);
(statearr_8983_8996[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8982 === 4))
{var inst_8973 = (state_8981[7]);var inst_8974 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8973);var state_8981__$1 = state_8981;var statearr_8984_8997 = state_8981__$1;(statearr_8984_8997[2] = inst_8974);
(statearr_8984_8997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8982 === 3))
{var inst_8979 = (state_8981[2]);var state_8981__$1 = state_8981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8981__$1,inst_8979);
} else
{if((state_val_8982 === 2))
{var inst_8970 = (state_8981[2]);var inst_8971 = cljs.core.nth.call(null,inst_8970,0,null);var inst_8972 = cljs.core.nth.call(null,inst_8970,1,null);var inst_8973 = cmd.utils.raw__GT_clj.call(null,inst_8972);var state_8981__$1 = (function (){var statearr_8985 = state_8981;(statearr_8985[7] = inst_8973);
return statearr_8985;
})();var G__8986_8998 = inst_8971;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8986_8998))
{var statearr_8987_8999 = state_8981__$1;(statearr_8987_8999[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8986_8998))
{var statearr_8988_9000 = state_8981__$1;(statearr_8988_9000[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8971)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8982 === 1))
{var inst_8964 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_8965 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8966 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8967 = cmd.core.auth_param_strict.call(null,inst_8965,inst_8966);var inst_8968 = cmd.lib.PATCH.call(null,inst_8964,new_content,inst_8967);var state_8981__$1 = state_8981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8981__$1,2,inst_8968);
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
var state_machine__5594__auto____0 = (function (){var statearr_8992 = [null,null,null,null,null,null,null,null];(statearr_8992[0] = state_machine__5594__auto__);
(statearr_8992[1] = 1);
return statearr_8992;
});
var state_machine__5594__auto____1 = (function (state_8981){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8981);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8993){if((e8993 instanceof Object))
{var ex__5597__auto__ = e8993;var statearr_8994_9001 = state_8981;(statearr_8994_9001[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8981);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9002 = state_8981;
state_8981 = G__9002;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8981){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8995 = f__5609__auto__.call(null);(statearr_8995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9059){var state_val_9060 = (state_9059[1]);if((state_val_9060 === 5))
{var inst_9048 = (state_9059[7]);var inst_9054 = cmd.core.handle_io_error.call(null,inst_9048);var state_9059__$1 = state_9059;var statearr_9061_9075 = state_9059__$1;(statearr_9061_9075[2] = inst_9054);
(statearr_9061_9075[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9060 === 4))
{var inst_9048 = (state_9059[7]);var inst_9049 = inst_9048.call(null,"id");var inst_9050 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_9051 = cmd.core.load_gists.call(null);var inst_9052 = cmd.core.load_gist.call(null,inst_9049);var state_9059__$1 = (function (){var statearr_9062 = state_9059;(statearr_9062[8] = inst_9050);
(statearr_9062[9] = inst_9051);
return statearr_9062;
})();var statearr_9063_9076 = state_9059__$1;(statearr_9063_9076[2] = inst_9052);
(statearr_9063_9076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9060 === 3))
{var inst_9057 = (state_9059[2]);var state_9059__$1 = state_9059;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9059__$1,inst_9057);
} else
{if((state_val_9060 === 2))
{var inst_9045 = (state_9059[2]);var inst_9046 = cljs.core.nth.call(null,inst_9045,0,null);var inst_9047 = cljs.core.nth.call(null,inst_9045,1,null);var inst_9048 = cmd.utils.raw__GT_clj.call(null,inst_9047);var state_9059__$1 = (function (){var statearr_9064 = state_9059;(statearr_9064[7] = inst_9048);
return statearr_9064;
})();var G__9065_9077 = inst_9046;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9065_9077))
{var statearr_9066_9078 = state_9059__$1;(statearr_9066_9078[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9065_9077))
{var statearr_9067_9079 = state_9059__$1;(statearr_9067_9079[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9046)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9060 === 1))
{var inst_9040 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9041 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9042 = cmd.core.auth_param_strict.call(null,inst_9040,inst_9041);var inst_9043 = cmd.lib.POST.call(null,"/gists",new_content,inst_9042);var state_9059__$1 = state_9059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9059__$1,2,inst_9043);
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
var state_machine__5594__auto____0 = (function (){var statearr_9071 = [null,null,null,null,null,null,null,null,null,null];(statearr_9071[0] = state_machine__5594__auto__);
(statearr_9071[1] = 1);
return statearr_9071;
});
var state_machine__5594__auto____1 = (function (state_9059){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9059);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9072){if((e9072 instanceof Object))
{var ex__5597__auto__ = e9072;var statearr_9073_9080 = state_9059;(statearr_9073_9080[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9059);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9081 = state_9059;
state_9059 = G__9081;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9059){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9074 = f__5609__auto__.call(null);(statearr_9074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9074;
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
return (function (state_9101){var state_val_9102 = (state_9101[1]);if((state_val_9102 === 2))
{var inst_9099 = (state_9101[2]);var state_9101__$1 = state_9101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9101__$1,inst_9099);
} else
{if((state_val_9102 === 1))
{var inst_9096 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9097 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9096,null));var state_9101__$1 = state_9101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9101__$1,2,cmd.core.AppBus,inst_9097);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9106 = [null,null,null,null,null,null,null];(statearr_9106[0] = state_machine__5594__auto__);
(statearr_9106[1] = 1);
return statearr_9106;
});
var state_machine__5594__auto____1 = (function (state_9101){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9107){if((e9107 instanceof Object))
{var ex__5597__auto__ = e9107;var statearr_9108_9110 = state_9101;(statearr_9108_9110[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9111 = state_9101;
state_9101 = G__9111;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9101){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9109 = f__5609__auto__.call(null);(statearr_9109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__5608__auto___9140 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___9140,error_msg){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___9140,error_msg){
return (function (state_9131){var state_val_9132 = (state_9131[1]);if((state_val_9132 === 2))
{var inst_9129 = (state_9131[2]);var state_9131__$1 = state_9131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9131__$1,inst_9129);
} else
{if((state_val_9132 === 1))
{var inst_9126 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_9127 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9126,null));var state_9131__$1 = state_9131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9131__$1,2,cmd.core.AppBus,inst_9127);
} else
{return null;
}
}
});})(c__5608__auto___9140,error_msg))
;return ((function (switch__5593__auto__,c__5608__auto___9140,error_msg){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9136 = [null,null,null,null,null,null,null];(statearr_9136[0] = state_machine__5594__auto__);
(statearr_9136[1] = 1);
return statearr_9136;
});
var state_machine__5594__auto____1 = (function (state_9131){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9131);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9137){if((e9137 instanceof Object))
{var ex__5597__auto__ = e9137;var statearr_9138_9141 = state_9131;(statearr_9138_9141[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9131);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9142 = state_9131;
state_9131 = G__9142;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9131){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___9140,error_msg))
})();var state__5610__auto__ = (function (){var statearr_9139 = f__5609__auto__.call(null);(statearr_9139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___9140);
return statearr_9139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___9140,error_msg))
);
return cmd.utils.say.call(null,[cljs.core.str("Auth Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9188){var state_val_9189 = (state_9188[1]);if((state_val_9189 === 5))
{var inst_9180 = (state_9188[7]);var inst_9183 = cmd.core.unauthorized.call(null,inst_9180);var state_9188__$1 = state_9188;var statearr_9190_9203 = state_9188__$1;(statearr_9190_9203[2] = inst_9183);
(statearr_9190_9203[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9189 === 4))
{var inst_9181 = cmd.core.logged_in.call(null,username,auth_token);var state_9188__$1 = state_9188;var statearr_9191_9204 = state_9188__$1;(statearr_9191_9204[2] = inst_9181);
(statearr_9191_9204[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9189 === 3))
{var inst_9186 = (state_9188[2]);var state_9188__$1 = state_9188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9188__$1,inst_9186);
} else
{if((state_val_9189 === 2))
{var inst_9178 = (state_9188[2]);var inst_9179 = cljs.core.nth.call(null,inst_9178,0,null);var inst_9180 = cljs.core.nth.call(null,inst_9178,1,null);var state_9188__$1 = (function (){var statearr_9192 = state_9188;(statearr_9192[7] = inst_9180);
return statearr_9192;
})();var G__9193_9205 = inst_9179;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9193_9205))
{var statearr_9194_9206 = state_9188__$1;(statearr_9194_9206[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9193_9205))
{var statearr_9195_9207 = state_9188__$1;(statearr_9195_9207[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9179)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9189 === 1))
{var inst_9174 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9175 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_9176 = cmd.lib.GET.call(null,inst_9174,inst_9175);var state_9188__$1 = state_9188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9188__$1,2,inst_9176);
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
var state_machine__5594__auto____0 = (function (){var statearr_9199 = [null,null,null,null,null,null,null,null];(statearr_9199[0] = state_machine__5594__auto__);
(statearr_9199[1] = 1);
return statearr_9199;
});
var state_machine__5594__auto____1 = (function (state_9188){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9188);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9200){if((e9200 instanceof Object))
{var ex__5597__auto__ = e9200;var statearr_9201_9208 = state_9188;(statearr_9201_9208[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9209 = state_9188;
state_9188 = G__9209;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9188){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9202 = f__5609__auto__.call(null);(statearr_9202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9202;
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

//# sourceMappingURL=core.js.map