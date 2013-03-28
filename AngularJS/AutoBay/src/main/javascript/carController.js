autobay.controller('CarController', ['$scope', '$carProvider', function StockController($scope, $carProvider) {
    $scope.cars = $carProvider.getCars();

    $scope.loadCarDetail = function(id) {
        $scope.selectedCar = $carProvider.getCarDetails(id);
    };

    $scope.validateBid = function(value, originalPrice)
    {
        return Math.abs(originalPrice - value) / originalPrice <= 0.2;
    };
}]);
