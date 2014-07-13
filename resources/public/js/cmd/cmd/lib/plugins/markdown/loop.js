// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.lib.plugins.markdown.loop');
goog.require('cljs.core');
goog.require('cmd.globals');
goog.require('cmd.plugins.markdown.core');
goog.require('cmd.lib.dom');
goog.require('cmd.lib.utils');
goog.require('cljs.core.async');
goog.require('cmd.lib.dom');
goog.require('cljs.core.async');
goog.require('cmd.globals');
goog.require('cmd.plugins.markdown.core');
goog.require('cmd.lib.utils');
cmd.lib.plugins.markdown.loop.subscribe_appbus = (function subscribe_appbus(app_bus){var c__5608__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5608__auto__){
return (function (){var f__5609__auto__ = (function (){var switch__5593__auto__ = ((function (c__5608__auto__){
return (function (state_9433){var state_val_9434 = (state_9433[1]);if((state_val_9434 === 7))
{var inst_9383 = (state_9433[2]);var state_9433__$1 = state_9433;var statearr_9435_9481 = state_9433__$1;(statearr_9435_9481[2] = inst_9383);
(statearr_9435_9481[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 20))
{var inst_9420 = (state_9433[2]);var state_9433__$1 = state_9433;var statearr_9436_9482 = state_9433__$1;(statearr_9436_9482[2] = inst_9420);
(statearr_9436_9482[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 1))
{var state_9433__$1 = state_9433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9433__$1,2,app_bus);
} else
{if((state_val_9434 === 4))
{var inst_9431 = (state_9433[2]);var state_9433__$1 = state_9433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9433__$1,inst_9431);
} else
{if((state_val_9434 === 15))
{var state_9433__$1 = state_9433;var statearr_9437_9483 = state_9433__$1;(statearr_9437_9483[2] = null);
(statearr_9437_9483[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 21))
{var inst_9375 = (state_9433[7]);var inst_9376 = (state_9433[8]);var inst_9422 = [cljs.core.str("Unknown message from AppBus: "),cljs.core.str(inst_9375),cljs.core.str(" : "),cljs.core.str(inst_9376)].join('');var inst_9423 = cmd.lib.utils.say.call(null,inst_9422);var state_9433__$1 = state_9433;var statearr_9438_9484 = state_9433__$1;(statearr_9438_9484[2] = inst_9423);
(statearr_9438_9484[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 13))
{var inst_9397 = (state_9433[9]);var inst_9395 = cmd.plugins.markdown.core.get_gist_id_from_location_hash.call(null);var inst_9396 = cmd.plugins.markdown.core.find_gist.call(null,cmd.globals.state,inst_9395);var inst_9397__$1 = cljs.core.nth.call(null,inst_9396,0,null);var inst_9398 = cljs.core.nthnext.call(null,inst_9396,1);var inst_9399 = (inst_9397__$1 == null);var inst_9400 = cljs.core.not.call(null,inst_9399);var state_9433__$1 = (function (){var statearr_9439 = state_9433;(statearr_9439[9] = inst_9397__$1);
(statearr_9439[10] = inst_9398);
return statearr_9439;
})();if(inst_9400)
{var statearr_9440_9485 = state_9433__$1;(statearr_9440_9485[1] = 14);
} else
{var statearr_9441_9486 = state_9433__$1;(statearr_9441_9486[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 22))
{var inst_9428 = (state_9433[2]);var inst_9372 = inst_9428;var state_9433__$1 = (function (){var statearr_9442 = state_9433;(statearr_9442[11] = inst_9372);
return statearr_9442;
})();var statearr_9443_9487 = state_9433__$1;(statearr_9443_9487[2] = null);
(statearr_9443_9487[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 6))
{var inst_9376 = (state_9433[8]);var state_9433__$1 = state_9433;var G__9444_9488 = inst_9376;if(cljs.core._EQ_.call(null,false,G__9444_9488))
{var statearr_9445_9489 = state_9433__$1;(statearr_9445_9489[1] = 9);
} else
{if(cljs.core._EQ_.call(null,true,G__9444_9488))
{var statearr_9446_9490 = state_9433__$1;(statearr_9446_9490[1] = 8);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_9376)].join('')));
} else
{}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 17))
{var inst_9408 = (state_9433[12]);var inst_9375 = (state_9433[7]);var inst_9408__$1 = cmd.lib.plugins.markdown.loop.$.call(null,"console");var inst_9409 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"messages","messages",551810238));var inst_9410 = cljs.core.conj.call(null,inst_9409,inst_9375);var inst_9411 = cmd.lib.utils.set_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"messages","messages",551810238),inst_9410);var inst_9412 = cmd.lib.dom.visible_QMARK_.call(null,inst_9408__$1);var inst_9413 = cljs.core.not.call(null,inst_9412);var state_9433__$1 = (function (){var statearr_9447 = state_9433;(statearr_9447[13] = inst_9411);
(statearr_9447[12] = inst_9408__$1);
return statearr_9447;
})();if(inst_9413)
{var statearr_9448_9491 = state_9433__$1;(statearr_9448_9491[1] = 18);
} else
{var statearr_9449_9492 = state_9433__$1;(statearr_9449_9492[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 3))
{var inst_9372 = (state_9433[11]);var inst_9375 = (state_9433[7]);var inst_9375__$1 = cljs.core.nth.call(null,inst_9372,0,null);var inst_9376 = cljs.core.nth.call(null,inst_9372,1,null);var state_9433__$1 = (function (){var statearr_9450 = state_9433;(statearr_9450[7] = inst_9375__$1);
(statearr_9450[8] = inst_9376);
return statearr_9450;
})();var G__9451_9493 = inst_9375__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-console-msg","new-console-msg",3153444048),G__9451_9493))
{var statearr_9452_9494 = state_9433__$1;(statearr_9452_9494[1] = 17);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gists-loaded","gists-loaded",4427787732),G__9451_9493))
{var statearr_9453_9495 = state_9433__$1;(statearr_9453_9495[1] = 13);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"motd-loaded","motd-loaded",1538034194),G__9451_9493))
{var statearr_9454_9496 = state_9433__$1;(statearr_9454_9496[1] = 12);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-has-logged-out","user-has-logged-out",2079646538),G__9451_9493))
{var statearr_9455_9497 = state_9433__$1;(statearr_9455_9497[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gist-loaded","gist-loaded",4536537537),G__9451_9493))
{var statearr_9456_9498 = state_9433__$1;(statearr_9456_9498[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-is-authenticated","user-is-authenticated",3919945216),G__9451_9493))
{var statearr_9457_9499 = state_9433__$1;(statearr_9457_9499[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_9458_9500 = state_9433__$1;(statearr_9458_9500[1] = 21);
} else
{}
}
}
}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 12))
{var inst_9392 = cmd.plugins.markdown.core.reset_input_with_motd.call(null);var state_9433__$1 = state_9433;var statearr_9459_9501 = state_9433__$1;(statearr_9459_9501[2] = inst_9392);
(statearr_9459_9501[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 2))
{var inst_9369 = (state_9433[14]);var inst_9369__$1 = (state_9433[2]);var inst_9370 = cljs.core.nth.call(null,inst_9369__$1,0,null);var inst_9371 = cljs.core.nth.call(null,inst_9369__$1,1,null);var inst_9372 = inst_9369__$1;var state_9433__$1 = (function (){var statearr_9460 = state_9433;(statearr_9460[15] = inst_9371);
(statearr_9460[14] = inst_9369__$1);
(statearr_9460[11] = inst_9372);
(statearr_9460[16] = inst_9370);
return statearr_9460;
})();var statearr_9461_9502 = state_9433__$1;(statearr_9461_9502[2] = null);
(statearr_9461_9502[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 19))
{var state_9433__$1 = state_9433;var statearr_9462_9503 = state_9433__$1;(statearr_9462_9503[2] = null);
(statearr_9462_9503[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 11))
{var inst_9390 = cmd.plugins.markdown.core.reset_input_with_motd.call(null);var state_9433__$1 = state_9433;var statearr_9463_9504 = state_9433__$1;(statearr_9463_9504[2] = inst_9390);
(statearr_9463_9504[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 9))
{var inst_9380 = cmd.plugins.markdown.core.load_initial_content.call(null);var state_9433__$1 = state_9433;var statearr_9464_9505 = state_9433__$1;(statearr_9464_9505[2] = inst_9380);
(statearr_9464_9505[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 5))
{var inst_9426 = (state_9433[2]);var state_9433__$1 = (function (){var statearr_9465 = state_9433;(statearr_9465[17] = inst_9426);
return statearr_9465;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9433__$1,22,app_bus);
} else
{if((state_val_9434 === 14))
{var inst_9397 = (state_9433[9]);var inst_9402 = inst_9397.call(null,"id");var inst_9403 = cmd.plugins.markdown.core.load_gist.call(null,inst_9402);var state_9433__$1 = state_9433;var statearr_9466_9506 = state_9433__$1;(statearr_9466_9506[2] = inst_9403);
(statearr_9466_9506[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 16))
{var inst_9406 = (state_9433[2]);var state_9433__$1 = state_9433;var statearr_9467_9507 = state_9433__$1;(statearr_9467_9507[2] = inst_9406);
(statearr_9467_9507[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 10))
{var inst_9376 = (state_9433[8]);var inst_9385 = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"current-file-id","current-file-id",3464759850));var inst_9386 = cmd.plugins.markdown.core.set_input.call(null,inst_9376);var inst_9387 = cmd.plugins.markdown.core.set_title.call(null,inst_9385);var inst_9388 = cmd.plugins.markdown.core.set_location_hash_gist_id.call(null,inst_9376);var state_9433__$1 = (function (){var statearr_9468 = state_9433;(statearr_9468[18] = inst_9387);
(statearr_9468[19] = inst_9386);
return statearr_9468;
})();var statearr_9469_9508 = state_9433__$1;(statearr_9469_9508[2] = inst_9388);
(statearr_9469_9508[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 18))
{var inst_9408 = (state_9433[12]);var inst_9369 = (state_9433[14]);var inst_9372 = (state_9433[11]);var inst_9375 = (state_9433[7]);var inst_9376 = (state_9433[8]);var inst_9415 = cmd.lib.dom.toggle.call(null,inst_9408);var inst_9416 = (function (){var console = inst_9408;var vec__9374 = inst_9372;var payload = inst_9376;var msg = inst_9375;var vec__9367 = inst_9369;var G__9366 = inst_9372;return ((function (console,vec__9374,payload,msg,vec__9367,G__9366,inst_9408,inst_9369,inst_9372,inst_9375,inst_9376,inst_9415,state_val_9434,c__5608__auto__){
return (function (){return cmd.lib.dom.toggle.call(null,console);
});
;})(console,vec__9374,payload,msg,vec__9367,G__9366,inst_9408,inst_9369,inst_9372,inst_9375,inst_9376,inst_9415,state_val_9434,c__5608__auto__))
})();var inst_9417 = setTimeout(inst_9416,2000);var state_9433__$1 = (function (){var statearr_9470 = state_9433;(statearr_9470[20] = inst_9415);
return statearr_9470;
})();var statearr_9471_9509 = state_9433__$1;(statearr_9471_9509[2] = inst_9417);
(statearr_9471_9509[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9434 === 8))
{var inst_9377 = cmd.plugins.markdown.core.load_initial_content.call(null);var inst_9378 = cmd.plugins.markdown.core.load_gists.call(null);var state_9433__$1 = (function (){var statearr_9472 = state_9433;(statearr_9472[21] = inst_9377);
return statearr_9472;
})();var statearr_9473_9510 = state_9433__$1;(statearr_9473_9510[2] = inst_9378);
(statearr_9473_9510[1] = 7);
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
});})(c__5608__auto__))
;return ((function (switch__5593__auto__,c__5608__auto__){
return (function() {
var state_machine__5594__auto__ = null;
var state_machine__5594__auto____0 = (function (){var statearr_9477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9477[0] = state_machine__5594__auto__);
(statearr_9477[1] = 1);
return statearr_9477;
});
var state_machine__5594__auto____1 = (function (state_9433){while(true){
var ret_value__5595__auto__ = (function (){try{while(true){
var result__5596__auto__ = switch__5593__auto__.call(null,state_9433);if(cljs.core.keyword_identical_QMARK_.call(null,result__5596__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5596__auto__;
}
break;
}
}catch (e9478){if((e9478 instanceof Object))
{var ex__5597__auto__ = e9478;var statearr_9479_9511 = state_9433;(statearr_9479_9511[5] = ex__5597__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9433);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5595__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9512 = state_9433;
state_9433 = G__9512;
continue;
}
} else
{return ret_value__5595__auto__;
}
break;
}
});
state_machine__5594__auto__ = function(state_9433){
switch(arguments.length){
case 0:
return state_machine__5594__auto____0.call(this);
case 1:
return state_machine__5594__auto____1.call(this,state_9433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5594__auto____0;
state_machine__5594__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5594__auto____1;
return state_machine__5594__auto__;
})()
;})(switch__5593__auto__,c__5608__auto__))
})();var state__5610__auto__ = (function (){var statearr_9480 = f__5609__auto__.call(null);(statearr_9480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5608__auto__);
return statearr_9480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5610__auto__);
});})(c__5608__auto__))
);
return c__5608__auto__;
});

//# sourceMappingURL=loop.js.map