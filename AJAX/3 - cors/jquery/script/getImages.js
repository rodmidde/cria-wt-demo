/**
 * User: mdkr
 * Date: 3/13/13
 */
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
        tags: "thetis-pupillen",
        tagmode: "any",
        format: "json"
        /**
         * Other URLs may require one or more of the following extra parameters:
         *   dataType: "jsonp",
         *   jsonp: "callback",
         *   jsonpCallback: "cbfunc",
         */
    },
    function (data) {
        $.each(data.items, function (i, item) {
            $("<img/>").attr("src", item.media.m).appendTo("#images");
        });
    });