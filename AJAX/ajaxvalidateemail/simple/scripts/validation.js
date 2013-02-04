function validateEmail() {
    var emailaddress = document.getElementById("emailaddress");
    var useJQ = document.getElementById("usejquery");

    if(!useJQ.checked) {
        if(window.XMLHttpRequest) {
            validateEmailRequest = new XMLHttpRequest();
        } else {
            if(window.ActiveXObject) {
                validateEmailRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        if(validateEmailRequest.readyState == 4 || validateEmailRequest.readyState == 0) {
            var params = "method=validateEmail&emailaddress=" + emailaddress.value;
            validateEmailRequest.open("GET", 'backend/validationService.php?' + params, true);
            validateEmailRequest.onreadystatechange = function() {
                if(validateEmailRequest.readyState == 4) {
                    try {
                        var isEmailValid = eval("(" + validateEmailRequest.responseText + ")");
                        var isValid = (isEmailValid[0].emailaddressCount == 0)
                        if(document.getElementById("imgEmailValid"))
                            document.getElementById("emailSection").removeChild(document.getElementById("imgEmailValid"))
                        var img = document.createElement("img");
                        img.setAttribute("src", "images/" + isValid + ".jpg");
                        img.setAttribute("alt", "Image that shows whether the emailaddress is valid");
                        img.setAttribute("id", "imgEmailValid");
                        img.setAttribute("height", "20px");
                        img.setAttribute("width", "20px");
                        document.getElementById("emailSection").appendChild(img);
                    } catch (err) {
                        alert(err)
                    }
                }
            };
            validateEmailRequest.send(null);
        }

    } else {
        var emailaddress = $("#emailaddress").val();
        // getJSON is a jQuery function in the global ($) scope
        $.getJSON("backend/validationService.php", {// call a PHP-script
            emailaddress : emailaddress, // send two parameters
            method : "validateEmail"
        }, function(data) {// anonymous callback function
            var isValid = (data[0].emailaddressCount == 0)
            if(document.getElementById("imgEmailValid"))
                document.getElementById("emailSection").removeChild(document.getElementById("imgEmailValid"))
            var img = document.createElement("img");
            img.setAttribute("src", "images/" + isValid + ".jpg");
            img.setAttribute("alt", "Image that shows whether the emailaddress is valid");
            img.setAttribute("id", "imgEmailValid");
            img.setAttribute("height", "20px");
            img.setAttribute("width", "20px");
            document.getElementById("emailSection").appendChild(img);
        });
    }
}