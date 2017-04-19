/**
 * Diretiva de calendário seletor de data (date picker)
 * com o Pikaday.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.7
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
var moment = require('moment');
var KzPikadayDirective = (function () {
    function KzPikadayDirective() {
        this.formato = 'DD/MM/YYYY';
        this.mascara = '99/99/9999';
        this.initValue = false;
    }
    KzPikadayDirective.prototype.writeValue = function (value) {
        this.value = value;
    };
    KzPikadayDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    KzPikadayDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    KzPikadayDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.field = document.getElementById(this.pikaday);
        this.picker = new Pikaday({
            field: this.field,
            onSelect: function (date) {
                _this.field.value = moment(date).format(_this.formato);
                _this.onChange(_this.field.value);
            },
            i18n: {
                previousMonth: 'Anterior',
                nextMonth: 'Próximo',
                months: [
                    'Janeiro', 'Fevereiro', 'Março', 'Abril',
                    'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                    'Outubro', 'Novembro', 'Dezembro'
                ],
                weekdays: [
                    'Domingo', 'Segunda-feira', 'Terça-feira',
                    'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
                ],
                weekdaysShort: [
                    'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
                ]
            }
        });
    };
    KzPikadayDirective.prototype.ngAfterViewChecked = function () {
        if (this.value !== undefined && !this.initValue) {
            this.picker.setDate(moment(this.value, this.formato).toDate());
            this.initValue = true;
        }
    };
    KzPikadayDirective.prototype.onKeyup = function ($event) {
        var valor = $event.target.value.replace(/\D/g, '');
        var pad = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
        var valorMask = valor + pad.substring(0, pad.length - valor.length);
        // retorna caso pressionado backspace
        if ($event.keyCode === 8) {
            this.onChange(valor);
            return;
        }
        var valorMaskPos = 0;
        valor = '';
        for (var i = 0; i < this.mascara.length; i++) {
            if (isNaN(parseInt(this.mascara.charAt(i), 10))) {
                valor += this.mascara.charAt(i);
            }
            else {
                valor += valorMask[valorMaskPos++];
            }
        }
        if (valor.indexOf('_') > -1) {
            valor = valor.substr(0, valor.indexOf('_'));
        }
        $event.target.value = valor;
        this.onChange(valor);
    };
    KzPikadayDirective.prototype.onBlur = function ($event) {
        var valor = $event.target.value.length;
        if (valor === 10) {
            return;
        }
        this.onChange('');
        $event.target.value = '';
    };
    __decorate([
        core_1.Input('kzPikaday'), 
        __metadata('design:type', String)
    ], KzPikadayDirective.prototype, "pikaday", void 0);
    __decorate([
        core_1.Input('formato'), 
        __metadata('design:type', String)
    ], KzPikadayDirective.prototype, "formato", void 0);
    __decorate([
        core_1.Input('mascara'), 
        __metadata('design:type', String)
    ], KzPikadayDirective.prototype, "mascara", void 0);
    __decorate([
        core_1.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], KzPikadayDirective.prototype, "onKeyup", null);
    __decorate([
        core_1.HostListener('blur', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], KzPikadayDirective.prototype, "onBlur", null);
    KzPikadayDirective = __decorate([
        core_1.Directive({
            selector: '[kzPikaday]',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: KzPikadayDirective,
                    multi: true
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], KzPikadayDirective);
    return KzPikadayDirective;
}());
exports.KzPikadayDirective = KzPikadayDirective;
//# sourceMappingURL=kz-pikaday.directive.js.map