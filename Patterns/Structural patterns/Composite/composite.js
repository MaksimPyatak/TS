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
var Component = (function () {
    function Component() {
    }
    Component.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Component.prototype.getParent = function () {
        return this.parent;
    };
    Component.prototype.add = function (component) { };
    Component.prototype.remove = function (component) { };
    Component.prototype.isComposite = function () {
        return false;
    };
    return Component;
}());
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.operation = function () {
        return 'Table';
    };
    return Table;
}(Component));
var Chair = (function (_super) {
    __extends(Chair, _super);
    function Chair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chair.prototype.operation = function () {
        return 'Chair';
    };
    return Chair;
}(Component));
var Composite = (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    Composite.prototype.add = function (component) {
        this.children.push(component);
        component.setParent(this);
    };
    Composite.prototype.remove = function (component) {
        var componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    };
    Composite.prototype.isComposite = function () {
        return true;
    };
    Composite.prototype.operation = function () {
        var results = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            results.push(child.operation());
        }
        return "\u041F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F(".concat(results.join('+'), ")");
    };
    return Composite;
}(Component));
function createOffice(component) {
    console.log("\u041F\u043B\u0430\u043D \u043E\u0444\u0456\u0441\u0443: ".concat(component.operation()));
}
var office = new Composite();
var room1 = new Composite();
room1.add(new Table());
room1.add(new Chair());
var room2 = new Composite();
room2.add(new Table());
room2.add(new Chair());
room2.add(new Chair());
office.add(room1);
office.add(room2);
createOffice(office);
console.log('');
function updateOffice(component1, component2) {
    if (component1.isComposite()) {
        component1.add(component2);
    }
    console.log("\u041F\u043B\u0430\u043D \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F: ".concat(component1.operation()));
}
var chair = new Chair();
updateOffice(room2, chair);
//# sourceMappingURL=composite.js.map