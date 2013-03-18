/**
 * User: mdkr
 * Date: 3/15/13
 */
stockquote.service('$stockProvider', [ '$randomizer', '$http', function ($randomizer, $http) {
    var config = ["symbol|col0|false", "value|col1|true", "name|col2|false", "change|col3|false"];

    extractModel = function (json) {
        return json.map(toStock);
    };

    toStock = function (jsonStockElement) {
        var stock = {};
        for (var i = 0; i < config.length; i++) {
            var configProps = config[i].split("|");
            stock[configProps[0]] =
                (configProps[2] === "true")
                    ? $randomizer.randomize(jsonStockElement[configProps[1]])
                    : stock[configProps[0]] = jsonStockElement[configProps[1]];
        }
        return stock;
    };

    stockNamesToURI = function () {
        return stockNames.join("%2B");
    };

    this.getStocks = function (callback) {
        $http.jsonp("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3D"
                + stockNamesToURI()
                + "%26f%3Dsl1np2%26e%E2%80%8C%E2%80%8B%3D.csv'&format=json&callback=JSON_CALLBACK").success(function (data) {
                if (data.query.results) {
                    callback(extractModel(data.query.results.row));
                }
            });
    };
}]);