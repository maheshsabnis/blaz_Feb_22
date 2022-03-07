import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-home-component',
  template: `
    <div class="container">
      <h2>The Home Component</h2>
      <strong>{{message}}</strong>
      <br/>

      <br/>
      <button (click)="navigateToContact()">Navigate to Contact</button>
      <br/>
      <button (click)="navigateToAbout()">Navigate to About</button>
    </div>
  `
})

export class HomeComponent implements OnInit {
  message:string;
  value:number;
  constructor(private router:Router) {
    this.message = "I am the Home Component";
    this.value = 100;
  }

  ngOnInit() { }
  navigateToContact():void {
    // explicit navigation
    // the second parameter to array is route parameters (if any)
    // router.navigate(['PATH-FROm-ROUTE-TABLE', PARAMETER1,PARAMETER1,,,,,]);
    this.router.navigate(['contact']);
  }


  navigateToAbout():void {
    // explicit navigation
    // the second parameter to array is route parameters (if any)
    // router.navigate(['PATH-FROm-ROUTE-TABLE', PARAMETER1,PARAMETER1,,,,,]);
    this.router.navigate(['about', this.value]);
  }

}
