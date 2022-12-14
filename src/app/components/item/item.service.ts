import { Autor } from './../autor/autor.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Item } from "./item.model";
import { Editora } from '../editora/editora.model';
import { Local } from '../local/local.model';
import { Secao } from '../secao/secao.model';


@Injectable({
  providedIn: "root",
})

export class ItemService {
  
  baseUrl = "https://localhost:7203/itens";
  autorUrl = "https://localhost:7203/autores";
  editoraUrl = "https://localhost:7203/editoras";
  localUrl = "https://localhost:7203/locais";
  secaoUrl = "https://localhost:7203/secoes";
  defaultRoute = "api/Item";
  

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

  getItens(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(this.baseUrl).pipe( catchError(this.handleError)
    )
  }

  getAutores(): Observable<Autor[]>{
    return this.httpClient.get<Autor[]>(this.autorUrl).pipe( catchError(this.handleError)
    )
  }

  getEditoras(): Observable<Editora[]>{
    return this.httpClient.get<Editora[]>(this.editoraUrl).pipe( catchError(this.handleError)
    )
  }

  getLocais(): Observable<Local[]>{
    return this.httpClient.get<Local[]>(this.localUrl).pipe( catchError(this.handleError)
    )
  }

  getSecoes(): Observable<Secao[]>{
    return this.httpClient.get<Secao[]>(this.secaoUrl).pipe( catchError(this.handleError)
    )
  }

  createItem(item: Item): Observable<Item>{
    return this.httpClient.post<Item>(this.baseUrl , item);  
  }

  readById(codItem: string): Observable<Item> {
    console.log(codItem)
    const url = `${this.baseUrl}/${codItem}`
    return this.httpClient.get<Item>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readItemById(codItem: string): Observable<Item> {
    console.log(codItem)
    const url = `${this.baseUrl}/${codItem}`
    return this.httpClient.get<Item>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateItem(item: Item): Observable<Item> {
    const url = `${this.baseUrl}/${item.codItem}`;
    return this.httpClient.put<Item>(url, item).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  deleteItem(codItem: number): Observable<Item> {
    const url = `${this.baseUrl}/${codItem}`;
    return this.httpClient.delete<Item>(url).pipe(
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

