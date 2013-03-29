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

    var graphDataTemplate = {
        "title": {
            "text": "Stock History"
        },
        "xAxis": {
        },
        "tooltip": {},
        "series": [
            {
                "name": "",
                "data": [
                ]
            }
        ]
    };

    // make this a private function
    updateModel = function(stockModel)
    {
        $scope.stocks.merge(stockModel);
        $scope.stocksHistory.push(stockModel);

        if($scope.selectedSymbol) {
            $scope.loadStockHistory($scope.selectedSymbol);
        }

        if ($scope.refresh) {
            $timeout($scope.refreshStocks, timeoutRate);
        }
    };

    $scope.refreshStocks = function() {
        $stockProvider.getStocks(updateModel);
    };

    $scope.loadStockHistory = function(symbol) {
        $scope.selectedSymbol = symbol;

        historyBySymbol = function(stockModel) {
            return stockModel.filter(function (element, index, array){
                return (element.symbol === symbol);
            })[0];
        }

        $scope.stockHistory = $scope.stocksHistory.map(historyBySymbol);

        toGraphData = function(stockHistory) {
            graphDataTemplate.series[0].name = symbol;
            function historyValuesBySymbol(stockModel) {
                 return parseInt(stockModel.filter(function (element, index, array){
                    return (element.symbol === symbol);
                })[0].value);
            }

            graphDataTemplate.series[0].data = stockHistory.map(historyValuesBySymbol);
            return graphDataTemplate;
        }

        $scope.stockHistoryGraphData = toGraphData($scope.stocksHistory);
    };

    // Angular does not support intervals, so let's create a chain of timeouts
    $timeout($scope.refreshStocks, timeoutRate);
}]);
