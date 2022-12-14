import { FormControl, NgForm, NgModel } from '@angular/forms';
import { LeitorService } from './../leitor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Leitor } from '../leitor.model';

@Component({
  selector: 'app-leitor-update',
  templateUrl: './leitor-update.component.html',
  styleUrls: ['./leitor-update.component.scss']
})


export class LeitorUpdateComponent implements OnInit {
  leitor: Leitor=new Leitor(0,"","",new Date(),"","","","","","","","","","",""); 

  constructor(
    public leitorService: LeitorService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codLeitor = this.route.snapshot.paramMap.get("codLeitor");
    this.leitorService.readById(codLeitor).subscribe((leitor) => {
      this.leitor = leitor;
    });
  }

  
  updateLeitor(): void {
    this.leitorService.updateLeitor(this.leitor).subscribe(() => {
      this.leitorService.showMessage("Leitor atualizado com sucesso!");
      this.router.navigate(["/leitor"]);
    });
  }


  cancel(): void {
    this.router.navigate(['/leitor'])
  }
}
