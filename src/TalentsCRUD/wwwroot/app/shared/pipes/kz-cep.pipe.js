/**
 * Filtro/Pipe de formatação de CEP.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
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
var KzCepPipe = (function () {
    function KzCepPipe() {
    }
    /**
     * Método responsável por formatar o CEP.
     *
     * @param string cep
     * @return string
     */
    KzCepPipe.prototype.transform = function (cep) {
        if (!cep) {
            return '';
        }
        var cepValor = cep.replace(/\D/g, '');
        if (cepValor.length !== 8) {
            return cep;
        }
        var cepLista = cepValor.match(/^(\d{5})(\d{3})$/);
        if (cepLista && cepLista.length === 3) {
            cep = cepLista[1] + '-' + cepLista[2];
        }
        return cep;
    };
    KzCepPipe = __decorate([
        core_1.Pipe({
            name: 'kzCep'
        }), 
        __metadata('design:paramtypes', [])
    ], KzCepPipe);
    return KzCepPipe;
}());
exports.KzCepPipe = KzCepPipe;
//# sourceMappingURL=kz-cep.pipe.js.map