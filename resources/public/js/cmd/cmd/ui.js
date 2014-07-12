// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.ui');
goog.require('cljs.core');
goog.require('cmd.utils');
goog.require('cmd.defs');
goog.require('cmd.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('goog.style');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('cmd.defs');
goog.require('cmd.utils');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.style');
goog.require('cmd.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_fn_STAR_ = (function (p1__10031_SHARP_){return console.log(p1__10031_SHARP_);
});
cmd.ui.$ = (function $(id_str){return document.getElementById(id_str);
});
cmd.ui.visible_QMARK_ = (function visible_QMARK_(el){return $(el).is(":visible");
});
cmd.ui.set_width = (function set_width(el,width){return el.style.width = width;
});
cmd.ui.show = (function show(el){if(cljs.core.not.call(null,cmd.ui.visible_QMARK_.call(null,el)))
{return goog.style.showElement(el,true);
} else
{return null;
}
});
cmd.ui.hide = (function hide(el){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,el)))
{return goog.style.showElement(el,false);
} else
{return null;
}
});
cmd.ui.toggle = (function toggle(el){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,el)))
{return cmd.ui.hide.call(null,el);
} else
{return cmd.ui.show.call(null,el);
}
});
cmd.ui.slide_up = (function slide_up(el){return $(el).slideUp(200);
});
cmd.ui.slide_down = (function slide_down(el){return $(el).slideDown(200);
});
cmd.ui.toggle_slide_left = (function toggle_slide_left(el){return $(el).toggle({"direction": "left", "duration": 200, "effect": "slide"});
});
cmd.ui.toggle_slide_right = (function toggle_slide_right(el){return $(el).toggle({"direction": "right", "duration": 200, "effect": "slide"});
});
cmd.ui.jq_toggle = (function() {
var jq_toggle = null;
var jq_toggle__1 = (function (el){return $(el).slideToggle(200);
});
var jq_toggle__2 = (function (el,complete_cb){return $(el).slideToggle(200,complete_cb);
});
jq_toggle = function(el,complete_cb){
switch(arguments.length){
case 1:
return jq_toggle__1.call(this,el);
case 2:
return jq_toggle__2.call(this,el,complete_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jq_toggle.cljs$core$IFn$_invoke$arity$1 = jq_toggle__1;
jq_toggle.cljs$core$IFn$_invoke$arity$2 = jq_toggle__2;
return jq_toggle;
})()
;
cmd.ui.set_preview = (function set_preview(){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var ace_value = ace.getSession().getValue();return cmd.core.process.call(null,ace_value,((function (ace,ace_value){
return (function (value){return cmd.utils.html_BANG_.call(null,cmd.ui.$.call(null,"preview"),value);
});})(ace,ace_value))
);
});
cmd.ui.handle_pull = (function handle_pull(_){return cmd.core.load_gist.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.ui.handle_logout = (function handle_logout(_){cmd.core.say.call(null,"Bye, c u l8r :-)");
cmd.core.reset_state.call(null,cmd.core.state);
cmd.utils.setcookie.call(null,"username","");
cmd.utils.setcookie.call(null,"auth-token","");
var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10051){var state_val_10052 = (state_10051[1]);if((state_val_10052 === 2))
{var inst_10049 = (state_10051[2]);var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10051__$1,inst_10049);
} else
{if((state_val_10052 === 1))
{var inst_10046 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_10047 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10046,null));var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10051__$1,2,cmd.core.AppBus,inst_10047);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10056 = [null,null,null,null,null,null,null];(statearr_10056[0] = state_machine__5594__auto__);
(statearr_10056[1] = 1);
return statearr_10056;
});
var state_machine__5594__auto____1 = (function (state_10051){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10057){if((e10057 instanceof Object))
{var ex__5597__auto__ = e10057;var statearr_10058_10060 = state_10051;(statearr_10058_10060[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10061 = state_10051;
state_10051 = G__10061;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10051){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10059 = f__5609__auto__.call(null);(statearr_10059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var G__10063 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10063))
{var file_name = cmd.ui.$.call(null,"new-gist-name").value;var new_content = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"public","public",4331447771),false,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);if((cljs.core.count.call(null,file_name) < 4))
{return cmd.core.say.call(null,"Bad new gist file name");
} else
{return cmd.core.create_gist.call(null,new_content);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var gist_id = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043));var file_name = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var new_content = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);return cmd.core.save_gist.call(null,gist_id,new_content);
} else
{return null;
}
}
});
cmd.ui.handle_select = (function handle_select(e){var selected_id = e.target.value;return cmd.core.load_gist.call(null,selected_id);
});
cmd.ui.handle_new_gist = (function handle_new_gist(ev){var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var new_gist_name_el = cmd.ui.$.call(null,"new-gist-name");var G__10065 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10065))
{return (function (){cmd.ui.toggle_slide_left.call(null,new_gist_name_el);
new_gist_name_el.value = "";
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);
return cmd.core.reset_input_with_motd.call(null);
})().call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cmd.ui.toggle_slide_left.call(null,cmd.ui.$.call(null,"new-gist-name"));
cmd.ui.$.call(null,"new-gist-name").focus();
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810));
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),null);
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),null);
return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),null);
} else
{return null;
}
}
});
cmd.ui.handle_auth = (function handle_auth(e){var username = cmd.ui.$.call(null,"username").value;var auth_token = cmd.ui.$.call(null,"auth-token").value;return cmd.core.authenticate.call(null,username,auth_token);
});
cmd.ui.setup_toolbar_listeners = (function setup_toolbar_listeners(){var toolbar_toggler = cmd.ui.$.call(null,"toolbar-toggler");var editor_toggler = cmd.ui.$.call(null,"editor-toggler");var console_toggler = cmd.ui.$.call(null,"console-toggler");var info_toggler = cmd.ui.$.call(null,"info-toggler");var toolbar = cmd.ui.$.call(null,"toolbar");var console = cmd.ui.$.call(null,"console");var preview = cmd.ui.$.call(null,"preview-container");var editor = cmd.ui.$.call(null,"input");var preview_toggler = cmd.ui.$.call(null,"preview-toggler");Rx.Observable.fromEvent(toolbar_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.jq_toggle.call(null,toolbar,((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429),cljs.core.not.call(null,cmd.ui.visible_QMARK_.call(null,toolbar)));
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(preview_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.toggle_slide_right.call(null,preview);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(editor_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.toggle_slide_left.call(null,editor);
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
return (function (){return cmd.ui.slide_down.call(null,toolbar);
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
return (function (){return cmd.ui.slide_up.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
return Rx.Observable.fromEvent(console_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.jq_toggle.call(null,console);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
});
cmd.ui.setup_editor_listeners = (function setup_editor_listeners(){var editor = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var session = editor.getSession();var preview_container = cmd.ui.$.call(null,"preview-container");var editor_container = cmd.ui.$.call(null,"input");var preview = cmd.ui.$.call(null,"preview");Rx.Observable.create(((function (editor,session,preview_container,editor_container,preview){
return (function (observer){return session.on("change",((function (editor,session,preview_container,editor_container,preview){
return (function (){return observer.onNext();
});})(editor,session,preview_container,editor_container,preview))
);
});})(editor,session,preview_container,editor_container,preview))
).throttle(300).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (){return cmd.ui.set_preview.call(null);
});})(editor,session,preview_container,editor_container,preview))
);
cmd.ui.calc_offset_top_preview = ((function (editor,session,preview_container,editor_container,preview){
return (function calc_offset_top_preview(ot1){var ch1 = (session.getScreenLength() * editor.renderer.lineHeight);var ch2 = preview.clientHeight;return ((ot1 * ch2) / ch1);
});})(editor,session,preview_container,editor_container,preview))
;
cmd.ui.calc_offset_top_input = ((function (editor,session,preview_container,editor_container,preview){
return (function calc_offset_top_input(ot2){var ch1 = (session.getScreenLength() * editor.renderer.lineHeight);var ch2 = preview.clientHeight;return ((ot2 * ch1) / ch2);
});})(editor,session,preview_container,editor_container,preview))
;
Rx.Observable.create(((function (editor,session,preview_container,editor_container,preview){
return (function (observer){return session.on("changeScrollTop",((function (editor,session,preview_container,editor_container,preview){
return (function (p1__10066_SHARP_){return observer.onNext(p1__10066_SHARP_);
});})(editor,session,preview_container,editor_container,preview))
);
});})(editor,session,preview_container,editor_container,preview))
).throttle(15).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (p1__10067_SHARP_){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,preview_container)))
{return preview_container.scrollTop = cmd.ui.calc_offset_top_preview.call(null,p1__10067_SHARP_);
} else
{return null;
}
});})(editor,session,preview_container,editor_container,preview))
);
return Rx.Observable.fromEvent(preview_container,"scroll").throttle(15).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,editor_container)))
{return session.setScrollTop(cmd.ui.calc_offset_top_input.call(null,preview_container.scrollTop));
} else
{return null;
}
});})(editor,session,preview_container,editor_container,preview))
);
});
cmd.ui.setup_ace = (function setup_ace(){var editor = ace.edit("input");var session = editor.getSession();cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629),editor);
session.setMode("ace/mode/markdown");
return session.setUseWrapMode(true);
});
cmd.ui.setup_panels = (function setup_panels(){var x = (function (){var or__3451__auto__ = cmd.core.get_panels_from_location_hash.call(null);if(cljs.core.truth_(or__3451__auto__))
{return or__3451__auto__;
} else
{return cmd.defs.all_panels;
}
})();var y = clojure.set.intersection.call(null,cmd.defs.all_panels,x);var no_flags_set = cljs.core._EQ_.call(null,0,cljs.core.count.call(null,y));var panels_to_hide = ((no_flags_set)?cljs.core.PersistentHashSet.EMPTY:clojure.set.difference.call(null,cmd.defs.all_panels,y));var toolbar = cmd.ui.$.call(null,"toolbar");var console = cmd.ui.$.call(null,"console");var preview = cmd.ui.$.call(null,"preview-container");var editor = cmd.ui.$.call(null,"input");if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["t",null], null), null),panels_to_hide)))
{cmd.ui.hide.call(null,toolbar);
} else
{}
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["e",null], null), null),panels_to_hide)))
{cmd.ui.hide.call(null,editor);
} else
{}
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["p",null], null), null),panels_to_hide)))
{return cmd.ui.hide.call(null,preview);
} else
{return null;
}
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t10071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10071 = (function (owner,state,toolbar,meta10072){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta10072 = meta10072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10071.cljs$lang$type = true;
cmd.ui.t10071.cljs$lang$ctorStr = "cmd.ui/t10071";
cmd.ui.t10071.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t10071");
});
cmd.ui.t10071.prototype.om$core$IRender$ = true;
cmd.ui.t10071.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
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
cmd.ui.t10071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10073){var self__ = this;
var _10073__$1 = this;return self__.meta10072;
});
cmd.ui.t10071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10073,meta10072__$1){var self__ = this;
var _10073__$1 = this;return (new cmd.ui.t10071(self__.owner,self__.state,self__.toolbar,meta10072__$1));
});
cmd.ui.__GT_t10071 = (function __GT_t10071(owner__$1,state__$1,toolbar__$1,meta10072){return (new cmd.ui.t10071(owner__$1,state__$1,toolbar__$1,meta10072));
});
}
return (new cmd.ui.t10071(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.console = (function console__$1(state,owner){if(typeof cmd.ui.t10077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10077 = (function (owner,state,console,meta10078){
this.owner = owner;
this.state = state;
this.console = console;
this.meta10078 = meta10078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10077.cljs$lang$type = true;
cmd.ui.t10077.cljs$lang$ctorStr = "cmd.ui/t10077";
cmd.ui.t10077.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t10077");
});
cmd.ui.t10077.prototype.om$core$IRender$ = true;
cmd.ui.t10077.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"id": "msgs-list"},cljs.core.apply.call(null,om.dom.ul,{"className": "hello"},cljs.core.map_indexed.call(null,((function (___$1){
return (function (idx,msg){if(cljs.core._EQ_.call(null,idx,0))
{return React.DOM.li({"className": "current-message"},[cljs.core.str("> "),cljs.core.str(msg)].join(''));
} else
{return React.DOM.li(null,msg);
}
});})(___$1))
,cljs.core.reverse.call(null,self__.state.call(null,new cljs.core.Keyword(null,"messages","messages",551810238)))))));
});
cmd.ui.t10077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10079){var self__ = this;
var _10079__$1 = this;return self__.meta10078;
});
cmd.ui.t10077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10079,meta10078__$1){var self__ = this;
var _10079__$1 = this;return (new cmd.ui.t10077(self__.owner,self__.state,self__.console,meta10078__$1));
});
cmd.ui.__GT_t10077 = (function __GT_t10077(owner__$1,state__$1,console__$1,meta10078){return (new cmd.ui.t10077(owner__$1,state__$1,console__$1,meta10078));
});
}
return (new cmd.ui.t10077(owner,state,console__$1,null));
});
cmd.ui.render_console = (function render_console(state){return om.core.root.call(null,cmd.ui.console,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),cmd.ui.$.call(null,"console")], null));
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10258){var state_val_10259 = (state_10258[1]);if((state_val_10259 === 7))
{var inst_10211 = (state_10258[2]);var state_10258__$1 = state_10258;var statearr_10260_10306 = state_10258__$1;(statearr_10260_10306[2] = inst_10211);
(statearr_10260_10306[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 20))
{var inst_10245 = (state_10258[2]);var state_10258__$1 = state_10258;var statearr_10261_10307 = state_10258__$1;(statearr_10261_10307[2] = inst_10245);
(statearr_10261_10307[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 1))
{var state_10258__$1 = state_10258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10258__$1,2,app_bus);
} else
{if((state_val_10259 === 4))
{var inst_10256 = (state_10258[2]);var state_10258__$1 = state_10258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10258__$1,inst_10256);
} else
{if((state_val_10259 === 15))
{var state_10258__$1 = state_10258;var statearr_10262_10308 = state_10258__$1;(statearr_10262_10308[2] = null);
(statearr_10262_10308[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 21))
{var inst_10204 = (state_10258[7]);var inst_10203 = (state_10258[8]);var inst_10247 = [cljs.core.str("Unknown message from AppBus: "),cljs.core.str(inst_10203),cljs.core.str(" : "),cljs.core.str(inst_10204)].join('');var inst_10248 = cmd.core.say.call(null,inst_10247);var state_10258__$1 = state_10258;var statearr_10263_10309 = state_10258__$1;(statearr_10263_10309[2] = inst_10248);
(statearr_10263_10309[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 13))
{var inst_10225 = (state_10258[9]);var inst_10223 = cmd.core.get_gist_id_from_location_hash.call(null);var inst_10224 = cmd.core.find_gist.call(null,cmd.core.state,inst_10223);var inst_10225__$1 = cljs.core.nth.call(null,inst_10224,0,null);var inst_10226 = cljs.core.nthnext.call(null,inst_10224,1);var inst_10227 = (inst_10225__$1 == null);var inst_10228 = cljs.core.not.call(null,inst_10227);var state_10258__$1 = (function (){var statearr_10264 = state_10258;(statearr_10264[9] = inst_10225__$1);
(statearr_10264[10] = inst_10226);
return statearr_10264;
})();if(inst_10228)
{var statearr_10265_10310 = state_10258__$1;(statearr_10265_10310[1] = 14);
} else
{var statearr_10266_10311 = state_10258__$1;(statearr_10266_10311[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 22))
{var inst_10253 = (state_10258[2]);var inst_10200 = inst_10253;var state_10258__$1 = (function (){var statearr_10267 = state_10258;(statearr_10267[11] = inst_10200);
return statearr_10267;
})();var statearr_10268_10312 = state_10258__$1;(statearr_10268_10312[2] = null);
(statearr_10268_10312[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 6))
{var inst_10204 = (state_10258[7]);var state_10258__$1 = state_10258;var G__10269_10313 = inst_10204;if(cljs.core._EQ_.call(null,false,G__10269_10313))
{var statearr_10270_10314 = state_10258__$1;(statearr_10270_10314[1] = 9);
} else
{if(cljs.core._EQ_.call(null,true,G__10269_10313))
{var statearr_10271_10315 = state_10258__$1;(statearr_10271_10315[1] = 8);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10204)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 17))
{var inst_10236 = (state_10258[12]);var inst_10236__$1 = cmd.ui.$.call(null,"console");var inst_10237 = cmd.ui.visible_QMARK_.call(null,inst_10236__$1);var inst_10238 = cljs.core.not.call(null,inst_10237);var state_10258__$1 = (function (){var statearr_10272 = state_10258;(statearr_10272[12] = inst_10236__$1);
return statearr_10272;
})();if(inst_10238)
{var statearr_10273_10316 = state_10258__$1;(statearr_10273_10316[1] = 18);
} else
{var statearr_10274_10317 = state_10258__$1;(statearr_10274_10317[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 3))
{var inst_10200 = (state_10258[11]);var inst_10203 = (state_10258[8]);var inst_10203__$1 = cljs.core.nth.call(null,inst_10200,0,null);var inst_10204 = cljs.core.nth.call(null,inst_10200,1,null);var state_10258__$1 = (function (){var statearr_10275 = state_10258;(statearr_10275[7] = inst_10204);
(statearr_10275[8] = inst_10203__$1);
return statearr_10275;
})();var G__10276_10318 = inst_10203__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),G__10276_10318))
{var statearr_10277_10319 = state_10258__$1;(statearr_10277_10319[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),G__10276_10318))
{var statearr_10278_10320 = state_10258__$1;(statearr_10278_10320[1] = 13);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),G__10276_10318))
{var statearr_10279_10321 = state_10258__$1;(statearr_10279_10321[1] = 12);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__10276_10318))
{var statearr_10280_10322 = state_10258__$1;(statearr_10280_10322[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__10276_10318))
{var statearr_10281_10323 = state_10258__$1;(statearr_10281_10323[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__10276_10318))
{var statearr_10282_10324 = state_10258__$1;(statearr_10282_10324[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_10283_10325 = state_10258__$1;(statearr_10283_10325[1] = 21);
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
{if((state_val_10259 === 12))
{var inst_10220 = cmd.core.reset_input_with_motd.call(null);var state_10258__$1 = state_10258;var statearr_10284_10326 = state_10258__$1;(statearr_10284_10326[2] = inst_10220);
(statearr_10284_10326[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 2))
{var inst_10197 = (state_10258[13]);var inst_10197__$1 = (state_10258[2]);var inst_10198 = cljs.core.nth.call(null,inst_10197__$1,0,null);var inst_10199 = cljs.core.nth.call(null,inst_10197__$1,1,null);var inst_10200 = inst_10197__$1;var state_10258__$1 = (function (){var statearr_10285 = state_10258;(statearr_10285[13] = inst_10197__$1);
(statearr_10285[14] = inst_10198);
(statearr_10285[11] = inst_10200);
(statearr_10285[15] = inst_10199);
return statearr_10285;
})();var statearr_10286_10327 = state_10258__$1;(statearr_10286_10327[2] = null);
(statearr_10286_10327[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 19))
{var state_10258__$1 = state_10258;var statearr_10287_10328 = state_10258__$1;(statearr_10287_10328[2] = null);
(statearr_10287_10328[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 11))
{var inst_10218 = cmd.core.reset_input_with_motd.call(null);var state_10258__$1 = state_10258;var statearr_10288_10329 = state_10258__$1;(statearr_10288_10329[2] = inst_10218);
(statearr_10288_10329[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 9))
{var inst_10208 = cmd.core.load_initial_content.call(null);var state_10258__$1 = state_10258;var statearr_10289_10330 = state_10258__$1;(statearr_10289_10330[2] = inst_10208);
(statearr_10289_10330[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 5))
{var inst_10251 = (state_10258[2]);var state_10258__$1 = (function (){var statearr_10290 = state_10258;(statearr_10290[16] = inst_10251);
return statearr_10290;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10258__$1,22,app_bus);
} else
{if((state_val_10259 === 14))
{var inst_10225 = (state_10258[9]);var inst_10230 = inst_10225.call(null,"id");var inst_10231 = cmd.core.load_gist.call(null,inst_10230);var state_10258__$1 = state_10258;var statearr_10291_10331 = state_10258__$1;(statearr_10291_10331[2] = inst_10231);
(statearr_10291_10331[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 16))
{var inst_10234 = (state_10258[2]);var state_10258__$1 = state_10258;var statearr_10292_10332 = state_10258__$1;(statearr_10292_10332[2] = inst_10234);
(statearr_10292_10332[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 10))
{var inst_10204 = (state_10258[7]);var inst_10213 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var inst_10214 = cmd.core.set_input.call(null,inst_10204);var inst_10215 = cmd.core.set_title.call(null,inst_10213);var inst_10216 = cmd.core.set_location_hash_gist_id.call(null,inst_10204);var state_10258__$1 = (function (){var statearr_10293 = state_10258;(statearr_10293[17] = inst_10215);
(statearr_10293[18] = inst_10214);
return statearr_10293;
})();var statearr_10294_10333 = state_10258__$1;(statearr_10294_10333[2] = inst_10216);
(statearr_10294_10333[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 18))
{var inst_10236 = (state_10258[12]);var inst_10197 = (state_10258[13]);var inst_10204 = (state_10258[7]);var inst_10200 = (state_10258[11]);var inst_10203 = (state_10258[8]);var inst_10240 = cmd.ui.jq_toggle.call(null,inst_10236);var inst_10241 = (function (){var console = inst_10236;var vec__10202 = inst_10200;var payload = inst_10204;var msg = inst_10203;var vec__10195 = inst_10197;var G__10194 = inst_10200;return ((function (console,vec__10202,payload,msg,vec__10195,G__10194,inst_10236,inst_10197,inst_10204,inst_10200,inst_10203,inst_10240,state_val_10259,c__5608__auto__){
return (function (){return cmd.ui.jq_toggle.call(null,console);
});
;})(console,vec__10202,payload,msg,vec__10195,G__10194,inst_10236,inst_10197,inst_10204,inst_10200,inst_10203,inst_10240,state_val_10259,c__5608__auto__))
})();var inst_10242 = setTimeout(inst_10241,2000);var state_10258__$1 = (function (){var statearr_10295 = state_10258;(statearr_10295[19] = inst_10240);
return statearr_10295;
})();var statearr_10296_10334 = state_10258__$1;(statearr_10296_10334[2] = inst_10242);
(statearr_10296_10334[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10259 === 8))
{var inst_10205 = cmd.core.load_initial_content.call(null);var inst_10206 = cmd.core.load_gists.call(null);var state_10258__$1 = (function (){var statearr_10297 = state_10258;(statearr_10297[20] = inst_10205);
return statearr_10297;
})();var statearr_10298_10335 = state_10258__$1;(statearr_10298_10335[2] = inst_10206);
(statearr_10298_10335[1] = 7);
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
var state_machine__5594__auto____0 = (function (){var statearr_10302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10302[0] = state_machine__5594__auto__);
(statearr_10302[1] = 1);
return statearr_10302;
});
var state_machine__5594__auto____1 = (function (state_10258){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10258);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10303){if((e10303 instanceof Object))
{var ex__5597__auto__ = e10303;var statearr_10304_10336 = state_10258;(statearr_10304_10336[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10337 = state_10258;
state_10258 = G__10337;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10258){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10305 = f__5609__auto__.call(null);(statearr_10305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.utils.getcookie.call(null,"username");var auth_token = cmd.utils.getcookie.call(null,"auth-token");var last_opened_gist_id = cmd.utils.getcookie.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
var worker_10338 = (new Worker("resources/public/js/worker.js"));cmd.core.set_state.call(null,state,new cljs.core.Keyword(null,"worker","worker",4526786288),worker_10338);
cmd.ui.setup_ace.call(null);
cmd.ui.setup_editor_listeners.call(null);
cmd.ui.setup_toolbar_listeners.call(null);
cmd.core.authenticate.call(null,username,auth_token);
cmd.ui.render_toolbar.call(null,state);
cmd.ui.render_console.call(null,state);
cmd.ui.setup_panels.call(null);
return cmd.core.say.call(null,"Welcome to CMD :-)");
});
cmd.ui.main.call(null,cmd.core.state,cmd.core.AppBus);

//# sourceMappingURL=ui.js.map