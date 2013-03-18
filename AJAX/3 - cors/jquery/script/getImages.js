/**
 * User: mdkr
 * Date: 3/13/13
 */
function buildFlickImageURL(item) {
    return "http://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
}

// Please replace with your own key
const api_key = "a3c12778b671de7596aefc249494580f";

$.getJSON("http://api.flickr.com/services/rest/?", {
        method: "flickr.photos.search",
        nojsoncallback: 1,
        format: "json",
        tags: "thetis-pupillen",
        api_key: api_key},
    function (data) {
        $.each(data.photos.photo, function (i, item) {
            $("<img/>").attr("src", buildFlickImageURL(item)).appendTo("#images");
        });
    });

