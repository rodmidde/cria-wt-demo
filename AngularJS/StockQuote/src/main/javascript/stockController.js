/**
 * User: mdkr
 * Date: 3/15/13
 */
var timeoutRate = 5000;

stockquote.controller('StockController', ['$scope', '$timeout', '$stockProvider', function StockController($scope, $timeout, $stockProvider) {
    $scope.stocksHistory = [];
    // initialize with local data
    $scope.stocks = stocks;
    $scope.refresh = true;

    // make this a private function
    updateModel = function(stockModel)
    {
        $scope.stocks.merge(stockModel);
        $scope.stocksHistory.push(stockModel);

        if ($scope.refresh) {
            $timeout($scope.refreshStocks, timeoutRate);
        }
    };

    $scope.refreshStocks = function() {
        $stockProvider.getStocks(updateModel);
    };



    // Angular does not support intervals, so let's create a chain of timeouts
    $timeout($scope.refreshStocks, timeoutRate);
}]);
