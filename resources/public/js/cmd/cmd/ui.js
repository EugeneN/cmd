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
cljs.core._STAR_print_fn_STAR_ = (function (p1__10063_SHARP_){return console.log(p1__10063_SHARP_);
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
var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10083){var state_val_10084 = (state_10083[1]);if((state_val_10084 === 2))
{var inst_10081 = (state_10083[2]);var state_10083__$1 = state_10083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10083__$1,inst_10081);
} else
{if((state_val_10084 === 1))
{var inst_10078 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_10079 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10078,null));var state_10083__$1 = state_10083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10083__$1,2,cmd.core.AppBus,inst_10079);
} else
{return null;
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10088 = [null,null,null,null,null,null,null];(statearr_10088[0] = state_machine__6714__auto__);
(statearr_10088[1] = 1);
return statearr_10088;
});
var state_machine__6714__auto____1 = (function (state_10083){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10083);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10089){if((e10089 instanceof Object))
{var ex__6717__auto__ = e10089;var statearr_10090_10092 = state_10083;(statearr_10090_10092[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10093 = state_10083;
state_10083 = G__10093;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10083){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10091 = f__6729__auto__.call(null);(statearr_10091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var G__10095 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10095))
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
cmd.ui.handle_new_gist = (function handle_new_gist(ev){var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var new_gist_name_el = cmd.ui.$.call(null,"new-gist-name");var G__10097 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10097))
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
cmd.ui.has_parent = (function has_parent(el,parent){var G__10099 = el;if(cljs.core._EQ_.call(null,null,G__10099))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,el,parent))
{return true;
} else
{return has_parent.call(null,el.parentNode,parent);
}
} else
{return null;
}
}
});
cmd.ui.setup_toolbar_listeners = (function setup_toolbar_listeners(){var toolbar_toggler = cmd.ui.$.call(null,"toolbar-toggler");var editor_toggler = cmd.ui.$.call(null,"editor-toggler");var console_toggler = cmd.ui.$.call(null,"console-toggler");var info_toggler = cmd.ui.$.call(null,"info-toggler");var toolbar = cmd.ui.$.call(null,"toolbar");var console = cmd.ui.$.call(null,"console");var preview = cmd.ui.$.call(null,"preview-container");var editor = cmd.ui.$.call(null,"input");var preview_toggler = cmd.ui.$.call(null,"preview-toggler");Rx.Observable.fromEvent(toolbar_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.jq_toggle.call(null,toolbar,((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429),cljs.core.not.call(null,cmd.ui.visible_QMARK_.call(null,toolbar)));
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(document,"click").filter(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (p1__10100_SHARP_){return cljs.core.not.call(null,cmd.ui.has_parent.call(null,p1__10100_SHARP_.target,cmd.ui.$.call(null,"gist-list")));
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.slide_up.call(null,cmd.ui.$.call(null,"gist-list"));
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
return (function (ev){var and__3469__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3469__auto__))
{return (ev.clientY < 28);
} else
{return and__3469__auto__;
}
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.slide_down.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(document,"mousemove").throttle(50).filter(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (ev){var and__3469__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3469__auto__))
{return (ev.clientY > 28);
} else
{return and__3469__auto__;
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
return (function (p1__10101_SHARP_){return observer.onNext(p1__10101_SHARP_);
});})(editor,session,preview_container,editor_container,preview))
);
});})(editor,session,preview_container,editor_container,preview))
).throttle(15).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (p1__10102_SHARP_){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,preview_container)))
{return preview_container.scrollTop = cmd.ui.calc_offset_top_preview.call(null,p1__10102_SHARP_);
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
cmd.ui.setup_panels = (function setup_panels(){var x = (function (){var or__3481__auto__ = cmd.core.get_panels_from_location_hash.call(null);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
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
cmd.ui.handle_select_panel_click = (function handle_select_panel_click(ev){var gist_id = ev.target.getAttribute("data-value");var select_panel = cmd.ui.$.call(null,"gist-list");cmd.core.load_gist.call(null,gist_id);
return cmd.ui.slide_up.call(null,select_panel);
});
cmd.ui.gist_list_str = (function gist_list_str(gist){return cmd.utils.join_gist_names.call(null,cljs.core.keys.call(null,gist.call(null,"files")));
});
cmd.ui.gist_select = (function gist_select(state,owner){if(typeof cmd.ui.t10106 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10106 = (function (owner,state,gist_select,meta10107){
this.owner = owner;
this.state = state;
this.gist_select = gist_select;
this.meta10107 = meta10107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10106.cljs$lang$type = true;
cmd.ui.t10106.cljs$lang$ctorStr = "cmd.ui/t10106";
cmd.ui.t10106.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t10106");
});
cmd.ui.t10106.prototype.om$core$IRender$ = true;
cmd.ui.t10106.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "gist-select-container"},React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest created"),React.DOM.div({"className": "select-panel-list-wrapper"},cljs.core.apply.call(null,om.dom.ul,{"title": "Select a gist for a good start :-)", "className": "select-panel-list"},cljs.core.map.call(null,((function (___$1){
return (function (gist){return React.DOM.li({"onClick": cmd.ui.handle_select_panel_click, "data-value": gist.call(null,"id")},cmd.ui.gist_list_str.call(null,gist));
});})(___$1))
,cljs.core.sort.call(null,((function (___$1){
return (function (a,b){return (a.call(null,"created_at") > b.call(null,"created_at"));
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.state)))))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest edited"),React.DOM.div({"className": "select-panel-list-wrapper"},cljs.core.apply.call(null,om.dom.ul,{"title": "Select a gist for a good start :-)", "className": "select-panel-list"},cljs.core.map.call(null,((function (___$1){
return (function (gist){return React.DOM.li({"onClick": cmd.ui.handle_select_panel_click, "data-value": gist.call(null,"id")},cmd.ui.gist_list_str.call(null,gist));
});})(___$1))
,cljs.core.sort.call(null,((function (___$1){
return (function (a,b){return (a.call(null,"updated_at") > b.call(null,"updated_at"));
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.state)))))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Pinned"),React.DOM.div({"className": "select-panel-list-wrapper"},cljs.core.apply.call(null,om.dom.ul,{"title": "Select a gist for a good start :-)", "className": "select-panel-list"},cljs.core.map.call(null,((function (___$1){
return (function (gist){return React.DOM.li({"onClick": cmd.ui.handle_select_panel_click, "data-value": gist.call(null,"id")},cmd.ui.gist_list_str.call(null,gist));
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.state))))));
});
cmd.ui.t10106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10108){var self__ = this;
var _10108__$1 = this;return self__.meta10107;
});
cmd.ui.t10106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10108,meta10107__$1){var self__ = this;
var _10108__$1 = this;return (new cmd.ui.t10106(self__.owner,self__.state,self__.gist_select,meta10107__$1));
});
cmd.ui.__GT_t10106 = (function __GT_t10106(owner__$1,state__$1,gist_select__$1,meta10107){return (new cmd.ui.t10106(owner__$1,state__$1,gist_select__$1,meta10107));
});
}
return (new cmd.ui.t10106(owner,state,gist_select,null));
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t10112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10112 = (function (owner,state,toolbar,meta10113){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta10113 = meta10113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10112.cljs$lang$type = true;
cmd.ui.t10112.cljs$lang$ctorStr = "cmd.ui/t10112";
cmd.ui.t10112.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t10112");
});
cmd.ui.t10112.prototype.om$core$IRender$ = true;
cmd.ui.t10112.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cmd.core.authenticated_om_QMARK_.call(null,self__.state)))
{return React.DOM.div(null,React.DOM.img({"style": (((new cljs.core.Keyword(null,"active-requests","active-requests",3616398877).cljs$core$IFn$_invoke$arity$1(self__.state) > 0))?{"display": "block"}:{"display": "none"}), "src": "resources/public/img/loading1.gif", "id": "loading-indicator"}),React.DOM.button({"className": "ios7", "onClick": cmd.ui.handle_new_gist, "id": "new-gist"},((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))?":C@NCEL: ":":NEW_G!ST: ")),om.dom.input.call(null,{"id": "new-gist-name", "style": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))?{"placeholder": "Enter a new gist name", "display": "inline-block"}:{"placeholder": "Enter a new gist name", "value": "", "display": "none"}), "title": "Filename", "type": "text"}),om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (){var panel = cmd.ui.$.call(null,"gist-list");if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,panel)))
{return cmd.ui.slide_up.call(null,panel);
} else
{return cmd.ui.slide_down.call(null,panel);
}
});})(___$1))
, "placeholder": "Select a gist...", "type": "text", "className": "ios7"},"SELECT_G!ST: "),React.DOM.div({"id": "gist-list"},om.core.build.call(null,cmd.ui.gist_select,self__.state)),(function (){var current_gist = self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var href = (((current_gist == null))?null:current_gist.call(null,"html_url"));if((href == null))
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
cmd.ui.t10112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10114){var self__ = this;
var _10114__$1 = this;return self__.meta10113;
});
cmd.ui.t10112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10114,meta10113__$1){var self__ = this;
var _10114__$1 = this;return (new cmd.ui.t10112(self__.owner,self__.state,self__.toolbar,meta10113__$1));
});
cmd.ui.__GT_t10112 = (function __GT_t10112(owner__$1,state__$1,toolbar__$1,meta10113){return (new cmd.ui.t10112(owner__$1,state__$1,toolbar__$1,meta10113));
});
}
return (new cmd.ui.t10112(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.console = (function console__$1(state,owner){if(typeof cmd.ui.t10118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10118 = (function (owner,state,console,meta10119){
this.owner = owner;
this.state = state;
this.console = console;
this.meta10119 = meta10119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10118.cljs$lang$type = true;
cmd.ui.t10118.cljs$lang$ctorStr = "cmd.ui/t10118";
cmd.ui.t10118.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t10118");
});
cmd.ui.t10118.prototype.om$core$IRender$ = true;
cmd.ui.t10118.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"id": "msgs-list"},cljs.core.apply.call(null,om.dom.ul,{"className": "hello"},cljs.core.map_indexed.call(null,((function (___$1){
return (function (idx,msg){if(cljs.core._EQ_.call(null,idx,0))
{return React.DOM.li({"className": "current-message"},[cljs.core.str("> "),cljs.core.str(msg)].join(''));
} else
{return React.DOM.li(null,msg);
}
});})(___$1))
,cljs.core.reverse.call(null,self__.state.call(null,new cljs.core.Keyword(null,"messages","messages",551810238)))))));
});
cmd.ui.t10118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10120){var self__ = this;
var _10120__$1 = this;return self__.meta10119;
});
cmd.ui.t10118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10120,meta10119__$1){var self__ = this;
var _10120__$1 = this;return (new cmd.ui.t10118(self__.owner,self__.state,self__.console,meta10119__$1));
});
cmd.ui.__GT_t10118 = (function __GT_t10118(owner__$1,state__$1,console__$1,meta10119){return (new cmd.ui.t10118(owner__$1,state__$1,console__$1,meta10119));
});
}
return (new cmd.ui.t10118(owner,state,console__$1,null));
});
cmd.ui.render_console = (function render_console(state){return om.core.root.call(null,cmd.ui.console,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),cmd.ui.$.call(null,"console")], null));
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10305){var state_val_10306 = (state_10305[1]);if((state_val_10306 === 7))
{var inst_10256 = (state_10305[2]);var state_10305__$1 = state_10305;var statearr_10307_10355 = state_10305__$1;(statearr_10307_10355[2] = inst_10256);
(statearr_10307_10355[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 20))
{var inst_10290 = (state_10305[2]);var state_10305__$1 = state_10305;var statearr_10308_10356 = state_10305__$1;(statearr_10308_10356[2] = inst_10290);
(statearr_10308_10356[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 1))
{var state_10305__$1 = state_10305;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10305__$1,2,app_bus);
} else
{if((state_val_10306 === 4))
{var inst_10303 = (state_10305[2]);var state_10305__$1 = state_10305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10305__$1,inst_10303);
} else
{if((state_val_10306 === 15))
{var state_10305__$1 = state_10305;var statearr_10309_10357 = state_10305__$1;(statearr_10309_10357[2] = null);
(statearr_10309_10357[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 21))
{var inst_10292 = cmd.core.load_gists.call(null);var state_10305__$1 = state_10305;var statearr_10310_10358 = state_10305__$1;(statearr_10310_10358[2] = inst_10292);
(statearr_10310_10358[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 13))
{var inst_10270 = (state_10305[7]);var inst_10268 = cmd.core.get_gist_id_from_location_hash.call(null);var inst_10269 = cmd.core.find_gist.call(null,cmd.core.state,inst_10268);var inst_10270__$1 = cljs.core.nth.call(null,inst_10269,0,null);var inst_10271 = cljs.core.nthnext.call(null,inst_10269,1);var inst_10272 = (inst_10270__$1 == null);var inst_10273 = cljs.core.not.call(null,inst_10272);var state_10305__$1 = (function (){var statearr_10311 = state_10305;(statearr_10311[8] = inst_10271);
(statearr_10311[7] = inst_10270__$1);
return statearr_10311;
})();if(inst_10273)
{var statearr_10312_10359 = state_10305__$1;(statearr_10312_10359[1] = 14);
} else
{var statearr_10313_10360 = state_10305__$1;(statearr_10313_10360[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 22))
{var inst_10249 = (state_10305[9]);var inst_10248 = (state_10305[10]);var inst_10294 = [cljs.core.str("Unknown message from AppBus: "),cljs.core.str(inst_10248),cljs.core.str(" : "),cljs.core.str(inst_10249)].join('');var inst_10295 = cmd.core.say.call(null,inst_10294);var state_10305__$1 = state_10305;var statearr_10314_10361 = state_10305__$1;(statearr_10314_10361[2] = inst_10295);
(statearr_10314_10361[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 6))
{var inst_10249 = (state_10305[9]);var state_10305__$1 = state_10305;var G__10315_10362 = inst_10249;if(cljs.core._EQ_.call(null,false,G__10315_10362))
{var statearr_10316_10363 = state_10305__$1;(statearr_10316_10363[1] = 9);
} else
{if(cljs.core._EQ_.call(null,true,G__10315_10362))
{var statearr_10317_10364 = state_10305__$1;(statearr_10317_10364[1] = 8);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10249)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 17))
{var inst_10281 = (state_10305[11]);var inst_10281__$1 = cmd.ui.$.call(null,"console");var inst_10282 = cmd.ui.visible_QMARK_.call(null,inst_10281__$1);var inst_10283 = cljs.core.not.call(null,inst_10282);var state_10305__$1 = (function (){var statearr_10318 = state_10305;(statearr_10318[11] = inst_10281__$1);
return statearr_10318;
})();if(inst_10283)
{var statearr_10319_10365 = state_10305__$1;(statearr_10319_10365[1] = 18);
} else
{var statearr_10320_10366 = state_10305__$1;(statearr_10320_10366[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 3))
{var inst_10245 = (state_10305[12]);var inst_10248 = (state_10305[10]);var inst_10248__$1 = cljs.core.nth.call(null,inst_10245,0,null);var inst_10249 = cljs.core.nth.call(null,inst_10245,1,null);var state_10305__$1 = (function (){var statearr_10321 = state_10305;(statearr_10321[9] = inst_10249);
(statearr_10321[10] = inst_10248__$1);
return statearr_10321;
})();var G__10322_10367 = inst_10248__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload-gists","reload-gists",4719976526),G__10322_10367))
{var statearr_10323_10368 = state_10305__$1;(statearr_10323_10368[1] = 21);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),G__10322_10367))
{var statearr_10324_10369 = state_10305__$1;(statearr_10324_10369[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),G__10322_10367))
{var statearr_10325_10370 = state_10305__$1;(statearr_10325_10370[1] = 13);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),G__10322_10367))
{var statearr_10326_10371 = state_10305__$1;(statearr_10326_10371[1] = 12);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__10322_10367))
{var statearr_10327_10372 = state_10305__$1;(statearr_10327_10372[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__10322_10367))
{var statearr_10328_10373 = state_10305__$1;(statearr_10328_10373[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__10322_10367))
{var statearr_10329_10374 = state_10305__$1;(statearr_10329_10374[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_10330_10375 = state_10305__$1;(statearr_10330_10375[1] = 22);
} else
{}
}
}
}
}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 12))
{var inst_10265 = cmd.core.reset_input_with_motd.call(null);var state_10305__$1 = state_10305;var statearr_10331_10376 = state_10305__$1;(statearr_10331_10376[2] = inst_10265);
(statearr_10331_10376[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 2))
{var inst_10242 = (state_10305[13]);var inst_10242__$1 = (state_10305[2]);var inst_10243 = cljs.core.nth.call(null,inst_10242__$1,0,null);var inst_10244 = cljs.core.nth.call(null,inst_10242__$1,1,null);var inst_10245 = inst_10242__$1;var state_10305__$1 = (function (){var statearr_10332 = state_10305;(statearr_10332[14] = inst_10243);
(statearr_10332[12] = inst_10245);
(statearr_10332[13] = inst_10242__$1);
(statearr_10332[15] = inst_10244);
return statearr_10332;
})();var statearr_10333_10377 = state_10305__$1;(statearr_10333_10377[2] = null);
(statearr_10333_10377[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 23))
{var inst_10300 = (state_10305[2]);var inst_10245 = inst_10300;var state_10305__$1 = (function (){var statearr_10334 = state_10305;(statearr_10334[12] = inst_10245);
return statearr_10334;
})();var statearr_10335_10378 = state_10305__$1;(statearr_10335_10378[2] = null);
(statearr_10335_10378[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 19))
{var state_10305__$1 = state_10305;var statearr_10336_10379 = state_10305__$1;(statearr_10336_10379[2] = null);
(statearr_10336_10379[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 11))
{var inst_10263 = cmd.core.reset_input_with_motd.call(null);var state_10305__$1 = state_10305;var statearr_10337_10380 = state_10305__$1;(statearr_10337_10380[2] = inst_10263);
(statearr_10337_10380[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 9))
{var inst_10253 = cmd.core.load_initial_content.call(null);var state_10305__$1 = state_10305;var statearr_10338_10381 = state_10305__$1;(statearr_10338_10381[2] = inst_10253);
(statearr_10338_10381[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 5))
{var inst_10298 = (state_10305[2]);var state_10305__$1 = (function (){var statearr_10339 = state_10305;(statearr_10339[16] = inst_10298);
return statearr_10339;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10305__$1,23,app_bus);
} else
{if((state_val_10306 === 14))
{var inst_10270 = (state_10305[7]);var inst_10275 = inst_10270.call(null,"id");var inst_10276 = cmd.core.load_gist.call(null,inst_10275);var state_10305__$1 = state_10305;var statearr_10340_10382 = state_10305__$1;(statearr_10340_10382[2] = inst_10276);
(statearr_10340_10382[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 16))
{var inst_10279 = (state_10305[2]);var state_10305__$1 = state_10305;var statearr_10341_10383 = state_10305__$1;(statearr_10341_10383[2] = inst_10279);
(statearr_10341_10383[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 10))
{var inst_10249 = (state_10305[9]);var inst_10258 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var inst_10259 = cmd.core.set_input.call(null,inst_10249);var inst_10260 = cmd.core.set_title.call(null,inst_10258);var inst_10261 = cmd.core.set_location_hash_gist_id.call(null,inst_10249);var state_10305__$1 = (function (){var statearr_10342 = state_10305;(statearr_10342[17] = inst_10260);
(statearr_10342[18] = inst_10259);
return statearr_10342;
})();var statearr_10343_10384 = state_10305__$1;(statearr_10343_10384[2] = inst_10261);
(statearr_10343_10384[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 18))
{var inst_10281 = (state_10305[11]);var inst_10245 = (state_10305[12]);var inst_10249 = (state_10305[9]);var inst_10248 = (state_10305[10]);var inst_10242 = (state_10305[13]);var inst_10285 = cmd.ui.jq_toggle.call(null,inst_10281);var inst_10286 = (function (){var console = inst_10281;var vec__10247 = inst_10245;var payload = inst_10249;var msg = inst_10248;var vec__10240 = inst_10242;var G__10239 = inst_10245;return ((function (console,vec__10247,payload,msg,vec__10240,G__10239,inst_10281,inst_10245,inst_10249,inst_10248,inst_10242,inst_10285,state_val_10306,c__6728__auto__){
return (function (){return cmd.ui.jq_toggle.call(null,console);
});
;})(console,vec__10247,payload,msg,vec__10240,G__10239,inst_10281,inst_10245,inst_10249,inst_10248,inst_10242,inst_10285,state_val_10306,c__6728__auto__))
})();var inst_10287 = setTimeout(inst_10286,2000);var state_10305__$1 = (function (){var statearr_10344 = state_10305;(statearr_10344[19] = inst_10285);
return statearr_10344;
})();var statearr_10345_10385 = state_10305__$1;(statearr_10345_10385[2] = inst_10287);
(statearr_10345_10385[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10306 === 8))
{var inst_10250 = cmd.core.load_initial_content.call(null);var inst_10251 = cmd.core.load_gists.call(null);var state_10305__$1 = (function (){var statearr_10346 = state_10305;(statearr_10346[20] = inst_10250);
return statearr_10346;
})();var statearr_10347_10386 = state_10305__$1;(statearr_10347_10386[2] = inst_10251);
(statearr_10347_10386[1] = 7);
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
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10351[0] = state_machine__6714__auto__);
(statearr_10351[1] = 1);
return statearr_10351;
});
var state_machine__6714__auto____1 = (function (state_10305){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10305);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10352){if((e10352 instanceof Object))
{var ex__6717__auto__ = e10352;var statearr_10353_10387 = state_10305;(statearr_10353_10387[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10305);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10388 = state_10305;
state_10305 = G__10388;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10305){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10354 = f__6729__auto__.call(null);(statearr_10354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.utils.getcookie.call(null,"username");var auth_token = cmd.utils.getcookie.call(null,"auth-token");var last_opened_gist_id = cmd.utils.getcookie.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
var worker_10389 = (new Worker("resources/public/js/worker.js"));cmd.core.set_state.call(null,state,new cljs.core.Keyword(null,"worker","worker",4526786288),worker_10389);
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