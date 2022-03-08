import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { Sampleomponent } from './components/app.sample.component';


// Define a Route Table for the current module

const routes:Routes = [
  {path:'', component:Sampleomponent}
];


// CommonModule: This is used when an application contains
// multiple Angular Module Classes. These modules may
// load components to render, to render these components
// we use the CommonModule, this CommonModule will inform the BrowserModule
// the component Must be loaded and rendered
// IMP: We can have only one BrowserModule per Angular Application

// Register the RouteTable as Child Route
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [Sampleomponent],

})
export class LazyModule { }
