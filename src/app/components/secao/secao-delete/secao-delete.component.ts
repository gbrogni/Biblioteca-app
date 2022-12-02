import { Router, ActivatedRoute } from '@angular/router';
import { SecaoService } from './../secao.service';
import { Component, OnInit } from '@angular/core';
import { Secao } from '../secao.model';

@Component({
  selector: 'app-secao-delete',
  templateUrl: './secao-delete.component.html',
  styleUrls: ['./secao-delete.component.scss']
})
export class SecaoDeleteComponent implements OnInit {

  secao: Secao;

  constructor(
    private secaoService: SecaoService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    const codSecao = this.route.snapshot.paramMap.get("codSecao");
    this.secaoService.readById(codSecao).subscribe((secao) => {
      this.secao = secao;
    });
  }

  deleteSecao(): void{
    this.secaoService.deleteSecao(this.secao.codSecao).subscribe(() =>{
      this.secaoService.showMessage('Seção excluída com sucesso');
      this.router.navigate(['/secao']);
    })
  }

  cancel(): void{
    this.router.navigate(['/secao']);
  }

}
