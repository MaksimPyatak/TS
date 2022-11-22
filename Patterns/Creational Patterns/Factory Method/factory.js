var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ShoesCreator = (function () {
    function ShoesCreator(sole, upper, lacing) {
        this.sole = sole;
        this.upper = upper;
        this.lacing = lacing;
    }
    ShoesCreator.prototype.messageOfCreated = function () {
        var shues = this.factoryMathod(this.sole, this.upper, this.lacing);
        var message = shues.made(this.sole, this.upper);
        console.log(message);
        return shues;
    };
    return ShoesCreator;
}());
var SliponsCreator = (function (_super) {
    __extends(SliponsCreator, _super);
    function SliponsCreator(sole, upper) {
        return _super.call(this, sole, upper) || this;
    }
    SliponsCreator.prototype.factoryMathod = function (sole, upper) {
        return new Slipons(sole, upper);
    };
    return SliponsCreator;
}(ShoesCreator));
var OxfordsCreator = (function (_super) {
    __extends(OxfordsCreator, _super);
    function OxfordsCreator(sole, upper, lacing) {
        return _super.call(this, sole, upper, lacing) || this;
    }
    OxfordsCreator.prototype.factoryMathod = function (sole, upper, lacing) {
        return new Oxfords(sole, upper, lacing);
    };
    return OxfordsCreator;
}(ShoesCreator));
var Slipons = (function () {
    function Slipons(sole, upper) {
        this.sole = sole;
        this.upper = upper;
    }
    Slipons.prototype.made = function () {
        return "This ".concat(this.sole, " slipons mades with the ").concat(this.sole, " sole and the ").concat(this.upper, " upper and without lacing");
    };
    return Slipons;
}());
var Oxfords = (function () {
    function Oxfords(sole, upper, lacing) {
        this.sole = sole;
        this.upper = upper;
        this.lacing = lacing;
    }
    Oxfords.prototype.made = function () {
        return "This ".concat(this.sole, " oxfords mades with ").concat(this.sole, " sole and ").concat(this.upper, " upper and lacing");
    };
    return Oxfords;
}());
function clientCode(sole, upper, lacing) {
    if (sole && upper && lacing) {
        var creator = new OxfordsCreator(sole, upper, lacing);
        var newShoes = creator.messageOfCreated();
        return newShoes;
    }
    else if (sole && upper) {
        var creator = new SliponsCreator(sole, upper);
        var newShoes = creator.messageOfCreated();
        return newShoes;
    }
    else {
        console.log("It is impossible to make shoes");
    }
}
var yellowSlipons = clientCode("black", "brown");
console.log(yellowSlipons);
var brownOxford = clientCode("yellow", "brown", true);
console.log(brownOxford);
//# sourceMappingURL=factory.js.map