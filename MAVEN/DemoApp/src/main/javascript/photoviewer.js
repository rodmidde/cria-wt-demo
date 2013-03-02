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

/**
 * Tries to add images to the DOM
 * @pre There is a div available called "container"
 *
 * @param imageData
 */
function tryAddImagesToContainer(imageData) {
    function createAndAddImage() {
        function createImageWithSource() {
            var imageElement = document.createElement("img");
            imageElement.src = img.url;
            return imageElement;
        }

        // if is due to JSLint: http://www.jslint.com/lint.html#forin
        if (imageData.hasOwnProperty(img)) {
            var imageElement = createImageWithSource();
            document.getElementById("container").appendChild(imageElement);
        }
        return imageElement;
    }

    function addImagesToContainer() {
        for (img in imageData) {
            var imageElement = createAndAddImage();
        }
    }

    if (imageData) {
        addImagesToContainer();
    }
}
