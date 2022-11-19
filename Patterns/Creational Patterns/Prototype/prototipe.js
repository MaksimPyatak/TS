var PrototypeCup = (function () {
    function PrototypeCup(volume, color) {
        this.form = "teacup";
        this.volume = volume;
        this.color = color;
    }
    PrototypeCup.prototype.clone = function () {
        var clone = Object.assign({}, this);
        return clone;
    };
    return PrototypeCup;
}());
function createCup() {
    var Cup = new PrototypeCup(150, "yelow");
    var bigCup = Cup.clone();
    var smallCup = Cup.clone();
    if (bigCup.volume == smallCup.volume) {
        console.log(' Yay!');
        console.log(bigCup);
        console.log(smallCup);
    }
    else {
        console.log('Booo!');
        console.log(bigCup);
        console.log(smallCup);
    }
    bigCup.volume = 400;
    console.log(bigCup);
    console.log(smallCup);
}
createCup();
//# sourceMappingURL=prototipe.js.map