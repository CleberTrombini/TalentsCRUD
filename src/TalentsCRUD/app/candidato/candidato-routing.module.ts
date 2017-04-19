import { Routes } from '@angular/router'; 

import { CandidatoCadastrarComponent } from './cadastrar/candidato-cadastrar.component';
import { CandidatoEditarComponent } from './editar/candidato-editar.component';
import { CandidatoListarComponent } from './listar/candidato-listar.component';
import { CandidatoVisualizarComponent } from './visualizar/candidato-visualizar.component';

export const CandidatoRoutes: Routes = [
	{ path: 'candidatos', redirectTo: 'candidatos/listar' },
	{ path: 'candidatos/listar', component: CandidatoListarComponent }, 
	{ path: 'candidatos/cadastrar', component: CandidatoCadastrarComponent }, 
	{ path: 'candidatos/editar/:id', component: CandidatoEditarComponent },
	{ path: 'candidatos/visualizar/:id', component: CandidatoVisualizarComponent }
];
