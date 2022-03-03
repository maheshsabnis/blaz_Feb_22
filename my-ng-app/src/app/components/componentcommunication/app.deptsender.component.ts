import { Component, OnInit } from '@angular/core';
import {Department,Departments} from './../../models/app.coomunication.models';
import {CommunicationService} from './../../services/app.communication.service';
@Component({
  selector: 'app-deptsender-component',
  template: `
     <div class="container">
        <h4>The Department Sender Component</h4>
        <table class="table table-bordered table-striped">
           <thead>
             <tr>
               <th>DeptNo</th>
               <th>DeptName</th>
             </tr>
           </thead>
           <tbody>
             <tr *ngFor="let d of depts" (click)="selectDept(d)">
                <td>{{d.DeptNo}}</td>
                <td>{{d.DeptName}}</td>
             </tr>
           </tbody>
        </table>
     </div>
  `
})

export class DeptSenderComponent implements OnInit {
  dept:Department;
  depts=Departments;
  constructor(private serv:CommunicationService) {
    this.dept = new Department(0,'');
  }

  ngOnInit() { }
  selectDept(d:Department):void {
    this.serv.updateData(d.DeptNo);
  }
}
