// Compiled by ClojureScript 0.0-2202
goog.provide('alandipert.storage_atom');
goog.require('cljs.core');
goog.require('tailrecursion.cljson');
goog.require('goog.Timer');
goog.require('goog.Timer');
goog.require('tailrecursion.cljson');
alandipert.storage_atom.IStorageBackend = (function (){var obj11791 = {};return obj11791;
})();
alandipert.storage_atom._get = (function _get(this$,not_found){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.alandipert$storage_atom$IStorageBackend$_get$arity$2;
} else
{return and__3469__auto__;
}
})())
{return this$.alandipert$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (alandipert.storage_atom._get[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (alandipert.storage_atom._get["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStorageBackend.-get",this$);
}
}
})().call(null,this$,not_found);
}
});
alandipert.storage_atom._commit_BANG_ = (function _commit_BANG_(this$,value){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (alandipert.storage_atom._commit_BANG_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (alandipert.storage_atom._commit_BANG_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStorageBackend.-commit!",this$);
}
}
})().call(null,this$,value);
}
});

/**
* @constructor
*/
alandipert.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
})
alandipert.storage_atom.StorageBackend.cljs$lang$type = true;
alandipert.storage_atom.StorageBackend.cljs$lang$ctorStr = "alandipert.storage-atom/StorageBackend";
alandipert.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"alandipert.storage-atom/StorageBackend");
});
alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$ = true;
alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){var self__ = this;
var this$__$1 = this;var temp__4124__auto__ = self__.store.getItem(tailrecursion.cljson.clj__GT_cljson.call(null,self__.key));if(cljs.core.truth_(temp__4124__auto__))
{var existing = temp__4124__auto__;return tailrecursion.cljson.cljson__GT_clj.call(null,existing);
} else
{return not_found;
}
});
alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){var self__ = this;
var this$__$1 = this;return self__.store.setItem(tailrecursion.cljson.clj__GT_cljson.call(null,self__.key),tailrecursion.cljson.clj__GT_cljson.call(null,value));
});
alandipert.storage_atom.__GT_StorageBackend = (function __GT_StorageBackend(store,key){return (new alandipert.storage_atom.StorageBackend(store,key));
});
/**
* Return a function that will always store a future call into the
* same atom. If recalled before the time is elapsed, the call is
* replaced without being executed.
*/
alandipert.storage_atom.debounce_factory = (function debounce_factory(){var f = cljs.core.atom.call(null,null);return ((function (f){
return (function (func,ttime){if(cljs.core.truth_(cljs.core.deref.call(null,f)))
{goog.Timer.clear(cljs.core.deref.call(null,f));
} else
{}
return cljs.core.reset_BANG_.call(null,f,goog.Timer.callOnce(func,ttime));
});
;})(f))
});
/**
* Delay in ms before a change is committed to the local storage. If a
* new change occurs before the time is elapsed, the old change is
* discarded an only the new one is committed.
*/
alandipert.storage_atom.storage_delay = cljs.core.atom.call(null,10);
alandipert.storage_atom._STAR_storage_delay_STAR_ = null;
alandipert.storage_atom._STAR_watch_active_STAR_ = true;
alandipert.storage_atom.store = (function store(atom,backend){var existing = alandipert.storage_atom._get.call(null,backend,new cljs.core.Keyword("alandipert.storage-atom","none","alandipert.storage-atom/none",4701931750));var debounce = alandipert.storage_atom.debounce_factory.call(null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword("alandipert.storage-atom","none","alandipert.storage-atom/none",4701931750),existing))
{alandipert.storage_atom._commit_BANG_.call(null,backend,cljs.core.deref.call(null,atom));
} else
{cljs.core.reset_BANG_.call(null,atom,existing);
}
var G__11797 = atom;cljs.core.add_watch.call(null,G__11797,new cljs.core.Keyword("alandipert.storage-atom","storage-watch","alandipert.storage-atom/storage-watch",2774820129),((function (G__11797,existing,debounce){
return (function (p1__11794_SHARP_,p2__11795_SHARP_,p3__11792_SHARP_,p4__11793_SHARP_){if(cljs.core.truth_((function (){var and__3469__auto__ = alandipert.storage_atom._STAR_watch_active_STAR_;if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.not_EQ_.call(null,p3__11792_SHARP_,p4__11793_SHARP_);
} else
{return and__3469__auto__;
}
})()))
{return debounce.call(null,((function (G__11797,existing,debounce){
return (function (){return alandipert.storage_atom._commit_BANG_.call(null,backend,p4__11793_SHARP_);
});})(G__11797,existing,debounce))
,(function (){var or__3481__auto__ = alandipert.storage_atom._STAR_storage_delay_STAR_;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.deref.call(null,alandipert.storage_atom.storage_delay);
}
})());
} else
{return null;
}
});})(G__11797,existing,debounce))
);
return G__11797;
});
alandipert.storage_atom.maybe_load_backend = (function maybe_load_backend(atom,k,e){if(cljs.core.truth_(cljs.core.not_empty.call(null,e.key)))
{var temp__4126__auto__ = tailrecursion.cljson.cljson__GT_clj.call(null,e.key);if(cljs.core.truth_(temp__4126__auto__))
{var sk = temp__4126__auto__;if(cljs.core._EQ_.call(null,sk,k))
{var value = tailrecursion.cljson.cljson__GT_clj.call(null,e.newValue);var _STAR_watch_active_STAR_11799 = alandipert.storage_atom._STAR_watch_active_STAR_;try{alandipert.storage_atom._STAR_watch_active_STAR_ = false;
return cljs.core.reset_BANG_.call(null,atom,value);
}finally {alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR_11799;
}} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
alandipert.storage_atom.link_storage = (function link_storage(atom,k){return window.addEventListener("storage",(function (p1__11800_SHARP_){return alandipert.storage_atom.maybe_load_backend.call(null,atom,k,p1__11800_SHARP_);
}));
});
alandipert.storage_atom.load_html_storage = (function load_html_storage(storage,k){return alandipert.storage_atom._get.call(null,(new alandipert.storage_atom.StorageBackend(storage,k)),null);
});
alandipert.storage_atom.load_local_storage = (function load_local_storage(k){return alandipert.storage_atom.load_html_storage.call(null,localStorage,k);
});
alandipert.storage_atom.load_session_storage = (function load_session_storage(k){return alandipert.storage_atom.load_html_storage.call(null,sessionStorage,k);
});
alandipert.storage_atom.html_storage = (function html_storage(atom,storage,k){alandipert.storage_atom.link_storage.call(null,atom,k);
return alandipert.storage_atom.store.call(null,atom,(new alandipert.storage_atom.StorageBackend(storage,k)));
});
alandipert.storage_atom.local_storage = (function local_storage(atom,k){return alandipert.storage_atom.html_storage.call(null,atom,localStorage,k);
});
alandipert.storage_atom.session_storage = (function session_storage(atom,k){return alandipert.storage_atom.html_storage.call(null,atom,sessionStorage,k);
});

//# sourceMappingURL=storage_atom.js.map