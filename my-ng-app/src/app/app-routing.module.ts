import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./routingapp/app.home.component";
import {ContactComponent} from './routingapp/app.contact.component';
import {AboutComponent} from './routingapp/app.about.component';
import {HttpServiceComponent} from './components/httpservicecomponent/app.httpservice.component';
// define a route table
const routes: Routes = [
  {path: '',component:HomeComponent}, // default route
        //the Child routing
  {path: 'contact', component:ContactComponent, children:[{
    path:'httpserv', component:HttpServiceComponent
  }]},
  {path: 'about/:id', component: AboutComponent}, // parameterized routing
  {path:'lazy', loadChildren:()=>import('./../lib/app.lazy.module')
              .then(m=>m.LazyModule)}, // lazy loading of the Module
  {path: '**', redirectTo:'/'} // if no match found in URL navigate to default (HomeComponent)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Register the Route Table in Root of the Application
  exports: [RouterModule] // export the RouterModule and hence the Route Table, so that the imported will register it in root of the application, in this case it ia AppModule in app.module.ts
})
export class AppRoutingModule { }
