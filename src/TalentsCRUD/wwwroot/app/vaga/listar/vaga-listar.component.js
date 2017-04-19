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
var vaga_service_1 = require('../shared/vaga.service');
var VagaListarComponent = (function () {
    /**
     * Construtor.
     *
     * @param VagaService vagaService
     */
    function VagaListarComponent(vagaService, route) {
        this.vagaService = vagaService;
        this.route = route;
    }
    VagaListarComponent.prototype.listarTodos = function () {
        var _this = this;
        this.vagaService.listarTodos()
            .subscribe(function (vagas) { return _this.vagas = vagas; }, function (error) { return _this.msgErro = error; });
    };
    /**
     * Método executado logo após a criação do componente.
     */
    VagaListarComponent.prototype.ngOnInit = function () {
        this.listarTodos();
    };
    /**
     * Método responsável por armazenar o id do candidato a
     * removido.
     *
     * @param number id
     */
    VagaListarComponent.prototype.excluir = function (id) {
        this.idExcluir = id;
    };
    /**
     * Método responsável por remover um candidato.
     */
    VagaListarComponent.prototype.onExcluir = function () {
        var _this = this;
        this.vagaService.excluir(this.idExcluir)
            .subscribe(function (data) { return _this.listarTodos(); }, function (error) { return _this.msgErro = error; });
        this.idExcluir = -1;
    };
    VagaListarComponent = __decorate([
        core_1.Component({
            selector: 'kz-vaga-listar',
            templateUrl: 'app/vaga/listar/vaga-listar.component.html'
        }), 
        __metadata('design:paramtypes', [vaga_service_1.VagaService, router_1.ActivatedRoute])
    ], VagaListarComponent);
    return VagaListarComponent;
}());
exports.VagaListarComponent = VagaListarComponent;
//# sourceMappingURL=vaga-listar.component.js.map