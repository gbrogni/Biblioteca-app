import { Router, ActivatedRoute } from '@angular/router';
import { LeitorService } from './../leitor.service';
import { Component, OnInit } from '@angular/core';
import { Leitor } from '../leitor.model';
import { Autor } from '../../autor/autor.model';
import { Editora } from '../../editora/editora.model';
import { Local } from '../../local/local.model';
import { Secao } from '../../secao/secao.model';

@Component({
  selector: 'app-leitor-delete',
  templateUrl: './leitor-delete.component.html',
  styleUrls: ['./leitor-delete.component.scss']
})
export class LeitorDeleteComponent implements OnInit {

  leitor: Leitor;

  constructor(
    private leitorService: LeitorService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    const codLeitor = this.route.snapshot.paramMap.get("codLeitor");
    this.leitorService.readById(codLeitor).subscribe((leitor) => {
      this.leitor = leitor;
    });
  }

  deleteLeitor(): void{
    this.leitorService.deleteLeitor(this.leitor.codLeitor).subscribe(() =>{
      this.leitorService.showMessage('Leitor excluído com sucesso');
      this.router.navigate(['/leitor']);
    })
  }

  cancel(): void{
    this.router.navigate(['/leitor']);
  }

}
