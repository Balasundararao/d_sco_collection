var system = require("system");
var url = system.args[1];

var page = require("webpage").create();
page.open(url, function(status){
	if(status==='success'){
		var content = page.evaluate(function(){
			var element = document.querySelector('#fw-content');
			return element.textContent;
		});
		console.log(content);
	}else{
		console.log("Page failed to load...");
	}
	phantom.exit(0);
});


