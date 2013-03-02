/**
 * Shows some example testcases
 *
 * Visit http://pivotal.github.com/jasmine/jsdoc/symbols/jasmine.Matchers.html to see
 * how Jasmine matchers like toBe, toEquals etc. work
 *
 */
describe('The add functions',function(){
    it('should add two numbers and return five',function(){

        var number1 = 1;
        var number2 = 4;

        var result = addNumbers(number1, number2);
        expect(result).toBe(5);
    });

    it('should return NaN when the parameters are missing', function(){
       expect(isNaN(addNumbers())).toBe(true);
    });
});
