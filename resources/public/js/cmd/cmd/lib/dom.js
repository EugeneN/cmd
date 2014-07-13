// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.lib.dom');
goog.require('cljs.core');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.net.cookies');
goog.require('goog.net.cookies');
cmd.lib.dom.$ = (function $(id_str){return document.getElementById(id_str);
});
cmd.lib.dom.visible_QMARK_ = (function visible_QMARK_(el){return $(el).is(":visible");
});
cmd.lib.dom.set_width = (function set_width(el,width){return el.style.width = width;
});
cmd.lib.dom.show = (function show(el){if(cljs.core.not.call(null,cmd.lib.dom.visible_QMARK_.call(null,el)))
{return goog.style.showElement(el,true);
} else
{return null;
}
});
cmd.lib.dom.hide = (function hide(el){if(cljs.core.truth_(cmd.lib.dom.visible_QMARK_.call(null,el)))
{return goog.style.showElement(el,false);
} else
{return null;
}
});
cmd.lib.dom.slide_up = (function slide_up(el){return $(el).slideUp(200);
});
cmd.lib.dom.slide_down = (function slide_down(el){return $(el).slideDown(200);
});
cmd.lib.dom.toggle_slide_left = (function toggle_slide_left(el){return $(el).toggle({"direction": "left", "duration": 200, "effect": "slide"});
});
cmd.lib.dom.toggle_slide_right = (function toggle_slide_right(el){return $(el).toggle({"direction": "right", "duration": 200, "effect": "slide"});
});
cmd.lib.dom.toggle = (function() {
var toggle = null;
var toggle__1 = (function (el){return $(el).slideToggle(200);
});
var toggle__2 = (function (el,complete_cb){return $(el).slideToggle(200,complete_cb);
});
toggle = function(el,complete_cb){
switch(arguments.length){
case 1:
return toggle__1.call(this,el);
case 2:
return toggle__2.call(this,el,complete_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle.cljs$core$IFn$_invoke$arity$1 = toggle__1;
toggle.cljs$core$IFn$_invoke$arity$2 = toggle__2;
return toggle;
})()
;
cmd.lib.dom.html_BANG_ = (function html_BANG_(node,html){return node.innerHTML = html;
});
cmd.lib.dom.setcookie = (function setcookie(name,value){return goog.net.cookies.set(name,value,-1);
});
cmd.lib.dom.getcookie = (function getcookie(name){return goog.net.cookies.get(name);
});

//# sourceMappingURL=dom.js.map