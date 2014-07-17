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
var pred__11102 = cljs.core._EQ_;var expr__11103 = error_code;if(cljs.core.truth_(pred__11102.call(null,goog.net.ErrorCode.NO_ERROR,expr__11103)))
{var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__,pred__11102,expr__11103,error_code,res){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__,pred__11102,expr__11103,error_code,res){
return (function (state_11111){var state_val_11112 = (state_11111[1]);if((state_val_11112 === 2))
{var inst_11108 = (state_11111[2]);var inst_11109 = cljs.core.async.close_BANG_.call(null,ch);var state_11111__$1 = (function (){var statearr_11113 = state_11111;(statearr_11113[7] = inst_11108);
return statearr_11113;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11111__$1,inst_11109);
} else
{if((state_val_11112 === 1))
{var inst_11105 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_11106 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11105,null));var state_11111__$1 = state_11111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11111__$1,2,ch,inst_11106);
} else
{return null;
}
}
});})(c__6728__auto__,pred__11102,expr__11103,error_code,res))
;return ((function (switch__6713__auto__,c__6728__auto__,pred__11102,expr__11103,error_code,res){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11117 = [null,null,null,null,null,null,null,null];(statearr_11117[0] = state_machine__6714__auto__);
(statearr_11117[1] = 1);
return statearr_11117;
});
var state_machine__6714__auto____1 = (function (state_11111){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11118){if((e11118 instanceof Object))
{var ex__6717__auto__ = e11118;var statearr_11119_11137 = state_11111;(statearr_11119_11137[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11138 = state_11111;
state_11111 = G__11138;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11111){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__,pred__11102,expr__11103,error_code,res))
})();var state__6730__auto__ = (function (){var statearr_11120 = f__6729__auto__.call(null);(statearr_11120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__,pred__11102,expr__11103,error_code,res))
);
return c__6728__auto__;
} else
{var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__,pred__11102,expr__11103,error_code,res){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__,pred__11102,expr__11103,error_code,res){
return (function (state_11127){var state_val_11128 = (state_11127[1]);if((state_val_11128 === 2))
{var inst_11124 = (state_11127[2]);var inst_11125 = cljs.core.async.close_BANG_.call(null,ch);var state_11127__$1 = (function (){var statearr_11129 = state_11127;(statearr_11129[7] = inst_11124);
return statearr_11129;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11127__$1,inst_11125);
} else
{if((state_val_11128 === 1))
{var inst_11121 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_11122 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11121,null));var state_11127__$1 = state_11127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11127__$1,2,ch,inst_11122);
} else
{return null;
}
}
});})(c__6728__auto__,pred__11102,expr__11103,error_code,res))
;return ((function (switch__6713__auto__,c__6728__auto__,pred__11102,expr__11103,error_code,res){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_11133 = [null,null,null,null,null,null,null,null];(statearr_11133[0] = state_machine__6714__auto__);
(statearr_11133[1] = 1);
return statearr_11133;
});
var state_machine__6714__auto____1 = (function (state_11127){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11127);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11134){if((e11134 instanceof Object))
{var ex__6717__auto__ = e11134;var statearr_11135_11139 = state_11127;(statearr_11135_11139[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11127);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11140 = state_11127;
state_11127 = G__11140;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11127){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__,pred__11102,expr__11103,error_code,res))
})();var state__6730__auto__ = (function (){var statearr_11136 = f__6729__auto__.call(null);(statearr_11136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__,pred__11102,expr__11103,error_code,res))
);
return c__6728__auto__;
}
});
cmd.lib.api_url = (function api_url(suffix){return [cljs.core.str("https://api.github.com"),cljs.core.str(suffix)].join('');
});
cmd.lib.api_url_anticache = (function api_url_anticache(suffix){return [cljs.core.str("https://api.github.com"),cljs.core.str(suffix),cljs.core.str("?anticache="),cljs.core.str(Math.random())].join('');
});
cmd.lib.GET = (function GET(url,auth_param){var ch = cljs.core.async.chan.call(null,1);cmd.lib.active_PLUS_1.call(null);
goog.net.XhrIo.send(cmd.lib.api_url_anticache.call(null,url),cljs.core.partial.call(null,cmd.lib.resp_handler,ch),"GET",null,auth_param);
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