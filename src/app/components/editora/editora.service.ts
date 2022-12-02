
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Editora } from "./editora.model";

@Injectable({
  providedIn: "root",
})

export class EditoraService {
  
  baseUrl = "https://localhost:7203/editoras";
  defaultRoute = "api/Editora";
  

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

  getEditoras(): Observable<Editora[]>{
    return this.httpClient.get<Editora[]>(this.baseUrl).pipe( catchError(this.handleError)
    )
  }
  

  createEditora(editora: Editora): Observable<Editora>{
    return this.httpClient.post<Editora>(this.baseUrl , editora);  
  }

  readById(codEditora: string): Observable<Editora> {
    console.log(codEditora)
    const url = `${this.baseUrl}/${codEditora}`
    return this.httpClient.get<Editora>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateEditora(editora: Editora): Observable<Editora> {
    const url = `${this.baseUrl}/${editora.codEditora}`;
    return this.httpClient.put<Editora>(url, editora).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  deleteEditora(codEditora: number): Observable<Editora> {
    const url = `${this.baseUrl}/${codEditora}`;
    return this.httpClient.delete<Editora>(url).pipe(
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

