import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
// HttpClient, used to perform HTTP Calls to REST APIs
import {HttpClient} from '@angular/common/http';
import {ResponseData, DepartmentForService} from './../models/app.coomunication.models';
@Injectable({providedIn: 'root'})
export class DepartmentHTTPService {
  private url:string;
  // HttpClient, is injected as constructor injection
  // this will be resolved ny HttpClientModule
  constructor(private http:HttpClient) {
    this.url = "http://localhost:7013/api/departments";
  }


  getDepts():Observable<ResponseData> {
    let response:Observable<ResponseData>;
    response = this.http.get<ResponseData>(this.url);
    return response;
  }
  postDept(dept:DepartmentForService):Observable<ResponseData> {
    let response:Observable<ResponseData>;
    response = this.http.post<ResponseData>(this.url, dept, {
      headers: {
        'Content-Type':'application/json'
      }
    });
    return response;
  }
  putDept(id:number,dept:DepartmentForService):Observable<ResponseData> {
    let response:Observable<ResponseData>;
    response = this.http.put<ResponseData>(`${this.url}/${id}`, dept, {
      headers: {
        'Content-Type':'application/json'
      }
    });
    return response;
  }
  deleteDept(id:number):Observable<ResponseData> {
    let response:Observable<ResponseData>;
    response = this.http.delete<ResponseData>(`${this.url}/${id}`);
    return response;
  }
}
