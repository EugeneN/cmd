// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.plugins.markdown.read');
goog.require('cljs.core');
cmd.plugins.markdown.read.handle_pull = (function handle_pull(_){return cmd.plugins.markdown.read.load_gist.call(null,cmd.plugins.markdown.read.get_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.plugins.markdown.read.handle_push = (function handle_push(_){var ace = cmd.plugins.markdown.read.get_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var mode = cmd.plugins.markdown.read.get_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var G__8731 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__8731))
{var file_name = cmd.plugins.markdown.read.$.call(null,"new-gist-name").value;var new_content = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"public","public",4331447771),false,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);if((cljs.core.count.call(null,file_name) < 4))
{return cmd.plugins.markdown.read.say.call(null,"Bad new gist file name");
} else
{return cmd.plugins.markdown.read.create_gist.call(null,new_content);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var gist_id = cmd.plugins.markdown.read.get_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043));var file_name = cmd.plugins.markdown.read.get_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var new_content = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);return cmd.plugins.markdown.read.save_gist.call(null,gist_id,new_content);
} else
{return null;
}
}
});
cmd.plugins.markdown.read.handle_select = (function handle_select(e){var selected_id = e.target.value;return cmd.plugins.markdown.read.load_gist.call(null,selected_id);
});
cmd.plugins.markdown.read.handle_new_gist = (function handle_new_gist(ev){var mode = cmd.plugins.markdown.read.get_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var new_gist_name_el = cmd.plugins.markdown.read.$.call(null,"new-gist-name");var G__8733 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__8733))
{return (function (){cmd.plugins.markdown.read.toggle_slide_left.call(null,new_gist_name_el);
new_gist_name_el.value = "";
cmd.plugins.markdown.read.set_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);
return cmd.plugins.markdown.read.reset_input_with_motd.call(null);
})().call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cmd.plugins.markdown.read.toggle_slide_left.call(null,cmd.plugins.markdown.read.$.call(null,"new-gist-name"));
cmd.plugins.markdown.read.$.call(null,"new-gist-name").focus();
cmd.plugins.markdown.read.set_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810));
cmd.plugins.markdown.read.set_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),null);
cmd.plugins.markdown.read.set_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),null);
return cmd.plugins.markdown.read.set_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850),null);
} else
{return null;
}
}
});
cmd.plugins.markdown.read.setup_editor_listeners = (function setup_editor_listeners(){var editor = cmd.plugins.markdown.read.get_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var session = editor.getSession();var preview_container = cmd.plugins.markdown.read.$.call(null,"preview-container");var editor_container = cmd.plugins.markdown.read.$.call(null,"input");var preview = cmd.plugins.markdown.read.$.call(null,"preview");Rx.Observable.create(((function (editor,session,preview_container,editor_container,preview){
return (function (observer){return session.on("change",((function (editor,session,preview_container,editor_container,preview){
return (function (){return observer.onNext();
});})(editor,session,preview_container,editor_container,preview))
);
});})(editor,session,preview_container,editor_container,preview))
).throttle(300).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (){return cmd.plugins.markdown.read.set_preview.call(null);
});})(editor,session,preview_container,editor_container,preview))
);
cmd.plugins.markdown.read.calc_offset_top_preview = ((function (editor,session,preview_container,editor_container,preview){
return (function calc_offset_top_preview(ot1){var ch1 = (session.getScreenLength() * editor.renderer.lineHeight);var ch2 = preview.clientHeight;return ((ot1 * ch2) / ch1);
});})(editor,session,preview_container,editor_container,preview))
;
cmd.plugins.markdown.read.calc_offset_top_input = ((function (editor,session,preview_container,editor_container,preview){
return (function calc_offset_top_input(ot2){var ch1 = (session.getScreenLength() * editor.renderer.lineHeight);var ch2 = preview.clientHeight;return ((ot2 * ch1) / ch2);
});})(editor,session,preview_container,editor_container,preview))
;
Rx.Observable.create(((function (editor,session,preview_container,editor_container,preview){
return (function (observer){return session.on("changeScrollTop",((function (editor,session,preview_container,editor_container,preview){
return (function (p1__8734_SHARP_){return observer.onNext(p1__8734_SHARP_);
});})(editor,session,preview_container,editor_container,preview))
);
});})(editor,session,preview_container,editor_container,preview))
).throttle(15).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (p1__8735_SHARP_){if(cljs.core.truth_(cmd.plugins.markdown.read.visible_QMARK_.call(null,preview_container)))
{return preview_container.scrollTop = cmd.plugins.markdown.read.calc_offset_top_preview.call(null,p1__8735_SHARP_);
} else
{return null;
}
});})(editor,session,preview_container,editor_container,preview))
);
return Rx.Observable.fromEvent(preview_container,"scroll").throttle(15).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (){if(cljs.core.truth_(cmd.plugins.markdown.read.visible_QMARK_.call(null,editor_container)))
{return session.setScrollTop(cmd.plugins.markdown.read.calc_offset_top_input.call(null,preview_container.scrollTop));
} else
{return null;
}
});})(editor,session,preview_container,editor_container,preview))
);
});
cmd.plugins.markdown.read.setup_ace = (function setup_ace(){var editor = ace.edit("input");var session = editor.getSession();cmd.plugins.markdown.read.set_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"ace","ace",1014000629),editor);
session.setMode("ace/mode/markdown");
return session.setUseWrapMode(true);
});
cmd.plugins.markdown.read.subscribe_appbus = (function subscribe_appbus(app_bus){return cmd.plugins.markdown.read.go.call(null,(function (){var G__8744 = cmd.plugins.markdown.read._LT__BANG_.call(null,app_bus);var vec__8745 = G__8744;var msg = cljs.core.nth.call(null,vec__8745,0,null);var payload = cljs.core.nth.call(null,vec__8745,1,null);var G__8744__$1 = G__8744;while(true){
var vec__8746 = G__8744__$1;var msg__$1 = cljs.core.nth.call(null,vec__8746,0,null);var payload__$1 = cljs.core.nth.call(null,vec__8746,1,null);var G__8747_8750 = msg__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),G__8747_8750))
{var console_8751 = cmd.plugins.markdown.read.$.call(null,"console");if(cljs.core.not.call(null,cmd.plugins.markdown.read.visible_QMARK_.call(null,console_8751)))
{cmd.plugins.markdown.read.jq_toggle.call(null,console_8751);
setTimeout(((function (G__8744__$1,console_8751,G__8747_8750,vec__8746,msg__$1,payload__$1,G__8744,vec__8745,msg,payload){
return (function (){return cmd.plugins.markdown.read.jq_toggle.call(null,console_8751);
});})(G__8744__$1,console_8751,G__8747_8750,vec__8746,msg__$1,payload__$1,G__8744,vec__8745,msg,payload))
,2000);
} else
{}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),G__8747_8750))
{var vec__8748_8752 = cmd.plugins.markdown.read.find_gist.call(null,cmd.plugins.markdown.read.state,cmd.plugins.markdown.read.get_gist_id_from_location_hash.call(null));var hash_gist_8753 = cljs.core.nth.call(null,vec__8748_8752,0,null);var __8754 = cljs.core.nthnext.call(null,vec__8748_8752,1);if(!((hash_gist_8753 == null)))
{cmd.plugins.markdown.read.load_gist.call(null,hash_gist_8753.call(null,"id"));
} else
{}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),G__8747_8750))
{cmd.plugins.markdown.read.reset_input_with_motd.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__8747_8750))
{cmd.plugins.markdown.read.reset_input_with_motd.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__8747_8750))
{var title_8755 = cmd.plugins.markdown.read.get_state.call(null,cmd.plugins.markdown.read.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var gist_id_8756 = payload__$1;cmd.plugins.markdown.read.set_input.call(null,payload__$1);
cmd.plugins.markdown.read.set_title.call(null,title_8755);
cmd.plugins.markdown.read.set_location_hash_gist_id.call(null,gist_id_8756);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__8747_8750))
{var G__8749_8757 = payload__$1;if(cljs.core._EQ_.call(null,false,G__8749_8757))
{cmd.plugins.markdown.read.load_initial_content.call(null);
} else
{if(cljs.core._EQ_.call(null,true,G__8749_8757))
{cmd.plugins.markdown.read.load_initial_content.call(null);
cmd.plugins.markdown.read.load_gists.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(payload__$1)].join('')));
} else
{}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cmd.plugins.markdown.read.say.call(null,[cljs.core.str("Unknown message from AppBus: "),cljs.core.str(msg__$1),cljs.core.str(" : "),cljs.core.str(payload__$1)].join(''));
} else
{}
}
}
}
}
}
}
{
var G__8758 = cmd.plugins.markdown.read._LT__BANG_.call(null,app_bus);
G__8744__$1 = G__8758;
continue;
}
break;
}
})());
});

//# sourceMappingURL=read.js.map