(function() {
    'use strict';
    angular.module('app', [
    	'app.dashboard',
        'app.smoketest',
        'app.cl',
        'app.rwj',
        'ngRoute',
        'ngResource'
    ]).constant('version', 'v0.1.0')
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider.when('/',                        {templateUrl: 'src/client/app/dashboard/dashboard.html'})
        $routeProvider.when('/smoketest/:sandbox',      {templateUrl: 'src/client/app/smoke_test/smoketest.html',          controller: 'smokeTestCtrl'})
        $routeProvider.when('/componentlisting',        {templateUrl: 'src/client/app/cl_listing/componentlisting.html',   controller: 'clListCtrl'})
        $routeProvider.when('/rd-json',                 {templateUrl: 'src/client/app/rd-json/rd-json.html',               controller: 'rwjsonCtrl'})
        $routeProvider.when('/agentreport',             {templateUrl: 'views/agents.html',                controller: 'agentController'})
        //$routeProvider.when('/releaselistings',         {templateUrl: 'partials/releaselistings',        controller: 'relListCtrl'})
        //$routeProvider.when('/citienvironmentlisting',  {templateUrl: 'partials/citienvironmentlisting', controller: 'envListCtrl'})    
        //$routeProvider.when('/listing',               {templateUrl: 'views/ptiflisting.html'})
        //$routeProvider.when('/listing_grid',          {templateUrl: 'views/ptiflisting_grid.html'})
        .otherwise({redirectTo: '/'});
    });
})();


// MODULARIZED CODE...  
// (function() {
//     'use strict';
//     angular.module('app', [
//     	'app.dashboard',
//         'app.smoketest',
//         'app.cl'
//     ]);
// })();
