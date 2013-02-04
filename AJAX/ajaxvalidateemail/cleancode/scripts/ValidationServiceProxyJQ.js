var ValidationServiceProxyJQ = function(callbackObject) {
    this.validateEmail = function(emailaddress) {
        var emailaddress = $("#emailaddress").val();
        $.getJSON("backend/AjaxHandler.php", {
            emailaddress: emailaddress,
            method: "emailExists"
        }, function(data) {
            var isValid = (data[0].emailaddressCount == 0)
            callbackObject.setValid(isValid)
        });
    }
}