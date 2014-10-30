(function() {
    'use strict';
    angular
        .module('app.rwj')
        .controller('rwjsonCtrl', rwjsonCtrl);
	
    function rwjsonCtrl() {
    	/* jshint validthis: true */
    	var rw = this;
    	rw.languages = [        
        	{name:"English", value:0},
        	{name:"Spanish", value:1},
        	{name:"German", value:3},
        	{name:"Russian", value:2},
        	{name:"Korean", value:1}
    	];
    }   // end function 
})();