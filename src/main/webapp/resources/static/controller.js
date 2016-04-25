var mainController = angular.module('mainController', []);

mainController.controller('allCtrl', ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
        $log.log(" allCtrl ");
        $http.get('/accounts/all').success(function (data) {
            $scope.accounts = data;
            $log.log("/accounts/all $scope.all " + data);
        });

    }]);

mainController.controller('newCtrl', ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
        $log.log(" newCtrl ");
    }]);

mainController.controller('mainController', ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
        $log.log("mainController ");
    }]);

mainController.controller('MenuController', function DemoCtrl($mdDialog) {
    this.settings = {
        printLayout: true,
        showRuler: true,
        showSpellingSuggestions: true,
        presentationMode: 'edit'
    };
    this.sampleAction = function(name, ev) {
        $mdDialog.show($mdDialog.alert()
            .title(name)
            .textContent('You triggered the "' + name + '" action')
            .ok('Great')
            .targetEvent(ev)
        );
    }});