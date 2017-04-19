import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Vaga } from '../shared/vaga.model';
import { VagaService } from '../shared/vaga.service';

@Component({
	selector: 'kz-vaga-visualizar',
    templateUrl: 'app/vaga/visualizar/vaga-visualizar.component.html'
})
export class VagaVisualizarComponent implements OnInit {

	private id: number;
	private vaga: Vaga;
	private msgErro: string;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param VagaService vagaService
	 */
	constructor(
		private route: ActivatedRoute, 
		private vagaService: VagaService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.vaga = new Vaga();
		this.vagaService.buscarPorId(this.id)
			.subscribe(
                	vaga => this.vaga = vaga,
                	error => this.msgErro = error);
	}
}