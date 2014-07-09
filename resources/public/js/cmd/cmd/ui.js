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
cljs.core._STAR_print_fn_STAR_ = (function (p1__9280_SHARP_){return console.log(p1__9280_SHARP_);
});
cmd.ui.motd = "# Welcome to CMD\n\nIt is an explosive mixture of ***ClojureScript, Rx, React/Om, core.async, github CORS api, ace, pagedown*** crafted together to give you *the best* gist editing tool, ever.\nIt's currently an alfa-quality prototype, so do not expect to much.\n\n\nTo begin:\n\n- just provide your Github username and a *secret*,\n- or select a gist from the list above if you are logged in already :-)";
cmd.ui.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview-output","preview-output",4188357144),null], null));
cmd.ui.AppBus = cljs.core.async.chan.call(null,1);
cmd.ui.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.ui.reset_state = (function reset_state(state){return cljs.core.swap_BANG_.call(null,state,(function() { 
var G__9281__delegate = function (_){return cljs.core.PersistentArrayMap.EMPTY;
};
var G__9281 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9281__delegate.call(this,_);};
G__9281.cljs$lang$maxFixedArity = 0;
G__9281.cljs$lang$applyTo = (function (arglist__9282){
var _ = cljs.core.seq(arglist__9282);
return G__9281__delegate(_);
});
G__9281.cljs$core$IFn$_invoke$arity$variadic = G__9281__delegate;
return G__9281;
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
return (function (e){var data = e.data;var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__,data,worker,ch){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__,data,worker,ch){
return (function (state_9305){var state_val_9306 = (state_9305[1]);if((state_val_9306 === 2))
{var inst_9302 = (state_9305[2]);var inst_9303 = cljs.core.async.close_BANG_.call(null,ch);var state_9305__$1 = (function (){var statearr_9307 = state_9305;(statearr_9307[7] = inst_9302);
return statearr_9307;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9305__$1,inst_9303);
} else
{if((state_val_9306 === 1))
{var inst_9299 = [new cljs.core.Keyword(null,"just","just",1017178206),data];var inst_9300 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9299,null));var state_9305__$1 = state_9305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9305__$1,2,ch,inst_9300);
} else
{return null;
}
}
});})(c__6261__auto__,data,worker,ch))
;return ((function (switch__6246__auto__,c__6261__auto__,data,worker,ch){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9311 = [null,null,null,null,null,null,null,null];(statearr_9311[0] = state_machine__6247__auto__);
(statearr_9311[1] = 1);
return statearr_9311;
});
var state_machine__6247__auto____1 = (function (state_9305){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9305);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9312){if((e9312 instanceof Object))
{var ex__6250__auto__ = e9312;var statearr_9313_9315 = state_9305;(statearr_9313_9315[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9305);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9316 = state_9305;
state_9305 = G__9316;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9305){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__,data,worker,ch))
})();var state__6263__auto__ = (function (){var statearr_9314 = f__6262__auto__.call(null);(statearr_9314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__,data,worker,ch))
);
return c__6261__auto__;
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
cmd.ui.process = (function process__$1(md,cb){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9358){var state_val_9359 = (state_9358[1]);if((state_val_9359 === 5))
{var inst_9353 = cb.call(null,"<Error>");var state_9358__$1 = state_9358;var statearr_9360_9373 = state_9358__$1;(statearr_9360_9373[2] = inst_9353);
(statearr_9360_9373[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9359 === 4))
{var inst_9350 = (state_9358[7]);var inst_9351 = cb.call(null,inst_9350);var state_9358__$1 = state_9358;var statearr_9361_9374 = state_9358__$1;(statearr_9361_9374[2] = inst_9351);
(statearr_9361_9374[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9359 === 3))
{var inst_9356 = (state_9358[2]);var state_9358__$1 = state_9358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9358__$1,inst_9356);
} else
{if((state_val_9359 === 2))
{var inst_9348 = (state_9358[2]);var inst_9349 = cljs.core.nth.call(null,inst_9348,0,null);var inst_9350 = cljs.core.nth.call(null,inst_9348,1,null);var state_9358__$1 = (function (){var statearr_9362 = state_9358;(statearr_9362[7] = inst_9350);
return statearr_9362;
})();var G__9363_9375 = inst_9349;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9363_9375))
{var statearr_9364_9376 = state_9358__$1;(statearr_9364_9376[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9363_9375))
{var statearr_9365_9377 = state_9358__$1;(statearr_9365_9377[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9349)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9359 === 1))
{var inst_9346 = cmd.ui.wmd__GT_html.call(null,md);var state_9358__$1 = state_9358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9358__$1,2,inst_9346);
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
var state_machine__6247__auto____0 = (function (){var statearr_9369 = [null,null,null,null,null,null,null,null];(statearr_9369[0] = state_machine__6247__auto__);
(statearr_9369[1] = 1);
return statearr_9369;
});
var state_machine__6247__auto____1 = (function (state_9358){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9358);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9370){if((e9370 instanceof Object))
{var ex__6250__auto__ = e9370;var statearr_9371_9378 = state_9358;(statearr_9371_9378[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9358);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9379 = state_9358;
state_9358 = G__9379;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9358){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9372 = f__6262__auto__.call(null);(statearr_9372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.auth_param = (function auth_param(username,auth_token){var obj9383 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(auth_token)].join(''),"Content-Type":"application/json"};return obj9383;
});
cmd.ui.resp_handler = (function resp_handler(ch,event){var error_code = event.target.getLastErrorCode();var res = event.target.getResponseText();var pred__9419 = cljs.core._EQ_;var expr__9420 = error_code;if(cljs.core.truth_(pred__9419.call(null,goog.net.ErrorCode.NO_ERROR,expr__9420)))
{var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__,pred__9419,expr__9420,error_code,res){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__,pred__9419,expr__9420,error_code,res){
return (function (state_9428){var state_val_9429 = (state_9428[1]);if((state_val_9429 === 2))
{var inst_9425 = (state_9428[2]);var inst_9426 = cljs.core.async.close_BANG_.call(null,ch);var state_9428__$1 = (function (){var statearr_9430 = state_9428;(statearr_9430[7] = inst_9425);
return statearr_9430;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9428__$1,inst_9426);
} else
{if((state_val_9429 === 1))
{var inst_9422 = [new cljs.core.Keyword(null,"just","just",1017178206),res];var inst_9423 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9422,null));var state_9428__$1 = state_9428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9428__$1,2,ch,inst_9423);
} else
{return null;
}
}
});})(c__6261__auto__,pred__9419,expr__9420,error_code,res))
;return ((function (switch__6246__auto__,c__6261__auto__,pred__9419,expr__9420,error_code,res){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9434 = [null,null,null,null,null,null,null,null];(statearr_9434[0] = state_machine__6247__auto__);
(statearr_9434[1] = 1);
return statearr_9434;
});
var state_machine__6247__auto____1 = (function (state_9428){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9428);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9435){if((e9435 instanceof Object))
{var ex__6250__auto__ = e9435;var statearr_9436_9454 = state_9428;(statearr_9436_9454[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9428);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9455 = state_9428;
state_9428 = G__9455;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9428){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__,pred__9419,expr__9420,error_code,res))
})();var state__6263__auto__ = (function (){var statearr_9437 = f__6262__auto__.call(null);(statearr_9437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__,pred__9419,expr__9420,error_code,res))
);
return c__6261__auto__;
} else
{var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__,pred__9419,expr__9420,error_code,res){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__,pred__9419,expr__9420,error_code,res){
return (function (state_9444){var state_val_9445 = (state_9444[1]);if((state_val_9445 === 2))
{var inst_9441 = (state_9444[2]);var inst_9442 = cljs.core.async.close_BANG_.call(null,ch);var state_9444__$1 = (function (){var statearr_9446 = state_9444;(statearr_9446[7] = inst_9441);
return statearr_9446;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9444__$1,inst_9442);
} else
{if((state_val_9445 === 1))
{var inst_9438 = [new cljs.core.Keyword(null,"nothing","nothing",3143228223),res];var inst_9439 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9438,null));var state_9444__$1 = state_9444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9444__$1,2,ch,inst_9439);
} else
{return null;
}
}
});})(c__6261__auto__,pred__9419,expr__9420,error_code,res))
;return ((function (switch__6246__auto__,c__6261__auto__,pred__9419,expr__9420,error_code,res){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9450 = [null,null,null,null,null,null,null,null];(statearr_9450[0] = state_machine__6247__auto__);
(statearr_9450[1] = 1);
return statearr_9450;
});
var state_machine__6247__auto____1 = (function (state_9444){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9444);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9451){if((e9451 instanceof Object))
{var ex__6250__auto__ = e9451;var statearr_9452_9456 = state_9444;(statearr_9452_9456[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9444);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9457 = state_9444;
state_9444 = G__9457;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9444){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__,pred__9419,expr__9420,error_code,res))
})();var state__6263__auto__ = (function (){var statearr_9453 = f__6262__auto__.call(null);(statearr_9453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__,pred__9419,expr__9420,error_code,res))
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
cmd.ui.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__9458_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__9458_SHARP_.call(null,"id"));
}),cmd.ui.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.ui.handle_io_error = (function handle_io_error(resp){var error_msg = resp.call(null,"message");cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"error","error",1110689146),error_msg);
return cmd.ui.say.call(null,[cljs.core.str("IO Error: "),cljs.core.str(error_msg)].join(''));
});
cmd.ui.load_gists = (function load_gists(){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9510){var state_val_9511 = (state_9510[1]);if((state_val_9511 === 5))
{var inst_9502 = (state_9510[7]);var inst_9505 = cmd.ui.handle_io_error.call(null,inst_9502);var state_9510__$1 = state_9510;var statearr_9512_9525 = state_9510__$1;(statearr_9512_9525[2] = inst_9505);
(statearr_9512_9525[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9511 === 4))
{var inst_9502 = (state_9510[7]);var inst_9503 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_9502);var state_9510__$1 = state_9510;var statearr_9513_9526 = state_9510__$1;(statearr_9513_9526[2] = inst_9503);
(statearr_9513_9526[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9511 === 3))
{var inst_9508 = (state_9510[2]);var state_9510__$1 = state_9510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9510__$1,inst_9508);
} else
{if((state_val_9511 === 2))
{var inst_9499 = (state_9510[2]);var inst_9500 = cljs.core.nth.call(null,inst_9499,0,null);var inst_9501 = cljs.core.nth.call(null,inst_9499,1,null);var inst_9502 = cmd.ui.raw__GT_clj.call(null,inst_9501);var state_9510__$1 = (function (){var statearr_9514 = state_9510;(statearr_9514[7] = inst_9502);
return statearr_9514;
})();var G__9515_9527 = inst_9500;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9515_9527))
{var statearr_9516_9528 = state_9510__$1;(statearr_9516_9528[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9515_9527))
{var statearr_9517_9529 = state_9510__$1;(statearr_9517_9529[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9500)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9511 === 1))
{var inst_9493 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9494 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9495 = [cljs.core.str("/users/"),cljs.core.str(inst_9493),cljs.core.str("/gists")].join('');var inst_9496 = cmd.ui.auth_param.call(null,inst_9493,inst_9494);var inst_9497 = cmd.ui.GET.call(null,inst_9495,inst_9496);var state_9510__$1 = state_9510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9510__$1,2,inst_9497);
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
var state_machine__6247__auto____0 = (function (){var statearr_9521 = [null,null,null,null,null,null,null,null];(statearr_9521[0] = state_machine__6247__auto__);
(statearr_9521[1] = 1);
return statearr_9521;
});
var state_machine__6247__auto____1 = (function (state_9510){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9510);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9522){if((e9522 instanceof Object))
{var ex__6250__auto__ = e9522;var statearr_9523_9530 = state_9510;(statearr_9523_9530[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9531 = state_9510;
state_9510 = G__9531;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9510){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9524 = f__6262__auto__.call(null);(statearr_9524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.load_gist = (function load_gist(id){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9606){var state_val_9607 = (state_9606[1]);if((state_val_9607 === 6))
{var inst_9586 = (state_9606[7]);var inst_9600 = cmd.ui.raw__GT_clj.call(null,inst_9586);var inst_9601 = cmd.ui.handle_io_error.call(null,inst_9600);var state_9606__$1 = state_9606;var statearr_9608_9622 = state_9606__$1;(statearr_9608_9622[2] = inst_9601);
(statearr_9608_9622[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9607 === 5))
{var inst_9598 = (state_9606[2]);var state_9606__$1 = state_9606;var statearr_9609_9623 = state_9606__$1;(statearr_9609_9623[2] = inst_9598);
(statearr_9609_9623[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9607 === 4))
{var inst_9586 = (state_9606[7]);var inst_9588 = cmd.ui.raw__GT_clj.call(null,inst_9586);var inst_9589 = inst_9588.call(null,"files");var inst_9590 = cljs.core.first.call(null,inst_9589);var inst_9591 = cljs.core.nth.call(null,inst_9590,0,null);var inst_9592 = cljs.core.nth.call(null,inst_9590,1,null);var inst_9593 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9591);var inst_9594 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9588);var inst_9595 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9596 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9595,null));var state_9606__$1 = (function (){var statearr_9610 = state_9606;(statearr_9610[8] = inst_9594);
(statearr_9610[9] = inst_9592);
(statearr_9610[10] = inst_9593);
return statearr_9610;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9606__$1,5,cmd.ui.AppBus,inst_9596);
} else
{if((state_val_9607 === 3))
{var inst_9604 = (state_9606[2]);var state_9606__$1 = state_9606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9606__$1,inst_9604);
} else
{if((state_val_9607 === 2))
{var inst_9584 = (state_9606[2]);var inst_9585 = cljs.core.nth.call(null,inst_9584,0,null);var inst_9586 = cljs.core.nth.call(null,inst_9584,1,null);var state_9606__$1 = (function (){var statearr_9611 = state_9606;(statearr_9611[7] = inst_9586);
return statearr_9611;
})();var G__9612_9624 = inst_9585;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9612_9624))
{var statearr_9613_9625 = state_9606__$1;(statearr_9613_9625[1] = 6);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9612_9624))
{var statearr_9614_9626 = state_9606__$1;(statearr_9614_9626[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9585)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9607 === 1))
{var inst_9578 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9579 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9580 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9581 = cmd.ui.auth_param.call(null,inst_9579,inst_9580);var inst_9582 = cmd.ui.GET.call(null,inst_9578,inst_9581);var state_9606__$1 = state_9606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9606__$1,2,inst_9582);
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
var state_machine__6247__auto____0 = (function (){var statearr_9618 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9618[0] = state_machine__6247__auto__);
(statearr_9618[1] = 1);
return statearr_9618;
});
var state_machine__6247__auto____1 = (function (state_9606){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9619){if((e9619 instanceof Object))
{var ex__6250__auto__ = e9619;var statearr_9620_9627 = state_9606;(statearr_9620_9627[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9628 = state_9606;
state_9606 = G__9628;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9606){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9621 = f__6262__auto__.call(null);(statearr_9621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.save_gist = (function save_gist(gist_id,new_content){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9678){var state_val_9679 = (state_9678[1]);if((state_val_9679 === 5))
{var inst_9671 = (state_9678[7]);var inst_9673 = cmd.ui.handle_io_error.call(null,inst_9671);var state_9678__$1 = state_9678;var statearr_9680_9693 = state_9678__$1;(statearr_9680_9693[2] = inst_9673);
(statearr_9680_9693[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9679 === 4))
{var inst_9671 = (state_9678[7]);var state_9678__$1 = state_9678;var statearr_9681_9694 = state_9678__$1;(statearr_9681_9694[2] = inst_9671);
(statearr_9681_9694[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9679 === 3))
{var inst_9676 = (state_9678[2]);var state_9678__$1 = state_9678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9678__$1,inst_9676);
} else
{if((state_val_9679 === 2))
{var inst_9668 = (state_9678[2]);var inst_9669 = cljs.core.nth.call(null,inst_9668,0,null);var inst_9670 = cljs.core.nth.call(null,inst_9668,1,null);var inst_9671 = cmd.ui.raw__GT_clj.call(null,inst_9670);var state_9678__$1 = (function (){var statearr_9682 = state_9678;(statearr_9682[7] = inst_9671);
return statearr_9682;
})();var G__9683_9695 = inst_9669;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9683_9695))
{var statearr_9684_9696 = state_9678__$1;(statearr_9684_9696[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9683_9695))
{var statearr_9685_9697 = state_9678__$1;(statearr_9685_9697[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9669)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9679 === 1))
{var inst_9662 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9663 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"username","username",748190792));var inst_9664 = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"auth-token","auth-token",1920647430));var inst_9665 = cmd.ui.auth_param.call(null,inst_9663,inst_9664);var inst_9666 = cmd.ui.PATCH.call(null,inst_9662,new_content,inst_9665);var state_9678__$1 = state_9678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9678__$1,2,inst_9666);
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
var state_machine__6247__auto____0 = (function (){var statearr_9689 = [null,null,null,null,null,null,null,null];(statearr_9689[0] = state_machine__6247__auto__);
(statearr_9689[1] = 1);
return statearr_9689;
});
var state_machine__6247__auto____1 = (function (state_9678){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9678);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9690){if((e9690 instanceof Object))
{var ex__6250__auto__ = e9690;var statearr_9691_9698 = state_9678;(statearr_9691_9698[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9678);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9699 = state_9678;
state_9678 = G__9699;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9678){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9692 = f__6262__auto__.call(null);(statearr_9692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9692;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.preview_container = document.getElementById("preview-container");
cmd.ui.ace_set_value = (function ace_set_value(content){return cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9701 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9701,0,null);var first_file = cljs.core.nth.call(null,vec__9701,1,null);var content = first_file.call(null,"content");return cmd.ui.ace_set_value.call(null,content);
});
cmd.ui.reset_input = (function reset_input(){return cmd.ui.ace_set_value.call(null,cmd.ui.motd);
});
cmd.ui.set_preview = (function set_preview(){var ace = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var ace_value = ace.getSession().getValue();return cmd.ui.process.call(null,ace_value,((function (ace,ace_value){
return (function (p1__9702_SHARP_){return cmd.ui.html_BANG_.call(null,cmd.ui.preview,p1__9702_SHARP_);
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
var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9722){var state_val_9723 = (state_9722[1]);if((state_val_9723 === 2))
{var inst_9720 = (state_9722[2]);var state_9722__$1 = state_9722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9722__$1,inst_9720);
} else
{if((state_val_9723 === 1))
{var inst_9717 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_9718 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9717,null));var state_9722__$1 = state_9722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9722__$1,2,cmd.ui.AppBus,inst_9718);
} else
{return null;
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9727 = [null,null,null,null,null,null,null];(statearr_9727[0] = state_machine__6247__auto__);
(statearr_9727[1] = 1);
return statearr_9727;
});
var state_machine__6247__auto____1 = (function (state_9722){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9722);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9728){if((e9728 instanceof Object))
{var ex__6250__auto__ = e9728;var statearr_9729_9731 = state_9722;(statearr_9729_9731[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9732 = state_9722;
state_9722 = G__9732;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9722){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9730 = f__6262__auto__.call(null);(statearr_9730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9730;
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
return (function (state_9752){var state_val_9753 = (state_9752[1]);if((state_val_9753 === 2))
{var inst_9750 = (state_9752[2]);var state_9752__$1 = state_9752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9752__$1,inst_9750);
} else
{if((state_val_9753 === 1))
{var inst_9747 = [new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),true];var inst_9748 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9747,null));var state_9752__$1 = state_9752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9752__$1,2,cmd.ui.AppBus,inst_9748);
} else
{return null;
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9757 = [null,null,null,null,null,null,null];(statearr_9757[0] = state_machine__6247__auto__);
(statearr_9757[1] = 1);
return statearr_9757;
});
var state_machine__6247__auto____1 = (function (state_9752){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9758){if((e9758 instanceof Object))
{var ex__6250__auto__ = e9758;var statearr_9759_9761 = state_9752;(statearr_9759_9761[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9752);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9762 = state_9752;
state_9752 = G__9762;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9752){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9760 = f__6262__auto__.call(null);(statearr_9760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9760;
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
return (function (state_9808){var state_val_9809 = (state_9808[1]);if((state_val_9809 === 5))
{var inst_9800 = (state_9808[7]);var inst_9803 = cmd.ui.unauthorized.call(null,inst_9800);var state_9808__$1 = state_9808;var statearr_9810_9823 = state_9808__$1;(statearr_9810_9823[2] = inst_9803);
(statearr_9810_9823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9809 === 4))
{var inst_9801 = cmd.ui.logged_in.call(null,username,auth_token);var state_9808__$1 = state_9808;var statearr_9811_9824 = state_9808__$1;(statearr_9811_9824[2] = inst_9801);
(statearr_9811_9824[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9809 === 3))
{var inst_9806 = (state_9808[2]);var state_9808__$1 = state_9808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9808__$1,inst_9806);
} else
{if((state_val_9809 === 2))
{var inst_9798 = (state_9808[2]);var inst_9799 = cljs.core.nth.call(null,inst_9798,0,null);var inst_9800 = cljs.core.nth.call(null,inst_9798,1,null);var state_9808__$1 = (function (){var statearr_9812 = state_9808;(statearr_9812[7] = inst_9800);
return statearr_9812;
})();var G__9813_9825 = inst_9799;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223),G__9813_9825))
{var statearr_9814_9826 = state_9808__$1;(statearr_9814_9826[1] = 5);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"just","just",1017178206),G__9813_9825))
{var statearr_9815_9827 = state_9808__$1;(statearr_9815_9827[1] = 4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9799)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9809 === 1))
{var inst_9794 = [cljs.core.str("/users/"),cljs.core.str(username),cljs.core.str("/gists")].join('');var inst_9795 = cmd.ui.auth_param.call(null,username,auth_token);var inst_9796 = cmd.ui.GET.call(null,inst_9794,inst_9795);var state_9808__$1 = state_9808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9808__$1,2,inst_9796);
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
var state_machine__6247__auto____0 = (function (){var statearr_9819 = [null,null,null,null,null,null,null,null];(statearr_9819[0] = state_machine__6247__auto__);
(statearr_9819[1] = 1);
return statearr_9819;
});
var state_machine__6247__auto____1 = (function (state_9808){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9808);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9820){if((e9820 instanceof Object))
{var ex__6250__auto__ = e9820;var statearr_9821_9828 = state_9808;(statearr_9821_9828[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9829 = state_9808;
state_9808 = G__9829;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9808){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9822 = f__6262__auto__.call(null);(statearr_9822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9822;
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
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t9833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9833 = (function (owner,state,toolbar,meta9834){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta9834 = meta9834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9833.cljs$lang$type = true;
cmd.ui.t9833.cljs$lang$ctorStr = "cmd.ui/t9833";
cmd.ui.t9833.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t9833");
});
cmd.ui.t9833.prototype.om$core$IRender$ = true;
cmd.ui.t9833.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
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
cmd.ui.t9833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9835){var self__ = this;
var _9835__$1 = this;return self__.meta9834;
});
cmd.ui.t9833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9835,meta9834__$1){var self__ = this;
var _9835__$1 = this;return (new cmd.ui.t9833(self__.owner,self__.state,self__.toolbar,meta9834__$1));
});
cmd.ui.__GT_t9833 = (function __GT_t9833(owner__$1,state__$1,toolbar__$1,meta9834){return (new cmd.ui.t9833(owner__$1,state__$1,toolbar__$1,meta9834));
});
}
return (new cmd.ui.t9833(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.setup_editor_listeners = (function setup_editor_listeners(){var session = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession();Rx.Observable.create(((function (session){
return (function (observer){return session.on("changeScrollTop",((function (session){
return (function (p1__9836_SHARP_){return observer.onNext(p1__9836_SHARP_);
});})(session))
);
});})(session))
).throttle(15).subscribe(((function (session){
return (function (p1__9837_SHARP_){return cmd.ui.preview_container.scrollTop = p1__9837_SHARP_;
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
return (function (state_9912){var state_val_9913 = (state_9912[1]);if((state_val_9913 === 9))
{var inst_9907 = (state_9912[2]);var inst_9893 = inst_9907;var state_9912__$1 = (function (){var statearr_9914 = state_9912;(statearr_9914[7] = inst_9893);
return statearr_9914;
})();var statearr_9915_9934 = state_9912__$1;(statearr_9915_9934[2] = null);
(statearr_9915_9934[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9913 === 8))
{var inst_9902 = cmd.ui.reset_input.call(null);var state_9912__$1 = state_9912;var statearr_9916_9935 = state_9912__$1;(statearr_9916_9935[2] = inst_9902);
(statearr_9916_9935[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9913 === 7))
{var inst_9897 = (state_9912[8]);var inst_9900 = cmd.ui.set_input.call(null,inst_9897);var state_9912__$1 = state_9912;var statearr_9917_9936 = state_9912__$1;(statearr_9917_9936[2] = inst_9900);
(statearr_9917_9936[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9913 === 6))
{var inst_9898 = cmd.ui.load_gists.call(null);var state_9912__$1 = state_9912;var statearr_9918_9937 = state_9912__$1;(statearr_9918_9937[2] = inst_9898);
(statearr_9918_9937[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9913 === 5))
{var inst_9905 = (state_9912[2]);var state_9912__$1 = (function (){var statearr_9919 = state_9912;(statearr_9919[9] = inst_9905);
return statearr_9919;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9912__$1,9,app_bus);
} else
{if((state_val_9913 === 4))
{var inst_9910 = (state_9912[2]);var state_9912__$1 = state_9912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9912__$1,inst_9910);
} else
{if((state_val_9913 === 3))
{var inst_9893 = (state_9912[7]);var inst_9896 = cljs.core.nth.call(null,inst_9893,0,null);var inst_9897 = cljs.core.nth.call(null,inst_9893,1,null);var state_9912__$1 = (function (){var statearr_9920 = state_9912;(statearr_9920[8] = inst_9897);
return statearr_9920;
})();var G__9921_9938 = inst_9896;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__9921_9938))
{var statearr_9922_9939 = state_9912__$1;(statearr_9922_9939[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9921_9938))
{var statearr_9923_9940 = state_9912__$1;(statearr_9923_9940[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9921_9938))
{var statearr_9924_9941 = state_9912__$1;(statearr_9924_9941[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9896)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9913 === 2))
{var inst_9890 = (state_9912[2]);var inst_9891 = cljs.core.nth.call(null,inst_9890,0,null);var inst_9892 = cljs.core.nth.call(null,inst_9890,1,null);var inst_9893 = inst_9890;var state_9912__$1 = (function (){var statearr_9925 = state_9912;(statearr_9925[7] = inst_9893);
(statearr_9925[10] = inst_9892);
(statearr_9925[11] = inst_9891);
return statearr_9925;
})();var statearr_9926_9942 = state_9912__$1;(statearr_9926_9942[2] = null);
(statearr_9926_9942[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9913 === 1))
{var state_9912__$1 = state_9912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9912__$1,2,app_bus);
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
var state_machine__6247__auto____0 = (function (){var statearr_9930 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9930[0] = state_machine__6247__auto__);
(statearr_9930[1] = 1);
return statearr_9930;
});
var state_machine__6247__auto____1 = (function (state_9912){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9912);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9931){if((e9931 instanceof Object))
{var ex__6250__auto__ = e9931;var statearr_9932_9943 = state_9912;(statearr_9932_9943[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9912);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9944 = state_9912;
state_9912 = G__9944;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9912){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9933 = f__6262__auto__.call(null);(statearr_9933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
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