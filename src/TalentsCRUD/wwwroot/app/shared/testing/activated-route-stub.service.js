/**
 * Arquivo utilitário que serve como mock de um
 * ActivatedRoute.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.5
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var ActivatedRouteStub = (function () {
    function ActivatedRouteStub() {
        this._queryParams = [];
        this.subject = new BehaviorSubject_1.BehaviorSubject(this.testParams);
        this.params = this.subject.asObservable();
    }
    Object.defineProperty(ActivatedRouteStub.prototype, "queryParams", {
        get: function () {
            return this._queryParams;
        },
        set: function (params) {
            this._queryParams = params;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteStub.prototype, "testParams", {
        get: function () {
            return this._testParams;
        },
        set: function (params) {
            this._testParams = params;
            this.subject.next(params);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteStub.prototype, "snapshot", {
        // ActivatedRoute.snapshot.params
        get: function () {
            return {
                params: this.testParams,
                queryParams: this._queryParams
            };
        },
        enumerable: true,
        configurable: true
    });
    ActivatedRouteStub = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ActivatedRouteStub);
    return ActivatedRouteStub;
}());
exports.ActivatedRouteStub = ActivatedRouteStub;
//# sourceMappingURL=activated-route-stub.service.js.map