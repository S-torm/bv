'use strict';
var mainC = angular.module('mainController', []);

/*mainC.controller('allCtrl', ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
        $log.log(" allCtrl ");
       /!* $http.get('/accounts/all').success(function (data) {
            $scope.accounts = data;
            $log.log("/accounts/all $scope.all " + data);
        });*!/

    }]);

mainC.controller('newCtrl', ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
        $log.log(" newCtrl ");
    }]);*/

mainC.controller('mainController', ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
        $log.log("mainController ");
    }]);