import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Candidato } from './candidato.model';

@Injectable()
export class CandidatoService {

	private _url: string = "http://localhost:50000/api/Candidatos";

	constructor(private _http: Http){}

	/**
	 * Retorna listagem de todos os candidatos.
	 *
	 * @return Candidato[] candidatos
	 */
	listarTodos(): Observable<Candidato[]> {
	    return this._http.get(this._url)
	        .map((response: Response) => response.json())
	        .catch(this.errorHandler);
	}

	/**
	 * Cadastra um novo candidato.
	 *
	 * @param Candidato candidato
	 */
	cadastrar(candidato: Candidato): Observable<Candidato> {
		let params = JSON.stringify(candidato);
	    return this._http.post(this._url, params, this.headers())
	        .map((response: Response) => response.json())
	        .catch(this.errorHandler);
	}

	/**
	 * Retorna os dados de um candidato por id.
	 *
	 * @param number id
	 * @return Usuario candidato
	 */
	buscarPorId(id: number): Observable<any> {
		return this._http.get(this._url + '/' + id, this.headers())
				        .map((response: Response) => response.json())
				        .catch(this.errorHandler);
	}

	/**
	 * Atualiza os dados de um candidato.
	 *
	 * @param number id
	 * @param Candidato candidato
	 */
	atualizar(id: number, candidato: Candidato) {
		let params = JSON.stringify(candidato);
    	return this._http.put(this._url + '/' + id, params, this.headers())
				        .catch(this.errorHandler);
	}

	/**
	 * Remove um candidato.
	 *
	 * @param number id
	 */
	excluir(id: number) {
		return this._http.delete(this._url + '/' + id, this.headers())
				        .catch(this.errorHandler);
	}

	headers() {
		let headersParams = { 'Content-Type': 'application/json' };
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
    	return options;
	}

	errorHandler(error: Response){
	    console.error(error);
	    return Observable.throw(error || "Server Error");
	}
}
