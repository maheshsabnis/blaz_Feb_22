import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importing the FormsModule for Two-Way binding
// ReactiveFormsModule: for the Reactive Forms aka Model-Driven-Forms like MVC
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import HttpClientModule for HTTP Calls
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the develope defined components, directives, services
import {SimpleComponent} from './components/app.simple.component';
import {ProductComponent} from './components/productcomponent/app.product.component';
import { SelectComponent } from './directives/componentdirective/selectcomponent/app.select.component.directive';
import {ColorDirective} from './directives/attributedirective/ap.color.directive';
import { ProductFormCompnent } from './components/productformcomponent/app.productform.component';
import { UtilityServiceComponent } from './components/utilityservicecomponent/app.utilityservice.component';

// import Angular Service
import {UtilityService} from './services/app.utility.service';
import { DeptSenderComponent } from './components/componentcommunication/app.deptsender.component';
import { EmpReceiverComponent } from './components/componentcommunication/app.empreceiver.component';
import { HttpServiceComponent } from './components/httpservicecomponent/app.httpservice.component';
import { SecureCallComponent } from './components/securecallcomponent/app.securecall.component';
import { MainRoutingComponent } from './routingapp/app.main.routing';
import { HomeComponent } from './routingapp/app.home.component';
import { AboutComponent } from './routingapp/app.about.component';
import { ContactComponent } from './routingapp/app.contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent, ProductComponent,
    SelectComponent, ColorDirective, ProductFormCompnent, HttpServiceComponent,
    UtilityServiceComponent, DeptSenderComponent,EmpReceiverComponent,
    SecureCallComponent, MainRoutingComponent,
    HomeComponent, AboutComponent,ContactComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule // Load the Routing at the root of the application
  ],
  // providers: [UtilityService], // root as singleton
  bootstrap: [ProductComponent]
})
export class AppModule { }
