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


function countSMSLength(){
    var oldLengthNode = document.getElementById("smstextLength").childNodes[0];
    var newLengthNode = document.createTextNode(smstextArea.value.length);
    document.getElementById("smstextLength").replaceChild(newLengthNode, oldLengthNode);
    checkSMSLength();
}


function validateField(field, fieldType, submit){
    if (field.value == "") {
        field.className = "emptyField";
        return false;
    }
    else 
        if (eval("isValid" + fieldType + "(field.value)")) {
            field.className = "validField";
            return true;
        }
        else {
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