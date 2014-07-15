// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.core');
goog.require('cljs.core');
goog.require('cmd.utils');
goog.require('cmd.defs');
goog.require('cljs.core.async');
goog.require('alandipert.storage_atom');
goog.require('cmd.lib');
goog.require('cljs.core.async');
goog.require('alandipert.storage_atom');
goog.require('cmd.defs');
goog.require('cmd.lib');
goog.require('cmd.utils');
goog.require('clojure.set');
goog.require('clojure.set');
cmd.core.prefs = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"prefs","prefs",1120835106));
cmd.core.set_prefs = (function set_prefs(name,value){return cljs.core.swap_BANG_.call(null,cmd.core.prefs,cljs.core.assoc,name,value);
});
cmd.core.get_prefs = (function get_prefs(name){return cljs.core.deref.call(null,cmd.core.prefs).call(null,name);
});
cmd.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),0,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),cmd.core.get_prefs.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149)),new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289),(function (){var saved_pref = cmd.core.get_prefs.call(null,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289));if((saved_pref == null))
{return cljs.core.List.EMPTY;
} else
{return saved_pref;
}
})(),new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.PersistentVector.EMPTY], null));
cljs.core.add_watch.call(null,cmd.core.state,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),(function (key,ref,old_state,new_state){cmd.core.set_prefs.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),new_state.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149)));
return cmd.core.set_prefs.call(null,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289),new_state.call(null,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289)));
}));
cmd.core.AppBus = cljs.core.async.chan.call(null,1);
cmd.core.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.core.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,cljs.core.select_keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace","ace",1014000629),new cljs.core.Keyword(null,"worker","worker",4526786288),new cljs.core.Keyword(null,"motd","motd",1017261828),new cljs.core.Keyword(null,"active-requests","active-requests",3616398877)], null));
});
cmd.core.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.core.say = (function say(msg){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.conj.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238)),msg));
var c__6728__auto___11070 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11070){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11070){
return (function (state_11061){var state_val_11062 = (state_11061[1]);if((state_val_11062 === 2))
{var inst_11059 = (state_11061[2]);var state_11061__$1 = state_11061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11061__$1,inst_11059);
} else
{if((state_val_11062 === 1))
{var inst_11056 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_11057 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11056,null));var state_11061__$1 = state_11061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11061__$1,2,cmd.core.AppBus,inst_11057);
} else
{return null;
}
}
});})(c__6728__auto___11070))
;return ((function (switch__6713__auto__,c__6728__auto___11070){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11066 = [null,null,null,null,null,null,null];(statearr_11066[0] = state_machine__6714__auto__);
(statearr_11066[1] = 1);
return statearr_11066;
});
var state_machine__6714__auto____1 = (function (state_11061){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11061);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11067){if((e11067 instanceof Object))
{var ex__6717__auto__ = e11067;var statearr_11068_11071 = state_11061;(statearr_11068_11071[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11072 = state_11061;
state_11061 = G__11072;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11061){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11070))
})();var state__6730__auto__ = (function (){var statearr_11069 = f__6729__auto__.call(null);(statearr_11069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11070);
return statearr_11069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11070))
);
return console.log(msg);
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__,data,worker,ch){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__,data,worker,ch){
return (function (state_11095){var state_val_11096 = (state_11095[1]);if((state_val_11096 === 2))
{var inst_11092 = (state_11095[2]);var inst_11093 = cljs.core.async.close_BANG_.call(null,ch);var state_11095__$1 = (function (){var statearr_11097 = state_11095;(statearr_11097[7] = inst_11092);
return statearr_11097;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11095__$1,inst_11093);
} else
{if((state_val_11096 === 1))
{var inst_11089 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_11090 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11089,null));var state_11095__$1 = state_11095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11095__$1,2,ch,inst_11090);
} else
{return null;
}
}
});})(c__6728__auto__,data,worker,ch))
;return ((function (switch__6713__auto__,c__6728__auto__,data,worker,ch){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11101 = [null,null,null,null,null,null,null,null];(statearr_11101[0] = state_machine__6714__auto__);
(statearr_11101[1] = 1);
return statearr_11101;
});
var state_machine__6714__auto____1 = (function (state_11095){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11095);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11102){if((e11102 instanceof Object))
{var ex__6717__auto__ = e11102;var statearr_11103_11105 = state_11095;(statearr_11103_11105[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11106 = state_11095;
state_11095 = G__11106;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11095){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__,data,worker,ch))
})();var state__6730__auto__ = (function (){var statearr_11104 = f__6729__auto__.call(null);(statearr_11104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__,data,worker,ch))
);
return c__6728__auto__;
});})(worker,ch))
,false);
worker.postMessage(text);
return ch;
});
cmd.core.html__GT_react = (function html__GT_react(html){return html;
});
cmd.core.process = (function process__$1(md,cb){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11148){var state_val_11149 = (state_11148[1]);if((state_val_11149 === 5))
{var inst_11143 = cb.call(null,"<Error>");var state_11148__$1 = state_11148;var statearr_11150_11163 = state_11148__$1;(statearr_11150_11163[2] = inst_11143);
(statearr_11150_11163[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11149 === 4))
{var inst_11140 = (state_11148[7]);var inst_11141 = cb.call(null,inst_11140);var state_11148__$1 = state_11148;var statearr_11151_11164 = state_11148__$1;(statearr_11151_11164[2] = inst_11141);
(statearr_11151_11164[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11149 === 3))
{var inst_11146 = (state_11148[2]);var state_11148__$1 = state_11148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11148__$1,inst_11146);
} else
{if((state_val_11149 === 2))
{var inst_11138 = (state_11148[2]);var inst_11139 = cljs.core.nth.call(null,inst_11138,0,null);var inst_11140 = cljs.core.nth.call(null,inst_11138,1,null);var state_11148__$1 = (function (){var statearr_11152 = state_11148;(statearr_11152[7] = inst_11140);
return statearr_11152;
})();var G__11153_11165 = inst_11139;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11153_11165))
{var statearr_11154_11166 = state_11148__$1;(statearr_11154_11166[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11153_11165))
{var statearr_11155_11167 = state_11148__$1;(statearr_11155_11167[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11139)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11149 === 1))
{var inst_11136 = cmd.core.wmd__GT_html.call(null,md);var state_11148__$1 = state_11148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11148__$1,2,inst_11136);
} else
{return null;
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11159 = [null,null,null,null,null,null,null,null];(statearr_11159[0] = state_machine__6714__auto__);
(statearr_11159[1] = 1);
return statearr_11159;
});
var state_machine__6714__auto____1 = (function (state_11148){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11148);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11160){if((e11160 instanceof Object))
{var ex__6717__auto__ = e11160;var statearr_11161_11168 = state_11148;(statearr_11161_11168[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11169 = state_11148;
state_11148 = G__11169;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11148){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11162 = f__6729__auto__.call(null);(statearr_11162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj11173 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj11173;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj11177 = {"Content-Type":"application/json"};return obj11177;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__11178_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__11178_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.core.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11241){var state_val_11242 = (state_11241[1]);if((state_val_11242 === 6))
{var inst_11228 = (state_11241[7]);var inst_11236 = cmd.core.handle_io_error.call(null,inst_11228);var state_11241__$1 = state_11241;var statearr_11243_11257 = state_11241__$1;(statearr_11243_11257[2] = inst_11236);
(statearr_11243_11257[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11242 === 5))
{var inst_11229 = (state_11241[8]);var inst_11233 = (state_11241[2]);var inst_11234 = inst_11229.call(null,inst_11233);var state_11241__$1 = state_11241;var statearr_11244_11258 = state_11241__$1;(statearr_11244_11258[2] = inst_11234);
(statearr_11244_11258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11242 === 4))
{var inst_11228 = (state_11241[7]);var inst_11229 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_11228);var inst_11230 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_11231 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11230,null));var state_11241__$1 = (function (){var statearr_11245 = state_11241;(statearr_11245[8] = inst_11229);
return statearr_11245;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11241__$1,5,cmd.core.AppBus,inst_11231);
} else
{if((state_val_11242 === 3))
{var inst_11239 = (state_11241[2]);var state_11241__$1 = state_11241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11241__$1,inst_11239);
} else
{if((state_val_11242 === 2))
{var inst_11225 = (state_11241[2]);var inst_11226 = cljs.core.nth.call(null,inst_11225,0,null);var inst_11227 = cljs.core.nth.call(null,inst_11225,1,null);var inst_11228 = cmd.utils.raw__GT_clj.call(null,inst_11227);var state_11241__$1 = (function (){var statearr_11246 = state_11241;(statearr_11246[7] = inst_11228);
return statearr_11246;
})();var G__11247_11259 = inst_11226;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11247_11259))
{var statearr_11248_11260 = state_11241__$1;(statearr_11248_11260[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11247_11259))
{var statearr_11249_11261 = state_11241__$1;(statearr_11249_11261[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11226)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11242 === 1))
{var inst_11219 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11220 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11221 = [cljs.core.str("/users/"),cljs.core.str(inst_11219),cljs.core.str("/gists")].join('');var inst_11222 = cmd.core.auth_param_fallback.call(null,inst_11219,inst_11220);var inst_11223 = cmd.lib.GET.call(null,inst_11221,inst_11222);var state_11241__$1 = state_11241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11241__$1,2,inst_11223);
} else
{return null;
}
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11253 = [null,null,null,null,null,null,null,null,null];(statearr_11253[0] = state_machine__6714__auto__);
(statearr_11253[1] = 1);
return statearr_11253;
});
var state_machine__6714__auto____1 = (function (state_11241){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11241);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11254){if((e11254 instanceof Object))
{var ex__6717__auto__ = e11254;var statearr_11255_11262 = state_11241;(statearr_11255_11262[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11241);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11263 = state_11241;
state_11241 = G__11263;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11241){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11256 = f__6729__auto__.call(null);(statearr_11256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.update_latest_opened = (function update_latest_opened(gist_id){var latest_opened = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289));var clean_opened = cljs.core.filter.call(null,((function (latest_opened){
return (function (p1__11264_SHARP_){return !(cljs.core._EQ_.call(null,p1__11264_SHARP_,gist_id));
});})(latest_opened))
,latest_opened);var new_latest_opened = cljs.core.take.call(null,20,cljs.core.conj.call(null,clean_opened,gist_id));return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289),new_latest_opened);
});
cmd.core.get_motd = (function get_motd(gist_id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11339){var state_val_11340 = (state_11339[1]);if((state_val_11340 === 6))
{var inst_11332 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_11333 = cmd.core.say.call(null,"Sorry, can't load motd");var inst_11334 = inst_11332.call(null,inst_11333);var state_11339__$1 = state_11339;var statearr_11341_11355 = state_11339__$1;(statearr_11341_11355[2] = inst_11334);
(statearr_11341_11355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11340 === 5))
{var inst_11325 = (state_11339[7]);var inst_11329 = (state_11339[2]);var inst_11330 = inst_11325.call(null,inst_11329);var state_11339__$1 = state_11339;var statearr_11342_11356 = state_11339__$1;(statearr_11342_11356[2] = inst_11330);
(statearr_11342_11356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11340 === 4))
{var inst_11317 = (state_11339[8]);var inst_11319 = cmd.utils.raw__GT_clj.call(null,inst_11317);var inst_11320 = inst_11319.call(null,"files");var inst_11321 = cljs.core.first.call(null,inst_11320);var inst_11322 = cljs.core.nth.call(null,inst_11321,0,null);var inst_11323 = cljs.core.nth.call(null,inst_11321,1,null);var inst_11324 = inst_11323.call(null,"content");var inst_11325 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_11324);var inst_11326 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_11324];var inst_11327 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11326,null));var state_11339__$1 = (function (){var statearr_11343 = state_11339;(statearr_11343[9] = inst_11322);
(statearr_11343[7] = inst_11325);
return statearr_11343;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11339__$1,5,cmd.core.AppBus,inst_11327);
} else
{if((state_val_11340 === 3))
{var inst_11337 = (state_11339[2]);var state_11339__$1 = state_11339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11339__$1,inst_11337);
} else
{if((state_val_11340 === 2))
{var inst_11315 = (state_11339[2]);var inst_11316 = cljs.core.nth.call(null,inst_11315,0,null);var inst_11317 = cljs.core.nth.call(null,inst_11315,1,null);var state_11339__$1 = (function (){var statearr_11344 = state_11339;(statearr_11344[8] = inst_11317);
return statearr_11344;
})();var G__11345_11357 = inst_11316;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11345_11357))
{var statearr_11346_11358 = state_11339__$1;(statearr_11346_11358[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11345_11357))
{var statearr_11347_11359 = state_11339__$1;(statearr_11347_11359[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11316)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11340 === 1))
{var inst_11311 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_11312 = cmd.core.auth_param_anon.call(null);var inst_11313 = cmd.lib.GET.call(null,inst_11311,inst_11312);var state_11339__$1 = state_11339;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11339__$1,2,inst_11313);
} else
{return null;
}
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11351 = [null,null,null,null,null,null,null,null,null,null];(statearr_11351[0] = state_machine__6714__auto__);
(statearr_11351[1] = 1);
return statearr_11351;
});
var state_machine__6714__auto____1 = (function (state_11339){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11339);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11352){if((e11352 instanceof Object))
{var ex__6717__auto__ = e11352;var statearr_11353_11360 = state_11339;(statearr_11353_11360[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11339);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11361 = state_11339;
state_11339 = G__11361;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11339){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11354 = f__6729__auto__.call(null);(statearr_11354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11442){var state_val_11443 = (state_11442[1]);if((state_val_11443 === 6))
{var inst_11419 = (state_11442[7]);var inst_11436 = cmd.utils.raw__GT_clj.call(null,inst_11419);var inst_11437 = cmd.core.handle_io_error.call(null,inst_11436);var state_11442__$1 = state_11442;var statearr_11444_11458 = state_11442__$1;(statearr_11444_11458[2] = inst_11437);
(statearr_11444_11458[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 5))
{var inst_11434 = (state_11442[2]);var state_11442__$1 = state_11442;var statearr_11445_11459 = state_11442__$1;(statearr_11445_11459[2] = inst_11434);
(statearr_11445_11459[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 4))
{var inst_11419 = (state_11442[7]);var inst_11421 = cmd.utils.raw__GT_clj.call(null,inst_11419);var inst_11422 = inst_11421.call(null,"files");var inst_11423 = cljs.core.first.call(null,inst_11422);var inst_11424 = cljs.core.nth.call(null,inst_11423,0,null);var inst_11425 = cljs.core.nth.call(null,inst_11423,1,null);var inst_11426 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_11424);var inst_11427 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_11421);var inst_11428 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_11429 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_11430 = cmd.core.update_latest_opened.call(null,id);var inst_11431 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_11432 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11431,null));var state_11442__$1 = (function (){var statearr_11446 = state_11442;(statearr_11446[8] = inst_11427);
(statearr_11446[9] = inst_11425);
(statearr_11446[10] = inst_11428);
(statearr_11446[11] = inst_11426);
(statearr_11446[12] = inst_11430);
(statearr_11446[13] = inst_11429);
return statearr_11446;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11442__$1,5,cmd.core.AppBus,inst_11432);
} else
{if((state_val_11443 === 3))
{var inst_11440 = (state_11442[2]);var state_11442__$1 = state_11442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11442__$1,inst_11440);
} else
{if((state_val_11443 === 2))
{var inst_11417 = (state_11442[2]);var inst_11418 = cljs.core.nth.call(null,inst_11417,0,null);var inst_11419 = cljs.core.nth.call(null,inst_11417,1,null);var state_11442__$1 = (function (){var statearr_11447 = state_11442;(statearr_11447[7] = inst_11419);
return statearr_11447;
})();var G__11448_11460 = inst_11418;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11448_11460))
{var statearr_11449_11461 = state_11442__$1;(statearr_11449_11461[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11448_11460))
{var statearr_11450_11462 = state_11442__$1;(statearr_11450_11462[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11418)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 1))
{var inst_11411 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_11412 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11413 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11414 = cmd.core.auth_param_fallback.call(null,inst_11412,inst_11413);var inst_11415 = cmd.lib.GET.call(null,inst_11411,inst_11414);var state_11442__$1 = state_11442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11442__$1,2,inst_11415);
} else
{return null;
}
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11454[0] = state_machine__6714__auto__);
(statearr_11454[1] = 1);
return statearr_11454;
});
var state_machine__6714__auto____1 = (function (state_11442){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11442);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11455){if((e11455 instanceof Object))
{var ex__6717__auto__ = e11455;var statearr_11456_11463 = state_11442;(statearr_11456_11463[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11464 = state_11442;
state_11442 = G__11464;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11442){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11457 = f__6729__auto__.call(null);(statearr_11457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11523){var state_val_11524 = (state_11523[1]);if((state_val_11524 === 5))
{var inst_11512 = (state_11523[7]);var inst_11518 = cmd.core.handle_io_error.call(null,inst_11512);var state_11523__$1 = state_11523;var statearr_11525_11539 = state_11523__$1;(statearr_11525_11539[2] = inst_11518);
(statearr_11525_11539[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 4))
{var inst_11512 = (state_11523[7]);var inst_11513 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_11512);var inst_11514 = cmd.core.load_gists.call(null);var inst_11515 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_11516 = cmd.core.say.call(null,inst_11515);var state_11523__$1 = (function (){var statearr_11526 = state_11523;(statearr_11526[8] = inst_11513);
(statearr_11526[9] = inst_11514);
return statearr_11526;
})();var statearr_11527_11540 = state_11523__$1;(statearr_11527_11540[2] = inst_11516);
(statearr_11527_11540[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 3))
{var inst_11521 = (state_11523[2]);var state_11523__$1 = state_11523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11523__$1,inst_11521);
} else
{if((state_val_11524 === 2))
{var inst_11509 = (state_11523[2]);var inst_11510 = cljs.core.nth.call(null,inst_11509,0,null);var inst_11511 = cljs.core.nth.call(null,inst_11509,1,null);var inst_11512 = cmd.utils.raw__GT_clj.call(null,inst_11511);var state_11523__$1 = (function (){var statearr_11528 = state_11523;(statearr_11528[7] = inst_11512);
return statearr_11528;
})();var G__11529_11541 = inst_11510;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11529_11541))
{var statearr_11530_11542 = state_11523__$1;(statearr_11530_11542[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11529_11541))
{var statearr_11531_11543 = state_11523__$1;(statearr_11531_11543[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11510)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 1))
{var inst_11503 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_11504 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11505 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11506 = cmd.core.auth_param_strict.call(null,inst_11504,inst_11505);var inst_11507 = cmd.lib.PATCH.call(null,inst_11503,new_content,inst_11506);var state_11523__$1 = state_11523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11523__$1,2,inst_11507);
} else
{return null;
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11535 = [null,null,null,null,null,null,null,null,null,null];(statearr_11535[0] = state_machine__6714__auto__);
(statearr_11535[1] = 1);
return statearr_11535;
});
var state_machine__6714__auto____1 = (function (state_11523){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11523);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11536){if((e11536 instanceof Object))
{var ex__6717__auto__ = e11536;var statearr_11537_11544 = state_11523;(statearr_11537_11544[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11545 = state_11523;
state_11523 = G__11545;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11523){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11538 = f__6729__auto__.call(null);(statearr_11538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11606){var state_val_11607 = (state_11606[1]);if((state_val_11607 === 5))
{var inst_11593 = (state_11606[7]);var inst_11601 = cmd.core.handle_io_error.call(null,inst_11593);var state_11606__$1 = state_11606;var statearr_11608_11622 = state_11606__$1;(statearr_11608_11622[2] = inst_11601);
(statearr_11608_11622[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 4))
{var inst_11593 = (state_11606[7]);var inst_11594 = inst_11593.call(null,"id");var inst_11595 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_11596 = cmd.core.load_gists.call(null);var inst_11597 = cmd.core.load_gist.call(null,inst_11594);var inst_11598 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_11594)].join('');var inst_11599 = cmd.core.say.call(null,inst_11598);var state_11606__$1 = (function (){var statearr_11609 = state_11606;(statearr_11609[8] = inst_11595);
(statearr_11609[9] = inst_11597);
(statearr_11609[10] = inst_11596);
return statearr_11609;
})();var statearr_11610_11623 = state_11606__$1;(statearr_11610_11623[2] = inst_11599);
(statearr_11610_11623[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 3))
{var inst_11604 = (state_11606[2]);var state_11606__$1 = state_11606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11606__$1,inst_11604);
} else
{if((state_val_11607 === 2))
{var inst_11590 = (state_11606[2]);var inst_11591 = cljs.core.nth.call(null,inst_11590,0,null);var inst_11592 = cljs.core.nth.call(null,inst_11590,1,null);var inst_11593 = cmd.utils.raw__GT_clj.call(null,inst_11592);var state_11606__$1 = (function (){var statearr_11611 = state_11606;(statearr_11611[7] = inst_11593);
return statearr_11611;
})();var G__11612_11624 = inst_11591;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11612_11624))
{var statearr_11613_11625 = state_11606__$1;(statearr_11613_11625[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11612_11624))
{var statearr_11614_11626 = state_11606__$1;(statearr_11614_11626[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11591)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 1))
{var inst_11585 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11586 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11587 = cmd.core.auth_param_strict.call(null,inst_11585,inst_11586);var inst_11588 = cmd.lib.POST.call(null,"/gists",new_content,inst_11587);var state_11606__$1 = state_11606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11606__$1,2,inst_11588);
} else
{return null;
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11618 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11618[0] = state_machine__6714__auto__);
(statearr_11618[1] = 1);
return statearr_11618;
});
var state_machine__6714__auto____1 = (function (state_11606){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11619){if((e11619 instanceof Object))
{var ex__6717__auto__ = e11619;var statearr_11620_11627 = state_11606;(statearr_11620_11627[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11628 = state_11606;
state_11606 = G__11628;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11606){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11621 = f__6729__auto__.call(null);(statearr_11621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.logged_in = (function logged_in(username,auth_token){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792),username);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430),auth_token);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),true);
cmd.core.set_prefs.call(null,"username",username);
cmd.core.set_prefs.call(null,"auth-token",auth_token);
var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11648){var state_val_11649 = (state_11648[1]);if((state_val_11649 === 2))
{var inst_11646 = (state_11648[2]);var state_11648__$1 = state_11648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11648__$1,inst_11646);
} else
{if((state_val_11649 === 1))
{var inst_11643 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_11644 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11643,null));var state_11648__$1 = state_11648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11648__$1,2,cmd.core.AppBus,inst_11644);
} else
{return null;
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11653 = [null,null,null,null,null,null,null];(statearr_11653[0] = state_machine__6714__auto__);
(statearr_11653[1] = 1);
return statearr_11653;
});
var state_machine__6714__auto____1 = (function (state_11648){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11648);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11654){if((e11654 instanceof Object))
{var ex__6717__auto__ = e11654;var statearr_11655_11657 = state_11648;(statearr_11655_11657[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11648);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11658 = state_11648;
state_11648 = G__11658;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11648){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11656 = f__6729__auto__.call(null);(statearr_11656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__6728__auto___11687 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11687,error_msg){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11687,error_msg){
return (function (state_11678){var state_val_11679 = (state_11678[1]);if((state_val_11679 === 2))
{var inst_11676 = (state_11678[2]);var state_11678__$1 = state_11678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11678__$1,inst_11676);
} else
{if((state_val_11679 === 1))
{var inst_11673 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_11674 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11673,null));var state_11678__$1 = state_11678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11678__$1,2,cmd.core.AppBus,inst_11674);
} else
{return null;
}
}
});})(c__6728__auto___11687,error_msg))
;return ((function (switch__6713__auto__,c__6728__auto___11687,error_msg){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11683 = [null,null,null,null,null,null,null];(statearr_11683[0] = state_machine__6714__auto__);
(statearr_11683[1] = 1);
return statearr_11683;
});
var state_machine__6714__auto____1 = (function (state_11678){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11678);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11684){if((e11684 instanceof Object))
{var ex__6717__auto__ = e11684;var statearr_11685_11688 = state_11678;(statearr_11685_11688[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11678);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11689 = state_11678;
state_11678 = G__11689;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11678){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11687,error_msg))
})();var state__6730__auto__ = (function (){var statearr_11686 = f__6729__auto__.call(null);(statearr_11686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11687);
return statearr_11686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11687,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11735){var state_val_11736 = (state_11735[1]);if((state_val_11736 === 5))
{var inst_11727 = (state_11735[7]);var inst_11730 = cmd.core.unauthorized.call(null,inst_11727);var state_11735__$1 = state_11735;var statearr_11737_11750 = state_11735__$1;(statearr_11737_11750[2] = inst_11730);
(statearr_11737_11750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 4))
{var inst_11728 = cmd.core.logged_in.call(null,username,auth_token);var state_11735__$1 = state_11735;var statearr_11738_11751 = state_11735__$1;(statearr_11738_11751[2] = inst_11728);
(statearr_11738_11751[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 3))
{var inst_11733 = (state_11735[2]);var state_11735__$1 = state_11735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11735__$1,inst_11733);
} else
{if((state_val_11736 === 2))
{var inst_11725 = (state_11735[2]);var inst_11726 = cljs.core.nth.call(null,inst_11725,0,null);var inst_11727 = cljs.core.nth.call(null,inst_11725,1,null);var state_11735__$1 = (function (){var statearr_11739 = state_11735;(statearr_11739[7] = inst_11727);
return statearr_11739;
})();var G__11740_11752 = inst_11726;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11740_11752))
{var statearr_11741_11753 = state_11735__$1;(statearr_11741_11753[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11740_11752))
{var statearr_11742_11754 = state_11735__$1;(statearr_11742_11754[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11726)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 1))
{var inst_11721 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_11722 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_11723 = cmd.lib.GET.call(null,inst_11721,inst_11722);var state_11735__$1 = state_11735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11735__$1,2,inst_11723);
} else
{return null;
}
}
}
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11746 = [null,null,null,null,null,null,null,null];(statearr_11746[0] = state_machine__6714__auto__);
(statearr_11746[1] = 1);
return statearr_11746;
});
var state_machine__6714__auto____1 = (function (state_11735){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11735);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11747){if((e11747 instanceof Object))
{var ex__6717__auto__ = e11747;var statearr_11748_11755 = state_11735;(statearr_11748_11755[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11735);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11756 = state_11735;
state_11735 = G__11756;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11735){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11749 = f__6729__auto__.call(null);(statearr_11749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.authenticated_om_QMARK_ = (function authenticated_om_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.core.authenticated_QMARK_ = (function authenticated_QMARK_(state){return cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.core.error_set_QMARK_ = (function error_set_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"error","error",1110689146));
});
cmd.core.parse_location_hash = (function parse_location_hash(){var hash = document.location.hash;if((cljs.core.count.call(null,hash) > 1))
{return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gist-id","gist-id",1053270999),new cljs.core.Keyword(null,"panels","panels",4313328225)], null),cljs.core.subs.call(null,hash,1).split(";"));
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
cmd.core.get_gist_id_from_location_hash = (function get_gist_id_from_location_hash(){var x = cmd.core.parse_location_hash.call(null).call(null,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999));if(cljs.core._EQ_.call(null,x,""))
{return null;
} else
{return x;
}
});
cmd.core.get_panels_from_location_hash = (function get_panels_from_location_hash(){var x = cmd.core.parse_location_hash.call(null).call(null,new cljs.core.Keyword(null,"panels","panels",4313328225));return x;
});
cmd.core.set_title = (function set_title(title){return document.title = [cljs.core.str(title),cljs.core.str(" : "),cljs.core.str(cmd.defs.default_title)].join('');
});
cmd.core.set_location_hash = (function set_location_hash(hash_hash){var gist_id = (function (){var or__3481__auto__ = hash_hash.call(null,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999));if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return "";
}
})();var panels = hash_hash.call(null,new cljs.core.Keyword(null,"panels","panels",4313328225));var chunks = (((panels == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gist_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gist_id,panels], null));return document.location.hash = clojure.string.join.call(null,";",chunks);
});
cmd.core.set_location_hash_gist_id = (function set_location_hash_gist_id(gist_id){var lh = cmd.core.parse_location_hash.call(null);var new_lh = cljs.core.assoc.call(null,lh,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999),gist_id);return cmd.core.set_location_hash.call(null,new_lh);
});
cmd.core.set_location_hash_panels = (function set_location_hash_panels(panels){var lh = cmd.core.parse_location_hash.call(null);var new_lh = cljs.core.assoc.call(null,lh,new cljs.core.Keyword(null,"panels","panels",4313328225),clojure.string.join.call(null,panels));return cmd.core.set_location_hash.call(null,new_lh);
});
cmd.core.load_initial_content = (function load_initial_content(){var gist_id = cmd.core.get_gist_id_from_location_hash.call(null);if((gist_id == null))
{return cmd.core.get_motd.call(null,cmd.defs.default_motd_id);
} else
{return cmd.core.load_gist.call(null,gist_id);
}
});
cmd.core.ace_set_value = (function ace_set_value(content){return cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__11758 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__11758,0,null);var first_file = cljs.core.nth.call(null,vec__11758,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.core.get_pinned_gists = (function get_pinned_gists(state){return cljs.core.filter.call(null,(function (gist){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149).cljs$core$IFn$_invoke$arity$1(state),gist.call(null,"id"));
}),new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=core.js.map