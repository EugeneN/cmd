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
cljs.core._STAR_print_fn_STAR_ = (function (p1__10721_SHARP_){return console.log(p1__10721_SHARP_);
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
var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10741){var state_val_10742 = (state_10741[1]);if((state_val_10742 === 2))
{var inst_10739 = (state_10741[2]);var state_10741__$1 = state_10741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10741__$1,inst_10739);
} else
{if((state_val_10742 === 1))
{var inst_10736 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_10737 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10736,null));var state_10741__$1 = state_10741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10741__$1,2,cmd.core.AppBus,inst_10737);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10746 = [null,null,null,null,null,null,null];(statearr_10746[0] = state_machine__5594__auto__);
(statearr_10746[1] = 1);
return statearr_10746;
});
var state_machine__5594__auto____1 = (function (state_10741){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10741);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10747){if((e10747 instanceof Object))
{var ex__5597__auto__ = e10747;var statearr_10748_10750 = state_10741;(statearr_10748_10750[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10751 = state_10741;
state_10741 = G__10751;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10741){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10749 = f__5609__auto__.call(null);(statearr_10749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var G__10753 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10753))
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
cmd.ui.handle_new_gist = (function handle_new_gist(ev){var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var new_gist_name_el = cmd.ui.$.call(null,"new-gist-name");var G__10755 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10755))
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
cmd.ui.has_parent = (function has_parent(el,parent){var G__10757 = el;if(cljs.core._EQ_.call(null,null,G__10757))
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
return (function (p1__10758_SHARP_){return cljs.core.not.call(null,cmd.ui.has_parent.call(null,p1__10758_SHARP_.target,cmd.ui.$.call(null,"gist-list")));
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
return (function (p1__10759_SHARP_){return observer.onNext(p1__10759_SHARP_);
});})(editor,session,preview_container,editor_container,preview))
);
});})(editor,session,preview_container,editor_container,preview))
).throttle(15).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (p1__10760_SHARP_){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,preview_container)))
{return preview_container.scrollTop = cmd.ui.calc_offset_top_preview.call(null,p1__10760_SHARP_);
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
cmd.ui.gist_select = (function gist_select(state,owner){if(typeof cmd.ui.t10765 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10765 = (function (owner,state,gist_select,meta10766){
this.owner = owner;
this.state = state;
this.gist_select = gist_select;
this.meta10766 = meta10766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10765.cljs$lang$type = true;
cmd.ui.t10765.cljs$lang$ctorStr = "cmd.ui/t10765";
cmd.ui.t10765.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t10765");
});
cmd.ui.t10765.prototype.om$core$IRender$ = true;
cmd.ui.t10765.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
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
,gists);var latest_opened_ids = cljs.core.vec.call(null,self__.state.call(null,new cljs.core.Keyword(null,"latest-opened","latest-opened",1537368289)));var latest_opened_unordered = cljs.core.filter.call(null,((function (gists,latest_created,latest_edited,latest_opened_ids,___$1){
return (function (gist){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([gist.call(null,"id")], true),latest_opened_ids);
});})(gists,latest_created,latest_edited,latest_opened_ids,___$1))
,gists);var latest_opened = cljs.core.sort_by.call(null,((function (gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,___$1){
return (function (p1__10761_SHARP_){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,___$1){
return (function (i,e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,i], null);
});})(gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,___$1))
,latest_opened_ids)).call(null,p1__10761_SHARP_.call(null,"id"));
});})(gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,___$1))
,latest_opened_unordered);var pinned = cljs.core.sort.call(null,((function (gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,latest_opened,___$1){
return (function (a,b){return (cmd.ui.gist_list_str.call(null,a) > cmd.ui.gist_list_str.call(null,b));
});})(gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,latest_opened,___$1))
,cmd.core.get_pinned_gists.call(null,self__.state));return React.DOM.div({"className": "gist-select-container"},React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest created"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,latest_created))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest edited"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,latest_edited))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest opened"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,latest_opened))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Pinned"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,pinned))));
});
cmd.ui.t10765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10767){var self__ = this;
var _10767__$1 = this;return self__.meta10766;
});
cmd.ui.t10765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10767,meta10766__$1){var self__ = this;
var _10767__$1 = this;return (new cmd.ui.t10765(self__.owner,self__.state,self__.gist_select,meta10766__$1));
});
cmd.ui.__GT_t10765 = (function __GT_t10765(owner__$1,state__$1,gist_select__$1,meta10766){return (new cmd.ui.t10765(owner__$1,state__$1,gist_select__$1,meta10766));
});
}
return (new cmd.ui.t10765(owner,state,gist_select,null));
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t10772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10772 = (function (owner,state,toolbar,meta10773){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta10773 = meta10773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10772.cljs$lang$type = true;
cmd.ui.t10772.cljs$lang$ctorStr = "cmd.ui/t10772";
cmd.ui.t10772.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t10772");
});
cmd.ui.t10772.prototype.om$core$IRender$ = true;
cmd.ui.t10772.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cmd.core.authenticated_om_QMARK_.call(null,self__.state)))
{return React.DOM.div(null,React.DOM.img({"style": (((new cljs.core.Keyword(null,"active-requests","active-requests",3616398877).cljs$core$IFn$_invoke$arity$1(self__.state) > 0))?{"display": "block"}:{"display": "none"}), "src": "resources/public/img/loading1.gif", "id": "loading-indicator"}),React.DOM.button({"className": "ios7", "onClick": cmd.ui.handle_new_gist, "id": "new-gist"},((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))?":C@NCEL: ":":NEW_G!ST: ")),om.dom.input.call(null,{"id": "new-gist-name", "style": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))?{"placeholder": "Enter a new gist name", "display": "inline-block"}:{"placeholder": "Enter a new gist name", "value": "", "display": "none"}), "title": "Filename", "type": "text"}),om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (){var panel = cmd.ui.$.call(null,"gist-list");if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,panel)))
{return cmd.ui.slide_up.call(null,panel);
} else
{return cmd.ui.slide_down.call(null,panel);
}
});})(___$1))
, "onChange": ((function (___$1){
return (function (p1__10768_SHARP_){return om.core.transact_BANG_.call(null,self__.state,new cljs.core.Keyword(null,"query","query",1121848378),((function (___$1){
return (function (___$2){return p1__10768_SHARP_.target.value;
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
cmd.ui.t10772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10774){var self__ = this;
var _10774__$1 = this;return self__.meta10773;
});
cmd.ui.t10772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10774,meta10773__$1){var self__ = this;
var _10774__$1 = this;return (new cmd.ui.t10772(self__.owner,self__.state,self__.toolbar,meta10773__$1));
});
cmd.ui.__GT_t10772 = (function __GT_t10772(owner__$1,state__$1,toolbar__$1,meta10773){return (new cmd.ui.t10772(owner__$1,state__$1,toolbar__$1,meta10773));
});
}
return (new cmd.ui.t10772(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.console = (function console__$1(state,owner){if(typeof cmd.ui.t10778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10778 = (function (owner,state,console,meta10779){
this.owner = owner;
this.state = state;
this.console = console;
this.meta10779 = meta10779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10778.cljs$lang$type = true;
cmd.ui.t10778.cljs$lang$ctorStr = "cmd.ui/t10778";
cmd.ui.t10778.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t10778");
});
cmd.ui.t10778.prototype.om$core$IRender$ = true;
cmd.ui.t10778.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"id": "msgs-list"},cljs.core.apply.call(null,om.dom.ul,{"className": "hello"},cljs.core.map_indexed.call(null,((function (___$1){
return (function (idx,msg){if(cljs.core._EQ_.call(null,idx,0))
{return React.DOM.li({"className": "current-message"},[cljs.core.str("> "),cljs.core.str(msg)].join(''));
} else
{return React.DOM.li(null,msg);
}
});})(___$1))
,cljs.core.reverse.call(null,self__.state.call(null,new cljs.core.Keyword(null,"messages","messages",551810238)))))));
});
cmd.ui.t10778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10780){var self__ = this;
var _10780__$1 = this;return self__.meta10779;
});
cmd.ui.t10778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10780,meta10779__$1){var self__ = this;
var _10780__$1 = this;return (new cmd.ui.t10778(self__.owner,self__.state,self__.console,meta10779__$1));
});
cmd.ui.__GT_t10778 = (function __GT_t10778(owner__$1,state__$1,console__$1,meta10779){return (new cmd.ui.t10778(owner__$1,state__$1,console__$1,meta10779));
});
}
return (new cmd.ui.t10778(owner,state,console__$1,null));
});
cmd.ui.render_console = (function render_console(state){return om.core.root.call(null,cmd.ui.console,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),cmd.ui.$.call(null,"console")], null));
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10965){var state_val_10966 = (state_10965[1]);if((state_val_10966 === 7))
{var inst_10916 = (state_10965[2]);var state_10965__$1 = state_10965;var statearr_10967_11015 = state_10965__$1;(statearr_10967_11015[2] = inst_10916);
(statearr_10967_11015[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 20))
{var inst_10950 = (state_10965[2]);var state_10965__$1 = state_10965;var statearr_10968_11016 = state_10965__$1;(statearr_10968_11016[2] = inst_10950);
(statearr_10968_11016[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 1))
{var state_10965__$1 = state_10965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10965__$1,2,app_bus);
} else
{if((state_val_10966 === 4))
{var inst_10963 = (state_10965[2]);var state_10965__$1 = state_10965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10965__$1,inst_10963);
} else
{if((state_val_10966 === 15))
{var state_10965__$1 = state_10965;var statearr_10969_11017 = state_10965__$1;(statearr_10969_11017[2] = null);
(statearr_10969_11017[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 21))
{var inst_10952 = cmd.core.load_gists.call(null);var state_10965__$1 = state_10965;var statearr_10970_11018 = state_10965__$1;(statearr_10970_11018[2] = inst_10952);
(statearr_10970_11018[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 13))
{var inst_10930 = (state_10965[7]);var inst_10928 = cmd.core.get_gist_id_from_location_hash.call(null);var inst_10929 = cmd.core.find_gist.call(null,cmd.core.state,inst_10928);var inst_10930__$1 = cljs.core.nth.call(null,inst_10929,0,null);var inst_10931 = cljs.core.nthnext.call(null,inst_10929,1);var inst_10932 = (inst_10930__$1 == null);var inst_10933 = cljs.core.not.call(null,inst_10932);var state_10965__$1 = (function (){var statearr_10971 = state_10965;(statearr_10971[7] = inst_10930__$1);
(statearr_10971[8] = inst_10931);
return statearr_10971;
})();if(inst_10933)
{var statearr_10972_11019 = state_10965__$1;(statearr_10972_11019[1] = 14);
} else
{var statearr_10973_11020 = state_10965__$1;(statearr_10973_11020[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 22))
{var inst_10909 = (state_10965[9]);var inst_10908 = (state_10965[10]);var inst_10954 = [cljs.core.str("Unknown message from AppBus: "),cljs.core.str(inst_10908),cljs.core.str(" : "),cljs.core.str(inst_10909)].join('');var inst_10955 = cmd.core.say.call(null,inst_10954);var state_10965__$1 = state_10965;var statearr_10974_11021 = state_10965__$1;(statearr_10974_11021[2] = inst_10955);
(statearr_10974_11021[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 6))
{var inst_10909 = (state_10965[9]);var state_10965__$1 = state_10965;var G__10975_11022 = inst_10909;if(cljs.core._EQ_.call(null,false,G__10975_11022))
{var statearr_10976_11023 = state_10965__$1;(statearr_10976_11023[1] = 9);
} else
{if(cljs.core._EQ_.call(null,true,G__10975_11022))
{var statearr_10977_11024 = state_10965__$1;(statearr_10977_11024[1] = 8);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10909)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 17))
{var inst_10941 = (state_10965[11]);var inst_10941__$1 = cmd.ui.$.call(null,"console");var inst_10942 = cmd.ui.visible_QMARK_.call(null,inst_10941__$1);var inst_10943 = cljs.core.not.call(null,inst_10942);var state_10965__$1 = (function (){var statearr_10978 = state_10965;(statearr_10978[11] = inst_10941__$1);
return statearr_10978;
})();if(inst_10943)
{var statearr_10979_11025 = state_10965__$1;(statearr_10979_11025[1] = 18);
} else
{var statearr_10980_11026 = state_10965__$1;(statearr_10980_11026[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 3))
{var inst_10905 = (state_10965[12]);var inst_10908 = (state_10965[10]);var inst_10908__$1 = cljs.core.nth.call(null,inst_10905,0,null);var inst_10909 = cljs.core.nth.call(null,inst_10905,1,null);var state_10965__$1 = (function (){var statearr_10981 = state_10965;(statearr_10981[9] = inst_10909);
(statearr_10981[10] = inst_10908__$1);
return statearr_10981;
})();var G__10982_11027 = inst_10908__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload-gists","reload-gists",4719976526),G__10982_11027))
{var statearr_10983_11028 = state_10965__$1;(statearr_10983_11028[1] = 21);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),G__10982_11027))
{var statearr_10984_11029 = state_10965__$1;(statearr_10984_11029[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),G__10982_11027))
{var statearr_10985_11030 = state_10965__$1;(statearr_10985_11030[1] = 13);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),G__10982_11027))
{var statearr_10986_11031 = state_10965__$1;(statearr_10986_11031[1] = 12);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__10982_11027))
{var statearr_10987_11032 = state_10965__$1;(statearr_10987_11032[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__10982_11027))
{var statearr_10988_11033 = state_10965__$1;(statearr_10988_11033[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__10982_11027))
{var statearr_10989_11034 = state_10965__$1;(statearr_10989_11034[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_10990_11035 = state_10965__$1;(statearr_10990_11035[1] = 22);
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
{if((state_val_10966 === 12))
{var inst_10925 = cmd.core.reset_input_with_motd.call(null);var state_10965__$1 = state_10965;var statearr_10991_11036 = state_10965__$1;(statearr_10991_11036[2] = inst_10925);
(statearr_10991_11036[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 2))
{var inst_10902 = (state_10965[13]);var inst_10902__$1 = (state_10965[2]);var inst_10903 = cljs.core.nth.call(null,inst_10902__$1,0,null);var inst_10904 = cljs.core.nth.call(null,inst_10902__$1,1,null);var inst_10905 = inst_10902__$1;var state_10965__$1 = (function (){var statearr_10992 = state_10965;(statearr_10992[14] = inst_10903);
(statearr_10992[12] = inst_10905);
(statearr_10992[15] = inst_10904);
(statearr_10992[13] = inst_10902__$1);
return statearr_10992;
})();var statearr_10993_11037 = state_10965__$1;(statearr_10993_11037[2] = null);
(statearr_10993_11037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 23))
{var inst_10960 = (state_10965[2]);var inst_10905 = inst_10960;var state_10965__$1 = (function (){var statearr_10994 = state_10965;(statearr_10994[12] = inst_10905);
return statearr_10994;
})();var statearr_10995_11038 = state_10965__$1;(statearr_10995_11038[2] = null);
(statearr_10995_11038[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 19))
{var state_10965__$1 = state_10965;var statearr_10996_11039 = state_10965__$1;(statearr_10996_11039[2] = null);
(statearr_10996_11039[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 11))
{var inst_10923 = cmd.core.reset_input_with_motd.call(null);var state_10965__$1 = state_10965;var statearr_10997_11040 = state_10965__$1;(statearr_10997_11040[2] = inst_10923);
(statearr_10997_11040[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 9))
{var inst_10913 = cmd.core.load_initial_content.call(null);var state_10965__$1 = state_10965;var statearr_10998_11041 = state_10965__$1;(statearr_10998_11041[2] = inst_10913);
(statearr_10998_11041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 5))
{var inst_10958 = (state_10965[2]);var state_10965__$1 = (function (){var statearr_10999 = state_10965;(statearr_10999[16] = inst_10958);
return statearr_10999;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10965__$1,23,app_bus);
} else
{if((state_val_10966 === 14))
{var inst_10930 = (state_10965[7]);var inst_10935 = inst_10930.call(null,"id");var inst_10936 = cmd.core.load_gist.call(null,inst_10935);var state_10965__$1 = state_10965;var statearr_11000_11042 = state_10965__$1;(statearr_11000_11042[2] = inst_10936);
(statearr_11000_11042[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 16))
{var inst_10939 = (state_10965[2]);var state_10965__$1 = state_10965;var statearr_11001_11043 = state_10965__$1;(statearr_11001_11043[2] = inst_10939);
(statearr_11001_11043[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 10))
{var inst_10909 = (state_10965[9]);var inst_10918 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var inst_10919 = cmd.core.set_input.call(null,inst_10909);var inst_10920 = cmd.core.set_title.call(null,inst_10918);var inst_10921 = cmd.core.set_location_hash_gist_id.call(null,inst_10909);var state_10965__$1 = (function (){var statearr_11002 = state_10965;(statearr_11002[17] = inst_10920);
(statearr_11002[18] = inst_10919);
return statearr_11002;
})();var statearr_11003_11044 = state_10965__$1;(statearr_11003_11044[2] = inst_10921);
(statearr_11003_11044[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 18))
{var inst_10905 = (state_10965[12]);var inst_10909 = (state_10965[9]);var inst_10908 = (state_10965[10]);var inst_10902 = (state_10965[13]);var inst_10941 = (state_10965[11]);var inst_10945 = cmd.ui.jq_toggle.call(null,inst_10941);var inst_10946 = (function (){var console = inst_10941;var vec__10907 = inst_10905;var payload = inst_10909;var msg = inst_10908;var vec__10900 = inst_10902;var G__10899 = inst_10905;return ((function (console,vec__10907,payload,msg,vec__10900,G__10899,inst_10905,inst_10909,inst_10908,inst_10902,inst_10941,inst_10945,state_val_10966,c__5608__auto__){
return (function (){return cmd.ui.jq_toggle.call(null,console);
});
;})(console,vec__10907,payload,msg,vec__10900,G__10899,inst_10905,inst_10909,inst_10908,inst_10902,inst_10941,inst_10945,state_val_10966,c__5608__auto__))
})();var inst_10947 = setTimeout(inst_10946,2000);var state_10965__$1 = (function (){var statearr_11004 = state_10965;(statearr_11004[19] = inst_10945);
return statearr_11004;
})();var statearr_11005_11045 = state_10965__$1;(statearr_11005_11045[2] = inst_10947);
(statearr_11005_11045[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 8))
{var inst_10910 = cmd.core.load_initial_content.call(null);var inst_10911 = cmd.core.load_gists.call(null);var state_10965__$1 = (function (){var statearr_11006 = state_10965;(statearr_11006[20] = inst_10910);
return statearr_11006;
})();var statearr_11007_11046 = state_10965__$1;(statearr_11007_11046[2] = inst_10911);
(statearr_11007_11046[1] = 7);
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
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_11011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11011[0] = state_machine__5594__auto__);
(statearr_11011[1] = 1);
return statearr_11011;
});
var state_machine__5594__auto____1 = (function (state_10965){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10965);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e11012){if((e11012 instanceof Object))
{var ex__5597__auto__ = e11012;var statearr_11013_11047 = state_10965;(statearr_11013_11047[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11048 = state_10965;
state_10965 = G__11048;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10965){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_11014 = f__5609__auto__.call(null);(statearr_11014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_11014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.core.get_prefs.call(null,"username");var auth_token = cmd.core.get_prefs.call(null,"auth-token");var last_opened_gist_id = cmd.core.get_prefs.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
var worker_11049 = (new Worker("resources/public/js/worker.js"));cmd.core.set_state.call(null,state,new cljs.core.Keyword(null,"worker","worker",4526786288),worker_11049);
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