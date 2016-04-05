var mainController = angular.module('mainController', []);

mainController.controller('mainController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/bv/allAccounts').success(function (data) {
            $scope.accounts = data;
        });

    }]);

mainController.controller('newAccountController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/bv/newAccount').success(function (data) {
            $scope.accounts = data;
        });

    }]);