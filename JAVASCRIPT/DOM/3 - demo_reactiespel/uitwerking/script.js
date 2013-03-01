var starttime;
var endtime;
var action;
var alledivs;

function fixPosition(obj){
    obj.className = "div2";
}

function startgame(){
    speed = parseInt(document.getElementById("snelheid").getAttribute("value"));
    alledivs = document.getElementsByTagName("div");
    action = window.setInterval("spring()", speed)
    start = new Date();
    starttime = start.getTime();
}

function endgame(){
    if (allesgroen()) {
        window.clearInterval(action);
        eind = new Date();
        endtime = eind.getTime();
        alert("U hebt er " + (endtime - starttime) + " milleseconden over gedaan");
    }
}

function allesgroen(){
    for (i = 0; i < 10; i++) {
        if (alledivs[i].className == "div1") {
            return false;
        }
    }
    return true;
}

function spring(){
    for (i = 0; i < 10; i++) {
        if (alledivs[i].className == "div1") {
            x = 400 * Math.random() + 100;
            y = 500 * Math.random() + 100;
            alledivs[i].style.marginTop = x + "px";
            alledivs[i].style.marginLeft = y + "px";
        }
    }
}

function createBlokjes(){
    for (var i = 0; i < 10; i++) {
		var newDiv = document.createElement("div")
		newDiv.className = "div1"
		newDiv.onclick = function(){
			fixPosition(this);
		}
		var content = document.createTextNode(i)
		newDiv.appendChild(content)
	}
}
