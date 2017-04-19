import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { CandidatoService } from '../shared/candidato.service';
import { Candidato } from '../shared/candidato.model';
import { Vaga } from '../../vaga/shared/vaga.model';
import { VagaService } from '../../vaga/shared/vaga.service';

@Component({
	selector: 'kz-candidato-cadastrar',
	templateUrl: 'app/candidato/cadastrar/candidato-cadastrar.component.html' //`<p> Teste </p>`
})
export class CandidatoCadastrarComponent implements OnInit, AfterContentChecked, AfterContentInit {

	private candidato: Candidato;
	private vagas: Vaga[];
	private msgErro: string;
	private list: Array<number> = Array(5);
	private formCandidato: FormGroup;
	private formVagas: FormGroup;

	private dadosVagas: boolean;
	
	/**
	 * Construtor.
	 *
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

		this.dadosVagas = false;

		this.candidato = new Candidato();

		this.vagaService.listarTodos()
			.subscribe(
				vagas => this.vagas = vagas,
				error => this.msgErro = error);

		this.initFormCandidato();
	}

	ngAfterContentChecked() {
		if(this.vagas != undefined && this.dadosVagas == false) {
			if(this.vagas.length > 0)
				this.dadosVagas = true;

			this.initFormCandidato();
		}
	};

	ngAfterContentInit() {
	}

	initFormCandidato() {

		const vagasParaCandidato: FormArray = new FormArray([]);

		let selecionado: boolean;

		if(this.dadosVagas) {
			for (let i = 0; i < this.vagas.length; i++) {

	        	vagasParaCandidato.push(
	        		new FormGroup({
	        			vagaId: new FormControl(this.vagas[i].vagaId, []),
	        			descricao: new FormControl(this.vagas[i].descricao, []),
	        			selecionado: new FormControl(false, [ Validators.required ])
	          		})
	        	);
			}
		}

		this.formCandidato = this.fb.group({
			canditadoId: [0],
			nome: ['', Validators.required],
			skype: ['', Validators.required],
			linkedin: [''],
			telefone: ['', Validators.required],
			email: ['', Validators.required],
			cidade: ['', Validators.required],
			estado: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
			pretencaoSalarioHora: ['', Validators.required],
			nivelCSharp: ['', Validators.required],
			nivelAspNetMvc: ['', Validators.required],
			nivelAngularJs: ['', Validators.required],
			nivelJquery: ['', Validators.required],
			nivelBootstrap: ['', Validators.required],
			nivelWordpress: ['', Validators.required],
			nivelPhp: ['', Validators.required],
			nivelAndroid: ['', Validators.required],
			nivelIos: ['', Validators.required],
			nivelIonic: ['', Validators.required],
			portifolio: [''],
			conhecimentoLinguagens: [''],
			conhecimentoSGC: [''],
			areaInteresse: [''],
			horasDisponivel: ['', Validators.required],
			horarioDisponivel: ['', Validators.required],
			informacaoBancaria: [''],
			comentarioAdicional: [''],
			vagasParaCandidato: vagasParaCandidato
		});
	}

	/**
	 * Método responsável por cadastrar um novo candidato.
	 */	
	cadastrar(model: Candidato) {
		this.candidatoService.cadastrar(model)
			.subscribe(
                	candidato => this.router.navigate(['candidatos']),
                	error => this.msgErro = error);
		
	}
}