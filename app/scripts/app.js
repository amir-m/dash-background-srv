'use strict';

angular.module('DashboardApp', [])
  .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
      .when('/', {
        // templateUrl: '//s3.amazonaws.com/dbk-assets/main.html',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        // resolve: {
        //   dashes: [
        //   'Dashloader', function(Dashloader){
        //     return Dashloader();
        //   }]
        // }
      })
      .when('/dashboard', {
        // templateUrl: '//s3.amazonaws.com/dbk-assets/main.html',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        resolve: {
          authenticate: [
            '$rootScope', '$location',
            function($rootScope, $location){
              if (!$rootScope.logged_in) return $location.path('/');
            }
          ]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .run(['$http', '$rootScope', function($http, $rootScope){

    $rootScope.safeApply = $rootScope.apply = function() {
      if ($rootScope.$$phase != '$apply' && $rootScope.$$phase != '$digest')
        $rootScope.$apply();
    };

  }]);
