import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Ticket } from "../models/ticket.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ZendeskService {
  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(environment.tokenApiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(error.statusText);
      })
    );
  }

  getTicket(id: string): Observable<Ticket> {
    return this.http.get<{ ticket: Ticket }>(environment.tokenApiUrl + id).pipe(
      map((response) => response.ticket),
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(error.statusText);
      })
    );
  }

  private handleError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
    }
  }
}
