import   {Local}   from './../local.model';
import { LocalService } from '../local.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-local-read',
  templateUrl: './local-read.component.html',
  styleUrls: ['./local-read.component.scss'],
  providers: [LocalService]
})
export class LocalReadComponent implements OnInit {
  locais: Local[] = [{
    codLocal: 0,
    descricao: ''
  }];
  displayedColumns: string[] = ['codLocal', 'descricao', 'action'];

  constructor(public localService: LocalService) {
    this.localService.getLocais().subscribe(locais => {this.locais = locais})
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loadLocais()
  }

  public hide:boolean=true;
  dataSource:Local[] = [];

  loadLocais(){
   this.localService.getLocais().subscribe(locais=>{
     this.dataSource=locais;
   })
 }

}
