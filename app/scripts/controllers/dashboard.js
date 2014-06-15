'use strict';

angular.module('DashboardApp')
  .controller('DashboardCtrl', [
  	'$scope', 
    '$rootScope', 
    '$http',
    '$location',
  function ($scope, $rootScope, $http, $location) {

    $scope.search = function() {
        if (!$scope.query || $scope.query.length == 0) return;

        $scope.search_results = [];

        $http.post('/search', {
            query: $scope.query
        })
        .success(function(results){
            $scope.search_results = results;
        })
        .error(function(error, code){
            throw error;
        })
    };
    $scope.show_all = function() {
        if (!$scope.query || $scope.query.length == 0) return;

        $scope.search_results = [];
        
        $http.post('/search', {
            query: $scope.query
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
