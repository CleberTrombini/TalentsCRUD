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
var forms_1 = require('@angular/forms');
var vaga_listar_component_1 = require('./listar/vaga-listar.component');
var vaga_cadastrar_component_1 = require('./cadastrar/vaga-cadastrar.component');
var vaga_editar_component_1 = require('./editar/vaga-editar.component');
var vaga_visualizar_component_1 = require('./visualizar/vaga-visualizar.component');
var vaga_service_1 = require('./shared/vaga.service');
var VagaModule = (function () {
    function VagaModule() {
    }
    VagaModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                forms_1.FormsModule,
                common_1.CommonModule
            ],
            declarations: [
                vaga_cadastrar_component_1.VagaCadastrarComponent,
                vaga_editar_component_1.VagaEditarComponent,
                vaga_listar_component_1.VagaListarComponent,
                vaga_visualizar_component_1.VagaVisualizarComponent
            ],
            providers: [
                vaga_service_1.VagaService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VagaModule);
    return VagaModule;
}());
exports.VagaModule = VagaModule;
//# sourceMappingURL=vaga.module.js.map