/**
 * User: mdkr
 * Date: 3/17/13
 */
describe('The carProvider',function(){
    var carProvider;

    beforeEach(function() {
        /**
         * Use the module without its dependencies
         */
        module("autobay");

        /**
         * Create an instance of the randomizer factory using the DI-service from Angular
         */
        inject(function($injector) {
            carProvider = $injector.get('$carProvider');
        });
    });

    it('should return an array of 25 random cars',function(){
        var cars = carProvider.getCars();
        expect(cars.length).toBe(25);
    });
});
