"use strict";
var vaga_listar_component_1 = require('./listar/vaga-listar.component');
var vaga_cadastrar_component_1 = require('./cadastrar/vaga-cadastrar.component');
var vaga_editar_component_1 = require('./editar/vaga-editar.component');
var vaga_visualizar_component_1 = require('./visualizar/vaga-visualizar.component');
exports.VagaRoutes = [
    { path: 'vagas', redirectTo: 'vagas/listar' },
    { path: 'vagas/listar', component: vaga_listar_component_1.VagaListarComponent },
    { path: 'vagas/cadastrar', component: vaga_cadastrar_component_1.VagaCadastrarComponent },
    { path: 'vagas/editar/:id', component: vaga_editar_component_1.VagaEditarComponent },
    { path: 'vagas/visualizar/:id', component: vaga_visualizar_component_1.VagaVisualizarComponent }
];
//# sourceMappingURL=vaga-routing.module.js.map