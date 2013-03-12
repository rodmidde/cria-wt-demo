var todomvc = angular.module('todomvc', []);
//maak een controller met als naam TodoController
todomvc.controller('TodoController', ['$scope', function TodoController($scope) {
    $scope.todos = demodata;
}]);
