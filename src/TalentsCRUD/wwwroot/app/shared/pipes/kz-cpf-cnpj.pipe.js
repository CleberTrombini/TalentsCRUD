/**
 * Filtro/Pipe de formatação de CPF/CNPJ.
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
var _1 = require('./');
var KzCpfCnpjPipe = (function () {
    /**
     * Construtor da classe.
     */
    function KzCpfCnpjPipe() {
        this.kzCpfPipe = new _1.KzCpfPipe();
        this.kzCnpjPipe = new _1.KzCnpjPipe();
    }
    /**
     * Formata um CPF/CNPJ ou retorna seu valor passado caso inválido.
     * O CPF/CNPJ informado deve ser composto por 11 ou 14 caracteres
     * numéricos respectivamente.
     *
     * @param string cpfCnpj
     * @return string
     */
    KzCpfCnpjPipe.prototype.transform = function (cpfCnpj) {
        if (!cpfCnpj) {
            return '';
        }
        var cpfCnpjValor = cpfCnpj.replace(/\D/g, '');
        if (cpfCnpjValor.length === 11) {
            cpfCnpj = this.kzCpfPipe.transform(cpfCnpjValor);
        }
        else if (cpfCnpjValor.length === 14) {
            cpfCnpj = this.kzCnpjPipe.transform(cpfCnpjValor);
        }
        return cpfCnpj;
    };
    KzCpfCnpjPipe = __decorate([
        core_1.Pipe({
            name: 'kzCpfCnpj'
        }), 
        __metadata('design:paramtypes', [])
    ], KzCpfCnpjPipe);
    return KzCpfCnpjPipe;
}());
exports.KzCpfCnpjPipe = KzCpfCnpjPipe;
//# sourceMappingURL=kz-cpf-cnpj.pipe.js.map