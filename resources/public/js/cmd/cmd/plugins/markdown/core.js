// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.plugins.markdown.core');
goog.require('cljs.core');
goog.require('cmd.lib.utils');
goog.require('cmd.globals');
goog.require('cljs.core.async');
goog.require('cmd.lib.io');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('cmd.globals');
goog.require('cmd.lib.io');
goog.require('cmd.lib.utils');
cmd.plugins.markdown.core.join_gist_names = (function join_gist_names(file_keys){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," <*> ",file_keys));
});
cmd.plugins.markdown.core.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__8815_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__8815_SHARP_.call(null,"id"));
}),cmd.lib.utils.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.plugins.markdown.core.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.lib.utils.say.call(null,[cljs.core.str("All of a sudden... an IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.plugins.markdown.core.load_gists = (function load_gists(){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8878){var state_val_8879 = (state_8878[1]);if((state_val_8879 === 6))
{var inst_8865 = (state_8878[7]);var inst_8873 = cmd.plugins.markdown.core.handle_io_error.call(null,inst_8865);var state_8878__$1 = state_8878;var statearr_8880_8894 = state_8878__$1;(statearr_8880_8894[2] = inst_8873);
(statearr_8880_8894[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8879 === 5))
{var inst_8866 = (state_8878[8]);var inst_8870 = (state_8878[2]);var inst_8871 = inst_8866.call(null,inst_8870);var state_8878__$1 = state_8878;var statearr_8881_8895 = state_8878__$1;(statearr_8881_8895[2] = inst_8871);
(statearr_8881_8895[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8879 === 4))
{var inst_8865 = (state_8878[7]);var inst_8866 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_8865);var inst_8867 = [new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),null];var inst_8868 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8867,null));var state_8878__$1 = (function (){var statearr_8882 = state_8878;(statearr_8882[8] = inst_8866);
return statearr_8882;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8878__$1,5,cmd.globals.AppBus,inst_8868);
} else
{if((state_val_8879 === 3))
{var inst_8876 = (state_8878[2]);var state_8878__$1 = state_8878;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8878__$1,inst_8876);
} else
{if((state_val_8879 === 2))
{var inst_8862 = (state_8878[2]);var inst_8863 = cljs.core.nth.call(null,inst_8862,0,null);var inst_8864 = cljs.core.nth.call(null,inst_8862,1,null);var inst_8865 = cmd.lib.utils.raw__GT_clj.call(null,inst_8864);var state_8878__$1 = (function (){var statearr_8883 = state_8878;(statearr_8883[7] = inst_8865);
return statearr_8883;
})();var G__8884_8896 = inst_8863;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8884_8896))
{var statearr_8885_8897 = state_8878__$1;(statearr_8885_8897[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8884_8896))
{var statearr_8886_8898 = state_8878__$1;(statearr_8886_8898[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8863)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8879 === 1))
{var inst_8856 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_8857 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_8858 = [cljs.core.str("/users/"),cljs.core.str(inst_8856),cljs.core.str("/gists")].join('');var inst_8859 = cmd.lib.io.auth_param_fallback.call(null,inst_8856,inst_8857);var inst_8860 = cmd.lib.io.GET.call(null,inst_8858,inst_8859);var state_8878__$1 = state_8878;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8878__$1,2,inst_8860);
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
var state_machine__5594__auto____0 = (function (){var statearr_8890 = [null,null,null,null,null,null,null,null,null];(statearr_8890[0] = state_machine__5594__auto__);
(statearr_8890[1] = 1);
return statearr_8890;
});
var state_machine__5594__auto____1 = (function (state_8878){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8878);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8891){if((e8891 instanceof Object))
{var ex__5597__auto__ = e8891;var statearr_8892_8899 = state_8878;(statearr_8892_8899[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8878);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8900 = state_8878;
state_8878 = G__8900;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8878){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8893 = f__5609__auto__.call(null);(statearr_8893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.plugins.markdown.core.get_motd = (function get_motd(gist_id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_8975){var state_val_8976 = (state_8975[1]);if((state_val_8976 === 6))
{var inst_8968 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"motd","motd",1017261828),cmd.plugins.markdown.core.local_motd);var inst_8969 = cmd.lib.utils.say.call(null,"Sorry, can't load motd");var inst_8970 = inst_8968.call(null,inst_8969);var state_8975__$1 = state_8975;var statearr_8977_8991 = state_8975__$1;(statearr_8977_8991[2] = inst_8970);
(statearr_8977_8991[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8976 === 5))
{var inst_8961 = (state_8975[7]);var inst_8965 = (state_8975[2]);var inst_8966 = inst_8961.call(null,inst_8965);var state_8975__$1 = state_8975;var statearr_8978_8992 = state_8975__$1;(statearr_8978_8992[2] = inst_8966);
(statearr_8978_8992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8976 === 4))
{var inst_8953 = (state_8975[8]);var inst_8955 = cmd.lib.utils.raw__GT_clj.call(null,inst_8953);var inst_8956 = inst_8955.call(null,"files");var inst_8957 = cljs.core.first.call(null,inst_8956);var inst_8958 = cljs.core.nth.call(null,inst_8957,0,null);var inst_8959 = cljs.core.nth.call(null,inst_8957,1,null);var inst_8960 = inst_8959.call(null,"content");var inst_8961 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"motd","motd",1017261828),inst_8960);var inst_8962 = [new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),inst_8960];var inst_8963 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8962,null));var state_8975__$1 = (function (){var statearr_8979 = state_8975;(statearr_8979[9] = inst_8958);
(statearr_8979[7] = inst_8961);
return statearr_8979;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8975__$1,5,cmd.globals.AppBus,inst_8963);
} else
{if((state_val_8976 === 3))
{var inst_8973 = (state_8975[2]);var state_8975__$1 = state_8975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8975__$1,inst_8973);
} else
{if((state_val_8976 === 2))
{var inst_8951 = (state_8975[2]);var inst_8952 = cljs.core.nth.call(null,inst_8951,0,null);var inst_8953 = cljs.core.nth.call(null,inst_8951,1,null);var state_8975__$1 = (function (){var statearr_8980 = state_8975;(statearr_8980[8] = inst_8953);
return statearr_8980;
})();var G__8981_8993 = inst_8952;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__8981_8993))
{var statearr_8982_8994 = state_8975__$1;(statearr_8982_8994[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__8981_8993))
{var statearr_8983_8995 = state_8975__$1;(statearr_8983_8995[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_8952)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8976 === 1))
{var inst_8947 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_8948 = cmd.plugins.markdown.core.auth_param_anon.call(null);var inst_8949 = cmd.lib.io.GET.call(null,inst_8947,inst_8948);var state_8975__$1 = state_8975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8975__$1,2,inst_8949);
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
var state_machine__5594__auto____0 = (function (){var statearr_8987 = [null,null,null,null,null,null,null,null,null,null];(statearr_8987[0] = state_machine__5594__auto__);
(statearr_8987[1] = 1);
return statearr_8987;
});
var state_machine__5594__auto____1 = (function (state_8975){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8975);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8988){if((e8988 instanceof Object))
{var ex__5597__auto__ = e8988;var statearr_8989_8996 = state_8975;(statearr_8989_8996[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8997 = state_8975;
state_8975 = G__8997;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8975){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_8990 = f__5609__auto__.call(null);(statearr_8990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.plugins.markdown.core.load_gist = (function load_gist(id){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9076){var state_val_9077 = (state_9076[1]);if((state_val_9077 === 6))
{var inst_9054 = (state_9076[7]);var inst_9070 = cmd.lib.utils.raw__GT_clj.call(null,inst_9054);var inst_9071 = cmd.plugins.markdown.core.handle_io_error.call(null,inst_9070);var state_9076__$1 = state_9076;var statearr_9078_9092 = state_9076__$1;(statearr_9078_9092[2] = inst_9071);
(statearr_9078_9092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9077 === 5))
{var inst_9068 = (state_9076[2]);var state_9076__$1 = state_9076;var statearr_9079_9093 = state_9076__$1;(statearr_9079_9093[2] = inst_9068);
(statearr_9079_9093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9077 === 4))
{var inst_9054 = (state_9076[7]);var inst_9056 = cmd.lib.utils.raw__GT_clj.call(null,inst_9054);var inst_9057 = inst_9056.call(null,"files");var inst_9058 = cljs.core.first.call(null,inst_9057);var inst_9059 = cljs.core.nth.call(null,inst_9058,0,null);var inst_9060 = cljs.core.nth.call(null,inst_9058,1,null);var inst_9061 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9059);var inst_9062 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9056);var inst_9063 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),id);var inst_9064 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"edit-gist","edit-gist",3396290584));var inst_9065 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9066 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9065,null));var state_9076__$1 = (function (){var statearr_9080 = state_9076;(statearr_9080[8] = inst_9061);
(statearr_9080[9] = inst_9063);
(statearr_9080[10] = inst_9062);
(statearr_9080[11] = inst_9060);
(statearr_9080[12] = inst_9064);
return statearr_9080;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9076__$1,5,cmd.globals.AppBus,inst_9066);
} else
{if((state_val_9077 === 3))
{var inst_9074 = (state_9076[2]);var state_9076__$1 = state_9076;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9076__$1,inst_9074);
} else
{if((state_val_9077 === 2))
{var inst_9052 = (state_9076[2]);var inst_9053 = cljs.core.nth.call(null,inst_9052,0,null);var inst_9054 = cljs.core.nth.call(null,inst_9052,1,null);var state_9076__$1 = (function (){var statearr_9081 = state_9076;(statearr_9081[7] = inst_9054);
return statearr_9081;
})();var G__9082_9094 = inst_9053;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9082_9094))
{var statearr_9083_9095 = state_9076__$1;(statearr_9083_9095[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9082_9094))
{var statearr_9084_9096 = state_9076__$1;(statearr_9084_9096[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9053)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9077 === 1))
{var inst_9046 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9047 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9048 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9049 = cmd.lib.io.auth_param_fallback.call(null,inst_9047,inst_9048);var inst_9050 = cmd.lib.io.GET.call(null,inst_9046,inst_9049);var state_9076__$1 = state_9076;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9076__$1,2,inst_9050);
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
var state_machine__5594__auto____0 = (function (){var statearr_9088 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9088[0] = state_machine__5594__auto__);
(statearr_9088[1] = 1);
return statearr_9088;
});
var state_machine__5594__auto____1 = (function (state_9076){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9076);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9089){if((e9089 instanceof Object))
{var ex__5597__auto__ = e9089;var statearr_9090_9097 = state_9076;(statearr_9090_9097[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9076);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9098 = state_9076;
state_9076 = G__9098;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9076){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9091 = f__5609__auto__.call(null);(statearr_9091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.plugins.markdown.core.save_gist = (function save_gist(gist_id,new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9155){var state_val_9156 = (state_9155[1]);if((state_val_9156 === 5))
{var inst_9145 = (state_9155[7]);var inst_9150 = cmd.plugins.markdown.core.handle_io_error.call(null,inst_9145);var state_9155__$1 = state_9155;var statearr_9157_9171 = state_9155__$1;(statearr_9157_9171[2] = inst_9150);
(statearr_9157_9171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9156 === 4))
{var inst_9145 = (state_9155[7]);var inst_9146 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9145);var inst_9147 = [cljs.core.str("Ok, gist "),cljs.core.str(gist_id),cljs.core.str(" saved")].join('');var inst_9148 = cmd.lib.utils.say.call(null,inst_9147);var state_9155__$1 = (function (){var statearr_9158 = state_9155;(statearr_9158[8] = inst_9146);
return statearr_9158;
})();var statearr_9159_9172 = state_9155__$1;(statearr_9159_9172[2] = inst_9148);
(statearr_9159_9172[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9156 === 3))
{var inst_9153 = (state_9155[2]);var state_9155__$1 = state_9155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9155__$1,inst_9153);
} else
{if((state_val_9156 === 2))
{var inst_9142 = (state_9155[2]);var inst_9143 = cljs.core.nth.call(null,inst_9142,0,null);var inst_9144 = cljs.core.nth.call(null,inst_9142,1,null);var inst_9145 = cmd.lib.utils.raw__GT_clj.call(null,inst_9144);var state_9155__$1 = (function (){var statearr_9160 = state_9155;(statearr_9160[7] = inst_9145);
return statearr_9160;
})();var G__9161_9173 = inst_9143;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9161_9173))
{var statearr_9162_9174 = state_9155__$1;(statearr_9162_9174[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9161_9173))
{var statearr_9163_9175 = state_9155__$1;(statearr_9163_9175[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9143)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9156 === 1))
{var inst_9136 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9137 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9138 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9139 = cmd.lib.io.auth_param_strict.call(null,inst_9137,inst_9138);var inst_9140 = cmd.lib.io.PATCH.call(null,inst_9136,new_content,inst_9139);var state_9155__$1 = state_9155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9155__$1,2,inst_9140);
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
var state_machine__5594__auto____0 = (function (){var statearr_9167 = [null,null,null,null,null,null,null,null,null];(statearr_9167[0] = state_machine__5594__auto__);
(statearr_9167[1] = 1);
return statearr_9167;
});
var state_machine__5594__auto____1 = (function (state_9155){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9155);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9168){if((e9168 instanceof Object))
{var ex__5597__auto__ = e9168;var statearr_9169_9176 = state_9155;(statearr_9169_9176[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9155);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9177 = state_9155;
state_9155 = G__9177;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9155){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9170 = f__5609__auto__.call(null);(statearr_9170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.plugins.markdown.core.create_gist = (function create_gist(new_content){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9238){var state_val_9239 = (state_9238[1]);if((state_val_9239 === 5))
{var inst_9225 = (state_9238[7]);var inst_9233 = cmd.plugins.markdown.core.handle_io_error.call(null,inst_9225);var state_9238__$1 = state_9238;var statearr_9240_9254 = state_9238__$1;(statearr_9240_9254[2] = inst_9233);
(statearr_9240_9254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9239 === 4))
{var inst_9225 = (state_9238[7]);var inst_9226 = inst_9225.call(null,"id");var inst_9227 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);var inst_9228 = cmd.plugins.markdown.core.load_gists.call(null);var inst_9229 = cmd.plugins.markdown.core.load_gist.call(null,inst_9226);var inst_9230 = [cljs.core.str("Ok, created a gist, got id "),cljs.core.str(inst_9226)].join('');var inst_9231 = cmd.lib.utils.say.call(null,inst_9230);var state_9238__$1 = (function (){var statearr_9241 = state_9238;(statearr_9241[8] = inst_9228);
(statearr_9241[9] = inst_9227);
(statearr_9241[10] = inst_9229);
return statearr_9241;
})();var statearr_9242_9255 = state_9238__$1;(statearr_9242_9255[2] = inst_9231);
(statearr_9242_9255[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9239 === 3))
{var inst_9236 = (state_9238[2]);var state_9238__$1 = state_9238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9238__$1,inst_9236);
} else
{if((state_val_9239 === 2))
{var inst_9222 = (state_9238[2]);var inst_9223 = cljs.core.nth.call(null,inst_9222,0,null);var inst_9224 = cljs.core.nth.call(null,inst_9222,1,null);var inst_9225 = cmd.lib.utils.raw__GT_clj.call(null,inst_9224);var state_9238__$1 = (function (){var statearr_9243 = state_9238;(statearr_9243[7] = inst_9225);
return statearr_9243;
})();var G__9244_9256 = inst_9223;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9244_9256))
{var statearr_9245_9257 = state_9238__$1;(statearr_9245_9257[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9244_9256))
{var statearr_9246_9258 = state_9238__$1;(statearr_9246_9258[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9223)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9239 === 1))
{var inst_9217 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9218 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9219 = cmd.lib.io.auth_param_strict.call(null,inst_9217,inst_9218);var inst_9220 = cmd.lib.io.POST.call(null,"/gists",new_content,inst_9219);var state_9238__$1 = state_9238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9238__$1,2,inst_9220);
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
var state_machine__5594__auto____0 = (function (){var statearr_9250 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9250[0] = state_machine__5594__auto__);
(statearr_9250[1] = 1);
return statearr_9250;
});
var state_machine__5594__auto____1 = (function (state_9238){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9238);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9251){if((e9251 instanceof Object))
{var ex__5597__auto__ = e9251;var statearr_9252_9259 = state_9238;(statearr_9252_9259[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9260 = state_9238;
state_9238 = G__9260;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9238){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9253 = f__5609__auto__.call(null);(statearr_9253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.plugins.markdown.core.get_gist_id_from_location_hash = (function get_gist_id_from_location_hash(){var x = cmd.plugins.markdown.core.parse_location_hash.call(null).call(null,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999));if(cljs.core._EQ_.call(null,x,""))
{return null;
} else
{return x;
}
});
cmd.plugins.markdown.core.get_panels_from_location_hash = (function get_panels_from_location_hash(){var x = cmd.plugins.markdown.core.parse_location_hash.call(null).call(null,new cljs.core.Keyword(null,"panels","panels",4313328225));return x;
});
cmd.plugins.markdown.core.set_title = (function set_title(title){return document.title = [cljs.core.str(title),cljs.core.str(" : "),cljs.core.str(cmd.plugins.markdown.core.default_title)].join('');
});
cmd.plugins.markdown.core.set_location_hash_gist_id = (function set_location_hash_gist_id(gist_id){var lh = cmd.plugins.markdown.core.parse_location_hash.call(null);var new_lh = cljs.core.assoc.call(null,lh,new cljs.core.Keyword(null,"gist-id","gist-id",1053270999),gist_id);return cmd.plugins.markdown.core.set_location_hash.call(null,new_lh);
});
cmd.plugins.markdown.core.set_location_hash_panels = (function set_location_hash_panels(panels){var lh = cmd.plugins.markdown.core.parse_location_hash.call(null);var new_lh = cljs.core.assoc.call(null,lh,new cljs.core.Keyword(null,"panels","panels",4313328225),clojure.string.join.call(null,panels));return cmd.plugins.markdown.core.set_location_hash.call(null,new_lh);
});
cmd.plugins.markdown.core.load_initial_content = (function load_initial_content(){var gist_id = cmd.plugins.markdown.core.get_gist_id_from_location_hash.call(null);if((gist_id == null))
{return cmd.plugins.markdown.core.get_motd.call(null,cmd.plugins.markdown.core.default_motd_id);
} else
{return cmd.plugins.markdown.core.load_gist.call(null,gist_id);
}
});
cmd.plugins.markdown.core.ace_set_value = (function ace_set_value(content){return cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.plugins.markdown.core.set_input = (function set_input(gist_id){var gist = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9262 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9262,0,null);var first_file = cljs.core.nth.call(null,vec__9262,1,null);var content = first_file.call(null,"content");return cmd.plugins.markdown.core.ace_set_value.call(null,content);
});
cmd.plugins.markdown.core.reset_input_with_motd = (function reset_input_with_motd(){return cmd.plugins.markdown.core.ace_set_value.call(null,cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.plugins.markdown.core.get_repl = (function get_repl(){if(typeof cmd.plugins.markdown.core.t9266 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.plugins.markdown.core.t9266 = (function (get_repl,meta9267){
this.get_repl = get_repl;
this.meta9267 = meta9267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.plugins.markdown.core.t9266.cljs$lang$type = true;
cmd.plugins.markdown.core.t9266.cljs$lang$ctorStr = "cmd.plugins.markdown.core/t9266";
cmd.plugins.markdown.core.t9266.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.plugins.markdown.core/t9266");
});
cmd.plugins.markdown.core.t9266.prototype.cmd$plugins$markdown$core$IRepl$ = true;
cmd.plugins.markdown.core.t9266.prototype.cmd$plugins$markdown$core$IRepl$read$arity$4 = (function (this$,input_source_element,global_state,app_bus){var self__ = this;
var this$__$1 = this;cmd.plugins.markdown.core.setup_ace.call(null);
return cmd.plugins.markdown.core.setup_editor_listeners.call(null);
});
cmd.plugins.markdown.core.t9266.prototype.cmd$plugins$markdown$core$IRepl$eval$arity$4 = (function (this$,_QMARK_,global_state,app_bus){var self__ = this;
var this$__$1 = this;return null;
});
cmd.plugins.markdown.core.t9266.prototype.cmd$plugins$markdown$core$IRepl$print$arity$4 = (function (this$,output_element,global_state,app_bus){var self__ = this;
var this$__$1 = this;return null;
});
cmd.plugins.markdown.core.t9266.prototype.cmd$plugins$markdown$core$IRepl$loop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
cmd.plugins.markdown.core.t9266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9268){var self__ = this;
var _9268__$1 = this;return self__.meta9267;
});
cmd.plugins.markdown.core.t9266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9268,meta9267__$1){var self__ = this;
var _9268__$1 = this;return (new cmd.plugins.markdown.core.t9266(self__.get_repl,meta9267__$1));
});
cmd.plugins.markdown.core.__GT_t9266 = (function __GT_t9266(get_repl__$1,meta9267){return (new cmd.plugins.markdown.core.t9266(get_repl__$1,meta9267));
});
}
return (new cmd.plugins.markdown.core.t9266(get_repl,null));
});

//# sourceMappingURL=core.js.map