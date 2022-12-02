import { Autor }  from './../autor.model';
import { AutorService } from '../autor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styleUrls: ['./autor-create.component.scss'],
  providers: [AutorService]
})
export class AutorCreateComponent implements OnInit {

  autores: Autor[] = [{
    codAutor: 0,
    nomeAutor: "",
    descricao: ""
  }];

  constructor(public autorService: AutorService,
    private router: Router) { 

      this.autorService.getAutores().subscribe(data => this.autores = data)
    }
    
  ngOnInit(): void {
  }

    autor: Autor = {
    codAutor: 0,
    nomeAutor: '',
    descricao: ''
  }

  codAutor:number = 0;
  nomeAutor:string = "";
  descricao:string = "";



  public hide:boolean=true;
  displayedColumns: string[] = ['codAutor', 'nomeAutor', 'descricao'];
  dataSource:Autor[] = [];

    createAutor() {
      let autor:Autor = new Autor(this.codAutor,this.nomeAutor,this.descricao)
      let newDataSource:Autor[]=[];
      this.dataSource.forEach(x=>newDataSource.push(x));
      newDataSource.push(autor);
      this.dataSource=newDataSource;
      this.autorService.createAutor(this.autor).subscribe(() => {
      this.autorService.showMessage('Autor criado!')
      this.router.navigate(['/autor'])
      })
  } 

  cancel(): void{
    this.router.navigate(['/autor'])
  }
}



  // updateAutor(autor: Autor){
  //   if(this.autor.map(p => p.codAutor).includes(autor.codAutor)){
  //     this.autorService.updateAutor(autor).subscribe(data =>{
  //       console.log(data);
  //       const index = this.autor.findIndex(p => p.codAutor === data.codAutor);
  //     })
  //   }
  // }

  // createAutor(): void {
  //   this.autorService.createAutor(this.autor).subscribe(() => {
  //     this.autorService.showMessage('Produto criado!')
  //     this.router.navigate(['/autor'])
  //   })

  // } 