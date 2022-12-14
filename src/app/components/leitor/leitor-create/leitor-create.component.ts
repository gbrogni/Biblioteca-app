import { LeitorService } from './../leitor.service';
import { Leitor }  from './../leitor.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-leitor-create',
  templateUrl: './leitor-create.component.html',
  styleUrls: ['./leitor-create.component.scss'],
  providers: [LeitorService]
})

export class LeitorCreateComponent implements OnInit {

  leitores: Leitor[] = [{
    codLeitor: 0,
    nome: "",
    sexo:"",
    dataNascimento: new Date(),
    cpf:"",
    rg:"",
    email:"",
    telefone:"",
    celular:"",
    enderecoRua:"",
    enderecoBairro:"",
    enderecoCidade:"",
    enderecoNumero:"",
    cep:"",
    uf:"",
  }];

  constructor(public leitorService: LeitorService,
    private router: Router) { 

      this.leitorService.getLeitores().subscribe(data => this.leitores = data)
    }
    
  ngOnInit(): void {

  }

  leitor: Leitor = {
    codLeitor: 0,
    nome: '',
    sexo:'',
    dataNascimento: new Date(),
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
  }

    codLeitor:number= 0;
    nome:string="";
    sexo:string="";
    dataNascimento:Date=new Date();
    cpf:string="";
    rg:string="";
    email:string="";
    telefone:string="";
    celular:string="";
    enderecoRua:string="";
    enderecoBairro:string="";
    enderecoCidade:string="";
    enderecoNumero:string="";
    cep:string="";
    uf:string="";

  public hide:boolean=true;
  displayedColumns: string[] = ['codLeitor', 'nome', 'sexo', 'dataNascimento', 'cpf', 'rg', 'email', 'telefone', 'celular', 'enderecoRua', 'enderecoBairro', 'enderecoCidade', 'enderecoNumero', 'cep', 'uf'];
  dataSource:Leitor[] = [];

    createLeitor() {
      let leitor:Leitor = new Leitor(this.codLeitor,this.nome, this.sexo, this.dataNascimento, this.cpf, this.rg, this.email, this.telefone, this.celular, this.enderecoRua, this.enderecoBairro, this.enderecoCidade, this.enderecoNumero, this.cep, this.uf)
      let newDataSource:Leitor[]=[];
      this.dataSource.forEach(x=>newDataSource.push(x));
      newDataSource.push(leitor);
      this.dataSource=newDataSource;
      this.leitorService.createLeitor(this.leitor).subscribe(() => {
      this.leitorService.showMessage('Leitor criado!')
      this.router.navigate(['/leitor'])
      })
  } 

  cancel(): void{
    this.router.navigate(['/leitor'])
  }
}
