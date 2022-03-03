import { Component, OnInit } from '@angular/core';
import {Employee, Employees} from './../../models/app.coomunication.models';
import { CommunicationService } from "./../../services/app.communication.service";
@Component({
  selector: 'app-empreceiver-component',
  template: `
     <div class="container">
        <h4>The Employee Receiver Component</h4>
        <table class="table table-bordered table-striped">
           <thead>
             <tr>
               <th>EmpNo</th>
               <th>EmpName</th>
               <th>DeptNo</th>
             </tr>
           </thead>
           <tbody>
             <tr *ngFor="let e of FilteredEmployee">
                <td>{{e.EmpNo}}</td>
                <td>{{e.EmpName}}</td>
                <td>{{e.DeptNo}}</td>
             </tr>
           </tbody>
        </table>
     </div>
  `
})

export class EmpReceiverComponent implements OnInit {
  emp:Employee;
  emps=Employees;
  filteredEmployees:Array<Employee>;
  constructor(private serv: CommunicationService) {
    this.emp = new Employee(0,'',0);
    this.filteredEmployees = new Array<Employee>();
  }
  // Lets subscribe to the event emitted by the service
  // and the read data received from it

  ngOnInit() {
      this.serv.notify.subscribe((value:number)=>{
         this.emp.DeptNo = value;
      });
  }

  // lets write a readonly property that will be
  // called for every change of the this.emp.DeptNo
  get FilteredEmployee():Array<Employee> {
    if(this.emp.DeptNo === 0){
      this.filteredEmployees = this.emps;
    } else {
      this.filteredEmployees = this.emps.filter((e:Employee,i:number)=>{
          return e.DeptNo === this.emp.DeptNo;
      });
    }
    return this.filteredEmployees;
  }
}
