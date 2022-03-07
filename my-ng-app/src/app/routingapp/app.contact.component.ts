import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  template: `
    <div class="container">
      <h2>The Contect Component</h2>
      <strong>{{message}}</strong>
      <br/>
      <a [routerLink]="['httpserv']">Http Service</a>
      <hr/>
      <router-outlet></router-outlet>
    </div>
  `
})

export class ContactComponent implements OnInit {
  message:string;
  constructor() {
    this.message = "I am the Contact Component";
  }

  ngOnInit() { }
}
