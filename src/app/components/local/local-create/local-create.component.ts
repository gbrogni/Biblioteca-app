import { Local }  from './../local.model';
import { LocalService } from '../local.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-create',
  templateUrl: './local-create.component.html',
  styleUrls: ['./local-create.component.scss'],
  providers: [LocalService]
})
export class LocalCreateComponent implements OnInit {

  locais: Local[] = [{
    codLocal: 0,
    descricao: "",
  }];

  constructor(public localService: LocalService,
    private router: Router) { 

      this.localService.getLocais().subscribe(data => this.locais = data)
    }
    
  ngOnInit(): void {
  }

    local: Local = {
    codLocal: 0,
    descricao: ''
  }

  codLocal:number = 0;
  descricao:string = "";



  public hide:boolean=true;
  displayedColumns: string[] = ['codLocal', 'descricao'];
  dataSource:Local[] = [];

    createLocal() {
      let local:Local = new Local(this.codLocal,this.descricao)
      let newDataSource:Local[]=[];
      this.dataSource.forEach(x=>newDataSource.push(x));
      newDataSource.push(local);
      this.dataSource=newDataSource;
      this.localService.createLocal(this.local).subscribe(() => {
      this.localService.showMessage('Local criado!')
      this.router.navigate(['/local'])
      })
  } 

  cancel(): void{
    this.router.navigate(['/local'])
  }
}
