'use strict';

angular.module('DashboardApp')
  .controller('DashboardCtrl', [
  	'$scope', 
    '$rootScope', 
    '$http',
    '$location',
  function ($scope, $rootScope, $http, $location) {

    $scope.search = function() {
        if (!$scope.query || $scope.query.length == 0) return

        $http.post('/search', {
            email: $scope.query
        })
        .success(function(results){
            $scope.search_results = results;
        })
        .error(function(error, code){
            throw error;
        })
    };
  }
]);
