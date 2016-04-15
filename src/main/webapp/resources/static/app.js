var bvModule = angular.module('bvApp', ['ngRoute', 'mainController']);

bvModule.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        //$log.log("$routeProvider " + $routeProvider);
        $routeProvider.when('/accounts/all', {
            templateUrl: '/resources/static/views/accounts/all',
            controller: 'allCtrl'
        }).when('/accounts/new', {
            templateUrl: '/resources/static/views/accounts/new',
            controller: 'newCtrl'
        }).otherwise({
            redirectTo: '/',
            controller: 'mainController'
        });
    }
]);

