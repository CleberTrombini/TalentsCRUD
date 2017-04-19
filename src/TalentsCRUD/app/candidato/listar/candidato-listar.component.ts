import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CandidatoService } from '../shared/candidato.service';
import { Candidato } from '../shared/candidato.model';

@Component({
	selector: 'kz-candidato-listar',
    templateUrl: 'app/candidato/listar/candidato-listar.component.html'
})
export class CandidatoListarComponent implements OnInit {

	private candidatos: Candidato[];
	private idExcluir: number;
	private pagina: number;
	private totalRegistros: number;
	private	msgErro: string;

	/**
	 * Construtor.
	 *
	 * @param CandidatoService candidatoService
	 */
	constructor(private candidatoService: CandidatoService,
		private route: ActivatedRoute) {
	}

	listarTodos(){
		this.candidatoService.listarTodos()
			.subscribe(
				candidatos => this.candidatos = candidatos,
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
 		this.candidatoService.excluir(this.idExcluir)
 			.subscribe(
                	data  => this.listarTodos(),
                	error => this.msgErro = error);
 		this.idExcluir = -1;
 	}
}