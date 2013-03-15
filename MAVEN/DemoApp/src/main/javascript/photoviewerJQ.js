/**
 * User: mdkr
 * Date: 3/15/13
 */
function tryAddImagesToContainerJQ(imageData) {
    function addImagesToContainer() {
        for (var img in imageData) {
            // if is due to JSLint: http://www.jslint.com/lint.html#forin
            if (imageData.hasOwnProperty(img)) {
                $('<img />', { 'src': img.url}).appendTo('#container');
            }
        }
    }

    if (imageData) {
        addImagesToContainer();
    }
}