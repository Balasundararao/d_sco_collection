(function() {
    'use strict';
    angular.module('app', [
    	'app.dashboard',
        'app.mergereport',
        'app.grapevine',
        'app.hookomator',
        'app.release',
        'app.smoketest',
        'app.cl',
        'app.rdj',
        'app.ar',
        'app.mql',
        'app.sg',
        'app.ts',
        'app.mo',
        'ngRoute',
        'ngResource'
    ]).constant('version', 'v0.1.0')
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider.when('/',                 {templateUrl: 'src/client/app/dashboard/dashboard.html'})
        $routeProvider.when('/componentlisting', {templateUrl: 'src/client/app/cl_listing/componentlisting.html',   controller: 'clListCtrl'})
        $routeProvider.when('/rd-json',          {templateUrl: 'src/client/app/rd-json/rd-json.html',               controller: 'rdjsonCtrl', controllerAs: 'rd',})
        $routeProvider.when('/merge-report',        {templateUrl: 'src/client/app/mergereport/mergereport.html',   controller: 'mergeReportCtrl', controllerAs:'mr'})
        $routeProvider.when('/grapevine',           {templateUrl: 'src/client/app/grapevine/grapevine.html',   controller: 'grapevineCtrl', controllerAs:'gv'})
        $routeProvider.when('/hookomator',          {templateUrl: 'src/client/app/hookomator/hookomator.html',   controller: 'hookomatorCtrl', controllerAs:'hm'})
        $routeProvider.when('/release',             {templateUrl: 'src/client/app/release/release.html',   controller: 'releaseCtrl', controllerAs:'rc'})
        $routeProvider.when('/smoketest/:sandbox',  {templateUrl: 'src/client/app/smoke_test/smoketest.html',          controller: 'smokeTestCtrl'})
        $routeProvider.when('/agentreport',         {templateUrl: 'src/client/app/agentreport/agentreport.html',       controller: 'agentreportCtrl', controllerAs:'ar'})
        $routeProvider.when('/teams',        {templateUrl: 'src/client/app/teams/teams.html',   controller: 'teamsCtrl', controllerAs:'ts'})
        $routeProvider.when('/mql',          {templateUrl: 'src/client/app/mql/mql.html',       controller: 'mqlCtrl', controllerAs:'mq'})
        $routeProvider.when('/models',       {templateUrl: 'src/client/app/model/model.html',   controller: 'modelCtrl', controllerAs:'mo'})
        $routeProvider.when('/style',        {templateUrl: 'src/client/app/style/style.html',   controller: 'styleCtrl', controllerAs:'sg'})
        .otherwise({redirectTo: '/'});
    });
})();

//$routeProvider.when('/releaselistings',         {templateUrl: 'partials/releaselistings',        controller: 'relListCtrl'})
//$routeProvider.when('/citienvironmentlisting',  {templateUrl: 'partials/citienvironmentlisting', controller: 'envListCtrl'})    
//$routeProvider.when('/listing',               {templateUrl: 'views/ptiflisting.html'})
//$routeProvider.when('/listing_grid',          {templateUrl: 'views/ptiflisting_grid.html'})