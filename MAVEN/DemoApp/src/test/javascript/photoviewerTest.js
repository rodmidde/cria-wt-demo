/**
 * User: mdkr
 * Date: 3/2/13
 */

describe('The photoviewer', function () {
    beforeEach(function() {
        var container = document.createElement("div");
        container.setAttribute("id","container");
        document.body.appendChild(container);
    });

    afterEach(function() {
        document.body.removeChild(document.getElementById("container"));
    });

    it('should return zero when the photolist is empty', function () {

        var expectedResult = {aantalRijen:0, aantalKolommen:0};

        var result = determineRaster(0);
        expect(result).toEqual(expectedResult);
    });

    it('should return a raster 1x1 when only one photo available', function () {

        var expectedResult = {aantalRijen:1, aantalKolommen:1};

        var result = determineRaster(1);
        expect(result).toEqual(expectedResult);
    });

    it('document.body should not be undefined', function() {
        expect(document.body).toNotEqual(undefined);
    });

    it('should have zero images on start', function() {
        expect(document.images.length).toBe(0);
    });

    it('should have zero images when the addImagesToContainer function is called without arguments', function() {
        addImagesToContainer();
        expect(document.images.length).toBe(0);
    });

    it('should have one image when the addImagesToContainer function is called with an array of length 1', function() {
        addImagesToContainer([{url:"somePicture.jpg"}]);
        expect(document.images.length).toBe(1);
    });
});
