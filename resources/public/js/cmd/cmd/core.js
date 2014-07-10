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
return (function (e){var data = e.data;var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,data,worker,ch){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,data,worker,ch){
return (function (state_10026){var state_val_10027 = (state_10026[1]);if((state_val_10027 === 2))
{var inst_10023 = (state_10026[2]);var inst_10024 = cljs.core.async.close_BANG_.call(null,ch);var state_10026__$1 = (function (){var statearr_10028 = state_10026;(statearr_10028[7] = inst_10023);
return statearr_10028;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10026__$1,inst_10024);
} else
{if((state_val_10027 === 1))
{var inst_10020 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_10021 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10020,null));var state_10026__$1 = state_10026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10026__$1,2,ch,inst_10021);
} else
{return null;
}
}
});})(c__6291__auto__,data,worker,ch))
;return ((function (switch__6276__auto__,c__6291__auto__,data,worker,ch){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10032 = [null,null,null,null,null,null,null,null];(statearr_10032[0] = state_machine__6277__auto__);
(statearr_10032[1] = 1);
return statearr_10032;
});
var state_machine__6277__auto____1 = (function (state_10026){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10026);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10033){if((e10033 instanceof Object))
{var ex__6280__auto__ = e10033;var statearr_10034_10036 = state_10026;(statearr_10034_10036[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10026);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10037 = state_10026;
state_10026 = G__10037;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10026){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,data,worker,ch))
})();var state__6293__auto__ = (function (){var statearr_10035 = f__6292__auto__.call(null);(statearr_10035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10035;
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
return (function (state_10079){var state_val_10080 = (state_10079[1]);if((state_val_10080 === 5))
{var inst_10074 = cb.call(null,"<Error>");var state_10079__$1 = state_10079;var statearr_10081_10094 = state_10079__$1;(statearr_10081_10094[2] = inst_10074);
(statearr_10081_10094[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 4))
{var inst_10071 = (state_10079[7]);var inst_10072 = cb.call(null,inst_10071);var state_10079__$1 = state_10079;var statearr_10082_10095 = state_10079__$1;(statearr_10082_10095[2] = inst_10072);
(statearr_10082_10095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 3))
{var inst_10077 = (state_10079[2]);var state_10079__$1 = state_10079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10079__$1,inst_10077);
} else
{if((state_val_10080 === 2))
{var inst_10069 = (state_10079[2]);var inst_10070 = cljs.core.nth.call(null,inst_10069,0,null);var inst_10071 = cljs.core.nth.call(null,inst_10069,1,null);var state_10079__$1 = (function (){var statearr_10083 = state_10079;(statearr_10083[7] = inst_10071);
return statearr_10083;
})();var G__10084_10096 = inst_10070;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10084_10096))
{var statearr_10085_10097 = state_10079__$1;(statearr_10085_10097[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10084_10096))
{var statearr_10086_10098 = state_10079__$1;(statearr_10086_10098[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10070)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 1))
{var inst_10067 = cmd.core.wmd__GT_html.call(null,md);var state_10079__$1 = state_10079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10079__$1,2,inst_10067);
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
var state_machine__6277__auto____0 = (function (){var statearr_10090 = [null,null,null,null,null,null,null,null];(statearr_10090[0] = state_machine__6277__auto__);
(statearr_10090[1] = 1);
return statearr_10090;
});
var state_machine__6277__auto____1 = (function (state_10079){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10091){if((e10091 instanceof Object))
{var ex__6280__auto__ = e10091;var statearr_10092_10099 = state_10079;(statearr_10092_10099[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10100 = state_10079;
state_10079 = G__10100;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10079){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10093 = f__6292__auto__.call(null);(statearr_10093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.auth_param = (function auth_param(username,auth_token){var obj10104 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj10104;
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__10105_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__10105_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.utils.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10157){var state_val_10158 = (state_10157[1]);if((state_val_10158 === 5))
{var inst_10149 = (state_10157[7]);var inst_10152 = cmd.core.handle_io_error.call(null,inst_10149);var state_10157__$1 = state_10157;var statearr_10159_10172 = state_10157__$1;(statearr_10159_10172[2] = inst_10152);
(statearr_10159_10172[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10158 === 4))
{var inst_10149 = (state_10157[7]);var inst_10150 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_10149);var state_10157__$1 = state_10157;var statearr_10160_10173 = state_10157__$1;(statearr_10160_10173[2] = inst_10150);
(statearr_10160_10173[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10158 === 3))
{var inst_10155 = (state_10157[2]);var state_10157__$1 = state_10157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10157__$1,inst_10155);
} else
{if((state_val_10158 === 2))
{var inst_10146 = (state_10157[2]);var inst_10147 = cljs.core.nth.call(null,inst_10146,0,null);var inst_10148 = cljs.core.nth.call(null,inst_10146,1,null);var inst_10149 = cmd.utils.raw__GT_clj.call(null,inst_10148);var state_10157__$1 = (function (){var statearr_10161 = state_10157;(statearr_10161[7] = inst_10149);
return statearr_10161;
})();var G__10162_10174 = inst_10147;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10162_10174))
{var statearr_10163_10175 = state_10157__$1;(statearr_10163_10175[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10162_10174))
{var statearr_10164_10176 = state_10157__$1;(statearr_10164_10176[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10147)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10158 === 1))
{var inst_10140 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10141 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10142 = [cljs.core.str("/users/"),cljs.core.str(inst_10140),cljs.core.str("/gists")].join('');var inst_10143 = cmd.core.auth_param.call(null,inst_10140,inst_10141);var inst_10144 = cmd.lib.GET.call(null,inst_10142,inst_10143);var state_10157__$1 = state_10157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10157__$1,2,inst_10144);
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
var state_machine__6277__auto____0 = (function (){var statearr_10168 = [null,null,null,null,null,null,null,null];(statearr_10168[0] = state_machine__6277__auto__);
(statearr_10168[1] = 1);
return statearr_10168;
});
var state_machine__6277__auto____1 = (function (state_10157){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10157);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10169){if((e10169 instanceof Object))
{var ex__6280__auto__ = e10169;var statearr_10170_10177 = state_10157;(statearr_10170_10177[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10178 = state_10157;
state_10157 = G__10178;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10157){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10171 = f__6292__auto__.call(null);(statearr_10171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10255){var state_val_10256 = (state_10255[1]);if((state_val_10256 === 6))
{var inst_10234 = (state_10255[7]);var inst_10249 = cmd.utils.raw__GT_clj.call(null,inst_10234);var inst_10250 = cmd.core.handle_io_error.call(null,inst_10249);var state_10255__$1 = state_10255;var statearr_10257_10271 = state_10255__$1;(statearr_10257_10271[2] = inst_10250);
(statearr_10257_10271[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10256 === 5))
{var inst_10247 = (state_10255[2]);var state_10255__$1 = state_10255;var statearr_10258_10272 = state_10255__$1;(statearr_10258_10272[2] = inst_10247);
(statearr_10258_10272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10256 === 4))
{var inst_10234 = (state_10255[7]);var inst_10236 = cmd.utils.raw__GT_clj.call(null,inst_10234);var inst_10237 = inst_10236.call(null,"files");var inst_10238 = cljs.core.first.call(null,inst_10237);var inst_10239 = cljs.core.nth.call(null,inst_10238,0,null);var inst_10240 = cljs.core.nth.call(null,inst_10238,1,null);var inst_10241 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_10239);var inst_10242 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10236);var inst_10243 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_10244 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_10245 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10244,null));var state_10255__$1 = (function (){var statearr_10259 = state_10255;(statearr_10259[8] = inst_10243);
(statearr_10259[9] = inst_10240);
(statearr_10259[10] = inst_10241);
(statearr_10259[11] = inst_10242);
return statearr_10259;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10255__$1,5,cmd.core.AppBus,inst_10245);
} else
{if((state_val_10256 === 3))
{var inst_10253 = (state_10255[2]);var state_10255__$1 = state_10255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10255__$1,inst_10253);
} else
{if((state_val_10256 === 2))
{var inst_10232 = (state_10255[2]);var inst_10233 = cljs.core.nth.call(null,inst_10232,0,null);var inst_10234 = cljs.core.nth.call(null,inst_10232,1,null);var state_10255__$1 = (function (){var statearr_10260 = state_10255;(statearr_10260[7] = inst_10234);
return statearr_10260;
})();var G__10261_10273 = inst_10233;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10261_10273))
{var statearr_10262_10274 = state_10255__$1;(statearr_10262_10274[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10261_10273))
{var statearr_10263_10275 = state_10255__$1;(statearr_10263_10275[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10233)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10256 === 1))
{var inst_10226 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_10227 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10228 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10229 = cmd.core.auth_param.call(null,inst_10227,inst_10228);var inst_10230 = cmd.lib.GET.call(null,inst_10226,inst_10229);var state_10255__$1 = state_10255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10255__$1,2,inst_10230);
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
var state_machine__6277__auto____0 = (function (){var statearr_10267 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10267[0] = state_machine__6277__auto__);
(statearr_10267[1] = 1);
return statearr_10267;
});
var state_machine__6277__auto____1 = (function (state_10255){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10255);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10268){if((e10268 instanceof Object))
{var ex__6280__auto__ = e10268;var statearr_10269_10276 = state_10255;(statearr_10269_10276[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10277 = state_10255;
state_10255 = G__10277;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10255){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10270 = f__6292__auto__.call(null);(statearr_10270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10329){var state_val_10330 = (state_10329[1]);if((state_val_10330 === 5))
{var inst_10321 = (state_10329[7]);var inst_10324 = cmd.core.handle_io_error.call(null,inst_10321);var state_10329__$1 = state_10329;var statearr_10331_10344 = state_10329__$1;(statearr_10331_10344[2] = inst_10324);
(statearr_10331_10344[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10330 === 4))
{var inst_10321 = (state_10329[7]);var inst_10322 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10321);var state_10329__$1 = state_10329;var statearr_10332_10345 = state_10329__$1;(statearr_10332_10345[2] = inst_10322);
(statearr_10332_10345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10330 === 3))
{var inst_10327 = (state_10329[2]);var state_10329__$1 = state_10329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10329__$1,inst_10327);
} else
{if((state_val_10330 === 2))
{var inst_10318 = (state_10329[2]);var inst_10319 = cljs.core.nth.call(null,inst_10318,0,null);var inst_10320 = cljs.core.nth.call(null,inst_10318,1,null);var inst_10321 = cmd.utils.raw__GT_clj.call(null,inst_10320);var state_10329__$1 = (function (){var statearr_10333 = state_10329;(statearr_10333[7] = inst_10321);
return statearr_10333;
})();var G__10334_10346 = inst_10319;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10334_10346))
{var statearr_10335_10347 = state_10329__$1;(statearr_10335_10347[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10334_10346))
{var statearr_10336_10348 = state_10329__$1;(statearr_10336_10348[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10319)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10330 === 1))
{var inst_10312 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10313 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10314 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10315 = cmd.core.auth_param.call(null,inst_10313,inst_10314);var inst_10316 = cmd.lib.PATCH.call(null,inst_10312,new_content,inst_10315);var state_10329__$1 = state_10329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10329__$1,2,inst_10316);
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
var state_machine__6277__auto____0 = (function (){var statearr_10340 = [null,null,null,null,null,null,null,null];(statearr_10340[0] = state_machine__6277__auto__);
(statearr_10340[1] = 1);
return statearr_10340;
});
var state_machine__6277__auto____1 = (function (state_10329){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10329);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10341){if((e10341 instanceof Object))
{var ex__6280__auto__ = e10341;var statearr_10342_10349 = state_10329;(statearr_10342_10349[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10329);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10350 = state_10329;
state_10329 = G__10350;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10329){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10343 = f__6292__auto__.call(null);(statearr_10343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10414){var state_val_10415 = (state_10414[1]);if((state_val_10415 === 5))
{var inst_10402 = (state_10414[7]);var inst_10409 = cmd.core.handle_io_error.call(null,inst_10402);var state_10414__$1 = state_10414;var statearr_10416_10431 = state_10414__$1;(statearr_10416_10431[2] = inst_10409);
(statearr_10416_10431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10415 === 4))
{var inst_10401 = (state_10414[8]);var inst_10403 = inst_10401.call(null,"id");var inst_10404 = [cljs.core.str("Created new gist with id="),cljs.core.str(inst_10403)].join('');var inst_10405 = cmd.utils.say.call(null,inst_10404);var inst_10406 = cmd.core.load_gists.call(null);var inst_10407 = cmd.core.load_gist.call(null,inst_10403);var state_10414__$1 = (function (){var statearr_10417 = state_10414;(statearr_10417[9] = inst_10406);
(statearr_10417[10] = inst_10405);
return statearr_10417;
})();var statearr_10418_10432 = state_10414__$1;(statearr_10418_10432[2] = inst_10407);
(statearr_10418_10432[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10415 === 3))
{var inst_10412 = (state_10414[2]);var state_10414__$1 = state_10414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10414__$1,inst_10412);
} else
{if((state_val_10415 === 2))
{var inst_10401 = (state_10414[8]);var inst_10399 = (state_10414[2]);var inst_10400 = cljs.core.nth.call(null,inst_10399,0,null);var inst_10401__$1 = cljs.core.nth.call(null,inst_10399,1,null);var inst_10402 = cmd.utils.raw__GT_clj.call(null,inst_10401__$1);var state_10414__$1 = (function (){var statearr_10419 = state_10414;(statearr_10419[7] = inst_10402);
(statearr_10419[8] = inst_10401__$1);
return statearr_10419;
})();var G__10420_10433 = inst_10400;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10420_10433))
{var statearr_10421_10434 = state_10414__$1;(statearr_10421_10434[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10420_10433))
{var statearr_10422_10435 = state_10414__$1;(statearr_10422_10435[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10400)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10415 === 1))
{var inst_10391 = [cljs.core.str("Gonna create new gist "),cljs.core.str(new_content)].join('');var inst_10392 = cmd.utils.say.call(null,inst_10391);var inst_10394 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10395 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10396 = cmd.core.auth_param.call(null,inst_10394,inst_10395);var inst_10397 = cmd.lib.POST.call(null,"/gists/",new_content,inst_10396);var state_10414__$1 = (function (){var statearr_10423 = state_10414;(statearr_10423[11] = inst_10392);
return statearr_10423;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10414__$1,2,inst_10397);
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
var state_machine__6277__auto____0 = (function (){var statearr_10427 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10427[0] = state_machine__6277__auto__);
(statearr_10427[1] = 1);
return statearr_10427;
});
var state_machine__6277__auto____1 = (function (state_10414){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10414);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10428){if((e10428 instanceof Object))
{var ex__6280__auto__ = e10428;var statearr_10429_10436 = state_10414;(statearr_10429_10436[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10414);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10437 = state_10414;
state_10414 = G__10437;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10414){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10430 = f__6292__auto__.call(null);(statearr_10430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10430;
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
return (function (state_10457){var state_val_10458 = (state_10457[1]);if((state_val_10458 === 2))
{var inst_10455 = (state_10457[2]);var state_10457__$1 = state_10457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10457__$1,inst_10455);
} else
{if((state_val_10458 === 1))
{var inst_10452 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_10453 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10452,null));var state_10457__$1 = state_10457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10457__$1,2,cmd.core.AppBus,inst_10453);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10462 = [null,null,null,null,null,null,null];(statearr_10462[0] = state_machine__6277__auto__);
(statearr_10462[1] = 1);
return statearr_10462;
});
var state_machine__6277__auto____1 = (function (state_10457){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10457);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10463){if((e10463 instanceof Object))
{var ex__6280__auto__ = e10463;var statearr_10464_10466 = state_10457;(statearr_10464_10466[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10457);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10467 = state_10457;
state_10457 = G__10467;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10457){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10465 = f__6292__auto__.call(null);(statearr_10465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10465;
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
return (function (state_10513){var state_val_10514 = (state_10513[1]);if((state_val_10514 === 5))
{var inst_10505 = (state_10513[7]);var inst_10508 = cmd.core.unauthorized.call(null,inst_10505);var state_10513__$1 = state_10513;var statearr_10515_10528 = state_10513__$1;(statearr_10515_10528[2] = inst_10508);
(statearr_10515_10528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10514 === 4))
{var inst_10506 = cmd.core.logged_in.call(null,username,auth_token);var state_10513__$1 = state_10513;var statearr_10516_10529 = state_10513__$1;(statearr_10516_10529[2] = inst_10506);
(statearr_10516_10529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10514 === 3))
{var inst_10511 = (state_10513[2]);var state_10513__$1 = state_10513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10513__$1,inst_10511);
} else
{if((state_val_10514 === 2))
{var inst_10503 = (state_10513[2]);var inst_10504 = cljs.core.nth.call(null,inst_10503,0,null);var inst_10505 = cljs.core.nth.call(null,inst_10503,1,null);var state_10513__$1 = (function (){var statearr_10517 = state_10513;(statearr_10517[7] = inst_10505);
return statearr_10517;
})();var G__10518_10530 = inst_10504;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10518_10530))
{var statearr_10519_10531 = state_10513__$1;(statearr_10519_10531[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10518_10530))
{var statearr_10520_10532 = state_10513__$1;(statearr_10520_10532[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10504)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10514 === 1))
{var inst_10499 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_10500 = cmd.core.auth_param.call(null,username,auth_token);var inst_10501 = cmd.lib.GET.call(null,inst_10499,inst_10500);var state_10513__$1 = state_10513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10513__$1,2,inst_10501);
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
var state_machine__6277__auto____0 = (function (){var statearr_10524 = [null,null,null,null,null,null,null,null];(statearr_10524[0] = state_machine__6277__auto__);
(statearr_10524[1] = 1);
return statearr_10524;
});
var state_machine__6277__auto____1 = (function (state_10513){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10513);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10525){if((e10525 instanceof Object))
{var ex__6280__auto__ = e10525;var statearr_10526_10533 = state_10513;(statearr_10526_10533[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10534 = state_10513;
state_10513 = G__10534;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10513){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10527 = f__6292__auto__.call(null);(statearr_10527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10527;
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