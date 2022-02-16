const myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', [
    '$scope',
    function ($scope) {
        $scope.ninjas = [
            { name: 'yoshi', belt: 'green', rate: 50 },
            { name: 'crystal', belt: 'yellow', rate: 30 },
            { name: 'ryu', belt: 'orange', rate: 10 },
            { name: 'shaun', belt: 'black', rate: 1000 },
        ];
    },
]);
