import   {Autor}   from './../autor.model';
import { AutorService } from '../autor.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-autor-read',
  templateUrl: './autor-read.component.html',
  styleUrls: ['./autor-read.component.scss'],
  providers: [AutorService]
})
export class AutorReadComponent implements OnInit {
  autores: Autor[] = [{
    codAutor: 0,
    nomeAutor: '',
    descricao: ''
  }];
  displayedColumns: string[] = ['codAutor', 'nomeAutor', 'descricao', 'action'];

  constructor(public autorService: AutorService) {
    this.autorService.getAutores().subscribe(autores => {this.autores = autores})
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loadAutores()
  }

  public hide:boolean=true;
  dataSource:Autor[] = [];

  loadAutores(){
   this.autorService.getAutores().subscribe(autores=>{
     this.dataSource=autores;
   })
 }

}
