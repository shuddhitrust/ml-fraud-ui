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
    attributes: 'attributes',
    operators: 'operators',
    rules: 'rules',
    autogenRules: 'autogen-rules'
  }

  constructor(private http: HttpClient) { }

  ApiUrl = (path: string = '') => {
    return environment.api + '/' + path
  }

  private log(message: string) {
    console.log(`${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

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

  /** GET attributes from the server */
  getAttributes(): Observable<string[]> {
    return this.http.get<string[]>(this.ApiUrl(this.apiPaths.attributes))
      .pipe(
        tap(_ => console.log('Fetched attributes')),
        catchError(this.handleError<string[]>('getAttributes', []))
      ).pipe(map(attributes => {
        return this.transformAttributes(attributes)
      }));
  }  

  // Method to convert the attribute name to a pretty human readable format
  transformAttributes=(attributes: string[] = []): string[] => {
    const transformedAttributes = attributes.map(attribute => {
      const removeUnderscore = this.replaceAll(attribute,'_', ' ')
      const final = removeUnderscore.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }).join(' ')
      return final
    })
    return transformedAttributes
  }

  // Method to use RegEx to replace contents in the string
  escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  // Custom method to repalce replaceAll of ES2021 for backward compatibility reason
  replaceAll(str:string, find: string, replace:string) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }
}