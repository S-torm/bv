/*
 angular.module('bvApp', ['ngNewRouter', 'ngAnimate', 'ngAria', 'ngMaterial'])
 .controller('MenuController', ['$router', MenuController]);
 function MenuController($router) {
 $router.config([
 { path: '/accounts', component: 'accounts' }
 ]);
 }
 */

(function() {
    'use strict';
angular
    .module('bvApp')
    .controller('MenuController', Controller);

Controller.$inject = [
    '$router'
];

function Controller($router) {
    $router.config([
        { path: '/', redirectTo: '/accounts' },
        { path: '/accounts', component: 'accounts' },
        { path: '/accounts', component: 'accounts' }
    ]);
}

})();