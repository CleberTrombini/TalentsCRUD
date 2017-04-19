/**
 * Filtro/Pipe de formatação de CNPJ.
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
var KzCnpjPipe = (function () {
    function KzCnpjPipe() {
    }
    /**
     * Formata um CNPJ ou retorna o valor passado caso inválido.
     * O CNPJ informado deve ser composto por 14 caracteres numéricos.
     *
     * @param string cnpj
     * @return string
     */
    KzCnpjPipe.prototype.transform = function (cnpj) {
        if (!cnpj) {
            return '';
        }
        var cnpjValor = cnpj.replace(/\D/g, '');
        if (cnpjValor.length !== 14) {
            return cnpj;
        }
        var cnpjLista = cnpjValor.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
        if (cnpjLista && cnpjLista.length === 6) {
            cnpj = cnpjLista[1] + '.' + cnpjLista[2] + '.' + cnpjLista[3] + '/' + cnpjLista[4] + '-' + cnpjLista[5];
        }
        return cnpj;
    };
    KzCnpjPipe = __decorate([
        core_1.Pipe({
            name: 'kzCnpj'
        }), 
        __metadata('design:paramtypes', [])
    ], KzCnpjPipe);
    return KzCnpjPipe;
}());
exports.KzCnpjPipe = KzCnpjPipe;
//# sourceMappingURL=kz-cnpj.pipe.js.map