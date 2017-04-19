/**
 * Filtro/Pipe de formatação de CPF.
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
var KzCpfPipe = (function () {
    function KzCpfPipe() {
    }
    /**
     * Formata um CPF ou retorna seu valor passado caso inválido.
     * O CPF informado deve ser composto por 11 caracteres numéricos.
     *
     * @param string cpf
     * @return string
     */
    KzCpfPipe.prototype.transform = function (cpf) {
        if (!cpf) {
            return '';
        }
        var cpfValor = cpf.replace(/\D/g, '');
        if (cpfValor.length !== 11) {
            return cpf;
        }
        var cpfLista = cpfValor.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
        if (cpfLista && cpfLista.length === 5) {
            cpf = cpfLista[1] + '.' + cpfLista[2] + '.' + cpfLista[3] + '-' + cpfLista[4];
        }
        return cpf;
    };
    KzCpfPipe = __decorate([
        core_1.Pipe({
            name: 'kzCpf'
        }), 
        __metadata('design:paramtypes', [])
    ], KzCpfPipe);
    return KzCpfPipe;
}());
exports.KzCpfPipe = KzCpfPipe;
//# sourceMappingURL=kz-cpf.pipe.js.map