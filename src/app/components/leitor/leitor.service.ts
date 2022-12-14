import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Leitor } from "./leitor.model";

@Injectable({
  providedIn: "root",
})

export class LeitorService {
  
  baseUrl = "https://localhost:7203/leitores"; 

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

  getLeitores(): Observable<Leitor[]>{
    return this.httpClient.get<Leitor[]>(this.baseUrl).pipe( catchError(this.handleError)
    )
  }

  createLeitor(leitor: Leitor): Observable<Leitor>{
    return this.httpClient.post<Leitor>(this.baseUrl , leitor);  
  }

  readById(codLeitor: string): Observable<Leitor> {
    console.log(codLeitor)
    const url = `${this.baseUrl}/${codLeitor}`
    return this.httpClient.get<Leitor>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateLeitor(leitor: Leitor): Observable<Leitor> {
    const url = `${this.baseUrl}/${leitor.codLeitor}`;
    return this.httpClient.put<Leitor>(url, leitor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  deleteLeitor(codLeitor: number): Observable<Leitor> {
    const url = `${this.baseUrl}/${codLeitor}`;
    return this.httpClient.delete<Leitor>(url).pipe(
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