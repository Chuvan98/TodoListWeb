import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { AutofocusFixModule } from 'ngx-autofocus-fix';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/listas/listas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutofocusFixModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }