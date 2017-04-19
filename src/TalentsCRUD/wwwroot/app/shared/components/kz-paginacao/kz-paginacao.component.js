/**
 * Componente utilitário para exibir os links de
 * paginação para uma tabela HTML.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.2
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
var router_1 = require('@angular/router');
var KzPaginacaoComponent = (function () {
    function KzPaginacaoComponent(route) {
        this.route = route;
        this.onPaginate = new core_1.EventEmitter();
    }
    KzPaginacaoComponent.prototype.ngOnInit = function () {
        this.qtdAdjacentes = this.qtdAdjacentes || KzPaginacaoComponent.ADJACENTES_PADRAO;
        this.qtdPorPagina = this.qtdPorPagina || KzPaginacaoComponent.TOTAL_PAGS_PADRAO;
        this.pagina = +this.route.snapshot.queryParams['pagina'] || KzPaginacaoComponent.PAG_PADRAO;
        this.totalRegistros = this.totalRegistros || KzPaginacaoComponent.REG_PADRAO;
        this.qtdPaginas = Math.ceil(this.totalRegistros / this.qtdPorPagina);
        this.gerarLinks();
    };
    /**
     * Gera os links de paginação.
     */
    KzPaginacaoComponent.prototype.gerarLinks = function () {
        this.exibirProximo = this.qtdPaginas !== this.pagina;
        this.paginas = [];
        var iniAdjacente = (this.pagina - this.qtdAdjacentes <= 0) ? 1 :
            (this.pagina - this.qtdAdjacentes);
        var fimAdjacente = (this.pagina + this.qtdAdjacentes >= this.qtdPaginas) ?
            this.qtdPaginas : (this.pagina + this.qtdAdjacentes);
        for (var i = iniAdjacente; i <= fimAdjacente; i++) {
            this.paginas.push(i);
        }
    };
    /**
     * Método responsável por chamar o Emitter de
     * paginação.
     *
     * @param number pagina
     * @param any $event número da página a ser exibida.
     */
    KzPaginacaoComponent.prototype.paginar = function (pagina, $event) {
        $event.preventDefault();
        this.pagina = pagina;
        this.gerarLinks();
        this.onPaginate.emit(pagina);
    };
    KzPaginacaoComponent.TOTAL_PAGS_PADRAO = 20;
    KzPaginacaoComponent.PAG_PADRAO = 1;
    KzPaginacaoComponent.REG_PADRAO = 0;
    KzPaginacaoComponent.ADJACENTES_PADRAO = 10;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], KzPaginacaoComponent.prototype, "qtdPorPagina", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], KzPaginacaoComponent.prototype, "totalRegistros", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], KzPaginacaoComponent.prototype, "qtdAdjacentes", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], KzPaginacaoComponent.prototype, "onPaginate", void 0);
    KzPaginacaoComponent = __decorate([
        core_1.Component({
            selector: 'kz-paginacao',
            templateUrl: 'kz-paginacao.component.html',
            styleUrls: ['kz-paginacao.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], KzPaginacaoComponent);
    return KzPaginacaoComponent;
}());
exports.KzPaginacaoComponent = KzPaginacaoComponent;
//# sourceMappingURL=kz-paginacao.component.js.map