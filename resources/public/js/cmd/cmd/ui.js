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
goog.require('cmd.defs');
goog.require('cmd.utils');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.style');
goog.require('cmd.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_fn_STAR_ = (function (p1__10021_SHARP_){return console.log(p1__10021_SHARP_);
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
cmd.ui.ace_set_value = (function ace_set_value(content){return cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__10023 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__10023,0,null);var first_file = cljs.core.nth.call(null,vec__10023,1,null);var content = first_file.call(null,"content");return cmd.ui.ace_set_value.call(null,content);
});
cmd.ui.reset_input_with_motd = (function reset_input_with_motd(){return cmd.ui.ace_set_value.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"motd","motd",1017261828)));
});
cmd.ui.process_cb = (function process_cb(value){return cmd.utils.html_BANG_.call(null,cmd.ui.$.call(null,"preview"),value);
});
cmd.ui.set_preview = (function set_preview(){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var ace_value = ace.getSession().getValue();return cmd.core.process.call(null,ace_value,cmd.ui.process_cb);
});
cmd.ui.handle_pull = (function handle_pull(_){return cmd.core.load_gist.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var G__10025 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10025))
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
cmd.ui.handle_logout = (function handle_logout(_){cmd.utils.say.call(null,"Bye, c u l8r :-)");
cmd.core.reset_state.call(null,cmd.core.state);
cmd.utils.setcookie.call(null,"username","");
cmd.utils.setcookie.call(null,"auth-token","");
var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10045){var state_val_10046 = (state_10045[1]);if((state_val_10046 === 2))
{var inst_10043 = (state_10045[2]);var state_10045__$1 = state_10045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10045__$1,inst_10043);
} else
{if((state_val_10046 === 1))
{var inst_10040 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_10041 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10040,null));var state_10045__$1 = state_10045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10045__$1,2,cmd.core.AppBus,inst_10041);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10050 = [null,null,null,null,null,null,null];(statearr_10050[0] = state_machine__5594__auto__);
(statearr_10050[1] = 1);
return statearr_10050;
});
var state_machine__5594__auto____1 = (function (state_10045){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10045);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10051){if((e10051 instanceof Object))
{var ex__5597__auto__ = e10051;var statearr_10052_10054 = state_10045;(statearr_10052_10054[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10045);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10051;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10055 = state_10045;
state_10045 = G__10055;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10045){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10053 = f__5609__auto__.call(null);(statearr_10053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.handle_select = (function handle_select(e){var selected_id = e.target.value;return cmd.core.load_gist.call(null,selected_id);
});
cmd.ui.handle_new_gist = (function handle_new_gist(ev){var mode = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333));var new_gist_name_el = cmd.ui.$.call(null,"new-gist-name");var G__10057 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-gist","new-gist",2344671810),G__10057))
{return (function (){cmd.ui.toggle_slide_left.call(null,new_gist_name_el);
new_gist_name_el.value = "";
cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"mode","mode",1017261333),null);
return cmd.ui.reset_input_with_motd.call(null);
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
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t10061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t10061 = (function (owner,state,toolbar,meta10062){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta10062 = meta10062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t10061.cljs$lang$type = true;
cmd.ui.t10061.cljs$lang$ctorStr = "cmd.ui/t10061";
cmd.ui.t10061.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t10061");
});
cmd.ui.t10061.prototype.om$core$IRender$ = true;
cmd.ui.t10061.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
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
cmd.ui.t10061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10063){var self__ = this;
var _10063__$1 = this;return self__.meta10062;
});
cmd.ui.t10061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10063,meta10062__$1){var self__ = this;
var _10063__$1 = this;return (new cmd.ui.t10061(self__.owner,self__.state,self__.toolbar,meta10062__$1));
});
cmd.ui.__GT_t10061 = (function __GT_t10061(owner__$1,state__$1,toolbar__$1,meta10062){return (new cmd.ui.t10061(owner__$1,state__$1,toolbar__$1,meta10062));
});
}
return (new cmd.ui.t10061(owner,state,toolbar,null));
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
cmd.ui.setup_editor_listeners = (function setup_editor_listeners(){var editor = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var session = editor.getSession();var preview_container = cmd.ui.$.call(null,"preview-container");var preview = cmd.ui.$.call(null,"preview");Rx.Observable.create(((function (editor,session,preview_container,preview){
return (function (observer){return session.on("change",((function (editor,session,preview_container,preview){
return (function (){return observer.onNext();
});})(editor,session,preview_container,preview))
);
});})(editor,session,preview_container,preview))
).throttle(300).subscribe(((function (editor,session,preview_container,preview){
return (function (){return cmd.ui.set_preview.call(null);
});})(editor,session,preview_container,preview))
);
cmd.ui.calc_offset_top_preview = ((function (editor,session,preview_container,preview){
return (function calc_offset_top_preview(ot1){var ch1 = (session.getScreenLength() * editor.renderer.lineHeight);var ch2 = preview.clientHeight;return ((ot1 * ch2) / ch1);
});})(editor,session,preview_container,preview))
;
cmd.ui.calc_offset_top_input = ((function (editor,session,preview_container,preview){
return (function calc_offset_top_input(ot2){var ch1 = (session.getScreenLength() * editor.renderer.lineHeight);var ch2 = preview.clientHeight;return ((ot2 * ch1) / ch2);
});})(editor,session,preview_container,preview))
;
Rx.Observable.create(((function (editor,session,preview_container,preview){
return (function (observer){return session.on("changeScrollTop",((function (editor,session,preview_container,preview){
return (function (p1__10064_SHARP_){return observer.onNext(p1__10064_SHARP_);
});})(editor,session,preview_container,preview))
);
});})(editor,session,preview_container,preview))
).throttle(15).subscribe(((function (editor,session,preview_container,preview){
return (function (p1__10065_SHARP_){return preview_container.scrollTop = cmd.ui.calc_offset_top_preview.call(null,p1__10065_SHARP_);
});})(editor,session,preview_container,preview))
);
return Rx.Observable.fromEvent(preview_container,"scroll").throttle(15).subscribe(((function (editor,session,preview_container,preview){
return (function (){return session.setScrollTop(cmd.ui.calc_offset_top_input.call(null,preview_container.scrollTop));
});})(editor,session,preview_container,preview))
);
});
cmd.ui.setup_ace = (function setup_ace(){var editor = ace.edit("input");var session = editor.getSession();cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629),editor);
session.setMode("ace/mode/markdown");
return session.setUseWrapMode(true);
});
cmd.ui.get_hash_id = (function get_hash_id(){var hash = document.location.hash;if((cljs.core.count.call(null,hash) > 1))
{return cljs.core.subs.call(null,hash,1);
} else
{return null;
}
});
cmd.ui.set_title = (function set_title(title){return document.title = [cljs.core.str(title),cljs.core.str(" : "),cljs.core.str(cmd.defs.default_title)].join('');
});
cmd.ui.set_location_hash = (function set_location_hash(hash){return document.location.hash = hash;
});
cmd.ui.load_initial_content = (function load_initial_content(){var hash_id = cmd.ui.get_hash_id.call(null);if((hash_id == null))
{return cmd.core.get_motd.call(null,cmd.defs.default_motd_id);
} else
{return cmd.core.load_gist.call(null,hash_id);
}
});
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_10214){var state_val_10215 = (state_10214[1]);if((state_val_10215 === 7))
{var inst_10178 = (state_10214[2]);var state_10214__$1 = state_10214;var statearr_10216_10254 = state_10214__$1;(statearr_10216_10254[2] = inst_10178);
(statearr_10216_10254[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 1))
{var state_10214__$1 = state_10214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10214__$1,2,app_bus);
} else
{if((state_val_10215 === 4))
{var inst_10212 = (state_10214[2]);var state_10214__$1 = state_10214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10214__$1,inst_10212);
} else
{if((state_val_10215 === 15))
{var state_10214__$1 = state_10214;var statearr_10217_10255 = state_10214__$1;(statearr_10217_10255[2] = null);
(statearr_10217_10255[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 13))
{var inst_10192 = (state_10214[7]);var inst_10190 = cmd.ui.get_hash_id.call(null);var inst_10191 = cmd.core.find_gist.call(null,cmd.core.state,inst_10190);var inst_10192__$1 = cljs.core.nth.call(null,inst_10191,0,null);var inst_10193 = cljs.core.nthnext.call(null,inst_10191,1);var inst_10194 = (inst_10192__$1 == null);var inst_10195 = cljs.core.not.call(null,inst_10194);var state_10214__$1 = (function (){var statearr_10218 = state_10214;(statearr_10218[7] = inst_10192__$1);
(statearr_10218[8] = inst_10193);
return statearr_10218;
})();if(inst_10195)
{var statearr_10219_10256 = state_10214__$1;(statearr_10219_10256[1] = 14);
} else
{var statearr_10220_10257 = state_10214__$1;(statearr_10220_10257[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 6))
{var inst_10171 = (state_10214[9]);var state_10214__$1 = state_10214;var G__10221_10258 = inst_10171;if(cljs.core._EQ_.call(null,false,G__10221_10258))
{var statearr_10222_10259 = state_10214__$1;(statearr_10222_10259[1] = 9);
} else
{if(cljs.core._EQ_.call(null,true,G__10221_10258))
{var statearr_10223_10260 = state_10214__$1;(statearr_10223_10260[1] = 8);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10171)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 17))
{var inst_10171 = (state_10214[9]);var inst_10170 = (state_10214[10]);var inst_10203 = [cljs.core.str("Unknown message from AppBus: "),cljs.core.str(inst_10170),cljs.core.str(" : "),cljs.core.str(inst_10171)].join('');var inst_10204 = cmd.utils.say.call(null,inst_10203);var state_10214__$1 = state_10214;var statearr_10224_10261 = state_10214__$1;(statearr_10224_10261[2] = inst_10204);
(statearr_10224_10261[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 3))
{var inst_10170 = (state_10214[10]);var inst_10167 = (state_10214[11]);var inst_10170__$1 = cljs.core.nth.call(null,inst_10167,0,null);var inst_10171 = cljs.core.nth.call(null,inst_10167,1,null);var state_10214__$1 = (function (){var statearr_10225 = state_10214;(statearr_10225[9] = inst_10171);
(statearr_10225[10] = inst_10170__$1);
return statearr_10225;
})();var G__10226_10262 = inst_10170__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),G__10226_10262))
{var statearr_10227_10263 = state_10214__$1;(statearr_10227_10263[1] = 13);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),G__10226_10262))
{var statearr_10228_10264 = state_10214__$1;(statearr_10228_10264[1] = 12);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__10226_10262))
{var statearr_10229_10265 = state_10214__$1;(statearr_10229_10265[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__10226_10262))
{var statearr_10230_10266 = state_10214__$1;(statearr_10230_10266[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__10226_10262))
{var statearr_10231_10267 = state_10214__$1;(statearr_10231_10267[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_10232_10268 = state_10214__$1;(statearr_10232_10268[1] = 17);
} else
{}
}
}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 12))
{var inst_10187 = cmd.ui.reset_input_with_motd.call(null);var state_10214__$1 = state_10214;var statearr_10233_10269 = state_10214__$1;(statearr_10233_10269[2] = inst_10187);
(statearr_10233_10269[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 2))
{var inst_10164 = (state_10214[2]);var inst_10165 = cljs.core.nth.call(null,inst_10164,0,null);var inst_10166 = cljs.core.nth.call(null,inst_10164,1,null);var inst_10167 = inst_10164;var state_10214__$1 = (function (){var statearr_10234 = state_10214;(statearr_10234[12] = inst_10165);
(statearr_10234[13] = inst_10166);
(statearr_10234[11] = inst_10167);
return statearr_10234;
})();var statearr_10235_10270 = state_10214__$1;(statearr_10235_10270[2] = null);
(statearr_10235_10270[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 11))
{var inst_10185 = cmd.ui.reset_input_with_motd.call(null);var state_10214__$1 = state_10214;var statearr_10236_10271 = state_10214__$1;(statearr_10236_10271[2] = inst_10185);
(statearr_10236_10271[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 9))
{var inst_10175 = cmd.ui.load_initial_content.call(null);var state_10214__$1 = state_10214;var statearr_10237_10272 = state_10214__$1;(statearr_10237_10272[2] = inst_10175);
(statearr_10237_10272[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 5))
{var inst_10207 = (state_10214[2]);var state_10214__$1 = (function (){var statearr_10238 = state_10214;(statearr_10238[14] = inst_10207);
return statearr_10238;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10214__$1,18,app_bus);
} else
{if((state_val_10215 === 14))
{var inst_10192 = (state_10214[7]);var inst_10197 = inst_10192.call(null,"id");var inst_10198 = cmd.core.load_gist.call(null,inst_10197);var state_10214__$1 = state_10214;var statearr_10239_10273 = state_10214__$1;(statearr_10239_10273[2] = inst_10198);
(statearr_10239_10273[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 16))
{var inst_10201 = (state_10214[2]);var state_10214__$1 = state_10214;var statearr_10240_10274 = state_10214__$1;(statearr_10240_10274[2] = inst_10201);
(statearr_10240_10274[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 10))
{var inst_10171 = (state_10214[9]);var inst_10180 = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var inst_10181 = cmd.ui.set_input.call(null,inst_10171);var inst_10182 = cmd.ui.set_title.call(null,inst_10180);var inst_10183 = cmd.ui.set_location_hash.call(null,inst_10171);var state_10214__$1 = (function (){var statearr_10241 = state_10214;(statearr_10241[15] = inst_10182);
(statearr_10241[16] = inst_10181);
return statearr_10241;
})();var statearr_10242_10275 = state_10214__$1;(statearr_10242_10275[2] = inst_10183);
(statearr_10242_10275[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 18))
{var inst_10209 = (state_10214[2]);var inst_10167 = inst_10209;var state_10214__$1 = (function (){var statearr_10243 = state_10214;(statearr_10243[11] = inst_10167);
return statearr_10243;
})();var statearr_10244_10276 = state_10214__$1;(statearr_10244_10276[2] = null);
(statearr_10244_10276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10215 === 8))
{var inst_10172 = cmd.ui.load_initial_content.call(null);var inst_10173 = cmd.core.load_gists.call(null);var state_10214__$1 = (function (){var statearr_10245 = state_10214;(statearr_10245[17] = inst_10172);
return statearr_10245;
})();var statearr_10246_10277 = state_10214__$1;(statearr_10246_10277[2] = inst_10173);
(statearr_10246_10277[1] = 7);
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
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_10250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10250[0] = state_machine__5594__auto__);
(statearr_10250[1] = 1);
return statearr_10250;
});
var state_machine__5594__auto____1 = (function (state_10214){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_10214);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e10251){if((e10251 instanceof Object))
{var ex__5597__auto__ = e10251;var statearr_10252_10278 = state_10214;(statearr_10252_10278[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10214);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10279 = state_10214;
state_10214 = G__10279;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_10214){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_10214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_10253 = f__5609__auto__.call(null);(statearr_10253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_10253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.main = (function main(state,app_bus){var username = cmd.utils.getcookie.call(null,"username");var auth_token = cmd.utils.getcookie.call(null,"auth-token");var last_opened_gist_id = cmd.utils.getcookie.call(null,"last-gist");cmd.ui.subscribe_appbus.call(null,app_bus);
var worker_10280 = (new Worker("resources/public/js/worker.js"));cmd.core.set_state.call(null,state,new cljs.core.Keyword(null,"worker","worker",4526786288),worker_10280);
cmd.ui.setup_ace.call(null);
cmd.ui.setup_editor_listeners.call(null);
cmd.ui.setup_toolbar_listeners.call(null);
cmd.core.authenticate.call(null,username,auth_token);
return cmd.ui.render_toolbar.call(null,state);
});
cmd.ui.main.call(null,cmd.core.state,cmd.core.AppBus);

//# sourceMappingURL=ui.js.map