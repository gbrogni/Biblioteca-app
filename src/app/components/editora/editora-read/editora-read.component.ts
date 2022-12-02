import   {Editora}   from './../editora.model';
import { EditoraService } from '../editora.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editora-read',
  templateUrl: './editora-read.component.html',
  styleUrls: ['./editora-read.component.scss'],
  providers: [EditoraService]
})
export class EditoraReadComponent implements OnInit {
  editoras: Editora[] = [{
    codEditora: 0,
    nomeEditora: ''
  }];
  displayedColumns: string[] = ['codEditora', 'nomeEditora', 'action'];

  constructor(public editoraService: EditoraService) {
    this.editoraService.getEditoras().subscribe(editoras => {this.editoras = editoras})
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loadEditoras()
  }

  public hide:boolean=true;
  dataSource:Editora[] = [];

  loadEditoras(){
   this.editoraService.getEditoras().subscribe(editoras=>{
     this.dataSource=editoras;
   })
 }

}
