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
cmd.core.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,(function() { 
var G__9860__delegate = function (_){return cljs.core.PersistentArrayMap.EMPTY;
};
var G__9860 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9860__delegate.call(this,_);};
G__9860.cljs$lang$maxFixedArity = 0;
G__9860.cljs$lang$applyTo = (function (arglist__9861){
var _ = cljs.core.seq(arglist__9861);
return G__9860__delegate(_);
});
G__9860.cljs$core$IFn$_invoke$arity$variadic = G__9860__delegate;
return G__9860;
})()
);
});
cmd.core.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.core.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,data,worker,ch){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,data,worker,ch){
return (function (state_9884){var state_val_9885 = (state_9884[1]);if((state_val_9885 === 2))
{var inst_9881 = (state_9884[2]);var inst_9882 = cljs.core.async.close_BANG_.call(null,ch);var state_9884__$1 = (function (){var statearr_9886 = state_9884;(statearr_9886[7] = inst_9881);
return statearr_9886;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9884__$1,inst_9882);
} else
{if((state_val_9885 === 1))
{var inst_9878 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_9879 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9878,null));var state_9884__$1 = state_9884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9884__$1,2,ch,inst_9879);
} else
{return null;
}
}
});})(c__6291__auto__,data,worker,ch))
;return ((function (switch__6276__auto__,c__6291__auto__,data,worker,ch){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9890 = [null,null,null,null,null,null,null,null];(statearr_9890[0] = state_machine__6277__auto__);
(statearr_9890[1] = 1);
return statearr_9890;
});
var state_machine__6277__auto____1 = (function (state_9884){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9884);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9891){if((e9891 instanceof Object))
{var ex__6280__auto__ = e9891;var statearr_9892_9894 = state_9884;(statearr_9892_9894[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9884);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9895 = state_9884;
state_9884 = G__9895;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9884){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,data,worker,ch))
})();var state__6293__auto__ = (function (){var statearr_9893 = f__6292__auto__.call(null);(statearr_9893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9893;
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
return (function (state_9937){var state_val_9938 = (state_9937[1]);if((state_val_9938 === 5))
{var inst_9932 = cb.call(null,"<Error>");var state_9937__$1 = state_9937;var statearr_9939_9952 = state_9937__$1;(statearr_9939_9952[2] = inst_9932);
(statearr_9939_9952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9938 === 4))
{var inst_9929 = (state_9937[7]);var inst_9930 = cb.call(null,inst_9929);var state_9937__$1 = state_9937;var statearr_9940_9953 = state_9937__$1;(statearr_9940_9953[2] = inst_9930);
(statearr_9940_9953[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9938 === 3))
{var inst_9935 = (state_9937[2]);var state_9937__$1 = state_9937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9937__$1,inst_9935);
} else
{if((state_val_9938 === 2))
{var inst_9927 = (state_9937[2]);var inst_9928 = cljs.core.nth.call(null,inst_9927,0,null);var inst_9929 = cljs.core.nth.call(null,inst_9927,1,null);var state_9937__$1 = (function (){var statearr_9941 = state_9937;(statearr_9941[7] = inst_9929);
return statearr_9941;
})();var G__9942_9954 = inst_9928;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9942_9954))
{var statearr_9943_9955 = state_9937__$1;(statearr_9943_9955[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9942_9954))
{var statearr_9944_9956 = state_9937__$1;(statearr_9944_9956[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9928)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9938 === 1))
{var inst_9925 = cmd.core.wmd__GT_html.call(null,md);var state_9937__$1 = state_9937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9937__$1,2,inst_9925);
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
var state_machine__6277__auto____0 = (function (){var statearr_9948 = [null,null,null,null,null,null,null,null];(statearr_9948[0] = state_machine__6277__auto__);
(statearr_9948[1] = 1);
return statearr_9948;
});
var state_machine__6277__auto____1 = (function (state_9937){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9937);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9949){if((e9949 instanceof Object))
{var ex__6280__auto__ = e9949;var statearr_9950_9957 = state_9937;(statearr_9950_9957[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9958 = state_9937;
state_9937 = G__9958;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9937){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9951 = f__6292__auto__.call(null);(statearr_9951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.auth_param = (function auth_param(username,auth_token){var obj9962 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj9962;
});
cmd.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__9963_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__9963_SHARP_.call(null,"id"));
}),cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.utils.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.core.load_gists = (function load_gists(){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10015){var state_val_10016 = (state_10015[1]);if((state_val_10016 === 5))
{var inst_10007 = (state_10015[7]);var inst_10010 = cmd.core.handle_io_error.call(null,inst_10007);var state_10015__$1 = state_10015;var statearr_10017_10030 = state_10015__$1;(statearr_10017_10030[2] = inst_10010);
(statearr_10017_10030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10016 === 4))
{var inst_10007 = (state_10015[7]);var inst_10008 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_10007);var state_10015__$1 = state_10015;var statearr_10018_10031 = state_10015__$1;(statearr_10018_10031[2] = inst_10008);
(statearr_10018_10031[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10016 === 3))
{var inst_10013 = (state_10015[2]);var state_10015__$1 = state_10015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10015__$1,inst_10013);
} else
{if((state_val_10016 === 2))
{var inst_10004 = (state_10015[2]);var inst_10005 = cljs.core.nth.call(null,inst_10004,0,null);var inst_10006 = cljs.core.nth.call(null,inst_10004,1,null);var inst_10007 = cmd.utils.raw__GT_clj.call(null,inst_10006);var state_10015__$1 = (function (){var statearr_10019 = state_10015;(statearr_10019[7] = inst_10007);
return statearr_10019;
})();var G__10020_10032 = inst_10005;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10020_10032))
{var statearr_10021_10033 = state_10015__$1;(statearr_10021_10033[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10020_10032))
{var statearr_10022_10034 = state_10015__$1;(statearr_10022_10034[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10005)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10016 === 1))
{var inst_9998 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9999 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10000 = [cljs.core.str("/users/"),cljs.core.str(inst_9998),cljs.core.str("/gists")].join('');var inst_10001 = cmd.core.auth_param.call(null,inst_9998,inst_9999);var inst_10002 = cmd.lib.GET.call(null,inst_10000,inst_10001);var state_10015__$1 = state_10015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10015__$1,2,inst_10002);
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
var state_machine__6277__auto____0 = (function (){var statearr_10026 = [null,null,null,null,null,null,null,null];(statearr_10026[0] = state_machine__6277__auto__);
(statearr_10026[1] = 1);
return statearr_10026;
});
var state_machine__6277__auto____1 = (function (state_10015){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10015);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10027){if((e10027 instanceof Object))
{var ex__6280__auto__ = e10027;var statearr_10028_10035 = state_10015;(statearr_10028_10035[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10036 = state_10015;
state_10015 = G__10036;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10015){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10029 = f__6292__auto__.call(null);(statearr_10029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.load_gist = (function load_gist(id){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10111){var state_val_10112 = (state_10111[1]);if((state_val_10112 === 6))
{var inst_10091 = (state_10111[7]);var inst_10105 = cmd.utils.raw__GT_clj.call(null,inst_10091);var inst_10106 = cmd.core.handle_io_error.call(null,inst_10105);var state_10111__$1 = state_10111;var statearr_10113_10127 = state_10111__$1;(statearr_10113_10127[2] = inst_10106);
(statearr_10113_10127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10112 === 5))
{var inst_10103 = (state_10111[2]);var state_10111__$1 = state_10111;var statearr_10114_10128 = state_10111__$1;(statearr_10114_10128[2] = inst_10103);
(statearr_10114_10128[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10112 === 4))
{var inst_10091 = (state_10111[7]);var inst_10093 = cmd.utils.raw__GT_clj.call(null,inst_10091);var inst_10094 = inst_10093.call(null,"files");var inst_10095 = cljs.core.first.call(null,inst_10094);var inst_10096 = cljs.core.nth.call(null,inst_10095,0,null);var inst_10097 = cljs.core.nth.call(null,inst_10095,1,null);var inst_10098 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_10096);var inst_10099 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_10093);var inst_10100 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_10101 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10100,null));var state_10111__$1 = (function (){var statearr_10115 = state_10111;(statearr_10115[8] = inst_10097);
(statearr_10115[9] = inst_10099);
(statearr_10115[10] = inst_10098);
return statearr_10115;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10111__$1,5,cmd.core.AppBus,inst_10101);
} else
{if((state_val_10112 === 3))
{var inst_10109 = (state_10111[2]);var state_10111__$1 = state_10111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10111__$1,inst_10109);
} else
{if((state_val_10112 === 2))
{var inst_10089 = (state_10111[2]);var inst_10090 = cljs.core.nth.call(null,inst_10089,0,null);var inst_10091 = cljs.core.nth.call(null,inst_10089,1,null);var state_10111__$1 = (function (){var statearr_10116 = state_10111;(statearr_10116[7] = inst_10091);
return statearr_10116;
})();var G__10117_10129 = inst_10090;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10117_10129))
{var statearr_10118_10130 = state_10111__$1;(statearr_10118_10130[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10117_10129))
{var statearr_10119_10131 = state_10111__$1;(statearr_10119_10131[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10090)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10112 === 1))
{var inst_10083 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_10084 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10085 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10086 = cmd.core.auth_param.call(null,inst_10084,inst_10085);var inst_10087 = cmd.lib.GET.call(null,inst_10083,inst_10086);var state_10111__$1 = state_10111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10111__$1,2,inst_10087);
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
var state_machine__6277__auto____0 = (function (){var statearr_10123 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10123[0] = state_machine__6277__auto__);
(statearr_10123[1] = 1);
return statearr_10123;
});
var state_machine__6277__auto____1 = (function (state_10111){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10124){if((e10124 instanceof Object))
{var ex__6280__auto__ = e10124;var statearr_10125_10132 = state_10111;(statearr_10125_10132[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10133 = state_10111;
state_10111 = G__10133;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10111){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10126 = f__6292__auto__.call(null);(statearr_10126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.core.save_gist = (function save_gist(gist_id,new_content){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_10183){var state_val_10184 = (state_10183[1]);if((state_val_10184 === 5))
{var inst_10176 = (state_10183[7]);var inst_10178 = cmd.core.handle_io_error.call(null,inst_10176);var state_10183__$1 = state_10183;var statearr_10185_10198 = state_10183__$1;(statearr_10185_10198[2] = inst_10178);
(statearr_10185_10198[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10184 === 4))
{var inst_10176 = (state_10183[7]);var state_10183__$1 = state_10183;var statearr_10186_10199 = state_10183__$1;(statearr_10186_10199[2] = inst_10176);
(statearr_10186_10199[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10184 === 3))
{var inst_10181 = (state_10183[2]);var state_10183__$1 = state_10183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10183__$1,inst_10181);
} else
{if((state_val_10184 === 2))
{var inst_10173 = (state_10183[2]);var inst_10174 = cljs.core.nth.call(null,inst_10173,0,null);var inst_10175 = cljs.core.nth.call(null,inst_10173,1,null);var inst_10176 = cmd.utils.raw__GT_clj.call(null,inst_10175);var state_10183__$1 = (function (){var statearr_10187 = state_10183;(statearr_10187[7] = inst_10176);
return statearr_10187;
})();var G__10188_10200 = inst_10174;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10188_10200))
{var statearr_10189_10201 = state_10183__$1;(statearr_10189_10201[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10188_10200))
{var statearr_10190_10202 = state_10183__$1;(statearr_10190_10202[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10174)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10184 === 1))
{var inst_10167 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_10168 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_10169 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_10170 = cmd.core.auth_param.call(null,inst_10168,inst_10169);var inst_10171 = cmd.lib.PATCH.call(null,inst_10167,new_content,inst_10170);var state_10183__$1 = state_10183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10183__$1,2,inst_10171);
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
var state_machine__6277__auto____0 = (function (){var statearr_10194 = [null,null,null,null,null,null,null,null];(statearr_10194[0] = state_machine__6277__auto__);
(statearr_10194[1] = 1);
return statearr_10194;
});
var state_machine__6277__auto____1 = (function (state_10183){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10183);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10195){if((e10195 instanceof Object))
{var ex__6280__auto__ = e10195;var statearr_10196_10203 = state_10183;(statearr_10196_10203[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10183);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10204 = state_10183;
state_10183 = G__10204;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10183){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10197 = f__6292__auto__.call(null);(statearr_10197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10197;
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
return (function (state_10224){var state_val_10225 = (state_10224[1]);if((state_val_10225 === 2))
{var inst_10222 = (state_10224[2]);var state_10224__$1 = state_10224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10224__$1,inst_10222);
} else
{if((state_val_10225 === 1))
{var inst_10219 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_10220 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10219,null));var state_10224__$1 = state_10224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10224__$1,2,cmd.core.AppBus,inst_10220);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_10229 = [null,null,null,null,null,null,null];(statearr_10229[0] = state_machine__6277__auto__);
(statearr_10229[1] = 1);
return statearr_10229;
});
var state_machine__6277__auto____1 = (function (state_10224){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10224);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10230){if((e10230 instanceof Object))
{var ex__6280__auto__ = e10230;var statearr_10231_10233 = state_10224;(statearr_10231_10233[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10234 = state_10224;
state_10224 = G__10234;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10224){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10232 = f__6292__auto__.call(null);(statearr_10232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10232;
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
return (function (state_10280){var state_val_10281 = (state_10280[1]);if((state_val_10281 === 5))
{var inst_10272 = (state_10280[7]);var inst_10275 = cmd.core.unauthorized.call(null,inst_10272);var state_10280__$1 = state_10280;var statearr_10282_10295 = state_10280__$1;(statearr_10282_10295[2] = inst_10275);
(statearr_10282_10295[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10281 === 4))
{var inst_10273 = cmd.core.logged_in.call(null,username,auth_token);var state_10280__$1 = state_10280;var statearr_10283_10296 = state_10280__$1;(statearr_10283_10296[2] = inst_10273);
(statearr_10283_10296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10281 === 3))
{var inst_10278 = (state_10280[2]);var state_10280__$1 = state_10280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10280__$1,inst_10278);
} else
{if((state_val_10281 === 2))
{var inst_10270 = (state_10280[2]);var inst_10271 = cljs.core.nth.call(null,inst_10270,0,null);var inst_10272 = cljs.core.nth.call(null,inst_10270,1,null);var state_10280__$1 = (function (){var statearr_10284 = state_10280;(statearr_10284[7] = inst_10272);
return statearr_10284;
})();var G__10285_10297 = inst_10271;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__10285_10297))
{var statearr_10286_10298 = state_10280__$1;(statearr_10286_10298[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__10285_10297))
{var statearr_10287_10299 = state_10280__$1;(statearr_10287_10299[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10271)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10281 === 1))
{var inst_10266 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_10267 = cmd.core.auth_param.call(null,username,auth_token);var inst_10268 = cmd.lib.GET.call(null,inst_10266,inst_10267);var state_10280__$1 = state_10280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10280__$1,2,inst_10268);
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
var state_machine__6277__auto____0 = (function (){var statearr_10291 = [null,null,null,null,null,null,null,null];(statearr_10291[0] = state_machine__6277__auto__);
(statearr_10291[1] = 1);
return statearr_10291;
});
var state_machine__6277__auto____1 = (function (state_10280){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_10280);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e10292){if((e10292 instanceof Object))
{var ex__6280__auto__ = e10292;var statearr_10293_10300 = state_10280;(statearr_10293_10300[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10280);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10301 = state_10280;
state_10280 = G__10301;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_10280){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_10280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_10294 = f__6292__auto__.call(null);(statearr_10294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_10294;
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