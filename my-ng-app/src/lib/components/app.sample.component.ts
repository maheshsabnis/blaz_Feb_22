import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  template: `
    <div class="container">
      <h3>I am Lazily Loaded Module</h3>
    </div>
  `
})

export class Sampleomponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
