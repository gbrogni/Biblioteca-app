import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Autor } from '../../autor/autor.model';
import { Editora } from '../../editora/editora.model';
import { Local } from '../../local/local.model';
import { Secao } from '../../secao/secao.model';

@Component({
  selector: 'app-item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.scss']
})
export class ItemDeleteComponent implements OnInit {
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

  item: Item;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    const codItem = this.route.snapshot.paramMap.get("codItem");
    this.itemService.readById(codItem).subscribe((item) => {
      this.item = item;
    });
  }

  deleteItem(): void{
    this.itemService.deleteItem(this.item.codItem).subscribe(() =>{
      this.itemService.showMessage('item excluído com sucesso');
      this.router.navigate(['/item']);
    })
  }

  cancel(): void{
    this.router.navigate(['/item']);
  }

}
