/**
 * User: mdkr
 * Date: 3/17/13
 */

describe('The randomizer',function(){
    var randomizer;

    beforeEach(function() {
        /**
         * Use the module without its dependencies
         */
        module("stockquote");

        /**
         * Create an instance of the randomizer factory using the DI-service from Angular
         */
        inject(function($injector) {
            randomizer = $injector.get('$randomizer');
        });
    });

    it('should return the original stock when randomize is false',function(){
        randomizer.toggleActive();
        var stockValue = randomizer.randomize("100.1234");
        expect(stockValue).toBe('100.12');
        // every stock has been rounded using 2 digits so let's check it
        expect(stockValue).toMatch("^[0-9]*\.[0-9]{2}$");
    });

    it('should return a different stock when randomize is true', function(){
        var stockValue = randomizer.randomize("100.00");
        expect(stockValue).not.toBe(100);
        // every stock has been rounded using 2 digits so let's check it
        expect(stockValue).toMatch("^[0-9]*\.[0-9]{2}$");
    });
});
