var system = require('system');
var url = system.args[1];

phantom.onError = function ( msg, trace){
	console.log( msg );
	if(trace){
		trace.forEach(function(t){
			var stackmsg = ' at' + (t.function ? 'function' +t.function :'' ) +'(' + (t.file || t.sourceURL) + ':'+t.line + ')';
			console.log(stackmsg);
		});
	}	
};

var page = require('webpage').create();
page.open(url);
function say(){
	//phantom.hello();
}
say();

