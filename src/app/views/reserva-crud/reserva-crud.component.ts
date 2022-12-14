import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-crud',
  templateUrl: './reserva-crud.component.html',
  styleUrls: ['./reserva-crud.component.scss']
})
export class ReservaCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Reserva',
      icon: 'create',
      routeUrl: '/reserva'
    }
  }

  ngOnInit(): void {
  }

  navigateToReservaCreate(): void{
    this.router.navigate(['/reserva/create'])
  }

}
