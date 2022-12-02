import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-crud',
  templateUrl: './item-crud.component.html',
  styleUrls: ['./item-crud.component.scss']
})
export class ItemCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de item',
      icon: 'create',
      routeUrl: '/item'
    }
  }

  ngOnInit(): void {
  }

  navigateToItemCreate(): void{
    this.router.navigate(['/item/create'])
  }

}
