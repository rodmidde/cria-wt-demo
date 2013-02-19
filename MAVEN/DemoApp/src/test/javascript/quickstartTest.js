describe('The add functions',function(){
    it('should add two numbers and return five',function(){

        var number1 = 1;
        var number2 = 4;

        var result = addNumbers(number1, number2);
        expect(result).toBe(5);
    });
});
