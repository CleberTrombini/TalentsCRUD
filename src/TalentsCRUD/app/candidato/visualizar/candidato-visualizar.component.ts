import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CandidatoService } from '../shared/candidato.service';
import { Candidato } from '../shared/candidato.model';

@Component({
	selector: 'kz-candidato-visualizar',
    templateUrl: 'app/candidato/visualizar/candidato-visualizar.component.html'
})
export class CandidatoVisualizarComponent implements OnInit {

	private id: number;
	private candidato: Candidato;
	private msgErro: string;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param CandidatoService candidatoService
	 */
	constructor(
		private route: ActivatedRoute, 
		private candidatoService: CandidatoService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.candidato = new Candidato();
		this.candidatoService.buscarPorId(this.id)
			.subscribe(
                	candidato => this.candidato = candidato,
                	error => this.msgErro = error);
	}
}