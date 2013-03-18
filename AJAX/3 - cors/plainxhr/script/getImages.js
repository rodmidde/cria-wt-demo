/**
 * User: mdkr
 * Date: 3/13/13
 */

// Please replace with your own key
const api_key = "a3c12778b671de7596aefc249494580f";

/**
 * @see http://developer.yahoo.com/yql/guide/yql-code-examples.html
 * @param url
 * @param parameters
 * @returns {string}
 */
function parameterize(url, parameters) {
    var parts = [];
    for (var each in parameters) if (parameters.hasOwnProperty(each)) {
        parts.push(encodeURIComponent(each) + '=' + encodeURIComponent(parameters[each]));
    }
    return url + parts.join('&');
};

/**
 * Function original from N. Zakas: http://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/
 *
 * @param method
 * @param url
 * @returns {XMLHttpRequest}
 */
function createCORSRequest(method, url, parameters) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, parameterize(url, parameters), true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, parameterize(url, parameters));
    }
    return xhr;
}

function getImagesFromFlickr() {
    "use strict";
    var Fn, xhr, url, res;


    /**
     * We can only create an authenticated (using API-key) request to Flickr,
     * but a CORS request is allowed.
     *
     * @type {XMLHttpRequest}
     */
    xhr = createCORSRequest('GET', "http://api.flickr.com/services/rest/?", {
        method: "flickr.photos.search",
        nojsoncallback: 1,
        format: "json",
        tags: "thetis-pupillen",
        api_key: api_key
    });
    xhr.onload = function () {
        Fn = Function;
        res = new Fn('handleCorsRequest(' + xhr.responseText + ')')();
    };
    xhr.send();
}

/**
 * Flickr URLs are built like: http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
 * @see http://www.flickr.com/services/api/misc.urls.html
 * @param item
 * @returns {string}
 */
function buildFlickImageURL(item) {
    return "http://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
}

function handleCorsRequest(data) {
    var items = data.photos.photo;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var flickrImage = document.createElement("img");
        flickrImage.src = buildFlickImageURL(item);
        document.getElementById("images").appendChild(flickrImage);
    }
}

window.onload = getImagesFromFlickr;