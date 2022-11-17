var Sneakers = (function () {
    function Sneakers(pt) {
        this.firstPart = 'sole';
        this.secondPart = 'mainPart';
        this.firstPart;
        this.secondPart;
    }
    Sneakers.prototype.createShoes = function () {
        console.log("We used the ".concat(this.firstPart, ", ").concat(this.secondPart, ", ").concat(this.laces, " to create ").concat(this.name));
    };
    return Sneakers;
}());
var Sandals = (function () {
    function Sandals(pt) {
        this.firstPart = 'sole';
        this.secondPart = 'mainPart';
        this.firstPart;
        this.secondPart;
    }
    Sandals.prototype.createShoes = function () {
        console.log("We used the ".concat(this.firstPart, ", ").concat(this.secondPart, ", ").concat(this.strabs, " to create ").concat(this.name));
    };
    return Sandals;
}());
//# sourceMappingURL=script.js.map