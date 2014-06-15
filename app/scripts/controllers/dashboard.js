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

        var q = { 
            email: { 
                $regex: '\w*'+$scope.query+'\w*', 
                $options: 'i'
            }
        };
        $scope.search_results = [];

        $http.post('/search', {query: q})
        .success(function(results){
            $scope.search_results = results;
        })
        .error(function(error, code){
            throw error;
        })
    };
    $scope.show_all = function(obj) {
        var obj = obj || {};
        
        $http.post('/search', {
            query: obj
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
