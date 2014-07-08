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
cmd.ui.say = (function say(smth){return console.log(smth);
});
cmd.ui.html_BANG_ = (function html_BANG_(node,html){return node.innerHTML = html;
});
cmd.ui.join_gist_names = (function join_gist_names(file_keys){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," <*> ",file_keys));
});
cmd.ui.raw__GT_clj = (function raw__GT_clj(raw){var json = JSON.parse(raw);var clj = cljs.core.js__GT_clj.call(null,json);cmd.ui.say.call(null,json);
return clj;
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
cmd.ui.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview-output","preview-output",4188357144),null], null));
cmd.ui.AppBus = cljs.core.async.chan.call(null,1);
cmd.ui.process = (function process__$1(md){var html = cmd.ui.md__GT_html.call(null,md);var preview_output = cmd.ui.html__GT_react.call(null,html);return preview_output;
});
cmd.ui.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.ui.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,(function() { 
var G__9280__delegate = function (_){return cljs.core.PersistentArrayMap.EMPTY;
};
var G__9280 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9280__delegate.call(this,_);};
G__9280.cljs$lang$maxFixedArity = 0;
G__9280.cljs$lang$applyTo = (function (arglist__9281){
var _ = cljs.core.seq(arglist__9281);
return G__9280__delegate(_);
});
G__9280.cljs$core$IFn$_invoke$arity$variadic = G__9280__delegate;
return G__9280;
})()
);
});
cmd.ui.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.ui.auth_param = (function auth_param(username,auth_token){var obj9285 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj9285;
});
cmd.ui.resp_handler = (function resp_handler(ch,event){var error_code = event.target.getLastErrorCode();var res = event.target.getResponseText();var pred__9321 = cljs.core._EQ_;var expr__9322 = error_code;if(cljs.core.truth_(pred__9321.call(null,goog.net.ErrorCode.NO_ERROR,expr__9322)))
{var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__,pred__9321,expr__9322,error_code,res){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__,pred__9321,expr__9322,error_code,res){
return (function (state_9330){var state_val_9331 = (state_9330[1]);if((state_val_9331 === 2))
{var inst_9327 = (state_9330[2]);var inst_9328 = cljs.core.async.close_BANG_.call(null,ch);var state_9330__$1 = (function (){var statearr_9332 = state_9330;(statearr_9332[7] = inst_9327);
return statearr_9332;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9330__$1,inst_9328);
} else
{if((state_val_9331 === 1))
{var inst_9324 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_9325 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9324,null));var state_9330__$1 = state_9330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9330__$1,2,ch,inst_9325);
} else
{return null;
}
}
});})(c__6261__auto__,pred__9321,expr__9322,error_code,res))
;return ((function (switch__6246__auto__,c__6261__auto__,pred__9321,expr__9322,error_code,res){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9336 = [null,null,null,null,null,null,null,null];(statearr_9336[0] = state_machine__6247__auto__);
(statearr_9336[1] = 1);
return statearr_9336;
});
var state_machine__6247__auto____1 = (function (state_9330){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9337){if((e9337 instanceof Object))
{var ex__6250__auto__ = e9337;var statearr_9338_9356 = state_9330;(statearr_9338_9356[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9330);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9357 = state_9330;
state_9330 = G__9357;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9330){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__,pred__9321,expr__9322,error_code,res))
})();var state__6263__auto__ = (function (){var statearr_9339 = f__6262__auto__.call(null);(statearr_9339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__,pred__9321,expr__9322,error_code,res))
);
return c__6261__auto__;
} else
{var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__,pred__9321,expr__9322,error_code,res){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__,pred__9321,expr__9322,error_code,res){
return (function (state_9346){var state_val_9347 = (state_9346[1]);if((state_val_9347 === 2))
{var inst_9343 = (state_9346[2]);var inst_9344 = cljs.core.async.close_BANG_.call(null,ch);var state_9346__$1 = (function (){var statearr_9348 = state_9346;(statearr_9348[7] = inst_9343);
return statearr_9348;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9346__$1,inst_9344);
} else
{if((state_val_9347 === 1))
{var inst_9340 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_9341 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9340,null));var state_9346__$1 = state_9346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9346__$1,2,ch,inst_9341);
} else
{return null;
}
}
});})(c__6261__auto__,pred__9321,expr__9322,error_code,res))
;return ((function (switch__6246__auto__,c__6261__auto__,pred__9321,expr__9322,error_code,res){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9352 = [null,null,null,null,null,null,null,null];(statearr_9352[0] = state_machine__6247__auto__);
(statearr_9352[1] = 1);
return statearr_9352;
});
var state_machine__6247__auto____1 = (function (state_9346){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9346);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9353){if((e9353 instanceof Object))
{var ex__6250__auto__ = e9353;var statearr_9354_9358 = state_9346;(statearr_9354_9358[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9346);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9359 = state_9346;
state_9346 = G__9359;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9346){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__,pred__9321,expr__9322,error_code,res))
})();var state__6263__auto__ = (function (){var statearr_9355 = f__6262__auto__.call(null);(statearr_9355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__,pred__9321,expr__9322,error_code,res))
);
return c__6261__auto__;
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
cmd.ui.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__9360_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__9360_SHARP_.call(null,"id"));
}),cmd.ui.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.ui.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.ui.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.ui.load_gists = (function load_gists(){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9412){var state_val_9413 = (state_9412[1]);if((state_val_9413 === 5))
{var inst_9404 = (state_9412[7]);var inst_9407 = cmd.ui.handle_io_error.call(null,inst_9404);var state_9412__$1 = state_9412;var statearr_9414_9427 = state_9412__$1;(statearr_9414_9427[2] = inst_9407);
(statearr_9414_9427[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9413 === 4))
{var inst_9404 = (state_9412[7]);var inst_9405 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_9404);var state_9412__$1 = state_9412;var statearr_9415_9428 = state_9412__$1;(statearr_9415_9428[2] = inst_9405);
(statearr_9415_9428[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9413 === 3))
{var inst_9410 = (state_9412[2]);var state_9412__$1 = state_9412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9412__$1,inst_9410);
} else
{if((state_val_9413 === 2))
{var inst_9401 = (state_9412[2]);var inst_9402 = cljs.core.nth.call(null,inst_9401,0,null);var inst_9403 = cljs.core.nth.call(null,inst_9401,1,null);var inst_9404 = cmd.ui.raw__GT_clj.call(null,inst_9403);var state_9412__$1 = (function (){var statearr_9416 = state_9412;(statearr_9416[7] = inst_9404);
return statearr_9416;
})();var G__9417_9429 = inst_9402;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9417_9429))
{var statearr_9418_9430 = state_9412__$1;(statearr_9418_9430[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9417_9429))
{var statearr_9419_9431 = state_9412__$1;(statearr_9419_9431[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9402)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9413 === 1))
{var inst_9395 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9396 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9397 = [cljs.core.str("/users/"),cljs.core.str(inst_9395),cljs.core.str("/gists")].join('');var inst_9398 = cmd.ui.auth_param.call(null,inst_9395,inst_9396);var inst_9399 = cmd.ui.GET.call(null,inst_9397,inst_9398);var state_9412__$1 = state_9412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9412__$1,2,inst_9399);
} else
{return null;
}
}
}
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9423 = [null,null,null,null,null,null,null,null];(statearr_9423[0] = state_machine__6247__auto__);
(statearr_9423[1] = 1);
return statearr_9423;
});
var state_machine__6247__auto____1 = (function (state_9412){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9412);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9424){if((e9424 instanceof Object))
{var ex__6250__auto__ = e9424;var statearr_9425_9432 = state_9412;(statearr_9425_9432[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9433 = state_9412;
state_9412 = G__9433;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9412){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9426 = f__6262__auto__.call(null);(statearr_9426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.load_gist = (function load_gist(id){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9508){var state_val_9509 = (state_9508[1]);if((state_val_9509 === 6))
{var inst_9488 = (state_9508[7]);var inst_9502 = cmd.ui.raw__GT_clj.call(null,inst_9488);var inst_9503 = cmd.ui.handle_io_error.call(null,inst_9502);var state_9508__$1 = state_9508;var statearr_9510_9524 = state_9508__$1;(statearr_9510_9524[2] = inst_9503);
(statearr_9510_9524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 5))
{var inst_9500 = (state_9508[2]);var state_9508__$1 = state_9508;var statearr_9511_9525 = state_9508__$1;(statearr_9511_9525[2] = inst_9500);
(statearr_9511_9525[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 4))
{var inst_9488 = (state_9508[7]);var inst_9490 = cmd.ui.raw__GT_clj.call(null,inst_9488);var inst_9491 = inst_9490.call(null,"files");var inst_9492 = cljs.core.first.call(null,inst_9491);var inst_9493 = cljs.core.nth.call(null,inst_9492,0,null);var inst_9494 = cljs.core.nth.call(null,inst_9492,1,null);var inst_9495 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9493);var inst_9496 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9490);var inst_9497 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9498 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9497,null));var state_9508__$1 = (function (){var statearr_9512 = state_9508;(statearr_9512[8] = inst_9495);
(statearr_9512[9] = inst_9494);
(statearr_9512[10] = inst_9496);
return statearr_9512;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9508__$1,5,cmd.ui.AppBus,inst_9498);
} else
{if((state_val_9509 === 3))
{var inst_9506 = (state_9508[2]);var state_9508__$1 = state_9508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9508__$1,inst_9506);
} else
{if((state_val_9509 === 2))
{var inst_9486 = (state_9508[2]);var inst_9487 = cljs.core.nth.call(null,inst_9486,0,null);var inst_9488 = cljs.core.nth.call(null,inst_9486,1,null);var state_9508__$1 = (function (){var statearr_9513 = state_9508;(statearr_9513[7] = inst_9488);
return statearr_9513;
})();var G__9514_9526 = inst_9487;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9514_9526))
{var statearr_9515_9527 = state_9508__$1;(statearr_9515_9527[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9514_9526))
{var statearr_9516_9528 = state_9508__$1;(statearr_9516_9528[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9487)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 1))
{var inst_9480 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9481 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9482 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9483 = cmd.ui.auth_param.call(null,inst_9481,inst_9482);var inst_9484 = cmd.ui.GET.call(null,inst_9480,inst_9483);var state_9508__$1 = state_9508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9508__$1,2,inst_9484);
} else
{return null;
}
}
}
}
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9520 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9520[0] = state_machine__6247__auto__);
(statearr_9520[1] = 1);
return statearr_9520;
});
var state_machine__6247__auto____1 = (function (state_9508){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9508);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9521){if((e9521 instanceof Object))
{var ex__6250__auto__ = e9521;var statearr_9522_9529 = state_9508;(statearr_9522_9529[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9530 = state_9508;
state_9508 = G__9530;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9508){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9523 = f__6262__auto__.call(null);(statearr_9523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.save_gist = (function save_gist(gist_id,new_content){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9580){var state_val_9581 = (state_9580[1]);if((state_val_9581 === 5))
{var inst_9573 = (state_9580[7]);var inst_9575 = cmd.ui.handle_io_error.call(null,inst_9573);var state_9580__$1 = state_9580;var statearr_9582_9595 = state_9580__$1;(statearr_9582_9595[2] = inst_9575);
(statearr_9582_9595[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9581 === 4))
{var inst_9573 = (state_9580[7]);var state_9580__$1 = state_9580;var statearr_9583_9596 = state_9580__$1;(statearr_9583_9596[2] = inst_9573);
(statearr_9583_9596[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9581 === 3))
{var inst_9578 = (state_9580[2]);var state_9580__$1 = state_9580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9580__$1,inst_9578);
} else
{if((state_val_9581 === 2))
{var inst_9570 = (state_9580[2]);var inst_9571 = cljs.core.nth.call(null,inst_9570,0,null);var inst_9572 = cljs.core.nth.call(null,inst_9570,1,null);var inst_9573 = cmd.ui.raw__GT_clj.call(null,inst_9572);var state_9580__$1 = (function (){var statearr_9584 = state_9580;(statearr_9584[7] = inst_9573);
return statearr_9584;
})();var G__9585_9597 = inst_9571;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9585_9597))
{var statearr_9586_9598 = state_9580__$1;(statearr_9586_9598[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9585_9597))
{var statearr_9587_9599 = state_9580__$1;(statearr_9587_9599[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9571)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9581 === 1))
{var inst_9564 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9565 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9566 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9567 = cmd.ui.auth_param.call(null,inst_9565,inst_9566);var inst_9568 = cmd.ui.PATCH.call(null,inst_9564,new_content,inst_9567);var state_9580__$1 = state_9580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9580__$1,2,inst_9568);
} else
{return null;
}
}
}
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9591 = [null,null,null,null,null,null,null,null];(statearr_9591[0] = state_machine__6247__auto__);
(statearr_9591[1] = 1);
return statearr_9591;
});
var state_machine__6247__auto____1 = (function (state_9580){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9580);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9592){if((e9592 instanceof Object))
{var ex__6250__auto__ = e9592;var statearr_9593_9600 = state_9580;(statearr_9593_9600[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9580);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9601 = state_9580;
state_9580 = G__9601;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9580){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9594 = f__6262__auto__.call(null);(statearr_9594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.preview_container = document.getElementById("preview-container");
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9603 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9603,0,null);var first_file = cljs.core.nth.call(null,vec__9603,1,null);var content = first_file.call(null,"content");return cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.ui.reset_input = (function reset_input(){return cmd.ui.input.value = "";
});
cmd.ui.set_preview = (function set_preview(){var ace = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var ace_value = ace.getSession().getValue();return cmd.ui.html_BANG_.call(null,cmd.ui.preview,cmd.ui.process.call(null,ace_value));
});
cmd.ui.handle_pull = (function handle_pull(_){return cmd.ui.load_gist.call(null,cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var gist_id = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043));var file_name = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var new_content = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);var result = cmd.ui.save_gist.call(null,gist_id,new_content);return cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),result);
});
cmd.ui.handle_logout = (function handle_logout(_){cmd.ui.say.call(null,"Logout");
cmd.ui.reset_state.call(null,cmd.ui.state);
cmd.ui.setcookie.call(null,"username","");
cmd.ui.setcookie.call(null,"auth-token","");
var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9623){var state_val_9624 = (state_9623[1]);if((state_val_9624 === 2))
{var inst_9621 = (state_9623[2]);var state_9623__$1 = state_9623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9623__$1,inst_9621);
} else
{if((state_val_9624 === 1))
{var inst_9618 = [new cljs.core.Keyword(null,"user-is-logged-out","user-is-logged-out",2570729974),true];var inst_9619 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9618,null));var state_9623__$1 = state_9623;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9623__$1,2,cmd.ui.AppBus,inst_9619);
} else
{return null;
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9628 = [null,null,null,null,null,null,null];(statearr_9628[0] = state_machine__6247__auto__);
(statearr_9628[1] = 1);
return statearr_9628;
});
var state_machine__6247__auto____1 = (function (state_9623){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9623);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9629){if((e9629 instanceof Object))
{var ex__6250__auto__ = e9629;var statearr_9630_9632 = state_9623;(statearr_9630_9632[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9623);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9633 = state_9623;
state_9623 = G__9633;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9623){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9631 = f__6262__auto__.call(null);(statearr_9631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.handle_select = (function handle_select(e){var selected_id = e.target.value;cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),selected_id);
return cmd.ui.load_gist.call(null,selected_id);
});
cmd.ui.logged_in = (function logged_in(username,auth_token){cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792),username);
cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430),auth_token);
cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),true);
cmd.ui.setcookie.call(null,"username",username);
cmd.ui.setcookie.call(null,"auth-token",auth_token);
var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9653){var state_val_9654 = (state_9653[1]);if((state_val_9654 === 2))
{var inst_9651 = (state_9653[2]);var state_9653__$1 = state_9653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9653__$1,inst_9651);
} else
{if((state_val_9654 === 1))
{var inst_9648 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9649 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9648,null));var state_9653__$1 = state_9653;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9653__$1,2,cmd.ui.AppBus,inst_9649);
} else
{return null;
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9658 = [null,null,null,null,null,null,null];(statearr_9658[0] = state_machine__6247__auto__);
(statearr_9658[1] = 1);
return statearr_9658;
});
var state_machine__6247__auto____1 = (function (state_9653){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9653);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9659){if((e9659 instanceof Object))
{var ex__6250__auto__ = e9659;var statearr_9660_9662 = state_9653;(statearr_9660_9662[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9653);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9663 = state_9653;
state_9653 = G__9663;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9653){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9661 = f__6262__auto__.call(null);(statearr_9661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.unauthorized = (function unauthorized(resp){var error_msg = cmd.ui.raw__GT_clj.call(null,resp);cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.ui.say.call(null,[cljs.core.str("Auth Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.ui.authenticate = (function authenticate(username,auth_token){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9709){var state_val_9710 = (state_9709[1]);if((state_val_9710 === 5))
{var inst_9701 = (state_9709[7]);var inst_9704 = cmd.ui.unauthorized.call(null,inst_9701);var state_9709__$1 = state_9709;var statearr_9711_9724 = state_9709__$1;(statearr_9711_9724[2] = inst_9704);
(statearr_9711_9724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9710 === 4))
{var inst_9702 = cmd.ui.logged_in.call(null,username,auth_token);var state_9709__$1 = state_9709;var statearr_9712_9725 = state_9709__$1;(statearr_9712_9725[2] = inst_9702);
(statearr_9712_9725[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9710 === 3))
{var inst_9707 = (state_9709[2]);var state_9709__$1 = state_9709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9709__$1,inst_9707);
} else
{if((state_val_9710 === 2))
{var inst_9699 = (state_9709[2]);var inst_9700 = cljs.core.nth.call(null,inst_9699,0,null);var inst_9701 = cljs.core.nth.call(null,inst_9699,1,null);var state_9709__$1 = (function (){var statearr_9713 = state_9709;(statearr_9713[7] = inst_9701);
return statearr_9713;
})();var G__9714_9726 = inst_9700;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9714_9726))
{var statearr_9715_9727 = state_9709__$1;(statearr_9715_9727[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9714_9726))
{var statearr_9716_9728 = state_9709__$1;(statearr_9716_9728[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9700)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9710 === 1))
{var inst_9695 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9696 = cmd.ui.auth_param.call(null,username,auth_token);var inst_9697 = cmd.ui.GET.call(null,inst_9695,inst_9696);var state_9709__$1 = state_9709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9709__$1,2,inst_9697);
} else
{return null;
}
}
}
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9720 = [null,null,null,null,null,null,null,null];(statearr_9720[0] = state_machine__6247__auto__);
(statearr_9720[1] = 1);
return statearr_9720;
});
var state_machine__6247__auto____1 = (function (state_9709){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9709);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9721){if((e9721 instanceof Object))
{var ex__6250__auto__ = e9721;var statearr_9722_9729 = state_9709;(statearr_9722_9729[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9730 = state_9709;
state_9709 = G__9730;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9709){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9723 = f__6262__auto__.call(null);(statearr_9723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.handle_auth = (function handle_auth(e){var username = document.getElementById("username").value;var auth_token = document.getElementById("auth-token").value;return cmd.ui.authenticate.call(null,username,auth_token);
});
cmd.ui.authenticated_om_QMARK_ = (function authenticated_om_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.ui.authenticated_QMARK_ = (function authenticated_QMARK_(state){return cmd.ui.get_state.call(null,state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581));
});
cmd.ui.error_set_QMARK_ = (function error_set_QMARK_(state){return state.call(null,new cljs.core.Keyword(null,"error","error",1110689146));
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t9734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9734 = (function (owner,state,toolbar,meta9735){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta9735 = meta9735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9734.cljs$lang$type = true;
cmd.ui.t9734.cljs$lang$ctorStr = "cmd.ui/t9734";
cmd.ui.t9734.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t9734");
});
cmd.ui.t9734.prototype.om$core$IRender$ = true;
cmd.ui.t9734.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
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
{return React.DOM.div(null,React.DOM.label(null,"USERN@ME: "),om.dom.input.call(null,{"id": "username", "type": "text"}),React.DOM.label(null,"SECRET: "),om.dom.input.call(null,{"id": "auth-token", "type": "text"}),React.DOM.button({"onClick": cmd.ui.handle_auth, "id": "go"},"LOG>>IN"),(cljs.core.truth_(cmd.ui.error_set_QMARK_.call(null,self__.state))?React.DOM.span({"id": "error-msg"}):[cljs.core.str(self__.state.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))].join('')));
} else
{return null;
}
}
});
cmd.ui.t9734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9736){var self__ = this;
var _9736__$1 = this;return self__.meta9735;
});
cmd.ui.t9734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9736,meta9735__$1){var self__ = this;
var _9736__$1 = this;return (new cmd.ui.t9734(self__.owner,self__.state,self__.toolbar,meta9735__$1));
});
cmd.ui.__GT_t9734 = (function __GT_t9734(owner__$1,state__$1,toolbar__$1,meta9735){return (new cmd.ui.t9734(owner__$1,state__$1,toolbar__$1,meta9735));
});
}
return (new cmd.ui.t9734(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.setup_editor_listeners = (function setup_editor_listeners(){var session = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession();Rx.Observable.create(((function (session){
return (function (observer){return session.on("changeScrollTop",((function (session){
return (function (p1__9737_SHARP_){return observer.onNext(p1__9737_SHARP_);
});})(session))
);
});})(session))
).throttle(15).subscribe(((function (session){
return (function (p1__9738_SHARP_){return cmd.ui.preview_container.scrollTop = p1__9738_SHARP_;
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
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9819){var state_val_9820 = (state_9819[1]);if((state_val_9820 === 9))
{var inst_9814 = (state_9819[2]);var inst_9798 = inst_9814;var state_9819__$1 = (function (){var statearr_9821 = state_9819;(statearr_9821[7] = inst_9798);
return statearr_9821;
})();var statearr_9822_9843 = state_9819__$1;(statearr_9822_9843[2] = null);
(statearr_9822_9843[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9820 === 8))
{var inst_9808 = cmd.ui.reset_input.call(null);var inst_9809 = cmd.ui.set_preview.call(null);var state_9819__$1 = (function (){var statearr_9823 = state_9819;(statearr_9823[8] = inst_9808);
return statearr_9823;
})();var statearr_9824_9844 = state_9819__$1;(statearr_9824_9844[2] = inst_9809);
(statearr_9824_9844[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9820 === 7))
{var inst_9802 = (state_9819[9]);var inst_9805 = cmd.ui.set_input.call(null,inst_9802);var inst_9806 = cmd.ui.set_preview.call(null);var state_9819__$1 = (function (){var statearr_9825 = state_9819;(statearr_9825[10] = inst_9805);
return statearr_9825;
})();var statearr_9826_9845 = state_9819__$1;(statearr_9826_9845[2] = inst_9806);
(statearr_9826_9845[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9820 === 6))
{var inst_9803 = cmd.ui.load_gists.call(null);var state_9819__$1 = state_9819;var statearr_9827_9846 = state_9819__$1;(statearr_9827_9846[2] = inst_9803);
(statearr_9827_9846[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9820 === 5))
{var inst_9812 = (state_9819[2]);var state_9819__$1 = (function (){var statearr_9828 = state_9819;(statearr_9828[11] = inst_9812);
return statearr_9828;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9819__$1,9,app_bus);
} else
{if((state_val_9820 === 4))
{var inst_9817 = (state_9819[2]);var state_9819__$1 = state_9819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9819__$1,inst_9817);
} else
{if((state_val_9820 === 3))
{var inst_9798 = (state_9819[7]);var inst_9801 = cljs.core.nth.call(null,inst_9798,0,null);var inst_9802 = cljs.core.nth.call(null,inst_9798,1,null);var state_9819__$1 = (function (){var statearr_9829 = state_9819;(statearr_9829[9] = inst_9802);
return statearr_9829;
})();var G__9830_9847 = inst_9801;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-logged-out","user-is-logged-out",2570729974),G__9830_9847))
{var statearr_9831_9848 = state_9819__$1;(statearr_9831_9848[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9830_9847))
{var statearr_9832_9849 = state_9819__$1;(statearr_9832_9849[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9830_9847))
{var statearr_9833_9850 = state_9819__$1;(statearr_9833_9850[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9801)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9820 === 2))
{var inst_9795 = (state_9819[2]);var inst_9796 = cljs.core.nth.call(null,inst_9795,0,null);var inst_9797 = cljs.core.nth.call(null,inst_9795,1,null);var inst_9798 = inst_9795;var state_9819__$1 = (function (){var statearr_9834 = state_9819;(statearr_9834[7] = inst_9798);
(statearr_9834[12] = inst_9796);
(statearr_9834[13] = inst_9797);
return statearr_9834;
})();var statearr_9835_9851 = state_9819__$1;(statearr_9835_9851[2] = null);
(statearr_9835_9851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9820 === 1))
{var state_9819__$1 = state_9819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9819__$1,2,app_bus);
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
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9839[0] = state_machine__6247__auto__);
(statearr_9839[1] = 1);
return statearr_9839;
});
var state_machine__6247__auto____1 = (function (state_9819){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9819);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9840){if((e9840 instanceof Object))
{var ex__6250__auto__ = e9840;var statearr_9841_9852 = state_9819;(statearr_9841_9852[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9819);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9840;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9853 = state_9819;
state_9819 = G__9853;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9819){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9842 = f__6262__auto__.call(null);(statearr_9842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.ui.getcookie.call(null,"username");var auth_token = cmd.ui.getcookie.call(null,"auth-token");var last_opened_gist_id = cmd.ui.getcookie.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
cmd.ui.setup_ace.call(null);
cmd.ui.setup_editor_listeners.call(null);
cmd.ui.authenticate.call(null,username,auth_token);
return cmd.ui.render_toolbar.call(null,state);
});
cmd.ui.main.call(null,cmd.ui.state,cmd.ui.AppBus);

//# sourceMappingURL=ui.js.map