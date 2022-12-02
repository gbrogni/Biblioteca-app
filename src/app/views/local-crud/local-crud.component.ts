import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-local-crud',
  templateUrl: './local-crud.component.html',
  styleUrls: ['./local-crud.component.scss']
})
export class LocalCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de local',
      icon: 'create',
      routeUrl: '/local'
    }
  }

  ngOnInit(): void {
  }

  navigateToLocalCreate(): void{
    this.router.navigate(['/local/create'])
  }

}
