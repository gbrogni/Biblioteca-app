import   { Item }   from './../item.model';
import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.scss'],
  providers: [ItemService]
})
export class ItemReadComponent implements OnInit {
  itens: Item[] = [{
    codItem: 0,
    nome: '',
    tipoItem: '',
    numExemplar: '',
    volume: '',
    edicao: '',
    idioma: '',
    codAutor: 0,
    codEditora: 0,
    codLocal: 0,
    codSecao: 0
  }];
  displayedColumns: string[] = ['codItem', 'nome', 'tipoItem', 'numExemplar', 'volume', 'edicao', 'idioma', 'codAutor', 'codEditora', 'codLocal', 'codSecao', 'action'];

  constructor(public itemService: ItemService) {
    this.itemService.getItens().subscribe(itens => {this.itens = itens})
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loadItens()
  }

  public hide:boolean=true;
  dataSource:Item[] = [];

  loadItens(){
   this.itemService.getItens().subscribe(itens=>{
     this.dataSource=itens;
   })
 }

}
