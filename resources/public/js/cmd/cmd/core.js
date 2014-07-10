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
return (function (state_9951){var state_val_9952 = (state_9951[1]);if((state_val_9952 === 2))
{var inst_9948 = (state_9951[2]);var inst_9949 = cljs.core.async.close_BANG_.call(null,ch);var state_9951__$1 = (function (){var statearr_9953 = state_9951;(statearr_9953[7] = inst_9948);
return statearr_9953;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9951__$1,inst_9949);
} else
{if((state_val_9952 === 1))
{var inst_9945 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_9946 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9945,null));var state_9951__$1 = state_9951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9951__$1,2,ch,inst_9946);
} else
{return null;
}
}
});})(c__6291__auto__,data,worker,ch))
;return ((function (switch__6276__auto__,c__6291__auto__,data,worker,ch){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9957 = [null,null,null,null,null,null,null,null];(statearr_9957[0] = state_machine__6277__auto__);
(statearr_9957[1] = 1);
return statearr_9957;
});
var state_machine__6277__auto____1 = (function (state_9951){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9951);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9958){if((e9958 instanceof Object))
{var ex__6280__auto__ = e9958;var statearr_9959_9961 = state_9951;(statearr_9959_9961[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9962 = state_9951;
state_9951 = G__9962;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9951){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,data,worker,ch))
})();var state__6293__auto__ = (function (){var statearr_9960 = f__6292__auto__.call(null);(statearr_9960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9960;
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
return (function (state_10004){var state_val_10005 = (state_10004[1]);if((state_val_10005 === 5))
{var inst_9999 = cb.call(null,"<Error>");var state_10004__$1 = state_10004;var statearr_10006_10019 = state_10004__$1;(statearr_10006_10019[2] = inst_9999);
(statearr_10006_10019[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10005 === 4))
{var inst_9996 = (state_10004[7]);var inst_9997 = cb.call(null,inst_9996);var state_10004__$1 = state_10004;var statearr_10007_10020 = state_10004__$1;(statearr_10007_10020[2] = inst_9997);
(statearr_10007_10020[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10005 === 3))
{var inst_10002 = (state_10004[2]);var state_10004__$1 = state_10004;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10004__$1,inst_10002);
} else
{if((state_val_10005 === 2))
{var inst_9994 = (state_10004[2]);var inst_9995 = cljs.core.nth.call(null,inst_9994,0,null);var inst_9996 = cljs.core.nth.call(null,inst_9994,1,null);var state_10004__$1 = (function (){var statearr_10008 = state_10004;(statearr_10008[7] = inst_9996);
return statearr_10008;
})();var G__10009_10021 = inst_9995;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10009_10021))
{var statearr_10010_10022 = state_10004__$1;(statearr_10010_10022[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10009_10021))
{var statearr_10011_10023 = state_10004__$1;(statearr_10011_10023[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9995)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10005 === 1))
{var inst_9992 = cmd.core.wmd__GT_html.call(null,md);var state_10004__$1 = state_10004;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10004__$1,2,inst_9992);
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
var state_machine__6277__auto____0 = (function (){var statearr_10015 = [null,null,null,null,null,null,null,null];(statearr_10015[0] = state_machine__6277__auto__);
(statearr_10015[1] = 1);
return statearr_10015;
});
var state_machine__6277__auto____1 = (function (state_10004){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10004);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10016){if((e10016 instanceof Object))
{var ex__6280__auto__ = e10016;var statearr_10017_10024 = state_10004;(statearr_10017_10024[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10004);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10025 = state_10004;
state_10004 = G__10025;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10004){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10018 = f__6292__auto__.call(null);(statearr_10018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.auth_param = (function auth_param(username,auth_token){var obj10029 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj10029;
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__10030_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__10030_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.utils.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10082){var state_val_10083 = (state_10082[1]);if((state_val_10083 === 5))
{var inst_10074 = (state_10082[7]);var inst_10077 = cmd.core.handle_io_error.call(null,inst_10074);var state_10082__$1 = state_10082;var statearr_10084_10097 = state_10082__$1;(statearr_10084_10097[2] = inst_10077);
(statearr_10084_10097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10083 === 4))
{var inst_10074 = (state_10082[7]);var inst_10075 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_10074);var state_10082__$1 = state_10082;var statearr_10085_10098 = state_10082__$1;(statearr_10085_10098[2] = inst_10075);
(statearr_10085_10098[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10083 === 3))
{var inst_10080 = (state_10082[2]);var state_10082__$1 = state_10082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10082__$1,inst_10080);
} else
{if((state_val_10083 === 2))
{var inst_10071 = (state_10082[2]);var inst_10072 = cljs.core.nth.call(null,inst_10071,0,null);var inst_10073 = cljs.core.nth.call(null,inst_10071,1,null);var inst_10074 = cmd.utils.raw__GT_clj.call(null,inst_10073);var state_10082__$1 = (function (){var statearr_10086 = state_10082;(statearr_10086[7] = inst_10074);
return statearr_10086;
})();var G__10087_10099 = inst_10072;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10087_10099))
{var statearr_10088_10100 = state_10082__$1;(statearr_10088_10100[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10087_10099))
{var statearr_10089_10101 = state_10082__$1;(statearr_10089_10101[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10072)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10083 === 1))
{var inst_10065 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10066 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10067 = [cljs.core.str("/users/"),cljs.core.str(inst_10065),cljs.core.str("/gists")].join('');var inst_10068 = cmd.core.auth_param.call(null,inst_10065,inst_10066);var inst_10069 = cmd.lib.GET.call(null,inst_10067,inst_10068);var state_10082__$1 = state_10082;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10082__$1,2,inst_10069);
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
var state_machine__6277__auto____0 = (function (){var statearr_10093 = [null,null,null,null,null,null,null,null];(statearr_10093[0] = state_machine__6277__auto__);
(statearr_10093[1] = 1);
return statearr_10093;
});
var state_machine__6277__auto____1 = (function (state_10082){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10082);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10094){if((e10094 instanceof Object))
{var ex__6280__auto__ = e10094;var statearr_10095_10102 = state_10082;(statearr_10095_10102[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10082);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10103 = state_10082;
state_10082 = G__10103;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10082){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10096 = f__6292__auto__.call(null);(statearr_10096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10178){var state_val_10179 = (state_10178[1]);if((state_val_10179 === 6))
{var inst_10158 = (state_10178[7]);var inst_10172 = cmd.utils.raw__GT_clj.call(null,inst_10158);var inst_10173 = cmd.core.handle_io_error.call(null,inst_10172);var state_10178__$1 = state_10178;var statearr_10180_10194 = state_10178__$1;(statearr_10180_10194[2] = inst_10173);
(statearr_10180_10194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10179 === 5))
{var inst_10170 = (state_10178[2]);var state_10178__$1 = state_10178;var statearr_10181_10195 = state_10178__$1;(statearr_10181_10195[2] = inst_10170);
(statearr_10181_10195[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10179 === 4))
{var inst_10158 = (state_10178[7]);var inst_10160 = cmd.utils.raw__GT_clj.call(null,inst_10158);var inst_10161 = inst_10160.call(null,"files");var inst_10162 = cljs.core.first.call(null,inst_10161);var inst_10163 = cljs.core.nth.call(null,inst_10162,0,null);var inst_10164 = cljs.core.nth.call(null,inst_10162,1,null);var inst_10165 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_10163);var inst_10166 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10160);var inst_10167 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_10168 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10167,null));var state_10178__$1 = (function (){var statearr_10182 = state_10178;(statearr_10182[8] = inst_10165);
(statearr_10182[9] = inst_10166);
(statearr_10182[10] = inst_10164);
return statearr_10182;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10178__$1,5,cmd.core.AppBus,inst_10168);
} else
{if((state_val_10179 === 3))
{var inst_10176 = (state_10178[2]);var state_10178__$1 = state_10178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10178__$1,inst_10176);
} else
{if((state_val_10179 === 2))
{var inst_10156 = (state_10178[2]);var inst_10157 = cljs.core.nth.call(null,inst_10156,0,null);var inst_10158 = cljs.core.nth.call(null,inst_10156,1,null);var state_10178__$1 = (function (){var statearr_10183 = state_10178;(statearr_10183[7] = inst_10158);
return statearr_10183;
})();var G__10184_10196 = inst_10157;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10184_10196))
{var statearr_10185_10197 = state_10178__$1;(statearr_10185_10197[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10184_10196))
{var statearr_10186_10198 = state_10178__$1;(statearr_10186_10198[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10157)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10179 === 1))
{var inst_10150 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_10151 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10152 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10153 = cmd.core.auth_param.call(null,inst_10151,inst_10152);var inst_10154 = cmd.lib.GET.call(null,inst_10150,inst_10153);var state_10178__$1 = state_10178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10178__$1,2,inst_10154);
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
var state_machine__6277__auto____0 = (function (){var statearr_10190 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10190[0] = state_machine__6277__auto__);
(statearr_10190[1] = 1);
return statearr_10190;
});
var state_machine__6277__auto____1 = (function (state_10178){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10178);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10191){if((e10191 instanceof Object))
{var ex__6280__auto__ = e10191;var statearr_10192_10199 = state_10178;(statearr_10192_10199[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10200 = state_10178;
state_10178 = G__10200;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10178){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10193 = f__6292__auto__.call(null);(statearr_10193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10250){var state_val_10251 = (state_10250[1]);if((state_val_10251 === 5))
{var inst_10243 = (state_10250[7]);var inst_10245 = cmd.core.handle_io_error.call(null,inst_10243);var state_10250__$1 = state_10250;var statearr_10252_10265 = state_10250__$1;(statearr_10252_10265[2] = inst_10245);
(statearr_10252_10265[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 4))
{var inst_10243 = (state_10250[7]);var state_10250__$1 = state_10250;var statearr_10253_10266 = state_10250__$1;(statearr_10253_10266[2] = inst_10243);
(statearr_10253_10266[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 3))
{var inst_10248 = (state_10250[2]);var state_10250__$1 = state_10250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10250__$1,inst_10248);
} else
{if((state_val_10251 === 2))
{var inst_10240 = (state_10250[2]);var inst_10241 = cljs.core.nth.call(null,inst_10240,0,null);var inst_10242 = cljs.core.nth.call(null,inst_10240,1,null);var inst_10243 = cmd.utils.raw__GT_clj.call(null,inst_10242);var state_10250__$1 = (function (){var statearr_10254 = state_10250;(statearr_10254[7] = inst_10243);
return statearr_10254;
})();var G__10255_10267 = inst_10241;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10255_10267))
{var statearr_10256_10268 = state_10250__$1;(statearr_10256_10268[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10255_10267))
{var statearr_10257_10269 = state_10250__$1;(statearr_10257_10269[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10241)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 1))
{var inst_10234 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10235 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10236 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10237 = cmd.core.auth_param.call(null,inst_10235,inst_10236);var inst_10238 = cmd.lib.PATCH.call(null,inst_10234,new_content,inst_10237);var state_10250__$1 = state_10250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10250__$1,2,inst_10238);
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
var state_machine__6277__auto____0 = (function (){var statearr_10261 = [null,null,null,null,null,null,null,null];(statearr_10261[0] = state_machine__6277__auto__);
(statearr_10261[1] = 1);
return statearr_10261;
});
var state_machine__6277__auto____1 = (function (state_10250){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10250);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10262){if((e10262 instanceof Object))
{var ex__6280__auto__ = e10262;var statearr_10263_10270 = state_10250;(statearr_10263_10270[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10250);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10271 = state_10250;
state_10250 = G__10271;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10250){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10264 = f__6292__auto__.call(null);(statearr_10264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10264;
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
return (function (state_10291){var state_val_10292 = (state_10291[1]);if((state_val_10292 === 2))
{var inst_10289 = (state_10291[2]);var state_10291__$1 = state_10291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10291__$1,inst_10289);
} else
{if((state_val_10292 === 1))
{var inst_10286 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_10287 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10286,null));var state_10291__$1 = state_10291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10291__$1,2,cmd.core.AppBus,inst_10287);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10296 = [null,null,null,null,null,null,null];(statearr_10296[0] = state_machine__6277__auto__);
(statearr_10296[1] = 1);
return statearr_10296;
});
var state_machine__6277__auto____1 = (function (state_10291){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10291);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10297){if((e10297 instanceof Object))
{var ex__6280__auto__ = e10297;var statearr_10298_10300 = state_10291;(statearr_10298_10300[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10291);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10301 = state_10291;
state_10291 = G__10301;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10291){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10299 = f__6292__auto__.call(null);(statearr_10299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10299;
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
return (function (state_10347){var state_val_10348 = (state_10347[1]);if((state_val_10348 === 5))
{var inst_10339 = (state_10347[7]);var inst_10342 = cmd.core.unauthorized.call(null,inst_10339);var state_10347__$1 = state_10347;var statearr_10349_10362 = state_10347__$1;(statearr_10349_10362[2] = inst_10342);
(statearr_10349_10362[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10348 === 4))
{var inst_10340 = cmd.core.logged_in.call(null,username,auth_token);var state_10347__$1 = state_10347;var statearr_10350_10363 = state_10347__$1;(statearr_10350_10363[2] = inst_10340);
(statearr_10350_10363[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10348 === 3))
{var inst_10345 = (state_10347[2]);var state_10347__$1 = state_10347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10347__$1,inst_10345);
} else
{if((state_val_10348 === 2))
{var inst_10337 = (state_10347[2]);var inst_10338 = cljs.core.nth.call(null,inst_10337,0,null);var inst_10339 = cljs.core.nth.call(null,inst_10337,1,null);var state_10347__$1 = (function (){var statearr_10351 = state_10347;(statearr_10351[7] = inst_10339);
return statearr_10351;
})();var G__10352_10364 = inst_10338;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10352_10364))
{var statearr_10353_10365 = state_10347__$1;(statearr_10353_10365[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10352_10364))
{var statearr_10354_10366 = state_10347__$1;(statearr_10354_10366[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10338)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10348 === 1))
{var inst_10333 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_10334 = cmd.core.auth_param.call(null,username,auth_token);var inst_10335 = cmd.lib.GET.call(null,inst_10333,inst_10334);var state_10347__$1 = state_10347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10347__$1,2,inst_10335);
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
var state_machine__6277__auto____0 = (function (){var statearr_10358 = [null,null,null,null,null,null,null,null];(statearr_10358[0] = state_machine__6277__auto__);
(statearr_10358[1] = 1);
return statearr_10358;
});
var state_machine__6277__auto____1 = (function (state_10347){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10347);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10359){if((e10359 instanceof Object))
{var ex__6280__auto__ = e10359;var statearr_10360_10367 = state_10347;(statearr_10360_10367[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10347);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10368 = state_10347;
state_10347 = G__10368;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10347){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10361 = f__6292__auto__.call(null);(statearr_10361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10361;
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