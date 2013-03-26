autobay.controller('CarController', ['$scope', '$carProvider', function StockController($scope, $carProvider) {
    $scope.cars = $carProvider.getCars();
}]);
