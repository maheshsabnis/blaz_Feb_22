import { Component, OnInit } from '@angular/core';
import {DepartmentForService, ResponseData} from './../../models/app.coomunication.models';
import {DepartmentHTTPService} from './../../services/app.http.service';
@Component({
  selector: 'app-httpservice-component',
  templateUrl: './app.httpservice.view.html'
})

export class HttpServiceComponent implements OnInit {
  depts:Array<DepartmentForService>;
  response: ResponseData;
  message:string;
  constructor(private serv: DepartmentHTTPService) {
    this.depts  = new Array<DepartmentForService>();
    this.message = '';
   }

  ngOnInit() {
    this.getData();
   }

  getData():void {
    // subscribe to the observable
    // so that once the data is available in it
    // it will be notified to component
    this.serv.getDepts().subscribe({
       next:(response:ResponseData)=>{
          this.depts = response.data;
          this.message = response.message;
       },
       error:(error:any)=>{
        this.message = `Error Occurred while receiving data ${error}`;
       }
    });
  }
  postData():void{
    let dept:DepartmentForService  = new DepartmentForService(9001, 'Dept_9001', 'Chennai', 2737);
    this.serv.postDept(dept).subscribe({
      next:(response:ResponseData)=>{
         this.depts = response.data;
         this.message = response.message;
      },
      error:(error:any)=>{
       this.message = `Error Occurred while receiving data ${error}`;
      }
   });
  }

  putData():void{
    let dept:DepartmentForService  = new DepartmentForService(9001, 'Dept_9001', 'Chennai-East', 200);
    this.serv.putDept(dept.deptno,dept).subscribe({
      next:(response:ResponseData)=>{
         this.depts = response.data;
         this.message = response.message;
      },
      error:(error:any)=>{
       this.message = `Error Occurred while receiving data ${error}`;
      }
   });
  }

  deleteData():void{
    let dept:DepartmentForService  = new DepartmentForService(9001, 'Dept_9001', 'Chennai-East', 200);
    this.serv.deleteDept(dept.deptno).subscribe({
      next:(response:ResponseData)=>{
         this.depts = response.data;
         this.message = response.message;
      },
      error:(error:any)=>{
       this.message = `Error Occurred while receiving data ${error}`;
      }
   });
  }
}
