(function() {
    'use strict';
    angular.module('app', [
    	'app.dashboard',
    	'app.main',
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
        'ngResource',        
        'ngCookies',
  		'ngSanitize',
  		'ui.bootstrap'
    ]).constant('version', 'v0.1.0')
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider.when('/',                 {templateUrl: 'app/dashboard/dashboard.html'})
        $routeProvider.when('/main',             {templateUrl: 'app/main/main.html', controller: 'MainCtrl'})
        $routeProvider.when('/componentlisting', {templateUrl: 'app/cl_listing/componentlisting.html',   controller: 'clListCtrl'})
        $routeProvider.when('/rd-json',          {templateUrl: 'app/rd-json/rd-json.html',               controller: 'rdjsonCtrl', controllerAs: 'rd',})
        $routeProvider.when('/merge-report',        {templateUrl: 'app/mergereport/mergereport.html',   controller: 'mergeReportCtrl', controllerAs:'mr'})
        $routeProvider.when('/grapevine',           {templateUrl: 'app/grapevine/grapevine.html',   controller: 'grapevineCtrl', controllerAs:'gv'})
        $routeProvider.when('/hookomator',          {templateUrl: 'app/hookomator/hookomator.html',   controller: 'hookomatorCtrl', controllerAs:'hm'})
        $routeProvider.when('/release',             {templateUrl: 'app/release/release.html',   controller: 'releaseCtrl', controllerAs:'rc'})
        $routeProvider.when('/smoketest/:sandbox',  {templateUrl: 'app/smoke_test/smoketest.html',          controller: 'smokeTestCtrl'})
        $routeProvider.when('/agentreport',         {templateUrl: 'app/agentreport/agentreport.html',       controller: 'agentreportCtrl', controllerAs:'ar'})
        $routeProvider.when('/teams',        {templateUrl: 'app/teams/teams.html',   controller: 'teamsCtrl', controllerAs:'ts'})
        $routeProvider.when('/mql',          {templateUrl: 'app/mql/mql.html',       controller: 'mqlCtrl', controllerAs:'mq'})
        $routeProvider.when('/models',       {templateUrl: 'app/model/model.html',   controller: 'modelCtrl', controllerAs:'mo'})
        $routeProvider.when('/style',        {templateUrl: 'app/style/style.html',   controller: 'styleCtrl', controllerAs:'sg'})
        .otherwise({redirectTo: '/'});
    });
})();

/**
'use strict';

angular.module('integrationApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }); */
  