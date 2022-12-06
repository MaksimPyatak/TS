var Facade = (function () {
    function Facade(frameFactory, pictureFactory) {
        this.frameFactory = frameFactory || new FrameFactory;
        this.pictureFactory = pictureFactory || new PictureFactory;
    }
    Facade.prototype.pictureWithFrame3x4 = function () {
        var result = "".concat(this.pictureFactory.picture3x4(), " \u0432 ").concat(this.frameFactory.frame3x4());
        return result;
    };
    Facade.prototype.pictureWithFrame10x15 = function () {
        var result = "".concat(this.pictureFactory.picture10x15(), " \u0432 ").concat(this.frameFactory.frame10x15());
        return result;
    };
    return Facade;
}());
var FrameFactory = (function () {
    function FrameFactory() {
    }
    FrameFactory.prototype.frame3x4 = function () {
        return "\u0440\u0430\u043C\u0446\u0456 3\u04454";
    };
    FrameFactory.prototype.frame10x15 = function () {
        return "\u0440\u0430\u043C\u0446\u0456 10\u044515";
    };
    return FrameFactory;
}());
var PictureFactory = (function () {
    function PictureFactory() {
    }
    PictureFactory.prototype.picture3x4 = function () {
        return "\u041A\u0430\u0440\u0442\u0438\u043D\u0430 3\u04454";
    };
    PictureFactory.prototype.picture10x15 = function () {
        return "\u041A\u0430\u0440\u0442\u0438\u043D\u0430 10\u044515";
    };
    return PictureFactory;
}());
var frame = new FrameFactory();
var picture = new PictureFactory();
var pictureInFeame = new Facade(frame, picture);
console.log(pictureInFeame.pictureWithFrame10x15());
console.log(pictureInFeame.pictureWithFrame3x4());
//# sourceMappingURL=facade.js.map