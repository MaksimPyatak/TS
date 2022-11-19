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
var Creator = (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        var product = this.factoryMethod();
        return "Creator: The same creator's code has just worked with ".concat(product.operation());
    };
    return Creator;
}());
var ConcreteCreator1 = (function (_super) {
    __extends(ConcreteCreator1, _super);
    function ConcreteCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator1.prototype.factoryMethod = function () {
        return new ConcreteProduct1();
    };
    return ConcreteCreator1;
}(Creator));
var ConcreteCreator2 = (function (_super) {
    __extends(ConcreteCreator2, _super);
    function ConcreteCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator2.prototype.factoryMethod = function () {
        return new ConcreteProduct2();
    };
    return ConcreteCreator2;
}(Creator));
var ConcreteProduct1 = (function () {
    function ConcreteProduct1() {
    }
    ConcreteProduct1.prototype.operation = function () {
        return '{Result of the ConcreteProduct1}';
    };
    return ConcreteProduct1;
}());
var ConcreteProduct2 = (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.operation = function () {
        return '{Result of the ConcreteProduct2}';
    };
    return ConcreteProduct2;
}());
function clientCode(creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
Output.txt;
Результат;
виконання;
App: Launched;
with (the)
    ConcreteCreator1.
        Client;
I;
'm not aware of the creator';
s;
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
but;
it;
still;
works.
    Creator;
The;
same;
creator;
's code has just worked with {Result of the ConcreteProduct1};
App: Launched;
with (the)
    ConcreteCreator2.
        Client;
I;
'm not aware of the creator';
s;
var default_2 = (function () {
    function default_2() {
    }
    return default_2;
}());
but;
it;
still;
works.
    Creator;
The;
same;
creator;
's code has just worked with {Result of the ConcreteProduct2};
//# sourceMappingURL=script.js.map