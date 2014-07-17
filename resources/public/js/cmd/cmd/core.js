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
var c__6728__auto___11097 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11097){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11097){
return (function (state_11088){var state_val_11089 = (state_11088[1]);if((state_val_11089 === 2))
{var inst_11086 = (state_11088[2]);var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11088__$1,inst_11086);
} else
{if((state_val_11089 === 1))
{var inst_11083 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_11084 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11083,null));var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11088__$1,2,cmd.core.AppBus,inst_11084);
} else
{return null;
}
}
});})(c__6728__auto___11097))
;return ((function (switch__6713__auto__,c__6728__auto___11097){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11093 = [null,null,null,null,null,null,null];(statearr_11093[0] = state_machine__6714__auto__);
(statearr_11093[1] = 1);
return statearr_11093;
});
var state_machine__6714__auto____1 = (function (state_11088){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11088);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11094){if((e11094 instanceof Object))
{var ex__6717__auto__ = e11094;var statearr_11095_11098 = state_11088;(statearr_11095_11098[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11088);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11099 = state_11088;
state_11088 = G__11099;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11088){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11097))
})();var state__6730__auto__ = (function (){var statearr_11096 = f__6729__auto__.call(null);(statearr_11096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11097);
return statearr_11096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11097))
);
return console.log(msg);
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var text_mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"text-mode","text-mode",4224925109));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,text_mode,ch){
return (function (e){var data = e.data;var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__,data,worker,text_mode,ch){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__,data,worker,text_mode,ch){
return (function (state_11122){var state_val_11123 = (state_11122[1]);if((state_val_11123 === 2))
{var inst_11119 = (state_11122[2]);var inst_11120 = cljs.core.async.close_BANG_.call(null,ch);var state_11122__$1 = (function (){var statearr_11124 = state_11122;(statearr_11124[7] = inst_11119);
return statearr_11124;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11122__$1,inst_11120);
} else
{if((state_val_11123 === 1))
{var inst_11116 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_11117 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11116,null));var state_11122__$1 = state_11122;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11122__$1,2,ch,inst_11117);
} else
{return null;
}
}
});})(c__6728__auto__,data,worker,text_mode,ch))
;return ((function (switch__6713__auto__,c__6728__auto__,data,worker,text_mode,ch){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11128 = [null,null,null,null,null,null,null,null];(statearr_11128[0] = state_machine__6714__auto__);
(statearr_11128[1] = 1);
return statearr_11128;
});
var state_machine__6714__auto____1 = (function (state_11122){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11122);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11129){if((e11129 instanceof Object))
{var ex__6717__auto__ = e11129;var statearr_11130_11132 = state_11122;(statearr_11130_11132[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11122);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11133 = state_11122;
state_11122 = G__11133;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11122){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__,data,worker,text_mode,ch))
})();var state__6730__auto__ = (function (){var statearr_11131 = f__6729__auto__.call(null);(statearr_11131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11131;
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
return (function (state_11175){var state_val_11176 = (state_11175[1]);if((state_val_11176 === 5))
{var inst_11170 = cb.call(null,"<Error>");var state_11175__$1 = state_11175;var statearr_11177_11190 = state_11175__$1;(statearr_11177_11190[2] = inst_11170);
(statearr_11177_11190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 4))
{var inst_11167 = (state_11175[7]);var inst_11168 = cb.call(null,inst_11167);var state_11175__$1 = state_11175;var statearr_11178_11191 = state_11175__$1;(statearr_11178_11191[2] = inst_11168);
(statearr_11178_11191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 3))
{var inst_11173 = (state_11175[2]);var state_11175__$1 = state_11175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11175__$1,inst_11173);
} else
{if((state_val_11176 === 2))
{var inst_11165 = (state_11175[2]);var inst_11166 = cljs.core.nth.call(null,inst_11165,0,null);var inst_11167 = cljs.core.nth.call(null,inst_11165,1,null);var state_11175__$1 = (function (){var statearr_11179 = state_11175;(statearr_11179[7] = inst_11167);
return statearr_11179;
})();var G__11180_11192 = inst_11166;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11180_11192))
{var statearr_11181_11193 = state_11175__$1;(statearr_11181_11193[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11180_11192))
{var statearr_11182_11194 = state_11175__$1;(statearr_11182_11194[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11166)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 1))
{var inst_11163 = cmd.core.wmd__GT_html.call(null,md);var state_11175__$1 = state_11175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11175__$1,2,inst_11163);
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
var state_machine__6714__auto____0 = (function (){var statearr_11186 = [null,null,null,null,null,null,null,null];(statearr_11186[0] = state_machine__6714__auto__);
(statearr_11186[1] = 1);
return statearr_11186;
});
var state_machine__6714__auto____1 = (function (state_11175){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11175);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11187){if((e11187 instanceof Object))
{var ex__6717__auto__ = e11187;var statearr_11188_11195 = state_11175;(statearr_11188_11195[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11175);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11196 = state_11175;
state_11175 = G__11196;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11175){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11189 = f__6729__auto__.call(null);(statearr_11189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.make_basic_auth_token = (function make_basic_auth_token(username,password){return btoa([cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join(''));
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj11200 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(cmd.core.make_basic_auth_token.call(null,username,auth_token))].join(''),"Content-Type":"application/json"};return obj11200;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj11204 = {"Content-Type":"application/json"};return obj11204;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__11205_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__11205_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.core.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11268){var state_val_11269 = (state_11268[1]);if((state_val_11269 === 6))
{var inst_11255 = (state_11268[7]);var inst_11263 = cmd.core.handle_io_error.call(null,inst_11255);var state_11268__$1 = state_11268;var statearr_11270_11284 = state_11268__$1;(statearr_11270_11284[2] = inst_11263);
(statearr_11270_11284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11269 === 5))
{var inst_11256 = (state_11268[8]);var inst_11260 = (state_11268[2]);var inst_11261 = inst_11256.call(null,inst_11260);var state_11268__$1 = state_11268;var statearr_11271_11285 = state_11268__$1;(statearr_11271_11285[2] = inst_11261);
(statearr_11271_11285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11269 === 4))
{var inst_11255 = (state_11268[7]);var inst_11256 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_11255);var inst_11257 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_11258 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11257,null));var state_11268__$1 = (function (){var statearr_11272 = state_11268;(statearr_11272[8] = inst_11256);
return statearr_11272;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11268__$1,5,cmd.core.AppBus,inst_11258);
} else
{if((state_val_11269 === 3))
{var inst_11266 = (state_11268[2]);var state_11268__$1 = state_11268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11268__$1,inst_11266);
} else
{if((state_val_11269 === 2))
{var inst_11252 = (state_11268[2]);var inst_11253 = cljs.core.nth.call(null,inst_11252,0,null);var inst_11254 = cljs.core.nth.call(null,inst_11252,1,null);var inst_11255 = cmd.utils.raw__GT_clj.call(null,inst_11254);var state_11268__$1 = (function (){var statearr_11273 = state_11268;(statearr_11273[7] = inst_11255);
return statearr_11273;
})();var G__11274_11286 = inst_11253;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11274_11286))
{var statearr_11275_11287 = state_11268__$1;(statearr_11275_11287[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11274_11286))
{var statearr_11276_11288 = state_11268__$1;(statearr_11276_11288[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11253)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11269 === 1))
{var inst_11246 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11247 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11248 = [cljs.core.str("/users/"),cljs.core.str(inst_11246),cljs.core.str("/gists")].join('');var inst_11249 = cmd.core.auth_param_fallback.call(null,inst_11246,inst_11247);var inst_11250 = cmd.lib.GET.call(null,inst_11248,inst_11249);var state_11268__$1 = state_11268;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11268__$1,2,inst_11250);
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
var state_machine__6714__auto____0 = (function (){var statearr_11280 = [null,null,null,null,null,null,null,null,null];(statearr_11280[0] = state_machine__6714__auto__);
(statearr_11280[1] = 1);
return statearr_11280;
});
var state_machine__6714__auto____1 = (function (state_11268){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11268);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11281){if((e11281 instanceof Object))
{var ex__6717__auto__ = e11281;var statearr_11282_11289 = state_11268;(statearr_11282_11289[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11268);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11290 = state_11268;
state_11268 = G__11290;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11268){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11283 = f__6729__auto__.call(null);(statearr_11283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.update_latest_opened = (function update_latest_opened(gist_id){var latest_opened = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289));var clean_opened = cljs.core.filter.call(null,((function (latest_opened){
return (function (p1__11291_SHARP_){return !(cljs.core._EQ_.call(null,p1__11291_SHARP_,gist_id));
});})(latest_opened))
,latest_opened);var new_latest_opened = cljs.core.take.call(null,20,cljs.core.conj.call(null,clean_opened,gist_id));return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289),new_latest_opened);
});
cmd.core.get_motd = (function get_motd(gist_id){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11366){var state_val_11367 = (state_11366[1]);if((state_val_11367 === 6))
{var inst_11359 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_11360 = cmd.core.say.call(null,"Sorry, can't load motd");var inst_11361 = inst_11359.call(null,inst_11360);var state_11366__$1 = state_11366;var statearr_11368_11382 = state_11366__$1;(statearr_11368_11382[2] = inst_11361);
(statearr_11368_11382[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11367 === 5))
{var inst_11352 = (state_11366[7]);var inst_11356 = (state_11366[2]);var inst_11357 = inst_11352.call(null,inst_11356);var state_11366__$1 = state_11366;var statearr_11369_11383 = state_11366__$1;(statearr_11369_11383[2] = inst_11357);
(statearr_11369_11383[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11367 === 4))
{var inst_11344 = (state_11366[8]);var inst_11346 = cmd.utils.raw__GT_clj.call(null,inst_11344);var inst_11347 = inst_11346.call(null,"files");var inst_11348 = cljs.core.first.call(null,inst_11347);var inst_11349 = cljs.core.nth.call(null,inst_11348,0,null);var inst_11350 = cljs.core.nth.call(null,inst_11348,1,null);var inst_11351 = inst_11350.call(null,"content");var inst_11352 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_11351);var inst_11353 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_11351];var inst_11354 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11353,null));var state_11366__$1 = (function (){var statearr_11370 = state_11366;(statearr_11370[7] = inst_11352);
(statearr_11370[9] = inst_11349);
return statearr_11370;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11366__$1,5,cmd.core.AppBus,inst_11354);
} else
{if((state_val_11367 === 3))
{var inst_11364 = (state_11366[2]);var state_11366__$1 = state_11366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11366__$1,inst_11364);
} else
{if((state_val_11367 === 2))
{var inst_11342 = (state_11366[2]);var inst_11343 = cljs.core.nth.call(null,inst_11342,0,null);var inst_11344 = cljs.core.nth.call(null,inst_11342,1,null);var state_11366__$1 = (function (){var statearr_11371 = state_11366;(statearr_11371[8] = inst_11344);
return statearr_11371;
})();var G__11372_11384 = inst_11343;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11372_11384))
{var statearr_11373_11385 = state_11366__$1;(statearr_11373_11385[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11372_11384))
{var statearr_11374_11386 = state_11366__$1;(statearr_11374_11386[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11343)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11367 === 1))
{var inst_11338 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_11339 = cmd.core.auth_param_anon.call(null);var inst_11340 = cmd.lib.GET.call(null,inst_11338,inst_11339);var state_11366__$1 = state_11366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11366__$1,2,inst_11340);
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
var state_machine__6714__auto____0 = (function (){var statearr_11378 = [null,null,null,null,null,null,null,null,null,null];(statearr_11378[0] = state_machine__6714__auto__);
(statearr_11378[1] = 1);
return statearr_11378;
});
var state_machine__6714__auto____1 = (function (state_11366){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11379){if((e11379 instanceof Object))
{var ex__6717__auto__ = e11379;var statearr_11380_11387 = state_11366;(statearr_11380_11387[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11388 = state_11366;
state_11366 = G__11388;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11366){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11381 = f__6729__auto__.call(null);(statearr_11381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.guess_file_mode = (function guess_file_mode(filename){var ext = cljs.core.re_find.call(null,/\.[A-Za-z0-9]+?$/,filename);var G__11390 = ext;if(cljs.core._EQ_.call(null,null,G__11390))
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
return (function (state_11475){var state_val_11476 = (state_11475[1]);if((state_val_11476 === 6))
{var inst_11450 = (state_11475[7]);var inst_11469 = cmd.utils.raw__GT_clj.call(null,inst_11450);var inst_11470 = cmd.core.handle_io_error.call(null,inst_11469);var state_11475__$1 = state_11475;var statearr_11477_11491 = state_11475__$1;(statearr_11477_11491[2] = inst_11470);
(statearr_11477_11491[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11476 === 5))
{var inst_11467 = (state_11475[2]);var state_11475__$1 = state_11475;var statearr_11478_11492 = state_11475__$1;(statearr_11478_11492[2] = inst_11467);
(statearr_11478_11492[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11476 === 4))
{var inst_11450 = (state_11475[7]);var inst_11452 = cmd.utils.raw__GT_clj.call(null,inst_11450);var inst_11453 = inst_11452.call(null,"files");var inst_11454 = cljs.core.first.call(null,inst_11453);var inst_11455 = cljs.core.nth.call(null,inst_11454,0,null);var inst_11456 = cljs.core.nth.call(null,inst_11454,1,null);var inst_11457 = cmd.core.guess_file_mode.call(null,inst_11455);var inst_11458 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_11455);var inst_11459 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"text-mode","text-mode",4224925109),inst_11457);var inst_11460 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_11452);var inst_11461 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_11462 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_11463 = cmd.core.update_latest_opened.call(null,id);var inst_11464 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_11465 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11464,null));var state_11475__$1 = (function (){var statearr_11479 = state_11475;(statearr_11479[8] = inst_11460);
(statearr_11479[9] = inst_11459);
(statearr_11479[10] = inst_11462);
(statearr_11479[11] = inst_11458);
(statearr_11479[12] = inst_11456);
(statearr_11479[13] = inst_11463);
(statearr_11479[14] = inst_11461);
return statearr_11479;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11475__$1,5,cmd.core.AppBus,inst_11465);
} else
{if((state_val_11476 === 3))
{var inst_11473 = (state_11475[2]);var state_11475__$1 = state_11475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11475__$1,inst_11473);
} else
{if((state_val_11476 === 2))
{var inst_11448 = (state_11475[2]);var inst_11449 = cljs.core.nth.call(null,inst_11448,0,null);var inst_11450 = cljs.core.nth.call(null,inst_11448,1,null);var state_11475__$1 = (function (){var statearr_11480 = state_11475;(statearr_11480[7] = inst_11450);
return statearr_11480;
})();var G__11481_11493 = inst_11449;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11481_11493))
{var statearr_11482_11494 = state_11475__$1;(statearr_11482_11494[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11481_11493))
{var statearr_11483_11495 = state_11475__$1;(statearr_11483_11495[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11449)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11476 === 1))
{var inst_11442 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_11443 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11444 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11445 = cmd.core.auth_param_fallback.call(null,inst_11443,inst_11444);var inst_11446 = cmd.lib.GET.call(null,inst_11442,inst_11445);var state_11475__$1 = state_11475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11475__$1,2,inst_11446);
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
var state_machine__6714__auto____0 = (function (){var statearr_11487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11487[0] = state_machine__6714__auto__);
(statearr_11487[1] = 1);
return statearr_11487;
});
var state_machine__6714__auto____1 = (function (state_11475){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11475);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11488){if((e11488 instanceof Object))
{var ex__6717__auto__ = e11488;var statearr_11489_11496 = state_11475;(statearr_11489_11496[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11475);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11497 = state_11475;
state_11475 = G__11497;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11475){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11490 = f__6729__auto__.call(null);(statearr_11490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11556){var state_val_11557 = (state_11556[1]);if((state_val_11557 === 5))
{var inst_11545 = (state_11556[7]);var inst_11551 = cmd.core.handle_io_error.call(null,inst_11545);var state_11556__$1 = state_11556;var statearr_11558_11572 = state_11556__$1;(statearr_11558_11572[2] = inst_11551);
(statearr_11558_11572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11557 === 4))
{var inst_11545 = (state_11556[7]);var inst_11546 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_11545);var inst_11547 = cmd.core.load_gists.call(null);var inst_11548 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_11549 = cmd.core.say.call(null,inst_11548);var state_11556__$1 = (function (){var statearr_11559 = state_11556;(statearr_11559[8] = inst_11546);
(statearr_11559[9] = inst_11547);
return statearr_11559;
})();var statearr_11560_11573 = state_11556__$1;(statearr_11560_11573[2] = inst_11549);
(statearr_11560_11573[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11557 === 3))
{var inst_11554 = (state_11556[2]);var state_11556__$1 = state_11556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11556__$1,inst_11554);
} else
{if((state_val_11557 === 2))
{var inst_11542 = (state_11556[2]);var inst_11543 = cljs.core.nth.call(null,inst_11542,0,null);var inst_11544 = cljs.core.nth.call(null,inst_11542,1,null);var inst_11545 = cmd.utils.raw__GT_clj.call(null,inst_11544);var state_11556__$1 = (function (){var statearr_11561 = state_11556;(statearr_11561[7] = inst_11545);
return statearr_11561;
})();var G__11562_11574 = inst_11543;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11562_11574))
{var statearr_11563_11575 = state_11556__$1;(statearr_11563_11575[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11562_11574))
{var statearr_11564_11576 = state_11556__$1;(statearr_11564_11576[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11543)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11557 === 1))
{var inst_11536 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_11537 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11538 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11539 = cmd.core.auth_param_strict.call(null,inst_11537,inst_11538);var inst_11540 = cmd.lib.PATCH.call(null,inst_11536,new_content,inst_11539);var state_11556__$1 = state_11556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11556__$1,2,inst_11540);
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
var state_machine__6714__auto____0 = (function (){var statearr_11568 = [null,null,null,null,null,null,null,null,null,null];(statearr_11568[0] = state_machine__6714__auto__);
(statearr_11568[1] = 1);
return statearr_11568;
});
var state_machine__6714__auto____1 = (function (state_11556){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11556);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11569){if((e11569 instanceof Object))
{var ex__6717__auto__ = e11569;var statearr_11570_11577 = state_11556;(statearr_11570_11577[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11578 = state_11556;
state_11556 = G__11578;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11556){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11571 = f__6729__auto__.call(null);(statearr_11571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11639){var state_val_11640 = (state_11639[1]);if((state_val_11640 === 5))
{var inst_11626 = (state_11639[7]);var inst_11634 = cmd.core.handle_io_error.call(null,inst_11626);var state_11639__$1 = state_11639;var statearr_11641_11655 = state_11639__$1;(statearr_11641_11655[2] = inst_11634);
(statearr_11641_11655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11640 === 4))
{var inst_11626 = (state_11639[7]);var inst_11627 = inst_11626.call(null,"id");var inst_11628 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_11629 = cmd.core.load_gists.call(null);var inst_11630 = cmd.core.load_gist.call(null,inst_11627);var inst_11631 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_11627)].join('');var inst_11632 = cmd.core.say.call(null,inst_11631);var state_11639__$1 = (function (){var statearr_11642 = state_11639;(statearr_11642[8] = inst_11630);
(statearr_11642[9] = inst_11628);
(statearr_11642[10] = inst_11629);
return statearr_11642;
})();var statearr_11643_11656 = state_11639__$1;(statearr_11643_11656[2] = inst_11632);
(statearr_11643_11656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11640 === 3))
{var inst_11637 = (state_11639[2]);var state_11639__$1 = state_11639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11639__$1,inst_11637);
} else
{if((state_val_11640 === 2))
{var inst_11623 = (state_11639[2]);var inst_11624 = cljs.core.nth.call(null,inst_11623,0,null);var inst_11625 = cljs.core.nth.call(null,inst_11623,1,null);var inst_11626 = cmd.utils.raw__GT_clj.call(null,inst_11625);var state_11639__$1 = (function (){var statearr_11644 = state_11639;(statearr_11644[7] = inst_11626);
return statearr_11644;
})();var G__11645_11657 = inst_11624;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11645_11657))
{var statearr_11646_11658 = state_11639__$1;(statearr_11646_11658[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11645_11657))
{var statearr_11647_11659 = state_11639__$1;(statearr_11647_11659[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11624)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11640 === 1))
{var inst_11618 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_11619 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_11620 = cmd.core.auth_param_strict.call(null,inst_11618,inst_11619);var inst_11621 = cmd.lib.POST.call(null,"/gists",new_content,inst_11620);var state_11639__$1 = state_11639;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11639__$1,2,inst_11621);
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
var state_machine__6714__auto____0 = (function (){var statearr_11651 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11651[0] = state_machine__6714__auto__);
(statearr_11651[1] = 1);
return statearr_11651;
});
var state_machine__6714__auto____1 = (function (state_11639){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11639);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11652){if((e11652 instanceof Object))
{var ex__6717__auto__ = e11652;var statearr_11653_11660 = state_11639;(statearr_11653_11660[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11639);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11661 = state_11639;
state_11639 = G__11661;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11639){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11654 = f__6729__auto__.call(null);(statearr_11654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11654;
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
return (function (state_11681){var state_val_11682 = (state_11681[1]);if((state_val_11682 === 2))
{var inst_11679 = (state_11681[2]);var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11681__$1,inst_11679);
} else
{if((state_val_11682 === 1))
{var inst_11676 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_11677 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11676,null));var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11681__$1,2,cmd.core.AppBus,inst_11677);
} else
{return null;
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11686 = [null,null,null,null,null,null,null];(statearr_11686[0] = state_machine__6714__auto__);
(statearr_11686[1] = 1);
return statearr_11686;
});
var state_machine__6714__auto____1 = (function (state_11681){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11687){if((e11687 instanceof Object))
{var ex__6717__auto__ = e11687;var statearr_11688_11690 = state_11681;(statearr_11688_11690[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11681);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11691 = state_11681;
state_11681 = G__11691;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11681){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11689 = f__6729__auto__.call(null);(statearr_11689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__6728__auto___11720 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto___11720,error_msg){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto___11720,error_msg){
return (function (state_11711){var state_val_11712 = (state_11711[1]);if((state_val_11712 === 2))
{var inst_11709 = (state_11711[2]);var state_11711__$1 = state_11711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11711__$1,inst_11709);
} else
{if((state_val_11712 === 1))
{var inst_11706 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_11707 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11706,null));var state_11711__$1 = state_11711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11711__$1,2,cmd.core.AppBus,inst_11707);
} else
{return null;
}
}
});})(c__6728__auto___11720,error_msg))
;return ((function (switch__6713__auto__,c__6728__auto___11720,error_msg){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11716 = [null,null,null,null,null,null,null];(statearr_11716[0] = state_machine__6714__auto__);
(statearr_11716[1] = 1);
return statearr_11716;
});
var state_machine__6714__auto____1 = (function (state_11711){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11711);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11717){if((e11717 instanceof Object))
{var ex__6717__auto__ = e11717;var statearr_11718_11721 = state_11711;(statearr_11718_11721[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11722 = state_11711;
state_11711 = G__11722;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11711){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto___11720,error_msg))
})();var state__6730__auto__ = (function (){var statearr_11719 = f__6729__auto__.call(null);(statearr_11719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto___11720);
return statearr_11719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto___11720,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11768){var state_val_11769 = (state_11768[1]);if((state_val_11769 === 5))
{var inst_11760 = (state_11768[7]);var inst_11763 = cmd.core.unauthorized.call(null,inst_11760);var state_11768__$1 = state_11768;var statearr_11770_11783 = state_11768__$1;(statearr_11770_11783[2] = inst_11763);
(statearr_11770_11783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11769 === 4))
{var inst_11761 = cmd.core.logged_in.call(null,username,auth_token);var state_11768__$1 = state_11768;var statearr_11771_11784 = state_11768__$1;(statearr_11771_11784[2] = inst_11761);
(statearr_11771_11784[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11769 === 3))
{var inst_11766 = (state_11768[2]);var state_11768__$1 = state_11768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11768__$1,inst_11766);
} else
{if((state_val_11769 === 2))
{var inst_11758 = (state_11768[2]);var inst_11759 = cljs.core.nth.call(null,inst_11758,0,null);var inst_11760 = cljs.core.nth.call(null,inst_11758,1,null);var state_11768__$1 = (function (){var statearr_11772 = state_11768;(statearr_11772[7] = inst_11760);
return statearr_11772;
})();var G__11773_11785 = inst_11759;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__11773_11785))
{var statearr_11774_11786 = state_11768__$1;(statearr_11774_11786[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__11773_11785))
{var statearr_11775_11787 = state_11768__$1;(statearr_11775_11787[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11759)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11769 === 1))
{var inst_11754 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_11755 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_11756 = cmd.lib.GET.call(null,inst_11754,inst_11755);var state_11768__$1 = state_11768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11768__$1,2,inst_11756);
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
var state_machine__6714__auto____0 = (function (){var statearr_11779 = [null,null,null,null,null,null,null,null];(statearr_11779[0] = state_machine__6714__auto__);
(statearr_11779[1] = 1);
return statearr_11779;
});
var state_machine__6714__auto____1 = (function (state_11768){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11780){if((e11780 instanceof Object))
{var ex__6717__auto__ = e11780;var statearr_11781_11788 = state_11768;(statearr_11781_11788[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11780;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11789 = state_11768;
state_11768 = G__11789;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11768){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11782 = f__6729__auto__.call(null);(statearr_11782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11782;
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
{if((1 === hash.indexOf("!")))
{return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gist-id","gist-id",1053270999),new cljs.core.Keyword(null,"panels","panels",4313328225)], null),cljs.core.subs.call(null,hash,2).split(";"));
} else
{return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gist-id","gist-id",1053270999),new cljs.core.Keyword(null,"panels","panels",4313328225)], null),cljs.core.subs.call(null,hash,1).split(";"));
}
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
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__11791 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__11791,0,null);var first_file = cljs.core.nth.call(null,vec__11791,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.core.get_pinned_gists = (function get_pinned_gists(state){return cljs.core.filter.call(null,(function (gist){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149).cljs$core$IFn$_invoke$arity$1(state),gist.call(null,"id"));
}),new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=core.js.map