import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

import { Vaga } from '../shared/vaga.model';
import { VagaService } from '../shared/vaga.service';

@Component({
	selector: 'kz-vaga-editar',
    templateUrl: 'app/vaga/editar/vaga-editar.component.html'
})
export class VagaEditarComponent implements OnInit {

	private id: number;
	private vaga: Vaga;
	private msgErro: string;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param Router router
	 * @param VagaService vagaService
	 */
	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
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

	/**
	 * Método responsável por atualizar os dados de um candidato.
	 */
	atualizar() {
		this.vagaService.atualizar(this.id, this.vaga)
			.subscribe(
                	vaga => this.router.navigate(['/vagas']),
                	error => this.msgErro = error);
	}
}