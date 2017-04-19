"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var candidato_service_1 = require('../shared/candidato.service');
var candidato_model_1 = require('../shared/candidato.model');
var vaga_service_1 = require('../../vaga/shared/vaga.service');
var CandidatoCadastrarComponent = (function () {
    /**
     * Construtor.
     *
     * @param Router router
     * @param CandidatoService candidatoService
     */
    function CandidatoCadastrarComponent(route, router, candidatoService, vagaService, fb) {
        this.route = route;
        this.router = router;
        this.candidatoService = candidatoService;
        this.vagaService = vagaService;
        this.fb = fb;
        this.list = Array(5);
    }
    /**
     * Método executado logo após a criação do componente.
     */
    CandidatoCadastrarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dadosVagas = false;
        this.candidato = new candidato_model_1.Candidato();
        this.vagaService.listarTodos()
            .subscribe(function (vagas) { return _this.vagas = vagas; }, function (error) { return _this.msgErro = error; });
        this.initFormCandidato();
    };
    CandidatoCadastrarComponent.prototype.ngAfterContentChecked = function () {
        if (this.vagas != undefined && this.dadosVagas == false) {
            if (this.vagas.length > 0)
                this.dadosVagas = true;
            this.initFormCandidato();
        }
    };
    ;
    CandidatoCadastrarComponent.prototype.ngAfterContentInit = function () {
    };
    CandidatoCadastrarComponent.prototype.initFormCandidato = function () {
        var vagasParaCandidato = new forms_1.FormArray([]);
        var selecionado;
        if (this.dadosVagas) {
            for (var i = 0; i < this.vagas.length; i++) {
                vagasParaCandidato.push(new forms_1.FormGroup({
                    vagaId: new forms_1.FormControl(this.vagas[i].vagaId, []),
                    descricao: new forms_1.FormControl(this.vagas[i].descricao, []),
                    selecionado: new forms_1.FormControl(false, [forms_1.Validators.required])
                }));
            }
        }
        this.formCandidato = this.fb.group({
            canditadoId: [0],
            nome: ['', forms_1.Validators.required],
            skype: ['', forms_1.Validators.required],
            linkedin: [''],
            telefone: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            cidade: ['', forms_1.Validators.required],
            estado: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(2), forms_1.Validators.minLength(2)]],
            pretencaoSalarioHora: ['', forms_1.Validators.required],
            nivelCSharp: ['', forms_1.Validators.required],
            nivelAspNetMvc: ['', forms_1.Validators.required],
            nivelAngularJs: ['', forms_1.Validators.required],
            nivelJquery: ['', forms_1.Validators.required],
            nivelBootstrap: ['', forms_1.Validators.required],
            nivelWordpress: ['', forms_1.Validators.required],
            nivelPhp: ['', forms_1.Validators.required],
            nivelAndroid: ['', forms_1.Validators.required],
            nivelIos: ['', forms_1.Validators.required],
            nivelIonic: ['', forms_1.Validators.required],
            portifolio: [''],
            conhecimentoLinguagens: [''],
            conhecimentoSGC: [''],
            areaInteresse: [''],
            horasDisponivel: ['', forms_1.Validators.required],
            horarioDisponivel: ['', forms_1.Validators.required],
            informacaoBancaria: [''],
            comentarioAdicional: [''],
            vagasParaCandidato: vagasParaCandidato
        });
    };
    /**
     * Método responsável por cadastrar um novo candidato.
     */
    CandidatoCadastrarComponent.prototype.cadastrar = function (model) {
        var _this = this;
        this.candidatoService.cadastrar(model)
            .subscribe(function (candidato) { return _this.router.navigate(['candidatos']); }, function (error) { return _this.msgErro = error; });
    };
    CandidatoCadastrarComponent = __decorate([
        core_1.Component({
            selector: 'kz-candidato-cadastrar',
            templateUrl: 'app/candidato/cadastrar/candidato-cadastrar.component.html' //`<p> Teste </p>`
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, candidato_service_1.CandidatoService, vaga_service_1.VagaService, forms_1.FormBuilder])
    ], CandidatoCadastrarComponent);
    return CandidatoCadastrarComponent;
}());
exports.CandidatoCadastrarComponent = CandidatoCadastrarComponent;
//# sourceMappingURL=candidato-cadastrar.component.js.map