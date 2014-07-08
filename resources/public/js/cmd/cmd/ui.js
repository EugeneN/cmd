// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('markdown.core');
goog.require('goog.net.cookies');
goog.require('om.dom');
goog.require('goog.net.XhrIo');
goog.require('markdown.core');
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
cmd.ui.md__GT_html = (function md__GT_html(text){return markdown.core.mdToHtml(text);
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
var G__9374__delegate = function (_){return cljs.core.PersistentArrayMap.EMPTY;
};
var G__9374 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9374__delegate.call(this,_);};
G__9374.cljs$lang$maxFixedArity = 0;
G__9374.cljs$lang$applyTo = (function (arglist__9375){
var _ = cljs.core.seq(arglist__9375);
return G__9374__delegate(_);
});
G__9374.cljs$core$IFn$_invoke$arity$variadic = G__9374__delegate;
return G__9374;
})()
);
});
cmd.ui.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.ui.auth_param = (function auth_param(username,auth_token){var obj9379 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj9379;
});
cmd.ui.resp_handler = (function resp_handler(ch,event){var error_code = event.target.getLastErrorCode();var res = event.target.getResponseText();var pred__9415 = cljs.core._EQ_;var expr__9416 = error_code;if(cljs.core.truth_(pred__9415.call(null,goog.net.ErrorCode.NO_ERROR,expr__9416)))
{var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__,pred__9415,expr__9416,error_code,res){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__,pred__9415,expr__9416,error_code,res){
return (function (state_9424){var state_val_9425 = (state_9424[1]);if((state_val_9425 === 2))
{var inst_9421 = (state_9424[2]);var inst_9422 = cljs.core.async.close_BANG_.call(null,ch);var state_9424__$1 = (function (){var statearr_9426 = state_9424;(statearr_9426[7] = inst_9421);
return statearr_9426;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9424__$1,inst_9422);
} else
{if((state_val_9425 === 1))
{var inst_9418 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_9419 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9418,null));var state_9424__$1 = state_9424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9424__$1,2,ch,inst_9419);
} else
{return null;
}
}
});})(c__6261__auto__,pred__9415,expr__9416,error_code,res))
;return ((function (switch__6246__auto__,c__6261__auto__,pred__9415,expr__9416,error_code,res){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9430 = [null,null,null,null,null,null,null,null];(statearr_9430[0] = state_machine__6247__auto__);
(statearr_9430[1] = 1);
return statearr_9430;
});
var state_machine__6247__auto____1 = (function (state_9424){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9431){if((e9431 instanceof Object))
{var ex__6250__auto__ = e9431;var statearr_9432_9450 = state_9424;(statearr_9432_9450[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9451 = state_9424;
state_9424 = G__9451;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9424){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__,pred__9415,expr__9416,error_code,res))
})();var state__6263__auto__ = (function (){var statearr_9433 = f__6262__auto__.call(null);(statearr_9433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__,pred__9415,expr__9416,error_code,res))
);
return c__6261__auto__;
} else
{var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__,pred__9415,expr__9416,error_code,res){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__,pred__9415,expr__9416,error_code,res){
return (function (state_9440){var state_val_9441 = (state_9440[1]);if((state_val_9441 === 2))
{var inst_9437 = (state_9440[2]);var inst_9438 = cljs.core.async.close_BANG_.call(null,ch);var state_9440__$1 = (function (){var statearr_9442 = state_9440;(statearr_9442[7] = inst_9437);
return statearr_9442;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9440__$1,inst_9438);
} else
{if((state_val_9441 === 1))
{var inst_9434 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_9435 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9434,null));var state_9440__$1 = state_9440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9440__$1,2,ch,inst_9435);
} else
{return null;
}
}
});})(c__6261__auto__,pred__9415,expr__9416,error_code,res))
;return ((function (switch__6246__auto__,c__6261__auto__,pred__9415,expr__9416,error_code,res){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9446 = [null,null,null,null,null,null,null,null];(statearr_9446[0] = state_machine__6247__auto__);
(statearr_9446[1] = 1);
return statearr_9446;
});
var state_machine__6247__auto____1 = (function (state_9440){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9440);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9447){if((e9447 instanceof Object))
{var ex__6250__auto__ = e9447;var statearr_9448_9452 = state_9440;(statearr_9448_9452[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9440);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9453 = state_9440;
state_9440 = G__9453;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9440){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__,pred__9415,expr__9416,error_code,res))
})();var state__6263__auto__ = (function (){var statearr_9449 = f__6262__auto__.call(null);(statearr_9449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__,pred__9415,expr__9416,error_code,res))
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
cmd.ui.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__9454_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__9454_SHARP_.call(null,"id"));
}),cmd.ui.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.ui.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.ui.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.ui.load_gists = (function load_gists(){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9506){var state_val_9507 = (state_9506[1]);if((state_val_9507 === 5))
{var inst_9498 = (state_9506[7]);var inst_9501 = cmd.ui.handle_io_error.call(null,inst_9498);var state_9506__$1 = state_9506;var statearr_9508_9521 = state_9506__$1;(statearr_9508_9521[2] = inst_9501);
(statearr_9508_9521[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9507 === 4))
{var inst_9498 = (state_9506[7]);var inst_9499 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_9498);var state_9506__$1 = state_9506;var statearr_9509_9522 = state_9506__$1;(statearr_9509_9522[2] = inst_9499);
(statearr_9509_9522[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9507 === 3))
{var inst_9504 = (state_9506[2]);var state_9506__$1 = state_9506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9506__$1,inst_9504);
} else
{if((state_val_9507 === 2))
{var inst_9495 = (state_9506[2]);var inst_9496 = cljs.core.nth.call(null,inst_9495,0,null);var inst_9497 = cljs.core.nth.call(null,inst_9495,1,null);var inst_9498 = cmd.ui.raw__GT_clj.call(null,inst_9497);var state_9506__$1 = (function (){var statearr_9510 = state_9506;(statearr_9510[7] = inst_9498);
return statearr_9510;
})();var G__9511_9523 = inst_9496;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9511_9523))
{var statearr_9512_9524 = state_9506__$1;(statearr_9512_9524[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9511_9523))
{var statearr_9513_9525 = state_9506__$1;(statearr_9513_9525[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9496)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9507 === 1))
{var inst_9489 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9490 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9491 = [cljs.core.str("/users/"),cljs.core.str(inst_9489),cljs.core.str("/gists")].join('');var inst_9492 = cmd.ui.auth_param.call(null,inst_9489,inst_9490);var inst_9493 = cmd.ui.GET.call(null,inst_9491,inst_9492);var state_9506__$1 = state_9506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9506__$1,2,inst_9493);
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
var state_machine__6247__auto____0 = (function (){var statearr_9517 = [null,null,null,null,null,null,null,null];(statearr_9517[0] = state_machine__6247__auto__);
(statearr_9517[1] = 1);
return statearr_9517;
});
var state_machine__6247__auto____1 = (function (state_9506){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9506);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9518){if((e9518 instanceof Object))
{var ex__6250__auto__ = e9518;var statearr_9519_9526 = state_9506;(statearr_9519_9526[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9527 = state_9506;
state_9506 = G__9527;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9506){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9520 = f__6262__auto__.call(null);(statearr_9520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.load_gist = (function load_gist(id){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9602){var state_val_9603 = (state_9602[1]);if((state_val_9603 === 6))
{var inst_9582 = (state_9602[7]);var inst_9596 = cmd.ui.raw__GT_clj.call(null,inst_9582);var inst_9597 = cmd.ui.handle_io_error.call(null,inst_9596);var state_9602__$1 = state_9602;var statearr_9604_9618 = state_9602__$1;(statearr_9604_9618[2] = inst_9597);
(statearr_9604_9618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9603 === 5))
{var inst_9594 = (state_9602[2]);var state_9602__$1 = state_9602;var statearr_9605_9619 = state_9602__$1;(statearr_9605_9619[2] = inst_9594);
(statearr_9605_9619[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9603 === 4))
{var inst_9582 = (state_9602[7]);var inst_9584 = cmd.ui.raw__GT_clj.call(null,inst_9582);var inst_9585 = inst_9584.call(null,"files");var inst_9586 = cljs.core.first.call(null,inst_9585);var inst_9587 = cljs.core.nth.call(null,inst_9586,0,null);var inst_9588 = cljs.core.nth.call(null,inst_9586,1,null);var inst_9589 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9587);var inst_9590 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9584);var inst_9591 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9592 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9591,null));var state_9602__$1 = (function (){var statearr_9606 = state_9602;(statearr_9606[8] = inst_9588);
(statearr_9606[9] = inst_9590);
(statearr_9606[10] = inst_9589);
return statearr_9606;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9602__$1,5,cmd.ui.AppBus,inst_9592);
} else
{if((state_val_9603 === 3))
{var inst_9600 = (state_9602[2]);var state_9602__$1 = state_9602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9602__$1,inst_9600);
} else
{if((state_val_9603 === 2))
{var inst_9580 = (state_9602[2]);var inst_9581 = cljs.core.nth.call(null,inst_9580,0,null);var inst_9582 = cljs.core.nth.call(null,inst_9580,1,null);var state_9602__$1 = (function (){var statearr_9607 = state_9602;(statearr_9607[7] = inst_9582);
return statearr_9607;
})();var G__9608_9620 = inst_9581;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9608_9620))
{var statearr_9609_9621 = state_9602__$1;(statearr_9609_9621[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9608_9620))
{var statearr_9610_9622 = state_9602__$1;(statearr_9610_9622[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9581)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9603 === 1))
{var inst_9574 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9575 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9576 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9577 = cmd.ui.auth_param.call(null,inst_9575,inst_9576);var inst_9578 = cmd.ui.GET.call(null,inst_9574,inst_9577);var state_9602__$1 = state_9602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9602__$1,2,inst_9578);
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
var state_machine__6247__auto____0 = (function (){var statearr_9614 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9614[0] = state_machine__6247__auto__);
(statearr_9614[1] = 1);
return statearr_9614;
});
var state_machine__6247__auto____1 = (function (state_9602){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9602);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9615){if((e9615 instanceof Object))
{var ex__6250__auto__ = e9615;var statearr_9616_9623 = state_9602;(statearr_9616_9623[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9602);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9624 = state_9602;
state_9602 = G__9624;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9602){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9617 = f__6262__auto__.call(null);(statearr_9617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.save_gist = (function save_gist(gist_id,new_content){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9674){var state_val_9675 = (state_9674[1]);if((state_val_9675 === 5))
{var inst_9667 = (state_9674[7]);var inst_9669 = cmd.ui.handle_io_error.call(null,inst_9667);var state_9674__$1 = state_9674;var statearr_9676_9689 = state_9674__$1;(statearr_9676_9689[2] = inst_9669);
(statearr_9676_9689[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 4))
{var inst_9667 = (state_9674[7]);var state_9674__$1 = state_9674;var statearr_9677_9690 = state_9674__$1;(statearr_9677_9690[2] = inst_9667);
(statearr_9677_9690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 3))
{var inst_9672 = (state_9674[2]);var state_9674__$1 = state_9674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9674__$1,inst_9672);
} else
{if((state_val_9675 === 2))
{var inst_9664 = (state_9674[2]);var inst_9665 = cljs.core.nth.call(null,inst_9664,0,null);var inst_9666 = cljs.core.nth.call(null,inst_9664,1,null);var inst_9667 = cmd.ui.raw__GT_clj.call(null,inst_9666);var state_9674__$1 = (function (){var statearr_9678 = state_9674;(statearr_9678[7] = inst_9667);
return statearr_9678;
})();var G__9679_9691 = inst_9665;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9679_9691))
{var statearr_9680_9692 = state_9674__$1;(statearr_9680_9692[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9679_9691))
{var statearr_9681_9693 = state_9674__$1;(statearr_9681_9693[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9665)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 1))
{var inst_9658 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9659 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9660 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9661 = cmd.ui.auth_param.call(null,inst_9659,inst_9660);var inst_9662 = cmd.ui.PATCH.call(null,inst_9658,new_content,inst_9661);var state_9674__$1 = state_9674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9674__$1,2,inst_9662);
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
var state_machine__6247__auto____0 = (function (){var statearr_9685 = [null,null,null,null,null,null,null,null];(statearr_9685[0] = state_machine__6247__auto__);
(statearr_9685[1] = 1);
return statearr_9685;
});
var state_machine__6247__auto____1 = (function (state_9674){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9674);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9686){if((e9686 instanceof Object))
{var ex__6250__auto__ = e9686;var statearr_9687_9694 = state_9674;(statearr_9687_9694[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9686;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9695 = state_9674;
state_9674 = G__9695;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9674){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9688 = f__6262__auto__.call(null);(statearr_9688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.preview_container = document.getElementById("preview-container");
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9697 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9697,0,null);var first_file = cljs.core.nth.call(null,vec__9697,1,null);var content = first_file.call(null,"content");return cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
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
return (function (state_9717){var state_val_9718 = (state_9717[1]);if((state_val_9718 === 2))
{var inst_9715 = (state_9717[2]);var state_9717__$1 = state_9717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9717__$1,inst_9715);
} else
{if((state_val_9718 === 1))
{var inst_9712 = [new cljs.core.Keyword(null,"user-is-logged-out","user-is-logged-out",2570729974),true];var inst_9713 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9712,null));var state_9717__$1 = state_9717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9717__$1,2,cmd.ui.AppBus,inst_9713);
} else
{return null;
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9722 = [null,null,null,null,null,null,null];(statearr_9722[0] = state_machine__6247__auto__);
(statearr_9722[1] = 1);
return statearr_9722;
});
var state_machine__6247__auto____1 = (function (state_9717){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9717);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9723){if((e9723 instanceof Object))
{var ex__6250__auto__ = e9723;var statearr_9724_9726 = state_9717;(statearr_9724_9726[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9727 = state_9717;
state_9717 = G__9727;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9717){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9725 = f__6262__auto__.call(null);(statearr_9725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9725;
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
return (function (state_9747){var state_val_9748 = (state_9747[1]);if((state_val_9748 === 2))
{var inst_9745 = (state_9747[2]);var state_9747__$1 = state_9747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9747__$1,inst_9745);
} else
{if((state_val_9748 === 1))
{var inst_9742 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9743 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9742,null));var state_9747__$1 = state_9747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9747__$1,2,cmd.ui.AppBus,inst_9743);
} else
{return null;
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9752 = [null,null,null,null,null,null,null];(statearr_9752[0] = state_machine__6247__auto__);
(statearr_9752[1] = 1);
return statearr_9752;
});
var state_machine__6247__auto____1 = (function (state_9747){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9753){if((e9753 instanceof Object))
{var ex__6250__auto__ = e9753;var statearr_9754_9756 = state_9747;(statearr_9754_9756[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9747);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9757 = state_9747;
state_9747 = G__9757;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9747){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9755 = f__6262__auto__.call(null);(statearr_9755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9755;
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
return (function (state_9803){var state_val_9804 = (state_9803[1]);if((state_val_9804 === 5))
{var inst_9795 = (state_9803[7]);var inst_9798 = cmd.ui.unauthorized.call(null,inst_9795);var state_9803__$1 = state_9803;var statearr_9805_9818 = state_9803__$1;(statearr_9805_9818[2] = inst_9798);
(statearr_9805_9818[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 4))
{var inst_9796 = cmd.ui.logged_in.call(null,username,auth_token);var state_9803__$1 = state_9803;var statearr_9806_9819 = state_9803__$1;(statearr_9806_9819[2] = inst_9796);
(statearr_9806_9819[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 3))
{var inst_9801 = (state_9803[2]);var state_9803__$1 = state_9803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9803__$1,inst_9801);
} else
{if((state_val_9804 === 2))
{var inst_9793 = (state_9803[2]);var inst_9794 = cljs.core.nth.call(null,inst_9793,0,null);var inst_9795 = cljs.core.nth.call(null,inst_9793,1,null);var state_9803__$1 = (function (){var statearr_9807 = state_9803;(statearr_9807[7] = inst_9795);
return statearr_9807;
})();var G__9808_9820 = inst_9794;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9808_9820))
{var statearr_9809_9821 = state_9803__$1;(statearr_9809_9821[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9808_9820))
{var statearr_9810_9822 = state_9803__$1;(statearr_9810_9822[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9794)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 1))
{var inst_9789 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9790 = cmd.ui.auth_param.call(null,username,auth_token);var inst_9791 = cmd.ui.GET.call(null,inst_9789,inst_9790);var state_9803__$1 = state_9803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9803__$1,2,inst_9791);
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
var state_machine__6247__auto____0 = (function (){var statearr_9814 = [null,null,null,null,null,null,null,null];(statearr_9814[0] = state_machine__6247__auto__);
(statearr_9814[1] = 1);
return statearr_9814;
});
var state_machine__6247__auto____1 = (function (state_9803){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9803);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9815){if((e9815 instanceof Object))
{var ex__6250__auto__ = e9815;var statearr_9816_9823 = state_9803;(statearr_9816_9823[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9824 = state_9803;
state_9803 = G__9824;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9803){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9817 = f__6262__auto__.call(null);(statearr_9817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9817;
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
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t9828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9828 = (function (owner,state,toolbar,meta9829){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta9829 = meta9829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9828.cljs$lang$type = true;
cmd.ui.t9828.cljs$lang$ctorStr = "cmd.ui/t9828";
cmd.ui.t9828.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t9828");
});
cmd.ui.t9828.prototype.om$core$IRender$ = true;
cmd.ui.t9828.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
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
cmd.ui.t9828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9830){var self__ = this;
var _9830__$1 = this;return self__.meta9829;
});
cmd.ui.t9828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9830,meta9829__$1){var self__ = this;
var _9830__$1 = this;return (new cmd.ui.t9828(self__.owner,self__.state,self__.toolbar,meta9829__$1));
});
cmd.ui.__GT_t9828 = (function __GT_t9828(owner__$1,state__$1,toolbar__$1,meta9829){return (new cmd.ui.t9828(owner__$1,state__$1,toolbar__$1,meta9829));
});
}
return (new cmd.ui.t9828(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.setup_editor_listeners = (function setup_editor_listeners(){var session = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession();Rx.Observable.create(((function (session){
return (function (observer){return session.on("changeScrollTop",((function (session){
return (function (p1__9831_SHARP_){return observer.onNext(p1__9831_SHARP_);
});})(session))
);
});})(session))
).throttle(15).subscribe(((function (session){
return (function (p1__9832_SHARP_){return cmd.ui.preview_container.scrollTop = p1__9832_SHARP_;
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
return (function (state_9913){var state_val_9914 = (state_9913[1]);if((state_val_9914 === 9))
{var inst_9908 = (state_9913[2]);var inst_9892 = inst_9908;var state_9913__$1 = (function (){var statearr_9915 = state_9913;(statearr_9915[7] = inst_9892);
return statearr_9915;
})();var statearr_9916_9937 = state_9913__$1;(statearr_9916_9937[2] = null);
(statearr_9916_9937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 8))
{var inst_9902 = cmd.ui.reset_input.call(null);var inst_9903 = cmd.ui.set_preview.call(null);var state_9913__$1 = (function (){var statearr_9917 = state_9913;(statearr_9917[8] = inst_9902);
return statearr_9917;
})();var statearr_9918_9938 = state_9913__$1;(statearr_9918_9938[2] = inst_9903);
(statearr_9918_9938[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 7))
{var inst_9896 = (state_9913[9]);var inst_9899 = cmd.ui.set_input.call(null,inst_9896);var inst_9900 = cmd.ui.set_preview.call(null);var state_9913__$1 = (function (){var statearr_9919 = state_9913;(statearr_9919[10] = inst_9899);
return statearr_9919;
})();var statearr_9920_9939 = state_9913__$1;(statearr_9920_9939[2] = inst_9900);
(statearr_9920_9939[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 6))
{var inst_9897 = cmd.ui.load_gists.call(null);var state_9913__$1 = state_9913;var statearr_9921_9940 = state_9913__$1;(statearr_9921_9940[2] = inst_9897);
(statearr_9921_9940[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 5))
{var inst_9906 = (state_9913[2]);var state_9913__$1 = (function (){var statearr_9922 = state_9913;(statearr_9922[11] = inst_9906);
return statearr_9922;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9913__$1,9,app_bus);
} else
{if((state_val_9914 === 4))
{var inst_9911 = (state_9913[2]);var state_9913__$1 = state_9913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9913__$1,inst_9911);
} else
{if((state_val_9914 === 3))
{var inst_9892 = (state_9913[7]);var inst_9895 = cljs.core.nth.call(null,inst_9892,0,null);var inst_9896 = cljs.core.nth.call(null,inst_9892,1,null);var state_9913__$1 = (function (){var statearr_9923 = state_9913;(statearr_9923[9] = inst_9896);
return statearr_9923;
})();var G__9924_9941 = inst_9895;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-logged-out","user-is-logged-out",2570729974),G__9924_9941))
{var statearr_9925_9942 = state_9913__$1;(statearr_9925_9942[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9924_9941))
{var statearr_9926_9943 = state_9913__$1;(statearr_9926_9943[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9924_9941))
{var statearr_9927_9944 = state_9913__$1;(statearr_9927_9944[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9895)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 2))
{var inst_9889 = (state_9913[2]);var inst_9890 = cljs.core.nth.call(null,inst_9889,0,null);var inst_9891 = cljs.core.nth.call(null,inst_9889,1,null);var inst_9892 = inst_9889;var state_9913__$1 = (function (){var statearr_9928 = state_9913;(statearr_9928[12] = inst_9890);
(statearr_9928[7] = inst_9892);
(statearr_9928[13] = inst_9891);
return statearr_9928;
})();var statearr_9929_9945 = state_9913__$1;(statearr_9929_9945[2] = null);
(statearr_9929_9945[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 1))
{var state_9913__$1 = state_9913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9913__$1,2,app_bus);
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
var state_machine__6247__auto____0 = (function (){var statearr_9933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9933[0] = state_machine__6247__auto__);
(statearr_9933[1] = 1);
return statearr_9933;
});
var state_machine__6247__auto____1 = (function (state_9913){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9913);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9934){if((e9934 instanceof Object))
{var ex__6250__auto__ = e9934;var statearr_9935_9946 = state_9913;(statearr_9935_9946[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9934;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9947 = state_9913;
state_9913 = G__9947;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9913){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9936 = f__6262__auto__.call(null);(statearr_9936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9936;
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