var SpeedCar = (function () {
    function SpeedCar(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    SpeedCar.prototype.declarationSpeed = function () {
        console.log("The car ".concat(this.name, " travels at a speed of ").concat(this.speed, " mph."));
    };
    return SpeedCar;
}());
var SpeedAdapter = (function () {
    function SpeedAdapter(car) {
        this.car = car;
    }
    SpeedAdapter.prototype.rucalculationSpeed = function () {
        var speedKM = this.car.speed * 1.609344;
        return speedKM;
    };
    return SpeedAdapter;
}());
var OverSpeeding = (function () {
    function OverSpeeding(speedAdapter) {
        this.speedAdapter = speedAdapter;
    }
    OverSpeeding.prototype.speedComparison = function () {
        if (this.speedAdapter.rucalculationSpeed() > 50) {
            var deltaSpeed = Math.round(this.speedAdapter.rucalculationSpeed() - 50);
            console.log("Speeding by ".concat(deltaSpeed, " km/h"));
        }
        else {
            console.log("The speed is not exceeded.");
        }
    };
    return OverSpeeding;
}());
function speedControl(name, speed) {
    var car = new SpeedCar(name, speed);
    var speedAdapter = new SpeedAdapter(car);
    var overSpeeding = new OverSpeeding(speedAdapter);
    car.declarationSpeed();
    overSpeeding.speedComparison();
}
speedControl("2544", 55);
//# sourceMappingURL=adapter.js.map