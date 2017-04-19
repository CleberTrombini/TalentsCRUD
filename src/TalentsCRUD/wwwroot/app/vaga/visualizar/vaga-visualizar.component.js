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
var router_1 = require('@angular/router');
var vaga_model_1 = require('../shared/vaga.model');
var vaga_service_1 = require('../shared/vaga.service');
var VagaVisualizarComponent = (function () {
    /**
     * Construtor.
     *
     * @param ActivatedRoute route
     * @param VagaService vagaService
     */
    function VagaVisualizarComponent(route, vagaService) {
        this.route = route;
        this.vagaService = vagaService;
    }
    /**
     * Método executado logo após a criação do componente.
     */
    VagaVisualizarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.vaga = new vaga_model_1.Vaga();
        this.vagaService.buscarPorId(this.id)
            .subscribe(function (vaga) { return _this.vaga = vaga; }, function (error) { return _this.msgErro = error; });
    };
    VagaVisualizarComponent = __decorate([
        core_1.Component({
            selector: 'kz-vaga-visualizar',
            templateUrl: 'app/vaga/visualizar/vaga-visualizar.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, vaga_service_1.VagaService])
    ], VagaVisualizarComponent);
    return VagaVisualizarComponent;
}());
exports.VagaVisualizarComponent = VagaVisualizarComponent;
//# sourceMappingURL=vaga-visualizar.component.js.map