
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Local } from "./local.model";

@Injectable({
  providedIn: "root",
})

export class LocalService {
  
  baseUrl = "https://localhost:7203/locais";
  defaultRoute = "api/Local";
  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': "*" })
  }


  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  getLocais(): Observable<Local[]>{
    return this.httpClient.get<Local[]>(this.baseUrl).pipe( catchError(this.handleError)
    )
  }

  createLocal(local: Local): Observable<Local>{
    return this.httpClient.post<Local>(this.baseUrl , local);  
  }

  readById(codLocal: string): Observable<Local> {
    console.log(codLocal)
    const url = `${this.baseUrl}/${codLocal}`
    return this.httpClient.get<Local>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateLocal(local: Local): Observable<Local> {
    const url = `${this.baseUrl}/${local.codLocal}`;
    return this.httpClient.put<Local>(url, local).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  deleteLocal(codLocal: number): Observable<Local> {
    const url = `${this.baseUrl}/${codLocal}`;
    return this.httpClient.delete<Local>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
  

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}

