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
var CandidatoEditarComponent = (function () {
    /**
     * Construtor.
     *
     * @param ActivatedRoute route
     * @param Router router
     * @param CandidatoService candidatoService
     */
    function CandidatoEditarComponent(route, router, candidatoService, vagaService, fb) {
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
    CandidatoEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dadosCandidato = false;
        this.dadosVagas = false;
        this.id = +this.route.snapshot.params['id'];
        this.candidato = new candidato_model_1.Candidato();
        this.candidatoService.buscarPorId(this.id)
            .subscribe(function (candidato) { return _this.candidato = candidato; }, function (error) { return _this.msgErro = error; });
        this.vagaService.listarTodos()
            .subscribe(function (vagas) { return _this.vagas = vagas; }, function (error) { return _this.msgErro = error; });
        this.initFormCandidato();
    };
    CandidatoEditarComponent.prototype.ngAfterContentChecked = function () {
        if (this.candidato.canditadoId && this.dadosCandidato == false && this.vagas != undefined) {
            if (this.vagas.length > 0)
                this.dadosVagas = true;
            this.initFormCandidato();
            this.dadosCandidato = true;
        }
    };
    ;
    CandidatoEditarComponent.prototype.ngAfterContentInit = function () {
    };
    CandidatoEditarComponent.prototype.initFormCandidato = function () {
        var vagasParaCandidato = new forms_1.FormArray([]);
        var vagasLista = new Array();
        var selecionado;
        vagasLista = this.candidato.vagasParaCandidato;
        if (this.dadosVagas) {
            for (var i = 0; i < this.vagas.length; i++) {
                selecionado = false;
                for (var n in vagasLista) {
                    if (vagasLista[n].vagaId === this.vagas[i].vagaId) {
                        selecionado = true;
                    }
                }
                vagasParaCandidato.push(new forms_1.FormGroup({
                    vagaId: new forms_1.FormControl(this.vagas[i].vagaId, []),
                    descricao: new forms_1.FormControl(this.vagas[i].descricao, []),
                    selecionado: new forms_1.FormControl(selecionado, [])
                }));
            }
        }
        this.formCandidato = this.fb.group({
            canditadoId: [this.candidato.canditadoId],
            nome: [this.candidato.nome, forms_1.Validators.required],
            skype: [this.candidato.skype, forms_1.Validators.required],
            linkedin: [this.candidato.linkedin],
            telefone: [this.candidato.telefone, forms_1.Validators.required],
            email: [this.candidato.email, forms_1.Validators.required],
            cidade: [this.candidato.cidade, forms_1.Validators.required],
            estado: [this.candidato.estado, [forms_1.Validators.required, forms_1.Validators.maxLength(2), forms_1.Validators.minLength(2)]],
            pretencaoSalarioHora: [this.candidato.pretencaoSalarioHora, forms_1.Validators.required],
            nivelCSharp: [this.candidato.nivelCSharp, forms_1.Validators.required],
            nivelAspNetMvc: [this.candidato.nivelAspNetMvc, forms_1.Validators.required],
            nivelAngularJs: [this.candidato.nivelAngularJs, forms_1.Validators.required],
            nivelJquery: [this.candidato.nivelJquery, forms_1.Validators.required],
            nivelBootstrap: [this.candidato.nivelBootstrap, forms_1.Validators.required],
            nivelWordpress: [this.candidato.nivelWordpress, forms_1.Validators.required],
            nivelPhp: [this.candidato.nivelPhp, forms_1.Validators.required],
            nivelAndroid: [this.candidato.nivelAndroid, forms_1.Validators.required],
            nivelIos: [this.candidato.nivelIos, forms_1.Validators.required],
            nivelIonic: [this.candidato.nivelIonic, forms_1.Validators.required],
            portifolio: [this.candidato.portifolio],
            conhecimentoLinguagens: [this.candidato.conhecimentoLinguagens],
            conhecimentoSGC: [this.candidato.conhecimentoSGC],
            areaInteresse: [this.candidato.areaInteresse],
            horasDisponivel: [this.candidato.horasDisponivel, forms_1.Validators.required],
            horarioDisponivel: [this.candidato.horarioDisponivel, forms_1.Validators.required],
            informacaoBancaria: [this.candidato.informacaoBancaria],
            comentarioAdicional: [this.candidato.comentarioAdicional],
            vagasParaCandidato: vagasParaCandidato
        });
    };
    CandidatoEditarComponent.prototype.atualizar = function (model) {
        var _this = this;
        this.candidatoService.atualizar(this.id, model)
            .subscribe(function (candidato) { return _this.router.navigate(['/candidatos']); }, function (error) { return _this.msgErro = error; });
    };
    CandidatoEditarComponent = __decorate([
        core_1.Component({
            selector: 'kz-candidato-editar',
            templateUrl: 'app/candidato/editar/candidato-editar.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, candidato_service_1.CandidatoService, vaga_service_1.VagaService, forms_1.FormBuilder])
    ], CandidatoEditarComponent);
    return CandidatoEditarComponent;
}());
exports.CandidatoEditarComponent = CandidatoEditarComponent;
//# sourceMappingURL=candidato-editar.component.js.map