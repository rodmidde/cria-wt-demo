Array.prototype.merge = function(newStocks)
{
    for(var stockIndex=0;stockIndex < this.length;stockIndex++)
    {
        getDifference.call(this, stockIndex, newStocks);
        this[stockIndex].value = newStocks[stockIndex].value;
        this[stockIndex].name = newStocks[stockIndex].name;
    }
};

function getDifference(stockIndex, newStocks) {
    this[stockIndex].change = randomizeActive
        ? (((Number(newStocks[stockIndex].value) -
            Number(this[stockIndex].value)) /
            Number(this[stockIndex].value)) * 100).toFixed(2)
        : Number(newStocks[stockIndex].change.replace("%",""));
}

function initializeData() {
    return stockNames.map(function(stockName) {
        return {"name:":"", "symbol": stockName.toUpperCase(), "value" : "0.001", "change": 0};
    });
}

var stockNames = ["ibm","orcl","hpq","sgi","aapl","goog","amzn","phg"];
var stocks = initializeData();
