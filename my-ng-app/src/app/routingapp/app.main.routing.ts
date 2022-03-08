import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainrouting-component',
  template: `
    <div class="container">
      <table class="table table-bordered table-striped">
        <tbody>
          <tr>
            <td>
               <a [routerLink]="['']">Home</a>
            </td>
            <td>
              <!--Defining a Route Parameter-->
               <a [routerLink]="['about', value]">About</a>
            </td>
            <td>
               <a [routerLink]="['contact']">Contact</a>
            </td>
            <td>
               <a [routerLink]="['lazy']">Lazy Load</a>
            </td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <router-outlet></router-outlet>
    </div>
  `
})

export class MainRoutingComponent implements OnInit {
  value:number;
  constructor() {
    this.value = 9000;
   }

  ngOnInit() { }
}
