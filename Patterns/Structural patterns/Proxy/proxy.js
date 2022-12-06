var Service = (function () {
    function Service() {
    }
    Service.prototype.operation = function (status) {
        console.log("\"".concat(status, "\" welcom to the Servise."));
    };
    return Service;
}());
var ProxyService = (function () {
    function ProxyService() {
    }
    ProxyService.prototype.operation = function (status) {
        if (status == "admin") {
            this.realService = new Service;
            this.realService.operation(status);
        }
        else {
            console.log("\"".concat(status, "\" access is denied"));
        }
    };
    return ProxyService;
}());
var proxyServise = new ProxyService();
proxyServise.operation("admin");
proxyServise.operation("user");
//# sourceMappingURL=proxy.js.map