import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-emprestimo-crud',
  templateUrl: './emprestimo-crud.component.html',
  styleUrls: ['./emprestimo-crud.component.scss']
})
export class EmprestimoCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Consulta de empréstimo',
      icon: 'create',
      routeUrl: '/emprestimo'
    }
  }

  ngOnInit(): void {
  }

  navigateToConsultaECreate(): void{
    this.router.navigate(['/emprestimo/create'])
  }

}
