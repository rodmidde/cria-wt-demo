function report(obj,text)
{
for(i=0;i<obj.parentNode.childNodes.length;i++)
 {
 	alert( "node" + i + " is een:" + obj.parentNode.childNodes[i].nodeType);
 	if(obj.parentNode.childNodes[i].nodeType==3)
 	  //alert("--" + obj.parentNode.childNodes[i].nodeValue + "--");
 	  obj.parentNode.childNodes[i].nodeValue="nr" + i;
 }
alert(obj.parentNode.childNodes[1].className);
alert(obj.parentNode.childNodes[1].childNodes[0].nodeType);
}
//=================================================================================================================================
function clck(obj,action)
{
alert("this class is " + obj.className);
alert("parent class is " + obj.parentNode.className);
alert(obj.parentNode.childNodes.length);
//alert("click");
  report(obj,"there is " + action + " on " + obj.id);
}
