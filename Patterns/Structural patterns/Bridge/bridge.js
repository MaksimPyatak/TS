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
var Transporter = (function () {
    function Transporter(transportationMathod) {
        this.transportationMathod = transportationMathod;
    }
    Transporter.prototype.transportation = function () {
        var result = "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432\u0430\u043D\u0442\u0430\u0436\u0456\u0432 \u0432 \u0456\u043D\u0448\u0443 \u043A\u0440\u0430\u0457\u043D\u0443 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C:\n\n      ".concat(this.transportationMathod.localTransportation(), "\n\n      ").concat(this.transportationMathod.overload(), "\n\n      ").concat(this.transportationMathod.internationalTransportation());
        return result;
    };
    return Transporter;
}());
var DHL = (function (_super) {
    __extends(DHL, _super);
    function DHL() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DHL.prototype.transportation = function () {
        var result = "DHL \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0454 \u0432\u0430\u043D\u0442\u0430\u0436\u0456 \u0432 \u0456\u043D\u0448\u0443 \u043A\u0440\u0430\u0457\u043D\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C:\n\n      ".concat(this.transportationMathod.localTransportation(), "\n\n      ").concat(this.transportationMathod.overload(), "\n\n      ").concat(this.transportationMathod.internationalTransportation());
        return result;
    };
    return DHL;
}(Transporter));
var FedEx = (function (_super) {
    __extends(FedEx, _super);
    function FedEx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FedEx.prototype.transportation = function () {
        var result = "FedEx \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0454 \u0432\u0430\u043D\u0442\u0430\u0436\u0456 \u0432 \u0456\u043D\u0448\u0443 \u043A\u0440\u0430\u0457\u043D\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C:\n\n      ".concat(this.transportationMathod.localTransportation(), "\n\n      ").concat(this.transportationMathod.overload(), "\n\n      ").concat(this.transportationMathod.internationalTransportation());
        return result;
    };
    return FedEx;
}(Transporter));
var SeaTransportation = (function () {
    function SeaTransportation() {
    }
    SeaTransportation.prototype.localTransportation = function () {
        return "\u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043F\u043E \u043A\u0440\u0430\u0457\u043D\u0456";
    };
    SeaTransportation.prototype.overload = function () {
        return "\u043F\u0435\u0440\u0435\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F";
    };
    SeaTransportation.prototype.internationalTransportation = function () {
        return "\u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043C\u043E\u0440\u0435\u043C";
    };
    return SeaTransportation;
}());
var AirTransportation = (function () {
    function AirTransportation() {
    }
    AirTransportation.prototype.localTransportation = function () {
        return "\u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043F\u043E \u043A\u0440\u0430\u0457\u043D\u0456";
    };
    AirTransportation.prototype.overload = function () {
        return "\u043F\u0435\u0440\u0435\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F";
    };
    AirTransportation.prototype.internationalTransportation = function () {
        return "\u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u043D\u044F \u043B\u0456\u0442\u0430\u043A\u043E\u043C";
    };
    return AirTransportation;
}());
var transportationMathod = new SeaTransportation;
var transporter = new DHL(transportationMathod);
console.log(transporter.transportation());
console.log("");
transportationMathod = new AirTransportation;
transporter = new FedEx(transportationMathod);
console.log(transporter.transportation());
//# sourceMappingURL=bridge.js.map