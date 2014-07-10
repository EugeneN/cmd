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
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__8640_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__8640_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.utils.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8692){var state_val_8693 = (state_8692[1]);if((state_val_8693 === 5))
{var inst_8684 = (state_8692[7]);var inst_8687 = cmd.core.handle_io_error.call(null,inst_8684);var state_8692__$1 = state_8692;var statearr_8694_8707 = state_8692__$1;(statearr_8694_8707[2] = inst_8687);
(statearr_8694_8707[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 4))
{var inst_8684 = (state_8692[7]);var inst_8685 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_8684);var state_8692__$1 = state_8692;var statearr_8695_8708 = state_8692__$1;(statearr_8695_8708[2] = inst_8685);
(statearr_8695_8708[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 3))
{var inst_8690 = (state_8692[2]);var state_8692__$1 = state_8692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8692__$1,inst_8690);
} else
{if((state_val_8693 === 2))
{var inst_8681 = (state_8692[2]);var inst_8682 = cljs.core.nth.call(null,inst_8681,0,null);var inst_8683 = cljs.core.nth.call(null,inst_8681,1,null);var inst_8684 = cmd.utils.raw__GT_clj.call(null,inst_8683);var state_8692__$1 = (function (){var statearr_8696 = state_8692;(statearr_8696[7] = inst_8684);
return statearr_8696;
})();var G__8697_8709 = inst_8682;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8697_8709))
{var statearr_8698_8710 = state_8692__$1;(statearr_8698_8710[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8697_8709))
{var statearr_8699_8711 = state_8692__$1;(statearr_8699_8711[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8682)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 1))
{var inst_8675 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8676 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8677 = [cljs.core.str("/users/"),cljs.core.str(inst_8675),cljs.core.str("/gists")].join('');var inst_8678 = cmd.core.auth_param.call(null,inst_8675,inst_8676);var inst_8679 = cmd.lib.GET.call(null,inst_8677,inst_8678);var state_8692__$1 = state_8692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8692__$1,2,inst_8679);
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
var state_machine__5594__auto____0 = (function (){var statearr_8703 = [null,null,null,null,null,null,null,null];(statearr_8703[0] = state_machine__5594__auto__);
(statearr_8703[1] = 1);
return statearr_8703;
});
var state_machine__5594__auto____1 = (function (state_8692){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8692);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8704){if((e8704 instanceof Object))
{var ex__5597__auto__ = e8704;var statearr_8705_8712 = state_8692;(statearr_8705_8712[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8692);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8713 = state_8692;
state_8692 = G__8713;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8692){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8706 = f__5609__auto__.call(null);(statearr_8706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8792){var state_val_8793 = (state_8792[1]);if((state_val_8793 === 6))
{var inst_8770 = (state_8792[7]);var inst_8786 = cmd.utils.raw__GT_clj.call(null,inst_8770);var inst_8787 = cmd.core.handle_io_error.call(null,inst_8786);var state_8792__$1 = state_8792;var statearr_8794_8808 = state_8792__$1;(statearr_8794_8808[2] = inst_8787);
(statearr_8794_8808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8793 === 5))
{var inst_8784 = (state_8792[2]);var state_8792__$1 = state_8792;var statearr_8795_8809 = state_8792__$1;(statearr_8795_8809[2] = inst_8784);
(statearr_8795_8809[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8793 === 4))
{var inst_8770 = (state_8792[7]);var inst_8772 = cmd.utils.raw__GT_clj.call(null,inst_8770);var inst_8773 = inst_8772.call(null,"files");var inst_8774 = cljs.core.first.call(null,inst_8773);var inst_8775 = cljs.core.nth.call(null,inst_8774,0,null);var inst_8776 = cljs.core.nth.call(null,inst_8774,1,null);var inst_8777 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_8775);var inst_8778 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8772);var inst_8779 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_8780 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_8781 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_8782 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8781,null));var state_8792__$1 = (function (){var statearr_8796 = state_8792;(statearr_8796[8] = inst_8780);
(statearr_8796[9] = inst_8777);
(statearr_8796[10] = inst_8778);
(statearr_8796[11] = inst_8779);
(statearr_8796[12] = inst_8776);
return statearr_8796;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8792__$1,5,cmd.core.AppBus,inst_8782);
} else
{if((state_val_8793 === 3))
{var inst_8790 = (state_8792[2]);var state_8792__$1 = state_8792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8792__$1,inst_8790);
} else
{if((state_val_8793 === 2))
{var inst_8768 = (state_8792[2]);var inst_8769 = cljs.core.nth.call(null,inst_8768,0,null);var inst_8770 = cljs.core.nth.call(null,inst_8768,1,null);var state_8792__$1 = (function (){var statearr_8797 = state_8792;(statearr_8797[7] = inst_8770);
return statearr_8797;
})();var G__8798_8810 = inst_8769;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8798_8810))
{var statearr_8799_8811 = state_8792__$1;(statearr_8799_8811[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8798_8810))
{var statearr_8800_8812 = state_8792__$1;(statearr_8800_8812[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8769)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8793 === 1))
{var inst_8762 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_8763 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8764 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8765 = cmd.core.auth_param.call(null,inst_8763,inst_8764);var inst_8766 = cmd.lib.GET.call(null,inst_8762,inst_8765);var state_8792__$1 = state_8792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8792__$1,2,inst_8766);
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
var state_machine__5594__auto____0 = (function (){var statearr_8804 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8804[0] = state_machine__5594__auto__);
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
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8866){var state_val_8867 = (state_8866[1]);if((state_val_8867 === 5))
{var inst_8858 = (state_8866[7]);var inst_8861 = cmd.core.handle_io_error.call(null,inst_8858);var state_8866__$1 = state_8866;var statearr_8868_8881 = state_8866__$1;(statearr_8868_8881[2] = inst_8861);
(statearr_8868_8881[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8867 === 4))
{var inst_8858 = (state_8866[7]);var inst_8859 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_8858);var state_8866__$1 = state_8866;var statearr_8869_8882 = state_8866__$1;(statearr_8869_8882[2] = inst_8859);
(statearr_8869_8882[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8867 === 3))
{var inst_8864 = (state_8866[2]);var state_8866__$1 = state_8866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8866__$1,inst_8864);
} else
{if((state_val_8867 === 2))
{var inst_8855 = (state_8866[2]);var inst_8856 = cljs.core.nth.call(null,inst_8855,0,null);var inst_8857 = cljs.core.nth.call(null,inst_8855,1,null);var inst_8858 = cmd.utils.raw__GT_clj.call(null,inst_8857);var state_8866__$1 = (function (){var statearr_8870 = state_8866;(statearr_8870[7] = inst_8858);
return statearr_8870;
})();var G__8871_8883 = inst_8856;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8871_8883))
{var statearr_8872_8884 = state_8866__$1;(statearr_8872_8884[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8871_8883))
{var statearr_8873_8885 = state_8866__$1;(statearr_8873_8885[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8856)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8867 === 1))
{var inst_8849 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_8850 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8851 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8852 = cmd.core.auth_param.call(null,inst_8850,inst_8851);var inst_8853 = cmd.lib.PATCH.call(null,inst_8849,new_content,inst_8852);var state_8866__$1 = state_8866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8866__$1,2,inst_8853);
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
var state_machine__5594__auto____0 = (function (){var statearr_8877 = [null,null,null,null,null,null,null,null];(statearr_8877[0] = state_machine__5594__auto__);
(statearr_8877[1] = 1);
return statearr_8877;
});
var state_machine__5594__auto____1 = (function (state_8866){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8866);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8878){if((e8878 instanceof Object))
{var ex__5597__auto__ = e8878;var statearr_8879_8886 = state_8866;(statearr_8879_8886[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8866);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8887 = state_8866;
state_8866 = G__8887;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8866){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8880 = f__5609__auto__.call(null);(statearr_8880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8953){var state_val_8954 = (state_8953[1]);if((state_val_8954 === 5))
{var inst_8940 = (state_8953[7]);var inst_8948 = cmd.core.handle_io_error.call(null,inst_8940);var state_8953__$1 = state_8953;var statearr_8955_8970 = state_8953__$1;(statearr_8955_8970[2] = inst_8948);
(statearr_8955_8970[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8954 === 4))
{var inst_8940 = (state_8953[7]);var inst_8941 = inst_8940.call(null,"id");var inst_8942 = [cljs.core.str("Created new gist with id="),cljs.core.str(inst_8941)].join('');var inst_8943 = cmd.utils.say.call(null,inst_8942);var inst_8944 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_8945 = cmd.core.load_gists.call(null);var inst_8946 = cmd.core.load_gist.call(null,inst_8941);var state_8953__$1 = (function (){var statearr_8956 = state_8953;(statearr_8956[8] = inst_8944);
(statearr_8956[9] = inst_8945);
(statearr_8956[10] = inst_8943);
return statearr_8956;
})();var statearr_8957_8971 = state_8953__$1;(statearr_8957_8971[2] = inst_8946);
(statearr_8957_8971[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8954 === 3))
{var inst_8951 = (state_8953[2]);var state_8953__$1 = state_8953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8953__$1,inst_8951);
} else
{if((state_val_8954 === 2))
{var inst_8937 = (state_8953[2]);var inst_8938 = cljs.core.nth.call(null,inst_8937,0,null);var inst_8939 = cljs.core.nth.call(null,inst_8937,1,null);var inst_8940 = cmd.utils.raw__GT_clj.call(null,inst_8939);var state_8953__$1 = (function (){var statearr_8958 = state_8953;(statearr_8958[7] = inst_8940);
return statearr_8958;
})();var G__8959_8972 = inst_8938;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8959_8972))
{var statearr_8960_8973 = state_8953__$1;(statearr_8960_8973[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8959_8972))
{var statearr_8961_8974 = state_8953__$1;(statearr_8961_8974[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8938)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8954 === 1))
{var inst_8929 = [cljs.core.str("Gonna create new gist "),cljs.core.str(new_content)].join('');var inst_8930 = cmd.utils.say.call(null,inst_8929);var inst_8932 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8933 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8934 = cmd.core.auth_param.call(null,inst_8932,inst_8933);var inst_8935 = cmd.lib.POST.call(null,"/gists",new_content,inst_8934);var state_8953__$1 = (function (){var statearr_8962 = state_8953;(statearr_8962[11] = inst_8930);
return statearr_8962;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8953__$1,2,inst_8935);
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
var state_machine__5594__auto____0 = (function (){var statearr_8966 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8966[0] = state_machine__5594__auto__);
(statearr_8966[1] = 1);
return statearr_8966;
});
var state_machine__5594__auto____1 = (function (state_8953){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8953);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8967){if((e8967 instanceof Object))
{var ex__5597__auto__ = e8967;var statearr_8968_8975 = state_8953;(statearr_8968_8975[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8976 = state_8953;
state_8953 = G__8976;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8953){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8969 = f__5609__auto__.call(null);(statearr_8969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8969;
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
return (function (state_8996){var state_val_8997 = (state_8996[1]);if((state_val_8997 === 2))
{var inst_8994 = (state_8996[2]);var state_8996__$1 = state_8996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8996__$1,inst_8994);
} else
{if((state_val_8997 === 1))
{var inst_8991 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_8992 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8991,null));var state_8996__$1 = state_8996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8996__$1,2,cmd.core.AppBus,inst_8992);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9001 = [null,null,null,null,null,null,null];(statearr_9001[0] = state_machine__5594__auto__);
(statearr_9001[1] = 1);
return statearr_9001;
});
var state_machine__5594__auto____1 = (function (state_8996){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8996);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9002){if((e9002 instanceof Object))
{var ex__5597__auto__ = e9002;var statearr_9003_9005 = state_8996;(statearr_9003_9005[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9006 = state_8996;
state_8996 = G__9006;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8996){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9004 = f__5609__auto__.call(null);(statearr_9004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9004;
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
return (function (state_9052){var state_val_9053 = (state_9052[1]);if((state_val_9053 === 5))
{var inst_9044 = (state_9052[7]);var inst_9047 = cmd.core.unauthorized.call(null,inst_9044);var state_9052__$1 = state_9052;var statearr_9054_9067 = state_9052__$1;(statearr_9054_9067[2] = inst_9047);
(statearr_9054_9067[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9053 === 4))
{var inst_9045 = cmd.core.logged_in.call(null,username,auth_token);var state_9052__$1 = state_9052;var statearr_9055_9068 = state_9052__$1;(statearr_9055_9068[2] = inst_9045);
(statearr_9055_9068[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9053 === 3))
{var inst_9050 = (state_9052[2]);var state_9052__$1 = state_9052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9052__$1,inst_9050);
} else
{if((state_val_9053 === 2))
{var inst_9042 = (state_9052[2]);var inst_9043 = cljs.core.nth.call(null,inst_9042,0,null);var inst_9044 = cljs.core.nth.call(null,inst_9042,1,null);var state_9052__$1 = (function (){var statearr_9056 = state_9052;(statearr_9056[7] = inst_9044);
return statearr_9056;
})();var G__9057_9069 = inst_9043;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9057_9069))
{var statearr_9058_9070 = state_9052__$1;(statearr_9058_9070[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9057_9069))
{var statearr_9059_9071 = state_9052__$1;(statearr_9059_9071[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9043)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9053 === 1))
{var inst_9038 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9039 = cmd.core.auth_param.call(null,username,auth_token);var inst_9040 = cmd.lib.GET.call(null,inst_9038,inst_9039);var state_9052__$1 = state_9052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9052__$1,2,inst_9040);
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
var state_machine__5594__auto____0 = (function (){var statearr_9063 = [null,null,null,null,null,null,null,null];(statearr_9063[0] = state_machine__5594__auto__);
(statearr_9063[1] = 1);
return statearr_9063;
});
var state_machine__5594__auto____1 = (function (state_9052){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9052);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9064){if((e9064 instanceof Object))
{var ex__5597__auto__ = e9064;var statearr_9065_9072 = state_9052;(statearr_9065_9072[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9073 = state_9052;
state_9052 = G__9073;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9052){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9066 = f__5609__auto__.call(null);(statearr_9066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9066;
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