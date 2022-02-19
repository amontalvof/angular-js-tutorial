const myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', [
    '$scope',
    function ($scope) {
        $scope.removeNinja = function (ninja) {
            var removedNinja = $scope.ninjas.indexOf(ninja);
            $scope.ninjas.splice(removedNinja, 1);
        };

        $scope.ninjas = [
            { name: 'yoshi', belt: 'green', rate: 50, available: true },
            { name: 'crystal', belt: 'yellow', rate: 30, available: true },
            { name: 'ryu', belt: 'orange', rate: 10, available: false },
            { name: 'shaun', belt: 'black', rate: 1000, available: true },
        ];
    },
]);
