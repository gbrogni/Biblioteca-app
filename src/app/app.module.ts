
import { NgModule, LOCALE_ID} from '@angular/core';
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
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
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
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
