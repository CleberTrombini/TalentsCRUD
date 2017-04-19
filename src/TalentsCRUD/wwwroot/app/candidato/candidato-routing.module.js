"use strict";
var candidato_cadastrar_component_1 = require('./cadastrar/candidato-cadastrar.component');
var candidato_editar_component_1 = require('./editar/candidato-editar.component');
var candidato_listar_component_1 = require('./listar/candidato-listar.component');
var candidato_visualizar_component_1 = require('./visualizar/candidato-visualizar.component');
exports.CandidatoRoutes = [
    { path: 'candidatos', redirectTo: 'candidatos/listar' },
    { path: 'candidatos/listar', component: candidato_listar_component_1.CandidatoListarComponent },
    { path: 'candidatos/cadastrar', component: candidato_cadastrar_component_1.CandidatoCadastrarComponent },
    { path: 'candidatos/editar/:id', component: candidato_editar_component_1.CandidatoEditarComponent },
    { path: 'candidatos/visualizar/:id', component: candidato_visualizar_component_1.CandidatoVisualizarComponent }
];
//# sourceMappingURL=candidato-routing.module.js.map