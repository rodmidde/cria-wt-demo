var ValidationServiceRequestor = function(){
    this.validateEmail = function(){
        var emailaddress = document.getElementById("emailaddress");
        var useJQ = document.getElementById("usejquery");
		serviceProxy = 
		  new ValidationServiceProxyFactory(this).createProxy(useJQ.isChecked);
		serviceProxy.validateEmail(emailaddress);
    }
    
    this.setValid = function(isValid){
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
    
    this.setError = function(errorMsg){
        document.write(errorMsg);
    }
}
