// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.plugins.markdown.eval');
goog.require('cljs.core');
goog.require('cmd.globals');
goog.require('cmd.lib.utils');
goog.require('cljs.core.async');
goog.require('cmd.globals');
goog.require('cljs.core.async');
goog.require('cmd.lib.utils');
cmd.plugins.markdown.eval.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,data,worker,ch){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,data,worker,ch){
return (function (state_9174){var state_val_9175 = (state_9174[1]);if((state_val_9175 === 2))
{var inst_9171 = (state_9174[2]);var inst_9172 = cljs.core.async.close_BANG_.call(null,ch);var state_9174__$1 = (function (){var statearr_9176 = state_9174;(statearr_9176[7] = inst_9171);
return statearr_9176;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9174__$1,inst_9172);
} else
{if((state_val_9175 === 1))
{var inst_9168 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_9169 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9168,null));var state_9174__$1 = state_9174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9174__$1,2,ch,inst_9169);
} else
{return null;
}
}
});})(c__5608__auto__,data,worker,ch))
;return ((function (switch__5593__auto__,c__5608__auto__,data,worker,ch){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9180 = [null,null,null,null,null,null,null,null];(statearr_9180[0] = state_machine__5594__auto__);
(statearr_9180[1] = 1);
return statearr_9180;
});
var state_machine__5594__auto____1 = (function (state_9174){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9174);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9181){if((e9181 instanceof Object))
{var ex__5597__auto__ = e9181;var statearr_9182_9184 = state_9174;(statearr_9182_9184[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9174);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9185 = state_9174;
state_9174 = G__9185;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9174){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,data,worker,ch))
})();var state__5610__auto__ = (function (){var statearr_9183 = f__5609__auto__.call(null);(statearr_9183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__,data,worker,ch))
);
return c__5608__auto__;
});})(worker,ch))
,false);
worker.postMessage(text);
return ch;
});
cmd.plugins.markdown.eval.process = (function process__$1(md,cb){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9227){var state_val_9228 = (state_9227[1]);if((state_val_9228 === 5))
{var inst_9222 = cb.call(null,"<Error>");var state_9227__$1 = state_9227;var statearr_9229_9242 = state_9227__$1;(statearr_9229_9242[2] = inst_9222);
(statearr_9229_9242[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9228 === 4))
{var inst_9219 = (state_9227[7]);var inst_9220 = cb.call(null,inst_9219);var state_9227__$1 = state_9227;var statearr_9230_9243 = state_9227__$1;(statearr_9230_9243[2] = inst_9220);
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
{var inst_9215 = cmd.plugins.markdown.eval.wmd__GT_html.call(null,md);var state_9227__$1 = state_9227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9227__$1,2,inst_9215);
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

//# sourceMappingURL=eval.js.map