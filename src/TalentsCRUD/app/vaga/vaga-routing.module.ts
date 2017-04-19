import { Routes } from '@angular/router'; 

import { VagaListarComponent } from './listar/vaga-listar.component';
import { VagaCadastrarComponent } from './cadastrar/vaga-cadastrar.component';
import { VagaEditarComponent } from './editar/vaga-editar.component';
import { VagaVisualizarComponent } from './visualizar/vaga-visualizar.component';

export const VagaRoutes: Routes = [
	{ path: 'vagas', redirectTo: 'vagas/listar' },
	{ path: 'vagas/listar', component: VagaListarComponent }, 
	{ path: 'vagas/cadastrar', component: VagaCadastrarComponent }, 
	{ path: 'vagas/editar/:id', component: VagaEditarComponent },
	{ path: 'vagas/visualizar/:id', component: VagaVisualizarComponent }
];
