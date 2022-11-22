var CreatorRubber = (function () {
    function CreatorRubber() {
    }
    CreatorRubber.prototype.creatorBall = function () {
        return new RubberBall();
    };
    CreatorRubber.prototype.creatorGlue = function () {
        return new RubberGlue();
    };
    return CreatorRubber;
}());
var CreatorPlastic = (function () {
    function CreatorPlastic() {
    }
    CreatorPlastic.prototype.creatorBall = function () {
        return new PlasticBall();
    };
    ;
    CreatorPlastic.prototype.creatorGlue = function () {
        return new PlasticGlue();
    };
    ;
    return CreatorPlastic;
}());
var RubberBall = (function () {
    function RubberBall() {
    }
    RubberBall.prototype.jump = function () {
        return "\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0438\u0439 \u043C'\u044F\u0447, \u0449\u043E \u043F\u043E\u0433\u0430\u043D\u043E \u0441\u0442\u0440\u0438\u0431\u0430\u0454";
    };
    return RubberBall;
}());
var PlasticBall = (function () {
    function PlasticBall() {
    }
    PlasticBall.prototype.jump = function () {
        return "\u0433\u0443\u043C\u043E\u0432\u0438\u0439 \u043C'\u044F\u0447, \u0449\u043E \u0433\u0430\u0440\u043D\u043E \u0441\u0442\u0440\u0438\u0431\u0430\u0454";
    };
    return PlasticBall;
}());
var RubberGlue = (function () {
    function RubberGlue() {
    }
    RubberGlue.prototype.introduction = function () {
        return "\u042F \u043A\u043B\u0435\u0439 \u0434\u043B\u044F \u0433\u0443\u043C\u0438";
    };
    RubberGlue.prototype.toGlue = function (prodact) {
        var ball = prodact.jump();
        return "".concat(this.introduction(), ", \u0449\u043E \u043A\u043B\u0435\u0457\u0442\u044C ").concat(ball);
    };
    return RubberGlue;
}());
var PlasticGlue = (function () {
    function PlasticGlue() {
    }
    PlasticGlue.prototype.introduction = function () {
        return "\u042F \u043A\u043B\u0435\u0439 \u0434\u043B\u044F \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430";
    };
    PlasticGlue.prototype.toGlue = function (prodact) {
        var ball = prodact.jump();
        return "".concat(this.introduction(), ", \u0449\u043E \u043A\u043B\u0435\u0457\u0442\u044C ").concat(ball);
    };
    return PlasticGlue;
}());
function bayABall(creator) {
    var ball = creator.creatorBall();
    var glue = creator.creatorGlue();
    console.log(glue.introduction());
    console.log(glue.toGlue(ball));
}
bayABall(new CreatorRubber());
bayABall(new CreatorPlastic());
//# sourceMappingURL=script.js.map