'use strick';
var bvApp = angular.module('bvApp', ['ngRoute', 'accountController']);

bvApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider.when('/bv/account', {
            templateUrl: '/resources/static/view/account.html',
            controller: 'accountController'
        })
    }
]);

