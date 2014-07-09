// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.lib');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
cmd.lib.resp_handler = (function resp_handler(ch,event){var error_code = event.target.getLastErrorCode();var res = event.target.getResponseText();var pred__9952 = cljs.core._EQ_;var expr__9953 = error_code;if(cljs.core.truth_(pred__9952.call(null,goog.net.ErrorCode.NO_ERROR,expr__9953)))
{var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,pred__9952,expr__9953,error_code,res){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,pred__9952,expr__9953,error_code,res){
return (function (state_9961){var state_val_9962 = (state_9961[1]);if((state_val_9962 === 2))
{var inst_9958 = (state_9961[2]);var inst_9959 = cljs.core.async.close_BANG_.call(null,ch);var state_9961__$1 = (function (){var statearr_9963 = state_9961;(statearr_9963[7] = inst_9958);
return statearr_9963;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9961__$1,inst_9959);
} else
{if((state_val_9962 === 1))
{var inst_9955 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_9956 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9955,null));var state_9961__$1 = state_9961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9961__$1,2,ch,inst_9956);
} else
{return null;
}
}
});})(c__6291__auto__,pred__9952,expr__9953,error_code,res))
;return ((function (switch__6276__auto__,c__6291__auto__,pred__9952,expr__9953,error_code,res){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9967 = [null,null,null,null,null,null,null,null];(statearr_9967[0] = state_machine__6277__auto__);
(statearr_9967[1] = 1);
return statearr_9967;
});
var state_machine__6277__auto____1 = (function (state_9961){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9961);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9968){if((e9968 instanceof Object))
{var ex__6280__auto__ = e9968;var statearr_9969_9987 = state_9961;(statearr_9969_9987[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9988 = state_9961;
state_9961 = G__9988;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9961){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,pred__9952,expr__9953,error_code,res))
})();var state__6293__auto__ = (function (){var statearr_9970 = f__6292__auto__.call(null);(statearr_9970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,pred__9952,expr__9953,error_code,res))
);
return c__6291__auto__;
} else
{var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,pred__9952,expr__9953,error_code,res){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,pred__9952,expr__9953,error_code,res){
return (function (state_9977){var state_val_9978 = (state_9977[1]);if((state_val_9978 === 2))
{var inst_9974 = (state_9977[2]);var inst_9975 = cljs.core.async.close_BANG_.call(null,ch);var state_9977__$1 = (function (){var statearr_9979 = state_9977;(statearr_9979[7] = inst_9974);
return statearr_9979;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9977__$1,inst_9975);
} else
{if((state_val_9978 === 1))
{var inst_9971 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_9972 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9971,null));var state_9977__$1 = state_9977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9977__$1,2,ch,inst_9972);
} else
{return null;
}
}
});})(c__6291__auto__,pred__9952,expr__9953,error_code,res))
;return ((function (switch__6276__auto__,c__6291__auto__,pred__9952,expr__9953,error_code,res){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9983 = [null,null,null,null,null,null,null,null];(statearr_9983[0] = state_machine__6277__auto__);
(statearr_9983[1] = 1);
return statearr_9983;
});
var state_machine__6277__auto____1 = (function (state_9977){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9977);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9984){if((e9984 instanceof Object))
{var ex__6280__auto__ = e9984;var statearr_9985_9989 = state_9977;(statearr_9985_9989[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9990 = state_9977;
state_9977 = G__9990;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9977){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,pred__9952,expr__9953,error_code,res))
})();var state__6293__auto__ = (function (){var statearr_9986 = f__6292__auto__.call(null);(statearr_9986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,pred__9952,expr__9953,error_code,res))
);
return c__6291__auto__;
}
});
cmd.lib.api_url = (function api_url(suffix){return [cljs.core.str("https://api.github.com"),cljs.core.str(suffix)].join('');
});
cmd.lib.GET = (function GET(url,auth_param){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(cmd.lib.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.resp_handler,ch),"GET",null,auth_param);
return ch;
});
cmd.lib.POST = (function POST(url,data,auth_param){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(cmd.lib.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.resp_handler,ch),"POST",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),auth_param);
return ch;
});
cmd.lib.PATCH = (function PATCH(url,data,auth_param){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(cmd.lib.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.resp_handler,ch),"PATCH",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),auth_param);
return ch;
});

//# sourceMappingURL=lib.js.map