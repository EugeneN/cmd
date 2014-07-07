// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('markdown.core');
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
goog.require('goog.events.KeyCodes');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
cmd.ui.auth_token = "ea69c0bf54df678124e1788d87efaf94374e149b";
cmd.ui.auth_token_b64 = "ZWE2OWMwYmY1NGRmNjc4MTI0ZTE3ODhkODdlZmFmOTQzNzRlMTQ5Yjp4LW9hdXRoLWJhc2lj";
cmd.ui.auth_param = (function (){var obj9375 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(cmd.ui.auth_token_b64)].join(''),"Content-Type":"application/json"};return obj9375;
})();
cmd.ui.say = (function say(smth){return console.log(smth);
});
cmd.ui.html_BANG_ = (function html_BANG_(node,html){return node.innerHTML = html;
});
cmd.ui.join_gist_names = (function join_gist_names(file_keys){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," <;> ",file_keys));
});
cmd.ui.raw__GT_clj = (function raw__GT_clj(raw){return cljs.core.js__GT_clj.call(null,JSON.parse(raw));
});
cmd.ui.md__GT_html = (function md__GT_html(text){return markdown.core.mdToHtml(text);
});
cmd.ui.html__GT_react = (function html__GT_react(html){return html;
});
cmd.ui.resp_handler = (function resp_handler(ch,event){var res = event.target.getResponseText();var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__,res){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__,res){
return (function (state_9394){var state_val_9395 = (state_9394[1]);if((state_val_9395 === 2))
{var inst_9391 = (state_9394[2]);var inst_9392 = cljs.core.async.close_BANG_.call(null,ch);var state_9394__$1 = (function (){var statearr_9396 = state_9394;(statearr_9396[7] = inst_9391);
return statearr_9396;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9394__$1,inst_9392);
} else
{if((state_val_9395 === 1))
{var state_9394__$1 = state_9394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9394__$1,2,ch,res);
} else
{return null;
}
}
});})(c__6261__auto__,res))
;return ((function (switch__6246__auto__,c__6261__auto__,res){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9400 = [null,null,null,null,null,null,null,null];(statearr_9400[0] = state_machine__6247__auto__);
(statearr_9400[1] = 1);
return statearr_9400;
});
var state_machine__6247__auto____1 = (function (state_9394){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9394);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9401){if((e9401 instanceof Object))
{var ex__6250__auto__ = e9401;var statearr_9402_9404 = state_9394;(statearr_9402_9404[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9394);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9405 = state_9394;
state_9394 = G__9405;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9394){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__,res))
})();var state__6263__auto__ = (function (){var statearr_9403 = f__6262__auto__.call(null);(statearr_9403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__,res))
);
return c__6261__auto__;
});
cmd.ui.api_url = (function api_url(suffix){return [cljs.core.str("https://api.github.com"),cljs.core.str(suffix)].join('');
});
cmd.ui.GET = (function GET(url){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(cmd.ui.api_url.call(null,url),cljs.core.partial.call(null,cmd.ui.resp_handler,ch),"GET",null,cmd.ui.auth_param);
return ch;
});
cmd.ui.POST = (function POST(url,data){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(cmd.ui.api_url.call(null,url),cljs.core.partial.call(null,cmd.ui.resp_handler,ch),"POST",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),cmd.ui.auth_param);
return ch;
});
cmd.ui.PATCH = (function PATCH(url,data){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(cmd.ui.api_url.call(null,url),cljs.core.partial.call(null,cmd.ui.resp_handler,ch),"PATCH",(new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data)),cmd.ui.auth_param);
return ch;
});
cmd.ui.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview-output","preview-output",4188357144),null], null));
cmd.ui.AppBus = cljs.core.async.chan.call(null,1);
cmd.ui.process = (function process__$1(md){var html = cmd.ui.md__GT_html.call(null,md);var preview_output = cmd.ui.html__GT_react.call(null,html);return preview_output;
});
cmd.ui.set_state = (function set_state(state,key,new_state){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,key,new_state);
});
cmd.ui.get_state = (function get_state(state,key){return key.call(null,cljs.core.deref.call(null,state));
});
cmd.ui.find_gist = (function find_gist(state,gist_id){return cljs.core.filter.call(null,(function (p1__9406_SHARP_){return cljs.core._EQ_.call(null,gist_id,p1__9406_SHARP_.call(null,"id"));
}),cmd.ui.get_state.call(null,state,new cljs.core.Keyword(null,"gists","gists",1112269186)));
});
cmd.ui.load_gists = (function load_gists(){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9428){var state_val_9429 = (state_9428[1]);if((state_val_9429 === 2))
{var inst_9424 = (state_9428[2]);var inst_9425 = cmd.ui.raw__GT_clj.call(null,inst_9424);var inst_9426 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_9425);var state_9428__$1 = state_9428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9428__$1,inst_9426);
} else
{if((state_val_9429 === 1))
{var inst_9422 = cmd.ui.GET.call(null,"/users/EugeneN/gists");var state_9428__$1 = state_9428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9428__$1,2,inst_9422);
} else
{return null;
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9433 = [null,null,null,null,null,null,null];(statearr_9433[0] = state_machine__6247__auto__);
(statearr_9433[1] = 1);
return statearr_9433;
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
}catch (e9434){if((e9434 instanceof Object))
{var ex__6250__auto__ = e9434;var statearr_9435_9437 = state_9428;(statearr_9435_9437[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9428);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9438 = state_9428;
state_9428 = G__9438;
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
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9436 = f__6262__auto__.call(null);(statearr_9436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.load_gist = (function load_gist(id){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9483){var state_val_9484 = (state_9483[1]);if((state_val_9484 === 3))
{var inst_9481 = (state_9483[2]);var state_9483__$1 = state_9483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9483__$1,inst_9481);
} else
{if((state_val_9484 === 2))
{var inst_9470 = (state_9483[2]);var inst_9471 = cmd.ui.raw__GT_clj.call(null,inst_9470);var inst_9472 = inst_9471.call(null,"files");var inst_9473 = cljs.core.first.call(null,inst_9472);var inst_9474 = cljs.core.nth.call(null,inst_9473,0,null);var inst_9475 = cljs.core.nth.call(null,inst_9473,1,null);var inst_9476 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),inst_9474);var inst_9477 = cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),inst_9471);var inst_9478 = [new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),id];var inst_9479 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9478,null));var state_9483__$1 = (function (){var statearr_9485 = state_9483;(statearr_9485[7] = inst_9475);
(statearr_9485[8] = inst_9477);
(statearr_9485[9] = inst_9476);
return statearr_9485;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9483__$1,3,cmd.ui.AppBus,inst_9479);
} else
{if((state_val_9484 === 1))
{var inst_9467 = [cljs.core.str("/gists/"),cljs.core.str(id)].join('');var inst_9468 = cmd.ui.GET.call(null,inst_9467);var state_9483__$1 = state_9483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9483__$1,2,inst_9468);
} else
{return null;
}
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9489 = [null,null,null,null,null,null,null,null,null,null];(statearr_9489[0] = state_machine__6247__auto__);
(statearr_9489[1] = 1);
return statearr_9489;
});
var state_machine__6247__auto____1 = (function (state_9483){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9490){if((e9490 instanceof Object))
{var ex__6250__auto__ = e9490;var statearr_9491_9493 = state_9483;(statearr_9491_9493[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9494 = state_9483;
state_9483 = G__9494;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9483){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9492 = f__6262__auto__.call(null);(statearr_9492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.save_gist = (function save_gist(gist_id,new_content){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9516){var state_val_9517 = (state_9516[1]);if((state_val_9517 === 2))
{var inst_9513 = (state_9516[2]);var inst_9514 = cmd.ui.raw__GT_clj.call(null,inst_9513);var state_9516__$1 = state_9516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9516__$1,inst_9514);
} else
{if((state_val_9517 === 1))
{var inst_9510 = [cljs.core.str("/gists/"),cljs.core.str(gist_id)].join('');var inst_9511 = cmd.ui.PATCH.call(null,inst_9510,new_content);var state_9516__$1 = state_9516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9516__$1,2,inst_9511);
} else
{return null;
}
}
});})(c__6261__auto__))
;return ((function (switch__6246__auto__,c__6261__auto__){
return (function() {
var state_machine__6247__auto__ = null;
var state_machine__6247__auto____0 = (function (){var statearr_9521 = [null,null,null,null,null,null,null];(statearr_9521[0] = state_machine__6247__auto__);
(statearr_9521[1] = 1);
return statearr_9521;
});
var state_machine__6247__auto____1 = (function (state_9516){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9516);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9522){if((e9522 instanceof Object))
{var ex__6250__auto__ = e9522;var statearr_9523_9525 = state_9516;(statearr_9523_9525[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9516);
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
var G__9526 = state_9516;
state_9516 = G__9526;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9516){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9516);
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
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.pull_button = document.getElementById("pull");
cmd.ui.push_button = document.getElementById("push");
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9528 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9528,0,null);var first_file = cljs.core.nth.call(null,vec__9528,1,null);var content = first_file.call(null,"content");return cmd.ui.input.value = content;
});
cmd.ui.set_preview = (function set_preview(_){return cmd.ui.html_BANG_.call(null,cmd.ui.preview,cmd.ui.process.call(null,cmd.ui.input.value));
});
cmd.ui.handle_pull = (function handle_pull(_){return cmd.ui.load_gist.call(null,cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.ui.handle_push = (function handle_push(_){var md_raw = cmd.ui.input.value;var gist_id = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043));var file_name = cmd.ui.get_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var new_content = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",3584325486),"cmd push",new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);var result = cmd.ui.save_gist.call(null,gist_id,new_content);return cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),result);
});
cmd.ui.handle_select = (function handle_select(e){var selected_id = e.target.value;cmd.ui.set_state.call(null,cmd.ui.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),selected_id);
return cmd.ui.load_gist.call(null,selected_id);
});
cmd.ui.gist_list = (function gist_list(data,owner){if(typeof cmd.ui.t9532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9532 = (function (owner,data,gist_list,meta9533){
this.owner = owner;
this.data = data;
this.gist_list = gist_list;
this.meta9533 = meta9533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9532.cljs$lang$type = true;
cmd.ui.t9532.cljs$lang$ctorStr = "cmd.ui/t9532";
cmd.ui.t9532.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t9532");
});
cmd.ui.t9532.prototype.om$core$IRender$ = true;
cmd.ui.t9532.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.select,{"onChange": cmd.ui.handle_select, "className": "hello"},cljs.core.map.call(null,((function (___$1){
return (function (gist){return om.dom.option.call(null,{"value": gist.call(null,"id")},cmd.ui.join_gist_names.call(null,cljs.core.keys.call(null,gist.call(null,"files"))));
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
cmd.ui.t9532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9534){var self__ = this;
var _9534__$1 = this;return self__.meta9533;
});
cmd.ui.t9532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9534,meta9533__$1){var self__ = this;
var _9534__$1 = this;return (new cmd.ui.t9532(self__.owner,self__.data,self__.gist_list,meta9533__$1));
});
cmd.ui.__GT_t9532 = (function __GT_t9532(owner__$1,data__$1,gist_list__$1,meta9533){return (new cmd.ui.t9532(owner__$1,data__$1,gist_list__$1,meta9533));
});
}
return (new cmd.ui.t9532(owner,data,gist_list,null));
});
om.core.root.call(null,cmd.ui.gist_list,cmd.ui.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("gist-list")], null));
goog.events.listen(cmd.ui.input,goog.events.EventType.KEYUP,cmd.ui.set_preview);
goog.events.listen(cmd.ui.pull_button,goog.events.EventType.CLICK,cmd.ui.handle_pull);
goog.events.listen(cmd.ui.push_button,goog.events.EventType.CLICK,cmd.ui.handle_push);
cmd.ui.subscribe_appbus = (function subscribe_appbus(){var c__6261__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6261__auto__){
return (function (){var f__6262__auto__ = (function (){var switch__6246__auto__ = ((function (c__6261__auto__){
return (function (state_9589){var state_val_9590 = (state_9589[1]);if((state_val_9590 === 5))
{var inst_9584 = (state_9589[2]);var inst_9576 = inst_9584;var state_9589__$1 = (function (){var statearr_9591 = state_9589;(statearr_9591[7] = inst_9576);
return statearr_9591;
})();var statearr_9592_9603 = state_9589__$1;(statearr_9592_9603[2] = null);
(statearr_9592_9603[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9590 === 4))
{var inst_9587 = (state_9589[2]);var state_9589__$1 = state_9589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9589__$1,inst_9587);
} else
{if((state_val_9590 === 3))
{var inst_9576 = (state_9589[7]);var inst_9579 = cljs.core.nth.call(null,inst_9576,0,null);var inst_9580 = cljs.core.nth.call(null,inst_9576,1,null);var inst_9581 = cmd.ui.set_input.call(null,inst_9580);var inst_9582 = cmd.ui.set_preview.call(null,null);var state_9589__$1 = (function (){var statearr_9593 = state_9589;(statearr_9593[8] = inst_9581);
(statearr_9593[9] = inst_9579);
(statearr_9593[10] = inst_9582);
return statearr_9593;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9589__$1,5,cmd.ui.AppBus);
} else
{if((state_val_9590 === 2))
{var inst_9573 = (state_9589[2]);var inst_9574 = cljs.core.nth.call(null,inst_9573,0,null);var inst_9575 = cljs.core.nth.call(null,inst_9573,1,null);var inst_9576 = inst_9573;var state_9589__$1 = (function (){var statearr_9594 = state_9589;(statearr_9594[11] = inst_9574);
(statearr_9594[12] = inst_9575);
(statearr_9594[7] = inst_9576);
return statearr_9594;
})();var statearr_9595_9604 = state_9589__$1;(statearr_9595_9604[2] = null);
(statearr_9595_9604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9590 === 1))
{var state_9589__$1 = state_9589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9589__$1,2,cmd.ui.AppBus);
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
var state_machine__6247__auto____0 = (function (){var statearr_9599 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9599[0] = state_machine__6247__auto__);
(statearr_9599[1] = 1);
return statearr_9599;
});
var state_machine__6247__auto____1 = (function (state_9589){while(true){
var ret_value__6248__auto__ = (function (){try{while(true){
var result__6249__auto__ = switch__6246__auto__.call(null,state_9589);if(cljs.core.keyword_identical_QMARK_.call(null,result__6249__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6249__auto__;
}
break;
}
}catch (e9600){if((e9600 instanceof Object))
{var ex__6250__auto__ = e9600;var statearr_9601_9605 = state_9589;(statearr_9601_9605[5] = ex__6250__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6248__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9606 = state_9589;
state_9589 = G__9606;
continue;
}
} else
{return ret_value__6248__auto__;
}
break;
}
});
state_machine__6247__auto__ = function(state_9589){
switch(arguments.length){
case 0:
return state_machine__6247__auto____0.call(this);
case 1:
return state_machine__6247__auto____1.call(this,state_9589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6247__auto____0;
state_machine__6247__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6247__auto____1;
return state_machine__6247__auto__;
})()
;})(switch__6246__auto__,c__6261__auto__))
})();var state__6263__auto__ = (function (){var statearr_9602 = f__6262__auto__.call(null);(statearr_9602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6261__auto__);
return statearr_9602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6263__auto__);
});})(c__6261__auto__))
);
return c__6261__auto__;
});
cmd.ui.subscribe_appbus.call(null);
cmd.ui.load_gists.call(null);

//# sourceMappingURL=ui.js.map