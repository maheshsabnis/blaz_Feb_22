import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importing the FormsModule for Two-Way binding
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the develope defined components, directives, services
import {SimpleComponent} from './components/app.simple.component';
import {ProductComponent} from './components/productcomponent/app.product.component';
import { SelectComponent } from './directives/componentdirective/selectcomponent/app.select.component.directive';
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent, ProductComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
