import { FormControl, NgForm, NgModel } from '@angular/forms';
import { ItemService } from './../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../item.model';
import { Autor } from '../../autor/autor.model';
import { Editora } from '../../editora/editora.model';
import { Local } from '../../local/local.model';
import { Secao } from '../../secao/secao.model';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})


export class ItemUpdateComponent implements OnInit {
  item: Item=new Item(0,"","","","","","","",0,0,0,0); 

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

  constructor(
    public itemService: ItemService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codItem = this.route.snapshot.paramMap.get("codItem");
    this.itemService.readById(codItem).subscribe((item) => {
      this.item = item;
    });
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

  
  updateItem(): void {
    this.itemService.updateItem(this.item).subscribe(() => {
      this.itemService.showMessage("Item atualizado com sucesso!");
      this.router.navigate(["/item"]);
    });
  }


  cancel(): void {
    this.router.navigate(['/item'])
  }
}
