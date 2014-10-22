var system = require("system");
var url = system.args[1];
var page = require("webpage").create();
page.open(url,function(status){
	if(status === 'success'){
		var data = page.evaluate(function(){
			return {
				title:document.title,
				numberofNodes: document.getElementsByTagName("*").length,
				documentUrl  : document.URL
			}
		});
		console.log("Page Status");
		console.log("==============================");
		console.log("Title:" + data.title );
		console.log("URL:" + data.documentUrl );
		console.log("Number of Nodes:" + data.numberofNodes );
		
		
	}else{
		console.log("Page failed to Load");
	}
	phantom.exit(0);
	
})

