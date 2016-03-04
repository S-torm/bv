var bvModule = angular.module('bvApp', ['ngRoute', 'controller']);

bvModule.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider.when('/bv/allAccounts', {
            templateUrl: '/resources/static/view/allAccounts',
            controller: 'controller'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);

