/**
 * Arquivo utilitário que serve como mock de um
 * Router.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.5
 */
"use strict";
var RouterStubService = (function () {
    function RouterStubService() {
    }
    RouterStubService.prototype.navigateByUrl = function (url) {
        return url;
    };
    RouterStubService.prototype.navigate = function (url) {
        return url;
    };
    return RouterStubService;
}());
exports.RouterStubService = RouterStubService;
//# sourceMappingURL=router-stub.service.js.map