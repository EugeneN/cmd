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
cljs.core._STAR_print_fn_STAR_ = (function (p1__10757_SHARP_){return console.log(p1__10757_SHARP_);
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
return (function (state_10777){var state_val_10778 = (state_10777[1]);if((state_val_10778 === 2))
{var inst_10775 = (state_10777[2]);var state_10777__$1 = state_10777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10777__$1,inst_10775);
} else
{if((state_val_10778 === 1))
{var inst_10772 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_10773 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10772,null));var state_10777__$1 = state_10777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10777__$1,2,cmd.core.AppBus,inst_10773);
} else
{return null;
}
}
});})(c__6728__auto__))
;return ((function (switch__6713__auto__,c__6728__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){var statearr_10782 = [null,null,null,null,null,null,null];(statearr_10782[0] = state_machine__6714__auto__);
(statearr_10782[1] = 1);
return statearr_10782;
});
var state_machine__6714__auto____1 = (function (state_10777){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10777);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e10783){if((e10783 instanceof Object))
{var ex__6717__auto__ = e10783;var statearr_10784_10786 = state_10777;(statearr_10784_10786[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10787 = state_10777;
state_10777 = G__10787;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10777){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_10785 = f__6729__auto__.call(null);(statearr_10785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_10785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var G__10789 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10789))
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
cmd.ui.handle_new_gist = (function handle_new_gist(ev){var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var new_gist_name_el = cmd.ui.$.call(null,"new-gist-name");var G__10791 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10791))
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
cmd.ui.handle_auth = (function handle_auth(username,password){return cmd.core.authenticate.call(null,username,password);
});
cmd.ui.toggle_gist_list_panel = (function toggle_gist_list_panel(){var panel = cmd.ui.$.call(null,"gist-list");if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,panel)))
{return cmd.ui.slide_up.call(null,panel);
} else
{return cmd.ui.slide_down.call(null,panel);
}
});
cmd.ui.has_parent = (function has_parent(el,parent){var G__10793 = el;if(cljs.core._EQ_.call(null,null,G__10793))
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
cmd.ui.setup_keyboard_listeners = (function setup_keyboard_listeners(){var key_stream = Rx.Observable.fromEvent(document,"keyup");var ctrl_stream = key_stream.filter(((function (key_stream){
return (function (p1__10794_SHARP_){return p1__10794_SHARP_.altKey === true;
});})(key_stream))
);var keys = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"o","o",1013904353),new cljs.core.Keyword(null,"esc","esc",1014004967),new cljs.core.Keyword(null,"n","n",1013904352),new cljs.core.Keyword(null,"e","e",1013904343),new cljs.core.Keyword(null,"s","s",1013904357),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"k","k",1013904349),new cljs.core.Keyword(null,"enter","enter",1110571594),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"t","t",1013904358),new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"left","left",1017222009)],[40,111,27,110,101,115,38,107,13,39,116,112,37]);var toolbar_toggler = cmd.ui.$.call(null,"toolbar-toggler");var editor_toggler = cmd.ui.$.call(null,"editor-toggler");var console_toggler = cmd.ui.$.call(null,"console-toggler");var info_toggler = cmd.ui.$.call(null,"info-toggler");var zen_toggler = cmd.ui.$.call(null,"zen-toggler");var toolbar = cmd.ui.$.call(null,"toolbar");var console = cmd.ui.$.call(null,"console");var preview = cmd.ui.$.call(null,"preview-container");var editor = cmd.ui.$.call(null,"input");var preview_toggler = cmd.ui.$.call(null,"preview-toggler");ctrl_stream.filter(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (p1__10795_SHARP_){return cljs.core._EQ_.call(null,p1__10795_SHARP_.keyCode,keys.call(null,new cljs.core.Keyword(null,"left","left",1017222009)));
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.toggle_slide_left.call(null,editor);
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
);
ctrl_stream.filter(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (p1__10796_SHARP_){return cljs.core._EQ_.call(null,p1__10796_SHARP_.keyCode,keys.call(null,new cljs.core.Keyword(null,"right","right",1122416014)));
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.toggle_slide_right.call(null,preview);
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
);
ctrl_stream.filter(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (p1__10797_SHARP_){return cljs.core._EQ_.call(null,p1__10797_SHARP_.keyCode,keys.call(null,new cljs.core.Keyword(null,"up","up",1013907981)));
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return ((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429),cljs.core.not.call(null,cmd.ui.visible_QMARK_.call(null,toolbar)));
});
;})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
);
ctrl_stream.filter(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (p1__10798_SHARP_){return cljs.core._EQ_.call(null,p1__10798_SHARP_.keyCode,keys.call(null,new cljs.core.Keyword(null,"down","down",1016993812)));
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.jq_toggle.call(null,console);
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
);
ctrl_stream.filter(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (p1__10799_SHARP_){return cljs.core._EQ_.call(null,p1__10799_SHARP_.keyCode,keys.call(null,new cljs.core.Keyword(null,"s","s",1013904357)));
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.handle_push.call(null,null);
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
);
ctrl_stream.filter(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (p1__10800_SHARP_){return cljs.core._EQ_.call(null,p1__10800_SHARP_.keyCode,keys.call(null,new cljs.core.Keyword(null,"o","o",1013904353)));
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.toggle_gist_list_panel.call(null);
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
);
ctrl_stream.filter(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (p1__10801_SHARP_){return cljs.core._EQ_.call(null,p1__10801_SHARP_.keyCode,keys.call(null,new cljs.core.Keyword(null,"esc","esc",1014004967)));
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.toggle_gist_list_panel.call(null);
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
);
return ctrl_stream.filter(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (p1__10802_SHARP_){return cljs.core._EQ_.call(null,p1__10802_SHARP_.keyCode,keys.call(null,new cljs.core.Keyword(null,"n","n",1013904352)));
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
).subscribe(((function (key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler){
return (function (){return cmd.ui.handle_new_gist.call(null,null);
});})(key_stream,ctrl_stream,keys,toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,toolbar,console,preview,editor,preview_toggler))
);
});
cmd.ui.setup_toolbar_listeners = (function setup_toolbar_listeners(){var toolbar_toggler = cmd.ui.$.call(null,"toolbar-toggler");var editor_toggler = cmd.ui.$.call(null,"editor-toggler");var console_toggler = cmd.ui.$.call(null,"console-toggler");var info_toggler = cmd.ui.$.call(null,"info-toggler");var zen_toggler = cmd.ui.$.call(null,"zen-toggler");var comments_toggler = cmd.ui.$.call(null,"comments-toggler");var toolbar = cmd.ui.$.call(null,"toolbar");var console = cmd.ui.$.call(null,"console");var preview = cmd.ui.$.call(null,"preview-container");var editor = cmd.ui.$.call(null,"input");var comments = cmd.ui.$.call(null,"comments");var preview_toggler = cmd.ui.$.call(null,"preview-toggler");Rx.Observable.fromEvent(zen_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,editor)))
{cmd.ui.hide.call(null,editor);
cmd.ui.hide.call(null,console);
return cmd.ui.hide.call(null,toolbar);
} else
{cmd.ui.show.call(null,editor);
cmd.ui.show.call(null,console);
return cmd.ui.show.call(null,toolbar);
}
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
Rx.Observable.fromEvent(toolbar_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){return cmd.ui.jq_toggle.call(null,toolbar,((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429),cljs.core.not.call(null,cmd.ui.visible_QMARK_.call(null,toolbar)));
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
Rx.Observable.fromEvent(document,"click").filter(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (p1__10803_SHARP_){return cljs.core.not.call(null,cmd.ui.has_parent.call(null,p1__10803_SHARP_.target,cmd.ui.$.call(null,"gist-list")));
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){return cmd.ui.slide_up.call(null,cmd.ui.$.call(null,"gist-list"));
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
Rx.Observable.fromEvent(preview_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){return cmd.ui.toggle_slide_right.call(null,preview);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
Rx.Observable.fromEvent(editor_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){return cmd.ui.toggle_slide_left.call(null,editor);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
Rx.Observable.fromEvent(info_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){return cmd.core.say.call(null,[cljs.core.str("No info available currently")].join(''));
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
Rx.Observable.fromEvent(comments_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,editor)))
{cmd.ui.toggle_slide_left.call(null,editor);
} else
{}
return cmd.ui.jq_toggle.call(null,comments);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
Rx.Observable.fromEvent(document,"mousemove").throttle(50).filter(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (ev){var and__3469__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3469__auto__))
{return (ev.clientY < 28);
} else
{return and__3469__auto__;
}
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){return cmd.ui.slide_down.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
Rx.Observable.fromEvent(document,"mousemove").throttle(50).filter(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (ev){var and__3469__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3469__auto__))
{return (ev.clientY > 28);
} else
{return and__3469__auto__;
}
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){return cmd.ui.slide_up.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
);
return Rx.Observable.fromEvent(console_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler){
return (function (){return cmd.ui.jq_toggle.call(null,console);
});})(toolbar_toggler,editor_toggler,console_toggler,info_toggler,zen_toggler,comments_toggler,toolbar,console,preview,editor,comments,preview_toggler))
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
return (function (p1__10804_SHARP_){return observer.onNext(p1__10804_SHARP_);
});})(editor,session,preview_container,editor_container,preview))
);
});})(editor,session,preview_container,editor_container,preview))
).throttle(15).subscribe(((function (editor,session,preview_container,editor_container,preview){
return (function (p1__10805_SHARP_){if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,preview_container)))
{return preview_container.scrollTop = cmd.ui.calc_offset_top_preview.call(null,p1__10805_SHARP_);
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
cmd.ui.gist_select = (function gist_select(state,owner){if(typeof cmd.ui.t10810 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10810 = (function (owner,state,gist_select,meta10811){
this.owner = owner;
this.state = state;
this.gist_select = gist_select;
this.meta10811 = meta10811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10810.cljs$lang$type = true;
cmd.ui.t10810.cljs$lang$ctorStr = "cmd.ui/t10810";
cmd.ui.t10810.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t10810");
});
cmd.ui.t10810.prototype.om$core$IRender$ = true;
cmd.ui.t10810.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
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
return (function (p1__10806_SHARP_){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,___$1){
return (function (i,e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,i], null);
});})(gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,___$1))
,latest_opened_ids)).call(null,p1__10806_SHARP_.call(null,"id"));
});})(gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,___$1))
,latest_opened_unordered);var pinned = cljs.core.sort.call(null,((function (gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,latest_opened,___$1){
return (function (a,b){return (cmd.ui.gist_list_str.call(null,a) > cmd.ui.gist_list_str.call(null,b));
});})(gists,latest_created,latest_edited,latest_opened_ids,latest_opened_unordered,latest_opened,___$1))
,cmd.core.get_pinned_gists.call(null,self__.state));return React.DOM.div({"className": "gist-select-container"},React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest created"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,latest_created))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest edited"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,latest_edited))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Latest opened"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,latest_opened))),React.DOM.div({"className:": "select-panel"},React.DOM.div({"className": "select-panel-title"},"Pinned"),React.DOM.div({"className": "select-panel-list-wrapper"},cmd.ui.render_list.call(null,pinned))));
});
cmd.ui.t10810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10812){var self__ = this;
var _10812__$1 = this;return self__.meta10811;
});
cmd.ui.t10810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10812,meta10811__$1){var self__ = this;
var _10812__$1 = this;return (new cmd.ui.t10810(self__.owner,self__.state,self__.gist_select,meta10811__$1));
});
cmd.ui.__GT_t10810 = (function __GT_t10810(owner__$1,state__$1,gist_select__$1,meta10811){return (new cmd.ui.t10810(owner__$1,state__$1,gist_select__$1,meta10811));
});
}
return (new cmd.ui.t10810(owner,state,gist_select,null));
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t10818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10818 = (function (owner,state,toolbar,meta10819){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta10819 = meta10819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10818.cljs$lang$type = true;
cmd.ui.t10818.cljs$lang$ctorStr = "cmd.ui/t10818";
cmd.ui.t10818.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t10818");
});
cmd.ui.t10818.prototype.om$core$IRender$ = true;
cmd.ui.t10818.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cmd.core.authenticated_om_QMARK_.call(null,self__.state)))
{return React.DOM.div(null,React.DOM.img({"style": (((new cljs.core.Keyword(null,"active-requests","active-requests",3616398877).cljs$core$IFn$_invoke$arity$1(self__.state) > 0))?{"display": "block"}:{"display": "none"}), "src": "resources/public/img/loading1.gif", "id": "loading-indicator"}),React.DOM.button({"className": "ios7", "onClick": cmd.ui.handle_new_gist, "id": "new-gist"},((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))?":C@NCEL: ":":NEW_G!ST: ")),om.dom.input.call(null,{"id": "new-gist-name", "style": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810)))?{"placeholder": "Enter a new gist name", "display": "inline-block"}:{"placeholder": "Enter a new gist name", "value": "", "display": "none"}), "title": "Filename", "type": "text"}),om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (){return cmd.ui.toggle_gist_list_panel.call(null);
});})(___$1))
, "onChange": ((function (___$1){
return (function (p1__10813_SHARP_){return om.core.transact_BANG_.call(null,self__.state,new cljs.core.Keyword(null,"query","query",1121848378),((function (___$1){
return (function (___$2){return p1__10813_SHARP_.target.value;
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
{return React.DOM.div(null,React.DOM.label(null,"USERN@ME: "),om.dom.input.call(null,{"id": "username", "title": "Github username", "type": "text"}),React.DOM.label(null,"S#CRET: "),om.dom.input.call(null,{"id": "auth-token", "onKeyUp": ((function (___$1){
return (function (p1__10814_SHARP_){if((p1__10814_SHARP_.keyCode === 13))
{var username_field = cmd.ui.$.call(null,"username");var password_field = cmd.ui.$.call(null,"auth-token");var username = username_field.value;var password = password_field.value;username_field.value = "";
password_field.value = "";
return cmd.ui.handle_auth.call(null,username,password);
} else
{return null;
}
});})(___$1))
, "title": "Github password", "type": "password"}),React.DOM.button({"onClick": ((function (___$1){
return (function (){var username_field = cmd.ui.$.call(null,"username");var password_field = cmd.ui.$.call(null,"auth-token");var username = username_field.value;var password = password_field.value;username_field.value = "";
password_field.value = "";
return cmd.ui.handle_auth.call(null,username,password);
});})(___$1))
, "title": "Log in to access and work with your gists", "id": "go"},"LOG>>IN"),(cljs.core.truth_(cmd.core.error_set_QMARK_.call(null,self__.state))?React.DOM.span({"id": "error-msg"}):[cljs.core.str(self__.state.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))].join('')));
} else
{return null;
}
}
});
cmd.ui.t10818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10820){var self__ = this;
var _10820__$1 = this;return self__.meta10819;
});
cmd.ui.t10818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10820,meta10819__$1){var self__ = this;
var _10820__$1 = this;return (new cmd.ui.t10818(self__.owner,self__.state,self__.toolbar,meta10819__$1));
});
cmd.ui.__GT_t10818 = (function __GT_t10818(owner__$1,state__$1,toolbar__$1,meta10819){return (new cmd.ui.t10818(owner__$1,state__$1,toolbar__$1,meta10819));
});
}
return (new cmd.ui.t10818(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.console = (function console__$1(state,owner){if(typeof cmd.ui.t10824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10824 = (function (owner,state,console,meta10825){
this.owner = owner;
this.state = state;
this.console = console;
this.meta10825 = meta10825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10824.cljs$lang$type = true;
cmd.ui.t10824.cljs$lang$ctorStr = "cmd.ui/t10824";
cmd.ui.t10824.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t10824");
});
cmd.ui.t10824.prototype.om$core$IRender$ = true;
cmd.ui.t10824.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"id": "msgs-list"},cljs.core.apply.call(null,om.dom.ul,{"className": "hello"},cljs.core.map_indexed.call(null,((function (___$1){
return (function (idx,msg){if(cljs.core._EQ_.call(null,idx,0))
{return React.DOM.li({"className": "current-message"},[cljs.core.str("> "),cljs.core.str(msg)].join(''));
} else
{return React.DOM.li(null,msg);
}
});})(___$1))
,cljs.core.reverse.call(null,self__.state.call(null,new cljs.core.Keyword(null,"messages","messages",551810238)))))));
});
cmd.ui.t10824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10826){var self__ = this;
var _10826__$1 = this;return self__.meta10825;
});
cmd.ui.t10824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10826,meta10825__$1){var self__ = this;
var _10826__$1 = this;return (new cmd.ui.t10824(self__.owner,self__.state,self__.console,meta10825__$1));
});
cmd.ui.__GT_t10824 = (function __GT_t10824(owner__$1,state__$1,console__$1,meta10825){return (new cmd.ui.t10824(owner__$1,state__$1,console__$1,meta10825));
});
}
return (new cmd.ui.t10824(owner,state,console__$1,null));
});
cmd.ui.render_console = (function render_console(state){return om.core.root.call(null,cmd.ui.console,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),cmd.ui.$.call(null,"console")], null));
});
cmd.ui.set_editor_mode = (function set_editor_mode(state){var editor = cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"ace","ace",1014000629));var session = editor.getSession();var extension = cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"text-mode","text-mode",4224925109));var G__10828 = extension;if(cljs.core._EQ_.call(null,".ini",G__10828))
{return session.setMode("ace/mode/ini");
} else
{if(cljs.core._EQ_.call(null,".json",G__10828))
{return session.setMode("ace/mode/json");
} else
{if(cljs.core._EQ_.call(null,".sh",G__10828))
{return session.setMode("ace/mode/sh");
} else
{if(cljs.core._EQ_.call(null,".yaml",G__10828))
{return session.setMode("ace/mode/yaml");
} else
{if(cljs.core._EQ_.call(null,".py",G__10828))
{return session.setMode("ace/mode/pyhton");
} else
{if(cljs.core._EQ_.call(null,".sass",G__10828))
{return session.setMode("ace/mode/sass");
} else
{if(cljs.core._EQ_.call(null,".go",G__10828))
{return session.setMode("ace/mode/golang");
} else
{if(cljs.core._EQ_.call(null,".md",G__10828))
{return session.setMode("ace/mode/markdown");
} else
{if(cljs.core._EQ_.call(null,".diff",G__10828))
{return session.setMode("ace/mode/diff");
} else
{if(cljs.core._EQ_.call(null,".rs",G__10828))
{return session.setMode("ace/mode/rust");
} else
{if(cljs.core._EQ_.call(null,".js",G__10828))
{return session.setMode("ace/mode/javascript");
} else
{if(cljs.core._EQ_.call(null,".rb",G__10828))
{return session.setMode("ace/mode/ruby");
} else
{if(cljs.core._EQ_.call(null,".txt",G__10828))
{return session.setMode("ace/mode/text");
} else
{if(cljs.core._EQ_.call(null,".markdown",G__10828))
{return session.setMode("ace/mode/markdown");
} else
{if(cljs.core._EQ_.call(null,".ts",G__10828))
{return session.setMode("ace/mode/typescript");
} else
{if(cljs.core._EQ_.call(null,".less",G__10828))
{return session.setMode("ace/mode/less");
} else
{if(cljs.core._EQ_.call(null,".html",G__10828))
{return session.setMode("ace/mode/html");
} else
{if(cljs.core._EQ_.call(null,".css",G__10828))
{return session.setMode("ace/mode/css");
} else
{if(cljs.core._EQ_.call(null,".hs",G__10828))
{return session.setMode("ace/mode/haskell");
} else
{if(cljs.core._EQ_.call(null,".cljs",G__10828))
{return session.setMode("ace/mode/clojure");
} else
{if(cljs.core._EQ_.call(null,".coffee",G__10828))
{return session.setMode("ace/mode/coffee");
} else
{if(cljs.core._EQ_.call(null,".clj",G__10828))
{return session.setMode("ace/mode/clojure");
} else
{if(cljs.core._EQ_.call(null,".sql",G__10828))
{return session.setMode("ace/mode/sql");
} else
{if(cljs.core._EQ_.call(null,".xml",G__10828))
{return session.setMode("ace/mode/xml");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(!((extension == null)))
{return cmd.core.say.call(null,[cljs.core.str("Unknown extension: "),cljs.core.str(extension)].join(''));
} else
{return null;
}
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
}
}
});
cmd.ui.reset_disqus_thread = (function reset_disqus_thread(state){return reset_disqus(cmd.core.get_state.call(null,state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)),document.location.href);
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__6728__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6728__auto__){
return (function (){var f__6729__auto__ = (function (){var switch__6713__auto__ = ((function (c__6728__auto__){
return (function (state_11020){var state_val_11021 = (state_11020[1]);if((state_val_11021 === 7))
{var inst_10968 = (state_11020[2]);var inst_10969 = cmd.core.say.call(null,"Login ok. Welcome aboard :-)");var state_11020__$1 = (function (){var statearr_11022 = state_11020;(statearr_11022[7] = inst_10968);
return statearr_11022;
})();var statearr_11023_11071 = state_11020__$1;(statearr_11023_11071[2] = inst_10969);
(statearr_11023_11071[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 20))
{var inst_11005 = (state_11020[2]);var state_11020__$1 = state_11020;var statearr_11024_11072 = state_11020__$1;(statearr_11024_11072[2] = inst_11005);
(statearr_11024_11072[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 1))
{var state_11020__$1 = state_11020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11020__$1,2,app_bus);
} else
{if((state_val_11021 === 4))
{var inst_11018 = (state_11020[2]);var state_11020__$1 = state_11020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11020__$1,inst_11018);
} else
{if((state_val_11021 === 15))
{var state_11020__$1 = state_11020;var statearr_11025_11073 = state_11020__$1;(statearr_11025_11073[2] = null);
(statearr_11025_11073[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 21))
{var inst_11007 = cmd.core.load_gists.call(null);var state_11020__$1 = state_11020;var statearr_11026_11074 = state_11020__$1;(statearr_11026_11074[2] = inst_11007);
(statearr_11026_11074[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 13))
{var inst_10985 = (state_11020[8]);var inst_10983 = cmd.core.get_gist_id_from_location_hash.call(null);var inst_10984 = cmd.core.find_gist.call(null,cmd.core.state,inst_10983);var inst_10985__$1 = cljs.core.nth.call(null,inst_10984,0,null);var inst_10986 = cljs.core.nthnext.call(null,inst_10984,1);var inst_10987 = (inst_10985__$1 == null);var inst_10988 = cljs.core.not.call(null,inst_10987);var state_11020__$1 = (function (){var statearr_11027 = state_11020;(statearr_11027[9] = inst_10986);
(statearr_11027[8] = inst_10985__$1);
return statearr_11027;
})();if(inst_10988)
{var statearr_11028_11075 = state_11020__$1;(statearr_11028_11075[1] = 14);
} else
{var statearr_11029_11076 = state_11020__$1;(statearr_11029_11076[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 22))
{var inst_10961 = (state_11020[10]);var inst_10960 = (state_11020[11]);var inst_11009 = [cljs.core.str("Unknown message from AppBus: "),cljs.core.str(inst_10960),cljs.core.str(" : "),cljs.core.str(inst_10961)].join('');var inst_11010 = cmd.core.say.call(null,inst_11009);var state_11020__$1 = state_11020;var statearr_11030_11077 = state_11020__$1;(statearr_11030_11077[2] = inst_11010);
(statearr_11030_11077[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 6))
{var inst_10961 = (state_11020[10]);var state_11020__$1 = state_11020;var G__11031_11078 = inst_10961;if(cljs.core._EQ_.call(null,false,G__11031_11078))
{var statearr_11032_11079 = state_11020__$1;(statearr_11032_11079[1] = 9);
} else
{if(cljs.core._EQ_.call(null,true,G__11031_11078))
{var statearr_11033_11080 = state_11020__$1;(statearr_11033_11080[1] = 8);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10961)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 17))
{var inst_10996 = (state_11020[12]);var inst_10996__$1 = cmd.ui.$.call(null,"console");var inst_10997 = cmd.ui.visible_QMARK_.call(null,inst_10996__$1);var inst_10998 = cljs.core.not.call(null,inst_10997);var state_11020__$1 = (function (){var statearr_11034 = state_11020;(statearr_11034[12] = inst_10996__$1);
return statearr_11034;
})();if(inst_10998)
{var statearr_11035_11081 = state_11020__$1;(statearr_11035_11081[1] = 18);
} else
{var statearr_11036_11082 = state_11020__$1;(statearr_11036_11082[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 3))
{var inst_10960 = (state_11020[11]);var inst_10957 = (state_11020[13]);var inst_10960__$1 = cljs.core.nth.call(null,inst_10957,0,null);var inst_10961 = cljs.core.nth.call(null,inst_10957,1,null);var state_11020__$1 = (function (){var statearr_11037 = state_11020;(statearr_11037[10] = inst_10961);
(statearr_11037[11] = inst_10960__$1);
return statearr_11037;
})();var G__11038_11083 = inst_10960__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload-gists","reload-gists",4719976526),G__11038_11083))
{var statearr_11039_11084 = state_11020__$1;(statearr_11039_11084[1] = 21);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),G__11038_11083))
{var statearr_11040_11085 = state_11020__$1;(statearr_11040_11085[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),G__11038_11083))
{var statearr_11041_11086 = state_11020__$1;(statearr_11041_11086[1] = 13);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),G__11038_11083))
{var statearr_11042_11087 = state_11020__$1;(statearr_11042_11087[1] = 12);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__11038_11083))
{var statearr_11043_11088 = state_11020__$1;(statearr_11043_11088[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__11038_11083))
{var statearr_11044_11089 = state_11020__$1;(statearr_11044_11089[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__11038_11083))
{var statearr_11045_11090 = state_11020__$1;(statearr_11045_11090[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_11046_11091 = state_11020__$1;(statearr_11046_11091[1] = 22);
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
{if((state_val_11021 === 12))
{var inst_10980 = cmd.core.reset_input_with_motd.call(null);var state_11020__$1 = state_11020;var statearr_11047_11092 = state_11020__$1;(statearr_11047_11092[2] = inst_10980);
(statearr_11047_11092[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 2))
{var inst_10954 = (state_11020[14]);var inst_10954__$1 = (state_11020[2]);var inst_10955 = cljs.core.nth.call(null,inst_10954__$1,0,null);var inst_10956 = cljs.core.nth.call(null,inst_10954__$1,1,null);var inst_10957 = inst_10954__$1;var state_11020__$1 = (function (){var statearr_11048 = state_11020;(statearr_11048[15] = inst_10955);
(statearr_11048[14] = inst_10954__$1);
(statearr_11048[16] = inst_10956);
(statearr_11048[13] = inst_10957);
return statearr_11048;
})();var statearr_11049_11093 = state_11020__$1;(statearr_11049_11093[2] = null);
(statearr_11049_11093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 23))
{var inst_11015 = (state_11020[2]);var inst_10957 = inst_11015;var state_11020__$1 = (function (){var statearr_11050 = state_11020;(statearr_11050[13] = inst_10957);
return statearr_11050;
})();var statearr_11051_11094 = state_11020__$1;(statearr_11051_11094[2] = null);
(statearr_11051_11094[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 19))
{var state_11020__$1 = state_11020;var statearr_11052_11095 = state_11020__$1;(statearr_11052_11095[2] = null);
(statearr_11052_11095[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 11))
{var inst_10978 = cmd.core.reset_input_with_motd.call(null);var state_11020__$1 = state_11020;var statearr_11053_11096 = state_11020__$1;(statearr_11053_11096[2] = inst_10978);
(statearr_11053_11096[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 9))
{var inst_10965 = cmd.core.load_initial_content.call(null);var state_11020__$1 = state_11020;var statearr_11054_11097 = state_11020__$1;(statearr_11054_11097[2] = inst_10965);
(statearr_11054_11097[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 5))
{var inst_11013 = (state_11020[2]);var state_11020__$1 = (function (){var statearr_11055 = state_11020;(statearr_11055[17] = inst_11013);
return statearr_11055;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11020__$1,23,app_bus);
} else
{if((state_val_11021 === 14))
{var inst_10985 = (state_11020[8]);var inst_10990 = inst_10985.call(null,"id");var inst_10991 = cmd.core.load_gist.call(null,inst_10990);var state_11020__$1 = state_11020;var statearr_11056_11098 = state_11020__$1;(statearr_11056_11098[2] = inst_10991);
(statearr_11056_11098[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 16))
{var inst_10994 = (state_11020[2]);var state_11020__$1 = state_11020;var statearr_11057_11099 = state_11020__$1;(statearr_11057_11099[2] = inst_10994);
(statearr_11057_11099[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 10))
{var inst_10961 = (state_11020[10]);var inst_10971 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var inst_10972 = cmd.core.set_input.call(null,inst_10961);var inst_10973 = cmd.core.set_title.call(null,inst_10971);var inst_10974 = cmd.core.set_location_hash_gist_id.call(null,inst_10961);var inst_10975 = cmd.ui.set_editor_mode.call(null,cmd.core.state);var inst_10976 = cmd.ui.reset_disqus_thread.call(null,cmd.core.state);var state_11020__$1 = (function (){var statearr_11058 = state_11020;(statearr_11058[18] = inst_10973);
(statearr_11058[19] = inst_10972);
(statearr_11058[20] = inst_10974);
(statearr_11058[21] = inst_10975);
return statearr_11058;
})();var statearr_11059_11100 = state_11020__$1;(statearr_11059_11100[2] = inst_10976);
(statearr_11059_11100[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 18))
{var inst_10996 = (state_11020[12]);var inst_10961 = (state_11020[10]);var inst_10960 = (state_11020[11]);var inst_10954 = (state_11020[14]);var inst_10957 = (state_11020[13]);var inst_11000 = cmd.ui.jq_toggle.call(null,inst_10996);var inst_11001 = (function (){var console = inst_10996;var vec__10959 = inst_10957;var payload = inst_10961;var msg = inst_10960;var vec__10952 = inst_10954;var G__10951 = inst_10957;return ((function (console,vec__10959,payload,msg,vec__10952,G__10951,inst_10996,inst_10961,inst_10960,inst_10954,inst_10957,inst_11000,state_val_11021,c__6728__auto__){
return (function (){return cmd.ui.jq_toggle.call(null,console);
});
;})(console,vec__10959,payload,msg,vec__10952,G__10951,inst_10996,inst_10961,inst_10960,inst_10954,inst_10957,inst_11000,state_val_11021,c__6728__auto__))
})();var inst_11002 = setTimeout(inst_11001,2000);var state_11020__$1 = (function (){var statearr_11060 = state_11020;(statearr_11060[22] = inst_11000);
return statearr_11060;
})();var statearr_11061_11101 = state_11020__$1;(statearr_11061_11101[2] = inst_11002);
(statearr_11061_11101[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11021 === 8))
{var inst_10962 = cmd.core.load_initial_content.call(null);var inst_10963 = cmd.core.load_gists.call(null);var state_11020__$1 = (function (){var statearr_11062 = state_11020;(statearr_11062[23] = inst_10962);
return statearr_11062;
})();var statearr_11063_11102 = state_11020__$1;(statearr_11063_11102[2] = inst_10963);
(statearr_11063_11102[1] = 7);
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
var state_machine__6714__auto____0 = (function (){var statearr_11067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11067[0] = state_machine__6714__auto__);
(statearr_11067[1] = 1);
return statearr_11067;
});
var state_machine__6714__auto____1 = (function (state_11020){while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11020);if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6716__auto__;
}
break;
}
}catch (e11068){if((e11068 instanceof Object))
{var ex__6717__auto__ = e11068;var statearr_11069_11103 = state_11020;(statearr_11069_11103[5] = ex__6717__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11104 = state_11020;
state_11020 = G__11104;
continue;
}
} else
{return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11020){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6728__auto__))
})();var state__6730__auto__ = (function (){var statearr_11070 = f__6729__auto__.call(null);(statearr_11070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6728__auto__);
return statearr_11070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6730__auto__);
});})(c__6728__auto__))
);
return c__6728__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.core.get_prefs.call(null,"username");var auth_token = cmd.core.get_prefs.call(null,"auth-token");var last_opened_gist_id = cmd.core.get_prefs.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
var worker_11105 = (new Worker("resources/public/js/worker.js"));cmd.core.set_state.call(null,state,new cljs.core.Keyword(null,"worker","worker",4526786288),worker_11105);
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