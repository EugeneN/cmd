// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.ui');
goog.require('cljs.core');
goog.require('cmd.utils');
goog.require('cmd.core');
goog.require('cljs.core.async');
goog.require('cmd.core');
goog.require('cmd.utils');
goog.require('goog.style');
goog.require('goog.style');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_fn_STAR_ = (function (p1__9837_SHARP_){return console.log(p1__9837_SHARP_);
});
cmd.ui.$ = (function $(id_str){return document.getElementById(id_str);
});
cmd.ui.visible_QMARK_ = (function visible_QMARK_(el){return goog.style.isElementShown(el);
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
cmd.ui.jq_toggle = (function jq_toggle(el,complete_cb){return $(el).slideToggle(200,complete_cb);
});
cmd.ui.motd = cmd.ui.$.call(null,"motd").text;
cmd.ui.new_gist_motd = cmd.ui.$.call(null,"new-gist-motd").text;
cmd.ui.input = cmd.ui.$.call(null,"editor");
cmd.ui.preview = cmd.ui.$.call(null,"preview");
cmd.ui.preview_container = cmd.ui.$.call(null,"preview-container");
cmd.ui.ace_set_value = (function ace_set_value(content){return cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9839 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9839,0,null);var first_file = cljs.core.nth.call(null,vec__9839,1,null);var content = first_file.call(null,"content");return cmd.ui.ace_set_value.call(null,content);
});
cmd.ui.reset_input = (function reset_input(){return cmd.ui.ace_set_value.call(null,cmd.ui.motd);
});
cmd.ui.reset_input_new_gist = (function reset_input_new_gist(){return cmd.ui.ace_set_value.call(null,cmd.ui.new_gist_motd);
});
cmd.ui.process_cb = (function process_cb(value){return cmd.utils.html_BANG_.call(null,cmd.ui.preview,value);
});
cmd.ui.set_preview = (function set_preview(){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var ace_value = ace.getSession().getValue();return cmd.core.process.call(null,ace_value,cmd.ui.process_cb);
});
cmd.ui.handle_pull = (function handle_pull(_){return cmd.core.load_gist.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var G__9841 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__9841))
{var file_name = cmd.ui.$.call(null,"new-gist-name").value;var new_content = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"public","public",4331447771),false,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);if((cljs.core.count.call(null,file_name) < 4))
{return alert("Bad new gist file name");
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
cmd.ui.handle_logout = (function handle_logout(_){cmd.utils.say.call(null,"Bye bye");
cmd.core.reset_state.call(null,cmd.core.state);
cmd.utils.setcookie.call(null,"username","");
cmd.utils.setcookie.call(null,"auth-token","");
var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9861){var state_val_9862 = (state_9861[1]);if((state_val_9862 === 2))
{var inst_9859 = (state_9861[2]);var state_9861__$1 = state_9861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9861__$1,inst_9859);
} else
{if((state_val_9862 === 1))
{var inst_9856 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_9857 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9856,null));var state_9861__$1 = state_9861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9861__$1,2,cmd.core.AppBus,inst_9857);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9866 = [null,null,null,null,null,null,null];(statearr_9866[0] = state_machine__5594__auto__);
(statearr_9866[1] = 1);
return statearr_9866;
});
var state_machine__5594__auto____1 = (function (state_9861){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9861);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9867){if((e9867 instanceof Object))
{var ex__5597__auto__ = e9867;var statearr_9868_9870 = state_9861;(statearr_9868_9870[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9871 = state_9861;
state_9861 = G__9871;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9861){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9869 = f__5609__auto__.call(null);(statearr_9869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.handle_select = (function handle_select(e){var selected_id = e.target.value;return cmd.core.load_gist.call(null,selected_id);
});
cmd.ui.handle_new_gist = (function handle_new_gist(ev){var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var new_gist_name_el = cmd.ui.$.call(null,"new-gist-name");var G__9873 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__9873))
{return (function (){cmd.ui.toggle_slide_left.call(null,new_gist_name_el);
new_gist_name_el.value = "";
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);
return cmd.ui.reset_input.call(null);
})().call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cmd.ui.toggle_slide_left.call(null,cmd.ui.$.call(null,"new-gist-name"));
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"new-gist","new-gist",2344671810));
return cmd.ui.reset_input_new_gist.call(null);
} else
{return null;
}
}
});
cmd.ui.handle_auth = (function handle_auth(e){var username = cmd.ui.$.call(null,"username").value;var auth_token = cmd.ui.$.call(null,"auth-token").value;return cmd.core.authenticate.call(null,username,auth_token);
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t9877 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9877 = (function (owner,state,toolbar,meta9878){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta9878 = meta9878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9877.cljs$lang$type = true;
cmd.ui.t9877.cljs$lang$ctorStr = "cmd.ui/t9877";
cmd.ui.t9877.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t9877");
});
cmd.ui.t9877.prototype.om$core$IRender$ = true;
cmd.ui.t9877.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cmd.core.authenticated_om_QMARK_.call(null,self__.state)))
{return React.DOM.div(null,React.DOM.button({"className": "ios7", "onClick": cmd.ui.handle_new_gist, "id": "new-gist"},":NEW_G!ST: "),om.dom.input.call(null,{"id": "new-gist-name", "style": {"display": "none"}, "title": "Filename", "type": "text"}),React.DOM.label({"className": "ios7"},"SELECT_G!ST: "),React.DOM.div({"id": "gist-list"},cljs.core.apply.call(null,om.dom.select,{"onChange": cmd.ui.handle_select, "title": "Select a gist for a good start :-)", "className": "hello"},cljs.core.map.call(null,((function (___$1){
return (function (gist){return om.dom.option.call(null,{"value": gist.call(null,"id")},cmd.utils.join_gist_names.call(null,cljs.core.keys.call(null,gist.call(null,"files"))));
});})(___$1))
,new cljs.core.Keyword(null,"gists","gists",1112269186).cljs$core$IFn$_invoke$arity$1(self__.state)))),(function (){var current_gist = self__.state.call(null,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var href = ((cljs.core._EQ_.call(null,current_gist,null))?null:current_gist.call(null,"html_url"));if(!(cljs.core._EQ_.call(null,href,null)))
{return React.DOM.a({"href": href, "title": "View gist in Github (in a new tab/window)", "target": "_blank", "id": "view-orig"},"VIEW!ORIGINAL");
} else
{return null;
}
})(),React.DOM.button({"onClick": cmd.ui.handle_pull, "title": "Reload gist from Github", "id": "pull"},">>PULL"),React.DOM.button({"onClick": cmd.ui.handle_push, "title": "Save current gist state to Github", "id": "push"},"PUSH>>"),React.DOM.button({"onClick": cmd.ui.handle_logout, "title": "Log out and remove autologin cookies", "id": "log-out"},"LOG^OUT"));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return React.DOM.div(null,React.DOM.label(null,"USERN@ME: "),om.dom.input.call(null,{"id": "username", "title": "Your Github username", "type": "text"}),React.DOM.label(null,"S#CRET: "),om.dom.input.call(null,{"id": "auth-token", "title": "Github auth token in base64 :-P", "type": "text"}),React.DOM.button({"onClick": cmd.ui.handle_auth, "title": "Log in to access and work with your gists", "id": "go"},"LOG>>IN"),(cljs.core.truth_(cmd.core.error_set_QMARK_.call(null,self__.state))?React.DOM.span({"id": "error-msg"}):[cljs.core.str(self__.state.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))].join('')));
} else
{return null;
}
}
});
cmd.ui.t9877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9879){var self__ = this;
var _9879__$1 = this;return self__.meta9878;
});
cmd.ui.t9877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9879,meta9878__$1){var self__ = this;
var _9879__$1 = this;return (new cmd.ui.t9877(self__.owner,self__.state,self__.toolbar,meta9878__$1));
});
cmd.ui.__GT_t9877 = (function __GT_t9877(owner__$1,state__$1,toolbar__$1,meta9878){return (new cmd.ui.t9877(owner__$1,state__$1,toolbar__$1,meta9878));
});
}
return (new cmd.ui.t9877(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.setup_toolbar_listeners = (function setup_toolbar_listeners(){var toolbar_toggler = cmd.ui.$.call(null,"toolbar-toggler");var editor_toggler = cmd.ui.$.call(null,"editor-toggler");var toolbar = cmd.ui.$.call(null,"toolbar");var preview = cmd.ui.$.call(null,"preview-container");var editor = cmd.ui.$.call(null,"input");var preview_toggler = cmd.ui.$.call(null,"preview-toggler");Rx.Observable.fromEvent(toolbar_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (){return cmd.ui.jq_toggle.call(null,toolbar,((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (){return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429),cljs.core.not.call(null,cmd.ui.visible_QMARK_.call(null,toolbar)));
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
);
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(preview_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (){return cmd.ui.toggle_slide_right.call(null,preview);
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(editor_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (){return cmd.ui.toggle_slide_left.call(null,editor);
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
);
Rx.Observable.fromEvent(document,"mousemove").throttle(50).filter(((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (ev){var and__3439__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3439__auto__))
{return (ev.clientY < 28);
} else
{return and__3439__auto__;
}
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (){return cmd.ui.slide_down.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
);
return Rx.Observable.fromEvent(document,"mousemove").throttle(50).filter(((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (ev){var and__3439__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3439__auto__))
{return (ev.clientY > 28);
} else
{return and__3439__auto__;
}
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (){return cmd.ui.slide_up.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
);
});
cmd.ui.setup_editor_listeners = (function setup_editor_listeners(){var editor = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var session = editor.getSession();Rx.Observable.create(((function (editor,session){
return (function (observer){return session.on("change",((function (editor,session){
return (function (){return observer.onNext();
});})(editor,session))
);
});})(editor,session))
).throttle(300).subscribe(((function (editor,session){
return (function (){return cmd.ui.set_preview.call(null);
});})(editor,session))
);
cmd.ui.calc_offset_top_preview = ((function (editor,session){
return (function calc_offset_top_preview(ot1){var ch1 = (session.getScreenLength() * editor.renderer.lineHeight);var ch2 = cmd.ui.preview.clientHeight;return ((ot1 * ch2) / ch1);
});})(editor,session))
;
cmd.ui.calc_offset_top_input = ((function (editor,session){
return (function calc_offset_top_input(ot2){var ch1 = (session.getScreenLength() * editor.renderer.lineHeight);var ch2 = cmd.ui.preview.clientHeight;return ((ot2 * ch1) / ch2);
});})(editor,session))
;
Rx.Observable.create(((function (editor,session){
return (function (observer){return session.on("changeScrollTop",((function (editor,session){
return (function (p1__9880_SHARP_){return observer.onNext(p1__9880_SHARP_);
});})(editor,session))
);
});})(editor,session))
).throttle(15).subscribe(((function (editor,session){
return (function (p1__9881_SHARP_){return cmd.ui.preview_container.scrollTop = cmd.ui.calc_offset_top_preview.call(null,p1__9881_SHARP_);
});})(editor,session))
);
return Rx.Observable.fromEvent(cmd.ui.preview_container,"scroll").throttle(15).subscribe(((function (editor,session){
return (function (){return session.setScrollTop(cmd.ui.calc_offset_top_input.call(null,cmd.ui.preview_container.scrollTop));
});})(editor,session))
);
});
cmd.ui.setup_ace = (function setup_ace(){var editor = ace.edit("input");var session = editor.getSession();cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629),editor);
session.setMode("ace/mode/markdown");
return session.setUseWrapMode(true);
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9956){var state_val_9957 = (state_9956[1]);if((state_val_9957 === 9))
{var inst_9951 = (state_9956[2]);var inst_9937 = inst_9951;var state_9956__$1 = (function (){var statearr_9958 = state_9956;(statearr_9958[7] = inst_9937);
return statearr_9958;
})();var statearr_9959_9978 = state_9956__$1;(statearr_9959_9978[2] = null);
(statearr_9959_9978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9957 === 8))
{var inst_9946 = cmd.ui.reset_input.call(null);var state_9956__$1 = state_9956;var statearr_9960_9979 = state_9956__$1;(statearr_9960_9979[2] = inst_9946);
(statearr_9960_9979[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9957 === 7))
{var inst_9941 = (state_9956[8]);var inst_9944 = cmd.ui.set_input.call(null,inst_9941);var state_9956__$1 = state_9956;var statearr_9961_9980 = state_9956__$1;(statearr_9961_9980[2] = inst_9944);
(statearr_9961_9980[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9957 === 6))
{var inst_9942 = cmd.core.load_gists.call(null);var state_9956__$1 = state_9956;var statearr_9962_9981 = state_9956__$1;(statearr_9962_9981[2] = inst_9942);
(statearr_9962_9981[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9957 === 5))
{var inst_9949 = (state_9956[2]);var state_9956__$1 = (function (){var statearr_9963 = state_9956;(statearr_9963[9] = inst_9949);
return statearr_9963;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9956__$1,9,app_bus);
} else
{if((state_val_9957 === 4))
{var inst_9954 = (state_9956[2]);var state_9956__$1 = state_9956;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9956__$1,inst_9954);
} else
{if((state_val_9957 === 3))
{var inst_9937 = (state_9956[7]);var inst_9940 = cljs.core.nth.call(null,inst_9937,0,null);var inst_9941 = cljs.core.nth.call(null,inst_9937,1,null);var state_9956__$1 = (function (){var statearr_9964 = state_9956;(statearr_9964[8] = inst_9941);
return statearr_9964;
})();var G__9965_9982 = inst_9940;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__9965_9982))
{var statearr_9966_9983 = state_9956__$1;(statearr_9966_9983[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9965_9982))
{var statearr_9967_9984 = state_9956__$1;(statearr_9967_9984[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9965_9982))
{var statearr_9968_9985 = state_9956__$1;(statearr_9968_9985[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9940)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9957 === 2))
{var inst_9934 = (state_9956[2]);var inst_9935 = cljs.core.nth.call(null,inst_9934,0,null);var inst_9936 = cljs.core.nth.call(null,inst_9934,1,null);var inst_9937 = inst_9934;var state_9956__$1 = (function (){var statearr_9969 = state_9956;(statearr_9969[10] = inst_9935);
(statearr_9969[7] = inst_9937);
(statearr_9969[11] = inst_9936);
return statearr_9969;
})();var statearr_9970_9986 = state_9956__$1;(statearr_9970_9986[2] = null);
(statearr_9970_9986[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9957 === 1))
{var state_9956__$1 = state_9956;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9956__$1,2,app_bus);
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
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9974 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9974[0] = state_machine__5594__auto__);
(statearr_9974[1] = 1);
return statearr_9974;
});
var state_machine__5594__auto____1 = (function (state_9956){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9956);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9975){if((e9975 instanceof Object))
{var ex__5597__auto__ = e9975;var statearr_9976_9987 = state_9956;(statearr_9976_9987[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9956);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9988 = state_9956;
state_9956 = G__9988;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9956){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9977 = f__5609__auto__.call(null);(statearr_9977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.utils.getcookie.call(null,"username");var auth_token = cmd.utils.getcookie.call(null,"auth-token");var last_opened_gist_id = cmd.utils.getcookie.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
cmd.ui.setup_ace.call(null);
cmd.ui.setup_editor_listeners.call(null);
cmd.ui.setup_toolbar_listeners.call(null);
cmd.core.authenticate.call(null,username,auth_token);
cmd.ui.render_toolbar.call(null,state);
cmd.ui.reset_input.call(null);
var worker = (new Worker("resources/public/js/worker.js"));return cmd.core.set_state.call(null,state,new cljs.core.Keyword(null,"worker","worker",4526786288),worker);
});
cmd.ui.main.call(null,cmd.core.state,cmd.core.AppBus);

//# sourceMappingURL=ui.js.map