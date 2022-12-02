import { Secao }  from './../secao.model';
import { SecaoService } from '../secao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secao-create',
  templateUrl: './secao-create.component.html',
  styleUrls: ['./secao-create.component.scss'],
  providers: [SecaoService]
})
export class SecaoCreateComponent implements OnInit {

  secoes: Secao[] = [{
    codSecao: 0,
    descricao: "",
  }];

  constructor(public secaoService: SecaoService,
    private router: Router) { 

      this.secaoService.getSecoes().subscribe(data => this.secoes = data)
    }
    
  ngOnInit(): void {
  }

    secao: Secao = {
    codSecao: 0,
    descricao: ''
  }

  codSecao:number = 0;
  descricao:string = "";



  public hide:boolean=true;
  displayedColumns: string[] = ['codSecao', 'descricao'];
  dataSource:Secao[] = [];

    createSecao() {
      let secao:Secao = new Secao(this.codSecao,this.descricao)
      let newDataSource:Secao[]=[];
      this.dataSource.forEach(x=>newDataSource.push(x));
      newDataSource.push(secao);
      this.dataSource=newDataSource;
      this.secaoService.createSecao(this.secao).subscribe(() => {
      this.secaoService.showMessage('Seção criada!')
      this.router.navigate(['/secao'])
      })
  } 

  cancel(): void{
    this.router.navigate(['/local'])
  }
}
