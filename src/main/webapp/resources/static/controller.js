var controller = angular.module('controller', []);

controller.controller('controller', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/bv/allAccounts').success(function (data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';
    }]);

controller.controller('newController', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);


var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.service('UserService',
    function()  {
        var savedData = {}
        function set(data) {
            savedData = data;
        }
        function get() {
            return savedData;
        }

        return {
            set: set,
            get: get
        }
    }
);

mainApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/addUser', {
            templateUrl: 'addUser.htm',
            controller: 'AddStudentController'
        }).
        when('/editUser', {
            templateUrl: 'editUser.htm',
            controller: 'EditUserController'
        }).
        when('/viewUsers', {
            templateUrl: 'viewUsers.htm',
            controller: 'UsersController'
        }).
        otherwise({
            redirectTo: '/viewUsers'
        });
    }]);

mainApp.controller('AddStudentController', function($scope, $http, $location) {
    $scope.createUser = function() {
        $http.post("api/user/", $scope.user).success(
            function (response) {
                $location.path("/viewUsers");
            }
        );
    }
});

mainApp.controller('EditUserController', function($scope, $http, $location, UserService) {
    $scope.user = UserService.get();

    $scope.saveUser = function(user) {
        $http.put("api/user/", user).success(function (response) {
            $location.path("/viewUsers");
        });
    }
});

mainApp.controller('UsersController', function($scope, $http, $location, UserService) {
    $http.get("api/user/").success(function (response) {
        $scope.users = response;
    });

    $scope.editUser = function (user) {
        UserService.set(user);
        $location.path("/editUser");
    }

    $scope.deleteUser = function (user) {
        $http.delete("api/user/", user).success(function (response) {
            $location.path("/viewUsers");
        });
    }
})