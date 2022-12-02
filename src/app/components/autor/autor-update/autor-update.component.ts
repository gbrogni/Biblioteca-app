import { FormControl, NgForm, NgModel } from '@angular/forms';
import { AutorService } from './../autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Autor, AutorI } from '../autor.model';


@Component({
  selector: 'app-autor-update',
  templateUrl: './autor-update.component.html',
  styleUrls: ['./autor-update.component.scss']
})


export class AutorUpdateComponent implements OnInit {
  autor: Autor=new Autor(0,"",""); 

  constructor(
    public autorService: AutorService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codAutor = this.route.snapshot.paramMap.get("codAutor");
    this.autorService.readById(codAutor).subscribe((autor) => {
      this.autor = autor;
    });
  }

  
  updateAutor(): void {
    this.autorService.updateAutor(this.autor).subscribe(() => {
      this.autorService.showMessage("Autor atualizado com sucesso!");
      this.router.navigate(["/autor"]);
    });
  }


  cancel(): void {
    this.router.navigate(['/autor'])
  }
}
