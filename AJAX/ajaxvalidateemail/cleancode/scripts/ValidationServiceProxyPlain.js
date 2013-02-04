var ValidationServiceProxyPlain = function(callbackObject) {
    this.validateEmail = function(emailaddress) {
        validateEmailRequest = getXmlHttpRequestObject();
        if (validateEmailRequest.readyState == 4 || validateEmailRequest.readyState == 0) {
            var params = "method=emailExists&emailaddress=" + emailaddress.value;
            validateEmailRequest.open("GET", 'backend/AjaxHandler.php?' + params, true);
            validateEmailRequest.onreadystatechange = validateEmailResponse;
            validateEmailRequest.send(null);
        }
    }
    validateEmailResponse = function() {
        if (validateEmailRequest.readyState == 4) {
            try {
                var isEmailValid = eval("(" + validateEmailRequest.responseText + ")");
                var isValid = (isEmailValid[0].emailaddressCount == 0)
                callbackObject.setValid(isValid)
            } catch (err) {
                callbackObject.setError(err);
            }
        }
    }
    getXmlHttpRequestObject = function() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            if (window.ActiveXObject) {
                return new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
    }
}
