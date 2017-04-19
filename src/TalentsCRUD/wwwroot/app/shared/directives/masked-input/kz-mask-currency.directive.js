/**
 * Diretiva de máscara para campos monetários.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.4
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
var KzMaskCurrencyDirective = (function () {
    function KzMaskCurrencyDirective() {
    }
    KzMaskCurrencyDirective.prototype.ngOnInit = function () {
        this.separadorDecimal = this.kzMask.decimal || ',';
        this.separadorMilhar = this.kzMask.milhar || '.';
        this.prefixo = this.kzMask.prefixo || '';
    };
    KzMaskCurrencyDirective.prototype.writeValue = function (value) {
    };
    KzMaskCurrencyDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    KzMaskCurrencyDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    KzMaskCurrencyDirective.prototype.onKeyup = function ($event) {
        var valorNum = parseInt($event.target.value.replace(/\D/g, ''));
        var valorMask = '';
        var valor;
        if (isNaN(valorNum)) {
            this.onChange('');
            $event.target.value = '';
            return;
        }
        valor = valorNum.toString();
        switch (valor.length) {
            case 1:
                valorMask = '0' + this.separadorDecimal +
                    '0' + valor;
                break;
            case 2:
                valorMask = '0' + this.separadorDecimal + valor;
                break;
            case 3:
                valorMask = valor.substr(0, 1) + this.separadorDecimal +
                    valor.substr(1, 2);
                break;
            default:
                break;
        }
        if (valorMask === '') {
            var sepMilhar = 0;
            for (var i = (valor.length - 3); i >= 0; i--) {
                if (sepMilhar === 3) {
                    valorMask = this.separadorMilhar + valorMask;
                    sepMilhar = 0;
                }
                valorMask = valor.charAt(i) + valorMask;
                sepMilhar++;
            }
            valorMask = valorMask + this.separadorDecimal +
                valor.substr(valor.length - 2, 2);
        }
        if (this.separadorDecimal === ',') {
            this.onChange(valorMask.replace(/\./g, '').replace(',', '.'));
        }
        else {
            this.onChange(valorMask.replace(/\,/g, ''));
        }
        if (this.prefixo !== '') {
            valorMask = this.prefixo + ' ' + valorMask;
        }
        $event.target.value = valorMask;
    };
    KzMaskCurrencyDirective.prototype.onBlur = function ($event) {
        var pattern = '0' + this.separadorDecimal + '00';
        if ($event.target.value.indexOf(pattern) === -1) {
            return;
        }
        this.onChange('');
        $event.target.value = '';
    };
    __decorate([
        core_1.Input('kzMaskCurrency'), 
        __metadata('design:type', Object)
    ], KzMaskCurrencyDirective.prototype, "kzMask", void 0);
    __decorate([
        core_1.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], KzMaskCurrencyDirective.prototype, "onKeyup", null);
    __decorate([
        core_1.HostListener('blur', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], KzMaskCurrencyDirective.prototype, "onBlur", null);
    KzMaskCurrencyDirective = __decorate([
        core_1.Directive({
            selector: '[kzMaskCurrency]',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: KzMaskCurrencyDirective,
                    multi: true
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], KzMaskCurrencyDirective);
    return KzMaskCurrencyDirective;
}());
exports.KzMaskCurrencyDirective = KzMaskCurrencyDirective;
//# sourceMappingURL=kz-mask-currency.directive.js.map