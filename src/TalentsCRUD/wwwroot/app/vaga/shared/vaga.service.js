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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var VagaService = (function () {
    function VagaService(_http) {
        this._http = _http;
        this._url = "http://localhost:50000/api/Vagas";
    }
    /**
     * Retorna listagem de todos os vagas.
     *
     * @return vaga[] vagas
     */
    VagaService.prototype.listarTodos = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    /**
     * Cadastra um novo vaga.
     *
     * @param vaga vaga
     */
    VagaService.prototype.cadastrar = function (vaga) {
        var params = JSON.stringify(vaga);
        return this._http.post(this._url, params, this.headers())
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    /**
     * Retorna os dados de um vaga por id.
     *
     * @param number id
     * @return Usuario vaga
     */
    VagaService.prototype.buscarPorId = function (id) {
        return this._http.get(this._url + '/' + id, this.headers())
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    /**
     * Atualiza os dados de um vaga.
     *
     * @param number id
     * @param vaga vaga
     */
    VagaService.prototype.atualizar = function (id, vaga) {
        var params = JSON.stringify(vaga);
        return this._http.put(this._url + '/' + id, params, this.headers())
            .catch(this.errorHandler);
    };
    /**
     * Remove um vaga.
     *
     * @param number id
     */
    VagaService.prototype.excluir = function (id) {
        return this._http.delete(this._url + '/' + id, this.headers())
            .catch(this.errorHandler);
    };
    VagaService.prototype.headers = function () {
        var headersParams = { 'Content-Type': 'application/json' };
        var headers = new http_1.Headers(headersParams);
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    VagaService.prototype.errorHandler = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || "Server Error");
    };
    VagaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VagaService);
    return VagaService;
}());
exports.VagaService = VagaService;
//# sourceMappingURL=vaga.service.js.map