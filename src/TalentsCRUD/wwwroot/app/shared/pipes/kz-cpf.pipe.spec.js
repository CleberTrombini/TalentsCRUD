/**
 * Arquivo de teste do filtro/pipe de CPF.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */
"use strict";
var _1 = require('./');
describe('KzCpfPipe', function () {
    var kzCpfPipe;
    beforeEach(function () {
        kzCpfPipe = new _1.KzCpfPipe();
    });
    it('deve formatar corretamento o CPF 35415322575 => 354.153.225-75', function () {
        var cpf = kzCpfPipe.transform('35415322575');
        expect(cpf).toEqual('354.153.225-75');
    });
    it('deve formatar corretamento o CPF 354.153.225-75 => 354.153.225-75', function () {
        var cpf = kzCpfPipe.transform('354.153.225-75');
        expect(cpf).toEqual('354.153.225-75');
    });
    it('deve retornar o CPF passado por ser inválido (3541532257a)', function () {
        var cpf = kzCpfPipe.transform('3541532257a');
        expect(cpf).toEqual('3541532257a');
    });
    it('deve retornar vazio pois o CPF não contém valor', function () {
        var cpf = kzCpfPipe.transform('');
        expect(cpf).toEqual('');
    });
    it('deve retornar o CPF passado por ser inválido (3541532257)', function () {
        var cpf = kzCpfPipe.transform('3541532257');
        expect(cpf).toEqual('3541532257');
    });
    it('deve retornar vazio pois o CPF é undefined', function () {
        var cpf = kzCpfPipe.transform(undefined);
        expect(cpf).toEqual('');
    });
});
//# sourceMappingURL=kz-cpf.pipe.spec.js.map