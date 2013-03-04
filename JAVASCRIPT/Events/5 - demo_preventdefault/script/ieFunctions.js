/**
 * User: mdkr
 * Date: 3/4/13
 */
function stopRechtsBlauw(e) {
    alert("rechtsKlik1 op blauw");
    alert("Klik coordinaten zijn: (" + e.clientX + "," + e.clientY + ")");
}
function stopRechtsRood(e) {
    alert("rechtsKlik2 op rood");
    alert("Klik coordinaten zijn: (" + e.clientX + "," + e.clientY + ")");
    e.returnValue = false;
    e.cancelBubble = true;
}
function stopRechtsBody(e) {
    //alert("rechtsKlik3");
    //alert("Klik coordinaten zijn: (" + e.clientX + "," + e.clientY + ")");
}

document.body.onload = function()
{
    document.body.attachEvent("oncontextmenu", stopRechtsBody);
    document.getElementById("divblauw").attachEvent("oncontextmenu", stopRechtsBlauw);
    document.getElementById("divrood").attachEvent("oncontextmenu", stopRechtsRood);
}