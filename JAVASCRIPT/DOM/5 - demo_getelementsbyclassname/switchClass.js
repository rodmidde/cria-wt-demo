/**
 * User: mdkr
 * Date: 3/7/13
 */

function switchClass(fromClass, toClass) {
    var els = document.getElementsByClassName(fromClass);
    for (var i = 0; i < els.length; i++) {
        els[i].className = toClass;
        alert(els.length)
    }
}

function createDivs() {
    for (var i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.className = "full";
        div.addEventListener("click", function () {
            switchClass('full', 'dimmed');
        });
        document.body.appendChild(div);
    }
}