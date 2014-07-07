// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('markdown.core');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('markdown.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events.KeyHandler');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events.KeyCodes');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
cmd.ui.GET = (function GET(url){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,((function (ch){
return (function (event){var res = event.target.getResponseText();var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__,res,ch){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__,res,ch){
return (function (state_8581){var state_val_8582 = (state_8581[1]);if((state_val_8582 === 2))
{var inst_8578 = (state_8581[2]);var inst_8579 = cljs.core.async.close_BANG_.call(null,ch);var state_8581__$1 = (function (){var statearr_8583 = state_8581;(statearr_8583[7] = inst_8578);
return statearr_8583;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8581__$1,inst_8579);
} else
{if((state_val_8582 === 1))
{var state_8581__$1 = state_8581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8581__$1,2,ch,res);
} else
{return null;
}
}
});})(c__5608__auto__,res,ch))
;return ((function (switch__5593__auto__,c__5608__auto__,res,ch){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8587 = [null,null,null,null,null,null,null,null];(statearr_8587[0] = state_machine__5594__auto__);
(statearr_8587[1] = 1);
return statearr_8587;
});
var state_machine__5594__auto____1 = (function (state_8581){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8588){if((e8588 instanceof Object))
{var ex__5597__auto__ = e8588;var statearr_8589_8591 = state_8581;(statearr_8589_8591[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8581);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8588;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8592 = state_8581;
state_8581 = G__8592;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8581){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__,res,ch))
})();var state__5610__auto__ = (function (){var statearr_8590 = f__5609__auto__.call(null);(statearr_8590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_8590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__,res,ch))
);
return c__5608__auto__;
});})(ch))
);
return ch;
});
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.md__GT_html = (function md__GT_html(text){return markdown.core.mdToHtml(text);
});
cmd.ui.render_preview = (function render_preview(_){var raw = cmd.ui.input.value;console.log(raw);
return cmd.ui.preview.innerHTML = cmd.ui.md__GT_html.call(null,raw);
});
goog.events.listen(cmd.ui.input,goog.events.EventType.KEYUP,cmd.ui.render_preview);
var c__5608__auto___8607 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto___8607){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto___8607){
return (function (state_8598){var state_val_8599 = (state_8598[1]);if((state_val_8599 === 2))
{var inst_8595 = (state_8598[2]);var inst_8596 = cmd.ui.preview.innerHTML = inst_8595;var state_8598__$1 = state_8598;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8598__$1,inst_8596);
} else
{if((state_val_8599 === 1))
{var inst_8593 = cmd.ui.GET.call(null,"http://google.com");var state_8598__$1 = state_8598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8598__$1,2,inst_8593);
} else
{return null;
}
}
});})(c__5608__auto___8607))
;return ((function (switch__5593__auto__,c__5608__auto___8607){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_8603 = [null,null,null,null,null,null,null];(statearr_8603[0] = state_machine__5594__auto__);
(statearr_8603[1] = 1);
return statearr_8603;
});
var state_machine__5594__auto____1 = (function (state_8598){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_8598);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e8604){if((e8604 instanceof Object))
{var ex__5597__auto__ = e8604;var statearr_8605_8608 = state_8598;(statearr_8605_8608[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8598);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8609 = state_8598;
state_8598 = G__8609;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_8598){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_8598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto___8607))
})();var state__5610__auto__ = (function (){var statearr_8606 = f__5609__auto__.call(null);(statearr_8606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto___8607);
return statearr_8606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto___8607))
);

//# sourceMappingURL=ui.js.map