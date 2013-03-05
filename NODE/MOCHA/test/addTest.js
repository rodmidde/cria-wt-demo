var expect = require('chai').expect;
var addNumbers = require(__dirname + '/../src/add').addNumbers;

/**
 * Shows some example testcases
 *
 * Visit http://pivotal.github.com/jasmine/jsdoc/symbols/jasmine.Matchers.html to see
 * how Jasmine matchers like toBe, toEquals etc. work
 *
 */
describe('The add function',function(){
    it('should add two numbers and return five',function(){

        var number1 = 1;
        var number2 = 4;

        var result = addNumbers(number1, number2);
        expect(result).to.equal(5);
    });

    it('should return NaN when the parameters are missing', function(){
       expect(isNaN(addNumbers())).to.equal(true);
    });
});
