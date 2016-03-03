var bvModule = angular.module('bvApp', ['ngRoute', 'accountController']);

bvModule.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider.when('/bv/allAccounts', {
            templateUrl: '/resources/static/view/allAccounts.html',
            controller: 'accountController'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);

