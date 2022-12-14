import { ItemService } from './../item.service';
import { Item }  from './../item.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from '../../autor/autor.model';
import { Editora } from '../../editora/editora.model';
import { Local } from '../../local/local.model';
import { Secao } from '../../secao/secao.model';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss'],
  providers: [ItemService]
})

export class ItemCreateComponent implements OnInit {
  Autores : Autor[] = [{
    codAutor: 0,
    nomeAutor: '',
    descricao: ''
  }];
  Editoras: Editora[] = [{
    codEditora: 0,
    nomeEditora: ''
  }];
  Locais: Local[] = [{
    codLocal: 0,
    descricao: ''
  }];
  Secoes: Secao[] = [{
    codSecao: 0,
    descricao: ''
  }];

  itens: Item[] = [{
    codItem: 0,
    nome: "",
    tipoItem:"",
    numExemplar:"",
    volume:"",
    edicao:"",
    idioma:"",
    status:"",
    codAutor:0,
    codEditora:0,
    codLocal:0,
    codSecao:0,
  }];

  constructor(public itemService: ItemService,
    private router: Router) { 

      this.itemService.getItens().subscribe(data => this.itens = data)
    }
    
  ngOnInit(): void {
    this.itemService.getAutores().subscribe((data:any)=>{
      this.Autores=data;
    });
    this.itemService.getEditoras().subscribe((data:any)=>{
      this.Editoras=data;
    });
    this.itemService.getLocais().subscribe((data:any)=>{
      this.Locais=data;
    });
    this.itemService.getSecoes().subscribe((data:any)=>{
      this.Secoes=data;
    });
  }

    item: Item = {
    codItem: 0,
    nome: '',
    tipoItem: '',
    numExemplar: '',
    volume: '',
    edicao: '',
    idioma: '',
    status: '',
    codAutor: 0,
    codEditora: 0,
    codLocal: 0,
    codSecao: 0,
  }
  autor: Autor = {
    codAutor: 0,
    nomeAutor: '',
    descricao: ''
  }

  codItem:number=0;
  nome:string="";
  tipoItem:string="";
  numExemplar:string="";
  volume:string="";
  edicao:string="";
  idioma:string="";
  status:string="";
  codAutor:number=0;
  codEditora:number=0;
  codLocal:number=0;
  codSecao:number=0

  public hide:boolean=true;
  displayedColumns: string[] = ['codItem', 'nome', 'tipoItem', 'numExemplar', 'volume', 'edicao', 'idioma', 'codAutor', 'codEditora', 'codLocal', 'codSecao', 'status'];
  dataSource:Item[] = [];

    createItem() {
      let item:Item = new Item(this.codItem,this.nome, this.tipoItem, this.numExemplar, this.volume, this.edicao, this.idioma, this.status, this.codAutor, this.codEditora, this.codLocal, this.codSecao)
      let newDataSource:Item[]=[];
      this.dataSource.forEach(x=>newDataSource.push(x));
      newDataSource.push(item);
      this.dataSource=newDataSource;
      this.itemService.createItem(this.item).subscribe(() => {
      this.itemService.showMessage('Item criado!')
      this.router.navigate(['/item'])
      })
  } 

  cancel(): void{
    this.router.navigate(['/item'])
  }
}
