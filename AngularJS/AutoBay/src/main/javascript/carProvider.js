autobay.service('$carProvider', ['$http', function ($http) {
    var cars = [];

    Array.prototype.randomElement = function () {
        return this[Math.round((this.length - 1) * Math.random())];
    };

    var brands  = ["Ford", "Opel", "Mercedes", "Volkswagen"];
    var types   = ["Focus", "Insignia", "Vito", "Passat"];
    var fuelTypes = ["Gasoline", "Diesel", "LPG"];

    randomBrand = function() {
        return brands.randomElement();
    };

    randomType = function() {
        return types.randomElement();
    };

    randomFuel = function() {
        return fuelTypes.randomElement();
    }

    randomPrice = function() {
        return ((Math.random() + 0.5) * 10000).toFixed(2);
    };

    randomMileage = function() {
        return ((Math.random() + 0.5) * 20000).toFixed(0);
    };

    this.getCars = function () {
        // always start with an empty array
        cars.length = 0;

        // carPictures are numbered from auto1 till auto25
        for (var carCount = 1; carCount <= 25; carCount++) {
            cars.push({"id": carCount, "brand": randomBrand(), "type": randomType(), "image": "images/auto" + carCount + ".jpg", "price": randomPrice() });
        }
        return cars;
    };


    this.getCarDetails = function(id) {
        var carDetails = cars[id-1];
        carDetails["fuelType"] = randomFuel();
        carDetails["mileage"] = randomMileage();
        return carDetails;
    };
}]);