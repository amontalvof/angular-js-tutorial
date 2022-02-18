const myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', [
    '$scope',
    function ($scope) {
        $scope.ninjas = [
            { name: 'yoshi', belt: 'green', rate: 50, available: true },
            { name: 'crystal', belt: 'yellow', rate: 30, available: false },
            { name: 'ryu', belt: 'orange', rate: 10, available: false },
            { name: 'shaun', belt: 'black', rate: 1000, available: true },
        ];
    },
]);
