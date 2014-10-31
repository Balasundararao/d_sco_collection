(function() {
    'use strict';
    angular
        .module('app.ar')
        .controller('agentreportCtrl', agentreportCtrl);
	
    function agentreportCtrl(agentService) {
    	/* jshint validthis: true */
    	var ar     = this;
    	ar.loading = false;
    	ar.agentRowView=[];
    	
    	ar.init 			   = init;
    	ar.changeAgentRowValue = changeAgentRowValue; 
    	ar.createOrUpdate      = createOrUpdate;
    	ar.remove              = remove;
    	ar.setAgent            = setAgent;
    	
        //  #####  Function callls #####
    	function init() {
        	ar.loading = true;
        	ar.agents = undefined;	
        	agentService.list().then(function (response) {
            	ar.agents = response.data;
            	ar.loading = false;
        		}, errFn);
    	}; // ar.init ends here
    	function changeAgentRowValue(index) {
        	ar.agentRowView[index] = !ar.agentRowView[index];
    	}; //ar.changeAgentRowValue
    	
    	function createOrUpdate(agent) {
        	if (agent._id) {
            	agentService.edit(agent).
                	then(function () {
                    	ar.init();
                    	ar.agent = undefined;
                	}, errFn);
        	} else {
            agentService.create(agent).
                then(function () {
                    ar.init();
                    ar.agent = undefined;
                }, errFn);
        	}
    	}; //ar.createOrUpdate 
    	
    	function remove(agent) {
        	agent.removing = true;
        	agentService.remove(agent).
            	then(function () {
                	ar.init();
            	}, errFn);
    	}; //ar.remove
    	
    	function setAgent(currentAgent) {
        	ar.agent = currentAgent;
    	};
    	
    	// Initializing the function ..
    	ar.init();
    }   // end function 
})();