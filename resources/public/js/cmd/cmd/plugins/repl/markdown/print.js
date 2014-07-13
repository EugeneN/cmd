// Compiled by ClojureScript 0.0-2202
goog.provide('cmd.plugins.repl.markdown.print');
goog.require('cljs.core');
goog.require('cmd.globals');
goog.require('cmd.lib.dom');
goog.require('cmd.lib.utils');
goog.require('cmd.globals');
goog.require('cmd.lib.utils');
goog.require('cmd.lib.dom');
cmd.plugins.repl.markdown.print.set_preview = (function set_preview(){var ace = cmd.lib.utils.get_state.call(null,cmd.globals.state,new cljs.core.Keyword(null,"ace","ace",1014000629));var ace_value = ace.getSession().getValue();return cmd.plugins.repl.markdown.print.process.call(null,ace_value,((function (ace,ace_value){
return (function (value){return cmd.lib.dom.html_BANG_.call(null,cmd.lib.dom.$.call(null,"preview"),value);
});})(ace,ace_value))
);
});

//# sourceMappingURL=print.js.map