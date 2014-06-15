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
        .error(function(code){
            if (code == 401)
                $scope.error = "We couldn't authenticate you!";
            else
                $scope.error = "There was a problem with your request. Sorry!";
        })
    };
  }
]);
