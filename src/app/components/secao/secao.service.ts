
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Secao } from "./secao.model";

@Injectable({
  providedIn: "root",
})

export class SecaoService {
  
  baseUrl = "https://localhost:7203/secoes";
  defaultRoute = "api/Secao";
  

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

  getSecoes(): Observable<Secao[]>{
    return this.httpClient.get<Secao[]>(this.baseUrl).pipe( catchError(this.handleError)
    )
  }

  createSecao(secao: Secao): Observable<Secao>{
    return this.httpClient.post<Secao>(this.baseUrl , secao);  
  }

  readById(codSecao: string): Observable<Secao> {
    console.log(codSecao)
    const url = `${this.baseUrl}/${codSecao}`
    return this.httpClient.get<Secao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateSecao(secao: Secao): Observable<Secao> {
    const url = `${this.baseUrl}/${secao.codSecao}`;
    return this.httpClient.put<Secao>(url, secao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  deleteSecao(codSecao: number): Observable<Secao> {
    const url = `${this.baseUrl}/${codSecao}`;
    return this.httpClient.delete<Secao>(url).pipe(
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

