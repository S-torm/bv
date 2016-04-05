var bvModule = angular.module('bvApp', ['ngRoute', 'mainController']);

bvModule.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider.when('/bv/allAccounts', {
            templateUrl: '/resources/static/view/allAccounts',
            controller: 'mainController'
        }).when('/bv/newAccount', {
            templateUrl: '/resources/static/view/newAccount',
            controller: 'newAccountController'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);

