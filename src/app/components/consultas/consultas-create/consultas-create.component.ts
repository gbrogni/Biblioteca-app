import { DataSource } from '@angular/cdk/collections';
import { Consulta } from '../../consultas/consulta.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from '../../consultas/consulta.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-consultas-create',
  templateUrl: './consultas-create.component.html',
  styleUrls: ['./consultas-create.component.scss'],
  providers: [ConsultaService]
})
export class ConsultasCreateComponent implements OnInit {
  searchText: string;
  
  consultas: Consulta[] = [{
    codItem: 0,
    nomeItem: '',
    tipoItem: '',
    numExemplar: '',
    nomeAutor: '',
    nomeEditora: '',
    descricaoLocal: '',
    descricaoSecao: '',
    situacao: ''
  }];

  constructor(public consultaService: ConsultaService,
    private router: Router) { }

  ngOnInit(): void {
    this.consultaService.getConsultas().subscribe(consultas => {this.consultas = consultas})
  }

  cancel(): void{
    this.router.navigate(['/consultas'])
  }

  displayedColumns: string[] = ['codItem', 'nomeItem', 'tipoItem', 'numExemplar', 'nomeAutor', 'nomeEditora', 'descricaoLocal', 'descricaoSecao', 'situacao'];

 
}
