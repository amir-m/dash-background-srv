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

        $http.post('/search', { query: $scope.query })
        .success(function(results){
            console.log(results);
            $scope.search_results = results;
        })
        .error(function(error, code){
            throw error;
        })
    };
    $scope.show_all = function(obj) {
        var obj = obj || {};
        
        $http.post('/query', obj)
        .success(function(results){
            $scope.search_results = results;
        })
        .error(function(error, code){
            throw error;
        })
    };
    $scope.confirm = function(user) {
        console.log(user);
        var obj = {
            uuids: user.uuids,
            email: user.email,
            confirmed_by: $scope.user || 'amir@dashbook.co',
            confirmed_at: new Date().getTime()
        }
        user.confirmed = true;
        user.confirmed_by = $scope.user || 'amir@dashbook.co';
        user.confirmed_at = new Date().getTime();
    };
  }
]);
