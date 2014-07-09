// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.cookies');
goog.require('om.dom');
goog.require('goog.net.XhrIo');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('om.dom');
goog.require('goog.events.KeyHandler');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.net.cookies');
goog.require('goog.events.KeyCodes');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_fn_STAR_ = (function (p1__9310_SHARP_){return console.log(p1__9310_SHARP_);
});
cmd.ui.motd = "# Welcome to CMD\n\nIt is an explosive mixture of ***ClojureScript, Rx, React/Om, core.async, github CORS api, ace, pagedown, web worker(s)*** crafted together to give you *the best* gist editing tool, ever.\nIt's currently an alfa-quality prototype, so do not expect to much.\n\n\nTo begin:\n\n- just provide your Github username and a *secret*,\n- or select a gist from the list above if you are logged in already :-)\n\n```\n(println \"Heil Clojure!\")\n```\n";
cmd.ui.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview-output","preview-output",4188357144),null], null));
cmd.ui.AppBus = cljs.core.async.chan.call(null,1);
cmd.ui.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.ui.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,(function() { 
var G__9311__delegate = function (_){return cljs.core.PersistentArrayMap.EMPTY;
};
var G__9311 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9311__delegate.call(this,_);};
G__9311.cljs$lang$maxFixedArity = 0;
G__9311.cljs$lang$applyTo = (function (arglist__9312){
var _ = cljs.core.seq(arglist__9312);
return G__9311__delegate(_);
});
G__9311.cljs$core$IFn$_invoke$arity$variadic = G__9311__delegate;
return G__9311;
})()
);
});
cmd.ui.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.ui.say = (function say(smth){return console.log(smth);
});
cmd.ui.html_BANG_ = (function html_BANG_(node,html){return node.innerHTML = html;
});
cmd.ui.join_gist_names = (function join_gist_names(file_keys){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," <*> ",file_keys));
});
cmd.ui.raw__GT_clj = (function raw__GT_clj(raw){var json = JSON.parse(raw);var clj = cljs.core.js__GT_clj.call(null,json);cmd.ui.say.call(null,json);
return clj;
});
cmd.ui.wmd__GT_html = (function wmd__GT_html(text){var worker = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"worker","worker",4526786288));var ch = cljs.core.async.chan.call(null,1);worker.addEventListener("message",((function (worker,ch){
return (function (e){var data = e.data;var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,data,worker,ch){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,data,worker,ch){
return (function (state_9335){var state_val_9336 = (state_9335[1]);if((state_val_9336 === 2))
{var inst_9332 = (state_9335[2]);var inst_9333 = cljs.core.async.close_BANG_.call(null,ch);var state_9335__$1 = (function (){var statearr_9337 = state_9335;(statearr_9337[7] = inst_9332);
return statearr_9337;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9335__$1,inst_9333);
} else
{if((state_val_9336 === 1))
{var inst_9329 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_9330 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9329,null));var state_9335__$1 = state_9335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9335__$1,2,ch,inst_9330);
} else
{return null;
}
}
});})(c__6291__auto__,data,worker,ch))
;return ((function (switch__6276__auto__,c__6291__auto__,data,worker,ch){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9341 = [null,null,null,null,null,null,null,null];(statearr_9341[0] = state_machine__6277__auto__);
(statearr_9341[1] = 1);
return statearr_9341;
});
var state_machine__6277__auto____1 = (function (state_9335){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9335);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9342){if((e9342 instanceof Object))
{var ex__6280__auto__ = e9342;var statearr_9343_9345 = state_9335;(statearr_9343_9345[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9346 = state_9335;
state_9335 = G__9346;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9335){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,data,worker,ch))
})();var state__6293__auto__ = (function (){var statearr_9344 = f__6292__auto__.call(null);(statearr_9344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,data,worker,ch))
);
return c__6291__auto__;
});})(worker,ch))
,false);
worker.postMessage(text);
return ch;
});
cmd.ui.md__GT_html = (function md__GT_html(text){var converter = (new Markdown.Converter());return converter.makeHtml(text);
});
cmd.ui.html__GT_react = (function html__GT_react(html){return html;
});
cmd.ui.setcookie = (function setcookie(name,value){return goog.net.cookies.set(name,value,-1);
});
goog.exportSymbol('cmd.ui.setcookie', cmd.ui.setcookie);
cmd.ui.getcookie = (function getcookie(name){return goog.net.cookies.get(name);
});
goog.exportSymbol('cmd.ui.getcookie', cmd.ui.getcookie);
cmd.ui.process = (function process__$1(md,cb){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9388){var state_val_9389 = (state_9388[1]);if((state_val_9389 === 5))
{var inst_9383 = cb.call(null,"<Error>");var state_9388__$1 = state_9388;var statearr_9390_9403 = state_9388__$1;(statearr_9390_9403[2] = inst_9383);
(statearr_9390_9403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9389 === 4))
{var inst_9380 = (state_9388[7]);var inst_9381 = cb.call(null,inst_9380);var state_9388__$1 = state_9388;var statearr_9391_9404 = state_9388__$1;(statearr_9391_9404[2] = inst_9381);
(statearr_9391_9404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9389 === 3))
{var inst_9386 = (state_9388[2]);var state_9388__$1 = state_9388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9388__$1,inst_9386);
} else
{if((state_val_9389 === 2))
{var inst_9378 = (state_9388[2]);var inst_9379 = cljs.core.nth.call(null,inst_9378,0,null);var inst_9380 = cljs.core.nth.call(null,inst_9378,1,null);var state_9388__$1 = (function (){var statearr_9392 = state_9388;(statearr_9392[7] = inst_9380);
return statearr_9392;
})();var G__9393_9405 = inst_9379;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9393_9405))
{var statearr_9394_9406 = state_9388__$1;(statearr_9394_9406[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9393_9405))
{var statearr_9395_9407 = state_9388__$1;(statearr_9395_9407[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9379)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9389 === 1))
{var inst_9376 = cmd.ui.wmd__GT_html.call(null,md);var state_9388__$1 = state_9388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9388__$1,2,inst_9376);
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
var state_machine__6277__auto____0 = (function (){var statearr_9399 = [null,null,null,null,null,null,null,null];(statearr_9399[0] = state_machine__6277__auto__);
(statearr_9399[1] = 1);
return statearr_9399;
});
var state_machine__6277__auto____1 = (function (state_9388){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9388);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9400){if((e9400 instanceof Object))
{var ex__6280__auto__ = e9400;var statearr_9401_9408 = state_9388;(statearr_9401_9408[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9388);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9409 = state_9388;
state_9388 = G__9409;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9388){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9402 = f__6292__auto__.call(null);(statearr_9402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.auth_param = (function auth_param(username,auth_token){var obj9413 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj9413;
});
cmd.ui.resp_handler = (function resp_handler(ch,event){var error_code = event.target.getLastErrorCode();var res = event.target.getResponseText();var pred__9449 = cljs.core._EQ_;var expr__9450 = error_code;if(cljs.core.truth_(pred__9449.call(null,goog.net.ErrorCode.NO_ERROR,expr__9450)))
{var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,pred__9449,expr__9450,error_code,res){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,pred__9449,expr__9450,error_code,res){
return (function (state_9458){var state_val_9459 = (state_9458[1]);if((state_val_9459 === 2))
{var inst_9455 = (state_9458[2]);var inst_9456 = cljs.core.async.close_BANG_.call(null,ch);var state_9458__$1 = (function (){var statearr_9460 = state_9458;(statearr_9460[7] = inst_9455);
return statearr_9460;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9458__$1,inst_9456);
} else
{if((state_val_9459 === 1))
{var inst_9452 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_9453 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9452,null));var state_9458__$1 = state_9458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9458__$1,2,ch,inst_9453);
} else
{return null;
}
}
});})(c__6291__auto__,pred__9449,expr__9450,error_code,res))
;return ((function (switch__6276__auto__,c__6291__auto__,pred__9449,expr__9450,error_code,res){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9464 = [null,null,null,null,null,null,null,null];(statearr_9464[0] = state_machine__6277__auto__);
(statearr_9464[1] = 1);
return statearr_9464;
});
var state_machine__6277__auto____1 = (function (state_9458){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9458);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9465){if((e9465 instanceof Object))
{var ex__6280__auto__ = e9465;var statearr_9466_9484 = state_9458;(statearr_9466_9484[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9458);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9485 = state_9458;
state_9458 = G__9485;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9458){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,pred__9449,expr__9450,error_code,res))
})();var state__6293__auto__ = (function (){var statearr_9467 = f__6292__auto__.call(null);(statearr_9467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,pred__9449,expr__9450,error_code,res))
);
return c__6291__auto__;
} else
{var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,pred__9449,expr__9450,error_code,res){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,pred__9449,expr__9450,error_code,res){
return (function (state_9474){var state_val_9475 = (state_9474[1]);if((state_val_9475 === 2))
{var inst_9471 = (state_9474[2]);var inst_9472 = cljs.core.async.close_BANG_.call(null,ch);var state_9474__$1 = (function (){var statearr_9476 = state_9474;(statearr_9476[7] = inst_9471);
return statearr_9476;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9474__$1,inst_9472);
} else
{if((state_val_9475 === 1))
{var inst_9468 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_9469 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9468,null));var state_9474__$1 = state_9474;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9474__$1,2,ch,inst_9469);
} else
{return null;
}
}
});})(c__6291__auto__,pred__9449,expr__9450,error_code,res))
;return ((function (switch__6276__auto__,c__6291__auto__,pred__9449,expr__9450,error_code,res){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9480 = [null,null,null,null,null,null,null,null];(statearr_9480[0] = state_machine__6277__auto__);
(statearr_9480[1] = 1);
return statearr_9480;
});
var state_machine__6277__auto____1 = (function (state_9474){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9474);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9481){if((e9481 instanceof Object))
{var ex__6280__auto__ = e9481;var statearr_9482_9486 = state_9474;(statearr_9482_9486[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9474);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9487 = state_9474;
state_9474 = G__9487;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9474){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,pred__9449,expr__9450,error_code,res))
})();var state__6293__auto__ = (function (){var statearr_9483 = f__6292__auto__.call(null);(statearr_9483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,pred__9449,expr__9450,error_code,res))
);
return c__6291__auto__;
}
});
cmd.ui.api_url = (function api_url(suffix){return [cljs.core.str("https://api.github.com"),cljs.core.str(suffix)].join('');
});
cmd.ui.GET = (function GET(url,auth_param){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(cmd.ui.api_url.call(null,url),cljs.core.partial.call(null,cmd.ui.resp_handler,ch),"GET",null,auth_param);
return ch;
});
cmd.ui.POST = (function POST(url,data,auth_param){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(cmd.ui.api_url.call(null,url),cljs.core.partial.call(null,cmd.ui.resp_handler,ch),"POST",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),auth_param);
return ch;
});
cmd.ui.PATCH = (function PATCH(url,data,auth_param){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(cmd.ui.api_url.call(null,url),cljs.core.partial.call(null,cmd.ui.resp_handler,ch),"PATCH",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),auth_param);
return ch;
});
cmd.ui.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__9488_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__9488_SHARP_.call(null,"id"));
}),cmd.ui.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.ui.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.ui.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.ui.load_gists = (function load_gists(){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9540){var state_val_9541 = (state_9540[1]);if((state_val_9541 === 5))
{var inst_9532 = (state_9540[7]);var inst_9535 = cmd.ui.handle_io_error.call(null,inst_9532);var state_9540__$1 = state_9540;var statearr_9542_9555 = state_9540__$1;(statearr_9542_9555[2] = inst_9535);
(statearr_9542_9555[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 4))
{var inst_9532 = (state_9540[7]);var inst_9533 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_9532);var state_9540__$1 = state_9540;var statearr_9543_9556 = state_9540__$1;(statearr_9543_9556[2] = inst_9533);
(statearr_9543_9556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 3))
{var inst_9538 = (state_9540[2]);var state_9540__$1 = state_9540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9540__$1,inst_9538);
} else
{if((state_val_9541 === 2))
{var inst_9529 = (state_9540[2]);var inst_9530 = cljs.core.nth.call(null,inst_9529,0,null);var inst_9531 = cljs.core.nth.call(null,inst_9529,1,null);var inst_9532 = cmd.ui.raw__GT_clj.call(null,inst_9531);var state_9540__$1 = (function (){var statearr_9544 = state_9540;(statearr_9544[7] = inst_9532);
return statearr_9544;
})();var G__9545_9557 = inst_9530;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9545_9557))
{var statearr_9546_9558 = state_9540__$1;(statearr_9546_9558[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9545_9557))
{var statearr_9547_9559 = state_9540__$1;(statearr_9547_9559[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9530)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 1))
{var inst_9523 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9524 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9525 = [cljs.core.str("/users/"),cljs.core.str(inst_9523),cljs.core.str("/gists")].join('');var inst_9526 = cmd.ui.auth_param.call(null,inst_9523,inst_9524);var inst_9527 = cmd.ui.GET.call(null,inst_9525,inst_9526);var state_9540__$1 = state_9540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9540__$1,2,inst_9527);
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
var state_machine__6277__auto____0 = (function (){var statearr_9551 = [null,null,null,null,null,null,null,null];(statearr_9551[0] = state_machine__6277__auto__);
(statearr_9551[1] = 1);
return statearr_9551;
});
var state_machine__6277__auto____1 = (function (state_9540){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9552){if((e9552 instanceof Object))
{var ex__6280__auto__ = e9552;var statearr_9553_9560 = state_9540;(statearr_9553_9560[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9561 = state_9540;
state_9540 = G__9561;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9540){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9554 = f__6292__auto__.call(null);(statearr_9554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.load_gist = (function load_gist(id){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9636){var state_val_9637 = (state_9636[1]);if((state_val_9637 === 6))
{var inst_9616 = (state_9636[7]);var inst_9630 = cmd.ui.raw__GT_clj.call(null,inst_9616);var inst_9631 = cmd.ui.handle_io_error.call(null,inst_9630);var state_9636__$1 = state_9636;var statearr_9638_9652 = state_9636__$1;(statearr_9638_9652[2] = inst_9631);
(statearr_9638_9652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9637 === 5))
{var inst_9628 = (state_9636[2]);var state_9636__$1 = state_9636;var statearr_9639_9653 = state_9636__$1;(statearr_9639_9653[2] = inst_9628);
(statearr_9639_9653[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9637 === 4))
{var inst_9616 = (state_9636[7]);var inst_9618 = cmd.ui.raw__GT_clj.call(null,inst_9616);var inst_9619 = inst_9618.call(null,"files");var inst_9620 = cljs.core.first.call(null,inst_9619);var inst_9621 = cljs.core.nth.call(null,inst_9620,0,null);var inst_9622 = cljs.core.nth.call(null,inst_9620,1,null);var inst_9623 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9621);var inst_9624 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9618);var inst_9625 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9626 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9625,null));var state_9636__$1 = (function (){var statearr_9640 = state_9636;(statearr_9640[8] = inst_9622);
(statearr_9640[9] = inst_9623);
(statearr_9640[10] = inst_9624);
return statearr_9640;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9636__$1,5,cmd.ui.AppBus,inst_9626);
} else
{if((state_val_9637 === 3))
{var inst_9634 = (state_9636[2]);var state_9636__$1 = state_9636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9636__$1,inst_9634);
} else
{if((state_val_9637 === 2))
{var inst_9614 = (state_9636[2]);var inst_9615 = cljs.core.nth.call(null,inst_9614,0,null);var inst_9616 = cljs.core.nth.call(null,inst_9614,1,null);var state_9636__$1 = (function (){var statearr_9641 = state_9636;(statearr_9641[7] = inst_9616);
return statearr_9641;
})();var G__9642_9654 = inst_9615;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9642_9654))
{var statearr_9643_9655 = state_9636__$1;(statearr_9643_9655[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9642_9654))
{var statearr_9644_9656 = state_9636__$1;(statearr_9644_9656[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9615)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9637 === 1))
{var inst_9608 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9609 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9610 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9611 = cmd.ui.auth_param.call(null,inst_9609,inst_9610);var inst_9612 = cmd.ui.GET.call(null,inst_9608,inst_9611);var state_9636__$1 = state_9636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9636__$1,2,inst_9612);
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
var state_machine__6277__auto____0 = (function (){var statearr_9648 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9648[0] = state_machine__6277__auto__);
(statearr_9648[1] = 1);
return statearr_9648;
});
var state_machine__6277__auto____1 = (function (state_9636){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9636);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9649){if((e9649 instanceof Object))
{var ex__6280__auto__ = e9649;var statearr_9650_9657 = state_9636;(statearr_9650_9657[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9636);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9658 = state_9636;
state_9636 = G__9658;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9636){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9651 = f__6292__auto__.call(null);(statearr_9651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.save_gist = (function save_gist(gist_id,new_content){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9708){var state_val_9709 = (state_9708[1]);if((state_val_9709 === 5))
{var inst_9701 = (state_9708[7]);var inst_9703 = cmd.ui.handle_io_error.call(null,inst_9701);var state_9708__$1 = state_9708;var statearr_9710_9723 = state_9708__$1;(statearr_9710_9723[2] = inst_9703);
(statearr_9710_9723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9709 === 4))
{var inst_9701 = (state_9708[7]);var state_9708__$1 = state_9708;var statearr_9711_9724 = state_9708__$1;(statearr_9711_9724[2] = inst_9701);
(statearr_9711_9724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9709 === 3))
{var inst_9706 = (state_9708[2]);var state_9708__$1 = state_9708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9708__$1,inst_9706);
} else
{if((state_val_9709 === 2))
{var inst_9698 = (state_9708[2]);var inst_9699 = cljs.core.nth.call(null,inst_9698,0,null);var inst_9700 = cljs.core.nth.call(null,inst_9698,1,null);var inst_9701 = cmd.ui.raw__GT_clj.call(null,inst_9700);var state_9708__$1 = (function (){var statearr_9712 = state_9708;(statearr_9712[7] = inst_9701);
return statearr_9712;
})();var G__9713_9725 = inst_9699;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9713_9725))
{var statearr_9714_9726 = state_9708__$1;(statearr_9714_9726[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9713_9725))
{var statearr_9715_9727 = state_9708__$1;(statearr_9715_9727[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9699)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9709 === 1))
{var inst_9692 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9693 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9694 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9695 = cmd.ui.auth_param.call(null,inst_9693,inst_9694);var inst_9696 = cmd.ui.PATCH.call(null,inst_9692,new_content,inst_9695);var state_9708__$1 = state_9708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9708__$1,2,inst_9696);
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
var state_machine__6277__auto____0 = (function (){var statearr_9719 = [null,null,null,null,null,null,null,null];(statearr_9719[0] = state_machine__6277__auto__);
(statearr_9719[1] = 1);
return statearr_9719;
});
var state_machine__6277__auto____1 = (function (state_9708){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9708);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9720){if((e9720 instanceof Object))
{var ex__6280__auto__ = e9720;var statearr_9721_9728 = state_9708;(statearr_9721_9728[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9720;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9729 = state_9708;
state_9708 = G__9729;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9708){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9722 = f__6292__auto__.call(null);(statearr_9722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.preview_container = document.getElementById("preview-container");
cmd.ui.ace_set_value = (function ace_set_value(content){return cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9731 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9731,0,null);var first_file = cljs.core.nth.call(null,vec__9731,1,null);var content = first_file.call(null,"content");return cmd.ui.ace_set_value.call(null,content);
});
cmd.ui.reset_input = (function reset_input(){return cmd.ui.ace_set_value.call(null,cmd.ui.motd);
});
cmd.ui.set_preview = (function set_preview(){var ace = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var ace_value = ace.getSession().getValue();return cmd.ui.process.call(null,ace_value,((function (ace,ace_value){
return (function (p1__9732_SHARP_){return cmd.ui.html_BANG_.call(null,cmd.ui.preview,p1__9732_SHARP_);
});})(ace,ace_value))
);
});
cmd.ui.handle_pull = (function handle_pull(_){return cmd.ui.load_gist.call(null,cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var gist_id = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043));var file_name = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var new_content = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);var result = cmd.ui.save_gist.call(null,gist_id,new_content);return cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),result);
});
cmd.ui.handle_logout = (function handle_logout(_){cmd.ui.say.call(null,"Logout");
cmd.ui.reset_state.call(null,cmd.ui.state);
cmd.ui.setcookie.call(null,"username","");
cmd.ui.setcookie.call(null,"auth-token","");
var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9752){var state_val_9753 = (state_9752[1]);if((state_val_9753 === 2))
{var inst_9750 = (state_9752[2]);var state_9752__$1 = state_9752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9752__$1,inst_9750);
} else
{if((state_val_9753 === 1))
{var inst_9747 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_9748 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9747,null));var state_9752__$1 = state_9752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9752__$1,2,cmd.ui.AppBus,inst_9748);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9757 = [null,null,null,null,null,null,null];(statearr_9757[0] = state_machine__6277__auto__);
(statearr_9757[1] = 1);
return statearr_9757;
});
var state_machine__6277__auto____1 = (function (state_9752){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9758){if((e9758 instanceof Object))
{var ex__6280__auto__ = e9758;var statearr_9759_9761 = state_9752;(statearr_9759_9761[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9752);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9762 = state_9752;
state_9752 = G__9762;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9752){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9760 = f__6292__auto__.call(null);(statearr_9760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.handle_select = (function handle_select(e){var selected_id = e.target.value;cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),selected_id);
return cmd.ui.load_gist.call(null,selected_id);
});
cmd.ui.logged_in = (function logged_in(username,auth_token){cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792),username);
cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430),auth_token);
cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),true);
cmd.ui.setcookie.call(null,"username",username);
cmd.ui.setcookie.call(null,"auth-token",auth_token);
var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9782){var state_val_9783 = (state_9782[1]);if((state_val_9783 === 2))
{var inst_9780 = (state_9782[2]);var state_9782__$1 = state_9782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9782__$1,inst_9780);
} else
{if((state_val_9783 === 1))
{var inst_9777 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9778 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9777,null));var state_9782__$1 = state_9782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9782__$1,2,cmd.ui.AppBus,inst_9778);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9787 = [null,null,null,null,null,null,null];(statearr_9787[0] = state_machine__6277__auto__);
(statearr_9787[1] = 1);
return statearr_9787;
});
var state_machine__6277__auto____1 = (function (state_9782){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9782);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9788){if((e9788 instanceof Object))
{var ex__6280__auto__ = e9788;var statearr_9789_9791 = state_9782;(statearr_9789_9791[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9792 = state_9782;
state_9782 = G__9792;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9782){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9790 = f__6292__auto__.call(null);(statearr_9790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.unauthorized = (function unauthorized(resp){var error_msg = cmd.ui.raw__GT_clj.call(null,resp);cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.ui.say.call(null,[cljs.core.str("Auth Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.ui.authenticate = (function authenticate(username,auth_token){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9838){var state_val_9839 = (state_9838[1]);if((state_val_9839 === 5))
{var inst_9830 = (state_9838[7]);var inst_9833 = cmd.ui.unauthorized.call(null,inst_9830);var state_9838__$1 = state_9838;var statearr_9840_9853 = state_9838__$1;(statearr_9840_9853[2] = inst_9833);
(statearr_9840_9853[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9839 === 4))
{var inst_9831 = cmd.ui.logged_in.call(null,username,auth_token);var state_9838__$1 = state_9838;var statearr_9841_9854 = state_9838__$1;(statearr_9841_9854[2] = inst_9831);
(statearr_9841_9854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9839 === 3))
{var inst_9836 = (state_9838[2]);var state_9838__$1 = state_9838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9838__$1,inst_9836);
} else
{if((state_val_9839 === 2))
{var inst_9828 = (state_9838[2]);var inst_9829 = cljs.core.nth.call(null,inst_9828,0,null);var inst_9830 = cljs.core.nth.call(null,inst_9828,1,null);var state_9838__$1 = (function (){var statearr_9842 = state_9838;(statearr_9842[7] = inst_9830);
return statearr_9842;
})();var G__9843_9855 = inst_9829;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9843_9855))
{var statearr_9844_9856 = state_9838__$1;(statearr_9844_9856[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9843_9855))
{var statearr_9845_9857 = state_9838__$1;(statearr_9845_9857[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9829)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9839 === 1))
{var inst_9824 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9825 = cmd.ui.auth_param.call(null,username,auth_token);var inst_9826 = cmd.ui.GET.call(null,inst_9824,inst_9825);var state_9838__$1 = state_9838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9838__$1,2,inst_9826);
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
var state_machine__6277__auto____0 = (function (){var statearr_9849 = [null,null,null,null,null,null,null,null];(statearr_9849[0] = state_machine__6277__auto__);
(statearr_9849[1] = 1);
return statearr_9849;
});
var state_machine__6277__auto____1 = (function (state_9838){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9838);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9850){if((e9850 instanceof Object))
{var ex__6280__auto__ = e9850;var statearr_9851_9858 = state_9838;(statearr_9851_9858[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9859 = state_9838;
state_9838 = G__9859;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9838){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9852 = f__6292__auto__.call(null);(statearr_9852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.handle_auth = (function handle_auth(e){var username = document.getElementById("username").value;var auth_token = document.getElementById("auth-token").value;return cmd.ui.authenticate.call(null,username,auth_token);
});
cmd.ui.authenticated_om_QMARK_ = (function authenticated_om_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.ui.authenticated_QMARK_ = (function authenticated_QMARK_(state){return cmd.ui.get_state.call(null,state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.ui.error_set_QMARK_ = (function error_set_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"error","error",1110689146));
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t9863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9863 = (function (owner,state,toolbar,meta9864){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta9864 = meta9864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9863.cljs$lang$type = true;
cmd.ui.t9863.cljs$lang$ctorStr = "cmd.ui/t9863";
cmd.ui.t9863.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t9863");
});
cmd.ui.t9863.prototype.om$core$IRender$ = true;
cmd.ui.t9863.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cmd.ui.authenticated_om_QMARK_.call(null,self__.state)))
{return React.DOM.div(null,React.DOM.label({"className": "ios7"},"SELECT_G!ST: "),React.DOM.div({"id": "gist-list"},cljs.core.apply.call(null,om.dom.select,{"onChange": cmd.ui.handle_select, "className": "hello"},cljs.core.map.call(null,((function (___$1){
return (function (gist){return om.dom.option.call(null,{"value": gist.call(null,"id")},cmd.ui.join_gist_names.call(null,cljs.core.keys.call(null,gist.call(null,"files"))));
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.state)))),(function (){var current_gist = self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var href = ((cljs.core._EQ_.call(null,current_gist,null))?null:current_gist.call(null,"html_url"));cmd.ui.say.call(null,current_gist);
cmd.ui.say.call(null,href);
if(!(cljs.core._EQ_.call(null,href,null)))
{return React.DOM.a({"href": href, "target": "_blank", "id": "view-orig"},"VIEW!ORIGINAL");
} else
{return null;
}
})(),React.DOM.button({"onClick": cmd.ui.handle_pull, "id": "pull"},">>PULL"),React.DOM.button({"onClick": cmd.ui.handle_push, "id": "push"},"PUSH>>"),React.DOM.button({"onClick": cmd.ui.handle_logout, "id": "log-out"},"LOG^OUT"));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return React.DOM.div(null,React.DOM.label(null,"USERN@ME: "),om.dom.input.call(null,{"id": "username", "type": "text"}),React.DOM.label(null,"S#CRET: "),om.dom.input.call(null,{"id": "auth-token", "type": "text"}),React.DOM.button({"onClick": cmd.ui.handle_auth, "id": "go"},"LOG>>IN"),(cljs.core.truth_(cmd.ui.error_set_QMARK_.call(null,self__.state))?React.DOM.span({"id": "error-msg"}):[cljs.core.str(self__.state.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))].join('')));
} else
{return null;
}
}
});
cmd.ui.t9863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9865){var self__ = this;
var _9865__$1 = this;return self__.meta9864;
});
cmd.ui.t9863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9865,meta9864__$1){var self__ = this;
var _9865__$1 = this;return (new cmd.ui.t9863(self__.owner,self__.state,self__.toolbar,meta9864__$1));
});
cmd.ui.__GT_t9863 = (function __GT_t9863(owner__$1,state__$1,toolbar__$1,meta9864){return (new cmd.ui.t9863(owner__$1,state__$1,toolbar__$1,meta9864));
});
}
return (new cmd.ui.t9863(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.setup_editor_listeners = (function setup_editor_listeners(){var session = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession();Rx.Observable.create(((function (session){
return (function (observer){return session.on("changeScrollTop",((function (session){
return (function (p1__9866_SHARP_){return observer.onNext(p1__9866_SHARP_);
});})(session))
);
});})(session))
).throttle(15).subscribe(((function (session){
return (function (p1__9867_SHARP_){return cmd.ui.preview_container.scrollTop = p1__9867_SHARP_;
});})(session))
);
Rx.Observable.create(((function (session){
return (function (observer){return session.on("change",((function (session){
return (function (){return observer.onNext();
});})(session))
);
});})(session))
).throttle(300).subscribe(((function (session){
return (function (){return cmd.ui.set_preview.call(null);
});})(session))
);
return Rx.Observable.fromEvent(cmd.ui.preview_container,"scroll").throttle(15).subscribe(((function (session){
return (function (){return session.setScrollTop(cmd.ui.preview_container.scrollTop);
});})(session))
);
});
cmd.ui.setup_ace = (function setup_ace(){var editor = ace.edit("input");var session = editor.getSession();cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629),editor);
session.setMode("ace/mode/markdown");
return session.setUseWrapMode(true);
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9942){var state_val_9943 = (state_9942[1]);if((state_val_9943 === 9))
{var inst_9937 = (state_9942[2]);var inst_9923 = inst_9937;var state_9942__$1 = (function (){var statearr_9944 = state_9942;(statearr_9944[7] = inst_9923);
return statearr_9944;
})();var statearr_9945_9964 = state_9942__$1;(statearr_9945_9964[2] = null);
(statearr_9945_9964[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9943 === 8))
{var inst_9932 = cmd.ui.reset_input.call(null);var state_9942__$1 = state_9942;var statearr_9946_9965 = state_9942__$1;(statearr_9946_9965[2] = inst_9932);
(statearr_9946_9965[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9943 === 7))
{var inst_9927 = (state_9942[8]);var inst_9930 = cmd.ui.set_input.call(null,inst_9927);var state_9942__$1 = state_9942;var statearr_9947_9966 = state_9942__$1;(statearr_9947_9966[2] = inst_9930);
(statearr_9947_9966[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9943 === 6))
{var inst_9928 = cmd.ui.load_gists.call(null);var state_9942__$1 = state_9942;var statearr_9948_9967 = state_9942__$1;(statearr_9948_9967[2] = inst_9928);
(statearr_9948_9967[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9943 === 5))
{var inst_9935 = (state_9942[2]);var state_9942__$1 = (function (){var statearr_9949 = state_9942;(statearr_9949[9] = inst_9935);
return statearr_9949;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9942__$1,9,app_bus);
} else
{if((state_val_9943 === 4))
{var inst_9940 = (state_9942[2]);var state_9942__$1 = state_9942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9942__$1,inst_9940);
} else
{if((state_val_9943 === 3))
{var inst_9923 = (state_9942[7]);var inst_9926 = cljs.core.nth.call(null,inst_9923,0,null);var inst_9927 = cljs.core.nth.call(null,inst_9923,1,null);var state_9942__$1 = (function (){var statearr_9950 = state_9942;(statearr_9950[8] = inst_9927);
return statearr_9950;
})();var G__9951_9968 = inst_9926;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__9951_9968))
{var statearr_9952_9969 = state_9942__$1;(statearr_9952_9969[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9951_9968))
{var statearr_9953_9970 = state_9942__$1;(statearr_9953_9970[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9951_9968))
{var statearr_9954_9971 = state_9942__$1;(statearr_9954_9971[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9926)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9943 === 2))
{var inst_9920 = (state_9942[2]);var inst_9921 = cljs.core.nth.call(null,inst_9920,0,null);var inst_9922 = cljs.core.nth.call(null,inst_9920,1,null);var inst_9923 = inst_9920;var state_9942__$1 = (function (){var statearr_9955 = state_9942;(statearr_9955[7] = inst_9923);
(statearr_9955[10] = inst_9921);
(statearr_9955[11] = inst_9922);
return statearr_9955;
})();var statearr_9956_9972 = state_9942__$1;(statearr_9956_9972[2] = null);
(statearr_9956_9972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9943 === 1))
{var state_9942__$1 = state_9942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9942__$1,2,app_bus);
} else
{return null;
}
}
}
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
var state_machine__6277__auto____0 = (function (){var statearr_9960 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9960[0] = state_machine__6277__auto__);
(statearr_9960[1] = 1);
return statearr_9960;
});
var state_machine__6277__auto____1 = (function (state_9942){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9942);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9961){if((e9961 instanceof Object))
{var ex__6280__auto__ = e9961;var statearr_9962_9973 = state_9942;(statearr_9962_9973[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9942);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9974 = state_9942;
state_9942 = G__9974;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9942){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9963 = f__6292__auto__.call(null);(statearr_9963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.ui.getcookie.call(null,"username");var auth_token = cmd.ui.getcookie.call(null,"auth-token");var last_opened_gist_id = cmd.ui.getcookie.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
cmd.ui.setup_ace.call(null);
cmd.ui.setup_editor_listeners.call(null);
cmd.ui.authenticate.call(null,username,auth_token);
cmd.ui.render_toolbar.call(null,state);
cmd.ui.reset_input.call(null);
var worker = (new Worker("resources/public/js/worker.js"));return cmd.ui.set_state.call(null,state,new cljs.core.Keyword(null,"worker","worker",4526786288),worker);
});
cmd.ui.main.call(null,cmd.ui.state,cmd.ui.AppBus);

//# sourceMappingURL=ui.js.map