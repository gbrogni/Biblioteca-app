import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from './../reserva.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../item/item.model';
import { Autor } from '../../autor/autor.model';
import { Editora } from '../../editora/editora.model';
import { Local } from '../../local/local.model';
import { Reserva } from '../reserva.model';

@Component({
  selector: 'app-reserva-delete',
  templateUrl: './reserva-delete.component.html',
  styleUrls: ['./reserva-delete.component.scss']
})
export class ReservaDeleteComponent implements OnInit {
  Reservas : Reserva[] = [{
    codReserva: 0,
    codItem: 0,
    codLocal: 0,
    codLeitor: 0,
    dataReserva: null,
    prazoReserva: null,
    situacao: '',
  }];

  reserva: Reserva;

  constructor(
    private reservaService: ReservaService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    const codReserva = this.route.snapshot.paramMap.get("codReserva");
    this.reservaService.readById(codReserva).subscribe((reserva) => {
      this.reserva = reserva;
    });
  }

  deleteReserva(): void{
    this.reservaService.deleteReserva(this.reserva.codReserva).subscribe(() =>{
      this.reservaService.showMessage('Item devolvido com sucesso');
      this.router.navigate(['/reserva']);
    })
  }

  cancel(): void{
    this.router.navigate(['/reserva']);
  }

}
