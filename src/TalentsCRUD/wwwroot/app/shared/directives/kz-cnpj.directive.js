/**
 * Diretiva de validação de CNPJ.
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
var forms_1 = require('@angular/forms');
var validators_1 = require('../validators');
var KzCnpjValidatorDirective = (function () {
    function KzCnpjValidatorDirective() {
    }
    /**
     * Valida os dados.
     *
     * @param AbstractControl control
     * @return object ou null caso válido
     */
    KzCnpjValidatorDirective.prototype.validate = function (control) {
        return validators_1.KzCnpjValidator.validate(control);
    };
    KzCnpjValidatorDirective = __decorate([
        core_1.Directive({
            selector: '[kz-cnpj]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: KzCnpjValidatorDirective,
                    multi: true
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], KzCnpjValidatorDirective);
    return KzCnpjValidatorDirective;
}());
exports.KzCnpjValidatorDirective = KzCnpjValidatorDirective;
//# sourceMappingURL=kz-cnpj.directive.js.map