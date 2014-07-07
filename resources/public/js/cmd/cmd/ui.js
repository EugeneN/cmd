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
cmd.ui.say = (function say(smth){return console.log(smth);
});
cmd.ui.html_BANG_ = (function html_BANG_(node,html){return node.innerHTML = html;
});
cmd.ui.md__GT_html = (function md__GT_html(text){return markdown.core.mdToHtml(text);
});
cmd.ui.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview-output","preview-output",4188357144),null], null));
cmd.ui.html__GT_react = (function html__GT_react(html){return html;
});
cmd.ui.process = (function process__$1(md){var html = cmd.ui.md__GT_html.call(null,md);var preview_output = cmd.ui.html__GT_react.call(null,html);return preview_output;
});
cmd.ui.set_state = (function set_state(key,new_state){return cljs.core.swap_BANG_.call(null,cmd.ui.state,cljs.core.assoc,key,new_state);
});
cmd.ui.auth_token = "ea69c0bf54df678124e1788d87efaf94374e149b";
cmd.ui.auth_token_b64 = "ZWE2OWMwYmY1NGRmNjc4MTI0ZTE3ODhkODdlZmFmOTQzNzRlMTQ5Yjp4LW9hdXRoLWJhc2lj";
cmd.ui.auth_param = (function (){var obj9405 = {"Authorization":[cljs.core.str("Basic "),cljs.core.str(cmd.ui.auth_token_b64)].join('')};return obj9405;
})();
cmd.ui.resp_handler = (function resp_handler(ch,event){var res = event.target.getResponseText();var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__,res){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__,res){
return (function (state_9424){var state_val_9425 = (state_9424[1]);if((state_val_9425 === 2))
{var inst_9421 = (state_9424[2]);var inst_9422 = cljs.core.async.close_BANG_.call(null,ch);var state_9424__$1 = (function (){var statearr_9426 = state_9424;(statearr_9426[7] = inst_9421);
return statearr_9426;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9424__$1,inst_9422);
} else
{if((state_val_9425 === 1))
{var state_9424__$1 = state_9424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9424__$1,2,ch,res);
} else
{return null;
}
}
});})(c__6291__auto__,res))
;return ((function (switch__6276__auto__,c__6291__auto__,res){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9430 = [null,null,null,null,null,null,null,null];(statearr_9430[0] = state_machine__6277__auto__);
(statearr_9430[1] = 1);
return statearr_9430;
});
var state_machine__6277__auto____1 = (function (state_9424){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9431){if((e9431 instanceof Object))
{var ex__6280__auto__ = e9431;var statearr_9432_9434 = state_9424;(statearr_9432_9434[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9435 = state_9424;
state_9424 = G__9435;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9424){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__,res))
})();var state__6293__auto__ = (function (){var statearr_9433 = f__6292__auto__.call(null);(statearr_9433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__,res))
);
return c__6291__auto__;
});
cmd.ui.GET = (function GET(url){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,cljs.core.partial.call(null,cmd.ui.resp_handler,ch),"GET",null,cmd.ui.auth_param);
return ch;
});
cmd.ui.POST = (function POST(url,data){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,cljs.core.partial.call(null,cmd.ui.resp_handler,ch),"POST",data,cmd.ui.auth_param);
return ch;
});
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.handle_input = (function handle_input(_){return cmd.ui.html_BANG_.call(null,cmd.ui.preview,cmd.ui.process.call(null,cmd.ui.input.value));
});
cmd.ui.join_gist_names = (function join_gist_names(file_keys){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," <;> ",file_keys));
});
cmd.ui.raw__GT_clj = (function raw__GT_clj(raw){return cljs.core.js__GT_clj.call(null,JSON.parse(raw));
});
cmd.ui.load_gist = (function load_gist(url){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9472){var state_val_9473 = (state_9472[1]);if((state_val_9473 === 2))
{var inst_9462 = (state_9472[2]);var inst_9463 = cmd.ui.raw__GT_clj.call(null,inst_9462);var inst_9464 = inst_9463.call(null,"files");var inst_9465 = cljs.core.first.call(null,inst_9464);var inst_9466 = cljs.core.nth.call(null,inst_9465,0,null);var inst_9467 = cljs.core.nth.call(null,inst_9465,1,null);var inst_9468 = inst_9467.call(null,"content");var inst_9469 = cmd.ui.input.value = inst_9468;var inst_9470 = cmd.ui.handle_input.call(null,null);var state_9472__$1 = (function (){var statearr_9474 = state_9472;(statearr_9474[7] = inst_9469);
(statearr_9474[8] = inst_9466);
return statearr_9474;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9472__$1,inst_9470);
} else
{if((state_val_9473 === 1))
{var inst_9460 = cmd.ui.GET.call(null,url);var state_9472__$1 = state_9472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9472__$1,2,inst_9460);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9478 = [null,null,null,null,null,null,null,null,null];(statearr_9478[0] = state_machine__6277__auto__);
(statearr_9478[1] = 1);
return statearr_9478;
});
var state_machine__6277__auto____1 = (function (state_9472){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9472);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9479){if((e9479 instanceof Object))
{var ex__6280__auto__ = e9479;var statearr_9480_9482 = state_9472;(statearr_9480_9482[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9472);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9483 = state_9472;
state_9472 = G__9483;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9472){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9481 = f__6292__auto__.call(null);(statearr_9481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.handle_select = (function handle_select(e){var selected_id = e.target.value;return cmd.ui.load_gist.call(null,[cljs.core.str("https://api.github.com/gists/"),cljs.core.str(selected_id)].join(''));
});
cmd.ui.gist_list = (function gist_list(data,owner){if(typeof cmd.ui.t9487 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9487 = (function (owner,data,gist_list,meta9488){
this.owner = owner;
this.data = data;
this.gist_list = gist_list;
this.meta9488 = meta9488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9487.cljs$lang$type = true;
cmd.ui.t9487.cljs$lang$ctorStr = "cmd.ui/t9487";
cmd.ui.t9487.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t9487");
});
cmd.ui.t9487.prototype.om$core$IRender$ = true;
cmd.ui.t9487.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.select,{"onChange": cmd.ui.handle_select, "className": "hello"},cljs.core.map.call(null,((function (___$1){
return (function (gist){return om.dom.option.call(null,{"value": gist.call(null,"id")},cmd.ui.join_gist_names.call(null,cljs.core.keys.call(null,gist.call(null,"files"))));
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
cmd.ui.t9487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9489){var self__ = this;
var _9489__$1 = this;return self__.meta9488;
});
cmd.ui.t9487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9489,meta9488__$1){var self__ = this;
var _9489__$1 = this;return (new cmd.ui.t9487(self__.owner,self__.data,self__.gist_list,meta9488__$1));
});
cmd.ui.__GT_t9487 = (function __GT_t9487(owner__$1,data__$1,gist_list__$1,meta9488){return (new cmd.ui.t9487(owner__$1,data__$1,gist_list__$1,meta9488));
});
}
return (new cmd.ui.t9487(owner,data,gist_list,null));
});
om.core.root.call(null,cmd.ui.gist_list,cmd.ui.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("gist-list")], null));
goog.events.listen(cmd.ui.input,goog.events.EventType.KEYUP,cmd.ui.handle_input);
var c__6291__auto___9507 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___9507){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___9507){
return (function (state_9497){var state_val_9498 = (state_9497[1]);if((state_val_9498 === 2))
{var inst_9492 = (state_9497[2]);var inst_9493 = cmd.ui.raw__GT_clj.call(null,inst_9492);var inst_9494 = cmd.ui.say.call(null,inst_9493);var inst_9495 = cmd.ui.set_state.call(null,new cljs.core.Keyword(null,"gists","gists",1112269186),inst_9493);var state_9497__$1 = (function (){var statearr_9499 = state_9497;(statearr_9499[7] = inst_9494);
return statearr_9499;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9497__$1,inst_9495);
} else
{if((state_val_9498 === 1))
{var inst_9490 = cmd.ui.GET.call(null,"https://api.github.com/users/EugeneN/gists");var state_9497__$1 = state_9497;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9497__$1,2,inst_9490);
} else
{return null;
}
}
});})(c__6291__auto___9507))
;return ((function (switch__6276__auto__,c__6291__auto___9507){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9503 = [null,null,null,null,null,null,null,null];(statearr_9503[0] = state_machine__6277__auto__);
(statearr_9503[1] = 1);
return statearr_9503;
});
var state_machine__6277__auto____1 = (function (state_9497){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9497);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9504){if((e9504 instanceof Object))
{var ex__6280__auto__ = e9504;var statearr_9505_9508 = state_9497;(statearr_9505_9508[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9497);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9509 = state_9497;
state_9497 = G__9509;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9497){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___9507))
})();var state__6293__auto__ = (function (){var statearr_9506 = f__6292__auto__.call(null);(statearr_9506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___9507);
return statearr_9506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___9507))
);

//# sourceMappingURL=ui.js.map