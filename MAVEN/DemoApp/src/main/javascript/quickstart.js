/**
 * Returns the sum of two numbers ...
 * @param number1 first number
 * @param number2 second number
 * @return the sum of the two numbers
 */
function addNumbers(number1, number2) {
    return number1 + number2;
}

/**
 * Determines the number of rows of columns given a size of photo's
 * @param numberOfPhotos
 * @return {Object}
 */
function determineRaster(numberOfPhotos) {
    var sqrtOfNumberOfPhotos = Math.sqrt(numberOfPhotos);
    var roundedSqrtOfNumberOfPhotos = Math.round(sqrtOfNumberOfPhotos);
    var restOfRoundenSqrtOfNumberOfPhotos = numberOfPhotos % roundedSqrtOfNumberOfPhotos;

    return {aantalRijen:roundedSqrtOfNumberOfPhotos, aantalKolommen:roundedSqrtOfNumberOfPhotos+(Number)(restOfRoundenSqrtOfNumberOfPhotos > 0)};
}

function alertElements(list)
{
    for(elementIndex in list) {
        alert(list[elementIndex]);
    }
}

var persoon = {
    naam: "Rody",
    leeftijd: 37,
    kinderen: new Array(),

    toonNaam : function()
    {
        alert(this.naam)
    }
}


