/**
 * User: mdkr
 * Date: 3/13/13
 */
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
        tags: "thetis-pupillen",
        tagmode: "any",
        format: "json"
    },
    function (data) {
        $.each(data.items, function (i, item) {
            $("<img/>").attr("src", item.media.m).appendTo("#images");
        });
    });