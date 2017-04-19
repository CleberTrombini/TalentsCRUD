/**
 * Validador de CPF/CNPJ.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */
"use strict";
var _1 = require('./');
var KzCpfCnpjValidator = (function () {
    function KzCpfCnpjValidator() {
    }
    /**
     * Método estático responsável pela validação dos dados.
     *
     * @param AbstractControl control
     * @return object ou null caso válido
     */
    KzCpfCnpjValidator.validate = function (control) {
        if (this.cpfCnpjValido(control.value)) {
            return null;
        }
        return { 'cpfCnpj': true };
    };
    /**
     * Valida um CPF/CNPJ.
     *
     * @param cpfCnpj valor do cpf/cnpj a ser validado.
     * @return boolean informando se o cpf/cnpj é válido ou não.
     */
    KzCpfCnpjValidator.cpfCnpjValido = function (cpfCnpj) {
        if (!cpfCnpj) {
            return false;
        }
        var cpfCnpjValor = cpfCnpj.replace(/\D/g, '');
        var cpfCnpjValido = false;
        if (cpfCnpjValor.length === 11) {
            cpfCnpjValido = _1.KzCpfValidator.cpfValido(cpfCnpjValor);
        }
        else if (cpfCnpjValor.length === 14) {
            cpfCnpjValido = _1.KzCnpjValidator.cnpjValido(cpfCnpjValor);
        }
        return cpfCnpjValido;
    };
    return KzCpfCnpjValidator;
}());
exports.KzCpfCnpjValidator = KzCpfCnpjValidator;
//# sourceMappingURL=kz-cpf-cnpj.validator.js.map