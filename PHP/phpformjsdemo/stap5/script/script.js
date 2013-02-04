var errorList = new Array();

function handleOnLoad(){
    smstextArea = document.getElementById("smstextArea");
    phoneNumber = document.getElementById("phoneNumber");
    
    registerEventHandler(smstextArea, countSMSLength)
    registerEventHandler(phoneNumber, checkNumberFormat)
}

function registerEventHandler(field, func){
    field.onkeyup = func;
    field.onblur = func;
    field.onfocus = func;
}

function showDetails(personObj){
	personImage = document.getElementById("personImage");
    if (personObj != undefined) {
        phoneNumber.value = personObj.phonenumber;
		personImage.src = personObj.photourl;
    }
    else {
        phoneNumber.value = "";
	 	personImage.src = "";
   }
    phoneNumber.focus();

}

function countSMSLength(){
    var oldLengthNode = document.getElementById("smstextLength").childNodes[0];
    var newLengthNode = document.createTextNode(smstextArea.value.length);
    document.getElementById("smstextLength").replaceChild(newLengthNode, oldLengthNode);
    checkSMSLength();
}

function addError(msg){
    var errorListNode = document.getElementById("foutmeldingenlijst");
    var newErrorNode = document.createElement("li");
    var newErrorMessageNode = document.createTextNode(msg);
    newErrorNode.appendChild(newErrorMessageNode);
    errorListNode.appendChild(newErrorNode);
    showErrors()
}

function showErrors(){
    var errorListNode = document.getElementById("foutmeldingenlijst");
    errorListNode.className = "visible";
}

function clearErrorMessages(){
    var errorListNode = document.getElementById("foutmeldingenlijst");
    var messageLength = errorListNode.childNodes.length;
    for (var i = 0; i < messageLength; i++) {
        errorListNode.removeChild(errorListNode.childNodes[i]);
    }
    errorListNode.className = "hidden";
    return;
}

function validateField(field, fieldType, submit){
    if (field.value == "") {
        field.className = "emptyField";
        if (submit) 
            addError("Het veld " + field.name + " is verplicht.");
        return false;
    }
    else 
        if (eval("isValid" + fieldType + "(field.value)")) {
            field.className = "validField";
            return true;
        }
        else {
            if (submit) 
                addError("De inhoud of het formaat van het veld " + field.name + " is onjuist.");
            field.className = "invalidField";
            return false;
        }
}

function checkSMSLength(){
    validateField(smstextArea, "SMS", false);
}

function checkNumberFormat(){
    validateField(phoneNumber, "Phonenumber", false)
}

function isValidSMS(sms){
    return (sms.length > 0 && sms.length < 160);
}

function isValidPhonenumber(phoneNumber){
    var phonePattern = /^06\-{0,1}[0-9]{8}$/;
    return phonePattern.test(phoneNumber);
}

function validateFields(){
    clearErrorMessages();
    valid = validateField(smstextArea, "SMS", true) && validateField(phoneNumber, "Phonenumber", true)
    return valid;
}
