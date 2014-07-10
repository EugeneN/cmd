// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.lib');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
cmd.lib.active_requests = cljs.core.atom.call(null,0);
cmd.lib.active_PLUS_1 = (function active_PLUS_1(){return cljs.core.swap_BANG_.call(null,cmd.lib.active_requests,cljs.core.inc);
});
cmd.lib.active_1 = (function active_1(){return cljs.core.swap_BANG_.call(null,cmd.lib.active_requests,cljs.core.dec);
});
cmd.lib.resp_handler = (function resp_handler(ch,event){var error_code = event.target.getLastErrorCode();var res = event.target.getResponseText();cmd.lib.active_1.call(null);
var pred__9200 = cljs.core._EQ_;var expr__9201 = error_code;if(cljs.core.truth_(pred__9200.call(null,goog.net.ErrorCode.NO_ERROR,expr__9201)))
{var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,pred__9200,expr__9201,error_code,res){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,pred__9200,expr__9201,error_code,res){
return (function (state_9209){var state_val_9210 = (state_9209[1]);if((state_val_9210 === 2))
{var inst_9206 = (state_9209[2]);var inst_9207 = cljs.core.async.close_BANG_.call(null,ch);var state_9209__$1 = (function (){var statearr_9211 = state_9209;(statearr_9211[7] = inst_9206);
return statearr_9211;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9209__$1,inst_9207);
} else
{if((state_val_9210 === 1))
{var inst_9203 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_9204 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9203,null));var state_9209__$1 = state_9209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9209__$1,2,ch,inst_9204);
} else
{return null;
}
}
});})(c__5608__auto__,pred__9200,expr__9201,error_code,res))
;return ((function (switch__5593__auto__,c__5608__auto__,pred__9200,expr__9201,error_code,res){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9215 = [null,null,null,null,null,null,null,null];(statearr_9215[0] = state_machine__5594__auto__);
(statearr_9215[1] = 1);
return statearr_9215;
});
var state_machine__5594__auto____1 = (function (state_9209){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9216){if((e9216 instanceof Object))
{var ex__5597__auto__ = e9216;var statearr_9217_9235 = state_9209;(statearr_9217_9235[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9209);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9236 = state_9209;
state_9209 = G__9236;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9209){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,pred__9200,expr__9201,error_code,res))
})();var state__5610__auto__ = (function (){var statearr_9218 = f__5609__auto__.call(null);(statearr_9218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9218;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__,pred__9200,expr__9201,error_code,res))
);
return c__5608__auto__;
} else
{var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,pred__9200,expr__9201,error_code,res){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,pred__9200,expr__9201,error_code,res){
return (function (state_9225){var state_val_9226 = (state_9225[1]);if((state_val_9226 === 2))
{var inst_9222 = (state_9225[2]);var inst_9223 = cljs.core.async.close_BANG_.call(null,ch);var state_9225__$1 = (function (){var statearr_9227 = state_9225;(statearr_9227[7] = inst_9222);
return statearr_9227;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9225__$1,inst_9223);
} else
{if((state_val_9226 === 1))
{var inst_9219 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_9220 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9219,null));var state_9225__$1 = state_9225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9225__$1,2,ch,inst_9220);
} else
{return null;
}
}
});})(c__5608__auto__,pred__9200,expr__9201,error_code,res))
;return ((function (switch__5593__auto__,c__5608__auto__,pred__9200,expr__9201,error_code,res){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9231 = [null,null,null,null,null,null,null,null];(statearr_9231[0] = state_machine__5594__auto__);
(statearr_9231[1] = 1);
return statearr_9231;
});
var state_machine__5594__auto____1 = (function (state_9225){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9225);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9232){if((e9232 instanceof Object))
{var ex__5597__auto__ = e9232;var statearr_9233_9237 = state_9225;(statearr_9233_9237[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9225);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9238 = state_9225;
state_9225 = G__9238;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9225){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,pred__9200,expr__9201,error_code,res))
})();var state__5610__auto__ = (function (){var statearr_9234 = f__5609__auto__.call(null);(statearr_9234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__,pred__9200,expr__9201,error_code,res))
);
return c__5608__auto__;
}
});
cmd.lib.api_url = (function api_url(suffix){return [cljs.core.str("https://api.github.com"),cljs.core.str(suffix)].join('');
});
cmd.lib.GET = (function GET(url,auth_param){var ch = cljs.core.async.chan.call(null,1);cmd.lib.active_PLUS_1.call(null);
goog.net.XhrIo.send(cmd.lib.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.resp_handler,ch),"GET",null,auth_param);
return ch;
});
cmd.lib.POST = (function POST(url,data,auth_param){var ch = cljs.core.async.chan.call(null,1);cmd.lib.active_PLUS_1.call(null);
goog.net.XhrIo.send(cmd.lib.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.resp_handler,ch),"POST",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),auth_param);
return ch;
});
cmd.lib.PATCH = (function PATCH(url,data,auth_param){var ch = cljs.core.async.chan.call(null,1);cmd.lib.active_PLUS_1.call(null);
goog.net.XhrIo.send(cmd.lib.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.resp_handler,ch),"PATCH",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),auth_param);
return ch;
});

//# sourceMappingURL=lib.js.map