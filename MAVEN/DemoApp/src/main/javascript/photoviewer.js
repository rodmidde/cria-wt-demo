/**
 * User: mdkr
 * Date: 3/2/13
 */

/**
 * Determines the number of rows of columns given a size of photo's
 * @param numberOfPhotos
 * @return {Object}
 */
function determineRaster(numberOfPhotos) {
    var sqrtOfNumberOfPhotos = Math.sqrt(numberOfPhotos);
    var roundedSqrtOfNumberOfPhotos = Math.round(sqrtOfNumberOfPhotos);
    var restOfRoundenSqrtOfNumberOfPhotos = numberOfPhotos % roundedSqrtOfNumberOfPhotos;

    return {aantalRijen:roundedSqrtOfNumberOfPhotos, aantalKolommen:roundedSqrtOfNumberOfPhotos + (Number)(restOfRoundenSqrtOfNumberOfPhotos > 0)};
}

function tryAddImagesToContainer(imageData)
{
    function addImagesToContainer() {
        for (img in imageData) {
            var imageElement = document.createElement("img");
            imageElement.src = img.url;
            document.getElementById("container").appendChild(imageElement);
        }
    }

    if (imageData)
    {
        addImagesToContainer();
    }
}
