// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.core');
goog.require('cljs.core');
goog.require('cmd.utils');
goog.require('cljs.core.async');
goog.require('cmd.lib');
goog.require('cljs.core.async');
goog.require('cmd.lib');
goog.require('cmd.utils');
cmd.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview-output","preview-output",4188357144),null], null));
cmd.core.AppBus = cljs.core.async.chan.call(null,1);
cmd.core.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.core.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,cljs.core.select_keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace","ace",1014000629),new cljs.core.Keyword(null,"worker","worker",4526786288)], null));
});
cmd.core.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
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
cmd.core.auth_param = (function auth_param(username,auth_token){var obj8639 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj8639;
});
cmd.core.anon_param = (function anon_param(){var obj8643 = {"Content-Type":"application/json"};return obj8643;
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__8644_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__8644_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.utils.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8696){var state_val_8697 = (state_8696[1]);if((state_val_8697 === 5))
{var inst_8688 = (state_8696[7]);var inst_8691 = cmd.core.handle_io_error.call(null,inst_8688);var state_8696__$1 = state_8696;var statearr_8698_8711 = state_8696__$1;(statearr_8698_8711[2] = inst_8691);
(statearr_8698_8711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8697 === 4))
{var inst_8688 = (state_8696[7]);var inst_8689 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_8688);var state_8696__$1 = state_8696;var statearr_8699_8712 = state_8696__$1;(statearr_8699_8712[2] = inst_8689);
(statearr_8699_8712[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8697 === 3))
{var inst_8694 = (state_8696[2]);var state_8696__$1 = state_8696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8696__$1,inst_8694);
} else
{if((state_val_8697 === 2))
{var inst_8685 = (state_8696[2]);var inst_8686 = cljs.core.nth.call(null,inst_8685,0,null);var inst_8687 = cljs.core.nth.call(null,inst_8685,1,null);var inst_8688 = cmd.utils.raw__GT_clj.call(null,inst_8687);var state_8696__$1 = (function (){var statearr_8700 = state_8696;(statearr_8700[7] = inst_8688);
return statearr_8700;
})();var G__8701_8713 = inst_8686;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8701_8713))
{var statearr_8702_8714 = state_8696__$1;(statearr_8702_8714[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8701_8713))
{var statearr_8703_8715 = state_8696__$1;(statearr_8703_8715[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8686)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8697 === 1))
{var inst_8679 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8680 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8681 = [cljs.core.str("/users/"),cljs.core.str(inst_8679),cljs.core.str("/gists")].join('');var inst_8682 = cmd.core.auth_param.call(null,inst_8679,inst_8680);var inst_8683 = cmd.lib.GET.call(null,inst_8681,inst_8682);var state_8696__$1 = state_8696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8696__$1,2,inst_8683);
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
var state_machine__5594__auto____0 = (function (){var statearr_8707 = [null,null,null,null,null,null,null,null];(statearr_8707[0] = state_machine__5594__auto__);
(statearr_8707[1] = 1);
return statearr_8707;
});
var state_machine__5594__auto____1 = (function (state_8696){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8696);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8708){if((e8708 instanceof Object))
{var ex__5597__auto__ = e8708;var statearr_8709_8716 = state_8696;(statearr_8709_8716[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8696);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8717 = state_8696;
state_8696 = G__8717;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8696){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8710 = f__5609__auto__.call(null);(statearr_8710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.local_motd = document.getElementById("motd").text;
cmd.core.set_motd = (function set_motd(){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8792){var state_val_8793 = (state_8792[1]);if((state_val_8793 === 6))
{var inst_8785 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.core.local_motd);var inst_8786 = cmd.utils.say.call(null,"Error getting remote motd");var inst_8787 = inst_8785.call(null,inst_8786);var state_8792__$1 = state_8792;var statearr_8794_8808 = state_8792__$1;(statearr_8794_8808[2] = inst_8787);
(statearr_8794_8808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8793 === 5))
{var inst_8777 = (state_8792[7]);var inst_8781 = (state_8792[2]);var inst_8782 = cmd.utils.say.call(null,"Setting remote motd");var inst_8783 = inst_8777.call(null,inst_8781,inst_8782);var state_8792__$1 = state_8792;var statearr_8795_8809 = state_8792__$1;(statearr_8795_8809[2] = inst_8783);
(statearr_8795_8809[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8793 === 4))
{var inst_8769 = (state_8792[8]);var inst_8771 = cmd.utils.raw__GT_clj.call(null,inst_8769);var inst_8772 = inst_8771.call(null,"files");var inst_8773 = cljs.core.first.call(null,inst_8772);var inst_8774 = cljs.core.nth.call(null,inst_8773,0,null);var inst_8775 = cljs.core.nth.call(null,inst_8773,1,null);var inst_8776 = inst_8775.call(null,"content");var inst_8777 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_8776);var inst_8778 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_8776];var inst_8779 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8778,null));var state_8792__$1 = (function (){var statearr_8796 = state_8792;(statearr_8796[9] = inst_8774);
(statearr_8796[7] = inst_8777);
return statearr_8796;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8792__$1,5,cmd.core.AppBus,inst_8779);
} else
{if((state_val_8793 === 3))
{var inst_8790 = (state_8792[2]);var state_8792__$1 = state_8792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8792__$1,inst_8790);
} else
{if((state_val_8793 === 2))
{var inst_8767 = (state_8792[2]);var inst_8768 = cljs.core.nth.call(null,inst_8767,0,null);var inst_8769 = cljs.core.nth.call(null,inst_8767,1,null);var state_8792__$1 = (function (){var statearr_8797 = state_8792;(statearr_8797[8] = inst_8769);
return statearr_8797;
})();var G__8798_8810 = inst_8768;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8798_8810))
{var statearr_8799_8811 = state_8792__$1;(statearr_8799_8811[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8798_8810))
{var statearr_8800_8812 = state_8792__$1;(statearr_8800_8812[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8768)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8793 === 1))
{var inst_8764 = cmd.core.anon_param.call(null);var inst_8765 = cmd.lib.GET.call(null,"/gists/58a15db96ca12b952f8e",inst_8764);var state_8792__$1 = state_8792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8792__$1,2,inst_8765);
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
var state_machine__5594__auto____0 = (function (){var statearr_8804 = [null,null,null,null,null,null,null,null,null,null];(statearr_8804[0] = state_machine__5594__auto__);
(statearr_8804[1] = 1);
return statearr_8804;
});
var state_machine__5594__auto____1 = (function (state_8792){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8792);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8805){if((e8805 instanceof Object))
{var ex__5597__auto__ = e8805;var statearr_8806_8813 = state_8792;(statearr_8806_8813[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8814 = state_8792;
state_8792 = G__8814;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8792){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8807 = f__5609__auto__.call(null);(statearr_8807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8893){var state_val_8894 = (state_8893[1]);if((state_val_8894 === 6))
{var inst_8871 = (state_8893[7]);var inst_8887 = cmd.utils.raw__GT_clj.call(null,inst_8871);var inst_8888 = cmd.core.handle_io_error.call(null,inst_8887);var state_8893__$1 = state_8893;var statearr_8895_8909 = state_8893__$1;(statearr_8895_8909[2] = inst_8888);
(statearr_8895_8909[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8894 === 5))
{var inst_8885 = (state_8893[2]);var state_8893__$1 = state_8893;var statearr_8896_8910 = state_8893__$1;(statearr_8896_8910[2] = inst_8885);
(statearr_8896_8910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8894 === 4))
{var inst_8871 = (state_8893[7]);var inst_8873 = cmd.utils.raw__GT_clj.call(null,inst_8871);var inst_8874 = inst_8873.call(null,"files");var inst_8875 = cljs.core.first.call(null,inst_8874);var inst_8876 = cljs.core.nth.call(null,inst_8875,0,null);var inst_8877 = cljs.core.nth.call(null,inst_8875,1,null);var inst_8878 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_8876);var inst_8879 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8873);var inst_8880 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_8881 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_8882 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_8883 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8882,null));var state_8893__$1 = (function (){var statearr_8897 = state_8893;(statearr_8897[8] = inst_8881);
(statearr_8897[9] = inst_8879);
(statearr_8897[10] = inst_8878);
(statearr_8897[11] = inst_8877);
(statearr_8897[12] = inst_8880);
return statearr_8897;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8893__$1,5,cmd.core.AppBus,inst_8883);
} else
{if((state_val_8894 === 3))
{var inst_8891 = (state_8893[2]);var state_8893__$1 = state_8893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8893__$1,inst_8891);
} else
{if((state_val_8894 === 2))
{var inst_8869 = (state_8893[2]);var inst_8870 = cljs.core.nth.call(null,inst_8869,0,null);var inst_8871 = cljs.core.nth.call(null,inst_8869,1,null);var state_8893__$1 = (function (){var statearr_8898 = state_8893;(statearr_8898[7] = inst_8871);
return statearr_8898;
})();var G__8899_8911 = inst_8870;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8899_8911))
{var statearr_8900_8912 = state_8893__$1;(statearr_8900_8912[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8899_8911))
{var statearr_8901_8913 = state_8893__$1;(statearr_8901_8913[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8870)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8894 === 1))
{var inst_8863 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_8864 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8865 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8866 = cmd.core.auth_param.call(null,inst_8864,inst_8865);var inst_8867 = cmd.lib.GET.call(null,inst_8863,inst_8866);var state_8893__$1 = state_8893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8893__$1,2,inst_8867);
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
var state_machine__5594__auto____0 = (function (){var statearr_8905 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8905[0] = state_machine__5594__auto__);
(statearr_8905[1] = 1);
return statearr_8905;
});
var state_machine__5594__auto____1 = (function (state_8893){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8893);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8906){if((e8906 instanceof Object))
{var ex__5597__auto__ = e8906;var statearr_8907_8914 = state_8893;(statearr_8907_8914[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8893);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8915 = state_8893;
state_8893 = G__8915;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8893){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8908 = f__5609__auto__.call(null);(statearr_8908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8967){var state_val_8968 = (state_8967[1]);if((state_val_8968 === 5))
{var inst_8959 = (state_8967[7]);var inst_8962 = cmd.core.handle_io_error.call(null,inst_8959);var state_8967__$1 = state_8967;var statearr_8969_8982 = state_8967__$1;(statearr_8969_8982[2] = inst_8962);
(statearr_8969_8982[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8968 === 4))
{var inst_8959 = (state_8967[7]);var inst_8960 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8959);var state_8967__$1 = state_8967;var statearr_8970_8983 = state_8967__$1;(statearr_8970_8983[2] = inst_8960);
(statearr_8970_8983[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8968 === 3))
{var inst_8965 = (state_8967[2]);var state_8967__$1 = state_8967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8967__$1,inst_8965);
} else
{if((state_val_8968 === 2))
{var inst_8956 = (state_8967[2]);var inst_8957 = cljs.core.nth.call(null,inst_8956,0,null);var inst_8958 = cljs.core.nth.call(null,inst_8956,1,null);var inst_8959 = cmd.utils.raw__GT_clj.call(null,inst_8958);var state_8967__$1 = (function (){var statearr_8971 = state_8967;(statearr_8971[7] = inst_8959);
return statearr_8971;
})();var G__8972_8984 = inst_8957;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8972_8984))
{var statearr_8973_8985 = state_8967__$1;(statearr_8973_8985[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8972_8984))
{var statearr_8974_8986 = state_8967__$1;(statearr_8974_8986[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8957)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8968 === 1))
{var inst_8950 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_8951 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8952 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8953 = cmd.core.auth_param.call(null,inst_8951,inst_8952);var inst_8954 = cmd.lib.PATCH.call(null,inst_8950,new_content,inst_8953);var state_8967__$1 = state_8967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8967__$1,2,inst_8954);
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
var state_machine__5594__auto____0 = (function (){var statearr_8978 = [null,null,null,null,null,null,null,null];(statearr_8978[0] = state_machine__5594__auto__);
(statearr_8978[1] = 1);
return statearr_8978;
});
var state_machine__5594__auto____1 = (function (state_8967){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8967);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8979){if((e8979 instanceof Object))
{var ex__5597__auto__ = e8979;var statearr_8980_8987 = state_8967;(statearr_8980_8987[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8967);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8979;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8988 = state_8967;
state_8967 = G__8988;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8967){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8981 = f__5609__auto__.call(null);(statearr_8981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9045){var state_val_9046 = (state_9045[1]);if((state_val_9046 === 5))
{var inst_9034 = (state_9045[7]);var inst_9040 = cmd.core.handle_io_error.call(null,inst_9034);var state_9045__$1 = state_9045;var statearr_9047_9061 = state_9045__$1;(statearr_9047_9061[2] = inst_9040);
(statearr_9047_9061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9046 === 4))
{var inst_9034 = (state_9045[7]);var inst_9035 = inst_9034.call(null,"id");var inst_9036 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_9037 = cmd.core.load_gists.call(null);var inst_9038 = cmd.core.load_gist.call(null,inst_9035);var state_9045__$1 = (function (){var statearr_9048 = state_9045;(statearr_9048[8] = inst_9036);
(statearr_9048[9] = inst_9037);
return statearr_9048;
})();var statearr_9049_9062 = state_9045__$1;(statearr_9049_9062[2] = inst_9038);
(statearr_9049_9062[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9046 === 3))
{var inst_9043 = (state_9045[2]);var state_9045__$1 = state_9045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9045__$1,inst_9043);
} else
{if((state_val_9046 === 2))
{var inst_9031 = (state_9045[2]);var inst_9032 = cljs.core.nth.call(null,inst_9031,0,null);var inst_9033 = cljs.core.nth.call(null,inst_9031,1,null);var inst_9034 = cmd.utils.raw__GT_clj.call(null,inst_9033);var state_9045__$1 = (function (){var statearr_9050 = state_9045;(statearr_9050[7] = inst_9034);
return statearr_9050;
})();var G__9051_9063 = inst_9032;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9051_9063))
{var statearr_9052_9064 = state_9045__$1;(statearr_9052_9064[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9051_9063))
{var statearr_9053_9065 = state_9045__$1;(statearr_9053_9065[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9032)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9046 === 1))
{var inst_9026 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9027 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9028 = cmd.core.auth_param.call(null,inst_9026,inst_9027);var inst_9029 = cmd.lib.POST.call(null,"/gists",new_content,inst_9028);var state_9045__$1 = state_9045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9045__$1,2,inst_9029);
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
var state_machine__5594__auto____0 = (function (){var statearr_9057 = [null,null,null,null,null,null,null,null,null,null];(statearr_9057[0] = state_machine__5594__auto__);
(statearr_9057[1] = 1);
return statearr_9057;
});
var state_machine__5594__auto____1 = (function (state_9045){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9045);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9058){if((e9058 instanceof Object))
{var ex__5597__auto__ = e9058;var statearr_9059_9066 = state_9045;(statearr_9059_9066[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9045);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9067 = state_9045;
state_9045 = G__9067;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9045){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9060 = f__5609__auto__.call(null);(statearr_9060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9060;
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
return (function (state_9087){var state_val_9088 = (state_9087[1]);if((state_val_9088 === 2))
{var inst_9085 = (state_9087[2]);var state_9087__$1 = state_9087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9087__$1,inst_9085);
} else
{if((state_val_9088 === 1))
{var inst_9082 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9083 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9082,null));var state_9087__$1 = state_9087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9087__$1,2,cmd.core.AppBus,inst_9083);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9092 = [null,null,null,null,null,null,null];(statearr_9092[0] = state_machine__5594__auto__);
(statearr_9092[1] = 1);
return statearr_9092;
});
var state_machine__5594__auto____1 = (function (state_9087){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9087);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9093){if((e9093 instanceof Object))
{var ex__5597__auto__ = e9093;var statearr_9094_9096 = state_9087;(statearr_9094_9096[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9097 = state_9087;
state_9087 = G__9097;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9087){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9095 = f__5609__auto__.call(null);(statearr_9095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.utils.say.call(null,[cljs.core.str("Auth Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9143){var state_val_9144 = (state_9143[1]);if((state_val_9144 === 5))
{var inst_9135 = (state_9143[7]);var inst_9138 = cmd.core.unauthorized.call(null,inst_9135);var state_9143__$1 = state_9143;var statearr_9145_9158 = state_9143__$1;(statearr_9145_9158[2] = inst_9138);
(statearr_9145_9158[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9144 === 4))
{var inst_9136 = cmd.core.logged_in.call(null,username,auth_token);var state_9143__$1 = state_9143;var statearr_9146_9159 = state_9143__$1;(statearr_9146_9159[2] = inst_9136);
(statearr_9146_9159[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9144 === 3))
{var inst_9141 = (state_9143[2]);var state_9143__$1 = state_9143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9143__$1,inst_9141);
} else
{if((state_val_9144 === 2))
{var inst_9133 = (state_9143[2]);var inst_9134 = cljs.core.nth.call(null,inst_9133,0,null);var inst_9135 = cljs.core.nth.call(null,inst_9133,1,null);var state_9143__$1 = (function (){var statearr_9147 = state_9143;(statearr_9147[7] = inst_9135);
return statearr_9147;
})();var G__9148_9160 = inst_9134;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9148_9160))
{var statearr_9149_9161 = state_9143__$1;(statearr_9149_9161[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9148_9160))
{var statearr_9150_9162 = state_9143__$1;(statearr_9150_9162[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9134)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9144 === 1))
{var inst_9129 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9130 = cmd.core.auth_param.call(null,username,auth_token);var inst_9131 = cmd.lib.GET.call(null,inst_9129,inst_9130);var state_9143__$1 = state_9143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9143__$1,2,inst_9131);
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
var state_machine__5594__auto____0 = (function (){var statearr_9154 = [null,null,null,null,null,null,null,null];(statearr_9154[0] = state_machine__5594__auto__);
(statearr_9154[1] = 1);
return statearr_9154;
});
var state_machine__5594__auto____1 = (function (state_9143){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9143);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9155){if((e9155 instanceof Object))
{var ex__5597__auto__ = e9155;var statearr_9156_9163 = state_9143;(statearr_9156_9163[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9143);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9164 = state_9143;
state_9143 = G__9164;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9143){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9157 = f__5609__auto__.call(null);(statearr_9157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9157;
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