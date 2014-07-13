// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.core');
goog.require('cljs.core');
goog.require('cmd.lib.dom');
goog.require('cmd.lib.utils');
goog.require('cmd.defs');
goog.require('cmd.globals');
goog.require('cljs.core.async');
goog.require('cmd.lib.io');
goog.require('cljs.core.async');
goog.require('cmd.defs');
goog.require('cmd.lib.io');
goog.require('cmd.lib.utils');
goog.require('cmd.lib.dom');
goog.require('cmd.globals');
cmd.core.IRepl = (function (){var obj8576 = {};return obj8576;
})();
cmd.core.read = (function read(_,app_bus,state,inut_el){if((function (){var and__3439__auto__ = _;if(and__3439__auto__)
{return _.cmd$core$IRepl$read$arity$4;
} else
{return and__3439__auto__;
}
})())
{return _.cmd$core$IRepl$read$arity$4(_,app_bus,state,inut_el);
} else
{var x__4078__auto__ = (((_ == null))?null:_);return (function (){var or__3451__auto__ = (cmd.core.read[goog.typeOf(x__4078__auto__)]);if(or__3451__auto__)
{return or__3451__auto__;
} else
{var or__3451__auto____$1 = (cmd.core.read["_"]);if(or__3451__auto____$1)
{return or__3451__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRepl.read",_);
}
}
})().call(null,_,app_bus,state,inut_el);
}
});
cmd.core.eval = (function eval(_,app_bus,state){if((function (){var and__3439__auto__ = _;if(and__3439__auto__)
{return _.cmd$core$IRepl$eval$arity$3;
} else
{return and__3439__auto__;
}
})())
{return _.cmd$core$IRepl$eval$arity$3(_,app_bus,state);
} else
{var x__4078__auto__ = (((_ == null))?null:_);return (function (){var or__3451__auto__ = (cmd.core.eval[goog.typeOf(x__4078__auto__)]);if(or__3451__auto__)
{return or__3451__auto__;
} else
{var or__3451__auto____$1 = (cmd.core.eval["_"]);if(or__3451__auto____$1)
{return or__3451__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRepl.eval",_);
}
}
})().call(null,_,app_bus,state);
}
});
cmd.core.print = (function print(_,app_bus,state,output_el){if((function (){var and__3439__auto__ = _;if(and__3439__auto__)
{return _.cmd$core$IRepl$print$arity$4;
} else
{return and__3439__auto__;
}
})())
{return _.cmd$core$IRepl$print$arity$4(_,app_bus,state,output_el);
} else
{var x__4078__auto__ = (((_ == null))?null:_);return (function (){var or__3451__auto__ = (cmd.core.print[goog.typeOf(x__4078__auto__)]);if(or__3451__auto__)
{return or__3451__auto__;
} else
{var or__3451__auto____$1 = (cmd.core.print["_"]);if(or__3451__auto____$1)
{return or__3451__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRepl.print",_);
}
}
})().call(null,_,app_bus,state,output_el);
}
});
cmd.core.loop = (function loop(_,app_bus,state){if((function (){var and__3439__auto__ = _;if(and__3439__auto__)
{return _.cmd$core$IRepl$loop$arity$3;
} else
{return and__3439__auto__;
}
})())
{return _.cmd$core$IRepl$loop$arity$3(_,app_bus,state);
} else
{var x__4078__auto__ = (((_ == null))?null:_);return (function (){var or__3451__auto__ = (cmd.core.loop[goog.typeOf(x__4078__auto__)]);if(or__3451__auto__)
{return or__3451__auto__;
} else
{var or__3451__auto____$1 = (cmd.core.loop["_"]);if(or__3451__auto____$1)
{return or__3451__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRepl.loop",_);
}
}
})().call(null,_,app_bus,state);
}
});
cljs.core.add_watch.call(null,cmd.lib.io.active_requests,null,(function (key,ref,old,new$){return cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.logged_in = (function logged_in(username,auth_token){cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"username","username",748190792),username);
cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430),auth_token);
cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),true);
cmd.lib.dom.setcookie.call(null,"username",username);
cmd.lib.dom.setcookie.call(null,"auth-token",auth_token);
var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8596){var state_val_8597 = (state_8596[1]);if((state_val_8597 === 2))
{var inst_8594 = (state_8596[2]);var state_8596__$1 = state_8596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8596__$1,inst_8594);
} else
{if((state_val_8597 === 1))
{var inst_8591 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_8592 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8591,null));var state_8596__$1 = state_8596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8596__$1,2,cmd.globals.AppBus,inst_8592);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8601 = [null,null,null,null,null,null,null];(statearr_8601[0] = state_machine__5594__auto__);
(statearr_8601[1] = 1);
return statearr_8601;
});
var state_machine__5594__auto____1 = (function (state_8596){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8596);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8602){if((e8602 instanceof Object))
{var ex__5597__auto__ = e8602;var statearr_8603_8605 = state_8596;(statearr_8603_8605[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8596);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8606 = state_8596;
state_8596 = G__8606;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8596){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8604 = f__5609__auto__.call(null);(statearr_8604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.lib.utils.raw__GT_clj.call(null,resp);cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__5608__auto___8635 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___8635,error_msg){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___8635,error_msg){
return (function (state_8626){var state_val_8627 = (state_8626[1]);if((state_val_8627 === 2))
{var inst_8624 = (state_8626[2]);var state_8626__$1 = state_8626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8626__$1,inst_8624);
} else
{if((state_val_8627 === 1))
{var inst_8621 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_8622 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8621,null));var state_8626__$1 = state_8626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8626__$1,2,cmd.globals.AppBus,inst_8622);
} else
{return null;
}
}
});})(c__5608__auto___8635,error_msg))
;return ((function (switch__5593__auto__,c__5608__auto___8635,error_msg){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8631 = [null,null,null,null,null,null,null];(statearr_8631[0] = state_machine__5594__auto__);
(statearr_8631[1] = 1);
return statearr_8631;
});
var state_machine__5594__auto____1 = (function (state_8626){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8626);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8632){if((e8632 instanceof Object))
{var ex__5597__auto__ = e8632;var statearr_8633_8636 = state_8626;(statearr_8633_8636[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8637 = state_8626;
state_8626 = G__8637;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8626){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___8635,error_msg))
})();var state__5610__auto__ = (function (){var statearr_8634 = f__5609__auto__.call(null);(statearr_8634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___8635);
return statearr_8634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___8635,error_msg))
);
return cmd.lib.utils.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8683){var state_val_8684 = (state_8683[1]);if((state_val_8684 === 5))
{var inst_8675 = (state_8683[7]);var inst_8678 = cmd.core.unauthorized.call(null,inst_8675);var state_8683__$1 = state_8683;var statearr_8685_8698 = state_8683__$1;(statearr_8685_8698[2] = inst_8678);
(statearr_8685_8698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8684 === 4))
{var inst_8676 = cmd.core.logged_in.call(null,username,auth_token);var state_8683__$1 = state_8683;var statearr_8686_8699 = state_8683__$1;(statearr_8686_8699[2] = inst_8676);
(statearr_8686_8699[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8684 === 3))
{var inst_8681 = (state_8683[2]);var state_8683__$1 = state_8683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8683__$1,inst_8681);
} else
{if((state_val_8684 === 2))
{var inst_8673 = (state_8683[2]);var inst_8674 = cljs.core.nth.call(null,inst_8673,0,null);var inst_8675 = cljs.core.nth.call(null,inst_8673,1,null);var state_8683__$1 = (function (){var statearr_8687 = state_8683;(statearr_8687[7] = inst_8675);
return statearr_8687;
})();var G__8688_8700 = inst_8674;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8688_8700))
{var statearr_8689_8701 = state_8683__$1;(statearr_8689_8701[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8688_8700))
{var statearr_8690_8702 = state_8683__$1;(statearr_8690_8702[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8674)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8684 === 1))
{var inst_8669 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_8670 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_8671 = cmd.lib.io.GET.call(null,inst_8669,inst_8670);var state_8683__$1 = state_8683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8683__$1,2,inst_8671);
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
var state_machine__5594__auto____0 = (function (){var statearr_8694 = [null,null,null,null,null,null,null,null];(statearr_8694[0] = state_machine__5594__auto__);
(statearr_8694[1] = 1);
return statearr_8694;
});
var state_machine__5594__auto____1 = (function (state_8683){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8683);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8695){if((e8695 instanceof Object))
{var ex__5597__auto__ = e8695;var statearr_8696_8703 = state_8683;(statearr_8696_8703[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8704 = state_8683;
state_8683 = G__8704;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8683){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8697 = f__5609__auto__.call(null);(statearr_8697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.authenticated_om_QMARK_ = (function authenticated_om_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.core.authenticated_QMARK_ = (function authenticated_QMARK_(state){return cmd.lib.utils.get_state.call(null,state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.core.error_set_QMARK_ = (function error_set_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"error","error",1110689146));
});

//# sourceMappingURL=core.js.map