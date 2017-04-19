import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VagaService } from '../shared/vaga.service';
import { Vaga } from '../shared/vaga.model';

@Component({
	selector: 'kz-vaga-listar',
    templateUrl: 'app/vaga/listar/vaga-listar.component.html'
})
export class VagaListarComponent implements OnInit {

	private vagas: Vaga[];
	private idExcluir: number;
	private pagina: number;
	private totalRegistros: number;
	private msgErro: string;

	/**
	 * Construtor.
	 *
	 * @param VagaService vagaService
	 */
	constructor(private vagaService: VagaService,
		private route: ActivatedRoute) {
	}

	listarTodos(){
		this.vagaService.listarTodos()
			.subscribe(
				vagas => this.vagas = vagas,
				error => this.msgErro = error
		);
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.listarTodos();
	}

	/**
	 * Método responsável por armazenar o id do candidato a 
	 * removido.
	 *
	 * @param number id
	 */
	excluir(id: number) {
 		this.idExcluir = id;
 	}

 	/**
	 * Método responsável por remover um candidato.
	 */
 	onExcluir() {
 		this.vagaService.excluir(this.idExcluir)
 			.subscribe(
                	data  => this.listarTodos(),
                	error => this.msgErro = error);
 		this.idExcluir = -1;
 	}
}