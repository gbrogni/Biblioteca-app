import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-secao-crud',
  templateUrl: './secao-crud.component.html',
  styleUrls: ['./secao-crud.component.scss']
})
export class SecaoCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de seção',
      icon: 'create',
      routeUrl: '/secao'
    }
  }

  ngOnInit(): void {
  }

  navigateToSecaoCreate(): void{
    this.router.navigate(['/secao/create'])
  }

}
