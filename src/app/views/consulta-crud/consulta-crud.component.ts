import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-consulta-crud',
  templateUrl: './consulta-crud.component.html',
  styleUrls: ['./consulta-crud.component.scss']
})
export class ConsultaCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Consulta de item do acervo',
      icon: 'create',
      routeUrl: '/consultas'
    }
  }

  ngOnInit(): void {
  }

  navigateToConsultaCreate(): void{
    this.router.navigate(['/consultas/create'])
  }

}
