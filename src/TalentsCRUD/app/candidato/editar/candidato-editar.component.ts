import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { CandidatoService } from '../shared/candidato.service';
import { Candidato } from '../shared/candidato.model';
import { Vaga } from '../../vaga/shared/vaga.model';
import { VagaService } from '../../vaga/shared/vaga.service';

@Component({
	selector: 'kz-candidato-editar',
    templateUrl: 'app/candidato/editar/candidato-editar.component.html'
})
export class CandidatoEditarComponent implements OnInit, AfterContentChecked, AfterContentInit  {

	private id: number;
	private candidato: Candidato;
	private vagas: Vaga[];
	private msgErro: string;
	private list: Array<number> = Array(5);
	private formCandidato: FormGroup;
	private formVagas: FormGroup;

	private dadosCandidato: boolean;
	private dadosVagas: boolean;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param Router router
	 * @param CandidatoService candidatoService
	 */
	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private candidatoService: CandidatoService,
		private vagaService: VagaService,
		private fb: FormBuilder) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {

		this.dadosCandidato = false;
		this.dadosVagas = false;

		this.id = +this.route.snapshot.params['id'];
		this.candidato = new Candidato();
		this.candidatoService.buscarPorId(this.id)
			.subscribe(
                	candidato => this.candidato = candidato,
                	error => this.msgErro = error);

		this.vagaService.listarTodos()
			.subscribe(
				vagas => this.vagas = vagas,
				error => this.msgErro = error);

		this.initFormCandidato();
	}

	ngAfterContentChecked() {
		if(this.candidato.canditadoId && this.dadosCandidato == false && this.vagas != undefined) {
			if(this.vagas.length > 0)
				this.dadosVagas = true;

			this.initFormCandidato();
			this.dadosCandidato = true;
		}
	};

	ngAfterContentInit() {
	}

	initFormCandidato(){

		const vagasParaCandidato: FormArray = new FormArray([]);

		let vagasLista = new Array();
		let selecionado: boolean;

		vagasLista = this.candidato.vagasParaCandidato;

		if(this.dadosVagas) {
			for (let i = 0; i < this.vagas.length; i++) {

				selecionado = false;

				for (let n in vagasLista){
					if(vagasLista[n].vagaId === this.vagas[i].vagaId) {
						selecionado = true;
					}
				}

	        	vagasParaCandidato.push(
	        		new FormGroup({
	        			vagaId: new FormControl(this.vagas[i].vagaId, []),
	        			descricao: new FormControl(this.vagas[i].descricao, []),
	        			selecionado: new FormControl(selecionado, [])
	          		})
	        	);
			}
		}

		this.formCandidato = this.fb.group({
			canditadoId: [this.candidato.canditadoId],
			nome: [this.candidato.nome, Validators.required],
			skype: [this.candidato.skype, Validators.required],
			linkedin: [this.candidato.linkedin],
			telefone: [this.candidato.telefone, Validators.required],
			email: [this.candidato.email, Validators.required],
			cidade: [this.candidato.cidade, Validators.required],
			estado: [this.candidato.estado, [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
			pretencaoSalarioHora: [this.candidato.pretencaoSalarioHora, Validators.required],
			nivelCSharp: [this.candidato.nivelCSharp, Validators.required],
			nivelAspNetMvc: [this.candidato.nivelAspNetMvc, Validators.required],
			nivelAngularJs: [this.candidato.nivelAngularJs, Validators.required],
			nivelJquery: [this.candidato.nivelJquery, Validators.required],
			nivelBootstrap: [this.candidato.nivelBootstrap, Validators.required],
			nivelWordpress: [this.candidato.nivelWordpress, Validators.required],
			nivelPhp: [this.candidato.nivelPhp, Validators.required],
			nivelAndroid: [this.candidato.nivelAndroid, Validators.required],
			nivelIos: [this.candidato.nivelIos, Validators.required],
			nivelIonic: [this.candidato.nivelIonic, Validators.required],
			portifolio: [this.candidato.portifolio],
			conhecimentoLinguagens: [this.candidato.conhecimentoLinguagens],
			conhecimentoSGC: [this.candidato.conhecimentoSGC],
			areaInteresse: [this.candidato.areaInteresse],
			horasDisponivel: [this.candidato.horasDisponivel, Validators.required],
			horarioDisponivel: [this.candidato.horarioDisponivel, Validators.required],
			informacaoBancaria: [this.candidato.informacaoBancaria],
			comentarioAdicional: [this.candidato.comentarioAdicional],
			vagasParaCandidato: vagasParaCandidato
		});
	}

	atualizar(model: Candidato) {
		this.candidatoService.atualizar(this.id, model)
			.subscribe(
				candidato => this.router.navigate(['/candidatos']),
        		error => this.msgErro = error);
	}
}