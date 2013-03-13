include("scripts/ValidationServiceProxyFactory.js", "head");
include("scripts/ValidationServiceProxyPlain.js", "head");
include("scripts/ValidationServiceProxyJQ.js", "head");
include("scripts/ValidationServiceRequestor.js", "head");
include("scripts/libs/jquery-1.4.2.min.js", "head");

/**
 * http://javascript.about.com/library/bladdjs.htm
 */
function include(jsname, pos) {
    var th = document.getElementsByTagName(pos)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', jsname);
    th.appendChild(s);
}
