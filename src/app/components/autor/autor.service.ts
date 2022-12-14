
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Autor, AutorI } from "./autor.model";


@Injectable({
  providedIn: "root",
})

export class AutorService {
  
  baseUrl = "https://localhost:7203/autores"; 

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

  getAutores(): Observable<Autor[]>{
    return this.httpClient.get<Autor[]>(this.baseUrl).pipe( catchError(this.handleError)
    )
  }

  createAutor(autor: Autor): Observable<Autor>{
    return this.httpClient.post<Autor>(this.baseUrl , autor);  
  }

  readById(codAutor: string): Observable<Autor> {
    console.log(codAutor)
    const url = `${this.baseUrl}/${codAutor}`
    return this.httpClient.get<Autor>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateAutor(autor: Autor): Observable<Autor> {
    const url = `${this.baseUrl}/${autor.codAutor}`;
    return this.httpClient.put<Autor>(url, autor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  deleteAutor(codAutor: number): Observable<Autor> {
    const url = `${this.baseUrl}/${codAutor}`;
    return this.httpClient.delete<Autor>(url).pipe(
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

