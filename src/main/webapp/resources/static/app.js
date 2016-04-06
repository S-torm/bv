var bvModule = angular.module('bvApp', ['ngRoute', 'mainController']);

bvModule.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider.when('/bv/allAccounts', {
            templateUrl: '/resources/static/views/accounts/all',
            controller: 'mainController'
        }).when('/bv/newAccount', {
            templateUrl: '/resources/static/views/aacounts/new',
            controller: 'newAccountController'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);

