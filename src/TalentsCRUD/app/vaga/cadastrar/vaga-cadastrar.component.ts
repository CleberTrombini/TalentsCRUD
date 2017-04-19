import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { Vaga } from '../shared/vaga.model';
import { VagaService } from '../shared/vaga.service';

@Component({
	selector: 'kz-vaga-cadastrar',
    templateUrl: 'app/vaga/cadastrar/vaga-cadastrar.component.html'
})
export class VagaCadastrarComponent implements OnInit {

	private vaga: Vaga;
	private msgErro: string;

	/**
	 * Construtor.
	 *
	 * @param Router router
	 * @param VagaService vagaService
	 */
	constructor(
		private router: Router, 
		private vagaService: VagaService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.vaga = new Vaga();
	}

	/**
	 * Método responsável por cadastrar um novo vaga.
	 */
	cadastrar() {
		this.vagaService.cadastrar(this.vaga)
			.subscribe(
                	vaga => this.router.navigate(['vagas']),
                	error => this.msgErro = error);
		}
}