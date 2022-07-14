import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ContactService {
    private sendMessageUrl = "/.netlify/functions/send_message"
    constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

    handleError = (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.

        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error)}`
            );
        }
        this._snackBar.open("Something went wrong! :(", "Ok", {
            duration: 3000,
        });
        // return an observable with a user-facing error message
        return throwError("Something bad happened; please try again later.");
    };

    sendMessage(formData): Observable<any> {
        return this.http.post(this.sendMessageUrl, formData, { observe: 'response' }).pipe(catchError(this.handleError));
    }

}