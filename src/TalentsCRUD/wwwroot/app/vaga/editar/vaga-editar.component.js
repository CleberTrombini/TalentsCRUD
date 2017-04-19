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
var VagaEditarComponent = (function () {
    /**
     * Construtor.
     *
     * @param ActivatedRoute route
     * @param Router router
     * @param VagaService vagaService
     */
    function VagaEditarComponent(route, router, vagaService) {
        this.route = route;
        this.router = router;
        this.vagaService = vagaService;
    }
    /**
     * Método executado logo após a criação do componente.
     */
    VagaEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.vaga = new vaga_model_1.Vaga();
        this.vagaService.buscarPorId(this.id)
            .subscribe(function (vaga) { return _this.vaga = vaga; }, function (error) { return _this.msgErro = error; });
    };
    /**
     * Método responsável por atualizar os dados de um candidato.
     */
    VagaEditarComponent.prototype.atualizar = function () {
        var _this = this;
        this.vagaService.atualizar(this.id, this.vaga)
            .subscribe(function (vaga) { return _this.router.navigate(['/vagas']); }, function (error) { return _this.msgErro = error; });
    };
    VagaEditarComponent = __decorate([
        core_1.Component({
            selector: 'kz-vaga-editar',
            templateUrl: 'app/vaga/editar/vaga-editar.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, vaga_service_1.VagaService])
    ], VagaEditarComponent);
    return VagaEditarComponent;
}());
exports.VagaEditarComponent = VagaEditarComponent;
//# sourceMappingURL=vaga-editar.component.js.map