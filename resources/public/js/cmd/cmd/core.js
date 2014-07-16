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
var c__5608__auto___9280 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___9280){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___9280){
return (function (state_9271){var state_val_9272 = (state_9271[1]);if((state_val_9272 === 2))
{var inst_9269 = (state_9271[2]);var state_9271__$1 = state_9271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9271__$1,inst_9269);
} else
{if((state_val_9272 === 1))
{var inst_9266 = [new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),msg];var inst_9267 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9266,null));var state_9271__$1 = state_9271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9271__$1,2,cmd.core.AppBus,inst_9267);
} else
{return null;
}
}
});})(c__5608__auto___9280))
;return ((function (switch__5593__auto__,c__5608__auto___9280){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9276 = [null,null,null,null,null,null,null];(statearr_9276[0] = state_machine__5594__auto__);
(statearr_9276[1] = 1);
return statearr_9276;
});
var state_machine__5594__auto____1 = (function (state_9271){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9271);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9277){if((e9277 instanceof Object))
{var ex__5597__auto__ = e9277;var statearr_9278_9281 = state_9271;(statearr_9278_9281[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9282 = state_9271;
state_9271 = G__9282;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9271){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___9280))
})();var state__5610__auto__ = (function (){var statearr_9279 = f__5609__auto__.call(null);(statearr_9279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___9280);
return statearr_9279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___9280))
);
return console.log(msg);
});
cljs.core.add_watch.call(null,cmd.lib.active_requests,null,(function (key,ref,old,new$){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),new$);
}));
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,data,worker,ch){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,data,worker,ch){
return (function (state_9305){var state_val_9306 = (state_9305[1]);if((state_val_9306 === 2))
{var inst_9302 = (state_9305[2]);var inst_9303 = cljs.core.async.close_BANG_.call(null,ch);var state_9305__$1 = (function (){var statearr_9307 = state_9305;(statearr_9307[7] = inst_9302);
return statearr_9307;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9305__$1,inst_9303);
} else
{if((state_val_9306 === 1))
{var inst_9299 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_9300 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9299,null));var state_9305__$1 = state_9305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9305__$1,2,ch,inst_9300);
} else
{return null;
}
}
});})(c__5608__auto__,data,worker,ch))
;return ((function (switch__5593__auto__,c__5608__auto__,data,worker,ch){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9311 = [null,null,null,null,null,null,null,null];(statearr_9311[0] = state_machine__5594__auto__);
(statearr_9311[1] = 1);
return statearr_9311;
});
var state_machine__5594__auto____1 = (function (state_9305){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9305);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9312){if((e9312 instanceof Object))
{var ex__5597__auto__ = e9312;var statearr_9313_9315 = state_9305;(statearr_9313_9315[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9305);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9316 = state_9305;
state_9305 = G__9316;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9305){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,data,worker,ch))
})();var state__5610__auto__ = (function (){var statearr_9314 = f__5609__auto__.call(null);(statearr_9314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9314;
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
return (function (state_9358){var state_val_9359 = (state_9358[1]);if((state_val_9359 === 5))
{var inst_9353 = cb.call(null,"<Error>");var state_9358__$1 = state_9358;var statearr_9360_9373 = state_9358__$1;(statearr_9360_9373[2] = inst_9353);
(statearr_9360_9373[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9359 === 4))
{var inst_9350 = (state_9358[7]);var inst_9351 = cb.call(null,inst_9350);var state_9358__$1 = state_9358;var statearr_9361_9374 = state_9358__$1;(statearr_9361_9374[2] = inst_9351);
(statearr_9361_9374[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9359 === 3))
{var inst_9356 = (state_9358[2]);var state_9358__$1 = state_9358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9358__$1,inst_9356);
} else
{if((state_val_9359 === 2))
{var inst_9348 = (state_9358[2]);var inst_9349 = cljs.core.nth.call(null,inst_9348,0,null);var inst_9350 = cljs.core.nth.call(null,inst_9348,1,null);var state_9358__$1 = (function (){var statearr_9362 = state_9358;(statearr_9362[7] = inst_9350);
return statearr_9362;
})();var G__9363_9375 = inst_9349;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9363_9375))
{var statearr_9364_9376 = state_9358__$1;(statearr_9364_9376[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9363_9375))
{var statearr_9365_9377 = state_9358__$1;(statearr_9365_9377[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9349)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9359 === 1))
{var inst_9346 = cmd.core.wmd__GT_html.call(null,md);var state_9358__$1 = state_9358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9358__$1,2,inst_9346);
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
var state_machine__5594__auto____0 = (function (){var statearr_9369 = [null,null,null,null,null,null,null,null];(statearr_9369[0] = state_machine__5594__auto__);
(statearr_9369[1] = 1);
return statearr_9369;
});
var state_machine__5594__auto____1 = (function (state_9358){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9358);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9370){if((e9370 instanceof Object))
{var ex__5597__auto__ = e9370;var statearr_9371_9378 = state_9358;(statearr_9371_9378[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9358);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9379 = state_9358;
state_9358 = G__9379;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9358){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9372 = f__5609__auto__.call(null);(statearr_9372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.make_basic_auth_token = (function make_basic_auth_token(username,password){return btoa([cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join(''));
});
cmd.core.auth_param_strict = (function auth_param_strict(username,auth_token){var obj9383 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(cmd.core.make_basic_auth_token.call(null,username,auth_token))].join(''),"Content-Type":"application/json"};return obj9383;
});
cmd.core.auth_param_anon = (function auth_param_anon(){var obj9387 = {"Content-Type":"application/json"};return obj9387;
});
cmd.core.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.core.auth_param_anon.call(null);
} else
{return cmd.core.auth_param_strict.call(null,username,auth_token);
}
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__9388_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__9388_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.core.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9451){var state_val_9452 = (state_9451[1]);if((state_val_9452 === 6))
{var inst_9438 = (state_9451[7]);var inst_9446 = cmd.core.handle_io_error.call(null,inst_9438);var state_9451__$1 = state_9451;var statearr_9453_9467 = state_9451__$1;(statearr_9453_9467[2] = inst_9446);
(statearr_9453_9467[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 5))
{var inst_9439 = (state_9451[8]);var inst_9443 = (state_9451[2]);var inst_9444 = inst_9439.call(null,inst_9443);var state_9451__$1 = state_9451;var statearr_9454_9468 = state_9451__$1;(statearr_9454_9468[2] = inst_9444);
(statearr_9454_9468[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 4))
{var inst_9438 = (state_9451[7]);var inst_9439 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_9438);var inst_9440 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_9441 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9440,null));var state_9451__$1 = (function (){var statearr_9455 = state_9451;(statearr_9455[8] = inst_9439);
return statearr_9455;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9451__$1,5,cmd.core.AppBus,inst_9441);
} else
{if((state_val_9452 === 3))
{var inst_9449 = (state_9451[2]);var state_9451__$1 = state_9451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9451__$1,inst_9449);
} else
{if((state_val_9452 === 2))
{var inst_9435 = (state_9451[2]);var inst_9436 = cljs.core.nth.call(null,inst_9435,0,null);var inst_9437 = cljs.core.nth.call(null,inst_9435,1,null);var inst_9438 = cmd.utils.raw__GT_clj.call(null,inst_9437);var state_9451__$1 = (function (){var statearr_9456 = state_9451;(statearr_9456[7] = inst_9438);
return statearr_9456;
})();var G__9457_9469 = inst_9436;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9457_9469))
{var statearr_9458_9470 = state_9451__$1;(statearr_9458_9470[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9457_9469))
{var statearr_9459_9471 = state_9451__$1;(statearr_9459_9471[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9436)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 1))
{var inst_9429 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9430 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9431 = [cljs.core.str("/users/"),cljs.core.str(inst_9429),cljs.core.str("/gists")].join('');var inst_9432 = cmd.core.auth_param_fallback.call(null,inst_9429,inst_9430);var inst_9433 = cmd.lib.GET.call(null,inst_9431,inst_9432);var state_9451__$1 = state_9451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9451__$1,2,inst_9433);
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
var state_machine__5594__auto____0 = (function (){var statearr_9463 = [null,null,null,null,null,null,null,null,null];(statearr_9463[0] = state_machine__5594__auto__);
(statearr_9463[1] = 1);
return statearr_9463;
});
var state_machine__5594__auto____1 = (function (state_9451){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9451);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9464){if((e9464 instanceof Object))
{var ex__5597__auto__ = e9464;var statearr_9465_9472 = state_9451;(statearr_9465_9472[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9473 = state_9451;
state_9451 = G__9473;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9451){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9466 = f__5609__auto__.call(null);(statearr_9466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.update_latest_opened = (function update_latest_opened(gist_id){var latest_opened = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289));var clean_opened = cljs.core.filter.call(null,((function (latest_opened){
return (function (p1__9474_SHARP_){return !(cljs.core._EQ_.call(null,p1__9474_SHARP_,gist_id));
});})(latest_opened))
,latest_opened);var new_latest_opened = cljs.core.take.call(null,20,cljs.core.conj.call(null,clean_opened,gist_id));return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289),new_latest_opened);
});
cmd.core.get_motd = (function get_motd(gist_id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9549){var state_val_9550 = (state_9549[1]);if((state_val_9550 === 6))
{var inst_9542 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.defs.local_motd);var inst_9543 = cmd.core.say.call(null,"Sorry, can't load motd");var inst_9544 = inst_9542.call(null,inst_9543);var state_9549__$1 = state_9549;var statearr_9551_9565 = state_9549__$1;(statearr_9551_9565[2] = inst_9544);
(statearr_9551_9565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9550 === 5))
{var inst_9535 = (state_9549[7]);var inst_9539 = (state_9549[2]);var inst_9540 = inst_9535.call(null,inst_9539);var state_9549__$1 = state_9549;var statearr_9552_9566 = state_9549__$1;(statearr_9552_9566[2] = inst_9540);
(statearr_9552_9566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9550 === 4))
{var inst_9527 = (state_9549[8]);var inst_9529 = cmd.utils.raw__GT_clj.call(null,inst_9527);var inst_9530 = inst_9529.call(null,"files");var inst_9531 = cljs.core.first.call(null,inst_9530);var inst_9532 = cljs.core.nth.call(null,inst_9531,0,null);var inst_9533 = cljs.core.nth.call(null,inst_9531,1,null);var inst_9534 = inst_9533.call(null,"content");var inst_9535 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_9534);var inst_9536 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_9534];var inst_9537 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9536,null));var state_9549__$1 = (function (){var statearr_9553 = state_9549;(statearr_9553[9] = inst_9532);
(statearr_9553[7] = inst_9535);
return statearr_9553;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9549__$1,5,cmd.core.AppBus,inst_9537);
} else
{if((state_val_9550 === 3))
{var inst_9547 = (state_9549[2]);var state_9549__$1 = state_9549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9549__$1,inst_9547);
} else
{if((state_val_9550 === 2))
{var inst_9525 = (state_9549[2]);var inst_9526 = cljs.core.nth.call(null,inst_9525,0,null);var inst_9527 = cljs.core.nth.call(null,inst_9525,1,null);var state_9549__$1 = (function (){var statearr_9554 = state_9549;(statearr_9554[8] = inst_9527);
return statearr_9554;
})();var G__9555_9567 = inst_9526;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9555_9567))
{var statearr_9556_9568 = state_9549__$1;(statearr_9556_9568[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9555_9567))
{var statearr_9557_9569 = state_9549__$1;(statearr_9557_9569[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9526)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9550 === 1))
{var inst_9521 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9522 = cmd.core.auth_param_anon.call(null);var inst_9523 = cmd.lib.GET.call(null,inst_9521,inst_9522);var state_9549__$1 = state_9549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9549__$1,2,inst_9523);
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
var state_machine__5594__auto____0 = (function (){var statearr_9561 = [null,null,null,null,null,null,null,null,null,null];(statearr_9561[0] = state_machine__5594__auto__);
(statearr_9561[1] = 1);
return statearr_9561;
});
var state_machine__5594__auto____1 = (function (state_9549){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9549);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9562){if((e9562 instanceof Object))
{var ex__5597__auto__ = e9562;var statearr_9563_9570 = state_9549;(statearr_9563_9570[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9571 = state_9549;
state_9549 = G__9571;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9549){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9564 = f__5609__auto__.call(null);(statearr_9564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9652){var state_val_9653 = (state_9652[1]);if((state_val_9653 === 6))
{var inst_9629 = (state_9652[7]);var inst_9646 = cmd.utils.raw__GT_clj.call(null,inst_9629);var inst_9647 = cmd.core.handle_io_error.call(null,inst_9646);var state_9652__$1 = state_9652;var statearr_9654_9668 = state_9652__$1;(statearr_9654_9668[2] = inst_9647);
(statearr_9654_9668[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 5))
{var inst_9644 = (state_9652[2]);var state_9652__$1 = state_9652;var statearr_9655_9669 = state_9652__$1;(statearr_9655_9669[2] = inst_9644);
(statearr_9655_9669[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 4))
{var inst_9629 = (state_9652[7]);var inst_9631 = cmd.utils.raw__GT_clj.call(null,inst_9629);var inst_9632 = inst_9631.call(null,"files");var inst_9633 = cljs.core.first.call(null,inst_9632);var inst_9634 = cljs.core.nth.call(null,inst_9633,0,null);var inst_9635 = cljs.core.nth.call(null,inst_9633,1,null);var inst_9636 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9634);var inst_9637 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9631);var inst_9638 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_9639 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_9640 = cmd.core.update_latest_opened.call(null,id);var inst_9641 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9642 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9641,null));var state_9652__$1 = (function (){var statearr_9656 = state_9652;(statearr_9656[8] = inst_9640);
(statearr_9656[9] = inst_9637);
(statearr_9656[10] = inst_9635);
(statearr_9656[11] = inst_9636);
(statearr_9656[12] = inst_9638);
(statearr_9656[13] = inst_9639);
return statearr_9656;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9652__$1,5,cmd.core.AppBus,inst_9642);
} else
{if((state_val_9653 === 3))
{var inst_9650 = (state_9652[2]);var state_9652__$1 = state_9652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9652__$1,inst_9650);
} else
{if((state_val_9653 === 2))
{var inst_9627 = (state_9652[2]);var inst_9628 = cljs.core.nth.call(null,inst_9627,0,null);var inst_9629 = cljs.core.nth.call(null,inst_9627,1,null);var state_9652__$1 = (function (){var statearr_9657 = state_9652;(statearr_9657[7] = inst_9629);
return statearr_9657;
})();var G__9658_9670 = inst_9628;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9658_9670))
{var statearr_9659_9671 = state_9652__$1;(statearr_9659_9671[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9658_9670))
{var statearr_9660_9672 = state_9652__$1;(statearr_9660_9672[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9628)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 1))
{var inst_9621 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9622 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9623 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9624 = cmd.core.auth_param_fallback.call(null,inst_9622,inst_9623);var inst_9625 = cmd.lib.GET.call(null,inst_9621,inst_9624);var state_9652__$1 = state_9652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9652__$1,2,inst_9625);
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
var state_machine__5594__auto____0 = (function (){var statearr_9664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9664[0] = state_machine__5594__auto__);
(statearr_9664[1] = 1);
return statearr_9664;
});
var state_machine__5594__auto____1 = (function (state_9652){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9652);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9665){if((e9665 instanceof Object))
{var ex__5597__auto__ = e9665;var statearr_9666_9673 = state_9652;(statearr_9666_9673[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9674 = state_9652;
state_9652 = G__9674;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9652){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9667 = f__5609__auto__.call(null);(statearr_9667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9667;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9733){var state_val_9734 = (state_9733[1]);if((state_val_9734 === 5))
{var inst_9722 = (state_9733[7]);var inst_9728 = cmd.core.handle_io_error.call(null,inst_9722);var state_9733__$1 = state_9733;var statearr_9735_9749 = state_9733__$1;(statearr_9735_9749[2] = inst_9728);
(statearr_9735_9749[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 4))
{var inst_9722 = (state_9733[7]);var inst_9723 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9722);var inst_9724 = cmd.core.load_gists.call(null);var inst_9725 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_9726 = cmd.core.say.call(null,inst_9725);var state_9733__$1 = (function (){var statearr_9736 = state_9733;(statearr_9736[8] = inst_9724);
(statearr_9736[9] = inst_9723);
return statearr_9736;
})();var statearr_9737_9750 = state_9733__$1;(statearr_9737_9750[2] = inst_9726);
(statearr_9737_9750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 3))
{var inst_9731 = (state_9733[2]);var state_9733__$1 = state_9733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9733__$1,inst_9731);
} else
{if((state_val_9734 === 2))
{var inst_9719 = (state_9733[2]);var inst_9720 = cljs.core.nth.call(null,inst_9719,0,null);var inst_9721 = cljs.core.nth.call(null,inst_9719,1,null);var inst_9722 = cmd.utils.raw__GT_clj.call(null,inst_9721);var state_9733__$1 = (function (){var statearr_9738 = state_9733;(statearr_9738[7] = inst_9722);
return statearr_9738;
})();var G__9739_9751 = inst_9720;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9739_9751))
{var statearr_9740_9752 = state_9733__$1;(statearr_9740_9752[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9739_9751))
{var statearr_9741_9753 = state_9733__$1;(statearr_9741_9753[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9720)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 1))
{var inst_9713 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9714 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9715 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9716 = cmd.core.auth_param_strict.call(null,inst_9714,inst_9715);var inst_9717 = cmd.lib.PATCH.call(null,inst_9713,new_content,inst_9716);var state_9733__$1 = state_9733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9733__$1,2,inst_9717);
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
var state_machine__5594__auto____0 = (function (){var statearr_9745 = [null,null,null,null,null,null,null,null,null,null];(statearr_9745[0] = state_machine__5594__auto__);
(statearr_9745[1] = 1);
return statearr_9745;
});
var state_machine__5594__auto____1 = (function (state_9733){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9733);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9746){if((e9746 instanceof Object))
{var ex__5597__auto__ = e9746;var statearr_9747_9754 = state_9733;(statearr_9747_9754[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9755 = state_9733;
state_9733 = G__9755;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9733){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9748 = f__5609__auto__.call(null);(statearr_9748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9748;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9816){var state_val_9817 = (state_9816[1]);if((state_val_9817 === 5))
{var inst_9803 = (state_9816[7]);var inst_9811 = cmd.core.handle_io_error.call(null,inst_9803);var state_9816__$1 = state_9816;var statearr_9818_9832 = state_9816__$1;(statearr_9818_9832[2] = inst_9811);
(statearr_9818_9832[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9817 === 4))
{var inst_9803 = (state_9816[7]);var inst_9804 = inst_9803.call(null,"id");var inst_9805 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_9806 = cmd.core.load_gists.call(null);var inst_9807 = cmd.core.load_gist.call(null,inst_9804);var inst_9808 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_9804)].join('');var inst_9809 = cmd.core.say.call(null,inst_9808);var state_9816__$1 = (function (){var statearr_9819 = state_9816;(statearr_9819[8] = inst_9807);
(statearr_9819[9] = inst_9805);
(statearr_9819[10] = inst_9806);
return statearr_9819;
})();var statearr_9820_9833 = state_9816__$1;(statearr_9820_9833[2] = inst_9809);
(statearr_9820_9833[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9817 === 3))
{var inst_9814 = (state_9816[2]);var state_9816__$1 = state_9816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9816__$1,inst_9814);
} else
{if((state_val_9817 === 2))
{var inst_9800 = (state_9816[2]);var inst_9801 = cljs.core.nth.call(null,inst_9800,0,null);var inst_9802 = cljs.core.nth.call(null,inst_9800,1,null);var inst_9803 = cmd.utils.raw__GT_clj.call(null,inst_9802);var state_9816__$1 = (function (){var statearr_9821 = state_9816;(statearr_9821[7] = inst_9803);
return statearr_9821;
})();var G__9822_9834 = inst_9801;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9822_9834))
{var statearr_9823_9835 = state_9816__$1;(statearr_9823_9835[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9822_9834))
{var statearr_9824_9836 = state_9816__$1;(statearr_9824_9836[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9801)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9817 === 1))
{var inst_9795 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9796 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9797 = cmd.core.auth_param_strict.call(null,inst_9795,inst_9796);var inst_9798 = cmd.lib.POST.call(null,"/gists",new_content,inst_9797);var state_9816__$1 = state_9816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9816__$1,2,inst_9798);
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
var state_machine__5594__auto____0 = (function (){var statearr_9828 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9828[0] = state_machine__5594__auto__);
(statearr_9828[1] = 1);
return statearr_9828;
});
var state_machine__5594__auto____1 = (function (state_9816){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9816);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9829){if((e9829 instanceof Object))
{var ex__5597__auto__ = e9829;var statearr_9830_9837 = state_9816;(statearr_9830_9837[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9838 = state_9816;
state_9816 = G__9838;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9816){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9831 = f__5609__auto__.call(null);(statearr_9831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.logged_in = (function logged_in(username,auth_token){cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792),username);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430),auth_token);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),true);
cmd.core.set_prefs.call(null,"username",username);
cmd.core.set_prefs.call(null,"auth-token",auth_token);
var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9858){var state_val_9859 = (state_9858[1]);if((state_val_9859 === 2))
{var inst_9856 = (state_9858[2]);var state_9858__$1 = state_9858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9858__$1,inst_9856);
} else
{if((state_val_9859 === 1))
{var inst_9853 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9854 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9853,null));var state_9858__$1 = state_9858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9858__$1,2,cmd.core.AppBus,inst_9854);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9863 = [null,null,null,null,null,null,null];(statearr_9863[0] = state_machine__5594__auto__);
(statearr_9863[1] = 1);
return statearr_9863;
});
var state_machine__5594__auto____1 = (function (state_9858){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9858);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9864){if((e9864 instanceof Object))
{var ex__5597__auto__ = e9864;var statearr_9865_9867 = state_9858;(statearr_9865_9867[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9858);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9868 = state_9858;
state_9858 = G__9868;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9858){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9866 = f__5609__auto__.call(null);(statearr_9866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__5608__auto___9897 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___9897,error_msg){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___9897,error_msg){
return (function (state_9888){var state_val_9889 = (state_9888[1]);if((state_val_9889 === 2))
{var inst_9886 = (state_9888[2]);var state_9888__$1 = state_9888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9888__$1,inst_9886);
} else
{if((state_val_9889 === 1))
{var inst_9883 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_9884 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9883,null));var state_9888__$1 = state_9888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9888__$1,2,cmd.core.AppBus,inst_9884);
} else
{return null;
}
}
});})(c__5608__auto___9897,error_msg))
;return ((function (switch__5593__auto__,c__5608__auto___9897,error_msg){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9893 = [null,null,null,null,null,null,null];(statearr_9893[0] = state_machine__5594__auto__);
(statearr_9893[1] = 1);
return statearr_9893;
});
var state_machine__5594__auto____1 = (function (state_9888){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9888);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9894){if((e9894 instanceof Object))
{var ex__5597__auto__ = e9894;var statearr_9895_9898 = state_9888;(statearr_9895_9898[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9888);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9899 = state_9888;
state_9888 = G__9899;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9888){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___9897,error_msg))
})();var state__5610__auto__ = (function (){var statearr_9896 = f__5609__auto__.call(null);(statearr_9896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___9897);
return statearr_9896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___9897,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9945){var state_val_9946 = (state_9945[1]);if((state_val_9946 === 5))
{var inst_9937 = (state_9945[7]);var inst_9940 = cmd.core.unauthorized.call(null,inst_9937);var state_9945__$1 = state_9945;var statearr_9947_9960 = state_9945__$1;(statearr_9947_9960[2] = inst_9940);
(statearr_9947_9960[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9946 === 4))
{var inst_9938 = cmd.core.logged_in.call(null,username,auth_token);var state_9945__$1 = state_9945;var statearr_9948_9961 = state_9945__$1;(statearr_9948_9961[2] = inst_9938);
(statearr_9948_9961[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9946 === 3))
{var inst_9943 = (state_9945[2]);var state_9945__$1 = state_9945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9945__$1,inst_9943);
} else
{if((state_val_9946 === 2))
{var inst_9935 = (state_9945[2]);var inst_9936 = cljs.core.nth.call(null,inst_9935,0,null);var inst_9937 = cljs.core.nth.call(null,inst_9935,1,null);var state_9945__$1 = (function (){var statearr_9949 = state_9945;(statearr_9949[7] = inst_9937);
return statearr_9949;
})();var G__9950_9962 = inst_9936;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9950_9962))
{var statearr_9951_9963 = state_9945__$1;(statearr_9951_9963[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9950_9962))
{var statearr_9952_9964 = state_9945__$1;(statearr_9952_9964[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9936)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9946 === 1))
{var inst_9931 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9932 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_9933 = cmd.lib.GET.call(null,inst_9931,inst_9932);var state_9945__$1 = state_9945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9945__$1,2,inst_9933);
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
var state_machine__5594__auto____0 = (function (){var statearr_9956 = [null,null,null,null,null,null,null,null];(statearr_9956[0] = state_machine__5594__auto__);
(statearr_9956[1] = 1);
return statearr_9956;
});
var state_machine__5594__auto____1 = (function (state_9945){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9945);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9957){if((e9957 instanceof Object))
{var ex__5597__auto__ = e9957;var statearr_9958_9965 = state_9945;(statearr_9958_9965[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9957;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9966 = state_9945;
state_9945 = G__9966;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9945){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9959 = f__5609__auto__.call(null);(statearr_9959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9959;
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
cmd.core.set_location_hash = (function set_location_hash(hash_hash){var gist_id = (function (){var or__3451__auto__ = hash_hash.call(null,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999));if(cljs.core.truth_(or__3451__auto__))
{return or__3451__auto__;
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
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9968 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9968,0,null);var first_file = cljs.core.nth.call(null,vec__9968,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.core.get_pinned_gists = (function get_pinned_gists(state){return cljs.core.filter.call(null,(function (gist){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149).cljs$core$IFn$_invoke$arity$1(state),gist.call(null,"id"));
}),new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=core.js.map