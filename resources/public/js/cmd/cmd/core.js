// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.core');
goog.require('cljs.core');
goog.require('cmd.utils');
goog.require('cljs.core.async');
goog.require('cmd.lib');
goog.require('cljs.core.async');
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
{var inst_8685 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8686 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8687 = [cljs.core.str("/users/"),cljs.core.str(inst_8685),cljs.core.str("/gists")].join('');var inst_8688 = cmd.core.auth_param.call(null,inst_8685,inst_8686);var inst_8689 = cmd.lib.GET.call(null,inst_8687,inst_8688);var state_8707__$1 = state_8707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8707__$1,2,inst_8689);
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
cmd.core.local_motd = document.getElementById("motd").text;
cmd.core.set_motd = (function set_motd(gist_id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8820){var state_val_8821 = (state_8820[1]);if((state_val_8821 === 9))
{var inst_8813 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.core.local_motd);var inst_8814 = cmd.utils.say.call(null,"Error getting remote motd");var inst_8815 = inst_8813.call(null,inst_8814);var state_8820__$1 = state_8820;var statearr_8822_8840 = state_8820__$1;(statearr_8822_8840[2] = inst_8815);
(statearr_8822_8840[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8821 === 8))
{var inst_8805 = (state_8820[7]);var inst_8809 = (state_8820[2]);var inst_8810 = cmd.utils.say.call(null,"Setting remote motd");var inst_8811 = inst_8805.call(null,inst_8809,inst_8810);var state_8820__$1 = state_8820;var statearr_8823_8841 = state_8820__$1;(statearr_8823_8841[2] = inst_8811);
(statearr_8823_8841[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8821 === 7))
{var inst_8797 = (state_8820[8]);var inst_8799 = cmd.utils.raw__GT_clj.call(null,inst_8797);var inst_8800 = inst_8799.call(null,"files");var inst_8801 = cljs.core.first.call(null,inst_8800);var inst_8802 = cljs.core.nth.call(null,inst_8801,0,null);var inst_8803 = cljs.core.nth.call(null,inst_8801,1,null);var inst_8804 = inst_8803.call(null,"content");var inst_8805 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_8804);var inst_8806 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_8804];var inst_8807 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8806,null));var state_8820__$1 = (function (){var statearr_8824 = state_8820;(statearr_8824[7] = inst_8805);
(statearr_8824[9] = inst_8802);
return statearr_8824;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8820__$1,8,cmd.core.AppBus,inst_8807);
} else
{if((state_val_8821 === 6))
{var inst_8818 = (state_8820[2]);var state_8820__$1 = state_8820;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8820__$1,inst_8818);
} else
{if((state_val_8821 === 5))
{var inst_8795 = (state_8820[2]);var inst_8796 = cljs.core.nth.call(null,inst_8795,0,null);var inst_8797 = cljs.core.nth.call(null,inst_8795,1,null);var state_8820__$1 = (function (){var statearr_8825 = state_8820;(statearr_8825[8] = inst_8797);
return statearr_8825;
})();var G__8826_8842 = inst_8796;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8826_8842))
{var statearr_8827_8843 = state_8820__$1;(statearr_8827_8843[1] = 9);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8826_8842))
{var statearr_8828_8844 = state_8820__$1;(statearr_8828_8844[1] = 7);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8796)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8821 === 4))
{var inst_8790 = (state_8820[2]);var inst_8791 = [cljs.core.str("/gists/"),cljs.core.str(inst_8790)].join('');var inst_8792 = cmd.core.anon_param.call(null);var inst_8793 = cmd.lib.GET.call(null,inst_8791,inst_8792);var state_8820__$1 = state_8820;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8820__$1,5,inst_8793);
} else
{if((state_val_8821 === 3))
{var state_8820__$1 = state_8820;var statearr_8829_8845 = state_8820__$1;(statearr_8829_8845[2] = gist_id);
(statearr_8829_8845[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8821 === 2))
{var state_8820__$1 = state_8820;var statearr_8830_8846 = state_8820__$1;(statearr_8830_8846[2] = "58a15db96ca12b952f8e");
(statearr_8830_8846[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8821 === 1))
{var inst_8786 = cljs.core._EQ_.call(null,gist_id,null);var state_8820__$1 = state_8820;if(inst_8786)
{var statearr_8831_8847 = state_8820__$1;(statearr_8831_8847[1] = 2);
} else
{var statearr_8832_8848 = state_8820__$1;(statearr_8832_8848[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
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
var state_machine__5594__auto____0 = (function (){var statearr_8836 = [null,null,null,null,null,null,null,null,null,null];(statearr_8836[0] = state_machine__5594__auto__);
(statearr_8836[1] = 1);
return statearr_8836;
});
var state_machine__5594__auto____1 = (function (state_8820){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8820);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8837){if((e8837 instanceof Object))
{var ex__5597__auto__ = e8837;var statearr_8838_8849 = state_8820;(statearr_8838_8849[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8820);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8850 = state_8820;
state_8820 = G__8850;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8820){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8839 = f__5609__auto__.call(null);(statearr_8839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8929){var state_val_8930 = (state_8929[1]);if((state_val_8930 === 6))
{var inst_8907 = (state_8929[7]);var inst_8923 = cmd.utils.raw__GT_clj.call(null,inst_8907);var inst_8924 = cmd.core.handle_io_error.call(null,inst_8923);var state_8929__$1 = state_8929;var statearr_8931_8945 = state_8929__$1;(statearr_8931_8945[2] = inst_8924);
(statearr_8931_8945[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8930 === 5))
{var inst_8921 = (state_8929[2]);var state_8929__$1 = state_8929;var statearr_8932_8946 = state_8929__$1;(statearr_8932_8946[2] = inst_8921);
(statearr_8932_8946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8930 === 4))
{var inst_8907 = (state_8929[7]);var inst_8909 = cmd.utils.raw__GT_clj.call(null,inst_8907);var inst_8910 = inst_8909.call(null,"files");var inst_8911 = cljs.core.first.call(null,inst_8910);var inst_8912 = cljs.core.nth.call(null,inst_8911,0,null);var inst_8913 = cljs.core.nth.call(null,inst_8911,1,null);var inst_8914 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_8912);var inst_8915 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8909);var inst_8916 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_8917 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_8918 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_8919 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8918,null));var state_8929__$1 = (function (){var statearr_8933 = state_8929;(statearr_8933[8] = inst_8916);
(statearr_8933[9] = inst_8917);
(statearr_8933[10] = inst_8914);
(statearr_8933[11] = inst_8913);
(statearr_8933[12] = inst_8915);
return statearr_8933;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8929__$1,5,cmd.core.AppBus,inst_8919);
} else
{if((state_val_8930 === 3))
{var inst_8927 = (state_8929[2]);var state_8929__$1 = state_8929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8929__$1,inst_8927);
} else
{if((state_val_8930 === 2))
{var inst_8905 = (state_8929[2]);var inst_8906 = cljs.core.nth.call(null,inst_8905,0,null);var inst_8907 = cljs.core.nth.call(null,inst_8905,1,null);var state_8929__$1 = (function (){var statearr_8934 = state_8929;(statearr_8934[7] = inst_8907);
return statearr_8934;
})();var G__8935_8947 = inst_8906;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8935_8947))
{var statearr_8936_8948 = state_8929__$1;(statearr_8936_8948[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8935_8947))
{var statearr_8937_8949 = state_8929__$1;(statearr_8937_8949[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8906)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8930 === 1))
{var inst_8899 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_8900 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8901 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8902 = cmd.core.auth_param.call(null,inst_8900,inst_8901);var inst_8903 = cmd.lib.GET.call(null,inst_8899,inst_8902);var state_8929__$1 = state_8929;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8929__$1,2,inst_8903);
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
var state_machine__5594__auto____0 = (function (){var statearr_8941 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8941[0] = state_machine__5594__auto__);
(statearr_8941[1] = 1);
return statearr_8941;
});
var state_machine__5594__auto____1 = (function (state_8929){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8929);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8942){if((e8942 instanceof Object))
{var ex__5597__auto__ = e8942;var statearr_8943_8950 = state_8929;(statearr_8943_8950[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8929);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8951 = state_8929;
state_8929 = G__8951;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8929){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8944 = f__5609__auto__.call(null);(statearr_8944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9003){var state_val_9004 = (state_9003[1]);if((state_val_9004 === 5))
{var inst_8995 = (state_9003[7]);var inst_8998 = cmd.core.handle_io_error.call(null,inst_8995);var state_9003__$1 = state_9003;var statearr_9005_9018 = state_9003__$1;(statearr_9005_9018[2] = inst_8998);
(statearr_9005_9018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9004 === 4))
{var inst_8995 = (state_9003[7]);var inst_8996 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8995);var state_9003__$1 = state_9003;var statearr_9006_9019 = state_9003__$1;(statearr_9006_9019[2] = inst_8996);
(statearr_9006_9019[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9004 === 3))
{var inst_9001 = (state_9003[2]);var state_9003__$1 = state_9003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9003__$1,inst_9001);
} else
{if((state_val_9004 === 2))
{var inst_8992 = (state_9003[2]);var inst_8993 = cljs.core.nth.call(null,inst_8992,0,null);var inst_8994 = cljs.core.nth.call(null,inst_8992,1,null);var inst_8995 = cmd.utils.raw__GT_clj.call(null,inst_8994);var state_9003__$1 = (function (){var statearr_9007 = state_9003;(statearr_9007[7] = inst_8995);
return statearr_9007;
})();var G__9008_9020 = inst_8993;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9008_9020))
{var statearr_9009_9021 = state_9003__$1;(statearr_9009_9021[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9008_9020))
{var statearr_9010_9022 = state_9003__$1;(statearr_9010_9022[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8993)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9004 === 1))
{var inst_8986 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_8987 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8988 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8989 = cmd.core.auth_param.call(null,inst_8987,inst_8988);var inst_8990 = cmd.lib.PATCH.call(null,inst_8986,new_content,inst_8989);var state_9003__$1 = state_9003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9003__$1,2,inst_8990);
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
var state_machine__5594__auto____0 = (function (){var statearr_9014 = [null,null,null,null,null,null,null,null];(statearr_9014[0] = state_machine__5594__auto__);
(statearr_9014[1] = 1);
return statearr_9014;
});
var state_machine__5594__auto____1 = (function (state_9003){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9003);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9015){if((e9015 instanceof Object))
{var ex__5597__auto__ = e9015;var statearr_9016_9023 = state_9003;(statearr_9016_9023[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9003);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9024 = state_9003;
state_9003 = G__9024;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9003){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9017 = f__5609__auto__.call(null);(statearr_9017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9081){var state_val_9082 = (state_9081[1]);if((state_val_9082 === 5))
{var inst_9070 = (state_9081[7]);var inst_9076 = cmd.core.handle_io_error.call(null,inst_9070);var state_9081__$1 = state_9081;var statearr_9083_9097 = state_9081__$1;(statearr_9083_9097[2] = inst_9076);
(statearr_9083_9097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9082 === 4))
{var inst_9070 = (state_9081[7]);var inst_9071 = inst_9070.call(null,"id");var inst_9072 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_9073 = cmd.core.load_gists.call(null);var inst_9074 = cmd.core.load_gist.call(null,inst_9071);var state_9081__$1 = (function (){var statearr_9084 = state_9081;(statearr_9084[8] = inst_9072);
(statearr_9084[9] = inst_9073);
return statearr_9084;
})();var statearr_9085_9098 = state_9081__$1;(statearr_9085_9098[2] = inst_9074);
(statearr_9085_9098[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9082 === 3))
{var inst_9079 = (state_9081[2]);var state_9081__$1 = state_9081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9081__$1,inst_9079);
} else
{if((state_val_9082 === 2))
{var inst_9067 = (state_9081[2]);var inst_9068 = cljs.core.nth.call(null,inst_9067,0,null);var inst_9069 = cljs.core.nth.call(null,inst_9067,1,null);var inst_9070 = cmd.utils.raw__GT_clj.call(null,inst_9069);var state_9081__$1 = (function (){var statearr_9086 = state_9081;(statearr_9086[7] = inst_9070);
return statearr_9086;
})();var G__9087_9099 = inst_9068;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9087_9099))
{var statearr_9088_9100 = state_9081__$1;(statearr_9088_9100[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9087_9099))
{var statearr_9089_9101 = state_9081__$1;(statearr_9089_9101[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9068)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9082 === 1))
{var inst_9062 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9063 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9064 = cmd.core.auth_param.call(null,inst_9062,inst_9063);var inst_9065 = cmd.lib.POST.call(null,"/gists",new_content,inst_9064);var state_9081__$1 = state_9081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9081__$1,2,inst_9065);
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
var state_machine__5594__auto____0 = (function (){var statearr_9093 = [null,null,null,null,null,null,null,null,null,null];(statearr_9093[0] = state_machine__5594__auto__);
(statearr_9093[1] = 1);
return statearr_9093;
});
var state_machine__5594__auto____1 = (function (state_9081){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9081);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9094){if((e9094 instanceof Object))
{var ex__5597__auto__ = e9094;var statearr_9095_9102 = state_9081;(statearr_9095_9102[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9103 = state_9081;
state_9081 = G__9103;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9081){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9096 = f__5609__auto__.call(null);(statearr_9096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9096;
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
return (function (state_9123){var state_val_9124 = (state_9123[1]);if((state_val_9124 === 2))
{var inst_9121 = (state_9123[2]);var state_9123__$1 = state_9123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9123__$1,inst_9121);
} else
{if((state_val_9124 === 1))
{var inst_9118 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9119 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9118,null));var state_9123__$1 = state_9123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9123__$1,2,cmd.core.AppBus,inst_9119);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9128 = [null,null,null,null,null,null,null];(statearr_9128[0] = state_machine__5594__auto__);
(statearr_9128[1] = 1);
return statearr_9128;
});
var state_machine__5594__auto____1 = (function (state_9123){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9123);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9129){if((e9129 instanceof Object))
{var ex__5597__auto__ = e9129;var statearr_9130_9132 = state_9123;(statearr_9130_9132[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9123);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9133 = state_9123;
state_9123 = G__9133;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9123){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9131 = f__5609__auto__.call(null);(statearr_9131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9131;
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
return (function (state_9179){var state_val_9180 = (state_9179[1]);if((state_val_9180 === 5))
{var inst_9171 = (state_9179[7]);var inst_9174 = cmd.core.unauthorized.call(null,inst_9171);var state_9179__$1 = state_9179;var statearr_9181_9194 = state_9179__$1;(statearr_9181_9194[2] = inst_9174);
(statearr_9181_9194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9180 === 4))
{var inst_9172 = cmd.core.logged_in.call(null,username,auth_token);var state_9179__$1 = state_9179;var statearr_9182_9195 = state_9179__$1;(statearr_9182_9195[2] = inst_9172);
(statearr_9182_9195[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9180 === 3))
{var inst_9177 = (state_9179[2]);var state_9179__$1 = state_9179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9179__$1,inst_9177);
} else
{if((state_val_9180 === 2))
{var inst_9169 = (state_9179[2]);var inst_9170 = cljs.core.nth.call(null,inst_9169,0,null);var inst_9171 = cljs.core.nth.call(null,inst_9169,1,null);var state_9179__$1 = (function (){var statearr_9183 = state_9179;(statearr_9183[7] = inst_9171);
return statearr_9183;
})();var G__9184_9196 = inst_9170;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9184_9196))
{var statearr_9185_9197 = state_9179__$1;(statearr_9185_9197[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9184_9196))
{var statearr_9186_9198 = state_9179__$1;(statearr_9186_9198[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9170)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9180 === 1))
{var inst_9165 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9166 = cmd.core.auth_param.call(null,username,auth_token);var inst_9167 = cmd.lib.GET.call(null,inst_9165,inst_9166);var state_9179__$1 = state_9179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9179__$1,2,inst_9167);
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
var state_machine__5594__auto____0 = (function (){var statearr_9190 = [null,null,null,null,null,null,null,null];(statearr_9190[0] = state_machine__5594__auto__);
(statearr_9190[1] = 1);
return statearr_9190;
});
var state_machine__5594__auto____1 = (function (state_9179){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9179);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9191){if((e9191 instanceof Object))
{var ex__5597__auto__ = e9191;var statearr_9192_9199 = state_9179;(statearr_9192_9199[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9200 = state_9179;
state_9179 = G__9200;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9179){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9193 = f__5609__auto__.call(null);(statearr_9193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9193;
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