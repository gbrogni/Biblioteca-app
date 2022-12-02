import { FormControl, NgForm, NgModel } from '@angular/forms';
import { EditoraService } from './../editora.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Editora } from '../editora.model';


@Component({
  selector: 'app-editora-update',
  templateUrl: './editora-update.component.html',
  styleUrls: ['./editora-update.component.scss']
})


export class EditoraUpdateComponent implements OnInit {
  editora: Editora=new Editora(0,""); 

  constructor(
    public editoraService: EditoraService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codEditora = this.route.snapshot.paramMap.get("codEditora");
    this.editoraService.readById(codEditora).subscribe((editora) => {
      this.editora = editora;
    });
  }

  
  updateEditora(): void {
    this.editoraService.updateEditora(this.editora).subscribe(() => {
      this.editoraService.showMessage("Editora atualizada com sucesso!");
      this.router.navigate(["/editora"]);
    });
  }


  cancel(): void {
    this.router.navigate(['/editora'])
  }
}
