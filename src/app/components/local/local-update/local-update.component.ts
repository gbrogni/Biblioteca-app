import { FormControl, NgForm, NgModel } from '@angular/forms';
import { LocalService } from './../local.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Local } from '../local.model';


@Component({
  selector: 'app-local-update',
  templateUrl: './local-update.component.html',
  styleUrls: ['./local-update.component.scss']
})


export class LocalUpdateComponent implements OnInit {
  local: Local=new Local(0,""); 

  constructor(
    public localService: LocalService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codLocal = this.route.snapshot.paramMap.get("codLocal");
    this.localService.readById(codLocal).subscribe((local) => {
      this.local = local;
    });
  }

  
  updateLocal(): void {
    this.localService.updateLocal(this.local).subscribe(() => {
      this.localService.showMessage("Local atualizado com sucesso!");
      this.router.navigate(["/local"]);
    });
  }


  cancel(): void {
    this.router.navigate(['/editora'])
  }
}
