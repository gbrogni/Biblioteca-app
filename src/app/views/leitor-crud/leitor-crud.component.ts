import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leitor-crud',
  templateUrl: './leitor-crud.component.html',
  styleUrls: ['./leitor-crud.component.scss']
})
export class LeitorCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de leitor',
      icon: 'create',
      routeUrl: '/leitor'
    }
  }

  ngOnInit(): void {
  }

  navigateToLeitorCreate(): void{
    this.router.navigate(['/leitor/create'])
  }

}
