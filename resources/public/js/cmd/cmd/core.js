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
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var text_mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"text-mode","text-mode",4224925109));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,text_mode,ch){
return (function (e){var data = e.data;var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,data,worker,text_mode,ch){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,data,worker,text_mode,ch){
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
});})(c__5608__auto__,data,worker,text_mode,ch))
;return ((function (switch__5593__auto__,c__5608__auto__,data,worker,text_mode,ch){
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
;})(switch__5593__auto__,c__5608__auto__,data,worker,text_mode,ch))
})();var state__5610__auto__ = (function (){var statearr_9314 = f__5609__auto__.call(null);(statearr_9314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__,data,worker,text_mode,ch))
);
return c__5608__auto__;
});})(worker,text_mode,ch))
,false);
worker.postMessage({"data": text, "mode": text_mode});
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
cmd.core.guess_file_mode = (function guess_file_mode(filename){var ext = cljs.core.re_find.call(null,/\.[A-Za-z0-9]+?$/,filename);var G__9573 = ext;if(cljs.core._EQ_.call(null,null,G__9573))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ext.toLowerCase();
} else
{return null;
}
}
});
cmd.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9658){var state_val_9659 = (state_9658[1]);if((state_val_9659 === 6))
{var inst_9633 = (state_9658[7]);var inst_9652 = cmd.utils.raw__GT_clj.call(null,inst_9633);var inst_9653 = cmd.core.handle_io_error.call(null,inst_9652);var state_9658__$1 = state_9658;var statearr_9660_9674 = state_9658__$1;(statearr_9660_9674[2] = inst_9653);
(statearr_9660_9674[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9659 === 5))
{var inst_9650 = (state_9658[2]);var state_9658__$1 = state_9658;var statearr_9661_9675 = state_9658__$1;(statearr_9661_9675[2] = inst_9650);
(statearr_9661_9675[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9659 === 4))
{var inst_9633 = (state_9658[7]);var inst_9635 = cmd.utils.raw__GT_clj.call(null,inst_9633);var inst_9636 = inst_9635.call(null,"files");var inst_9637 = cljs.core.first.call(null,inst_9636);var inst_9638 = cljs.core.nth.call(null,inst_9637,0,null);var inst_9639 = cljs.core.nth.call(null,inst_9637,1,null);var inst_9640 = cmd.core.guess_file_mode.call(null,inst_9638);var inst_9641 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9638);var inst_9642 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"text-mode","text-mode",4224925109),inst_9640);var inst_9643 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9635);var inst_9644 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_9645 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_9646 = cmd.core.update_latest_opened.call(null,id);var inst_9647 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9648 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9647,null));var state_9658__$1 = (function (){var statearr_9662 = state_9658;(statearr_9662[8] = inst_9644);
(statearr_9662[9] = inst_9641);
(statearr_9662[10] = inst_9643);
(statearr_9662[11] = inst_9645);
(statearr_9662[12] = inst_9642);
(statearr_9662[13] = inst_9639);
(statearr_9662[14] = inst_9646);
return statearr_9662;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9658__$1,5,cmd.core.AppBus,inst_9648);
} else
{if((state_val_9659 === 3))
{var inst_9656 = (state_9658[2]);var state_9658__$1 = state_9658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9658__$1,inst_9656);
} else
{if((state_val_9659 === 2))
{var inst_9631 = (state_9658[2]);var inst_9632 = cljs.core.nth.call(null,inst_9631,0,null);var inst_9633 = cljs.core.nth.call(null,inst_9631,1,null);var state_9658__$1 = (function (){var statearr_9663 = state_9658;(statearr_9663[7] = inst_9633);
return statearr_9663;
})();var G__9664_9676 = inst_9632;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9664_9676))
{var statearr_9665_9677 = state_9658__$1;(statearr_9665_9677[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9664_9676))
{var statearr_9666_9678 = state_9658__$1;(statearr_9666_9678[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9632)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9659 === 1))
{var inst_9625 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9626 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9627 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9628 = cmd.core.auth_param_fallback.call(null,inst_9626,inst_9627);var inst_9629 = cmd.lib.GET.call(null,inst_9625,inst_9628);var state_9658__$1 = state_9658;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9658__$1,2,inst_9629);
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
var state_machine__5594__auto____0 = (function (){var statearr_9670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9670[0] = state_machine__5594__auto__);
(statearr_9670[1] = 1);
return statearr_9670;
});
var state_machine__5594__auto____1 = (function (state_9658){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9658);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9671){if((e9671 instanceof Object))
{var ex__5597__auto__ = e9671;var statearr_9672_9679 = state_9658;(statearr_9672_9679[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9658);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9680 = state_9658;
state_9658 = G__9680;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9658){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9673 = f__5609__auto__.call(null);(statearr_9673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9739){var state_val_9740 = (state_9739[1]);if((state_val_9740 === 5))
{var inst_9728 = (state_9739[7]);var inst_9734 = cmd.core.handle_io_error.call(null,inst_9728);var state_9739__$1 = state_9739;var statearr_9741_9755 = state_9739__$1;(statearr_9741_9755[2] = inst_9734);
(statearr_9741_9755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9740 === 4))
{var inst_9728 = (state_9739[7]);var inst_9729 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9728);var inst_9730 = cmd.core.load_gists.call(null);var inst_9731 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_9732 = cmd.core.say.call(null,inst_9731);var state_9739__$1 = (function (){var statearr_9742 = state_9739;(statearr_9742[8] = inst_9730);
(statearr_9742[9] = inst_9729);
return statearr_9742;
})();var statearr_9743_9756 = state_9739__$1;(statearr_9743_9756[2] = inst_9732);
(statearr_9743_9756[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9740 === 3))
{var inst_9737 = (state_9739[2]);var state_9739__$1 = state_9739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9739__$1,inst_9737);
} else
{if((state_val_9740 === 2))
{var inst_9725 = (state_9739[2]);var inst_9726 = cljs.core.nth.call(null,inst_9725,0,null);var inst_9727 = cljs.core.nth.call(null,inst_9725,1,null);var inst_9728 = cmd.utils.raw__GT_clj.call(null,inst_9727);var state_9739__$1 = (function (){var statearr_9744 = state_9739;(statearr_9744[7] = inst_9728);
return statearr_9744;
})();var G__9745_9757 = inst_9726;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9745_9757))
{var statearr_9746_9758 = state_9739__$1;(statearr_9746_9758[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9745_9757))
{var statearr_9747_9759 = state_9739__$1;(statearr_9747_9759[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9726)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9740 === 1))
{var inst_9719 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9720 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9721 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9722 = cmd.core.auth_param_strict.call(null,inst_9720,inst_9721);var inst_9723 = cmd.lib.PATCH.call(null,inst_9719,new_content,inst_9722);var state_9739__$1 = state_9739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9739__$1,2,inst_9723);
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
var state_machine__5594__auto____0 = (function (){var statearr_9751 = [null,null,null,null,null,null,null,null,null,null];(statearr_9751[0] = state_machine__5594__auto__);
(statearr_9751[1] = 1);
return statearr_9751;
});
var state_machine__5594__auto____1 = (function (state_9739){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9739);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9752){if((e9752 instanceof Object))
{var ex__5597__auto__ = e9752;var statearr_9753_9760 = state_9739;(statearr_9753_9760[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9739);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9761 = state_9739;
state_9739 = G__9761;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9739){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9754 = f__5609__auto__.call(null);(statearr_9754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9822){var state_val_9823 = (state_9822[1]);if((state_val_9823 === 5))
{var inst_9809 = (state_9822[7]);var inst_9817 = cmd.core.handle_io_error.call(null,inst_9809);var state_9822__$1 = state_9822;var statearr_9824_9838 = state_9822__$1;(statearr_9824_9838[2] = inst_9817);
(statearr_9824_9838[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 4))
{var inst_9809 = (state_9822[7]);var inst_9810 = inst_9809.call(null,"id");var inst_9811 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_9812 = cmd.core.load_gists.call(null);var inst_9813 = cmd.core.load_gist.call(null,inst_9810);var inst_9814 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_9810)].join('');var inst_9815 = cmd.core.say.call(null,inst_9814);var state_9822__$1 = (function (){var statearr_9825 = state_9822;(statearr_9825[8] = inst_9813);
(statearr_9825[9] = inst_9812);
(statearr_9825[10] = inst_9811);
return statearr_9825;
})();var statearr_9826_9839 = state_9822__$1;(statearr_9826_9839[2] = inst_9815);
(statearr_9826_9839[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 3))
{var inst_9820 = (state_9822[2]);var state_9822__$1 = state_9822;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9822__$1,inst_9820);
} else
{if((state_val_9823 === 2))
{var inst_9806 = (state_9822[2]);var inst_9807 = cljs.core.nth.call(null,inst_9806,0,null);var inst_9808 = cljs.core.nth.call(null,inst_9806,1,null);var inst_9809 = cmd.utils.raw__GT_clj.call(null,inst_9808);var state_9822__$1 = (function (){var statearr_9827 = state_9822;(statearr_9827[7] = inst_9809);
return statearr_9827;
})();var G__9828_9840 = inst_9807;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9828_9840))
{var statearr_9829_9841 = state_9822__$1;(statearr_9829_9841[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9828_9840))
{var statearr_9830_9842 = state_9822__$1;(statearr_9830_9842[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9807)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9823 === 1))
{var inst_9801 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9802 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9803 = cmd.core.auth_param_strict.call(null,inst_9801,inst_9802);var inst_9804 = cmd.lib.POST.call(null,"/gists",new_content,inst_9803);var state_9822__$1 = state_9822;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9822__$1,2,inst_9804);
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
var state_machine__5594__auto____0 = (function (){var statearr_9834 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9834[0] = state_machine__5594__auto__);
(statearr_9834[1] = 1);
return statearr_9834;
});
var state_machine__5594__auto____1 = (function (state_9822){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9822);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9835){if((e9835 instanceof Object))
{var ex__5597__auto__ = e9835;var statearr_9836_9843 = state_9822;(statearr_9836_9843[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9822);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9844 = state_9822;
state_9822 = G__9844;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9822){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9837 = f__5609__auto__.call(null);(statearr_9837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9837;
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
return (function (state_9864){var state_val_9865 = (state_9864[1]);if((state_val_9865 === 2))
{var inst_9862 = (state_9864[2]);var state_9864__$1 = state_9864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9864__$1,inst_9862);
} else
{if((state_val_9865 === 1))
{var inst_9859 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9860 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9859,null));var state_9864__$1 = state_9864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9864__$1,2,cmd.core.AppBus,inst_9860);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9869 = [null,null,null,null,null,null,null];(statearr_9869[0] = state_machine__5594__auto__);
(statearr_9869[1] = 1);
return statearr_9869;
});
var state_machine__5594__auto____1 = (function (state_9864){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9864);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9870){if((e9870 instanceof Object))
{var ex__5597__auto__ = e9870;var statearr_9871_9873 = state_9864;(statearr_9871_9873[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9874 = state_9864;
state_9864 = G__9874;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9864){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9872 = f__5609__auto__.call(null);(statearr_9872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.core.unauthorized = (function unauthorized(resp){var error_msg = cmd.utils.raw__GT_clj.call(null,resp);cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
var c__5608__auto___9903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___9903,error_msg){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___9903,error_msg){
return (function (state_9894){var state_val_9895 = (state_9894[1]);if((state_val_9895 === 2))
{var inst_9892 = (state_9894[2]);var state_9894__$1 = state_9894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9894__$1,inst_9892);
} else
{if((state_val_9895 === 1))
{var inst_9889 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),false];var inst_9890 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9889,null));var state_9894__$1 = state_9894;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9894__$1,2,cmd.core.AppBus,inst_9890);
} else
{return null;
}
}
});})(c__5608__auto___9903,error_msg))
;return ((function (switch__5593__auto__,c__5608__auto___9903,error_msg){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9899 = [null,null,null,null,null,null,null];(statearr_9899[0] = state_machine__5594__auto__);
(statearr_9899[1] = 1);
return statearr_9899;
});
var state_machine__5594__auto____1 = (function (state_9894){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9894);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9900){if((e9900 instanceof Object))
{var ex__5597__auto__ = e9900;var statearr_9901_9904 = state_9894;(statearr_9901_9904[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9894);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9905 = state_9894;
state_9894 = G__9905;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9894){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___9903,error_msg))
})();var state__5610__auto__ = (function (){var statearr_9902 = f__5609__auto__.call(null);(statearr_9902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___9903);
return statearr_9902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___9903,error_msg))
);
return cmd.core.say.call(null,[cljs.core.str("Looks like you've got an authentication error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.authenticate = (function authenticate(username,auth_token){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9951){var state_val_9952 = (state_9951[1]);if((state_val_9952 === 5))
{var inst_9943 = (state_9951[7]);var inst_9946 = cmd.core.unauthorized.call(null,inst_9943);var state_9951__$1 = state_9951;var statearr_9953_9966 = state_9951__$1;(statearr_9953_9966[2] = inst_9946);
(statearr_9953_9966[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 4))
{var inst_9944 = cmd.core.logged_in.call(null,username,auth_token);var state_9951__$1 = state_9951;var statearr_9954_9967 = state_9951__$1;(statearr_9954_9967[2] = inst_9944);
(statearr_9954_9967[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 3))
{var inst_9949 = (state_9951[2]);var state_9951__$1 = state_9951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9951__$1,inst_9949);
} else
{if((state_val_9952 === 2))
{var inst_9941 = (state_9951[2]);var inst_9942 = cljs.core.nth.call(null,inst_9941,0,null);var inst_9943 = cljs.core.nth.call(null,inst_9941,1,null);var state_9951__$1 = (function (){var statearr_9955 = state_9951;(statearr_9955[7] = inst_9943);
return statearr_9955;
})();var G__9956_9968 = inst_9942;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9956_9968))
{var statearr_9957_9969 = state_9951__$1;(statearr_9957_9969[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9956_9968))
{var statearr_9958_9970 = state_9951__$1;(statearr_9958_9970[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9942)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 1))
{var inst_9937 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9938 = cmd.core.auth_param_fallback.call(null,username,auth_token);var inst_9939 = cmd.lib.GET.call(null,inst_9937,inst_9938);var state_9951__$1 = state_9951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9951__$1,2,inst_9939);
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
var state_machine__5594__auto____0 = (function (){var statearr_9962 = [null,null,null,null,null,null,null,null];(statearr_9962[0] = state_machine__5594__auto__);
(statearr_9962[1] = 1);
return statearr_9962;
});
var state_machine__5594__auto____1 = (function (state_9951){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9951);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9963){if((e9963 instanceof Object))
{var ex__5597__auto__ = e9963;var statearr_9964_9971 = state_9951;(statearr_9964_9971[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9963;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9972 = state_9951;
state_9951 = G__9972;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9951){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9965 = f__5609__auto__.call(null);(statearr_9965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9965;
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
cmd.core.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9974 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9974,0,null);var first_file = cljs.core.nth.call(null,vec__9974,1,null);var content = first_file.call(null,"content");return cmd.core.ace_set_value.call(null,content);
});
cmd.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.core.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.core.get_pinned_gists = (function get_pinned_gists(state){return cljs.core.filter.call(null,(function (gist){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149).cljs$core$IFn$_invoke$arity$1(state),gist.call(null,"id"));
}),new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=core.js.map