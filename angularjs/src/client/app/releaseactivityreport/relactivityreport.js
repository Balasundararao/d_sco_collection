(function() {
    'use strict';
    angular
        .module('app.releaseactivityreport')
        .controller('relactivityReportCtrl', relactivityReportCtrl);
	
    function relactivityReportCtrl(relactivityReportService) {
    	/* jshint validthis: true */
    	var rars     = this;
    	rars.loading = false;
    	rars.agentRowView=[];
    	
    	rars.init 			   = init;
    	rars.changeAgentRowValue = changeAgentRowValue; 
    	rars.createOrUpdate      = createOrUpdate;
    	rars.remove              = remove;
    	rars.setAgent            = setAgent;
    	rars.errFn               = errFn;
    	
        //  #####  Function callls #####
    	function init() {
        	rars.loading = true;
        	rars.agents = undefined;	
        	relactivityReportService.list().then(function (response) {
            	rars.agents = response.data;
            	rars.loading = false;
        		}, rars.errFn);
    	}; // ar.init ends here
    	function changeAgentRowValue(index) {
        	rars.agentRowView[index] = !rars.agentRowView[index];
    	}; //ar.changeAgentRowValue
    	
    	function createOrUpdate(agent) {
        	if (agent._id) {
            	relactivityReportService.edit(agent).
                	then(function () {
                    	rars.init();
                    	rars.agent = undefined;
                	}, rars.errFn);
        	} else {
            relactivityReportService.create(agent).
                then(function () {
                    ar.init();
                    ar.agent = undefined;
                }, ar.errFn);
        	}
    	}; //ar.createOrUpdate 
    	
    	function remove(agent) {
        	agent.removing = true;
        	relactivityReportService.remove(agent).
            	then(function () {
                	rars.init();
            	}, rars.errFn);
    	}; //ar.remove
    	
    	function setAgent(currentAgent) {
        	rars.agent = currentAgent;
    	};
    	
    	function errFn(){
	    	var errFn = function (reason) { rars.error = reason; console.dir(reason); };
    	}
    	
    	// Initializing the function ..
    	rars.init();
    }   // end function 
})();