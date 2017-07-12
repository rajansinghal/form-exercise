/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } */

import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; 
import { ProductFormComponent } from './product-form.component';  

@NgModule({ 
   imports: [ BrowserModule,FormsModule], 
   declarations: [ AppComponent,ProductFormComponent], 
   bootstrap: [ AppComponent ] 
}) 

export class AppModule { } 
