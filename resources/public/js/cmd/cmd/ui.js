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
cljs.core._STAR_print_fn_STAR_ = (function (p1__9781_SHARP_){return console.log(p1__9781_SHARP_);
});
cmd.ui.motd = "# Welcome to mCMD\n\nIt is an explosive mixture of ***ClojureScript, Rx, React/Om, core.async, github CORS api, ace, pagedown, web worker(s)*** crafted together to give you *the best* gist editing tool, ever.\nIt's currently an alfa-quality prototype, so do not expect to much.\n\n\nTo begin:\n\n- just provide your Github username and a *secret*,\n- or select a gist from the list above if you are logged in already :-)\n\n```\n(println \"Heil Clojure!\")\n```\n";
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
cmd.ui.input = cmd.ui.$.call(null,"editor");
cmd.ui.preview = cmd.ui.$.call(null,"preview");
cmd.ui.preview_container = cmd.ui.$.call(null,"preview-container");
cmd.ui.ace_set_value = (function ace_set_value(content){return cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"ace","ace",1014000629)).getSession().setValue(content);
});
cmd.ui.set_input = (function set_input(gist_id){var gist = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist","current-gist",2436253193));var vec__9783 = cljs.core.first.call(null,gist.call(null,"files"));var _ = cljs.core.nth.call(null,vec__9783,0,null);var first_file = cljs.core.nth.call(null,vec__9783,1,null);var content = first_file.call(null,"content");return cmd.ui.ace_set_value.call(null,content);
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
var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9803){var state_val_9804 = (state_9803[1]);if((state_val_9804 === 2))
{var inst_9801 = (state_9803[2]);var state_9803__$1 = state_9803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9803__$1,inst_9801);
} else
{if((state_val_9804 === 1))
{var inst_9798 = [new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),true];var inst_9799 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9798,null));var state_9803__$1 = state_9803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9803__$1,2,cmd.core.AppBus,inst_9799);
} else
{return null;
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9808 = [null,null,null,null,null,null,null];(statearr_9808[0] = state_machine__6277__auto__);
(statearr_9808[1] = 1);
return statearr_9808;
});
var state_machine__6277__auto____1 = (function (state_9803){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9803);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9809){if((e9809 instanceof Object))
{var ex__6280__auto__ = e9809;var statearr_9810_9812 = state_9803;(statearr_9810_9812[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9813 = state_9803;
state_9803 = G__9813;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9803){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9811 = f__6292__auto__.call(null);(statearr_9811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cmd.ui.handle_select = (function handle_select(e){var selected_id = e.target.value;cmd.core.set_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"current-gist-id","current-gist-id",4359175043),selected_id);
return cmd.core.load_gist.call(null,selected_id);
});
cmd.ui.handle_auth = (function handle_auth(e){var username = cmd.ui.$.call(null,"username").value;var auth_token = cmd.ui.$.call(null,"auth-token").value;return cmd.core.authenticate.call(null,username,auth_token);
});
cmd.ui.toolbar = (function toolbar(state,owner){if(typeof cmd.ui.t9817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cmd.ui.t9817 = (function (owner,state,toolbar,meta9818){
this.owner = owner;
this.state = state;
this.toolbar = toolbar;
this.meta9818 = meta9818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cmd.ui.t9817.cljs$lang$type = true;
cmd.ui.t9817.cljs$lang$ctorStr = "cmd.ui/t9817";
cmd.ui.t9817.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cmd.ui/t9817");
});
cmd.ui.t9817.prototype.om$core$IRender$ = true;
cmd.ui.t9817.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
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
cmd.ui.t9817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9819){var self__ = this;
var _9819__$1 = this;return self__.meta9818;
});
cmd.ui.t9817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9819,meta9818__$1){var self__ = this;
var _9819__$1 = this;return (new cmd.ui.t9817(self__.owner,self__.state,self__.toolbar,meta9818__$1));
});
cmd.ui.__GT_t9817 = (function __GT_t9817(owner__$1,state__$1,toolbar__$1,meta9818){return (new cmd.ui.t9817(owner__$1,state__$1,toolbar__$1,meta9818));
});
}
return (new cmd.ui.t9817(owner,state,toolbar,null));
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
return (function (ev){var and__3469__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3469__auto__))
{return (ev.clientY < 10);
} else
{return and__3469__auto__;
}
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
).subscribe(((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (){return cmd.ui.slide_down.call(null,toolbar);
});})(toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler))
);
return Rx.Observable.fromEvent(document,"mousemove").throttle(50).filter(((function (toolbar_toggler,editor_toggler,toolbar,preview,editor,preview_toggler){
return (function (ev){var and__3469__auto__ = cmd.core.get_state.call(null,cmd.core.state,new cljs.core.Keyword(null,"toolbar-autohide","toolbar-autohide",2185949429));if(cljs.core.truth_(and__3469__auto__))
{return (ev.clientY > 10);
} else
{return and__3469__auto__;
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
return (function (p1__9820_SHARP_){return observer.onNext(p1__9820_SHARP_);
});})(editor,session))
);
});})(editor,session))
).throttle(15).subscribe(((function (editor,session){
return (function (p1__9821_SHARP_){return cmd.ui.preview_container.scrollTop = cmd.ui.calc_offset_top_preview.call(null,p1__9821_SHARP_);
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
cmd.ui.subscribe_appbus = (function subscribe_appbus(app_bus){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_9896){var state_val_9897 = (state_9896[1]);if((state_val_9897 === 9))
{var inst_9891 = (state_9896[2]);var inst_9877 = inst_9891;var state_9896__$1 = (function (){var statearr_9898 = state_9896;(statearr_9898[7] = inst_9877);
return statearr_9898;
})();var statearr_9899_9918 = state_9896__$1;(statearr_9899_9918[2] = null);
(statearr_9899_9918[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 8))
{var inst_9886 = cmd.ui.reset_input.call(null);var state_9896__$1 = state_9896;var statearr_9900_9919 = state_9896__$1;(statearr_9900_9919[2] = inst_9886);
(statearr_9900_9919[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 7))
{var inst_9881 = (state_9896[8]);var inst_9884 = cmd.ui.set_input.call(null,inst_9881);var state_9896__$1 = state_9896;var statearr_9901_9920 = state_9896__$1;(statearr_9901_9920[2] = inst_9884);
(statearr_9901_9920[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 6))
{var inst_9882 = cmd.core.load_gists.call(null);var state_9896__$1 = state_9896;var statearr_9902_9921 = state_9896__$1;(statearr_9902_9921[2] = inst_9882);
(statearr_9902_9921[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 5))
{var inst_9889 = (state_9896[2]);var state_9896__$1 = (function (){var statearr_9903 = state_9896;(statearr_9903[9] = inst_9889);
return statearr_9903;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9896__$1,9,app_bus);
} else
{if((state_val_9897 === 4))
{var inst_9894 = (state_9896[2]);var state_9896__$1 = state_9896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9896__$1,inst_9894);
} else
{if((state_val_9897 === 3))
{var inst_9877 = (state_9896[7]);var inst_9880 = cljs.core.nth.call(null,inst_9877,0,null);var inst_9881 = cljs.core.nth.call(null,inst_9877,1,null);var state_9896__$1 = (function (){var statearr_9904 = state_9896;(statearr_9904[8] = inst_9881);
return statearr_9904;
})();var G__9905_9922 = inst_9880;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__9905_9922))
{var statearr_9906_9923 = state_9896__$1;(statearr_9906_9923[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9905_9922))
{var statearr_9907_9924 = state_9896__$1;(statearr_9907_9924[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9905_9922))
{var statearr_9908_9925 = state_9896__$1;(statearr_9908_9925[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9880)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 2))
{var inst_9874 = (state_9896[2]);var inst_9875 = cljs.core.nth.call(null,inst_9874,0,null);var inst_9876 = cljs.core.nth.call(null,inst_9874,1,null);var inst_9877 = inst_9874;var state_9896__$1 = (function (){var statearr_9909 = state_9896;(statearr_9909[10] = inst_9876);
(statearr_9909[11] = inst_9875);
(statearr_9909[7] = inst_9877);
return statearr_9909;
})();var statearr_9910_9926 = state_9896__$1;(statearr_9910_9926[2] = null);
(statearr_9910_9926[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 1))
{var state_9896__$1 = state_9896;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9896__$1,2,app_bus);
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
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_9914 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9914[0] = state_machine__6277__auto__);
(statearr_9914[1] = 1);
return statearr_9914;
});
var state_machine__6277__auto____1 = (function (state_9896){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_9896);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e9915){if((e9915 instanceof Object))
{var ex__6280__auto__ = e9915;var statearr_9916_9927 = state_9896;(statearr_9916_9927[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9896);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9928 = state_9896;
state_9896 = G__9928;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_9896){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_9896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_9917 = f__6292__auto__.call(null);(statearr_9917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_9917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
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