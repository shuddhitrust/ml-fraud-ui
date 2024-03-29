import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Rule, Transaction } from '../models';
import { environment } from 'src/environments/environment';


@Injectable()
export class ApiService {

  apiPaths = {
    tranactions: 'transactions',
    rules: 'rules',
    autogeneratedRules: 'autogenerated-rules',
    saveRule: 'save-rule',
    saveTransaction: 'save-transaction',
    getRule: 'rule',
    getAutogeneratedRule: 'autogenerated-rule',
    getTransaction: 'transaction'
  }

  constructor(private http: HttpClient) { }

  ApiUrl = (path: string = '') => {
    return environment.api + '/' + path
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET transactions from the server */
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.ApiUrl(this.apiPaths.tranactions))
      .pipe(
        tap(_ => console.log('Fetched transactions')),
        catchError(this.handleError<Transaction[]>('getTransactions', []))
      );
  }

  /** GET rules from the server */
  getRules(): Observable<Rule[]> {
    return this.http.get<Rule[]>(this.ApiUrl(this.apiPaths.rules))
      .pipe(
        tap(_ => console.log('Fetched Rules')),
        catchError(this.handleError<Rule[]>('getRules', []))
      );
  }  

  getAutogeneratedRules(): Observable<Rule[]> {
    return this.http.get<Rule[]>(this.ApiUrl(this.apiPaths.autogeneratedRules))
      .pipe(
        tap(_ => console.log('Fetched Atuogenerated Rules')),
        catchError(this.handleError<Rule[]>('getAutogeneratedRules', []))
      );
  }  

  submitRule(rule: Rule): Observable<any> {
    return this.http.post<any>(this.ApiUrl(this.apiPaths.saveRule),rule).pipe(
      tap(_ => console.log('Fetched Rules')),
        catchError(this.handleError<Rule[]>('submitRule', [])))
  }

  submitTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<any>(this.ApiUrl(this.apiPaths.saveTransaction),transaction).pipe(
      tap(_ => console.log('Fetched Transactions')),
        catchError(this.handleError<Transaction>('submitTransaction')))
  }

  getRule(id:number): Observable<Rule> {
    const path = `${this.apiPaths.getRule}?id=${id}`;
    console.log('get rule api endpoint => ', path)
    return this.http.get<Rule>(this.ApiUrl(path))
      .pipe(
        tap(_ => console.log('Fetched Rule')),
        catchError(this.handleError<Rule>('getRule'))
      );
  }

  getAutogeneratedRule(id:number): Observable<Rule> {
    return this.http.get<Rule>(this.ApiUrl(this.apiPaths.getAutogeneratedRule))
      .pipe(
        tap(_ => console.log('Fetched Autogenerated Rule')),
        catchError(this.handleError<Rule>('getAutogeneratedRule'))
      );
  }  

  getTransaction(id:number): Observable<Transaction> {
    return this.http.get<Transaction>(this.ApiUrl(this.apiPaths.getTransaction))
      .pipe(
        tap(_ => console.log('Fetched Transaction')),
        catchError(this.handleError<Transaction>('getTransaction'))
      );
  }  
}