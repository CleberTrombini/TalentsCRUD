import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalUtilComponent } from '../shared/utils/modal-util.component';
import { CandidatoCadastrarComponent } from './cadastrar/candidato-cadastrar.component';
import { CandidatoEditarComponent } from './editar/candidato-editar.component';
import { CandidatoListarComponent } from './listar/candidato-listar.component';
import { CandidatoVisualizarComponent } from './visualizar/candidato-visualizar.component';
import { CandidatoService } from './shared/candidato.service';

@NgModule({
	imports: [ 
		RouterModule,
		HttpModule,
		FormsModule,
        ReactiveFormsModule,
        CommonModule
	],
	declarations: [
		CandidatoCadastrarComponent,
		CandidatoEditarComponent,
		CandidatoListarComponent,
        CandidatoVisualizarComponent,
        ModalUtilComponent
	],
	providers: [
		CandidatoService
	]
})
export class CandidatoModule {}