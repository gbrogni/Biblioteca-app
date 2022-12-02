import   {Secao}   from './../secao.model';
import { SecaoService } from '../secao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-secao-read',
  templateUrl: './secao-read.component.html',
  styleUrls: ['./secao-read.component.scss'],
  providers: [SecaoService]
})
export class SecaoReadComponent implements OnInit {
  secoes: Secao[] = [{
    codSecao: 0,
    descricao: ''
  }];
  displayedColumns: string[] = ['codSecao', 'descricao', 'action'];

  constructor(public secaoService: SecaoService) {
    this.secaoService.getSecoes().subscribe(secoes => {this.secoes = secoes})
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loadSecoes()
  }

  public hide:boolean=true;
  dataSource:Secao[] = [];

  loadSecoes(){
   this.secaoService.getSecoes().subscribe(secoes=>{
     this.dataSource=secoes;
   })
 }

}
