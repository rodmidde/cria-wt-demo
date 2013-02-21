describe('The add functions',function(){
    it('should add two numbers and return five',function(){

        var number1 = 1;
        var number2 = 4;

        var result = addNumbers(number1, number2);
        expect(result).toBe(5);
    });

    it('should return zero when the photolist is empty', function() {

        var expectedResult = {aantalRijen:0, aantalKolommen:0};

        var result = determineRaster(0);
        expect(result).toEqual(expectedResult);
    });

    it('should return a raster 1x1 when only one photo available', function() {

        var expectedResult = {aantalRijen:1, aantalKolommen:1};

        var result = determineRaster(1);
        expect(result).toEqual(expectedResult);
    });

    /*
    it('should return a raster 1x1 when only one photo available', function() {

        var expectedResult = {aantalRijen:2, aantalKolommen:1};

        var result = determineRaster(2);
        expect(result).toEqual(expectedResult);
    });
    */

});
