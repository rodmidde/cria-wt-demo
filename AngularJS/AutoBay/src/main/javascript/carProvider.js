autobay.service('$carProvider', ['$http', function ($http) {
    Array.prototype.randomElement = function () {
        return this[Math.round((this.length - 1) * Math.random())];
    };

    var brands  = ["Ford", "Opel", "Mercedes", "Volkswagen"];
    var types   = ["Focus", "Insignia", "Vito", "Passat"];

    randomBrand = function () {
        return brands.randomElement();
    };

    randomType = function () {
        return types.randomElement();
    };

    randomPrice = function () {
        return ((Math.random() + 0.5) * 10000).toFixed(2);
    };

    this.getCars = function () {
        var cars = [];
        // carPictures are numbered from auto1 till auto25
        for (var carCount = 1; carCount <= 25; carCount++) {
            cars.push({"brand": randomBrand(), "type": randomType(), "image": "images/auto" + carCount + ".jpg", "price": randomPrice() });
        }
        return cars;
    };
}]);