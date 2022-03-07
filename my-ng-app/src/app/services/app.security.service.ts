import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SecureResponseData,User,DepartmentForService} from './../models/app.coomunication.models';

@Injectable({providedIn: 'root'})
export class HttpSecurityService {
  private url:string;
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:7015/api/auth";
   }

   createUser(user:User):Observable<SecureResponseData>{
     let response:Observable<SecureResponseData>;
     response = this.httpClient.post<SecureResponseData>(`${this.url}/register`, user,{
       headers:{
         'Content-Type':'application/json'
       }
     });
     return response;
   }

   authUser(user:User):Observable<SecureResponseData>{
    let response:Observable<SecureResponseData>;
    response = this.httpClient.post<SecureResponseData>(`${this.url}/authuser`, user,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }
  gerData(token:string):Observable<SecureResponseData>{
    let response:Observable<SecureResponseData>;
    response = this.httpClient.get<SecureResponseData>(`${this.url}/departments`,{
      headers: {
        'AUTHORIZATION':`Bearer ${token}`
      }
    });
    return response;

  }
}
