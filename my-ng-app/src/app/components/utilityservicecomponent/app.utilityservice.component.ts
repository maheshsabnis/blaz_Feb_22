import { Component, OnInit } from '@angular/core';
import {UtilityService} from './../../services/app.utility.service';

@Component({
  selector: 'app-utilityservice-component',
  template: `
     <div class="container">
       <h3>The Angular UTILITY Service</h3>
        <div class="form-group">
          <strong>
             Length of {{str}} is = {{length}}
          </strong>
        </div>
        <hr/>
        <div class="form-group">
          <strong>
             Lower case of {{str}} is = {{lowerStr}}
          </strong>
        </div>
        <hr/>
        <div class="form-group">
          <strong>
             Upper case of {{str}} is = {{upperStr}}
          </strong>
        </div>
     </div>
  `
})

export class UtilityServiceComponent implements OnInit {
  length:number;
  str:string;
  upperStr:string;
  lowerStr:string;
  // Inject the service in the Component using the
  // Constructor injection
  constructor(private serv:UtilityService) {
    this.length = 0;
    this.str = 'Angular Utiility Service';
    this.upperStr = '';
    this.lowerStr = '';
  }

  ngOnInit() {
      this.length = this.serv.getLength(this.str);
      this.upperStr = this.serv.changeCase(this.str, 'u');
      this.lowerStr = this.serv.changeCase(this.str, 'l');
  }
}
