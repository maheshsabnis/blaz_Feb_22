import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about-component',
  template: `
    <div class="container">
      <h2>The About Component</h2>
      <strong>{{message}} and received value is {{receivedValue}}</strong>
    </div>
  `
})

export class AboutComponent implements OnInit {
  message:string;
  receivedValue:number;
  // inject an activated route
  constructor(private act:ActivatedRoute) {
    this.message = "I am the About Component";
    this.receivedValue = 0;
  }
  // Subscribe to the Current Active route in the Browser Addressbar to
  // read the Parameter value
  ngOnInit() {
    this.act.params.subscribe((params)=>{
      this.receivedValue = params['id']; // Read the id from the URL
    });
  }
}
