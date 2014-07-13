// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.ui');
goog.require('cljs.core');
goog.require('cmd.utils');
goog.require('cmd.lib.dom');
goog.require('cmd.defs');
goog.require('cmd.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('cmd.defs');
goog.require('cmd.lib.dom');
goog.require('cmd.utils');
goog.require('om.core');
goog.require('om.core');
goog.require('cmd.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_fn_STAR_ = (function (p1__9975_SHARP_){return console.log(p1__9975_SHARP_);
});
cmd.ui.handle_logout = (function handle_logout(_){cmd.core.say.call(null,"Bye, c u l8r :-)");
cmd.core.reset_state.call(null,cmd.core.state);
cmd.utils.setcookie.call(null,"username","");
cmd.utils.setcookie.call(null,"auth-token","");
var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9995){var state_val_9996 = (state_9995[1]);if((state_val_9996 === 2))
{var inst_9993 = (state_9995[2]);var state_9995__$1 = state_9995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9995__$1,inst_9993);
} else
{if((state_val_9996 === 1))
{var inst_9990 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_9991 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9990,null));var state_9995__$1 = state_9995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9995__$1,2,cmd.core.AppBus,inst_9991);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10000 = [null,null,null,null,null,null,null];(statearr_10000[0] = state_machine__5594__auto__);
(statearr_10000[1] = 1);
return statearr_10000;
});
var state_machine__5594__auto____1 = (function (state_9995){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9995);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10001){if((e10001 instanceof Object))
{var ex__5597__auto__ = e10001;var statearr_10002_10004 = state_9995;(statearr_10002_10004[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10005 = state_9995;
state_9995 = G__10005;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9995){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10003 = f__5609__auto__.call(null);(statearr_10003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.handle_auth = (function handle_auth(e){var username = cmd.lib.dom.$.call(null,"username").value;var auth_token = cmd.lib.dom.$.call(null,"auth-token").value;return cmd.core.authenticate.call(null,username,auth_token);
});
cmd.ui.setup_toolbar_listeners = (function setup_toolbar_listeners(){var toolbar_toggler = cmd.lib.dom.$.call(null,"toolbar-toggler");var editor_toggler = cmd.lib.dom.$.call(null,"editor-toggler");var console_toggler = cmd.lib.dom.$.call(null,"console-toggler");var info_toggler = cmd.lib.dom.$.call(null,"info-toggler");var toolbar = cmd.lib.dom.$.call(null,"toolbar");var console = cmd.lib.dom.$.call(null,"console");var preview = cmd.lib.dom.$.call(null,"preview-container");var editor = cmd.lib.dom.$.call(null,"input");var preview_toggler = cmd.lib.dom.$.call(null,"preview-toggler");Rx.Observable.fromEvent(toolbar_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.lib.dom.toggle.call(null,toolbar,((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429),cljs.core.not.call(null,cmd.lib.dom.visible_QMARK_.call(null,toolbar)));
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(preview_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.lib.dom.toggle_slide_right.call(null,preview);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(editor_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.lib.dom.toggle_slide_left.call(null,editor);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(info_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.core.say.call(null,[cljs.core.str("No info available currently")].join(''));
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(document,"mousemove").throttle(50).filter(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (ev){var and__3439__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3439__auto__))
{return (ev.clientY < 28);
} else
{return and__3439__auto__;
}
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.lib.dom.slide_down.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(document,"mousemove").throttle(50).filter(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (ev){var and__3439__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3439__auto__))
{return (ev.clientY > 28);
} else
{return and__3439__auto__;
}
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.lib.dom.slide_up.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
return Rx.Observable.fromEvent(console_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.lib.dom.toggle.call(null,console);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
});
cmd.ui.setup_panels = (function setup_panels(){var x = (function (){var or__3451__auto__ = cmd.core.get_panels_from_location_hash.call(null);if(cljs.core.truth_(or__3451__auto__))
{return or__3451__auto__;
} else
{return cmd.defs.all_panels;
}
})();var y = clojure.set.intersection.call(null,cmd.defs.all_panels,x);var no_flags_set = cljs.core._EQ_.call(null,0,cljs.core.count.call(null,y));var panels_to_hide = ((no_flags_set)?cljs.core.PersistentHashSet.EMPTY:clojure.set.difference.call(null,cmd.defs.all_panels,y));var toolbar = cmd.lib.dom.$.call(null,"toolbar");var console = cmd.lib.dom.$.call(null,"console");var preview = cmd.lib.dom.$.call(null,"preview-container");var editor = cmd.lib.dom.$.call(null,"input");if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["t",null], null), null),panels_to_hide)))
{cmd.lib.dom.hide.call(null,toolbar);
} else
{}
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["e",null], null), null),panels_to_hide)))
{cmd.lib.dom.hide.call(null,editor);
} else
{}
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["p",null], null), null),panels_to_hide)))
{return cmd.lib.dom.hide.call(null,preview);
} else
{return null;
}
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t10009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10009 = (function (owner,state,toolbar,meta10010){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta10010 = meta10010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10009.cljs$lang$type = true;
cmd.ui.t10009.cljs$lang$ctorStr = "cmd.ui/t10009";
cmd.ui.t10009.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t10009");
});
cmd.ui.t10009.prototype.om$core$IRender$ = true;
cmd.ui.t10009.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cmd.core.authenticated_om_QMARK_.call(null,self__.state)))
{return React.DOM.div(null,React.DOM.img({"style": (((new cljs.core.Keyword(null,"active-requests","active-requests",3616398877).cljs$core$IFn$_invoke$arity$1(self__.state) > 0))?{"display": "block"}:{"display": "none"}), "src": "resources/public/img/loading1.gif", "id": "loading-indicator"}),React.DOM.button({"className": "ios7", "onClick": cmd.ui.handle_new_gist, "id": "new-gist"},":NEW_G!ST: "),om.dom.input.call(null,{"id": "new-gist-name", "style": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))?{"display": "inline-block"}:{"value": "", "display": "none"}), "title": "Filename", "type": "text"}),React.DOM.label({"className": "ios7"},"SELECT_G!ST: "),React.DOM.div({"id": "gist-list"},cljs.core.apply.call(null,om.dom.select,{"onChange": cmd.ui.handle_select, "value": new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043).cljs$core$IFn$_invoke$arity$1(self__.state), "title": "Select a gist for a good start :-)", "className": "hello"},cljs.core.map.call(null,((function (___$1){
return (function (gist){return om.dom.option.call(null,{"value": gist.call(null,"id")},cmd.utils.join_gist_names.call(null,cljs.core.keys.call(null,gist.call(null,"files"))));
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.state)))),(function (){var current_gist = self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var href = (((current_gist == null))?null:current_gist.call(null,"html_url"));if((href == null))
{return React.DOM.span({"id": "warn-no-gist"},"NO_G?ST");
} else
{return React.DOM.a({"href": href, "title": "View gist in Github (in a new tab/window)", "target": "_blank", "id": "view-orig"},self__.state.call(null,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850)));
}
})(),React.DOM.button({"onClick": cmd.ui.handle_pull, "disabled": (((self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193)) == null))?true:false), "title": "Reload gist from Github", "id": "pull"},">>PULL"),React.DOM.button({"onClick": cmd.ui.handle_push, "disabled": ((((self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193)) == null)) && (!(cljs.core._EQ_.call(null,self__.state.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333)),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))))?true:false), "title": "Save current gist state to Github", "id": "push"},"PUSH>>"),React.DOM.button({"onClick": cmd.ui.handle_logout, "title": "Log out and remove autologin cookies", "id": "log-out"},"LOG^OUT"));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return React.DOM.div(null,React.DOM.label(null,"USERN@ME: "),om.dom.input.call(null,{"id": "username", "title": "Your Github username", "type": "text"}),React.DOM.label(null,"S#CRET: "),om.dom.input.call(null,{"id": "auth-token", "title": "Github auth token in base64 :-P", "type": "text"}),React.DOM.button({"onClick": cmd.ui.handle_auth, "title": "Log in to access and work with your gists", "id": "go"},"LOG>>IN"),(cljs.core.truth_(cmd.core.error_set_QMARK_.call(null,self__.state))?React.DOM.span({"id": "error-msg"}):[cljs.core.str(self__.state.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))].join('')));
} else
{return null;
}
}
});
cmd.ui.t10009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10011){var self__ = this;
var _10011__$1 = this;return self__.meta10010;
});
cmd.ui.t10009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10011,meta10010__$1){var self__ = this;
var _10011__$1 = this;return (new cmd.ui.t10009(self__.owner,self__.state,self__.toolbar,meta10010__$1));
});
cmd.ui.__GT_t10009 = (function __GT_t10009(owner__$1,state__$1,toolbar__$1,meta10010){return (new cmd.ui.t10009(owner__$1,state__$1,toolbar__$1,meta10010));
});
}
return (new cmd.ui.t10009(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.console = (function console__$1(state,owner){if(typeof cmd.ui.t10015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10015 = (function (owner,state,console,meta10016){
this.owner = owner;
this.state = state;
this.console = console;
this.meta10016 = meta10016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10015.cljs$lang$type = true;
cmd.ui.t10015.cljs$lang$ctorStr = "cmd.ui/t10015";
cmd.ui.t10015.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t10015");
});
cmd.ui.t10015.prototype.om$core$IRender$ = true;
cmd.ui.t10015.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"id": "msgs-list"},cljs.core.apply.call(null,om.dom.ul,{"className": "hello"},cljs.core.map_indexed.call(null,((function (___$1){
return (function (idx,msg){if(cljs.core._EQ_.call(null,idx,0))
{return React.DOM.li({"className": "current-message"},[cljs.core.str("> "),cljs.core.str(msg)].join(''));
} else
{return React.DOM.li(null,msg);
}
});})(___$1))
,cljs.core.reverse.call(null,self__.state.call(null,new cljs.core.Keyword(null,"messages","messages",551810238)))))));
});
cmd.ui.t10015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10017){var self__ = this;
var _10017__$1 = this;return self__.meta10016;
});
cmd.ui.t10015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10017,meta10016__$1){var self__ = this;
var _10017__$1 = this;return (new cmd.ui.t10015(self__.owner,self__.state,self__.console,meta10016__$1));
});
cmd.ui.__GT_t10015 = (function __GT_t10015(owner__$1,state__$1,console__$1,meta10016){return (new cmd.ui.t10015(owner__$1,state__$1,console__$1,meta10016));
});
}
return (new cmd.ui.t10015(owner,state,console__$1,null));
});
cmd.ui.render_console = (function render_console(state){return om.core.root.call(null,cmd.ui.console,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),cmd.lib.dom.$.call(null,"console")], null));
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10202){var state_val_10203 = (state_10202[1]);if((state_val_10203 === 7))
{var inst_10152 = (state_10202[2]);var state_10202__$1 = state_10202;var statearr_10204_10250 = state_10202__$1;(statearr_10204_10250[2] = inst_10152);
(statearr_10204_10250[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 20))
{var inst_10189 = (state_10202[2]);var state_10202__$1 = state_10202;var statearr_10205_10251 = state_10202__$1;(statearr_10205_10251[2] = inst_10189);
(statearr_10205_10251[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 1))
{var state_10202__$1 = state_10202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10202__$1,2,app_bus);
} else
{if((state_val_10203 === 4))
{var inst_10200 = (state_10202[2]);var state_10202__$1 = state_10202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10202__$1,inst_10200);
} else
{if((state_val_10203 === 15))
{var state_10202__$1 = state_10202;var statearr_10206_10252 = state_10202__$1;(statearr_10206_10252[2] = null);
(statearr_10206_10252[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 21))
{var inst_10145 = (state_10202[7]);var inst_10144 = (state_10202[8]);var inst_10191 = [cljs.core.str("Unknown message from AppBus: "),cljs.core.str(inst_10144),cljs.core.str(" : "),cljs.core.str(inst_10145)].join('');var inst_10192 = cmd.core.say.call(null,inst_10191);var state_10202__$1 = state_10202;var statearr_10207_10253 = state_10202__$1;(statearr_10207_10253[2] = inst_10192);
(statearr_10207_10253[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 13))
{var inst_10166 = (state_10202[9]);var inst_10164 = cmd.core.get_gist_id_from_location_hash.call(null);var inst_10165 = cmd.core.find_gist.call(null,cmd.core.state,inst_10164);var inst_10166__$1 = cljs.core.nth.call(null,inst_10165,0,null);var inst_10167 = cljs.core.nthnext.call(null,inst_10165,1);var inst_10168 = (inst_10166__$1 == null);var inst_10169 = cljs.core.not.call(null,inst_10168);var state_10202__$1 = (function (){var statearr_10208 = state_10202;(statearr_10208[9] = inst_10166__$1);
(statearr_10208[10] = inst_10167);
return statearr_10208;
})();if(inst_10169)
{var statearr_10209_10254 = state_10202__$1;(statearr_10209_10254[1] = 14);
} else
{var statearr_10210_10255 = state_10202__$1;(statearr_10210_10255[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 22))
{var inst_10197 = (state_10202[2]);var inst_10141 = inst_10197;var state_10202__$1 = (function (){var statearr_10211 = state_10202;(statearr_10211[11] = inst_10141);
return statearr_10211;
})();var statearr_10212_10256 = state_10202__$1;(statearr_10212_10256[2] = null);
(statearr_10212_10256[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 6))
{var inst_10145 = (state_10202[7]);var state_10202__$1 = state_10202;var G__10213_10257 = inst_10145;if(cljs.core._EQ_.call(null,false,G__10213_10257))
{var statearr_10214_10258 = state_10202__$1;(statearr_10214_10258[1] = 9);
} else
{if(cljs.core._EQ_.call(null,true,G__10213_10257))
{var statearr_10215_10259 = state_10202__$1;(statearr_10215_10259[1] = 8);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10145)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 17))
{var inst_10177 = (state_10202[12]);var inst_10144 = (state_10202[8]);var inst_10177__$1 = cmd.lib.dom.$.call(null,"console");var inst_10178 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238));var inst_10179 = cljs.core.conj.call(null,inst_10178,inst_10144);var inst_10180 = cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"messages","messages",551810238),inst_10179);var inst_10181 = cmd.lib.dom.visible_QMARK_.call(null,inst_10177__$1);var inst_10182 = cljs.core.not.call(null,inst_10181);var state_10202__$1 = (function (){var statearr_10216 = state_10202;(statearr_10216[13] = inst_10180);
(statearr_10216[12] = inst_10177__$1);
return statearr_10216;
})();if(inst_10182)
{var statearr_10217_10260 = state_10202__$1;(statearr_10217_10260[1] = 18);
} else
{var statearr_10218_10261 = state_10202__$1;(statearr_10218_10261[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 3))
{var inst_10144 = (state_10202[8]);var inst_10141 = (state_10202[11]);var inst_10144__$1 = cljs.core.nth.call(null,inst_10141,0,null);var inst_10145 = cljs.core.nth.call(null,inst_10141,1,null);var state_10202__$1 = (function (){var statearr_10219 = state_10202;(statearr_10219[7] = inst_10145);
(statearr_10219[8] = inst_10144__$1);
return statearr_10219;
})();var G__10220_10262 = inst_10144__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),G__10220_10262))
{var statearr_10221_10263 = state_10202__$1;(statearr_10221_10263[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),G__10220_10262))
{var statearr_10222_10264 = state_10202__$1;(statearr_10222_10264[1] = 13);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),G__10220_10262))
{var statearr_10223_10265 = state_10202__$1;(statearr_10223_10265[1] = 12);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__10220_10262))
{var statearr_10224_10266 = state_10202__$1;(statearr_10224_10266[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__10220_10262))
{var statearr_10225_10267 = state_10202__$1;(statearr_10225_10267[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__10220_10262))
{var statearr_10226_10268 = state_10202__$1;(statearr_10226_10268[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_10227_10269 = state_10202__$1;(statearr_10227_10269[1] = 21);
} else
{}
}
}
}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 12))
{var inst_10161 = cmd.core.reset_input_with_motd.call(null);var state_10202__$1 = state_10202;var statearr_10228_10270 = state_10202__$1;(statearr_10228_10270[2] = inst_10161);
(statearr_10228_10270[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 2))
{var inst_10138 = (state_10202[14]);var inst_10138__$1 = (state_10202[2]);var inst_10139 = cljs.core.nth.call(null,inst_10138__$1,0,null);var inst_10140 = cljs.core.nth.call(null,inst_10138__$1,1,null);var inst_10141 = inst_10138__$1;var state_10202__$1 = (function (){var statearr_10229 = state_10202;(statearr_10229[15] = inst_10139);
(statearr_10229[14] = inst_10138__$1);
(statearr_10229[16] = inst_10140);
(statearr_10229[11] = inst_10141);
return statearr_10229;
})();var statearr_10230_10271 = state_10202__$1;(statearr_10230_10271[2] = null);
(statearr_10230_10271[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 19))
{var state_10202__$1 = state_10202;var statearr_10231_10272 = state_10202__$1;(statearr_10231_10272[2] = null);
(statearr_10231_10272[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 11))
{var inst_10159 = cmd.core.reset_input_with_motd.call(null);var state_10202__$1 = state_10202;var statearr_10232_10273 = state_10202__$1;(statearr_10232_10273[2] = inst_10159);
(statearr_10232_10273[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 9))
{var inst_10149 = cmd.core.load_initial_content.call(null);var state_10202__$1 = state_10202;var statearr_10233_10274 = state_10202__$1;(statearr_10233_10274[2] = inst_10149);
(statearr_10233_10274[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 5))
{var inst_10195 = (state_10202[2]);var state_10202__$1 = (function (){var statearr_10234 = state_10202;(statearr_10234[17] = inst_10195);
return statearr_10234;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10202__$1,22,app_bus);
} else
{if((state_val_10203 === 14))
{var inst_10166 = (state_10202[9]);var inst_10171 = inst_10166.call(null,"id");var inst_10172 = cmd.core.load_gist.call(null,inst_10171);var state_10202__$1 = state_10202;var statearr_10235_10275 = state_10202__$1;(statearr_10235_10275[2] = inst_10172);
(statearr_10235_10275[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 16))
{var inst_10175 = (state_10202[2]);var state_10202__$1 = state_10202;var statearr_10236_10276 = state_10202__$1;(statearr_10236_10276[2] = inst_10175);
(statearr_10236_10276[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 10))
{var inst_10145 = (state_10202[7]);var inst_10154 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var inst_10155 = cmd.core.set_input.call(null,inst_10145);var inst_10156 = cmd.core.set_title.call(null,inst_10154);var inst_10157 = cmd.core.set_location_hash_gist_id.call(null,inst_10145);var state_10202__$1 = (function (){var statearr_10237 = state_10202;(statearr_10237[18] = inst_10155);
(statearr_10237[19] = inst_10156);
return statearr_10237;
})();var statearr_10238_10277 = state_10202__$1;(statearr_10238_10277[2] = inst_10157);
(statearr_10238_10277[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 18))
{var inst_10145 = (state_10202[7]);var inst_10177 = (state_10202[12]);var inst_10138 = (state_10202[14]);var inst_10144 = (state_10202[8]);var inst_10141 = (state_10202[11]);var inst_10184 = cmd.lib.dom.toggle.call(null,inst_10177);var inst_10185 = (function (){var console = inst_10177;var vec__10143 = inst_10141;var payload = inst_10145;var msg = inst_10144;var vec__10136 = inst_10138;var G__10135 = inst_10141;return ((function (console,vec__10143,payload,msg,vec__10136,G__10135,inst_10145,inst_10177,inst_10138,inst_10144,inst_10141,inst_10184,state_val_10203,c__5608__auto__){
return (function (){return cmd.lib.dom.toggle.call(null,console);
});
;})(console,vec__10143,payload,msg,vec__10136,G__10135,inst_10145,inst_10177,inst_10138,inst_10144,inst_10141,inst_10184,state_val_10203,c__5608__auto__))
})();var inst_10186 = setTimeout(inst_10185,2000);var state_10202__$1 = (function (){var statearr_10239 = state_10202;(statearr_10239[20] = inst_10184);
return statearr_10239;
})();var statearr_10240_10278 = state_10202__$1;(statearr_10240_10278[2] = inst_10186);
(statearr_10240_10278[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10203 === 8))
{var inst_10146 = cmd.core.load_initial_content.call(null);var inst_10147 = cmd.core.load_gists.call(null);var state_10202__$1 = (function (){var statearr_10241 = state_10202;(statearr_10241[21] = inst_10146);
return statearr_10241;
})();var statearr_10242_10279 = state_10202__$1;(statearr_10242_10279[2] = inst_10147);
(statearr_10242_10279[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10246[0] = state_machine__5594__auto__);
(statearr_10246[1] = 1);
return statearr_10246;
});
var state_machine__5594__auto____1 = (function (state_10202){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10202);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10247){if((e10247 instanceof Object))
{var ex__5597__auto__ = e10247;var statearr_10248_10280 = state_10202;(statearr_10248_10280[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10202);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10281 = state_10202;
state_10202 = G__10281;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10202){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10249 = f__5609__auto__.call(null);(statearr_10249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.utils.getcookie.call(null,"username");var auth_token = cmd.utils.getcookie.call(null,"auth-token");var last_opened_gist_id = cmd.utils.getcookie.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
var worker_10282 = (new Worker("resources/public/js/worker.js"));cmd.core.set_state.call(null,state,new cljs.core.Keyword(null,"worker","worker",4526786288),worker_10282);
var repls_10283 = cmd.ui.get_repl_plugins.call(null);var default_repl_10284 = cmd.ui.xxx;var current_repl_10285 = current_repl.get_repl.call(null,app_bus,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd.ui.input,cmd.ui.toolbar], null));current_repl_10285.loop();
cmd.ui.setup_toolbar_listeners.call(null);
cmd.core.authenticate.call(null,username,auth_token);
cmd.ui.render_toolbar.call(null,state);
cmd.ui.render_console.call(null,state);
cmd.ui.setup_panels.call(null);
return cmd.core.say.call(null,"Welcome to CMD :-)");
});
cmd.ui.main.call(null,cmd.core.state,cmd.core.AppBus);

//# sourceMappingURL=ui.js.map