/**
 * Validates the emailaddress from the field.
 * @see setValid
 * @see validateEmailPlain
 * @see validateEmailJQ
 */
function validateEmail() {
    var emailaddress = document.getElementById("emailaddress");
    var useJQ = document.getElementById("usejquery");

    if (!useJQ.checked)
        validateEmailPlain(emailaddress);
    else
        validateEmailJQ(emailaddress);
}

/**
 * Checks which image has to be selected. 
 * Gets called after the emailvalidation.
 * 
 * @param isValid
 */
function setValid(isValid) {
    if (document.getElementById("imgEmailValid"))
        document.getElementById("emailSection").removeChild(document.getElementById("imgEmailValid"))
    var img = document.createElement("img");
    img.setAttribute("src","images/" + isValid +".jpg");
    img.setAttribute("alt","Image that shows whether the emailaddress is valid");
    img.setAttribute("id","imgEmailValid");
    img.setAttribute("height","20px");
    img.setAttribute("width","20px");
    document.getElementById("emailSection").appendChild(img);
}

/**
 * When an error happens we choose to call the alert. 
 * Can be implemented in a more fancy way, but it's enough for now :)
 * 
 * @param errorMsg
 */
function setError(errorMsg) {
    alert(errorMsg)
}

/**
 * Base implementation of the email validation using AJAX (XmlHttpRequest)
 * @param emailaddress
 */
function validateEmailPlain(emailaddress) {
    validateEmailRequest = getXmlHttpRequestObject();
    if (validateEmailRequest.readyState == 4 || validateEmailRequest.readyState == 0) {
        var params = "method=validateEmail&emailaddress=" + emailaddress.value;
        validateEmailRequest.open("GET", 'backend/validationService.php?' + params, true);
        validateEmailRequest.onreadystatechange = validateEmailResponse;
        validateEmailRequest.send(null);
    }
}

/** 
 * Callback function called by the response of the AJAX call. Can also
 * be implemented using a anonymous function.
 * @see setValid
 * @see setError
 */
function validateEmailResponse() {
    if (validateEmailRequest.readyState == 4) {
        try {
            var isEmailValid = eval("(" + validateEmailRequest.responseText + ")");
            var isValid = (isEmailValid[0].emailaddressCount == 0)
            setValid(isValid)
        } catch (err) {
            setError(err);
        }
    }
}

/**
 * Creates a XmlHttpRequest object which depends on the used browser.
 * - W3C: XmlHttpRequest
 * - IE: ActiveXObject
 * 
 * @return XmlHttpRequest
 */
function getXmlHttpRequestObject() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
}

/**
 * Alternative implementation of the email validation using JQuery
 * @param emailaddress
 */
function validateEmailJQ(emailaddress) {
	// use jquery selector mechanism (same as CSS)
    var emailaddress = $("#emailaddress").val();
    // getJSON is a jQuery function in the global ($) scope
    $.getJSON("backend/validationService.php", { // call a PHP-script 
        emailaddress: emailaddress, // send two parameters
        method: "validateEmail"
    }, function(data) { // anonymous callback function
        var isValid = (data[0].emailaddressCount == 0)
        setValid(isValid)
    });
}

