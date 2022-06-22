import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ListarComponent } from './persona/listar/listar.component';
import { AddComponent } from './persona/add/add.component';
import { EditComponent } from './persona/edit/edit.component';


import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent,ListarComponent,
    AddComponent,
    EditComponent ],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
