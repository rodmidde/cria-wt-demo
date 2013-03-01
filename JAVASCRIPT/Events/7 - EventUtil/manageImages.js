/**
 * User: mdkr
 * Date: 3/1/13
 */
document.body.onload = function()
{
    var addButton = document.getElementById("addButton")
    var removeButton = document.getElementById("removeButton")
    EventUtil.addHandler(addButton, "click", addImage);
    EventUtil.addHandler(removeButton, "click", removeImage);
}

var addImage = function() {
    var newImage = document.createElement("img");
    newImage.src = "images/caution.gif";
    EventUtil.addHandler(newImage, "click", clickHandler);
    document.getElementById("imageContainer").appendChild(newImage);
}

var removeImage = function(e) {
    var imageToRemove = document.getElementsByTagName("img")[0];
    if (imageToRemove) document.getElementById("imageContainer").removeChild(imageToRemove);
}

var clickHandler = function() {
    alert("clicked");
};