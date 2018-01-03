import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

// Documentation on using the new HttpClient service here:
// https://www.metaltoad.com/blog/angular-5-making-api-calls-httpclient-service

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

  private TestApiUrl = 'http://127.0.0.1:3333';
  

	constructor(private http:HttpClient) { }
	

	getOrders(): Observable<any>  {    
		return this.http.get(this.TestApiUrl + '/orders')
		.catch((err) => {
				return this.handleError(err);
		})

	}
	

	/* Utility functions */
	/* ------------------------------------------------------- */
	private handleError(error: any): Observable<any> {
		console.error('An error occurred and was caught by Angular5: ', error);
		return Observable.throw(error)
	}


}
