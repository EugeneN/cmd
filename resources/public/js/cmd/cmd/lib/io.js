// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.lib.io');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
cmd.lib.io.auth_param_strict = (function auth_param_strict(username,auth_token){var obj8708 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj8708;
});
cmd.lib.io.auth_param_anon = (function auth_param_anon(){var obj8712 = {"Content-Type":"application/json"};return obj8712;
});
cmd.lib.io.auth_param_fallback = (function auth_param_fallback(username,auth_token){if((auth_token == null))
{return cmd.lib.io.auth_param_anon.call(null);
} else
{return cmd.lib.io.auth_param_strict.call(null,username,auth_token);
}
});
cmd.lib.io.active_requests = cljs.core.atom.call(null,0);
cmd.lib.io.active_PLUS_1 = (function active_PLUS_1(){return cljs.core.swap_BANG_.call(null,cmd.lib.io.active_requests,cljs.core.inc);
});
cmd.lib.io.active_1 = (function active_1(){return cljs.core.swap_BANG_.call(null,cmd.lib.io.active_requests,cljs.core.dec);
});
cmd.lib.io.resp_handler = (function resp_handler(ch,event){var error_code = event.target.getLastErrorCode();var res = event.target.getResponseText();cmd.lib.io.active_1.call(null);
var pred__8748 = cljs.core._EQ_;var expr__8749 = error_code;if(cljs.core.truth_(pred__8748.call(null,goog.net.ErrorCode.NO_ERROR,expr__8749)))
{var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,pred__8748,expr__8749,error_code,res){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,pred__8748,expr__8749,error_code,res){
return (function (state_8757){var state_val_8758 = (state_8757[1]);if((state_val_8758 === 2))
{var inst_8754 = (state_8757[2]);var inst_8755 = cljs.core.async.close_BANG_.call(null,ch);var state_8757__$1 = (function (){var statearr_8759 = state_8757;(statearr_8759[7] = inst_8754);
return statearr_8759;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8757__$1,inst_8755);
} else
{if((state_val_8758 === 1))
{var inst_8751 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_8752 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8751,null));var state_8757__$1 = state_8757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8757__$1,2,ch,inst_8752);
} else
{return null;
}
}
});})(c__5608__auto__,pred__8748,expr__8749,error_code,res))
;return ((function (switch__5593__auto__,c__5608__auto__,pred__8748,expr__8749,error_code,res){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8763 = [null,null,null,null,null,null,null,null];(statearr_8763[0] = state_machine__5594__auto__);
(statearr_8763[1] = 1);
return statearr_8763;
});
var state_machine__5594__auto____1 = (function (state_8757){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8757);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8764){if((e8764 instanceof Object))
{var ex__5597__auto__ = e8764;var statearr_8765_8783 = state_8757;(statearr_8765_8783[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8784 = state_8757;
state_8757 = G__8784;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8757){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,pred__8748,expr__8749,error_code,res))
})();var state__5610__auto__ = (function (){var statearr_8766 = f__5609__auto__.call(null);(statearr_8766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__,pred__8748,expr__8749,error_code,res))
);
return c__5608__auto__;
} else
{var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,pred__8748,expr__8749,error_code,res){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,pred__8748,expr__8749,error_code,res){
return (function (state_8773){var state_val_8774 = (state_8773[1]);if((state_val_8774 === 2))
{var inst_8770 = (state_8773[2]);var inst_8771 = cljs.core.async.close_BANG_.call(null,ch);var state_8773__$1 = (function (){var statearr_8775 = state_8773;(statearr_8775[7] = inst_8770);
return statearr_8775;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8773__$1,inst_8771);
} else
{if((state_val_8774 === 1))
{var inst_8767 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_8768 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8767,null));var state_8773__$1 = state_8773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8773__$1,2,ch,inst_8768);
} else
{return null;
}
}
});})(c__5608__auto__,pred__8748,expr__8749,error_code,res))
;return ((function (switch__5593__auto__,c__5608__auto__,pred__8748,expr__8749,error_code,res){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8779 = [null,null,null,null,null,null,null,null];(statearr_8779[0] = state_machine__5594__auto__);
(statearr_8779[1] = 1);
return statearr_8779;
});
var state_machine__5594__auto____1 = (function (state_8773){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8780){if((e8780 instanceof Object))
{var ex__5597__auto__ = e8780;var statearr_8781_8785 = state_8773;(statearr_8781_8785[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8780;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8786 = state_8773;
state_8773 = G__8786;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8773){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,pred__8748,expr__8749,error_code,res))
})();var state__5610__auto__ = (function (){var statearr_8782 = f__5609__auto__.call(null);(statearr_8782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8782;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__,pred__8748,expr__8749,error_code,res))
);
return c__5608__auto__;
}
});
cmd.lib.io.api_url = (function api_url(suffix){return [cljs.core.str("https://api.github.com"),cljs.core.str(suffix)].join('');
});
cmd.lib.io.GET = (function GET(url,auth_param){var ch = cljs.core.async.chan.call(null,1);cmd.lib.io.active_PLUS_1.call(null);
goog.net.XhrIo.send(cmd.lib.io.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.io.resp_handler,ch),"GET",null,auth_param);
return ch;
});
cmd.lib.io.DELETE = (function DELETE(url,auth_param){var ch = cljs.core.async.chan.call(null,1);cmd.lib.io.active_PLUS_1.call(null);
goog.net.XhrIo.send(cmd.lib.io.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.io.resp_handler,ch),"DELETE",null,auth_param);
return ch;
});
cmd.lib.io.POST = (function POST(url,data,auth_param){var ch = cljs.core.async.chan.call(null,1);cmd.lib.io.active_PLUS_1.call(null);
goog.net.XhrIo.send(cmd.lib.io.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.io.resp_handler,ch),"POST",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),auth_param);
return ch;
});
cmd.lib.io.PATCH = (function PATCH(url,data,auth_param){var ch = cljs.core.async.chan.call(null,1);cmd.lib.io.active_PLUS_1.call(null);
goog.net.XhrIo.send(cmd.lib.io.api_url.call(null,url),cljs.core.partial.call(null,cmd.lib.io.resp_handler,ch),"PATCH",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),auth_param);
return ch;
});

//# sourceMappingURL=io.js.map