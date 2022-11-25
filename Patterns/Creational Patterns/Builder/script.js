var IceBuilder = (function () {
    function IceBuilder() {
        this.reset();
    }
    IceBuilder.prototype.reset = function () {
        this.dessert = new Ice;
    };
    IceBuilder.prototype.addBasis = function () {
        this.dessert.ingredients.push('пломбір');
    };
    IceBuilder.prototype.addApricoteJam = function () {
        this.dessert.ingredients.push('абрикосовий джем');
    };
    IceBuilder.prototype.addStrawberyJam = function () {
        this.dessert.ingredients.push('полуничний джем');
    };
    IceBuilder.prototype.addChocolate = function () {
        this.dessert.ingredients.push('шоколад');
    };
    IceBuilder.prototype.getDessert = function () {
        var ice = this.dessert;
        this.reset();
        return ice;
    };
    return IceBuilder;
}());
var Ice = (function () {
    function Ice() {
        this.ingredients = [];
    }
    Ice.prototype.getIce = function () {
        console.log("\u0414\u043B\u044F \u043F\u0440\u0438\u0433\u043E\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0438: ".concat(this.ingredients.join(', ')));
    };
    return Ice;
}());
var Director = (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.cookApricoteDessert = function () {
        this.builder.addBasis();
        this.builder.addApricoteJam();
    };
    Director.prototype.cookChocolateDessert = function () {
        this.builder.addBasis();
        this.builder.addChocolate();
    };
    return Director;
}());
var director = new Director;
var iceBuilder = new IceBuilder;
director.setBuilder(iceBuilder);
director.cookApricoteDessert();
console.log("\u0410\u0431\u0440\u0438\u043A\u043E\u0441\u043E\u0432\u0435 \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u043E");
iceBuilder.getDessert().getIce();
director.cookChocolateDessert();
console.log("\u0428\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u0435 \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u043E");
iceBuilder.getDessert().getIce();
console.log("\u041F\u043E\u043B\u0443\u043D\u0438\u0447\u043D\u0435 \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u043E");
iceBuilder.addBasis();
iceBuilder.addStrawberyJam();
iceBuilder.getDessert().getIce();
//# sourceMappingURL=script.js.map