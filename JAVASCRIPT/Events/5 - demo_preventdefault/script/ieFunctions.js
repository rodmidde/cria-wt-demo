/**
 * User: mdkr
 * Date: 3/4/13
 */
function stopRechtsKlik1(e) {
    alert("rechtsKlik1 op blauw");
    alert("Klik coordinaten zijn: (" + e.clientX + "," + e.clientY + ")");
}
function stopRechtsKlik2(e) {
    alert("rechtsKlik2 op rood");
    alert("Klik coordinaten zijn: (" + e.clientX + "," + e.clientY + ")");
    e.returnValue = false;
    e.cancelBubble = true;
}
function stopRechtsKlik3(e) {
    //alert("rechtsKlik3");
    //alert("Klik coordinaten zijn: (" + e.clientX + "," + e.clientY + ")");
}