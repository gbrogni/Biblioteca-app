import { Router, ActivatedRoute } from '@angular/router';
import { AutorService } from './../autor.service';
import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor.model';

@Component({
  selector: 'app-autor-delete',
  templateUrl: './autor-delete.component.html',
  styleUrls: ['./autor-delete.component.scss']
})
export class AutorDeleteComponent implements OnInit {

  autor: Autor;

  constructor(
    private autorService: AutorService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    const codAutor = this.route.snapshot.paramMap.get("codAutor");
    this.autorService.readById(codAutor).subscribe((autor) => {
      this.autor = autor;
    });
  }

  deleteAutor(): void{
    this.autorService.deleteAutor(this.autor.codAutor).subscribe(() =>{
      this.autorService.showMessage('Autor excluído com sucesso');
      this.router.navigate(['/autor']);
    })
  }

  cancel(): void{
    this.router.navigate(['/autor']);
  }

}
