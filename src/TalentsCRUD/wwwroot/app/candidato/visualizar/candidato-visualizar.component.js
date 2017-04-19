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
var candidato_service_1 = require('../shared/candidato.service');
var candidato_model_1 = require('../shared/candidato.model');
var CandidatoVisualizarComponent = (function () {
    /**
     * Construtor.
     *
     * @param ActivatedRoute route
     * @param CandidatoService candidatoService
     */
    function CandidatoVisualizarComponent(route, candidatoService) {
        this.route = route;
        this.candidatoService = candidatoService;
    }
    /**
     * Método executado logo após a criação do componente.
     */
    CandidatoVisualizarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.candidato = new candidato_model_1.Candidato();
        this.candidatoService.buscarPorId(this.id)
            .subscribe(function (candidato) { return _this.candidato = candidato; }, function (error) { return _this.msgErro = error; });
    };
    CandidatoVisualizarComponent = __decorate([
        core_1.Component({
            selector: 'kz-candidato-visualizar',
            templateUrl: 'app/candidato/visualizar/candidato-visualizar.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, candidato_service_1.CandidatoService])
    ], CandidatoVisualizarComponent);
    return CandidatoVisualizarComponent;
}());
exports.CandidatoVisualizarComponent = CandidatoVisualizarComponent;
//# sourceMappingURL=candidato-visualizar.component.js.map