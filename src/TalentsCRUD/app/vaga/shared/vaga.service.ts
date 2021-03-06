import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Vaga } from './vaga.model';

@Injectable()
export class VagaService {

	private _url: string = "http://localhost:50000/api/Vagas";

	constructor(private _http: Http){}

	/**
	 * Retorna listagem de todos os vagas.
	 *
	 * @return vaga[] vagas
	 */
	listarTodos(): Observable<Vaga[]> {
	    return this._http.get(this._url)
	        .map((response: Response) => response.json())
	        .catch(this.errorHandler);
	}

	/**
	 * Cadastra um novo vaga.
	 *
	 * @param vaga vaga
	 */
	cadastrar(vaga: Vaga): Observable<Vaga> {
		let params = JSON.stringify(vaga);
	    return this._http.post(this._url, params, this.headers())
	        .map((response: Response) => response.json())
	        .catch(this.errorHandler);
	}

	/**
	 * Retorna os dados de um vaga por id.
	 *
	 * @param number id
	 * @return Usuario vaga
	 */
	buscarPorId(id: number): Observable<Vaga> {
		return this._http.get(this._url + '/' + id, this.headers())
				        .map((response: Response) => response.json())
				        .catch(this.errorHandler);
	}

	/**
	 * Atualiza os dados de um vaga.
	 *
	 * @param number id
	 * @param vaga vaga
	 */
	atualizar(id: number, vaga: Vaga) {
		let params = JSON.stringify(vaga);

    	return this._http.put(this._url + '/' + id, params, this.headers())
				        .catch(this.errorHandler);
	}

	/**
	 * Remove um vaga.
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
