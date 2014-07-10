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
cljs.core._STAR_print_fn_STAR_ = (function (p1__9751_SHARP_){return console.log(p1__9751_SHARP_);
});
cmd.ui.motd = "# Welcome to mCMD\n\nIt is an explosive mixture of ***ClojureScript, Rx, React/Om, core.async, github CORS api, ace, pagedown, web worker(s)*** crafted together to give you *the best* gist editing tool, ever.\nIt's currently an alfa-quality prototype, so do not expect to much.\n\n\nTo begin:\n\n- just provide your Github username and a *secret*,\n- or select a gist from the list above if you are logged in already :-)\n\n```\n(println \"Heil Clojure!\")\n```\n";
cmd.ui.input = document.getElementById("editor");
cmd.ui.preview = document.getElementById("preview");
cmd.ui.preview_container = document.getElementById("preview-container");
cmd.ui.ace_set_value = (function ace_set_value(content){return cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9753 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9753,0,null);var first_file = cljs.core.nth.call(null,vec__9753,1,null);var content = first_file.call(null,"content");return cmd.ui.ace_set_value.call(null,content);
});
cmd.ui.reset_input = (function reset_input(){return cmd.ui.ace_set_value.call(null,cmd.ui.motd);
});
cmd.ui.process_cb = (function process_cb(value){return cmd.utils.html_BANG_.call(null,cmd.ui.preview,value);
});
cmd.ui.set_preview = (function set_preview(){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var ace_value = ace.getSession().getValue();return cmd.core.process.call(null,ace_value,cmd.ui.process_cb);
});
cmd.ui.handle_pull = (function handle_pull(_){return cmd.core.load_gist.call(null,cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043)));
});
cmd.ui.handle_push = (function handle_push(_){var ace = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var md_raw = ace.getSession().getValue();var gist_id = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043));var file_name = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var new_content = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",3584325486),file_name,new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,file_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),md_raw], null)], true, false)], null);var result = cmd.core.save_gist.call(null,gist_id,new_content);return cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193),result);
});
cmd.ui.handle_logout = (function handle_logout(_){cmd.utils.say.call(null,"Bye bye");
cmd.core.reset_state.call(null,cmd.core.state);
cmd.utils.setcookie.call(null,"username","");
cmd.utils.setcookie.call(null,"auth-token","");
var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9773){var state_val_9774 = (state_9773[1]);if((state_val_9774 === 2))
{var inst_9771 = (state_9773[2]);var state_9773__$1 = state_9773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9773__$1,inst_9771);
} else
{if((state_val_9774 === 1))
{var inst_9768 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_9769 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9768,null));var state_9773__$1 = state_9773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9773__$1,2,cmd.core.AppBus,inst_9769);
} else
{return null;
}
}
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9778 = [null,null,null,null,null,null,null];(statearr_9778[0] = state_machine__5594__auto__);
(statearr_9778[1] = 1);
return statearr_9778;
});
var state_machine__5594__auto____1 = (function (state_9773){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9779){if((e9779 instanceof Object))
{var ex__5597__auto__ = e9779;var statearr_9780_9782 = state_9773;(statearr_9780_9782[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9783 = state_9773;
state_9773 = G__9783;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9773){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9781 = f__5609__auto__.call(null);(statearr_9781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});
cmd.ui.handle_select = (function handle_select(e){var selected_id = e.target.value;cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),selected_id);
return cmd.core.load_gist.call(null,selected_id);
});
cmd.ui.handle_auth = (function handle_auth(e){var username = document.getElementById("username").value;var auth_token = document.getElementById("auth-token").value;return cmd.core.authenticate.call(null,username,auth_token);
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t9787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9787 = (function (owner,state,toolbar,meta9788){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta9788 = meta9788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9787.cljs$lang$type = true;
cmd.ui.t9787.cljs$lang$ctorStr = "cmd.ui/t9787";
cmd.ui.t9787.cljs$lang$ctorPrWriter = (function (this__4018__auto__,writer__4019__auto__,opt__4020__auto__){return cljs.core._write.call(null,writer__4019__auto__,"cmd.ui/t9787");
});
cmd.ui.t9787.prototype.om$core$IRender$ = true;
cmd.ui.t9787.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cmd.core.authenticated_om_QMARK_.call(null,self__.state)))
{return React.DOM.div(null,React.DOM.label({"className": "ios7"},"SELECT_G!ST: "),React.DOM.div({"id": "gist-list"},cljs.core.apply.call(null,om.dom.select,{"onChange": cmd.ui.handle_select, "title": "Select a gist for a good start :-)", "className": "hello"},cljs.core.map.call(null,((function (___$1){
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
cmd.ui.t9787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9789){var self__ = this;
var _9789__$1 = this;return self__.meta9788;
});
cmd.ui.t9787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9789,meta9788__$1){var self__ = this;
var _9789__$1 = this;return (new cmd.ui.t9787(self__.owner,self__.state,self__.toolbar,meta9788__$1));
});
cmd.ui.__GT_t9787 = (function __GT_t9787(owner__$1,state__$1,toolbar__$1,meta9788){return (new cmd.ui.t9787(owner__$1,state__$1,toolbar__$1,meta9788));
});
}
return (new cmd.ui.t9787(owner,state,toolbar,null));
});
cmd.ui.render_toolbar = (function render_toolbar(state){return om.core.root.call(null,cmd.ui.toolbar,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("toolbar")], null));
});
cmd.ui.$ = (function $(id_str){return document.getElementById(id_str);
});
cmd.ui.visible_QMARK_ = (function visible_QMARK_(el){return goog.style.isElementShown(el);
});
cmd.ui.set_width = (function set_width(el,width){return el.style.width = width;
});
cmd.ui.toggle = (function toggle(el){return goog.style.showElement(el,cljs.core.not.call(null,cmd.ui.visible_QMARK_.call(null,el)));
});
cmd.ui.show = (function show(el){if(cljs.core.not.call(null,cmd.ui.visible_QMARK_.call(null,el)))
{return goog.style.showElement(el,true);
} else
{return null;
}
});
cmd.ui.setup_toolbar_listeners = (function setup_toolbar_listeners(){var toolbar_toggler = cmd.ui.$.call(null,"toolbar-toggler");var editor_toggler = cmd.ui.$.call(null,"editor-toggler");var toolbar = cmd.ui.$.call(null,"toolbar");var preview = cmd.ui.$.call(null,"preview-container");var preview_container = cmd.ui.$.call(null,"outer-preview-container");var editor = cmd.ui.$.call(null,"input");var preview_toggler = cmd.ui.$.call(null,"preview-toggler");Rx.Observable.fromEvent(toolbar_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler){
return (function (){return cmd.ui.toggle.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler))
);
Rx.Observable.fromEvent(preview_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler){
return (function (){cmd.ui.toggle.call(null,preview);
if(cljs.core.truth_(cmd.ui.visible_QMARK_.call(null,preview)))
{return cmd.ui.set_width.call(null,preview_container,"49%");
} else
{return cmd.ui.set_width.call(null,preview_container,"20px");
}
});})(toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler))
);
Rx.Observable.fromEvent(editor_toggler,"click").subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler){
return (function (){return cmd.ui.toggle.call(null,editor);
});})(toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler))
);
return Rx.Observable.fromEvent(document,"mousemove").throttle(5).filter(((function (toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler){
return (function (ev){return (ev.clientY < 20);
});})(toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler){
return (function (){return cmd.ui.show.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,toolbar,preview,preview_container,editor,preview_toggler))
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
return (function (p1__9790_SHARP_){return observer.onNext(p1__9790_SHARP_);
});})(editor,session))
);
});})(editor,session))
).throttle(15).subscribe(((function (editor,session){
return (function (p1__9791_SHARP_){return cmd.ui.preview_container.scrollTop = cmd.ui.calc_offset_top_preview.call(null,p1__9791_SHARP_);
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
return (function (state_9866){var state_val_9867 = (state_9866[1]);if((state_val_9867 === 9))
{var inst_9861 = (state_9866[2]);var inst_9847 = inst_9861;var state_9866__$1 = (function (){var statearr_9868 = state_9866;(statearr_9868[7] = inst_9847);
return statearr_9868;
})();var statearr_9869_9888 = state_9866__$1;(statearr_9869_9888[2] = null);
(statearr_9869_9888[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 8))
{var inst_9856 = cmd.ui.reset_input.call(null);var state_9866__$1 = state_9866;var statearr_9870_9889 = state_9866__$1;(statearr_9870_9889[2] = inst_9856);
(statearr_9870_9889[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 7))
{var inst_9851 = (state_9866[8]);var inst_9854 = cmd.ui.set_input.call(null,inst_9851);var state_9866__$1 = state_9866;var statearr_9871_9890 = state_9866__$1;(statearr_9871_9890[2] = inst_9854);
(statearr_9871_9890[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 6))
{var inst_9852 = cmd.core.load_gists.call(null);var state_9866__$1 = state_9866;var statearr_9872_9891 = state_9866__$1;(statearr_9872_9891[2] = inst_9852);
(statearr_9872_9891[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 5))
{var inst_9859 = (state_9866[2]);var state_9866__$1 = (function (){var statearr_9873 = state_9866;(statearr_9873[9] = inst_9859);
return statearr_9873;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9866__$1,9,app_bus);
} else
{if((state_val_9867 === 4))
{var inst_9864 = (state_9866[2]);var state_9866__$1 = state_9866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9866__$1,inst_9864);
} else
{if((state_val_9867 === 3))
{var inst_9847 = (state_9866[7]);var inst_9850 = cljs.core.nth.call(null,inst_9847,0,null);var inst_9851 = cljs.core.nth.call(null,inst_9847,1,null);var state_9866__$1 = (function (){var statearr_9874 = state_9866;(statearr_9874[8] = inst_9851);
return statearr_9874;
})();var G__9875_9892 = inst_9850;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__9875_9892))
{var statearr_9876_9893 = state_9866__$1;(statearr_9876_9893[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9875_9892))
{var statearr_9877_9894 = state_9866__$1;(statearr_9877_9894[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9875_9892))
{var statearr_9878_9895 = state_9866__$1;(statearr_9878_9895[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9850)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 2))
{var inst_9844 = (state_9866[2]);var inst_9845 = cljs.core.nth.call(null,inst_9844,0,null);var inst_9846 = cljs.core.nth.call(null,inst_9844,1,null);var inst_9847 = inst_9844;var state_9866__$1 = (function (){var statearr_9879 = state_9866;(statearr_9879[10] = inst_9845);
(statearr_9879[7] = inst_9847);
(statearr_9879[11] = inst_9846);
return statearr_9879;
})();var statearr_9880_9896 = state_9866__$1;(statearr_9880_9896[2] = null);
(statearr_9880_9896[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 1))
{var state_9866__$1 = state_9866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9866__$1,2,app_bus);
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
var state_machine__5594__auto____0 = (function (){var statearr_9884 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9884[0] = state_machine__5594__auto__);
(statearr_9884[1] = 1);
return statearr_9884;
});
var state_machine__5594__auto____1 = (function (state_9866){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9866);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9885){if((e9885 instanceof Object))
{var ex__5597__auto__ = e9885;var statearr_9886_9897 = state_9866;(statearr_9886_9897[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9866);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9898 = state_9866;
state_9866 = G__9898;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9866){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9887 = f__5609__auto__.call(null);(statearr_9887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9887;
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