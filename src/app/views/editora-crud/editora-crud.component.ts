import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editora-crud',
  templateUrl: './editora-crud.component.html',
  styleUrls: ['./editora-crud.component.scss']
})
export class EditoraCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de editora',
      icon: 'create',
      routeUrl: '/editora'
    }
  }

  ngOnInit(): void {
  }

  navigateToEditoraCreate(): void{
    this.router.navigate(['/editora/create'])
  }

}
