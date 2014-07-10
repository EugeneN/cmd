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
cmd.core.set_motd = (function set_motd(gist_id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8808){var state_val_8809 = (state_8808[1]);if((state_val_8809 === 9))
{var inst_8801 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.core.local_motd);var inst_8802 = cmd.utils.say.call(null,"Error getting remote motd");var inst_8803 = inst_8801.call(null,inst_8802);var state_8808__$1 = state_8808;var statearr_8810_8828 = state_8808__$1;(statearr_8810_8828[2] = inst_8803);
(statearr_8810_8828[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8809 === 8))
{var inst_8793 = (state_8808[7]);var inst_8797 = (state_8808[2]);var inst_8798 = cmd.utils.say.call(null,"Setting remote motd");var inst_8799 = inst_8793.call(null,inst_8797,inst_8798);var state_8808__$1 = state_8808;var statearr_8811_8829 = state_8808__$1;(statearr_8811_8829[2] = inst_8799);
(statearr_8811_8829[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8809 === 7))
{var inst_8785 = (state_8808[8]);var inst_8787 = cmd.utils.raw__GT_clj.call(null,inst_8785);var inst_8788 = inst_8787.call(null,"files");var inst_8789 = cljs.core.first.call(null,inst_8788);var inst_8790 = cljs.core.nth.call(null,inst_8789,0,null);var inst_8791 = cljs.core.nth.call(null,inst_8789,1,null);var inst_8792 = inst_8791.call(null,"content");var inst_8793 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_8792);var inst_8794 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_8792];var inst_8795 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8794,null));var state_8808__$1 = (function (){var statearr_8812 = state_8808;(statearr_8812[9] = inst_8790);
(statearr_8812[7] = inst_8793);
return statearr_8812;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8808__$1,8,cmd.core.AppBus,inst_8795);
} else
{if((state_val_8809 === 6))
{var inst_8806 = (state_8808[2]);var state_8808__$1 = state_8808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8808__$1,inst_8806);
} else
{if((state_val_8809 === 5))
{var inst_8783 = (state_8808[2]);var inst_8784 = cljs.core.nth.call(null,inst_8783,0,null);var inst_8785 = cljs.core.nth.call(null,inst_8783,1,null);var state_8808__$1 = (function (){var statearr_8813 = state_8808;(statearr_8813[8] = inst_8785);
return statearr_8813;
})();var G__8814_8830 = inst_8784;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8814_8830))
{var statearr_8815_8831 = state_8808__$1;(statearr_8815_8831[1] = 9);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8814_8830))
{var statearr_8816_8832 = state_8808__$1;(statearr_8816_8832[1] = 7);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8784)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8809 === 4))
{var inst_8778 = (state_8808[2]);var inst_8779 = [cljs.core.str("/gists/"),cljs.core.str(inst_8778)].join('');var inst_8780 = cmd.core.anon_param.call(null);var inst_8781 = cmd.lib.GET.call(null,inst_8779,inst_8780);var state_8808__$1 = state_8808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,5,inst_8781);
} else
{if((state_val_8809 === 3))
{var state_8808__$1 = state_8808;var statearr_8817_8833 = state_8808__$1;(statearr_8817_8833[2] = gist_id);
(statearr_8817_8833[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8809 === 2))
{var state_8808__$1 = state_8808;var statearr_8818_8834 = state_8808__$1;(statearr_8818_8834[2] = "58a15db96ca12b952f8e");
(statearr_8818_8834[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8809 === 1))
{var inst_8774 = cljs.core._EQ_.call(null,gist_id,null);var state_8808__$1 = state_8808;if(inst_8774)
{var statearr_8819_8835 = state_8808__$1;(statearr_8819_8835[1] = 2);
} else
{var statearr_8820_8836 = state_8808__$1;(statearr_8820_8836[1] = 3);
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
var state_machine__5594__auto____0 = (function (){var statearr_8824 = [null,null,null,null,null,null,null,null,null,null];(statearr_8824[0] = state_machine__5594__auto__);
(statearr_8824[1] = 1);
return statearr_8824;
});
var state_machine__5594__auto____1 = (function (state_8808){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8808);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8825){if((e8825 instanceof Object))
{var ex__5597__auto__ = e8825;var statearr_8826_8837 = state_8808;(statearr_8826_8837[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8825;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8838 = state_8808;
state_8808 = G__8838;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8808){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8827 = f__5609__auto__.call(null);(statearr_8827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8917){var state_val_8918 = (state_8917[1]);if((state_val_8918 === 6))
{var inst_8895 = (state_8917[7]);var inst_8911 = cmd.utils.raw__GT_clj.call(null,inst_8895);var inst_8912 = cmd.core.handle_io_error.call(null,inst_8911);var state_8917__$1 = state_8917;var statearr_8919_8933 = state_8917__$1;(statearr_8919_8933[2] = inst_8912);
(statearr_8919_8933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8918 === 5))
{var inst_8909 = (state_8917[2]);var state_8917__$1 = state_8917;var statearr_8920_8934 = state_8917__$1;(statearr_8920_8934[2] = inst_8909);
(statearr_8920_8934[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8918 === 4))
{var inst_8895 = (state_8917[7]);var inst_8897 = cmd.utils.raw__GT_clj.call(null,inst_8895);var inst_8898 = inst_8897.call(null,"files");var inst_8899 = cljs.core.first.call(null,inst_8898);var inst_8900 = cljs.core.nth.call(null,inst_8899,0,null);var inst_8901 = cljs.core.nth.call(null,inst_8899,1,null);var inst_8902 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_8900);var inst_8903 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8897);var inst_8904 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_8905 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_8906 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_8907 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8906,null));var state_8917__$1 = (function (){var statearr_8921 = state_8917;(statearr_8921[8] = inst_8904);
(statearr_8921[9] = inst_8902);
(statearr_8921[10] = inst_8901);
(statearr_8921[11] = inst_8905);
(statearr_8921[12] = inst_8903);
return statearr_8921;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8917__$1,5,cmd.core.AppBus,inst_8907);
} else
{if((state_val_8918 === 3))
{var inst_8915 = (state_8917[2]);var state_8917__$1 = state_8917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8917__$1,inst_8915);
} else
{if((state_val_8918 === 2))
{var inst_8893 = (state_8917[2]);var inst_8894 = cljs.core.nth.call(null,inst_8893,0,null);var inst_8895 = cljs.core.nth.call(null,inst_8893,1,null);var state_8917__$1 = (function (){var statearr_8922 = state_8917;(statearr_8922[7] = inst_8895);
return statearr_8922;
})();var G__8923_8935 = inst_8894;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8923_8935))
{var statearr_8924_8936 = state_8917__$1;(statearr_8924_8936[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8923_8935))
{var statearr_8925_8937 = state_8917__$1;(statearr_8925_8937[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8894)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8918 === 1))
{var inst_8887 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_8888 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8889 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8890 = cmd.core.auth_param.call(null,inst_8888,inst_8889);var inst_8891 = cmd.lib.GET.call(null,inst_8887,inst_8890);var state_8917__$1 = state_8917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8917__$1,2,inst_8891);
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
var state_machine__5594__auto____0 = (function (){var statearr_8929 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8929[0] = state_machine__5594__auto__);
(statearr_8929[1] = 1);
return statearr_8929;
});
var state_machine__5594__auto____1 = (function (state_8917){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8917);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8930){if((e8930 instanceof Object))
{var ex__5597__auto__ = e8930;var statearr_8931_8938 = state_8917;(statearr_8931_8938[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8939 = state_8917;
state_8917 = G__8939;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8917){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8932 = f__5609__auto__.call(null);(statearr_8932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8991){var state_val_8992 = (state_8991[1]);if((state_val_8992 === 5))
{var inst_8983 = (state_8991[7]);var inst_8986 = cmd.core.handle_io_error.call(null,inst_8983);var state_8991__$1 = state_8991;var statearr_8993_9006 = state_8991__$1;(statearr_8993_9006[2] = inst_8986);
(statearr_8993_9006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8992 === 4))
{var inst_8983 = (state_8991[7]);var inst_8984 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8983);var state_8991__$1 = state_8991;var statearr_8994_9007 = state_8991__$1;(statearr_8994_9007[2] = inst_8984);
(statearr_8994_9007[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8992 === 3))
{var inst_8989 = (state_8991[2]);var state_8991__$1 = state_8991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8991__$1,inst_8989);
} else
{if((state_val_8992 === 2))
{var inst_8980 = (state_8991[2]);var inst_8981 = cljs.core.nth.call(null,inst_8980,0,null);var inst_8982 = cljs.core.nth.call(null,inst_8980,1,null);var inst_8983 = cmd.utils.raw__GT_clj.call(null,inst_8982);var state_8991__$1 = (function (){var statearr_8995 = state_8991;(statearr_8995[7] = inst_8983);
return statearr_8995;
})();var G__8996_9008 = inst_8981;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8996_9008))
{var statearr_8997_9009 = state_8991__$1;(statearr_8997_9009[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8996_9008))
{var statearr_8998_9010 = state_8991__$1;(statearr_8998_9010[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8981)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8992 === 1))
{var inst_8974 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_8975 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8976 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8977 = cmd.core.auth_param.call(null,inst_8975,inst_8976);var inst_8978 = cmd.lib.PATCH.call(null,inst_8974,new_content,inst_8977);var state_8991__$1 = state_8991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8991__$1,2,inst_8978);
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
var state_machine__5594__auto____0 = (function (){var statearr_9002 = [null,null,null,null,null,null,null,null];(statearr_9002[0] = state_machine__5594__auto__);
(statearr_9002[1] = 1);
return statearr_9002;
});
var state_machine__5594__auto____1 = (function (state_8991){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9003){if((e9003 instanceof Object))
{var ex__5597__auto__ = e9003;var statearr_9004_9011 = state_8991;(statearr_9004_9011[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9012 = state_8991;
state_8991 = G__9012;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8991){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9005 = f__5609__auto__.call(null);(statearr_9005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9069){var state_val_9070 = (state_9069[1]);if((state_val_9070 === 5))
{var inst_9058 = (state_9069[7]);var inst_9064 = cmd.core.handle_io_error.call(null,inst_9058);var state_9069__$1 = state_9069;var statearr_9071_9085 = state_9069__$1;(statearr_9071_9085[2] = inst_9064);
(statearr_9071_9085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9070 === 4))
{var inst_9058 = (state_9069[7]);var inst_9059 = inst_9058.call(null,"id");var inst_9060 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_9061 = cmd.core.load_gists.call(null);var inst_9062 = cmd.core.load_gist.call(null,inst_9059);var state_9069__$1 = (function (){var statearr_9072 = state_9069;(statearr_9072[8] = inst_9061);
(statearr_9072[9] = inst_9060);
return statearr_9072;
})();var statearr_9073_9086 = state_9069__$1;(statearr_9073_9086[2] = inst_9062);
(statearr_9073_9086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9070 === 3))
{var inst_9067 = (state_9069[2]);var state_9069__$1 = state_9069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9069__$1,inst_9067);
} else
{if((state_val_9070 === 2))
{var inst_9055 = (state_9069[2]);var inst_9056 = cljs.core.nth.call(null,inst_9055,0,null);var inst_9057 = cljs.core.nth.call(null,inst_9055,1,null);var inst_9058 = cmd.utils.raw__GT_clj.call(null,inst_9057);var state_9069__$1 = (function (){var statearr_9074 = state_9069;(statearr_9074[7] = inst_9058);
return statearr_9074;
})();var G__9075_9087 = inst_9056;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9075_9087))
{var statearr_9076_9088 = state_9069__$1;(statearr_9076_9088[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9075_9087))
{var statearr_9077_9089 = state_9069__$1;(statearr_9077_9089[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9056)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9070 === 1))
{var inst_9050 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9051 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9052 = cmd.core.auth_param.call(null,inst_9050,inst_9051);var inst_9053 = cmd.lib.POST.call(null,"/gists",new_content,inst_9052);var state_9069__$1 = state_9069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9069__$1,2,inst_9053);
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
var state_machine__5594__auto____0 = (function (){var statearr_9081 = [null,null,null,null,null,null,null,null,null,null];(statearr_9081[0] = state_machine__5594__auto__);
(statearr_9081[1] = 1);
return statearr_9081;
});
var state_machine__5594__auto____1 = (function (state_9069){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9069);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9082){if((e9082 instanceof Object))
{var ex__5597__auto__ = e9082;var statearr_9083_9090 = state_9069;(statearr_9083_9090[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9091 = state_9069;
state_9069 = G__9091;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9069){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9084 = f__5609__auto__.call(null);(statearr_9084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9084;
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
return (function (state_9111){var state_val_9112 = (state_9111[1]);if((state_val_9112 === 2))
{var inst_9109 = (state_9111[2]);var state_9111__$1 = state_9111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9111__$1,inst_9109);
} else
{if((state_val_9112 === 1))
{var inst_9106 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9107 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9106,null));var state_9111__$1 = state_9111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9111__$1,2,cmd.core.AppBus,inst_9107);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9116 = [null,null,null,null,null,null,null];(statearr_9116[0] = state_machine__5594__auto__);
(statearr_9116[1] = 1);
return statearr_9116;
});
var state_machine__5594__auto____1 = (function (state_9111){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9111);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9117){if((e9117 instanceof Object))
{var ex__5597__auto__ = e9117;var statearr_9118_9120 = state_9111;(statearr_9118_9120[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9121 = state_9111;
state_9111 = G__9121;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9111){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9119 = f__5609__auto__.call(null);(statearr_9119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9119;
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
return (function (state_9167){var state_val_9168 = (state_9167[1]);if((state_val_9168 === 5))
{var inst_9159 = (state_9167[7]);var inst_9162 = cmd.core.unauthorized.call(null,inst_9159);var state_9167__$1 = state_9167;var statearr_9169_9182 = state_9167__$1;(statearr_9169_9182[2] = inst_9162);
(statearr_9169_9182[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9168 === 4))
{var inst_9160 = cmd.core.logged_in.call(null,username,auth_token);var state_9167__$1 = state_9167;var statearr_9170_9183 = state_9167__$1;(statearr_9170_9183[2] = inst_9160);
(statearr_9170_9183[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9168 === 3))
{var inst_9165 = (state_9167[2]);var state_9167__$1 = state_9167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9167__$1,inst_9165);
} else
{if((state_val_9168 === 2))
{var inst_9157 = (state_9167[2]);var inst_9158 = cljs.core.nth.call(null,inst_9157,0,null);var inst_9159 = cljs.core.nth.call(null,inst_9157,1,null);var state_9167__$1 = (function (){var statearr_9171 = state_9167;(statearr_9171[7] = inst_9159);
return statearr_9171;
})();var G__9172_9184 = inst_9158;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9172_9184))
{var statearr_9173_9185 = state_9167__$1;(statearr_9173_9185[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9172_9184))
{var statearr_9174_9186 = state_9167__$1;(statearr_9174_9186[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9158)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9168 === 1))
{var inst_9153 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9154 = cmd.core.auth_param.call(null,username,auth_token);var inst_9155 = cmd.lib.GET.call(null,inst_9153,inst_9154);var state_9167__$1 = state_9167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9167__$1,2,inst_9155);
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
var state_machine__5594__auto____0 = (function (){var statearr_9178 = [null,null,null,null,null,null,null,null];(statearr_9178[0] = state_machine__5594__auto__);
(statearr_9178[1] = 1);
return statearr_9178;
});
var state_machine__5594__auto____1 = (function (state_9167){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9167);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9179){if((e9179 instanceof Object))
{var ex__5597__auto__ = e9179;var statearr_9180_9187 = state_9167;(statearr_9180_9187[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9167);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9188 = state_9167;
state_9167 = G__9188;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9167){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9181 = f__5609__auto__.call(null);(statearr_9181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9181;
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