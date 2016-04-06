var mainController = angular.module('mainController', []);

mainController.controller('mainController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/accounts/all').success(function (data) {
            $scope.accounts = data;
        });

    }]);

mainController.controller('newAccountController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/accounts/new').success(function (data) {
            $scope.accounts = data;
        });

    }]);