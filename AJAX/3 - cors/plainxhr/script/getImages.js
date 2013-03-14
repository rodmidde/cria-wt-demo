/**
 * User: mdkr
 * Date: 3/13/13
 */

/**
 * @see http://developer.yahoo.com/yql/guide/yql-code-examples.html
 * @param url
 * @param parameters
 * @returns {string}
 */
function parameterize(url, parameters) {
    var parts = [];
    for(var each in parameters) if (parameters.hasOwnProperty(each)) {
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

var request = createCORSRequest("get", "http://api.flickr.com/services/feeds/photos_public.gne?",
    {
        tags: "thetis-pupillen",
        tagmode: "any",
        format: "json",
        jsonp: false,
        jsoncallback: "handleCorsRequest"
    });

function handleCorsRequest(data)
{
    for(var i=0;i<data.items.length;i++)
    {
        var flickrImage = document.createElement("img");
        flickrImage.src = data.items[i].media.m;
        document.getElementById("images").appendChild(flickrImage);
    }
}
// We're not allowed to set the Origin header manually, this is done by the
// browser so make sure to run from localhost and not local file
//
// FROM https://bugs.webkit.org/show_bug.cgi?id=50773:
// We don't usually send Origin with GET requests.  We do send it for XMLHttpRequest if we're using CORS.
// Maybe we're not using CORS for some reason?

// request.setRequestHeader('Origin', 'http://www.han.nl');

// FLICKR (but also YAHOO) does not support requests coming from localhost, bad luck
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.setRequestHeader('Access-Control-Allow-Methods','GET');

// YAHOO supports the OpenSocial function to do this http://developer.yahoo.com/yql/guide/yql-code-examples.html#yql_javascript
// Alternatively, use jQuery with JSONP or use Chrome with --disable-web-security option

if (request) {
    request.onload = function () {
       var cb = eval(request.responseText);
    };
    request.send();
}