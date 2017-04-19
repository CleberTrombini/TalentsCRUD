import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { VagaListarComponent } from './listar/vaga-listar.component';
import { VagaCadastrarComponent } from './cadastrar/vaga-cadastrar.component';
import { VagaEditarComponent } from './editar/vaga-editar.component';
import { VagaVisualizarComponent } from './visualizar/vaga-visualizar.component';
import { VagaService } from './shared/vaga.service';

@NgModule({
	imports: [ 
        RouterModule,
        FormsModule,
        CommonModule
	],
	declarations: [
		VagaCadastrarComponent,
		VagaEditarComponent,
		VagaListarComponent,
        VagaVisualizarComponent
	],
	providers: [
		VagaService
	]
})
export class VagaModule {}
