/**
 * User: mdkr
 * Date: 3/15/13
 */

var randomizeActive = true;
stockquote.factory('$randomizer', function () {
    return {
        randomize: function (stock) {
            var stockValue = parseFloat(stock);
            if (randomizeActive) {

                var randomVal = Math.random();
                randomVal >= 0.5 ?
                    stockValue += randomVal * stockValue :
                    stockValue -= stockValue * randomVal;
            }
            return stockValue.toFixed(2);
        },

        toggleActive: function()
        {
            randomizeActive = !randomizeActive;
        }
    }
});
