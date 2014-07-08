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
var G__9404__delegate = function (_){return cljs.core.PersistentArrayMap.EMPTY;
};
var G__9404 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9404__delegate.call(this,_);};
G__9404.cljs$lang$maxFixedArity = 0;
G__9404.cljs$lang$applyTo = (function (arglist__9405){
var _ = cljs.core.seq(arglist__9405);
return G__9404__delegate(_);
});
G__9404.cljs$core$IFn$_invoke$arity$variadic = G__9404__delegate;
return G__9404;
})()
);
});
cmd.ui.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.ui.auth_param = (function auth_param(username,auth_token){var obj9409 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj9409;
});
cmd.ui.resp_handler = (function resp_handler(ch,event){var error_code = event.target.getLastErrorCode();var res = event.target.getResponseText();var pred__9445 = cljs.core._EQ_;var expr__9446 = error_code;if(cljs.core.truth_(pred__9445.call(null,goog.net.ErrorCode.NO_ERROR,expr__9446)))
{var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,pred__9445,expr__9446,error_code,res){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,pred__9445,expr__9446,error_code,res){
return (function (state_9454){var state_val_9455 = (state_9454[1]);if((state_val_9455 === 2))
{var inst_9451 = (state_9454[2]);var inst_9452 = cljs.core.async.close_BANG_.call(null,ch);var state_9454__$1 = (function (){var statearr_9456 = state_9454;(statearr_9456[7] = inst_9451);
return statearr_9456;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9454__$1,inst_9452);
} else
{if((state_val_9455 === 1))
{var inst_9448 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_9449 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9448,null));var state_9454__$1 = state_9454;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9454__$1,2,ch,inst_9449);
} else
{return null;
}
}
});})(c__6291__auto__,pred__9445,expr__9446,error_code,res))
;return ((function (switch__6276__auto__,c__6291__auto__,pred__9445,expr__9446,error_code,res){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9460 = [null,null,null,null,null,null,null,null];(statearr_9460[0] = state_machine__6277__auto__);
(statearr_9460[1] = 1);
return statearr_9460;
});
var state_machine__6277__auto____1 = (function (state_9454){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9454);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9461){if((e9461 instanceof Object))
{var ex__6280__auto__ = e9461;var statearr_9462_9480 = state_9454;(statearr_9462_9480[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9454);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9481 = state_9454;
state_9454 = G__9481;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9454){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,pred__9445,expr__9446,error_code,res))
})();var state__6293__auto__ = (function (){var statearr_9463 = f__6292__auto__.call(null);(statearr_9463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,pred__9445,expr__9446,error_code,res))
);
return c__6291__auto__;
} else
{var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,pred__9445,expr__9446,error_code,res){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,pred__9445,expr__9446,error_code,res){
return (function (state_9470){var state_val_9471 = (state_9470[1]);if((state_val_9471 === 2))
{var inst_9467 = (state_9470[2]);var inst_9468 = cljs.core.async.close_BANG_.call(null,ch);var state_9470__$1 = (function (){var statearr_9472 = state_9470;(statearr_9472[7] = inst_9467);
return statearr_9472;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9470__$1,inst_9468);
} else
{if((state_val_9471 === 1))
{var inst_9464 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_9465 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9464,null));var state_9470__$1 = state_9470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9470__$1,2,ch,inst_9465);
} else
{return null;
}
}
});})(c__6291__auto__,pred__9445,expr__9446,error_code,res))
;return ((function (switch__6276__auto__,c__6291__auto__,pred__9445,expr__9446,error_code,res){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9476 = [null,null,null,null,null,null,null,null];(statearr_9476[0] = state_machine__6277__auto__);
(statearr_9476[1] = 1);
return statearr_9476;
});
var state_machine__6277__auto____1 = (function (state_9470){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9470);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9477){if((e9477 instanceof Object))
{var ex__6280__auto__ = e9477;var statearr_9478_9482 = state_9470;(statearr_9478_9482[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9470);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9483 = state_9470;
state_9470 = G__9483;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9470){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,pred__9445,expr__9446,error_code,res))
})();var state__6293__auto__ = (function (){var statearr_9479 = f__6292__auto__.call(null);(statearr_9479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,pred__9445,expr__9446,error_code,res))
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
cmd.ui.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__9484_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__9484_SHARP_.call(null,"id"));
}),cmd.ui.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.ui.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.ui.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.ui.load_gists = (function load_gists(){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9536){var state_val_9537 = (state_9536[1]);if((state_val_9537 === 5))
{var inst_9528 = (state_9536[7]);var inst_9531 = cmd.ui.handle_io_error.call(null,inst_9528);var state_9536__$1 = state_9536;var statearr_9538_9551 = state_9536__$1;(statearr_9538_9551[2] = inst_9531);
(statearr_9538_9551[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9537 === 4))
{var inst_9528 = (state_9536[7]);var inst_9529 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_9528);var state_9536__$1 = state_9536;var statearr_9539_9552 = state_9536__$1;(statearr_9539_9552[2] = inst_9529);
(statearr_9539_9552[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9537 === 3))
{var inst_9534 = (state_9536[2]);var state_9536__$1 = state_9536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9536__$1,inst_9534);
} else
{if((state_val_9537 === 2))
{var inst_9525 = (state_9536[2]);var inst_9526 = cljs.core.nth.call(null,inst_9525,0,null);var inst_9527 = cljs.core.nth.call(null,inst_9525,1,null);var inst_9528 = cmd.ui.raw__GT_clj.call(null,inst_9527);var state_9536__$1 = (function (){var statearr_9540 = state_9536;(statearr_9540[7] = inst_9528);
return statearr_9540;
})();var G__9541_9553 = inst_9526;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9541_9553))
{var statearr_9542_9554 = state_9536__$1;(statearr_9542_9554[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9541_9553))
{var statearr_9543_9555 = state_9536__$1;(statearr_9543_9555[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9526)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9537 === 1))
{var inst_9519 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9520 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9521 = [cljs.core.str("/users/"),cljs.core.str(inst_9519),cljs.core.str("/gists")].join('');var inst_9522 = cmd.ui.auth_param.call(null,inst_9519,inst_9520);var inst_9523 = cmd.ui.GET.call(null,inst_9521,inst_9522);var state_9536__$1 = state_9536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9536__$1,2,inst_9523);
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
var state_machine__6277__auto____0 = (function (){var statearr_9547 = [null,null,null,null,null,null,null,null];(statearr_9547[0] = state_machine__6277__auto__);
(statearr_9547[1] = 1);
return statearr_9547;
});
var state_machine__6277__auto____1 = (function (state_9536){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9536);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9548){if((e9548 instanceof Object))
{var ex__6280__auto__ = e9548;var statearr_9549_9556 = state_9536;(statearr_9549_9556[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9557 = state_9536;
state_9536 = G__9557;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9536){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9550 = f__6292__auto__.call(null);(statearr_9550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.load_gist = (function load_gist(id){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9632){var state_val_9633 = (state_9632[1]);if((state_val_9633 === 6))
{var inst_9612 = (state_9632[7]);var inst_9626 = cmd.ui.raw__GT_clj.call(null,inst_9612);var inst_9627 = cmd.ui.handle_io_error.call(null,inst_9626);var state_9632__$1 = state_9632;var statearr_9634_9648 = state_9632__$1;(statearr_9634_9648[2] = inst_9627);
(statearr_9634_9648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9633 === 5))
{var inst_9624 = (state_9632[2]);var state_9632__$1 = state_9632;var statearr_9635_9649 = state_9632__$1;(statearr_9635_9649[2] = inst_9624);
(statearr_9635_9649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9633 === 4))
{var inst_9612 = (state_9632[7]);var inst_9614 = cmd.ui.raw__GT_clj.call(null,inst_9612);var inst_9615 = inst_9614.call(null,"files");var inst_9616 = cljs.core.first.call(null,inst_9615);var inst_9617 = cljs.core.nth.call(null,inst_9616,0,null);var inst_9618 = cljs.core.nth.call(null,inst_9616,1,null);var inst_9619 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9617);var inst_9620 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9614);var inst_9621 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9622 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9621,null));var state_9632__$1 = (function (){var statearr_9636 = state_9632;(statearr_9636[8] = inst_9619);
(statearr_9636[9] = inst_9618);
(statearr_9636[10] = inst_9620);
return statearr_9636;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9632__$1,5,cmd.ui.AppBus,inst_9622);
} else
{if((state_val_9633 === 3))
{var inst_9630 = (state_9632[2]);var state_9632__$1 = state_9632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9632__$1,inst_9630);
} else
{if((state_val_9633 === 2))
{var inst_9610 = (state_9632[2]);var inst_9611 = cljs.core.nth.call(null,inst_9610,0,null);var inst_9612 = cljs.core.nth.call(null,inst_9610,1,null);var state_9632__$1 = (function (){var statearr_9637 = state_9632;(statearr_9637[7] = inst_9612);
return statearr_9637;
})();var G__9638_9650 = inst_9611;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9638_9650))
{var statearr_9639_9651 = state_9632__$1;(statearr_9639_9651[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9638_9650))
{var statearr_9640_9652 = state_9632__$1;(statearr_9640_9652[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9611)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9633 === 1))
{var inst_9604 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9605 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9606 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9607 = cmd.ui.auth_param.call(null,inst_9605,inst_9606);var inst_9608 = cmd.ui.GET.call(null,inst_9604,inst_9607);var state_9632__$1 = state_9632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9632__$1,2,inst_9608);
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
var state_machine__6277__auto____0 = (function (){var statearr_9644 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9644[0] = state_machine__6277__auto__);
(statearr_9644[1] = 1);
return statearr_9644;
});
var state_machine__6277__auto____1 = (function (state_9632){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9632);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9645){if((e9645 instanceof Object))
{var ex__6280__auto__ = e9645;var statearr_9646_9653 = state_9632;(statearr_9646_9653[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9632);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9654 = state_9632;
state_9632 = G__9654;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9632){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9647 = f__6292__auto__.call(null);(statearr_9647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.save_gist = (function save_gist(gist_id,new_content){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9704){var state_val_9705 = (state_9704[1]);if((state_val_9705 === 5))
{var inst_9697 = (state_9704[7]);var inst_9699 = cmd.ui.handle_io_error.call(null,inst_9697);var state_9704__$1 = state_9704;var statearr_9706_9719 = state_9704__$1;(statearr_9706_9719[2] = inst_9699);
(statearr_9706_9719[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9705 === 4))
{var inst_9697 = (state_9704[7]);var state_9704__$1 = state_9704;var statearr_9707_9720 = state_9704__$1;(statearr_9707_9720[2] = inst_9697);
(statearr_9707_9720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9705 === 3))
{var inst_9702 = (state_9704[2]);var state_9704__$1 = state_9704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9704__$1,inst_9702);
} else
{if((state_val_9705 === 2))
{var inst_9694 = (state_9704[2]);var inst_9695 = cljs.core.nth.call(null,inst_9694,0,null);var inst_9696 = cljs.core.nth.call(null,inst_9694,1,null);var inst_9697 = cmd.ui.raw__GT_clj.call(null,inst_9696);var state_9704__$1 = (function (){var statearr_9708 = state_9704;(statearr_9708[7] = inst_9697);
return statearr_9708;
})();var G__9709_9721 = inst_9695;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9709_9721))
{var statearr_9710_9722 = state_9704__$1;(statearr_9710_9722[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9709_9721))
{var statearr_9711_9723 = state_9704__$1;(statearr_9711_9723[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9695)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9705 === 1))
{var inst_9688 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9689 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9690 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9691 = cmd.ui.auth_param.call(null,inst_9689,inst_9690);var inst_9692 = cmd.ui.PATCH.call(null,inst_9688,new_content,inst_9691);var state_9704__$1 = state_9704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9704__$1,2,inst_9692);
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
var state_machine__6277__auto____0 = (function (){var statearr_9715 = [null,null,null,null,null,null,null,null];(statearr_9715[0] = state_machine__6277__auto__);
(statearr_9715[1] = 1);
return statearr_9715;
});
var state_machine__6277__auto____1 = (function (state_9704){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9704);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9716){if((e9716 instanceof Object))
{var ex__6280__auto__ = e9716;var statearr_9717_9724 = state_9704;(statearr_9717_9724[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9704);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9725 = state_9704;
state_9704 = G__9725;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9704){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9718 = f__6292__auto__.call(null);(statearr_9718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.preview_container = document.getElementById("preview-container");
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9727 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9727,0,null);var first_file = cljs.core.nth.call(null,vec__9727,1,null);var content = first_file.call(null,"content");return cmd.ui.input.value = content;
});
cmd.ui.reset_input = (function reset_input(){return cmd.ui.input.value = "";
});
cmd.ui.set_preview = (function set_preview(){return cmd.ui.html_BANG_.call(null,cmd.ui.preview,cmd.ui.process.call(null,cmd.ui.input.value));
});
cmd.ui.handle_pull = (function handle_pull(_){return cmd.ui.load_gist.call(null,cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.ui.handle_push = (function handle_push(_){var md_raw = cmd.ui.input.value;var gist_id = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043));var file_name = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var new_content = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);var result = cmd.ui.save_gist.call(null,gist_id,new_content);return cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),result);
});
cmd.ui.handle_logout = (function handle_logout(_){cmd.ui.say.call(null,"Logout");
cmd.ui.reset_state.call(null,cmd.ui.state);
cmd.ui.setcookie.call(null,"username","");
cmd.ui.setcookie.call(null,"auth-token","");
var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9747){var state_val_9748 = (state_9747[1]);if((state_val_9748 === 2))
{var inst_9745 = (state_9747[2]);var state_9747__$1 = state_9747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9747__$1,inst_9745);
} else
{if((state_val_9748 === 1))
{var inst_9742 = [new cljs.core.Keyword(null,"user-is-logged-out","user-is-logged-out",2570729974),true];var inst_9743 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9742,null));var state_9747__$1 = state_9747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9747__$1,2,cmd.ui.AppBus,inst_9743);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9752 = [null,null,null,null,null,null,null];(statearr_9752[0] = state_machine__6277__auto__);
(statearr_9752[1] = 1);
return statearr_9752;
});
var state_machine__6277__auto____1 = (function (state_9747){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9753){if((e9753 instanceof Object))
{var ex__6280__auto__ = e9753;var statearr_9754_9756 = state_9747;(statearr_9754_9756[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9747);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9757 = state_9747;
state_9747 = G__9757;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9747){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9755 = f__6292__auto__.call(null);(statearr_9755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9755;
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
return (function (state_9777){var state_val_9778 = (state_9777[1]);if((state_val_9778 === 2))
{var inst_9775 = (state_9777[2]);var state_9777__$1 = state_9777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9777__$1,inst_9775);
} else
{if((state_val_9778 === 1))
{var inst_9772 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9773 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9772,null));var state_9777__$1 = state_9777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9777__$1,2,cmd.ui.AppBus,inst_9773);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9782 = [null,null,null,null,null,null,null];(statearr_9782[0] = state_machine__6277__auto__);
(statearr_9782[1] = 1);
return statearr_9782;
});
var state_machine__6277__auto____1 = (function (state_9777){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9777);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9783){if((e9783 instanceof Object))
{var ex__6280__auto__ = e9783;var statearr_9784_9786 = state_9777;(statearr_9784_9786[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9787 = state_9777;
state_9777 = G__9787;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9777){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9785 = f__6292__auto__.call(null);(statearr_9785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9785;
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
return (function (state_9833){var state_val_9834 = (state_9833[1]);if((state_val_9834 === 5))
{var inst_9825 = (state_9833[7]);var inst_9828 = cmd.ui.unauthorized.call(null,inst_9825);var state_9833__$1 = state_9833;var statearr_9835_9848 = state_9833__$1;(statearr_9835_9848[2] = inst_9828);
(statearr_9835_9848[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 4))
{var inst_9826 = cmd.ui.logged_in.call(null,username,auth_token);var state_9833__$1 = state_9833;var statearr_9836_9849 = state_9833__$1;(statearr_9836_9849[2] = inst_9826);
(statearr_9836_9849[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 3))
{var inst_9831 = (state_9833[2]);var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9833__$1,inst_9831);
} else
{if((state_val_9834 === 2))
{var inst_9823 = (state_9833[2]);var inst_9824 = cljs.core.nth.call(null,inst_9823,0,null);var inst_9825 = cljs.core.nth.call(null,inst_9823,1,null);var state_9833__$1 = (function (){var statearr_9837 = state_9833;(statearr_9837[7] = inst_9825);
return statearr_9837;
})();var G__9838_9850 = inst_9824;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9838_9850))
{var statearr_9839_9851 = state_9833__$1;(statearr_9839_9851[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9838_9850))
{var statearr_9840_9852 = state_9833__$1;(statearr_9840_9852[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9824)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 1))
{var inst_9819 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9820 = cmd.ui.auth_param.call(null,username,auth_token);var inst_9821 = cmd.ui.GET.call(null,inst_9819,inst_9820);var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9833__$1,2,inst_9821);
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
var state_machine__6277__auto____0 = (function (){var statearr_9844 = [null,null,null,null,null,null,null,null];(statearr_9844[0] = state_machine__6277__auto__);
(statearr_9844[1] = 1);
return statearr_9844;
});
var state_machine__6277__auto____1 = (function (state_9833){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9833);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9845){if((e9845 instanceof Object))
{var ex__6280__auto__ = e9845;var statearr_9846_9853 = state_9833;(statearr_9846_9853[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9854 = state_9833;
state_9833 = G__9854;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9833){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9847 = f__6292__auto__.call(null);(statearr_9847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9847;
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
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t9858 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9858 = (function (owner,state,toolbar,meta9859){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta9859 = meta9859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9858.cljs$lang$type = true;
cmd.ui.t9858.cljs$lang$ctorStr = "cmd.ui/t9858";
cmd.ui.t9858.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t9858");
});
cmd.ui.t9858.prototype.om$core$IRender$ = true;
cmd.ui.t9858.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cmd.ui.authenticated_om_QMARK_.call(null,self__.state)))
{return React.DOM.div(null,React.DOM.label({"className": "ios7"},"Select gist:"),React.DOM.div({"id": "gist-list"},cljs.core.apply.call(null,om.dom.select,{"onChange": cmd.ui.handle_select, "className": "hello"},cljs.core.map.call(null,((function (___$1){
return (function (gist){return om.dom.option.call(null,{"value": gist.call(null,"id")},cmd.ui.join_gist_names.call(null,cljs.core.keys.call(null,gist.call(null,"files"))));
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.state)))),(function (){var current_gist = self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var href = ((cljs.core._EQ_.call(null,current_gist,null))?null:current_gist.call(null,"html_url"));cmd.ui.say.call(null,current_gist);
cmd.ui.say.call(null,href);
if(!(cljs.core._EQ_.call(null,href,null)))
{return React.DOM.a({"href": href, "target": "_blank", "id": "view-orig"},"View original");
} else
{return null;
}
})(),React.DOM.button({"onClick": cmd.ui.handle_pull, "id": "pull"},"_ Pull"),React.DOM.button({"onClick": cmd.ui.handle_push, "id": "push"},"^ Push"),React.DOM.button({"onClick": cmd.ui.handle_logout, "id": "log-out"},"Log out"));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return React.DOM.div(null,React.DOM.label(null,"Username:"),om.dom.input.call(null,{"id": "username", "type": "text"}),React.DOM.label(null,"Auth token:"),om.dom.input.call(null,{"id": "auth-token", "type": "text"}),React.DOM.button({"onClick": cmd.ui.handle_auth, "id": "go"},"Let's go >>"),(cljs.core.truth_(cmd.ui.error_set_QMARK_.call(null,self__.state))?React.DOM.span({"id": "error-msg"}):[cljs.core.str(self__.state.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))].join('')));
} else
{return null;
}
}
});
cmd.ui.t9858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9860){var self__ = this;
var _9860__$1 = this;return self__.meta9859;
});
cmd.ui.t9858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9860,meta9859__$1){var self__ = this;
var _9860__$1 = this;return (new cmd.ui.t9858(self__.owner,self__.state,self__.toolbar,meta9859__$1));
});
cmd.ui.__GT_t9858 = (function __GT_t9858(owner__$1,state__$1,toolbar__$1,meta9859){return (new cmd.ui.t9858(owner__$1,state__$1,toolbar__$1,meta9859));
});
}
return (new cmd.ui.t9858(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.setup_common_listeners = (function setup_common_listeners(){goog.events.listen(cmd.ui.input,goog.events.EventType.KEYUP,cmd.ui.set_preview);
goog.events.listen(cmd.ui.input,goog.events.EventType.SCROLL,(function (){return cmd.ui.preview_container.scrollTop = cmd.ui.input.scrollTop;
}));
return goog.events.listen(cmd.ui.preview_container,goog.events.EventType.SCROLL,(function (){return cmd.ui.input.scrollTop = cmd.ui.preview_container.scrollTop;
}));
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9941){var state_val_9942 = (state_9941[1]);if((state_val_9942 === 9))
{var inst_9936 = (state_9941[2]);var inst_9920 = inst_9936;var state_9941__$1 = (function (){var statearr_9943 = state_9941;(statearr_9943[7] = inst_9920);
return statearr_9943;
})();var statearr_9944_9965 = state_9941__$1;(statearr_9944_9965[2] = null);
(statearr_9944_9965[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9942 === 8))
{var inst_9930 = cmd.ui.reset_input.call(null);var inst_9931 = cmd.ui.set_preview.call(null);var state_9941__$1 = (function (){var statearr_9945 = state_9941;(statearr_9945[8] = inst_9930);
return statearr_9945;
})();var statearr_9946_9966 = state_9941__$1;(statearr_9946_9966[2] = inst_9931);
(statearr_9946_9966[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9942 === 7))
{var inst_9924 = (state_9941[9]);var inst_9927 = cmd.ui.set_input.call(null,inst_9924);var inst_9928 = cmd.ui.set_preview.call(null);var state_9941__$1 = (function (){var statearr_9947 = state_9941;(statearr_9947[10] = inst_9927);
return statearr_9947;
})();var statearr_9948_9967 = state_9941__$1;(statearr_9948_9967[2] = inst_9928);
(statearr_9948_9967[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9942 === 6))
{var inst_9925 = cmd.ui.load_gists.call(null);var state_9941__$1 = state_9941;var statearr_9949_9968 = state_9941__$1;(statearr_9949_9968[2] = inst_9925);
(statearr_9949_9968[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9942 === 5))
{var inst_9934 = (state_9941[2]);var state_9941__$1 = (function (){var statearr_9950 = state_9941;(statearr_9950[11] = inst_9934);
return statearr_9950;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9941__$1,9,app_bus);
} else
{if((state_val_9942 === 4))
{var inst_9939 = (state_9941[2]);var state_9941__$1 = state_9941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9941__$1,inst_9939);
} else
{if((state_val_9942 === 3))
{var inst_9920 = (state_9941[7]);var inst_9923 = cljs.core.nth.call(null,inst_9920,0,null);var inst_9924 = cljs.core.nth.call(null,inst_9920,1,null);var state_9941__$1 = (function (){var statearr_9951 = state_9941;(statearr_9951[9] = inst_9924);
return statearr_9951;
})();var G__9952_9969 = inst_9923;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-logged-out","user-is-logged-out",2570729974),G__9952_9969))
{var statearr_9953_9970 = state_9941__$1;(statearr_9953_9970[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9952_9969))
{var statearr_9954_9971 = state_9941__$1;(statearr_9954_9971[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9952_9969))
{var statearr_9955_9972 = state_9941__$1;(statearr_9955_9972[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9923)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9942 === 2))
{var inst_9917 = (state_9941[2]);var inst_9918 = cljs.core.nth.call(null,inst_9917,0,null);var inst_9919 = cljs.core.nth.call(null,inst_9917,1,null);var inst_9920 = inst_9917;var state_9941__$1 = (function (){var statearr_9956 = state_9941;(statearr_9956[12] = inst_9918);
(statearr_9956[13] = inst_9919);
(statearr_9956[7] = inst_9920);
return statearr_9956;
})();var statearr_9957_9973 = state_9941__$1;(statearr_9957_9973[2] = null);
(statearr_9957_9973[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9942 === 1))
{var state_9941__$1 = state_9941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9941__$1,2,app_bus);
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
var state_machine__6277__auto____0 = (function (){var statearr_9961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9961[0] = state_machine__6277__auto__);
(statearr_9961[1] = 1);
return statearr_9961;
});
var state_machine__6277__auto____1 = (function (state_9941){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9941);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9962){if((e9962 instanceof Object))
{var ex__6280__auto__ = e9962;var statearr_9963_9974 = state_9941;(statearr_9963_9974[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9975 = state_9941;
state_9941 = G__9975;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9941){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9964 = f__6292__auto__.call(null);(statearr_9964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.ui.getcookie.call(null,"username");var auth_token = cmd.ui.getcookie.call(null,"auth-token");cmd.ui.subscribe_appbus.call(null,app_bus);
cmd.ui.setup_common_listeners.call(null);
cmd.ui.authenticate.call(null,username,auth_token);
return cmd.ui.render_toolbar.call(null,state);
});
cmd.ui.main.call(null,cmd.ui.state,cmd.ui.AppBus);

//# sourceMappingURL=ui.js.map