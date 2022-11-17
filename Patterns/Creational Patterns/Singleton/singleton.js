var Singleton = (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
function createInstance() {
    var user1 = Singleton.getInstance();
    var user2 = Singleton.getInstance();
    if (user1 === user2) {
        console.log("---!!!---Singleton works, user1 and user2 are the same instance.");
    }
    else {
        console.log("---!!!---Singleton failed, user1 and user2 are not the same instance.");
    }
}
createInstance();
//# sourceMappingURL=singleton.js.map