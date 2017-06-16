import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HeroFormComponent} from "./hero-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HeroFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
