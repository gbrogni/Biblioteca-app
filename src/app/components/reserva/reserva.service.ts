import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Item } from "../item/item.model";
import { Local } from '../local/local.model';
import { Leitor } from '../leitor/leitor.model';
import { Reserva } from "../reserva/reserva.model";



@Injectable({
  providedIn: "root",
})

export class ReservaService {
  
  baseUrl = "https://localhost:7203/reservas";
  itemUrl = "https://localhost:7203/itens";
  localUrl = "https://localhost:7203/locais";
  leitorUrl = "https://localhost:7203/leitores";
  defaultRoute = "api/Reserva";
  

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

  getReservas(): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>(this.baseUrl).pipe( catchError(this.handleError)
    )
  }

  getItens(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(this.itemUrl).pipe( catchError(this.handleError)
    )
  }


  getLocais(): Observable<Local[]>{
    return this.httpClient.get<Local[]>(this.localUrl).pipe( catchError(this.handleError)
    )
  }

  getLeitores(): Observable<Leitor[]>{
    return this.httpClient.get<Leitor[]>(this.leitorUrl).pipe( catchError(this.handleError)
    )
  }

  readItemById(codItem: number) {
    const url = `${this.itemUrl}/${codItem}`
    return this.httpClient.get<Item>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  createReserva(reserva: Reserva): Observable<Reserva>{
    return this.httpClient.post<Reserva>(this.baseUrl , reserva);  
  }

  readById(codItem: string): Observable<Reserva> {
    console.log(codItem)
    const url = `${this.baseUrl}/${codItem}`
    return this.httpClient.get<Reserva>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateReserva(reserva: Reserva): Observable<Reserva> {
    const url = `${this.baseUrl}/${reserva.codItem}`;
    return this.httpClient.put<Reserva>(url, reserva).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  deleteReserva(codItem: number): Observable<Reserva> {
    const url = `${this.baseUrl}/${codItem}`;
    return this.httpClient.delete<Reserva>(url).pipe(
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

