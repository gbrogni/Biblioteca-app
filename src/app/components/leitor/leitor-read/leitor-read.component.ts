import   { Leitor }   from './../leitor.model';
import { LeitorService } from '../leitor.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-leitor-read',
  templateUrl: './leitor-read.component.html',
  styleUrls: ['./leitor-read.component.scss'],
  providers: [LeitorService]
})
export class LeitorReadComponent implements OnInit {
  leitores: Leitor[] = [{
    codLeitor: 0,
    nome: '',
    sexo:'',
    dataNascimento: null,
    cpf:'',
    rg:'',
    email:'',
    telefone:'',
    celular:'',
    enderecoRua:'',
    enderecoBairro:'',
    enderecoCidade:'',
    enderecoNumero:'',
    cep:'',
    uf:'',
  }];
  displayedColumns: string[] = ['codLeitor', 'nome', 'sexo', 'dataNascimento', 'cpf', 'rg', 'email', 'telefone', 'celular', 'enderecoRua', 'enderecoBairro', 'enderecoCidade', 'enderecoNumero', 'cep', 'uf', 'action'];

  constructor(public leitorService: LeitorService) {
    this.leitorService.getLeitores().subscribe(leitores => {this.leitores = leitores})
   }

  ngOnInit(): void {
    // console.log(this.itens)
  }

  ngAfterViewInit(){
    this.loadLeitores()
  }

  public hide:boolean=true;
  dataSource:Leitor[] = [];

  loadLeitores(){
   this.leitorService.getLeitores().subscribe(leitores=>{
     this.dataSource=leitores;
   })
 }

}
