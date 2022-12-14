import { ConsultasCreateComponent } from './components/consultas/consultas-create/consultas-create.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';



import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { AutorCrudComponent } from './views/autor-crud/autor-crud.component';
import { AutorCreateComponent } from './components/autor/autor-create/autor-create.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AutorReadComponent } from './components/autor/autor-read/autor-read.component';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { ComponentsComponent } from './components/components.component';
import { AutorUpdateComponent } from './components/autor/autor-update/autor-update.component';
import { AutorDeleteComponent } from './components/autor/autor-delete/autor-delete.component';
import { EditoraCreateComponent } from './components/editora/editora-create/editora-create.component';
import { EditoraReadComponent } from './components/editora/editora-read/editora-read.component';
import { EditoraCrudComponent } from './views/editora-crud/editora-crud.component';
import { EditoraUpdateComponent } from './components/editora/editora-update/editora-update.component';
import { EditoraDeleteComponent } from './components/editora/editora-delete/editora-delete.component';
import { LocalCrudComponent } from './views/local-crud/local-crud.component';
import { LocalCreateComponent } from './components/local/local-create/local-create.component';
import { LocalReadComponent } from './components/local/local-read/local-read.component';
import { LocalUpdateComponent } from './components/local/local-update/local-update.component';
import { LocalDeleteComponent } from './components/local/local-delete/local-delete.component';
import { SecaoCrudComponent } from './views/secao-crud/secao-crud.component';
import { SecaoCreateComponent } from './components/secao/secao-create/secao-create.component';
import { SecaoReadComponent } from './components/secao/secao-read/secao-read.component';
import { SecaoUpdateComponent } from './components/secao/secao-update/secao-update.component';
import { SecaoDeleteComponent } from './components/secao/secao-delete/secao-delete.component';
import { ItemCreateComponent } from './components/item/item-create/item-create.component';
import { ItemCrudComponent } from './views/item-crud/item-crud.component';
import { ItemReadComponent } from './components/item/item-read/item-read.component';
import { ItemUpdateComponent } from './components/item/item-update/item-update.component';
import { ItemDeleteComponent } from './components/item/item-delete/item-delete.component';
import { LeitorCreateComponent } from './components/leitor/leitor-create/leitor-create.component';
import { LeitorReadComponent } from './components/leitor/leitor-read/leitor-read.component';
import { LeitorCrudComponent } from './views/leitor-crud/leitor-crud.component';
import { MatNativeDateModule } from '@angular/material/core';
import { LeitorUpdateComponent } from './components/leitor/leitor-update/leitor-update.component';
import { LeitorDeleteComponent } from './components/leitor/leitor-delete/leitor-delete.component';
import { ReservaCreateComponent } from './components/reserva/reserva-create/reserva-create.component';
import { ReservaCrudComponent } from './views/reserva-crud/reserva-crud.component';
import { ReservaReadComponent } from './components/reserva/reserva-read/reserva-read.component';
import { ReservaDeleteComponent } from './components/reserva/reserva-delete/reserva-delete.component';
import { ConsultaCrudComponent } from './views/consulta-crud/consulta-crud.component';
import { EmprestimoCreateComponent } from './components/emprestimo/emprestimo-create/emprestimo-create.component';
import { EmprestimoReadComponent } from './components/emprestimo/emprestimo-read/emprestimo-read.component';
import { EmprestimoCrudComponent } from './views/emprestimo-crud/emprestimo-crud.component';
import { ConsultasReadComponent } from './components/consultas/consultas-read/consultas-read.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AutorCrudComponent,
    AutorCreateComponent,
    AutorReadComponent,
    ComponentsComponent,
    AutorUpdateComponent,
    AutorDeleteComponent,
    EditoraCreateComponent,
    EditoraReadComponent,
    EditoraCrudComponent,
    EditoraUpdateComponent,
    EditoraDeleteComponent,
    LocalCrudComponent,
    LocalCreateComponent,
    LocalReadComponent,
    LocalUpdateComponent,
    LocalDeleteComponent,
    SecaoCrudComponent,
    SecaoCreateComponent,
    SecaoReadComponent,
    SecaoUpdateComponent,
    SecaoDeleteComponent,
    ItemCreateComponent,
    ItemCrudComponent,
    ItemReadComponent,
    ItemUpdateComponent,
    ItemDeleteComponent,
    LeitorCreateComponent,
    LeitorReadComponent,
    LeitorCrudComponent,
    LeitorUpdateComponent,
    LeitorDeleteComponent,
    ReservaCreateComponent,
    ReservaCrudComponent,
    ReservaReadComponent,
    ReservaDeleteComponent,
    ConsultaCrudComponent,

    EmprestimoCreateComponent,
    EmprestimoReadComponent,
    EmprestimoCrudComponent,
    ConsultasReadComponent,
    ConsultasCreateComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Ng2SearchPipeModule,
  ],
  // providers: [{
  //   provide: LOCALE_ID,
  //   useValue: 'pt-BR'
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
