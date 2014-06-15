'use strict';

angular.module('DashboardApp')
  .controller('MainCtrl', [
  	'$scope', 
    '$rootScope', 
    '$http',
    '$location',
  function ($scope, $rootScope, $http, $location) {

    $scope.signIn = function() {
        $scope.error = "";
        $http.post('/login', {
            email: $scope.email,
            pass: $scope.pass
        })
        .success(function(){
            $location.path('/dashboard');
        })
        .error(function(){
            $scope.error = "We couldn't authenticate you!";
        })
    };
  }
]);
