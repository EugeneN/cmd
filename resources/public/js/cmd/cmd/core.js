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
cmd.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),0,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),cmd.core.get_prefs.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149)),new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.PersistentVector.EMPTY], null));
cljs.core.add_watch.call(null,cmd.core.state,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),(function (key,ref,old_state,new_state){return cmd.core.set_prefs.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),new_state.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149)));
}));
cmd.core.AppBus = cljs.core.async.chan.call(null,1);
cmd.core.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.core.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,cljs.core.select_keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace","ace",1014000629),new cljs.core.Keyword(null,"worker","worker",4526786288),new cljs.core.Keyword(null,"motd","motd",1017261828),new cljs.core.Keyword(null,"active-requests","active-requests",3616398877)], null));
});
cmd.core.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.core.say = (function say(msg){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.conj.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238)),msg));
var c__6728__auto___11067 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11067){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11067){
return (function (state_11058){var state_val_11059 = (state_11058[1]);if((state_val_11059 === 2))
{var inst_11056 = (state_11058[2]);var state_11058__$1 = state_11058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11058__$1,inst_11056);
} else
{if((state_val_11059 === 1))
{var inst_11053 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_11054 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11053,null));var state_11058__$1 = state_11058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11058__$1,2,cmd.core.AppBus,inst_11054);
} else
{return null;
}
}
});})(c__6728__auto___11067))
;return ((function (switch__6713__auto__,c__6728__auto___11067){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11063 = [null,null,null,null,null,null,null];(statearr_11063[0] = state_machine__6714__auto__);
(statearr_11063[1] = 1);
return statearr_11063;
});
var state_machine__6714__auto____1 = (function (state_11058){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11058);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11064){if((e11064 instanceof Object))
{var ex__6717__auto__ = e11064;var statearr_11065_11068 = state_11058;(statearr_11065_11068[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11069 = state_11058;
state_11058 = G__11069;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11058){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11067))
})();var state__6730__auto__ = (function (){var statearr_11066 = f__6729__auto__.call(null);(statearr_11066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11067);
return statearr_11066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11067))
);
return console.log(msg);
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__,data,worker,ch){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__,data,worker,ch){
return (function (state_11092){var state_val_11093 = (state_11092[1]);if((state_val_11093 === 2))
{var inst_11089 = (state_11092[2]);var inst_11090 = cljs.core.async.close_BANG_.call(null,ch);var state_11092__$1 = (function (){var statearr_11094 = state_11092;(statearr_11094[7] = inst_11089);
return statearr_11094;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11092__$1,inst_11090);
} else
{if((state_val_11093 === 1))
{var inst_11086 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_11087 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11086,null));var state_11092__$1 = state_11092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11092__$1,2,ch,inst_11087);
} else
{return null;
}
}
});})(c__6728__auto__,data,worker,ch))
;return ((function (switch__6713__auto__,c__6728__auto__,data,worker,ch){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11098 = [null,null,null,null,null,null,null,null];(statearr_11098[0] = state_machine__6714__auto__);
(statearr_11098[1] = 1);
return statearr_11098;
});
var state_machine__6714__auto____1 = (function (state_11092){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11099){if((e11099 instanceof Object))
{var ex__6717__auto__ = e11099;var statearr_11100_11102 = state_11092;(statearr_11100_11102[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11092);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11103 = state_11092;
state_11092 = G__11103;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11092){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__,data,worker,ch))
})();var state__6730__auto__ = (function (){var statearr_11101 = f__6729__auto__.call(null);(statearr_11101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11101;
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
return (function (state_11145){var state_val_11146 = (state_11145[1]);if((state_val_11146 === 5))
{var inst_11140 = cb.call(null,"<Error>");var state_11145__$1 = state_11145;var statearr_11147_11160 = state_11145__$1;(statearr_11147_11160[2] = inst_11140);
(statearr_11147_11160[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 4))
{var inst_11137 = (state_11145[7]);var inst_11138 = cb.call(null,inst_11137);var state_11145__$1 = state_11145;var statearr_11148_11161 = state_11145__$1;(statearr_11148_11161[2] = inst_11138);
(statearr_11148_11161[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 3))
{var inst_11143 = (state_11145[2]);var state_11145__$1 = state_11145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11145__$1,inst_11143);
} else
{if((state_val_11146 === 2))
{var inst_11135 = (state_11145[2]);var inst_11136 = cljs.core.nth.call(null,inst_11135,0,null);var inst_11137 = cljs.core.nth.call(null,inst_11135,1,null);var state_11145__$1 = (function (){var statearr_11149 = state_11145;(statearr_11149[7] = inst_11137);
return statearr_11149;
})();var G__11150_11162 = inst_11136;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11150_11162))
{var statearr_11151_11163 = state_11145__$1;(statearr_11151_11163[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11150_11162))
{var statearr_11152_11164 = state_11145__$1;(statearr_11152_11164[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11136)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 1))
{var inst_11133 = cmd.core.wmd__GT_html.call(null,md);var state_11145__$1 = state_11145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11145__$1,2,inst_11133);
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
var state_machine__6714__auto____0 = (function (){var statearr_11156 = [null,null,null,null,null,null,null,null];(statearr_11156[0] = state_machine__6714__auto__);
(statearr_11156[1] = 1);
return statearr_11156;
});
var state_machine__6714__auto____1 = (function (state_11145){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11145);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11157){if((e11157 instanceof Object))
{var ex__6717__auto__ = e11157;var statearr_11158_11165 = state_11145;(statearr_11158_11165[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11145);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11157;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11166 = state_11145;
state_11145 = G__11166;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11145){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11159 = f__6729__auto__.call(null);(statearr_11159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11159;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj11170 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj11170;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj11174 = {"Content-Type":"application/json"};return obj11174;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__11175_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__11175_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.core.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11238){var state_val_11239 = (state_11238[1]);if((state_val_11239 === 6))
{var inst_11225 = (state_11238[7]);var inst_11233 = cmd.core.handle_io_error.call(null,inst_11225);var state_11238__$1 = state_11238;var statearr_11240_11254 = state_11238__$1;(statearr_11240_11254[2] = inst_11233);
(statearr_11240_11254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 5))
{var inst_11226 = (state_11238[8]);var inst_11230 = (state_11238[2]);var inst_11231 = inst_11226.call(null,inst_11230);var state_11238__$1 = state_11238;var statearr_11241_11255 = state_11238__$1;(statearr_11241_11255[2] = inst_11231);
(statearr_11241_11255[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 4))
{var inst_11225 = (state_11238[7]);var inst_11226 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_11225);var inst_11227 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_11228 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11227,null));var state_11238__$1 = (function (){var statearr_11242 = state_11238;(statearr_11242[8] = inst_11226);
return statearr_11242;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11238__$1,5,cmd.core.AppBus,inst_11228);
} else
{if((state_val_11239 === 3))
{var inst_11236 = (state_11238[2]);var state_11238__$1 = state_11238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11238__$1,inst_11236);
} else
{if((state_val_11239 === 2))
{var inst_11222 = (state_11238[2]);var inst_11223 = cljs.core.nth.call(null,inst_11222,0,null);var inst_11224 = cljs.core.nth.call(null,inst_11222,1,null);var inst_11225 = cmd.utils.raw__GT_clj.call(null,inst_11224);var state_11238__$1 = (function (){var statearr_11243 = state_11238;(statearr_11243[7] = inst_11225);
return statearr_11243;
})();var G__11244_11256 = inst_11223;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11244_11256))
{var statearr_11245_11257 = state_11238__$1;(statearr_11245_11257[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11244_11256))
{var statearr_11246_11258 = state_11238__$1;(statearr_11246_11258[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11223)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 1))
{var inst_11216 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11217 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11218 = [cljs.core.str("/users/"),cljs.core.str(inst_11216),cljs.core.str("/gists")].join('');var inst_11219 = cmd.core.auth_param_fallback.call(null,inst_11216,inst_11217);var inst_11220 = cmd.lib.GET.call(null,inst_11218,inst_11219);var state_11238__$1 = state_11238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11238__$1,2,inst_11220);
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
var state_machine__6714__auto____0 = (function (){var statearr_11250 = [null,null,null,null,null,null,null,null,null];(statearr_11250[0] = state_machine__6714__auto__);
(statearr_11250[1] = 1);
return statearr_11250;
});
var state_machine__6714__auto____1 = (function (state_11238){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11251){if((e11251 instanceof Object))
{var ex__6717__auto__ = e11251;var statearr_11252_11259 = state_11238;(statearr_11252_11259[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11260 = state_11238;
state_11238 = G__11260;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11238){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11253 = f__6729__auto__.call(null);(statearr_11253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.get_motd = (function get_motd(gist_id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11335){var state_val_11336 = (state_11335[1]);if((state_val_11336 === 6))
{var inst_11328 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_11329 = cmd.core.say.call(null,"Sorry, can't load motd");var inst_11330 = inst_11328.call(null,inst_11329);var state_11335__$1 = state_11335;var statearr_11337_11351 = state_11335__$1;(statearr_11337_11351[2] = inst_11330);
(statearr_11337_11351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 5))
{var inst_11321 = (state_11335[7]);var inst_11325 = (state_11335[2]);var inst_11326 = inst_11321.call(null,inst_11325);var state_11335__$1 = state_11335;var statearr_11338_11352 = state_11335__$1;(statearr_11338_11352[2] = inst_11326);
(statearr_11338_11352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 4))
{var inst_11313 = (state_11335[8]);var inst_11315 = cmd.utils.raw__GT_clj.call(null,inst_11313);var inst_11316 = inst_11315.call(null,"files");var inst_11317 = cljs.core.first.call(null,inst_11316);var inst_11318 = cljs.core.nth.call(null,inst_11317,0,null);var inst_11319 = cljs.core.nth.call(null,inst_11317,1,null);var inst_11320 = inst_11319.call(null,"content");var inst_11321 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_11320);var inst_11322 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_11320];var inst_11323 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11322,null));var state_11335__$1 = (function (){var statearr_11339 = state_11335;(statearr_11339[9] = inst_11318);
(statearr_11339[7] = inst_11321);
return statearr_11339;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11335__$1,5,cmd.core.AppBus,inst_11323);
} else
{if((state_val_11336 === 3))
{var inst_11333 = (state_11335[2]);var state_11335__$1 = state_11335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11335__$1,inst_11333);
} else
{if((state_val_11336 === 2))
{var inst_11311 = (state_11335[2]);var inst_11312 = cljs.core.nth.call(null,inst_11311,0,null);var inst_11313 = cljs.core.nth.call(null,inst_11311,1,null);var state_11335__$1 = (function (){var statearr_11340 = state_11335;(statearr_11340[8] = inst_11313);
return statearr_11340;
})();var G__11341_11353 = inst_11312;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11341_11353))
{var statearr_11342_11354 = state_11335__$1;(statearr_11342_11354[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11341_11353))
{var statearr_11343_11355 = state_11335__$1;(statearr_11343_11355[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11312)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 1))
{var inst_11307 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_11308 = cmd.core.auth_param_anon.call(null);var inst_11309 = cmd.lib.GET.call(null,inst_11307,inst_11308);var state_11335__$1 = state_11335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11335__$1,2,inst_11309);
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
var state_machine__6714__auto____0 = (function (){var statearr_11347 = [null,null,null,null,null,null,null,null,null,null];(statearr_11347[0] = state_machine__6714__auto__);
(statearr_11347[1] = 1);
return statearr_11347;
});
var state_machine__6714__auto____1 = (function (state_11335){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11335);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11348){if((e11348 instanceof Object))
{var ex__6717__auto__ = e11348;var statearr_11349_11356 = state_11335;(statearr_11349_11356[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11357 = state_11335;
state_11335 = G__11357;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11335){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11350 = f__6729__auto__.call(null);(statearr_11350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11436){var state_val_11437 = (state_11436[1]);if((state_val_11437 === 6))
{var inst_11414 = (state_11436[7]);var inst_11430 = cmd.utils.raw__GT_clj.call(null,inst_11414);var inst_11431 = cmd.core.handle_io_error.call(null,inst_11430);var state_11436__$1 = state_11436;var statearr_11438_11452 = state_11436__$1;(statearr_11438_11452[2] = inst_11431);
(statearr_11438_11452[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11437 === 5))
{var inst_11428 = (state_11436[2]);var state_11436__$1 = state_11436;var statearr_11439_11453 = state_11436__$1;(statearr_11439_11453[2] = inst_11428);
(statearr_11439_11453[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11437 === 4))
{var inst_11414 = (state_11436[7]);var inst_11416 = cmd.utils.raw__GT_clj.call(null,inst_11414);var inst_11417 = inst_11416.call(null,"files");var inst_11418 = cljs.core.first.call(null,inst_11417);var inst_11419 = cljs.core.nth.call(null,inst_11418,0,null);var inst_11420 = cljs.core.nth.call(null,inst_11418,1,null);var inst_11421 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_11419);var inst_11422 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_11416);var inst_11423 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_11424 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_11425 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_11426 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11425,null));var state_11436__$1 = (function (){var statearr_11440 = state_11436;(statearr_11440[8] = inst_11424);
(statearr_11440[9] = inst_11422);
(statearr_11440[10] = inst_11420);
(statearr_11440[11] = inst_11421);
(statearr_11440[12] = inst_11423);
return statearr_11440;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11436__$1,5,cmd.core.AppBus,inst_11426);
} else
{if((state_val_11437 === 3))
{var inst_11434 = (state_11436[2]);var state_11436__$1 = state_11436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11436__$1,inst_11434);
} else
{if((state_val_11437 === 2))
{var inst_11412 = (state_11436[2]);var inst_11413 = cljs.core.nth.call(null,inst_11412,0,null);var inst_11414 = cljs.core.nth.call(null,inst_11412,1,null);var state_11436__$1 = (function (){var statearr_11441 = state_11436;(statearr_11441[7] = inst_11414);
return statearr_11441;
})();var G__11442_11454 = inst_11413;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11442_11454))
{var statearr_11443_11455 = state_11436__$1;(statearr_11443_11455[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11442_11454))
{var statearr_11444_11456 = state_11436__$1;(statearr_11444_11456[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11413)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11437 === 1))
{var inst_11406 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_11407 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11408 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11409 = cmd.core.auth_param_fallback.call(null,inst_11407,inst_11408);var inst_11410 = cmd.lib.GET.call(null,inst_11406,inst_11409);var state_11436__$1 = state_11436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11436__$1,2,inst_11410);
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
var state_machine__6714__auto____0 = (function (){var statearr_11448 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11448[0] = state_machine__6714__auto__);
(statearr_11448[1] = 1);
return statearr_11448;
});
var state_machine__6714__auto____1 = (function (state_11436){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11436);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11449){if((e11449 instanceof Object))
{var ex__6717__auto__ = e11449;var statearr_11450_11457 = state_11436;(statearr_11450_11457[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11436);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11458 = state_11436;
state_11436 = G__11458;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11436){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11451 = f__6729__auto__.call(null);(statearr_11451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11517){var state_val_11518 = (state_11517[1]);if((state_val_11518 === 5))
{var inst_11506 = (state_11517[7]);var inst_11512 = cmd.core.handle_io_error.call(null,inst_11506);var state_11517__$1 = state_11517;var statearr_11519_11533 = state_11517__$1;(statearr_11519_11533[2] = inst_11512);
(statearr_11519_11533[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11518 === 4))
{var inst_11506 = (state_11517[7]);var inst_11507 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_11506);var inst_11508 = cmd.core.load_gists.call(null);var inst_11509 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_11510 = cmd.core.say.call(null,inst_11509);var state_11517__$1 = (function (){var statearr_11520 = state_11517;(statearr_11520[8] = inst_11507);
(statearr_11520[9] = inst_11508);
return statearr_11520;
})();var statearr_11521_11534 = state_11517__$1;(statearr_11521_11534[2] = inst_11510);
(statearr_11521_11534[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11518 === 3))
{var inst_11515 = (state_11517[2]);var state_11517__$1 = state_11517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11517__$1,inst_11515);
} else
{if((state_val_11518 === 2))
{var inst_11503 = (state_11517[2]);var inst_11504 = cljs.core.nth.call(null,inst_11503,0,null);var inst_11505 = cljs.core.nth.call(null,inst_11503,1,null);var inst_11506 = cmd.utils.raw__GT_clj.call(null,inst_11505);var state_11517__$1 = (function (){var statearr_11522 = state_11517;(statearr_11522[7] = inst_11506);
return statearr_11522;
})();var G__11523_11535 = inst_11504;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11523_11535))
{var statearr_11524_11536 = state_11517__$1;(statearr_11524_11536[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11523_11535))
{var statearr_11525_11537 = state_11517__$1;(statearr_11525_11537[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11504)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11518 === 1))
{var inst_11497 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_11498 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11499 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11500 = cmd.core.auth_param_strict.call(null,inst_11498,inst_11499);var inst_11501 = cmd.lib.PATCH.call(null,inst_11497,new_content,inst_11500);var state_11517__$1 = state_11517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11517__$1,2,inst_11501);
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
var state_machine__6714__auto____0 = (function (){var statearr_11529 = [null,null,null,null,null,null,null,null,null,null];(statearr_11529[0] = state_machine__6714__auto__);
(statearr_11529[1] = 1);
return statearr_11529;
});
var state_machine__6714__auto____1 = (function (state_11517){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11517);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11530){if((e11530 instanceof Object))
{var ex__6717__auto__ = e11530;var statearr_11531_11538 = state_11517;(statearr_11531_11538[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11517);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11539 = state_11517;
state_11517 = G__11539;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11517){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11532 = f__6729__auto__.call(null);(statearr_11532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11600){var state_val_11601 = (state_11600[1]);if((state_val_11601 === 5))
{var inst_11587 = (state_11600[7]);var inst_11595 = cmd.core.handle_io_error.call(null,inst_11587);var state_11600__$1 = state_11600;var statearr_11602_11616 = state_11600__$1;(statearr_11602_11616[2] = inst_11595);
(statearr_11602_11616[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 4))
{var inst_11587 = (state_11600[7]);var inst_11588 = inst_11587.call(null,"id");var inst_11589 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_11590 = cmd.core.load_gists.call(null);var inst_11591 = cmd.core.load_gist.call(null,inst_11588);var inst_11592 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_11588)].join('');var inst_11593 = cmd.core.say.call(null,inst_11592);var state_11600__$1 = (function (){var statearr_11603 = state_11600;(statearr_11603[8] = inst_11590);
(statearr_11603[9] = inst_11589);
(statearr_11603[10] = inst_11591);
return statearr_11603;
})();var statearr_11604_11617 = state_11600__$1;(statearr_11604_11617[2] = inst_11593);
(statearr_11604_11617[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 3))
{var inst_11598 = (state_11600[2]);var state_11600__$1 = state_11600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11600__$1,inst_11598);
} else
{if((state_val_11601 === 2))
{var inst_11584 = (state_11600[2]);var inst_11585 = cljs.core.nth.call(null,inst_11584,0,null);var inst_11586 = cljs.core.nth.call(null,inst_11584,1,null);var inst_11587 = cmd.utils.raw__GT_clj.call(null,inst_11586);var state_11600__$1 = (function (){var statearr_11605 = state_11600;(statearr_11605[7] = inst_11587);
return statearr_11605;
})();var G__11606_11618 = inst_11585;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11606_11618))
{var statearr_11607_11619 = state_11600__$1;(statearr_11607_11619[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11606_11618))
{var statearr_11608_11620 = state_11600__$1;(statearr_11608_11620[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11585)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 1))
{var inst_11579 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11580 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11581 = cmd.core.auth_param_strict.call(null,inst_11579,inst_11580);var inst_11582 = cmd.lib.POST.call(null,"/gists",new_content,inst_11581);var state_11600__$1 = state_11600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11600__$1,2,inst_11582);
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
var state_machine__6714__auto____0 = (function (){var statearr_11612 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11612[0] = state_machine__6714__auto__);
(statearr_11612[1] = 1);
return statearr_11612;
});
var state_machine__6714__auto____1 = (function (state_11600){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11600);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11613){if((e11613 instanceof Object))
{var ex__6717__auto__ = e11613;var statearr_11614_11621 = state_11600;(statearr_11614_11621[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11600);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11622 = state_11600;
state_11600 = G__11622;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11600){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11615 = f__6729__auto__.call(null);(statearr_11615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11615;
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
return (function (state_11642){var state_val_11643 = (state_11642[1]);if((state_val_11643 === 2))
{var inst_11640 = (state_11642[2]);var state_11642__$1 = state_11642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11642__$1,inst_11640);
} else
{if((state_val_11643 === 1))
{var inst_11637 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_11638 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11637,null));var state_11642__$1 = state_11642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11642__$1,2,cmd.core.AppBus,inst_11638);
} else
{return null;
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11647 = [null,null,null,null,null,null,null];(statearr_11647[0] = state_machine__6714__auto__);
(statearr_11647[1] = 1);
return statearr_11647;
});
var state_machine__6714__auto____1 = (function (state_11642){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11642);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11648){if((e11648 instanceof Object))
{var ex__6717__auto__ = e11648;var statearr_11649_11651 = state_11642;(statearr_11649_11651[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11642);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11652 = state_11642;
state_11642 = G__11652;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11642){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11650 = f__6729__auto__.call(null);(statearr_11650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__6728__auto___11681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11681,error_msg){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11681,error_msg){
return (function (state_11672){var state_val_11673 = (state_11672[1]);if((state_val_11673 === 2))
{var inst_11670 = (state_11672[2]);var state_11672__$1 = state_11672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11672__$1,inst_11670);
} else
{if((state_val_11673 === 1))
{var inst_11667 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_11668 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11667,null));var state_11672__$1 = state_11672;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11672__$1,2,cmd.core.AppBus,inst_11668);
} else
{return null;
}
}
});})(c__6728__auto___11681,error_msg))
;return ((function (switch__6713__auto__,c__6728__auto___11681,error_msg){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11677 = [null,null,null,null,null,null,null];(statearr_11677[0] = state_machine__6714__auto__);
(statearr_11677[1] = 1);
return statearr_11677;
});
var state_machine__6714__auto____1 = (function (state_11672){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11672);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11678){if((e11678 instanceof Object))
{var ex__6717__auto__ = e11678;var statearr_11679_11682 = state_11672;(statearr_11679_11682[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11672);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11683 = state_11672;
state_11672 = G__11683;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11672){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11681,error_msg))
})();var state__6730__auto__ = (function (){var statearr_11680 = f__6729__auto__.call(null);(statearr_11680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11681);
return statearr_11680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11681,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11729){var state_val_11730 = (state_11729[1]);if((state_val_11730 === 5))
{var inst_11721 = (state_11729[7]);var inst_11724 = cmd.core.unauthorized.call(null,inst_11721);var state_11729__$1 = state_11729;var statearr_11731_11744 = state_11729__$1;(statearr_11731_11744[2] = inst_11724);
(statearr_11731_11744[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 4))
{var inst_11722 = cmd.core.logged_in.call(null,username,auth_token);var state_11729__$1 = state_11729;var statearr_11732_11745 = state_11729__$1;(statearr_11732_11745[2] = inst_11722);
(statearr_11732_11745[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 3))
{var inst_11727 = (state_11729[2]);var state_11729__$1 = state_11729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11729__$1,inst_11727);
} else
{if((state_val_11730 === 2))
{var inst_11719 = (state_11729[2]);var inst_11720 = cljs.core.nth.call(null,inst_11719,0,null);var inst_11721 = cljs.core.nth.call(null,inst_11719,1,null);var state_11729__$1 = (function (){var statearr_11733 = state_11729;(statearr_11733[7] = inst_11721);
return statearr_11733;
})();var G__11734_11746 = inst_11720;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11734_11746))
{var statearr_11735_11747 = state_11729__$1;(statearr_11735_11747[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11734_11746))
{var statearr_11736_11748 = state_11729__$1;(statearr_11736_11748[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11720)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 1))
{var inst_11715 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_11716 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_11717 = cmd.lib.GET.call(null,inst_11715,inst_11716);var state_11729__$1 = state_11729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11729__$1,2,inst_11717);
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
var state_machine__6714__auto____0 = (function (){var statearr_11740 = [null,null,null,null,null,null,null,null];(statearr_11740[0] = state_machine__6714__auto__);
(statearr_11740[1] = 1);
return statearr_11740;
});
var state_machine__6714__auto____1 = (function (state_11729){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11729);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11741){if((e11741 instanceof Object))
{var ex__6717__auto__ = e11741;var statearr_11742_11749 = state_11729;(statearr_11742_11749[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11729);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11750 = state_11729;
state_11729 = G__11750;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11729){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11743 = f__6729__auto__.call(null);(statearr_11743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11743;
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
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__11752 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__11752,0,null);var first_file = cljs.core.nth.call(null,vec__11752,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.core.get_pinned_gists = (function get_pinned_gists(state){return cljs.core.filter.call(null,(function (gist){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149).cljs$core$IFn$_invoke$arity$1(state),gist.call(null,"id"));
}),new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=core.js.map