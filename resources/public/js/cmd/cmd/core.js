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
var c__6728__auto___11134 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11134){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11134){
return (function (state_11125){var state_val_11126 = (state_11125[1]);if((state_val_11126 === 2))
{var inst_11123 = (state_11125[2]);var state_11125__$1 = state_11125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11125__$1,inst_11123);
} else
{if((state_val_11126 === 1))
{var inst_11120 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_11121 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11120,null));var state_11125__$1 = state_11125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11125__$1,2,cmd.core.AppBus,inst_11121);
} else
{return null;
}
}
});})(c__6728__auto___11134))
;return ((function (switch__6713__auto__,c__6728__auto___11134){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11130 = [null,null,null,null,null,null,null];(statearr_11130[0] = state_machine__6714__auto__);
(statearr_11130[1] = 1);
return statearr_11130;
});
var state_machine__6714__auto____1 = (function (state_11125){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11125);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11131){if((e11131 instanceof Object))
{var ex__6717__auto__ = e11131;var statearr_11132_11135 = state_11125;(statearr_11132_11135[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11136 = state_11125;
state_11125 = G__11136;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11125){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11134))
})();var state__6730__auto__ = (function (){var statearr_11133 = f__6729__auto__.call(null);(statearr_11133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11134);
return statearr_11133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11134))
);
return console.log(msg);
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var text_mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"text-mode","text-mode",4224925109));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,text_mode,ch){
return (function (e){var data = e.data;var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__,data,worker,text_mode,ch){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__,data,worker,text_mode,ch){
return (function (state_11159){var state_val_11160 = (state_11159[1]);if((state_val_11160 === 2))
{var inst_11156 = (state_11159[2]);var inst_11157 = cljs.core.async.close_BANG_.call(null,ch);var state_11159__$1 = (function (){var statearr_11161 = state_11159;(statearr_11161[7] = inst_11156);
return statearr_11161;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11159__$1,inst_11157);
} else
{if((state_val_11160 === 1))
{var inst_11153 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_11154 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11153,null));var state_11159__$1 = state_11159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11159__$1,2,ch,inst_11154);
} else
{return null;
}
}
});})(c__6728__auto__,data,worker,text_mode,ch))
;return ((function (switch__6713__auto__,c__6728__auto__,data,worker,text_mode,ch){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11165 = [null,null,null,null,null,null,null,null];(statearr_11165[0] = state_machine__6714__auto__);
(statearr_11165[1] = 1);
return statearr_11165;
});
var state_machine__6714__auto____1 = (function (state_11159){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11159);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11166){if((e11166 instanceof Object))
{var ex__6717__auto__ = e11166;var statearr_11167_11169 = state_11159;(statearr_11167_11169[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11159);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11170 = state_11159;
state_11159 = G__11170;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11159){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__,data,worker,text_mode,ch))
})();var state__6730__auto__ = (function (){var statearr_11168 = f__6729__auto__.call(null);(statearr_11168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__,data,worker,text_mode,ch))
);
return c__6728__auto__;
});})(worker,text_mode,ch))
,false);
worker.postMessage({"data": text, "mode": text_mode});
return ch;
});
cmd.core.html__GT_react = (function html__GT_react(html){return html;
});
cmd.core.process = (function process__$1(md,cb){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11212){var state_val_11213 = (state_11212[1]);if((state_val_11213 === 5))
{var inst_11207 = cb.call(null,"<Error>");var state_11212__$1 = state_11212;var statearr_11214_11227 = state_11212__$1;(statearr_11214_11227[2] = inst_11207);
(statearr_11214_11227[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11213 === 4))
{var inst_11204 = (state_11212[7]);var inst_11205 = cb.call(null,inst_11204);var state_11212__$1 = state_11212;var statearr_11215_11228 = state_11212__$1;(statearr_11215_11228[2] = inst_11205);
(statearr_11215_11228[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11213 === 3))
{var inst_11210 = (state_11212[2]);var state_11212__$1 = state_11212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11212__$1,inst_11210);
} else
{if((state_val_11213 === 2))
{var inst_11202 = (state_11212[2]);var inst_11203 = cljs.core.nth.call(null,inst_11202,0,null);var inst_11204 = cljs.core.nth.call(null,inst_11202,1,null);var state_11212__$1 = (function (){var statearr_11216 = state_11212;(statearr_11216[7] = inst_11204);
return statearr_11216;
})();var G__11217_11229 = inst_11203;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11217_11229))
{var statearr_11218_11230 = state_11212__$1;(statearr_11218_11230[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11217_11229))
{var statearr_11219_11231 = state_11212__$1;(statearr_11219_11231[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11203)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11213 === 1))
{var inst_11200 = cmd.core.wmd__GT_html.call(null,md);var state_11212__$1 = state_11212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11212__$1,2,inst_11200);
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
var state_machine__6714__auto____0 = (function (){var statearr_11223 = [null,null,null,null,null,null,null,null];(statearr_11223[0] = state_machine__6714__auto__);
(statearr_11223[1] = 1);
return statearr_11223;
});
var state_machine__6714__auto____1 = (function (state_11212){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11212);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11224){if((e11224 instanceof Object))
{var ex__6717__auto__ = e11224;var statearr_11225_11232 = state_11212;(statearr_11225_11232[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11233 = state_11212;
state_11212 = G__11233;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11212){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11226 = f__6729__auto__.call(null);(statearr_11226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.make_basic_auth_token = (function make_basic_auth_token(username,password){return btoa([cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join(''));
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj11237 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(cmd.core.make_basic_auth_token.call(null,username,auth_token))].join(''),"Content-Type":"application/json"};return obj11237;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj11241 = {"Content-Type":"application/json"};return obj11241;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__11242_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__11242_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.core.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11305){var state_val_11306 = (state_11305[1]);if((state_val_11306 === 6))
{var inst_11292 = (state_11305[7]);var inst_11300 = cmd.core.handle_io_error.call(null,inst_11292);var state_11305__$1 = state_11305;var statearr_11307_11321 = state_11305__$1;(statearr_11307_11321[2] = inst_11300);
(statearr_11307_11321[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11306 === 5))
{var inst_11293 = (state_11305[8]);var inst_11297 = (state_11305[2]);var inst_11298 = inst_11293.call(null,inst_11297);var state_11305__$1 = state_11305;var statearr_11308_11322 = state_11305__$1;(statearr_11308_11322[2] = inst_11298);
(statearr_11308_11322[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11306 === 4))
{var inst_11292 = (state_11305[7]);var inst_11293 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_11292);var inst_11294 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_11295 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11294,null));var state_11305__$1 = (function (){var statearr_11309 = state_11305;(statearr_11309[8] = inst_11293);
return statearr_11309;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11305__$1,5,cmd.core.AppBus,inst_11295);
} else
{if((state_val_11306 === 3))
{var inst_11303 = (state_11305[2]);var state_11305__$1 = state_11305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11305__$1,inst_11303);
} else
{if((state_val_11306 === 2))
{var inst_11289 = (state_11305[2]);var inst_11290 = cljs.core.nth.call(null,inst_11289,0,null);var inst_11291 = cljs.core.nth.call(null,inst_11289,1,null);var inst_11292 = cmd.utils.raw__GT_clj.call(null,inst_11291);var state_11305__$1 = (function (){var statearr_11310 = state_11305;(statearr_11310[7] = inst_11292);
return statearr_11310;
})();var G__11311_11323 = inst_11290;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11311_11323))
{var statearr_11312_11324 = state_11305__$1;(statearr_11312_11324[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11311_11323))
{var statearr_11313_11325 = state_11305__$1;(statearr_11313_11325[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11290)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11306 === 1))
{var inst_11283 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11284 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11285 = [cljs.core.str("/users/"),cljs.core.str(inst_11283),cljs.core.str("/gists")].join('');var inst_11286 = cmd.core.auth_param_fallback.call(null,inst_11283,inst_11284);var inst_11287 = cmd.lib.GET.call(null,inst_11285,inst_11286);var state_11305__$1 = state_11305;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11305__$1,2,inst_11287);
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
var state_machine__6714__auto____0 = (function (){var statearr_11317 = [null,null,null,null,null,null,null,null,null];(statearr_11317[0] = state_machine__6714__auto__);
(statearr_11317[1] = 1);
return statearr_11317;
});
var state_machine__6714__auto____1 = (function (state_11305){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11305);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11318){if((e11318 instanceof Object))
{var ex__6717__auto__ = e11318;var statearr_11319_11326 = state_11305;(statearr_11319_11326[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11305);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11327 = state_11305;
state_11305 = G__11327;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11305){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11320 = f__6729__auto__.call(null);(statearr_11320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.update_latest_opened = (function update_latest_opened(gist_id){var latest_opened = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289));var clean_opened = cljs.core.filter.call(null,((function (latest_opened){
return (function (p1__11328_SHARP_){return !(cljs.core._EQ_.call(null,p1__11328_SHARP_,gist_id));
});})(latest_opened))
,latest_opened);var new_latest_opened = cljs.core.take.call(null,20,cljs.core.conj.call(null,clean_opened,gist_id));return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289),new_latest_opened);
});
cmd.core.get_motd = (function get_motd(gist_id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11403){var state_val_11404 = (state_11403[1]);if((state_val_11404 === 6))
{var inst_11396 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_11397 = cmd.core.say.call(null,"Sorry, can't load motd");var inst_11398 = inst_11396.call(null,inst_11397);var state_11403__$1 = state_11403;var statearr_11405_11419 = state_11403__$1;(statearr_11405_11419[2] = inst_11398);
(statearr_11405_11419[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 5))
{var inst_11389 = (state_11403[7]);var inst_11393 = (state_11403[2]);var inst_11394 = inst_11389.call(null,inst_11393);var state_11403__$1 = state_11403;var statearr_11406_11420 = state_11403__$1;(statearr_11406_11420[2] = inst_11394);
(statearr_11406_11420[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 4))
{var inst_11381 = (state_11403[8]);var inst_11383 = cmd.utils.raw__GT_clj.call(null,inst_11381);var inst_11384 = inst_11383.call(null,"files");var inst_11385 = cljs.core.first.call(null,inst_11384);var inst_11386 = cljs.core.nth.call(null,inst_11385,0,null);var inst_11387 = cljs.core.nth.call(null,inst_11385,1,null);var inst_11388 = inst_11387.call(null,"content");var inst_11389 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_11388);var inst_11390 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_11388];var inst_11391 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11390,null));var state_11403__$1 = (function (){var statearr_11407 = state_11403;(statearr_11407[7] = inst_11389);
(statearr_11407[9] = inst_11386);
return statearr_11407;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11403__$1,5,cmd.core.AppBus,inst_11391);
} else
{if((state_val_11404 === 3))
{var inst_11401 = (state_11403[2]);var state_11403__$1 = state_11403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11403__$1,inst_11401);
} else
{if((state_val_11404 === 2))
{var inst_11379 = (state_11403[2]);var inst_11380 = cljs.core.nth.call(null,inst_11379,0,null);var inst_11381 = cljs.core.nth.call(null,inst_11379,1,null);var state_11403__$1 = (function (){var statearr_11408 = state_11403;(statearr_11408[8] = inst_11381);
return statearr_11408;
})();var G__11409_11421 = inst_11380;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11409_11421))
{var statearr_11410_11422 = state_11403__$1;(statearr_11410_11422[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11409_11421))
{var statearr_11411_11423 = state_11403__$1;(statearr_11411_11423[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11380)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 1))
{var inst_11375 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_11376 = cmd.core.auth_param_anon.call(null);var inst_11377 = cmd.lib.GET.call(null,inst_11375,inst_11376);var state_11403__$1 = state_11403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11403__$1,2,inst_11377);
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
var state_machine__6714__auto____0 = (function (){var statearr_11415 = [null,null,null,null,null,null,null,null,null,null];(statearr_11415[0] = state_machine__6714__auto__);
(statearr_11415[1] = 1);
return statearr_11415;
});
var state_machine__6714__auto____1 = (function (state_11403){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11403);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11416){if((e11416 instanceof Object))
{var ex__6717__auto__ = e11416;var statearr_11417_11424 = state_11403;(statearr_11417_11424[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11425 = state_11403;
state_11403 = G__11425;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11403){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11418 = f__6729__auto__.call(null);(statearr_11418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.guess_file_mode = (function guess_file_mode(filename){var ext = cljs.core.re_find.call(null,/\.[A-Za-z0-9]+?$/,filename);var G__11427 = ext;if(cljs.core._EQ_.call(null,null,G__11427))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ext.toLowerCase();
} else
{return null;
}
}
});
cmd.core.load_gist = (function load_gist(id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11512){var state_val_11513 = (state_11512[1]);if((state_val_11513 === 6))
{var inst_11487 = (state_11512[7]);var inst_11506 = cmd.utils.raw__GT_clj.call(null,inst_11487);var inst_11507 = cmd.core.handle_io_error.call(null,inst_11506);var state_11512__$1 = state_11512;var statearr_11514_11528 = state_11512__$1;(statearr_11514_11528[2] = inst_11507);
(statearr_11514_11528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 5))
{var inst_11504 = (state_11512[2]);var state_11512__$1 = state_11512;var statearr_11515_11529 = state_11512__$1;(statearr_11515_11529[2] = inst_11504);
(statearr_11515_11529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 4))
{var inst_11487 = (state_11512[7]);var inst_11489 = cmd.utils.raw__GT_clj.call(null,inst_11487);var inst_11490 = inst_11489.call(null,"files");var inst_11491 = cljs.core.first.call(null,inst_11490);var inst_11492 = cljs.core.nth.call(null,inst_11491,0,null);var inst_11493 = cljs.core.nth.call(null,inst_11491,1,null);var inst_11494 = cmd.core.guess_file_mode.call(null,inst_11492);var inst_11495 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_11492);var inst_11496 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"text-mode","text-mode",4224925109),inst_11494);var inst_11497 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_11489);var inst_11498 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_11499 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_11500 = cmd.core.update_latest_opened.call(null,id);var inst_11501 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_11502 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11501,null));var state_11512__$1 = (function (){var statearr_11516 = state_11512;(statearr_11516[8] = inst_11496);
(statearr_11516[9] = inst_11497);
(statearr_11516[10] = inst_11499);
(statearr_11516[11] = inst_11500);
(statearr_11516[12] = inst_11498);
(statearr_11516[13] = inst_11495);
(statearr_11516[14] = inst_11493);
return statearr_11516;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11512__$1,5,cmd.core.AppBus,inst_11502);
} else
{if((state_val_11513 === 3))
{var inst_11510 = (state_11512[2]);var state_11512__$1 = state_11512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11512__$1,inst_11510);
} else
{if((state_val_11513 === 2))
{var inst_11485 = (state_11512[2]);var inst_11486 = cljs.core.nth.call(null,inst_11485,0,null);var inst_11487 = cljs.core.nth.call(null,inst_11485,1,null);var state_11512__$1 = (function (){var statearr_11517 = state_11512;(statearr_11517[7] = inst_11487);
return statearr_11517;
})();var G__11518_11530 = inst_11486;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11518_11530))
{var statearr_11519_11531 = state_11512__$1;(statearr_11519_11531[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11518_11530))
{var statearr_11520_11532 = state_11512__$1;(statearr_11520_11532[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11486)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 1))
{var inst_11479 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_11480 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11481 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11482 = cmd.core.auth_param_fallback.call(null,inst_11480,inst_11481);var inst_11483 = cmd.lib.GET.call(null,inst_11479,inst_11482);var state_11512__$1 = state_11512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11512__$1,2,inst_11483);
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
var state_machine__6714__auto____0 = (function (){var statearr_11524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11524[0] = state_machine__6714__auto__);
(statearr_11524[1] = 1);
return statearr_11524;
});
var state_machine__6714__auto____1 = (function (state_11512){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11512);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11525){if((e11525 instanceof Object))
{var ex__6717__auto__ = e11525;var statearr_11526_11533 = state_11512;(statearr_11526_11533[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11512);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11534 = state_11512;
state_11512 = G__11534;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11512){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11527 = f__6729__auto__.call(null);(statearr_11527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11593){var state_val_11594 = (state_11593[1]);if((state_val_11594 === 5))
{var inst_11582 = (state_11593[7]);var inst_11588 = cmd.core.handle_io_error.call(null,inst_11582);var state_11593__$1 = state_11593;var statearr_11595_11609 = state_11593__$1;(statearr_11595_11609[2] = inst_11588);
(statearr_11595_11609[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11594 === 4))
{var inst_11582 = (state_11593[7]);var inst_11583 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_11582);var inst_11584 = cmd.core.load_gists.call(null);var inst_11585 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_11586 = cmd.core.say.call(null,inst_11585);var state_11593__$1 = (function (){var statearr_11596 = state_11593;(statearr_11596[8] = inst_11583);
(statearr_11596[9] = inst_11584);
return statearr_11596;
})();var statearr_11597_11610 = state_11593__$1;(statearr_11597_11610[2] = inst_11586);
(statearr_11597_11610[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11594 === 3))
{var inst_11591 = (state_11593[2]);var state_11593__$1 = state_11593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11593__$1,inst_11591);
} else
{if((state_val_11594 === 2))
{var inst_11579 = (state_11593[2]);var inst_11580 = cljs.core.nth.call(null,inst_11579,0,null);var inst_11581 = cljs.core.nth.call(null,inst_11579,1,null);var inst_11582 = cmd.utils.raw__GT_clj.call(null,inst_11581);var state_11593__$1 = (function (){var statearr_11598 = state_11593;(statearr_11598[7] = inst_11582);
return statearr_11598;
})();var G__11599_11611 = inst_11580;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11599_11611))
{var statearr_11600_11612 = state_11593__$1;(statearr_11600_11612[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11599_11611))
{var statearr_11601_11613 = state_11593__$1;(statearr_11601_11613[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11580)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11594 === 1))
{var inst_11573 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_11574 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11575 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11576 = cmd.core.auth_param_strict.call(null,inst_11574,inst_11575);var inst_11577 = cmd.lib.PATCH.call(null,inst_11573,new_content,inst_11576);var state_11593__$1 = state_11593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11593__$1,2,inst_11577);
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
var state_machine__6714__auto____0 = (function (){var statearr_11605 = [null,null,null,null,null,null,null,null,null,null];(statearr_11605[0] = state_machine__6714__auto__);
(statearr_11605[1] = 1);
return statearr_11605;
});
var state_machine__6714__auto____1 = (function (state_11593){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11593);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11606){if((e11606 instanceof Object))
{var ex__6717__auto__ = e11606;var statearr_11607_11614 = state_11593;(statearr_11607_11614[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11615 = state_11593;
state_11593 = G__11615;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11593){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11608 = f__6729__auto__.call(null);(statearr_11608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11676){var state_val_11677 = (state_11676[1]);if((state_val_11677 === 5))
{var inst_11663 = (state_11676[7]);var inst_11671 = cmd.core.handle_io_error.call(null,inst_11663);var state_11676__$1 = state_11676;var statearr_11678_11692 = state_11676__$1;(statearr_11678_11692[2] = inst_11671);
(statearr_11678_11692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11677 === 4))
{var inst_11663 = (state_11676[7]);var inst_11664 = inst_11663.call(null,"id");var inst_11665 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_11666 = cmd.core.load_gists.call(null);var inst_11667 = cmd.core.load_gist.call(null,inst_11664);var inst_11668 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_11664)].join('');var inst_11669 = cmd.core.say.call(null,inst_11668);var state_11676__$1 = (function (){var statearr_11679 = state_11676;(statearr_11679[8] = inst_11667);
(statearr_11679[9] = inst_11665);
(statearr_11679[10] = inst_11666);
return statearr_11679;
})();var statearr_11680_11693 = state_11676__$1;(statearr_11680_11693[2] = inst_11669);
(statearr_11680_11693[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11677 === 3))
{var inst_11674 = (state_11676[2]);var state_11676__$1 = state_11676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11676__$1,inst_11674);
} else
{if((state_val_11677 === 2))
{var inst_11660 = (state_11676[2]);var inst_11661 = cljs.core.nth.call(null,inst_11660,0,null);var inst_11662 = cljs.core.nth.call(null,inst_11660,1,null);var inst_11663 = cmd.utils.raw__GT_clj.call(null,inst_11662);var state_11676__$1 = (function (){var statearr_11681 = state_11676;(statearr_11681[7] = inst_11663);
return statearr_11681;
})();var G__11682_11694 = inst_11661;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11682_11694))
{var statearr_11683_11695 = state_11676__$1;(statearr_11683_11695[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11682_11694))
{var statearr_11684_11696 = state_11676__$1;(statearr_11684_11696[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11661)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11677 === 1))
{var inst_11655 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11656 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11657 = cmd.core.auth_param_strict.call(null,inst_11655,inst_11656);var inst_11658 = cmd.lib.POST.call(null,"/gists",new_content,inst_11657);var state_11676__$1 = state_11676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11676__$1,2,inst_11658);
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
var state_machine__6714__auto____0 = (function (){var statearr_11688 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11688[0] = state_machine__6714__auto__);
(statearr_11688[1] = 1);
return statearr_11688;
});
var state_machine__6714__auto____1 = (function (state_11676){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11676);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11689){if((e11689 instanceof Object))
{var ex__6717__auto__ = e11689;var statearr_11690_11697 = state_11676;(statearr_11690_11697[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11676);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11698 = state_11676;
state_11676 = G__11698;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11676){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11691 = f__6729__auto__.call(null);(statearr_11691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11691;
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
return (function (state_11718){var state_val_11719 = (state_11718[1]);if((state_val_11719 === 2))
{var inst_11716 = (state_11718[2]);var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11718__$1,inst_11716);
} else
{if((state_val_11719 === 1))
{var inst_11713 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_11714 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11713,null));var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11718__$1,2,cmd.core.AppBus,inst_11714);
} else
{return null;
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11723 = [null,null,null,null,null,null,null];(statearr_11723[0] = state_machine__6714__auto__);
(statearr_11723[1] = 1);
return statearr_11723;
});
var state_machine__6714__auto____1 = (function (state_11718){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11718);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11724){if((e11724 instanceof Object))
{var ex__6717__auto__ = e11724;var statearr_11725_11727 = state_11718;(statearr_11725_11727[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11718);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11728 = state_11718;
state_11718 = G__11728;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11718){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11726 = f__6729__auto__.call(null);(statearr_11726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__6728__auto___11757 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11757,error_msg){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11757,error_msg){
return (function (state_11748){var state_val_11749 = (state_11748[1]);if((state_val_11749 === 2))
{var inst_11746 = (state_11748[2]);var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11748__$1,inst_11746);
} else
{if((state_val_11749 === 1))
{var inst_11743 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_11744 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11743,null));var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11748__$1,2,cmd.core.AppBus,inst_11744);
} else
{return null;
}
}
});})(c__6728__auto___11757,error_msg))
;return ((function (switch__6713__auto__,c__6728__auto___11757,error_msg){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11753 = [null,null,null,null,null,null,null];(statearr_11753[0] = state_machine__6714__auto__);
(statearr_11753[1] = 1);
return statearr_11753;
});
var state_machine__6714__auto____1 = (function (state_11748){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11748);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11754){if((e11754 instanceof Object))
{var ex__6717__auto__ = e11754;var statearr_11755_11758 = state_11748;(statearr_11755_11758[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11748);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11759 = state_11748;
state_11748 = G__11759;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11748){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11757,error_msg))
})();var state__6730__auto__ = (function (){var statearr_11756 = f__6729__auto__.call(null);(statearr_11756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11757);
return statearr_11756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11757,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11805){var state_val_11806 = (state_11805[1]);if((state_val_11806 === 5))
{var inst_11797 = (state_11805[7]);var inst_11800 = cmd.core.unauthorized.call(null,inst_11797);var state_11805__$1 = state_11805;var statearr_11807_11820 = state_11805__$1;(statearr_11807_11820[2] = inst_11800);
(statearr_11807_11820[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11806 === 4))
{var inst_11798 = cmd.core.logged_in.call(null,username,auth_token);var state_11805__$1 = state_11805;var statearr_11808_11821 = state_11805__$1;(statearr_11808_11821[2] = inst_11798);
(statearr_11808_11821[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11806 === 3))
{var inst_11803 = (state_11805[2]);var state_11805__$1 = state_11805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11805__$1,inst_11803);
} else
{if((state_val_11806 === 2))
{var inst_11795 = (state_11805[2]);var inst_11796 = cljs.core.nth.call(null,inst_11795,0,null);var inst_11797 = cljs.core.nth.call(null,inst_11795,1,null);var state_11805__$1 = (function (){var statearr_11809 = state_11805;(statearr_11809[7] = inst_11797);
return statearr_11809;
})();var G__11810_11822 = inst_11796;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11810_11822))
{var statearr_11811_11823 = state_11805__$1;(statearr_11811_11823[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11810_11822))
{var statearr_11812_11824 = state_11805__$1;(statearr_11812_11824[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11796)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11806 === 1))
{var inst_11791 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_11792 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_11793 = cmd.lib.GET.call(null,inst_11791,inst_11792);var state_11805__$1 = state_11805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11805__$1,2,inst_11793);
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
var state_machine__6714__auto____0 = (function (){var statearr_11816 = [null,null,null,null,null,null,null,null];(statearr_11816[0] = state_machine__6714__auto__);
(statearr_11816[1] = 1);
return statearr_11816;
});
var state_machine__6714__auto____1 = (function (state_11805){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11805);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11817){if((e11817 instanceof Object))
{var ex__6717__auto__ = e11817;var statearr_11818_11825 = state_11805;(statearr_11818_11825[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11826 = state_11805;
state_11805 = G__11826;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11805){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11819 = f__6729__auto__.call(null);(statearr_11819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11819;
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
cmd.core.parse_location_hash = (function parse_location_hash(){var hash = document.location.hash;if((cljs.core.count.call(null,hash) > 2))
{return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gist-id","gist-id",1053270999),new cljs.core.Keyword(null,"panels","panels",4313328225)], null),cljs.core.subs.call(null,hash,2).split(";"));
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
})();var panels = hash_hash.call(null,new cljs.core.Keyword(null,"panels","panels",4313328225));var chunks = (((panels == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gist_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gist_id,panels], null));return document.location.hash = [cljs.core.str("!"),cljs.core.str(clojure.string.join.call(null,";",chunks))].join('');
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
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__11828 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__11828,0,null);var first_file = cljs.core.nth.call(null,vec__11828,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.core.get_pinned_gists = (function get_pinned_gists(state){return cljs.core.filter.call(null,(function (gist){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149).cljs$core$IFn$_invoke$arity$1(state),gist.call(null,"id"));
}),new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=core.js.map