/**
 * User: mdkr
 * Date: 3/4/13
 */
function stopRechtsBlauw(e)
{
    alert("rechtsKlik1 op blauw");
    alert("Klik coordinaten zijn: (" + e.clientX + "," + e.clientY + ")");
}
function stopRechtsRood(e)
{
    alert("rechtsKlik2 op rood");
    alert("Klik coordinaten zijn: (" + e.clientX + "," + e.clientY + ")");
    e.preventDefault();
    e.stopPropagation();
}
function stopRechtsBody(e)
{
    //alert("rechtsKlik3");
    //alert("Klik coordinaten zijn: (" + e.clientX + "," + e.clientY + ")");
}

document.body.onload = function()
{
    document.body.addEventListener("contextmenu", stopRechtsBody);
    document.getElementById("divblauw").addEventListener("contextmenu", stopRechtsBlauw);
    document.getElementById("divrood").addEventListener("contextmenu", stopRechtsRood);
}