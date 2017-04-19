/**
 * Arquivo de configuração do módulo compartilhado.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var _1 = require('./');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                _1.KzCepPipe,
                _1.KzCpfPipe,
                _1.KzCnpjPipe,
                _1.KzCpfCnpjPipe,
                _1.KzCpfValidatorDirective,
                _1.KzCnpjValidatorDirective,
                _1.KzCpfCnpjValidatorDirective,
                _1.ModalUtilComponent,
                _1.KzPaginacaoComponent,
                _1.KzMaskDirective,
                _1.KzMaskCurrencyDirective
            ],
            exports: [
                _1.KzCepPipe,
                _1.KzCpfPipe,
                _1.KzCnpjPipe,
                _1.KzCpfCnpjPipe,
                _1.KzCpfValidatorDirective,
                _1.KzCnpjValidatorDirective,
                _1.KzCpfCnpjValidatorDirective,
                _1.ModalUtilComponent,
                _1.KzPaginacaoComponent,
                _1.KzMaskDirective,
                _1.KzMaskCurrencyDirective,
                common_1.CommonModule,
                forms_1.FormsModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map