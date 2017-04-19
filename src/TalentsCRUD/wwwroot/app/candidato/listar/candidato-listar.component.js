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
var CandidatoListarComponent = (function () {
    /**
     * Construtor.
     *
     * @param CandidatoService candidatoService
     */
    function CandidatoListarComponent(candidatoService, route) {
        this.candidatoService = candidatoService;
        this.route = route;
    }
    CandidatoListarComponent.prototype.listarTodos = function () {
        var _this = this;
        this.candidatoService.listarTodos()
            .subscribe(function (candidatos) { return _this.candidatos = candidatos; }, function (error) { return _this.msgErro = error; });
    };
    /**
     * Método executado logo após a criação do componente.
     */
    CandidatoListarComponent.prototype.ngOnInit = function () {
        this.listarTodos();
    };
    /**
     * Método responsável por armazenar o id do candidato a
     * removido.
     *
     * @param number id
     */
    CandidatoListarComponent.prototype.excluir = function (id) {
        this.idExcluir = id;
    };
    /**
     * Método responsável por remover um candidato.
     */
    CandidatoListarComponent.prototype.onExcluir = function () {
        var _this = this;
        this.candidatoService.excluir(this.idExcluir)
            .subscribe(function (data) { return _this.listarTodos(); }, function (error) { return _this.msgErro = error; });
        this.idExcluir = -1;
    };
    CandidatoListarComponent = __decorate([
        core_1.Component({
            selector: 'kz-candidato-listar',
            templateUrl: 'app/candidato/listar/candidato-listar.component.html'
        }), 
        __metadata('design:paramtypes', [candidato_service_1.CandidatoService, router_1.ActivatedRoute])
    ], CandidatoListarComponent);
    return CandidatoListarComponent;
}());
exports.CandidatoListarComponent = CandidatoListarComponent;
//# sourceMappingURL=candidato-listar.component.js.map