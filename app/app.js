const myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', [
    '$scope',
    function ($scope) {
        $scope.message = "hello y'all!";
        $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun'];
    },
]);
