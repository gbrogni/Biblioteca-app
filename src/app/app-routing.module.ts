import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  { HomeComponent } from "./views/home/home.component";
import  { AutorCrudComponent } from "./views/autor-crud/autor-crud.component";
import { AutorCreateComponent } from './components/autor/autor-create/autor-create.component';
import { AutorUpdateComponent } from './components/autor/autor-update/autor-update.component';
import { AutorDeleteComponent } from './components/autor/autor-delete/autor-delete.component';
import { EditoraCrudComponent } from './views/editora-crud/editora-crud.component';
import { EditoraCreateComponent } from './components/editora/editora-create/editora-create.component';
import { EditoraUpdateComponent } from './components/editora/editora-update/editora-update.component';
import { EditoraDeleteComponent } from './components/editora/editora-delete/editora-delete.component';
import { LocalCreateComponent } from './components/local/local-create/local-create.component';
import { LocalCrudComponent } from './views/local-crud/local-crud.component';
import { LocalUpdateComponent } from './components/local/local-update/local-update.component';
import { LocalDeleteComponent } from './components/local/local-delete/local-delete.component';
import { SecaoCreateComponent } from './components/secao/secao-create/secao-create.component';
import { SecaoCrudComponent } from './views/secao-crud/secao-crud.component';
import { SecaoUpdateComponent } from './components/secao/secao-update/secao-update.component';
import { SecaoDeleteComponent } from './components/secao/secao-delete/secao-delete.component';
import { ItemCrudComponent } from './views/item-crud/item-crud.component';
import { ItemCreateComponent } from './components/item/item-create/item-create.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "autor",
  component: AutorCrudComponent
},{
  path: "autor/create",
  component: AutorCreateComponent
},{
  path: "autor/update/:codAutor",
  component: AutorUpdateComponent
},{
  path: "autor/delete/:codAutor",
  component: AutorDeleteComponent
},{
  path: "editora",
  component: EditoraCrudComponent
},{
  path: "editora/create",
  component: EditoraCreateComponent
},{
  path: "editora/update/:codEditora",
  component: EditoraUpdateComponent
},{
  path: "editora/delete/:codEditora",
  component: EditoraDeleteComponent
},{
  path: "local",
  component: LocalCrudComponent
},{
  path: "local/create",
  component: LocalCreateComponent
},{
  path: "local/update/:codLocal",
  component: LocalUpdateComponent
},{
  path: "local/delete/:codLocal",
  component: LocalDeleteComponent
},{
  path: "secao",
  component: SecaoCrudComponent
},{
  path: "secao/create",
  component: SecaoCreateComponent
},{
  path: "secao/update/:codSecao",
  component: SecaoUpdateComponent
},{
   path: "secao/delete/:codSecao",
   component: SecaoDeleteComponent
},{
  path: "item",
  component: ItemCrudComponent
},{
  path: "item/create",
  component: ItemCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
