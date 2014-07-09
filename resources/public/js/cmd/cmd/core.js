// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.core');
goog.require('cljs.core');
goog.require('cmd.lib');
goog.require('cmd.utils');
goog.require('cljs.core.async');
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
return (function (e){var data = e.data;var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,data,worker,ch){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,data,worker,ch){
return (function (state_9939){var state_val_9940 = (state_9939[1]);if((state_val_9940 === 2))
{var inst_9936 = (state_9939[2]);var inst_9937 = cljs.core.async.close_BANG_.call(null,ch);var state_9939__$1 = (function (){var statearr_9941 = state_9939;(statearr_9941[7] = inst_9936);
return statearr_9941;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9939__$1,inst_9937);
} else
{if((state_val_9940 === 1))
{var inst_9933 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_9934 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9933,null));var state_9939__$1 = state_9939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9939__$1,2,ch,inst_9934);
} else
{return null;
}
}
});})(c__6291__auto__,data,worker,ch))
;return ((function (switch__6276__auto__,c__6291__auto__,data,worker,ch){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9945 = [null,null,null,null,null,null,null,null];(statearr_9945[0] = state_machine__6277__auto__);
(statearr_9945[1] = 1);
return statearr_9945;
});
var state_machine__6277__auto____1 = (function (state_9939){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9939);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9946){if((e9946 instanceof Object))
{var ex__6280__auto__ = e9946;var statearr_9947_9949 = state_9939;(statearr_9947_9949[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9950 = state_9939;
state_9939 = G__9950;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9939){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,data,worker,ch))
})();var state__6293__auto__ = (function (){var statearr_9948 = f__6292__auto__.call(null);(statearr_9948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,data,worker,ch))
);
return c__6291__auto__;
});})(worker,ch))
,false);
worker.postMessage(text);
return ch;
});
cmd.core.html__GT_react = (function html__GT_react(html){return html;
});
cmd.core.process = (function process__$1(md,cb){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9992){var state_val_9993 = (state_9992[1]);if((state_val_9993 === 5))
{var inst_9987 = cb.call(null,"<Error>");var state_9992__$1 = state_9992;var statearr_9994_10007 = state_9992__$1;(statearr_9994_10007[2] = inst_9987);
(statearr_9994_10007[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9993 === 4))
{var inst_9984 = (state_9992[7]);var inst_9985 = cb.call(null,inst_9984);var state_9992__$1 = state_9992;var statearr_9995_10008 = state_9992__$1;(statearr_9995_10008[2] = inst_9985);
(statearr_9995_10008[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9993 === 3))
{var inst_9990 = (state_9992[2]);var state_9992__$1 = state_9992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9992__$1,inst_9990);
} else
{if((state_val_9993 === 2))
{var inst_9982 = (state_9992[2]);var inst_9983 = cljs.core.nth.call(null,inst_9982,0,null);var inst_9984 = cljs.core.nth.call(null,inst_9982,1,null);var state_9992__$1 = (function (){var statearr_9996 = state_9992;(statearr_9996[7] = inst_9984);
return statearr_9996;
})();var G__9997_10009 = inst_9983;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9997_10009))
{var statearr_9998_10010 = state_9992__$1;(statearr_9998_10010[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9997_10009))
{var statearr_9999_10011 = state_9992__$1;(statearr_9999_10011[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9983)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9993 === 1))
{var inst_9980 = cmd.core.wmd__GT_html.call(null,md);var state_9992__$1 = state_9992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9992__$1,2,inst_9980);
} else
{return null;
}
}
}
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10003 = [null,null,null,null,null,null,null,null];(statearr_10003[0] = state_machine__6277__auto__);
(statearr_10003[1] = 1);
return statearr_10003;
});
var state_machine__6277__auto____1 = (function (state_9992){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9992);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10004){if((e10004 instanceof Object))
{var ex__6280__auto__ = e10004;var statearr_10005_10012 = state_9992;(statearr_10005_10012[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10004;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10013 = state_9992;
state_9992 = G__10013;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9992){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10006 = f__6292__auto__.call(null);(statearr_10006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.auth_param = (function auth_param(username,auth_token){var obj10017 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj10017;
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__10018_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__10018_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.utils.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10070){var state_val_10071 = (state_10070[1]);if((state_val_10071 === 5))
{var inst_10062 = (state_10070[7]);var inst_10065 = cmd.core.handle_io_error.call(null,inst_10062);var state_10070__$1 = state_10070;var statearr_10072_10085 = state_10070__$1;(statearr_10072_10085[2] = inst_10065);
(statearr_10072_10085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10071 === 4))
{var inst_10062 = (state_10070[7]);var inst_10063 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_10062);var state_10070__$1 = state_10070;var statearr_10073_10086 = state_10070__$1;(statearr_10073_10086[2] = inst_10063);
(statearr_10073_10086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10071 === 3))
{var inst_10068 = (state_10070[2]);var state_10070__$1 = state_10070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10070__$1,inst_10068);
} else
{if((state_val_10071 === 2))
{var inst_10059 = (state_10070[2]);var inst_10060 = cljs.core.nth.call(null,inst_10059,0,null);var inst_10061 = cljs.core.nth.call(null,inst_10059,1,null);var inst_10062 = cmd.utils.raw__GT_clj.call(null,inst_10061);var state_10070__$1 = (function (){var statearr_10074 = state_10070;(statearr_10074[7] = inst_10062);
return statearr_10074;
})();var G__10075_10087 = inst_10060;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10075_10087))
{var statearr_10076_10088 = state_10070__$1;(statearr_10076_10088[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10075_10087))
{var statearr_10077_10089 = state_10070__$1;(statearr_10077_10089[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10060)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10071 === 1))
{var inst_10053 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10054 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10055 = [cljs.core.str("/users/"),cljs.core.str(inst_10053),cljs.core.str("/gists")].join('');var inst_10056 = cmd.core.auth_param.call(null,inst_10053,inst_10054);var inst_10057 = cmd.lib.GET.call(null,inst_10055,inst_10056);var state_10070__$1 = state_10070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10070__$1,2,inst_10057);
} else
{return null;
}
}
}
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10081 = [null,null,null,null,null,null,null,null];(statearr_10081[0] = state_machine__6277__auto__);
(statearr_10081[1] = 1);
return statearr_10081;
});
var state_machine__6277__auto____1 = (function (state_10070){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10082){if((e10082 instanceof Object))
{var ex__6280__auto__ = e10082;var statearr_10083_10090 = state_10070;(statearr_10083_10090[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10091 = state_10070;
state_10070 = G__10091;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10070){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10084 = f__6292__auto__.call(null);(statearr_10084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10166){var state_val_10167 = (state_10166[1]);if((state_val_10167 === 6))
{var inst_10146 = (state_10166[7]);var inst_10160 = cmd.utils.raw__GT_clj.call(null,inst_10146);var inst_10161 = cmd.core.handle_io_error.call(null,inst_10160);var state_10166__$1 = state_10166;var statearr_10168_10182 = state_10166__$1;(statearr_10168_10182[2] = inst_10161);
(statearr_10168_10182[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10167 === 5))
{var inst_10158 = (state_10166[2]);var state_10166__$1 = state_10166;var statearr_10169_10183 = state_10166__$1;(statearr_10169_10183[2] = inst_10158);
(statearr_10169_10183[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10167 === 4))
{var inst_10146 = (state_10166[7]);var inst_10148 = cmd.utils.raw__GT_clj.call(null,inst_10146);var inst_10149 = inst_10148.call(null,"files");var inst_10150 = cljs.core.first.call(null,inst_10149);var inst_10151 = cljs.core.nth.call(null,inst_10150,0,null);var inst_10152 = cljs.core.nth.call(null,inst_10150,1,null);var inst_10153 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_10151);var inst_10154 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10148);var inst_10155 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_10156 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10155,null));var state_10166__$1 = (function (){var statearr_10170 = state_10166;(statearr_10170[8] = inst_10154);
(statearr_10170[9] = inst_10152);
(statearr_10170[10] = inst_10153);
return statearr_10170;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10166__$1,5,cmd.core.AppBus,inst_10156);
} else
{if((state_val_10167 === 3))
{var inst_10164 = (state_10166[2]);var state_10166__$1 = state_10166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10166__$1,inst_10164);
} else
{if((state_val_10167 === 2))
{var inst_10144 = (state_10166[2]);var inst_10145 = cljs.core.nth.call(null,inst_10144,0,null);var inst_10146 = cljs.core.nth.call(null,inst_10144,1,null);var state_10166__$1 = (function (){var statearr_10171 = state_10166;(statearr_10171[7] = inst_10146);
return statearr_10171;
})();var G__10172_10184 = inst_10145;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10172_10184))
{var statearr_10173_10185 = state_10166__$1;(statearr_10173_10185[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10172_10184))
{var statearr_10174_10186 = state_10166__$1;(statearr_10174_10186[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10145)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10167 === 1))
{var inst_10138 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_10139 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10140 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10141 = cmd.core.auth_param.call(null,inst_10139,inst_10140);var inst_10142 = cmd.lib.GET.call(null,inst_10138,inst_10141);var state_10166__$1 = state_10166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10166__$1,2,inst_10142);
} else
{return null;
}
}
}
}
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10178 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10178[0] = state_machine__6277__auto__);
(statearr_10178[1] = 1);
return statearr_10178;
});
var state_machine__6277__auto____1 = (function (state_10166){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10166);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10179){if((e10179 instanceof Object))
{var ex__6280__auto__ = e10179;var statearr_10180_10187 = state_10166;(statearr_10180_10187[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10188 = state_10166;
state_10166 = G__10188;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10166){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10181 = f__6292__auto__.call(null);(statearr_10181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10238){var state_val_10239 = (state_10238[1]);if((state_val_10239 === 5))
{var inst_10231 = (state_10238[7]);var inst_10233 = cmd.core.handle_io_error.call(null,inst_10231);var state_10238__$1 = state_10238;var statearr_10240_10253 = state_10238__$1;(statearr_10240_10253[2] = inst_10233);
(statearr_10240_10253[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10239 === 4))
{var inst_10231 = (state_10238[7]);var state_10238__$1 = state_10238;var statearr_10241_10254 = state_10238__$1;(statearr_10241_10254[2] = inst_10231);
(statearr_10241_10254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10239 === 3))
{var inst_10236 = (state_10238[2]);var state_10238__$1 = state_10238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10238__$1,inst_10236);
} else
{if((state_val_10239 === 2))
{var inst_10228 = (state_10238[2]);var inst_10229 = cljs.core.nth.call(null,inst_10228,0,null);var inst_10230 = cljs.core.nth.call(null,inst_10228,1,null);var inst_10231 = cmd.utils.raw__GT_clj.call(null,inst_10230);var state_10238__$1 = (function (){var statearr_10242 = state_10238;(statearr_10242[7] = inst_10231);
return statearr_10242;
})();var G__10243_10255 = inst_10229;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10243_10255))
{var statearr_10244_10256 = state_10238__$1;(statearr_10244_10256[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10243_10255))
{var statearr_10245_10257 = state_10238__$1;(statearr_10245_10257[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10229)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10239 === 1))
{var inst_10222 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10223 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10224 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10225 = cmd.core.auth_param.call(null,inst_10223,inst_10224);var inst_10226 = cmd.lib.PATCH.call(null,inst_10222,new_content,inst_10225);var state_10238__$1 = state_10238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10238__$1,2,inst_10226);
} else
{return null;
}
}
}
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10249 = [null,null,null,null,null,null,null,null];(statearr_10249[0] = state_machine__6277__auto__);
(statearr_10249[1] = 1);
return statearr_10249;
});
var state_machine__6277__auto____1 = (function (state_10238){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10250){if((e10250 instanceof Object))
{var ex__6280__auto__ = e10250;var statearr_10251_10258 = state_10238;(statearr_10251_10258[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10259 = state_10238;
state_10238 = G__10259;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10238){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10252 = f__6292__auto__.call(null);(statearr_10252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.logged_in = (function logged_in(username,auth_token){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792),username);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430),auth_token);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),true);
cmd.utils.setcookie.call(null,"username",username);
cmd.utils.setcookie.call(null,"auth-token",auth_token);
var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10279){var state_val_10280 = (state_10279[1]);if((state_val_10280 === 2))
{var inst_10277 = (state_10279[2]);var state_10279__$1 = state_10279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10279__$1,inst_10277);
} else
{if((state_val_10280 === 1))
{var inst_10274 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_10275 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10274,null));var state_10279__$1 = state_10279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10279__$1,2,cmd.core.AppBus,inst_10275);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10284 = [null,null,null,null,null,null,null];(statearr_10284[0] = state_machine__6277__auto__);
(statearr_10284[1] = 1);
return statearr_10284;
});
var state_machine__6277__auto____1 = (function (state_10279){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10279);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10285){if((e10285 instanceof Object))
{var ex__6280__auto__ = e10285;var statearr_10286_10288 = state_10279;(statearr_10286_10288[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10279);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10285;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10289 = state_10279;
state_10279 = G__10289;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10279){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10287 = f__6292__auto__.call(null);(statearr_10287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.utils.say.call(null,[cljs.core.str("Auth Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10335){var state_val_10336 = (state_10335[1]);if((state_val_10336 === 5))
{var inst_10327 = (state_10335[7]);var inst_10330 = cmd.core.unauthorized.call(null,inst_10327);var state_10335__$1 = state_10335;var statearr_10337_10350 = state_10335__$1;(statearr_10337_10350[2] = inst_10330);
(statearr_10337_10350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10336 === 4))
{var inst_10328 = cmd.core.logged_in.call(null,username,auth_token);var state_10335__$1 = state_10335;var statearr_10338_10351 = state_10335__$1;(statearr_10338_10351[2] = inst_10328);
(statearr_10338_10351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10336 === 3))
{var inst_10333 = (state_10335[2]);var state_10335__$1 = state_10335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10335__$1,inst_10333);
} else
{if((state_val_10336 === 2))
{var inst_10325 = (state_10335[2]);var inst_10326 = cljs.core.nth.call(null,inst_10325,0,null);var inst_10327 = cljs.core.nth.call(null,inst_10325,1,null);var state_10335__$1 = (function (){var statearr_10339 = state_10335;(statearr_10339[7] = inst_10327);
return statearr_10339;
})();var G__10340_10352 = inst_10326;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10340_10352))
{var statearr_10341_10353 = state_10335__$1;(statearr_10341_10353[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10340_10352))
{var statearr_10342_10354 = state_10335__$1;(statearr_10342_10354[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10326)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10336 === 1))
{var inst_10321 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_10322 = cmd.core.auth_param.call(null,username,auth_token);var inst_10323 = cmd.lib.GET.call(null,inst_10321,inst_10322);var state_10335__$1 = state_10335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10335__$1,2,inst_10323);
} else
{return null;
}
}
}
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10346 = [null,null,null,null,null,null,null,null];(statearr_10346[0] = state_machine__6277__auto__);
(statearr_10346[1] = 1);
return statearr_10346;
});
var state_machine__6277__auto____1 = (function (state_10335){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10335);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10347){if((e10347 instanceof Object))
{var ex__6280__auto__ = e10347;var statearr_10348_10355 = state_10335;(statearr_10348_10355[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10356 = state_10335;
state_10335 = G__10356;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10335){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10349 = f__6292__auto__.call(null);(statearr_10349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.authenticated_om_QMARK_ = (function authenticated_om_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.core.authenticated_QMARK_ = (function authenticated_QMARK_(state){return cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.core.error_set_QMARK_ = (function error_set_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"error","error",1110689146));
});

//# sourceMappingURL=core.js.map