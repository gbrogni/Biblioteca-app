import { Item } from './../../item/item.model';
import   { Consulta }   from '../../consultas/consulta.model';
import { ConsultaService } from '../../consultas/consulta.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-consultas-read',
  templateUrl: './consultas-read.component.html',
  styleUrls: ['./consultas-read.component.scss'],
  providers: [ConsultaService]
})
export class ConsultasReadComponent implements OnInit {
  consultas: Consulta[] = [{
    codItem: 0,
    nomeAutor: '',
    nomeEditora: '',
    descricaoLocal: '',
    descricaoSecao: '',
    situacao: '',
    tipoItem: '',
    nomeItem: '',
    numExemplar: '',

  }];
  displayedColumns: string[] = ['codItem', 'nomeItem', 'tipoItem', 'numExemplar', 'nomeAutor', 'nomeEditora', 'descricaoLocal', 'descricaoSecao', 'situacao'];

  constructor(public consultaService: ConsultaService) {
    this.consultaService.getConsultas().subscribe(consultas => {this.consultas = consultas})
   }

  ngOnInit(): void {
    console.log(this.consultas)
  }

  ngAfterViewInit(){
    this.loadConsultas()
  }

  public hide:boolean=true;
  dataSource:Consulta[] = [];

  loadConsultas(){
   this.consultaService.getConsultas().subscribe(consultas=>{
     this.dataSource=consultas;
   })
 }
}
