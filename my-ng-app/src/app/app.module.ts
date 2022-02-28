import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importing the FormsModule for Two-Way binding
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the develope defined components, directives, services
import {SimpleComponent} from './components/app.simple.component';
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SimpleComponent]
})
export class AppModule { }
