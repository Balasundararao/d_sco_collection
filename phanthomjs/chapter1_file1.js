var system = require('system');
var url    = system.args[1];

var page = require('webpage').create();
page.onLoadStarted=function(){
	console.log("Page Loading Started.");
};
page.onLoadFinished = function(){
	console.log("Page Loaded");
	phantom.exit(0);
}

page.open(url);
