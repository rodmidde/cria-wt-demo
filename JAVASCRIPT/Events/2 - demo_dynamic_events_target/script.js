function vulpagina() {
    var maindiv=document.getElementById("maindiv");
    for(i=1;i<10;i++) {
        var div=document.createElement("div");
        var br=document.createElement("br");
        var txt=document.createTextNode("dit is div" + i);
        div.setAttribute("id","divje" + i);
        div.appendChild(txt);
        maindiv.appendChild(div);
    }
    var divjes=document.getElementsByTagName("div");
    for(var i = 1; i<8; i++) {
        var divje=divjes[i];
        divje.onmousedown=doeiets;
    }
}

function doeiets(e) {
    var targ;
    if (!e) {
        var e = window.event;
        alert("IE event");
    }
    if (e.target) {
        targ = e.target;
        alert("W3C target");
    } else if (e.srcElement) {
        targ = e.srcElement;
        alert("IE target");
    }

    alert("geklikt op " + targ );
}
