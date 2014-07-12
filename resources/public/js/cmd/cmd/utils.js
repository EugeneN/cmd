// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.utils');
goog.require('cljs.core');
goog.require('goog.net.cookies');
goog.require('goog.net.cookies');
cmd.utils.html_BANG_ = (function html_BANG_(node,html){return node.innerHTML = html;
});
cmd.utils.join_gist_names = (function join_gist_names(file_keys){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," <*> ",file_keys));
});
cmd.utils.raw__GT_clj = (function raw__GT_clj(raw){var json = JSON.parse(raw);var clj = cljs.core.js__GT_clj.call(null,json);return clj;
});
cmd.utils.setcookie = (function setcookie(name,value){return goog.net.cookies.set(name,value,-1);
});
cmd.utils.getcookie = (function getcookie(name){return goog.net.cookies.get(name);
});

//# sourceMappingURL=utils.js.map