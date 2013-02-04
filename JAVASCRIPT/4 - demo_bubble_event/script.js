function handleDocument() {
    addEventListener(document.body, bodyClick)
    addEventListener(document.getElementById("gustiberg"), imgClick)
    addEventListener(document.getElementById("geelblokje"), nivo2Click)
    addEventListener(document.getElementById("groenblokje"), nivo1Click)
}

function addEventListener(element, eventHandler) {
    // when using onclick -> bubbling
    // element.onclick = eventHandler
    // true/false
    element.addEventListener("click", eventHandler, true)
}

function bodyClick() {
    alert(this + ": klik op body");
}

function imgClick() {
    alert(this + ":klik op image");
}

function nivo1Click() {
    alert(this + ": klik op nivo1");
}

function nivo2Click() {
    alert(this + ": klik op nivo2");
}