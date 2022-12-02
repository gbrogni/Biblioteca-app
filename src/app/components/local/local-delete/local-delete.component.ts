import { Router, ActivatedRoute } from '@angular/router';
import { LocalService } from './../local.service';
import { Component, OnInit } from '@angular/core';
import { Local } from '../local.model';

@Component({
  selector: 'app-local-delete',
  templateUrl: './local-delete.component.html',
  styleUrls: ['./local-delete.component.scss']
})
export class LocalDeleteComponent implements OnInit {

  local: Local;

  constructor(
    private localService: LocalService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    const codLocal = this.route.snapshot.paramMap.get("codLocal");
    this.localService.readById(codLocal).subscribe((local) => {
      this.local = local;
    });
  }

  deleteLocal(): void{
    this.localService.deleteLocal(this.local.codLocal).subscribe(() =>{
      this.localService.showMessage('Local excluída com sucesso');
      this.router.navigate(['/local']);
    })
  }

  cancel(): void{
    this.router.navigate(['/local']);
  }

}
