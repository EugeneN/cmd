// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.globals');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cmd.globals.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-requests","active-requests",3616398877),0,new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"plugins","plugins",538274578),cljs.core.PersistentVector.EMPTY], null));
cmd.globals.AppBus = cljs.core.async.chan.call(null,1);

//# sourceMappingURL=globals.js.map