var page = require("webpage").create();
page.open("http://www.packtpub.com", function(status){
	if( status === "success"){
		console.log("Success:"+ page.title);
	}else{
		console.log("Page failed to load");
	}
	phantom.exit(0);
});
