/**
 * Arquivo de teste do validador de CPF.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */
"use strict";
var forms_1 = require('@angular/forms');
var _1 = require('./');
describe('KzCpfValidator', function () {
    beforeEach(function () {
    });
    it('deve validar corretamente o CPF 54512089306', function () {
        var control = new forms_1.FormControl('54512089306');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toBeNull();
    });
    it('deve validar corretamente o CPF 615.442.056-00', function () {
        var control = new forms_1.FormControl('615.442.056-00');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toBeNull();
    });
    it('deve retornar inválido para o CPF 12545236258', function () {
        var control = new forms_1.FormControl('12545236258');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 00000000000', function () {
        var control = new forms_1.FormControl('00000000000');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 11111111111', function () {
        var control = new forms_1.FormControl('11111111111');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 22222222222', function () {
        var control = new forms_1.FormControl('22222222222');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 33333333333', function () {
        var control = new forms_1.FormControl('33333333333');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 44444444444', function () {
        var control = new forms_1.FormControl('44444444444');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 55555555555', function () {
        var control = new forms_1.FormControl('55555555555');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 66666666666', function () {
        var control = new forms_1.FormControl('66666666666');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 77777777777', function () {
        var control = new forms_1.FormControl('77777777777');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 88888888888', function () {
        var control = new forms_1.FormControl('88888888888');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para o CPF 99999999999', function () {
        var control = new forms_1.FormControl('99999999999');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para CPF vazio', function () {
        var control = new forms_1.FormControl('');
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    it('deve retornar inválido para CPF undefined', function () {
        var control = new forms_1.FormControl(undefined);
        var cpf = _1.KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
});
//# sourceMappingURL=kz-cpf.validator.spec.js.map