var mainController = angular.module('mainController', []);

mainController.controller('mainController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/bv/allAccounts').success(function (data) {
            $scope.accounts = data;
        });

    }]);