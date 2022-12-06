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
var BasePrinter = (function () {
    function BasePrinter() {
    }
    BasePrinter.prototype.printing = function (text) {
        return "".concat(text);
    };
    return BasePrinter;
}());
var Decorator = (function () {
    function Decorator(printer) {
        this.printer = printer;
    }
    Decorator.prototype.printing = function (text) {
        return this.printer.printing(text);
    };
    return Decorator;
}());
var LowerCase = (function (_super) {
    __extends(LowerCase, _super);
    function LowerCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowerCase.prototype.printing = function (text) {
        return _super.prototype.printing.call(this, text).toLowerCase();
    };
    return LowerCase;
}(Decorator));
var UpperCase = (function (_super) {
    __extends(UpperCase, _super);
    function UpperCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpperCase.prototype.printing = function (text) {
        return _super.prototype.printing.call(this, text).toUpperCase();
    };
    return UpperCase;
}(Decorator));
function convertString(text, printer) {
    console.log(printer.printing(text));
}
var simplePrinter = new BasePrinter;
var exampleText = "Текст Для Перевірки";
convertString(exampleText, simplePrinter);
var lowerCase = new LowerCase(simplePrinter);
convertString(exampleText, lowerCase);
var upperCase = new UpperCase(simplePrinter);
convertString(exampleText, upperCase);
//# sourceMappingURL=decorator.js.map