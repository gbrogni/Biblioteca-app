import { DataSource } from '@angular/cdk/collections';
import { Emprestimo } from '../../emprestimo/emprestimo.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmprestimoService } from '../../emprestimo/emprestimo.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-emprestimo-create',
  templateUrl: './emprestimo-create.component.html',
  styleUrls: ['./emprestimo-create.component.scss'],
  providers: [EmprestimoService]
})
export class EmprestimoCreateComponent implements OnInit {
  searchText: string;
  
  emprestimos: Emprestimo[] = [{
    codReserva: 0,
    codItem: 0,
    nomeItem: '',
    tipoItem: '',
    dataReserva: null,
    prazoReserva: null,
    nomeAutor: '',
    nomeEditora: '',
    descricaoLocal: '',
    descricaoSecao: '',
  }];

  constructor(public emprestimoService: EmprestimoService,
    private router: Router) { }

  ngOnInit(): void {
    this.emprestimoService.getConsultasE().subscribe(emprestimos => {this.emprestimos = emprestimos})
    console.log(this.emprestimos)
  }

  cancel(): void{
    this.router.navigate(['/emprestimo'])
  }

  displayedColumns: string[] = ['codReserva', 'codItem', 'nomeItem', 'tipoItem', 'nomeAutor', 'nomeEditora', 'dataReserva', 'prazoReserva', 'descricaoLocal', 'descricaoSecao'];
 
}
