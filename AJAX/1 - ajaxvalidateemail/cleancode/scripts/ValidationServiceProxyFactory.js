var ValidationServiceProxyFactory = function(serviceRequestor) {
    this.createProxy = function(isJQ) {
        if(isJQ)
            return new ValidationServiceProxyPlain(serviceRequestor);
        else
            return new ValidationServiceProxyJQ(serviceRequestor);
    };
}