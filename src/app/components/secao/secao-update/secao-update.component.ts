import { FormControl, NgForm, NgModel } from '@angular/forms';
import { SecaoService } from './../secao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Secao } from '../secao.model';


@Component({
  selector: 'app-secao-update',
  templateUrl: './secao-update.component.html',
  styleUrls: ['./secao-update.component.scss']
})


export class SecaoUpdateComponent implements OnInit {
  secao: Secao=new Secao(0,""); 

  constructor(
    public secaoService: SecaoService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codSecao = this.route.snapshot.paramMap.get("codSecao");
    this.secaoService.readById(codSecao).subscribe((secao) => {
      this.secao = secao;
    });
  }

  
  updateSecao(): void {
    this.secaoService.updateSecao(this.secao).subscribe(() => {
      this.secaoService.showMessage("Seção atualizada com sucesso!");
      this.router.navigate(["/secao"]);
    });
  }


  cancel(): void {
    this.router.navigate(['/editora'])
  }
}
