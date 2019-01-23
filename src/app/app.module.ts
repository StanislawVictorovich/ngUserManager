import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddComponent } from './add/add.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule,
                  HttpClientModule, 
                  ModalModule.forRoot() 
                ],
  declarations: [ 
                  AppComponent, 
                  UsersComponent, 
                  AddComponent, 
                  FormComponent 
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
