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
cmd.ui.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.ui.auth_param = (function auth_param(username,auth_token){var obj9407 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj9407;
});
cmd.ui.resp_handler = (function resp_handler(ch,event){var error_code = event.target.getLastErrorCode();var res = event.target.getResponseText();var pred__9443 = cljs.core._EQ_;var expr__9444 = error_code;if(cljs.core.truth_(pred__9443.call(null,goog.net.ErrorCode.NO_ERROR,expr__9444)))
{var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,pred__9443,expr__9444,error_code,res){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,pred__9443,expr__9444,error_code,res){
return (function (state_9452){var state_val_9453 = (state_9452[1]);if((state_val_9453 === 2))
{var inst_9449 = (state_9452[2]);var inst_9450 = cljs.core.async.close_BANG_.call(null,ch);var state_9452__$1 = (function (){var statearr_9454 = state_9452;(statearr_9454[7] = inst_9449);
return statearr_9454;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9452__$1,inst_9450);
} else
{if((state_val_9453 === 1))
{var inst_9446 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_9447 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9446,null));var state_9452__$1 = state_9452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9452__$1,2,ch,inst_9447);
} else
{return null;
}
}
});})(c__6291__auto__,pred__9443,expr__9444,error_code,res))
;return ((function (switch__6276__auto__,c__6291__auto__,pred__9443,expr__9444,error_code,res){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9458 = [null,null,null,null,null,null,null,null];(statearr_9458[0] = state_machine__6277__auto__);
(statearr_9458[1] = 1);
return statearr_9458;
});
var state_machine__6277__auto____1 = (function (state_9452){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9452);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9459){if((e9459 instanceof Object))
{var ex__6280__auto__ = e9459;var statearr_9460_9478 = state_9452;(statearr_9460_9478[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9479 = state_9452;
state_9452 = G__9479;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9452){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,pred__9443,expr__9444,error_code,res))
})();var state__6293__auto__ = (function (){var statearr_9461 = f__6292__auto__.call(null);(statearr_9461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,pred__9443,expr__9444,error_code,res))
);
return c__6291__auto__;
} else
{var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,pred__9443,expr__9444,error_code,res){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,pred__9443,expr__9444,error_code,res){
return (function (state_9468){var state_val_9469 = (state_9468[1]);if((state_val_9469 === 2))
{var inst_9465 = (state_9468[2]);var inst_9466 = cljs.core.async.close_BANG_.call(null,ch);var state_9468__$1 = (function (){var statearr_9470 = state_9468;(statearr_9470[7] = inst_9465);
return statearr_9470;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9468__$1,inst_9466);
} else
{if((state_val_9469 === 1))
{var inst_9462 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_9463 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9462,null));var state_9468__$1 = state_9468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9468__$1,2,ch,inst_9463);
} else
{return null;
}
}
});})(c__6291__auto__,pred__9443,expr__9444,error_code,res))
;return ((function (switch__6276__auto__,c__6291__auto__,pred__9443,expr__9444,error_code,res){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9474 = [null,null,null,null,null,null,null,null];(statearr_9474[0] = state_machine__6277__auto__);
(statearr_9474[1] = 1);
return statearr_9474;
});
var state_machine__6277__auto____1 = (function (state_9468){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9468);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9475){if((e9475 instanceof Object))
{var ex__6280__auto__ = e9475;var statearr_9476_9480 = state_9468;(statearr_9476_9480[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9468);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9481 = state_9468;
state_9468 = G__9481;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9468){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,pred__9443,expr__9444,error_code,res))
})();var state__6293__auto__ = (function (){var statearr_9477 = f__6292__auto__.call(null);(statearr_9477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,pred__9443,expr__9444,error_code,res))
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
cmd.ui.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__9482_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__9482_SHARP_.call(null,"id"));
}),cmd.ui.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.ui.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.ui.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.ui.load_gists = (function load_gists(){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9534){var state_val_9535 = (state_9534[1]);if((state_val_9535 === 5))
{var inst_9526 = (state_9534[7]);var inst_9529 = cmd.ui.handle_io_error.call(null,inst_9526);var state_9534__$1 = state_9534;var statearr_9536_9549 = state_9534__$1;(statearr_9536_9549[2] = inst_9529);
(statearr_9536_9549[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 4))
{var inst_9526 = (state_9534[7]);var inst_9527 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_9526);var state_9534__$1 = state_9534;var statearr_9537_9550 = state_9534__$1;(statearr_9537_9550[2] = inst_9527);
(statearr_9537_9550[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 3))
{var inst_9532 = (state_9534[2]);var state_9534__$1 = state_9534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9534__$1,inst_9532);
} else
{if((state_val_9535 === 2))
{var inst_9523 = (state_9534[2]);var inst_9524 = cljs.core.nth.call(null,inst_9523,0,null);var inst_9525 = cljs.core.nth.call(null,inst_9523,1,null);var inst_9526 = cmd.ui.raw__GT_clj.call(null,inst_9525);var state_9534__$1 = (function (){var statearr_9538 = state_9534;(statearr_9538[7] = inst_9526);
return statearr_9538;
})();var G__9539_9551 = inst_9524;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9539_9551))
{var statearr_9540_9552 = state_9534__$1;(statearr_9540_9552[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9539_9551))
{var statearr_9541_9553 = state_9534__$1;(statearr_9541_9553[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9524)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 1))
{var inst_9517 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9518 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9519 = [cljs.core.str("/users/"),cljs.core.str(inst_9517),cljs.core.str("/gists")].join('');var inst_9520 = cmd.ui.auth_param.call(null,inst_9517,inst_9518);var inst_9521 = cmd.ui.GET.call(null,inst_9519,inst_9520);var state_9534__$1 = state_9534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9534__$1,2,inst_9521);
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
var state_machine__6277__auto____0 = (function (){var statearr_9545 = [null,null,null,null,null,null,null,null];(statearr_9545[0] = state_machine__6277__auto__);
(statearr_9545[1] = 1);
return statearr_9545;
});
var state_machine__6277__auto____1 = (function (state_9534){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9534);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9546){if((e9546 instanceof Object))
{var ex__6280__auto__ = e9546;var statearr_9547_9554 = state_9534;(statearr_9547_9554[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9534);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9555 = state_9534;
state_9534 = G__9555;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9534){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9548 = f__6292__auto__.call(null);(statearr_9548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.load_gist = (function load_gist(id){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9630){var state_val_9631 = (state_9630[1]);if((state_val_9631 === 6))
{var inst_9610 = (state_9630[7]);var inst_9624 = cmd.ui.raw__GT_clj.call(null,inst_9610);var inst_9625 = cmd.ui.handle_io_error.call(null,inst_9624);var state_9630__$1 = state_9630;var statearr_9632_9646 = state_9630__$1;(statearr_9632_9646[2] = inst_9625);
(statearr_9632_9646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9631 === 5))
{var inst_9622 = (state_9630[2]);var state_9630__$1 = state_9630;var statearr_9633_9647 = state_9630__$1;(statearr_9633_9647[2] = inst_9622);
(statearr_9633_9647[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9631 === 4))
{var inst_9610 = (state_9630[7]);var inst_9612 = cmd.ui.raw__GT_clj.call(null,inst_9610);var inst_9613 = inst_9612.call(null,"files");var inst_9614 = cljs.core.first.call(null,inst_9613);var inst_9615 = cljs.core.nth.call(null,inst_9614,0,null);var inst_9616 = cljs.core.nth.call(null,inst_9614,1,null);var inst_9617 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9615);var inst_9618 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9612);var inst_9619 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9620 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9619,null));var state_9630__$1 = (function (){var statearr_9634 = state_9630;(statearr_9634[8] = inst_9618);
(statearr_9634[9] = inst_9617);
(statearr_9634[10] = inst_9616);
return statearr_9634;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9630__$1,5,cmd.ui.AppBus,inst_9620);
} else
{if((state_val_9631 === 3))
{var inst_9628 = (state_9630[2]);var state_9630__$1 = state_9630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9630__$1,inst_9628);
} else
{if((state_val_9631 === 2))
{var inst_9608 = (state_9630[2]);var inst_9609 = cljs.core.nth.call(null,inst_9608,0,null);var inst_9610 = cljs.core.nth.call(null,inst_9608,1,null);var state_9630__$1 = (function (){var statearr_9635 = state_9630;(statearr_9635[7] = inst_9610);
return statearr_9635;
})();var G__9636_9648 = inst_9609;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9636_9648))
{var statearr_9637_9649 = state_9630__$1;(statearr_9637_9649[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9636_9648))
{var statearr_9638_9650 = state_9630__$1;(statearr_9638_9650[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9609)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9631 === 1))
{var inst_9602 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9603 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9604 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9605 = cmd.ui.auth_param.call(null,inst_9603,inst_9604);var inst_9606 = cmd.ui.GET.call(null,inst_9602,inst_9605);var state_9630__$1 = state_9630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9630__$1,2,inst_9606);
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
var state_machine__6277__auto____0 = (function (){var statearr_9642 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9642[0] = state_machine__6277__auto__);
(statearr_9642[1] = 1);
return statearr_9642;
});
var state_machine__6277__auto____1 = (function (state_9630){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9630);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9643){if((e9643 instanceof Object))
{var ex__6280__auto__ = e9643;var statearr_9644_9651 = state_9630;(statearr_9644_9651[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9630);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9652 = state_9630;
state_9630 = G__9652;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9630){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9645 = f__6292__auto__.call(null);(statearr_9645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.save_gist = (function save_gist(gist_id,new_content){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9702){var state_val_9703 = (state_9702[1]);if((state_val_9703 === 5))
{var inst_9695 = (state_9702[7]);var inst_9697 = cmd.ui.handle_io_error.call(null,inst_9695);var state_9702__$1 = state_9702;var statearr_9704_9717 = state_9702__$1;(statearr_9704_9717[2] = inst_9697);
(statearr_9704_9717[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9703 === 4))
{var inst_9695 = (state_9702[7]);var state_9702__$1 = state_9702;var statearr_9705_9718 = state_9702__$1;(statearr_9705_9718[2] = inst_9695);
(statearr_9705_9718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9703 === 3))
{var inst_9700 = (state_9702[2]);var state_9702__$1 = state_9702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9702__$1,inst_9700);
} else
{if((state_val_9703 === 2))
{var inst_9692 = (state_9702[2]);var inst_9693 = cljs.core.nth.call(null,inst_9692,0,null);var inst_9694 = cljs.core.nth.call(null,inst_9692,1,null);var inst_9695 = cmd.ui.raw__GT_clj.call(null,inst_9694);var state_9702__$1 = (function (){var statearr_9706 = state_9702;(statearr_9706[7] = inst_9695);
return statearr_9706;
})();var G__9707_9719 = inst_9693;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9707_9719))
{var statearr_9708_9720 = state_9702__$1;(statearr_9708_9720[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9707_9719))
{var statearr_9709_9721 = state_9702__$1;(statearr_9709_9721[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9693)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9703 === 1))
{var inst_9686 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9687 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9688 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9689 = cmd.ui.auth_param.call(null,inst_9687,inst_9688);var inst_9690 = cmd.ui.PATCH.call(null,inst_9686,new_content,inst_9689);var state_9702__$1 = state_9702;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9702__$1,2,inst_9690);
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
var state_machine__6277__auto____0 = (function (){var statearr_9713 = [null,null,null,null,null,null,null,null];(statearr_9713[0] = state_machine__6277__auto__);
(statearr_9713[1] = 1);
return statearr_9713;
});
var state_machine__6277__auto____1 = (function (state_9702){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9702);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9714){if((e9714 instanceof Object))
{var ex__6280__auto__ = e9714;var statearr_9715_9722 = state_9702;(statearr_9715_9722[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9702);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9723 = state_9702;
state_9702 = G__9723;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9702){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9716 = f__6292__auto__.call(null);(statearr_9716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.preview_container = document.getElementById("preview-container");
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9725 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9725,0,null);var first_file = cljs.core.nth.call(null,vec__9725,1,null);var content = first_file.call(null,"content");return cmd.ui.input.value = content;
});
cmd.ui.set_preview = (function set_preview(_){return cmd.ui.html_BANG_.call(null,cmd.ui.preview,cmd.ui.process.call(null,cmd.ui.input.value));
});
cmd.ui.handle_pull = (function handle_pull(_){return cmd.ui.load_gist.call(null,cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.ui.handle_push = (function handle_push(_){var md_raw = cmd.ui.input.value;var gist_id = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043));var file_name = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var new_content = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);var result = cmd.ui.save_gist.call(null,gist_id,new_content);return cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),result);
});
cmd.ui.handle_logout = (function handle_logout(_){cmd.ui.say.call(null,"Logout");
return cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"valid-credentials","valid-credentials",4398423581),false);
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
return (function (state_9745){var state_val_9746 = (state_9745[1]);if((state_val_9746 === 2))
{var inst_9743 = (state_9745[2]);var state_9745__$1 = state_9745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9745__$1,inst_9743);
} else
{if((state_val_9746 === 1))
{var inst_9740 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9741 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9740,null));var state_9745__$1 = state_9745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9745__$1,2,cmd.ui.AppBus,inst_9741);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9750 = [null,null,null,null,null,null,null];(statearr_9750[0] = state_machine__6277__auto__);
(statearr_9750[1] = 1);
return statearr_9750;
});
var state_machine__6277__auto____1 = (function (state_9745){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9745);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9751){if((e9751 instanceof Object))
{var ex__6280__auto__ = e9751;var statearr_9752_9754 = state_9745;(statearr_9752_9754[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9745);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9755 = state_9745;
state_9745 = G__9755;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9745){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9753 = f__6292__auto__.call(null);(statearr_9753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9753;
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
return (function (state_9801){var state_val_9802 = (state_9801[1]);if((state_val_9802 === 5))
{var inst_9793 = (state_9801[7]);var inst_9796 = cmd.ui.unauthorized.call(null,inst_9793);var state_9801__$1 = state_9801;var statearr_9803_9816 = state_9801__$1;(statearr_9803_9816[2] = inst_9796);
(statearr_9803_9816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9802 === 4))
{var inst_9794 = cmd.ui.logged_in.call(null,username,auth_token);var state_9801__$1 = state_9801;var statearr_9804_9817 = state_9801__$1;(statearr_9804_9817[2] = inst_9794);
(statearr_9804_9817[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9802 === 3))
{var inst_9799 = (state_9801[2]);var state_9801__$1 = state_9801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9801__$1,inst_9799);
} else
{if((state_val_9802 === 2))
{var inst_9791 = (state_9801[2]);var inst_9792 = cljs.core.nth.call(null,inst_9791,0,null);var inst_9793 = cljs.core.nth.call(null,inst_9791,1,null);var state_9801__$1 = (function (){var statearr_9805 = state_9801;(statearr_9805[7] = inst_9793);
return statearr_9805;
})();var G__9806_9818 = inst_9792;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9806_9818))
{var statearr_9807_9819 = state_9801__$1;(statearr_9807_9819[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9806_9818))
{var statearr_9808_9820 = state_9801__$1;(statearr_9808_9820[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9792)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9802 === 1))
{var inst_9787 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9788 = cmd.ui.auth_param.call(null,username,auth_token);var inst_9789 = cmd.ui.GET.call(null,inst_9787,inst_9788);var state_9801__$1 = state_9801;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9801__$1,2,inst_9789);
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
var state_machine__6277__auto____0 = (function (){var statearr_9812 = [null,null,null,null,null,null,null,null];(statearr_9812[0] = state_machine__6277__auto__);
(statearr_9812[1] = 1);
return statearr_9812;
});
var state_machine__6277__auto____1 = (function (state_9801){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9801);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9813){if((e9813 instanceof Object))
{var ex__6280__auto__ = e9813;var statearr_9814_9821 = state_9801;(statearr_9814_9821[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9801);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9822 = state_9801;
state_9801 = G__9822;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9801){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9815 = f__6292__auto__.call(null);(statearr_9815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9815;
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
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t9826 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9826 = (function (owner,state,toolbar,meta9827){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta9827 = meta9827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9826.cljs$lang$type = true;
cmd.ui.t9826.cljs$lang$ctorStr = "cmd.ui/t9826";
cmd.ui.t9826.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t9826");
});
cmd.ui.t9826.prototype.om$core$IRender$ = true;
cmd.ui.t9826.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
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
cmd.ui.t9826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9828){var self__ = this;
var _9828__$1 = this;return self__.meta9827;
});
cmd.ui.t9826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9828,meta9827__$1){var self__ = this;
var _9828__$1 = this;return (new cmd.ui.t9826(self__.owner,self__.state,self__.toolbar,meta9827__$1));
});
cmd.ui.__GT_t9826 = (function __GT_t9826(owner__$1,state__$1,toolbar__$1,meta9827){return (new cmd.ui.t9826(owner__$1,state__$1,toolbar__$1,meta9827));
});
}
return (new cmd.ui.t9826(owner,state,toolbar,null));
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
return (function (state_9900){var state_val_9901 = (state_9900[1]);if((state_val_9901 === 8))
{var inst_9895 = (state_9900[2]);var inst_9882 = inst_9895;var state_9900__$1 = (function (){var statearr_9902 = state_9900;(statearr_9902[7] = inst_9882);
return statearr_9902;
})();var statearr_9903_9921 = state_9900__$1;(statearr_9903_9921[2] = null);
(statearr_9903_9921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 7))
{var inst_9886 = (state_9900[8]);var inst_9889 = cmd.ui.set_input.call(null,inst_9886);var inst_9890 = cmd.ui.set_preview.call(null,null);var state_9900__$1 = (function (){var statearr_9904 = state_9900;(statearr_9904[9] = inst_9889);
return statearr_9904;
})();var statearr_9905_9922 = state_9900__$1;(statearr_9905_9922[2] = inst_9890);
(statearr_9905_9922[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 6))
{var inst_9887 = cmd.ui.load_gists.call(null);var state_9900__$1 = state_9900;var statearr_9906_9923 = state_9900__$1;(statearr_9906_9923[2] = inst_9887);
(statearr_9906_9923[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 5))
{var inst_9893 = (state_9900[2]);var state_9900__$1 = (function (){var statearr_9907 = state_9900;(statearr_9907[10] = inst_9893);
return statearr_9907;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9900__$1,8,app_bus);
} else
{if((state_val_9901 === 4))
{var inst_9898 = (state_9900[2]);var state_9900__$1 = state_9900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9900__$1,inst_9898);
} else
{if((state_val_9901 === 3))
{var inst_9882 = (state_9900[7]);var inst_9885 = cljs.core.nth.call(null,inst_9882,0,null);var inst_9886 = cljs.core.nth.call(null,inst_9882,1,null);var state_9900__$1 = (function (){var statearr_9908 = state_9900;(statearr_9908[8] = inst_9886);
return statearr_9908;
})();var G__9909_9924 = inst_9885;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9909_9924))
{var statearr_9910_9925 = state_9900__$1;(statearr_9910_9925[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9909_9924))
{var statearr_9911_9926 = state_9900__$1;(statearr_9911_9926[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9885)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 2))
{var inst_9879 = (state_9900[2]);var inst_9880 = cljs.core.nth.call(null,inst_9879,0,null);var inst_9881 = cljs.core.nth.call(null,inst_9879,1,null);var inst_9882 = inst_9879;var state_9900__$1 = (function (){var statearr_9912 = state_9900;(statearr_9912[11] = inst_9881);
(statearr_9912[12] = inst_9880);
(statearr_9912[7] = inst_9882);
return statearr_9912;
})();var statearr_9913_9927 = state_9900__$1;(statearr_9913_9927[2] = null);
(statearr_9913_9927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 1))
{var state_9900__$1 = state_9900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9900__$1,2,app_bus);
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
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9917 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9917[0] = state_machine__6277__auto__);
(statearr_9917[1] = 1);
return statearr_9917;
});
var state_machine__6277__auto____1 = (function (state_9900){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9900);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9918){if((e9918 instanceof Object))
{var ex__6280__auto__ = e9918;var statearr_9919_9928 = state_9900;(statearr_9919_9928[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9900);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9929 = state_9900;
state_9900 = G__9929;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9900){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9920 = f__6292__auto__.call(null);(statearr_9920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9920;
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