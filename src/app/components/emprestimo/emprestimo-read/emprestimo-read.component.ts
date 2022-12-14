import   { Emprestimo }   from './../emprestimo.model';
import { EmprestimoService } from './../emprestimo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emprestimo-read',
  templateUrl: './emprestimo-read.component.html',
  styleUrls: ['./emprestimo-read.component.scss'],
  providers: [EmprestimoService]
})
export class EmprestimoReadComponent implements OnInit {
  emprestimos: Emprestimo[] = [{
    codReserva: 0,
    dataReserva: null,
    prazoReserva: null,
    codItem: 0,
    nomeAutor: '',
    nomeEditora: '',
    descricaoLocal: '',
    descricaoSecao: '',
    tipoItem: '',
    nomeItem: '',

  }];
  displayedColumns: string[] = ['codReserva', 'codItem', 'nomeItem', 'tipoItem', 'nomeAutor', 'nomeEditora', 'dataReserva', 'prazoReserva', 'descricaoLocal', 'descricaoSecao'];

  constructor(public emprestimoService: EmprestimoService) {
    this.emprestimoService.getConsultasE().subscribe(emprestimos => {this.emprestimos = emprestimos})
   }

  ngOnInit(): void {
    console.log(this.emprestimos)
  }

  ngAfterViewInit(){
    this.loadConsultas()
  }

  public hide:boolean=true;
  dataSource:Emprestimo[] = [];

  loadConsultas(){
   this.emprestimoService.getConsultasE().subscribe(emprestimos=>{
     this.dataSource=this.emprestimos;
   })
 }

}
