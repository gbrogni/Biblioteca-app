import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-autor-crud',
  templateUrl: './autor-crud.component.html',
  styleUrls: ['./autor-crud.component.scss']
})
export class AutorCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de autor',
      icon: 'create',
      routeUrl: '/autor'
    }
  }

  ngOnInit(): void {
  }

  navigateToAutorCreate(): void{
    this.router.navigate(['/autor/create'])
  }

}
