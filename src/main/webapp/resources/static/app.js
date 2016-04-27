var bvModule = angular.module('bvApp', ['ngMaterial', 'ngRoute', 'mainController']);

bvModule.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        //$log.log("$routeProvider " + $routeProvider);
        $routeProvider.when('/accounts/all', {
            templateUrl: '/resources/static/views/accounts/all.html',
            controller: 'allCtrl'
        }).when('/accounts/new', {
            templateUrl: '/resources/static/views/accounts/new.html',
            controller: 'newCtrl'
        }).otherwise({
            redirectTo: '/',
            controller: 'mainController'
        });
    }
]);


