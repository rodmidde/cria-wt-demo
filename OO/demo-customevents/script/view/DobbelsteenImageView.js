function DobbelsteenImageView(controller) {
    this.ivContainer = document.createElement("div")
    this.ivContainer.className = "container right"
    this.ivContainer.setAttribute("id", "ivContainer")
    document.body.appendChild(this.ivContainer)
}

DobbelsteenImageView.prototype = {
    constructor : DobbelsteenImageView,

    diceThrown : function(evt) {
        var img = document.createElement("img")
        img.setAttribute("src", "images/" + evt.value + ".jpg")
        document.getElementById("ivContainer").appendChild(img)
    }
}