import { Router, ActivatedRoute } from '@angular/router';
import { EditoraService } from './../editora.service';
import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora.model';

@Component({
  selector: 'app-editora-delete',
  templateUrl: './editora-delete.component.html',
  styleUrls: ['./editora-delete.component.scss']
})
export class EditoraDeleteComponent implements OnInit {

  editora: Editora;

  constructor(
    private editoraService: EditoraService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    const codEditora = this.route.snapshot.paramMap.get("codEditora");
    this.editoraService.readById(codEditora).subscribe((editora) => {
      this.editora = editora;
    });
  }

  deleteEditora(): void{
    this.editoraService.deleteEditora(this.editora.codEditora).subscribe(() =>{
      this.editoraService.showMessage('editora excluída com sucesso');
      this.router.navigate(['/editora']);
    })
  }

  cancel(): void{
    this.router.navigate(['/editora']);
  }

}
