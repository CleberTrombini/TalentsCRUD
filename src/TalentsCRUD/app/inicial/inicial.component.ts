import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'kz-inicial',
    templateUrl: 'app/inicial/inicial.component.html'
})
export class InicialComponent implements OnInit {

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param CandidatoService candidatoService
	 */
    constructor(
        private route: ActivatedRoute) {
    }

	/**
	 * Método executado logo após a criação do componente.
	 */
    ngOnInit() { }
}
