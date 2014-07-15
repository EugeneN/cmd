// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.utils');
goog.require('cljs.core');
cmd.utils.html_BANG_ = (function html_BANG_(node,html){return node.innerHTML = html;
});
cmd.utils.join_gist_names = (function join_gist_names(file_keys){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," <*> ",file_keys));
});
cmd.utils.raw__GT_clj = (function raw__GT_clj(raw){var json = JSON.parse(raw);var clj = cljs.core.js__GT_clj.call(null,json);return clj;
});

//# sourceMappingURL=utils.js.map