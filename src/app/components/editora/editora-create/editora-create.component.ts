import { Editora }  from './../editora.model';
import { EditoraService } from '../editora.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editora-create',
  templateUrl: './editora-create.component.html',
  styleUrls: ['./editora-create.component.scss'],
  providers: [EditoraService]
})
export class EditoraCreateComponent implements OnInit {

  editoras: Editora[] = [{
    codEditora: 0,
    nomeEditora: "",
  }];

  constructor(public editoraService: EditoraService,
    private router: Router) { 

      this.editoraService.getEditoras().subscribe(data => this.editoras = data)
    }
    
  ngOnInit(): void {
  }

    editora: Editora = {
    codEditora: 0,
    nomeEditora: ''
  }

  codEditora:number = 0;
  nomeEditora:string = "";



  public hide:boolean=true;
  displayedColumns: string[] = ['codEditora', 'nomeEditora'];
  dataSource:Editora[] = [];

    createEditora() {
      let editora:Editora = new Editora(this.codEditora,this.nomeEditora)
      let newDataSource:Editora[]=[];
      this.dataSource.forEach(x=>newDataSource.push(x));
      newDataSource.push(editora);
      this.dataSource=newDataSource;
      this.editoraService.createEditora(this.editora).subscribe(() => {
      this.editoraService.showMessage('Editora criado!')
      this.router.navigate(['/editora'])
      })
  } 

  cancel(): void{
    this.router.navigate(['/editora'])
  }
}
