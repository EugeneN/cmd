// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.ui');
goog.require('cljs.core');
goog.require('cmd.utils');
goog.require('cmd.defs');
goog.require('cljs.core.async');
goog.require('cmd.core');
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
cljs.core._STAR_print_fn_STAR_ = (function (p1__10748_SHARP_){return console.log(p1__10748_SHARP_);
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
cmd.core.set_prefs.call(null,"username",null);
cmd.core.set_prefs.call(null,"auth-token",null);
var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10768){var state_val_10769 = (state_10768[1]);if((state_val_10769 === 2))
{var inst_10766 = (state_10768[2]);var state_10768__$1 = state_10768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10768__$1,inst_10766);
} else
{if((state_val_10769 === 1))
{var inst_10763 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_10764 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10763,null));var state_10768__$1 = state_10768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10768__$1,2,cmd.core.AppBus,inst_10764);
} else
{return null;
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10773 = [null,null,null,null,null,null,null];(statearr_10773[0] = state_machine__6714__auto__);
(statearr_10773[1] = 1);
return statearr_10773;
});
var state_machine__6714__auto____1 = (function (state_10768){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10774){if((e10774 instanceof Object))
{var ex__6717__auto__ = e10774;var statearr_10775_10777 = state_10768;(statearr_10775_10777[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10778 = state_10768;
state_10768 = G__10778;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10768){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10776 = f__6729__auto__.call(null);(statearr_10776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var G__10780 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10780))
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
cmd.ui.handle_new_gist = (function handle_new_gist(ev){var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var new_gist_name_el = cmd.ui.$.call(null,"new-gist-name");var G__10782 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10782))
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
cmd.ui.has_parent = (function has_parent(el,parent){var G__10784 = el;if(cljs.core._EQ_.call(null,null,G__10784))
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
return (function (p1__10785_SHARP_){return cljs.core.not.call(null,cmd.ui.has_parent.call(null,p1__10785_SHARP_.target,cmd.ui.$.call(null,"gist-list")));
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
return (function (p1__10786_SHARP_){return observer.onNext(p1__10786_SHARP_);
});})(editor,session,preview_container,editor_container,preview))
);
});})(editor,session,preview_container,editor_container,preview))
).throttle(15).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (p1__10787_SHARP_){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,preview_container)))
{return preview_container.scrollTop = cmd.ui.calc_offset_top_preview.call(null,p1__10787_SHARP_);
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
cmd.ui.toggle_pin_gist = (function toggle_pin_gist(state){var current_gist_id = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043));var is_pinned = cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149)),current_gist_id);if(is_pinned)
{om.core.transact_BANG_.call(null,state,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),((function (current_gist_id,is_pinned){
return (function (old_pinned){return clojure.set.difference.call(null,old_pinned,cljs.core.PersistentHashSet.fromArray([current_gist_id], true));
});})(current_gist_id,is_pinned))
);
return cmd.core.say.call(null,[cljs.core.str("Unpinned gist "),cljs.core.str(current_gist_id)].join(''));
} else
{om.core.transact_BANG_.call(null,state,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149),((function (current_gist_id,is_pinned){
return (function (old_pinned){return clojure.set.union.call(null,old_pinned,cljs.core.PersistentHashSet.fromArray([current_gist_id], true));
});})(current_gist_id,is_pinned))
);
return cmd.core.say.call(null,[cljs.core.str("Pinned gist "),cljs.core.str(current_gist_id)].join(''));
}
});
cmd.ui.handle_select_panel_click = (function handle_select_panel_click(ev){var gist_id = ev.target.getAttribute("data-value");var select_panel = cmd.ui.$.call(null,"gist-list");cmd.core.load_gist.call(null,gist_id);
return cmd.ui.slide_up.call(null,select_panel);
});
cmd.ui.gist_list_str = (function gist_list_str(gist){return cmd.utils.join_gist_names.call(null,cljs.core.keys.call(null,gist.call(null,"files")));
});
cmd.ui.valid_query_QMARK_ = (function valid_query_QMARK_(query){return !((cljs.core._EQ_.call(null,query,"")) || (cljs.core._EQ_.call(null,query,null)));
});
cmd.ui.gist_matches_query_QMARK_ = (function gist_matches_query_QMARK_(gist,query){var norm_source = [cljs.core.str(cmd.ui.gist_list_str.call(null,gist))].join('').toLowerCase();var norm_query = query.toLowerCase();return (norm_source.indexOf(norm_query) > -1);
});
cmd.ui.render_list = (function render_list(gists){return cljs.core.apply.call(null,om.dom.ul,{"title": "Select a gist for a good start :-)", "className": "select-panel-list"},cljs.core.map.call(null,(function (gist){return React.DOM.li({"onClick": cmd.ui.handle_select_panel_click, "data-value": gist.call(null,"id")},cmd.ui.gist_list_str.call(null,gist));
}),gists));
});
cmd.ui.gist_select = (function gist_select(state,owner){if(typeof cmd.ui.t10791 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10791 = (function (owner,state,gist_select,meta10792){
this.owner = owner;
this.state = state;
this.gist_select = gist_select;
this.meta10792 = meta10792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10791.cljs$lang$type = true;
cmd.ui.t10791.cljs$lang$ctorStr = "cmd.ui/t10791";
cmd.ui.t10791.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t10791");
});
cmd.ui.t10791.prototype.om$core$IRender$ = true;
cmd.ui.t10791.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var gists = cljs.core.filter.call(null,((function (___$1){
return (function (gist){var query = new cljs.core.Keyword(null,"query","query",1121848378).cljs$core$IFn$_invoke$arity$1(self__.state);if(cmd.ui.valid_query_QMARK_.call(null,query))
{return cmd.ui.gist_matches_query_QMARK_.call(null,gist,query);
} else
{return true;
}
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.state));var latest_created = cljs.core.sort.call(null,((function (gists,___$1){
return (function (a,b){return (a.call(null,"created_at") > b.call(null,"created_at"));
});})(gists,___$1))
,gists);var latest_edited = cljs.core.sort.call(null,((function (gists,latest_created,___$1){
return (function (a,b){return (a.call(null,"updated_at") > b.call(null,"updated_at"));
});})(gists,latest_created,___$1))
,gists);var pinned = cljs.core.sort.call(null,((function (gists,latest_created,latest_edited,___$1){
return (function (a,b){return (cmd.ui.gist_list_str.call(null,a) > cmd.ui.gist_list_str.call(null,b));
});})(gists,latest_created,latest_edited,___$1))
,cmd.core.get_pinned_gists.call(null,self__.state));return React.DOM.div({"className": "gist-select-container"},React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest created"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,latest_created))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest edited"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,latest_edited))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Pinned"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,pinned))));
});
cmd.ui.t10791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10793){var self__ = this;
var _10793__$1 = this;return self__.meta10792;
});
cmd.ui.t10791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10793,meta10792__$1){var self__ = this;
var _10793__$1 = this;return (new cmd.ui.t10791(self__.owner,self__.state,self__.gist_select,meta10792__$1));
});
cmd.ui.__GT_t10791 = (function __GT_t10791(owner__$1,state__$1,gist_select__$1,meta10792){return (new cmd.ui.t10791(owner__$1,state__$1,gist_select__$1,meta10792));
});
}
return (new cmd.ui.t10791(owner,state,gist_select,null));
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t10798 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10798 = (function (owner,state,toolbar,meta10799){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta10799 = meta10799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10798.cljs$lang$type = true;
cmd.ui.t10798.cljs$lang$ctorStr = "cmd.ui/t10798";
cmd.ui.t10798.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t10798");
});
cmd.ui.t10798.prototype.om$core$IRender$ = true;
cmd.ui.t10798.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cmd.core.authenticated_om_QMARK_.call(null,self__.state)))
{return React.DOM.div(null,React.DOM.img({"style": (((new cljs.core.Keyword(null,"active-requests","active-requests",3616398877).cljs$core$IFn$_invoke$arity$1(self__.state) > 0))?{"display": "block"}:{"display": "none"}), "src": "resources/public/img/loading1.gif", "id": "loading-indicator"}),React.DOM.button({"className": "ios7", "onClick": cmd.ui.handle_new_gist, "id": "new-gist"},((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))?":C@NCEL: ":":NEW_G!ST: ")),om.dom.input.call(null,{"id": "new-gist-name", "style": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))?{"placeholder": "Enter a new gist name", "display": "inline-block"}:{"placeholder": "Enter a new gist name", "value": "", "display": "none"}), "title": "Filename", "type": "text"}),om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (){var panel = cmd.ui.$.call(null,"gist-list");if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,panel)))
{return cmd.ui.slide_up.call(null,panel);
} else
{return cmd.ui.slide_down.call(null,panel);
}
});})(___$1))
, "onChange": ((function (___$1){
return (function (p1__10794_SHARP_){return om.core.transact_BANG_.call(null,self__.state,new cljs.core.Keyword(null,"query","query",1121848378),((function (___$1){
return (function (___$2){return p1__10794_SHARP_.target.value;
});})(___$1))
);
});})(___$1))
, "placeholder": "Type here to select a gist...", "type": "text", "className": "ios7"},"SELECT_G!ST: "),React.DOM.div({"id": "gist-list"},om.core.build.call(null,cmd.ui.gist_select,self__.state)),(function (){var current_gist = self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var href = (((current_gist == null))?null:current_gist.call(null,"html_url"));if((href == null))
{return React.DOM.span({"id": "warn-no-gist"},"NO_G?ST");
} else
{return React.DOM.a({"href": href, "title": "View gist in Github (in a new tab/window)", "target": "_blank", "id": "view-orig"},self__.state.call(null,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850)));
}
})(),React.DOM.button({"onClick": cmd.ui.handle_pull, "disabled": (((self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193)) == null))?true:false), "title": "Reload gist from Github", "id": "pull"},">>PULL"),React.DOM.button({"onClick": cmd.ui.handle_push, "disabled": ((((self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193)) == null)) && (!(cljs.core._EQ_.call(null,self__.state.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333)),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))))?true:false), "title": "Save current gist state to Github", "id": "push"},"PUSH>>"),React.DOM.button({"onClick": ((function (___$1){
return (function (){return cmd.ui.toggle_pin_gist.call(null,self__.state);
});})(___$1))
, "disabled": ((((self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193)) == null)) && (!(cljs.core._EQ_.call(null,self__.state.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333)),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))))?true:false), "title": "Pin current gist for this session", "id": "pin"},((cljs.core.contains_QMARK_.call(null,self__.state.call(null,new cljs.core.Keyword(null,"pinned-gists","pinned-gists",1364707149)),self__.state.call(null,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043))))?"UNP!N":"P!N")),React.DOM.span({"className": "toolbar-separator"},"|"),React.DOM.button({"onClick": cmd.ui.handle_logout, "title": "Log out and remove autologin cookies", "id": "log-out"},"LOG^OUT"));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return React.DOM.div(null,React.DOM.label(null,"USERN@ME: "),om.dom.input.call(null,{"id": "username", "title": "Your Github username", "type": "text"}),React.DOM.label(null,"S#CRET: "),om.dom.input.call(null,{"id": "auth-token", "title": "Github auth token in base64 :-P", "type": "text"}),React.DOM.button({"onClick": cmd.ui.handle_auth, "title": "Log in to access and work with your gists", "id": "go"},"LOG>>IN"),(cljs.core.truth_(cmd.core.error_set_QMARK_.call(null,self__.state))?React.DOM.span({"id": "error-msg"}):[cljs.core.str(self__.state.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))].join('')));
} else
{return null;
}
}
});
cmd.ui.t10798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10800){var self__ = this;
var _10800__$1 = this;return self__.meta10799;
});
cmd.ui.t10798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10800,meta10799__$1){var self__ = this;
var _10800__$1 = this;return (new cmd.ui.t10798(self__.owner,self__.state,self__.toolbar,meta10799__$1));
});
cmd.ui.__GT_t10798 = (function __GT_t10798(owner__$1,state__$1,toolbar__$1,meta10799){return (new cmd.ui.t10798(owner__$1,state__$1,toolbar__$1,meta10799));
});
}
return (new cmd.ui.t10798(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.console = (function console__$1(state,owner){if(typeof cmd.ui.t10804 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10804 = (function (owner,state,console,meta10805){
this.owner = owner;
this.state = state;
this.console = console;
this.meta10805 = meta10805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10804.cljs$lang$type = true;
cmd.ui.t10804.cljs$lang$ctorStr = "cmd.ui/t10804";
cmd.ui.t10804.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t10804");
});
cmd.ui.t10804.prototype.om$core$IRender$ = true;
cmd.ui.t10804.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"id": "msgs-list"},cljs.core.apply.call(null,om.dom.ul,{"className": "hello"},cljs.core.map_indexed.call(null,((function (___$1){
return (function (idx,msg){if(cljs.core._EQ_.call(null,idx,0))
{return React.DOM.li({"className": "current-message"},[cljs.core.str("> "),cljs.core.str(msg)].join(''));
} else
{return React.DOM.li(null,msg);
}
});})(___$1))
,cljs.core.reverse.call(null,self__.state.call(null,new cljs.core.Keyword(null,"messages","messages",551810238)))))));
});
cmd.ui.t10804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10806){var self__ = this;
var _10806__$1 = this;return self__.meta10805;
});
cmd.ui.t10804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10806,meta10805__$1){var self__ = this;
var _10806__$1 = this;return (new cmd.ui.t10804(self__.owner,self__.state,self__.console,meta10805__$1));
});
cmd.ui.__GT_t10804 = (function __GT_t10804(owner__$1,state__$1,console__$1,meta10805){return (new cmd.ui.t10804(owner__$1,state__$1,console__$1,meta10805));
});
}
return (new cmd.ui.t10804(owner,state,console__$1,null));
});
cmd.ui.render_console = (function render_console(state){return om.core.root.call(null,cmd.ui.console,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),cmd.ui.$.call(null,"console")], null));
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_10991){var state_val_10992 = (state_10991[1]);if((state_val_10992 === 7))
{var inst_10942 = (state_10991[2]);var state_10991__$1 = state_10991;var statearr_10993_11041 = state_10991__$1;(statearr_10993_11041[2] = inst_10942);
(statearr_10993_11041[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 20))
{var inst_10976 = (state_10991[2]);var state_10991__$1 = state_10991;var statearr_10994_11042 = state_10991__$1;(statearr_10994_11042[2] = inst_10976);
(statearr_10994_11042[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 1))
{var state_10991__$1 = state_10991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10991__$1,2,app_bus);
} else
{if((state_val_10992 === 4))
{var inst_10989 = (state_10991[2]);var state_10991__$1 = state_10991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10991__$1,inst_10989);
} else
{if((state_val_10992 === 15))
{var state_10991__$1 = state_10991;var statearr_10995_11043 = state_10991__$1;(statearr_10995_11043[2] = null);
(statearr_10995_11043[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 21))
{var inst_10978 = cmd.core.load_gists.call(null);var state_10991__$1 = state_10991;var statearr_10996_11044 = state_10991__$1;(statearr_10996_11044[2] = inst_10978);
(statearr_10996_11044[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 13))
{var inst_10956 = (state_10991[7]);var inst_10954 = cmd.core.get_gist_id_from_location_hash.call(null);var inst_10955 = cmd.core.find_gist.call(null,cmd.core.state,inst_10954);var inst_10956__$1 = cljs.core.nth.call(null,inst_10955,0,null);var inst_10957 = cljs.core.nthnext.call(null,inst_10955,1);var inst_10958 = (inst_10956__$1 == null);var inst_10959 = cljs.core.not.call(null,inst_10958);var state_10991__$1 = (function (){var statearr_10997 = state_10991;(statearr_10997[7] = inst_10956__$1);
(statearr_10997[8] = inst_10957);
return statearr_10997;
})();if(inst_10959)
{var statearr_10998_11045 = state_10991__$1;(statearr_10998_11045[1] = 14);
} else
{var statearr_10999_11046 = state_10991__$1;(statearr_10999_11046[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 22))
{var inst_10934 = (state_10991[9]);var inst_10935 = (state_10991[10]);var inst_10980 = [cljs.core.str("Unknown message from AppBus: "),cljs.core.str(inst_10934),cljs.core.str(" : "),cljs.core.str(inst_10935)].join('');var inst_10981 = cmd.core.say.call(null,inst_10980);var state_10991__$1 = state_10991;var statearr_11000_11047 = state_10991__$1;(statearr_11000_11047[2] = inst_10981);
(statearr_11000_11047[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 6))
{var inst_10935 = (state_10991[10]);var state_10991__$1 = state_10991;var G__11001_11048 = inst_10935;if(cljs.core._EQ_.call(null,false,G__11001_11048))
{var statearr_11002_11049 = state_10991__$1;(statearr_11002_11049[1] = 9);
} else
{if(cljs.core._EQ_.call(null,true,G__11001_11048))
{var statearr_11003_11050 = state_10991__$1;(statearr_11003_11050[1] = 8);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10935)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 17))
{var inst_10967 = (state_10991[11]);var inst_10967__$1 = cmd.ui.$.call(null,"console");var inst_10968 = cmd.ui.visible_QMARK_.call(null,inst_10967__$1);var inst_10969 = cljs.core.not.call(null,inst_10968);var state_10991__$1 = (function (){var statearr_11004 = state_10991;(statearr_11004[11] = inst_10967__$1);
return statearr_11004;
})();if(inst_10969)
{var statearr_11005_11051 = state_10991__$1;(statearr_11005_11051[1] = 18);
} else
{var statearr_11006_11052 = state_10991__$1;(statearr_11006_11052[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 3))
{var inst_10934 = (state_10991[9]);var inst_10931 = (state_10991[12]);var inst_10934__$1 = cljs.core.nth.call(null,inst_10931,0,null);var inst_10935 = cljs.core.nth.call(null,inst_10931,1,null);var state_10991__$1 = (function (){var statearr_11007 = state_10991;(statearr_11007[9] = inst_10934__$1);
(statearr_11007[10] = inst_10935);
return statearr_11007;
})();var G__11008_11053 = inst_10934__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload-gists","reload-gists",4719976526),G__11008_11053))
{var statearr_11009_11054 = state_10991__$1;(statearr_11009_11054[1] = 21);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),G__11008_11053))
{var statearr_11010_11055 = state_10991__$1;(statearr_11010_11055[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),G__11008_11053))
{var statearr_11011_11056 = state_10991__$1;(statearr_11011_11056[1] = 13);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),G__11008_11053))
{var statearr_11012_11057 = state_10991__$1;(statearr_11012_11057[1] = 12);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__11008_11053))
{var statearr_11013_11058 = state_10991__$1;(statearr_11013_11058[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__11008_11053))
{var statearr_11014_11059 = state_10991__$1;(statearr_11014_11059[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__11008_11053))
{var statearr_11015_11060 = state_10991__$1;(statearr_11015_11060[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_11016_11061 = state_10991__$1;(statearr_11016_11061[1] = 22);
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
{if((state_val_10992 === 12))
{var inst_10951 = cmd.core.reset_input_with_motd.call(null);var state_10991__$1 = state_10991;var statearr_11017_11062 = state_10991__$1;(statearr_11017_11062[2] = inst_10951);
(statearr_11017_11062[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 2))
{var inst_10928 = (state_10991[13]);var inst_10928__$1 = (state_10991[2]);var inst_10929 = cljs.core.nth.call(null,inst_10928__$1,0,null);var inst_10930 = cljs.core.nth.call(null,inst_10928__$1,1,null);var inst_10931 = inst_10928__$1;var state_10991__$1 = (function (){var statearr_11018 = state_10991;(statearr_11018[13] = inst_10928__$1);
(statearr_11018[14] = inst_10930);
(statearr_11018[15] = inst_10929);
(statearr_11018[12] = inst_10931);
return statearr_11018;
})();var statearr_11019_11063 = state_10991__$1;(statearr_11019_11063[2] = null);
(statearr_11019_11063[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 23))
{var inst_10986 = (state_10991[2]);var inst_10931 = inst_10986;var state_10991__$1 = (function (){var statearr_11020 = state_10991;(statearr_11020[12] = inst_10931);
return statearr_11020;
})();var statearr_11021_11064 = state_10991__$1;(statearr_11021_11064[2] = null);
(statearr_11021_11064[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 19))
{var state_10991__$1 = state_10991;var statearr_11022_11065 = state_10991__$1;(statearr_11022_11065[2] = null);
(statearr_11022_11065[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 11))
{var inst_10949 = cmd.core.reset_input_with_motd.call(null);var state_10991__$1 = state_10991;var statearr_11023_11066 = state_10991__$1;(statearr_11023_11066[2] = inst_10949);
(statearr_11023_11066[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 9))
{var inst_10939 = cmd.core.load_initial_content.call(null);var state_10991__$1 = state_10991;var statearr_11024_11067 = state_10991__$1;(statearr_11024_11067[2] = inst_10939);
(statearr_11024_11067[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 5))
{var inst_10984 = (state_10991[2]);var state_10991__$1 = (function (){var statearr_11025 = state_10991;(statearr_11025[16] = inst_10984);
return statearr_11025;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10991__$1,23,app_bus);
} else
{if((state_val_10992 === 14))
{var inst_10956 = (state_10991[7]);var inst_10961 = inst_10956.call(null,"id");var inst_10962 = cmd.core.load_gist.call(null,inst_10961);var state_10991__$1 = state_10991;var statearr_11026_11068 = state_10991__$1;(statearr_11026_11068[2] = inst_10962);
(statearr_11026_11068[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 16))
{var inst_10965 = (state_10991[2]);var state_10991__$1 = state_10991;var statearr_11027_11069 = state_10991__$1;(statearr_11027_11069[2] = inst_10965);
(statearr_11027_11069[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 10))
{var inst_10935 = (state_10991[10]);var inst_10944 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var inst_10945 = cmd.core.set_input.call(null,inst_10935);var inst_10946 = cmd.core.set_title.call(null,inst_10944);var inst_10947 = cmd.core.set_location_hash_gist_id.call(null,inst_10935);var state_10991__$1 = (function (){var statearr_11028 = state_10991;(statearr_11028[17] = inst_10945);
(statearr_11028[18] = inst_10946);
return statearr_11028;
})();var statearr_11029_11070 = state_10991__$1;(statearr_11029_11070[2] = inst_10947);
(statearr_11029_11070[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 18))
{var inst_10967 = (state_10991[11]);var inst_10928 = (state_10991[13]);var inst_10934 = (state_10991[9]);var inst_10931 = (state_10991[12]);var inst_10935 = (state_10991[10]);var inst_10971 = cmd.ui.jq_toggle.call(null,inst_10967);var inst_10972 = (function (){var console = inst_10967;var vec__10933 = inst_10931;var payload = inst_10935;var msg = inst_10934;var vec__10926 = inst_10928;var G__10925 = inst_10931;return ((function (console,vec__10933,payload,msg,vec__10926,G__10925,inst_10967,inst_10928,inst_10934,inst_10931,inst_10935,inst_10971,state_val_10992,c__6728__auto__){
return (function (){return cmd.ui.jq_toggle.call(null,console);
});
;})(console,vec__10933,payload,msg,vec__10926,G__10925,inst_10967,inst_10928,inst_10934,inst_10931,inst_10935,inst_10971,state_val_10992,c__6728__auto__))
})();var inst_10973 = setTimeout(inst_10972,2000);var state_10991__$1 = (function (){var statearr_11030 = state_10991;(statearr_11030[19] = inst_10971);
return statearr_11030;
})();var statearr_11031_11071 = state_10991__$1;(statearr_11031_11071[2] = inst_10973);
(statearr_11031_11071[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 8))
{var inst_10936 = cmd.core.load_initial_content.call(null);var inst_10937 = cmd.core.load_gists.call(null);var state_10991__$1 = (function (){var statearr_11032 = state_10991;(statearr_11032[20] = inst_10936);
return statearr_11032;
})();var statearr_11033_11072 = state_10991__$1;(statearr_11033_11072[2] = inst_10937);
(statearr_11033_11072[1] = 7);
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
var state_machine__6714__auto____0 = (function (){var statearr_11037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11037[0] = state_machine__6714__auto__);
(statearr_11037[1] = 1);
return statearr_11037;
});
var state_machine__6714__auto____1 = (function (state_10991){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10991);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11038){if((e11038 instanceof Object))
{var ex__6717__auto__ = e11038;var statearr_11039_11073 = state_10991;(statearr_11039_11073[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11074 = state_10991;
state_10991 = G__11074;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10991){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11040 = f__6729__auto__.call(null);(statearr_11040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.core.get_prefs.call(null,"username");var auth_token = cmd.core.get_prefs.call(null,"auth-token");var last_opened_gist_id = cmd.core.get_prefs.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
var worker_11075 = (new Worker("resources/public/js/worker.js"));cmd.core.set_state.call(null,state,new cljs.core.Keyword(null,"worker","worker",4526786288),worker_11075);
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