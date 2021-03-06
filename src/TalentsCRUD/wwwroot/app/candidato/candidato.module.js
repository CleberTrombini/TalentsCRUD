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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var modal_util_component_1 = require('../shared/utils/modal-util.component');
var candidato_cadastrar_component_1 = require('./cadastrar/candidato-cadastrar.component');
var candidato_editar_component_1 = require('./editar/candidato-editar.component');
var candidato_listar_component_1 = require('./listar/candidato-listar.component');
var candidato_visualizar_component_1 = require('./visualizar/candidato-visualizar.component');
var candidato_service_1 = require('./shared/candidato.service');
var CandidatoModule = (function () {
    function CandidatoModule() {
    }
    CandidatoModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule
            ],
            declarations: [
                candidato_cadastrar_component_1.CandidatoCadastrarComponent,
                candidato_editar_component_1.CandidatoEditarComponent,
                candidato_listar_component_1.CandidatoListarComponent,
                candidato_visualizar_component_1.CandidatoVisualizarComponent,
                modal_util_component_1.ModalUtilComponent
            ],
            providers: [
                candidato_service_1.CandidatoService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CandidatoModule);
    return CandidatoModule;
}());
exports.CandidatoModule = CandidatoModule;
//# sourceMappingURL=candidato.module.js.map