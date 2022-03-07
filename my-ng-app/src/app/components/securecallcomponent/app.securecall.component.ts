import { Component, OnInit } from '@angular/core';
import {User,SecureResponseData} from './../../models/app.coomunication.models';
import { HttpSecurityService } from "./../../services/app.security.service";
@Component({
  selector: 'app-securecall-component',
  templateUrl: './app.securecall.view.html'
})

export class SecureCallComponent implements OnInit {
  responseData:any[];
  status:string;
  constructor(private serv:HttpSecurityService) {
    this.responseData = [];
  }

  ngOnInit() { }

  registerNewUser():void {
    let user = new User(15, 'mouse@msit.com', 'cat001');
    this.serv.createUser(user).subscribe({
      next: (response)=>{
        this.status  =response.message;
      },
      error:(error)=>{
         console.log(`Error Occured ${error}`);
      }
    });
  }

  loginUser():void {
    let user = new User(15, 'mouse@msit.com', 'cat001');
    this.serv.authUser(user).subscribe({
      next: (response)=>{
        this.status  =response.message;
        // add token into the sessionStorage of the browser
        sessionStorage.setItem('token', response.token);
      },
      error:(error)=>{
         console.log(`Error Occured ${error}`);
      }
    });
  }

  getData():void {
    // retrieve the token from sessionStorage
    let token = sessionStorage.getItem('token');
    this.serv.gerData(token).subscribe({
      next: (response)=>{
        this.status  =response.message;
        this.responseData = response.records
      },
      error:(error)=>{
         console.log(`Error Occured ${error}`);
      }
    });
  }
}
