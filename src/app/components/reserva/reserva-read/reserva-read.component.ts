import   { Reserva }   from './../reserva.model';
import { ReservaService } from '../reserva.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reserva-read',
  templateUrl: './reserva-read.component.html',
  styleUrls: ['./reserva-read.component.scss'],
  providers: [ReservaService]
})
export class ReservaReadComponent implements OnInit {
  reservas: Reserva[] = [{
    codReserva: 0,
    codItem: 0,
    codLeitor: 0,
    codLocal: 0,
    dataReserva: null,
    prazoReserva: null,
    situacao: '',
  }];
  displayedColumns: string[] = ['codReserva', 'codItem', 'codLeitor', 'codLocal', 'dataReserva', 'prazoReserva', 'situacao', 'action'];

  constructor(public reservaService: ReservaService) {
    this.reservaService.getReservas().subscribe(reservas => {this.reservas = reservas})
   }

  ngOnInit(): void {
    // console.log(this.itens)
  }

  ngAfterViewInit(){
    this.loadReservas()
  }

  public hide:boolean=true;
  dataSource:Reserva[] = [];

  loadReservas(){
   this.reservaService.getReservas().subscribe(reservas=>{
     this.dataSource=reservas;
   })
 }

}
