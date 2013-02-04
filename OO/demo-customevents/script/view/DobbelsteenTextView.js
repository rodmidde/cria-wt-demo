function DobbelsteenTextView(controller) {
    tvContainer = document.createElement("div")
    tvContainer.className = "container left"
    tvContainer.setAttribute("id","tvContainer")
    tvButton = document.createElement("button")
    tvButton.setAttribute("type","button")
    tvLabel = document.createTextNode("ClickTextViewButton")
    tvButton.appendChild(tvLabel)
    tvButton.onclick = controller.throwDice
    
    tvContainer.appendChild(tvButton)
    document.body.appendChild(tvContainer)
}

DobbelsteenTextView.prototype = 
{
    constructor : DobbelsteenTextView,
    
    diceThrown : function(evt)
    {
        var p = document.createElement("p")
        var pText = document.createTextNode(evt.value)
        p.appendChild(pText)
        document.getElementById("tvContainer").appendChild(p)
    }
}