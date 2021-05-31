import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
// import { Worker } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
 getEmployee(){
   return this.http.get(`${environment.baseUrl}/employees`)
 }
  addEmployee(id:any){
    const body = JSON.stringify(' ');
const headers = new HttpHeaders();
headers.set('Content-Type', 'application/json; charset=utf-8')
   return this.http.post(`${environment.baseUrl}/employees`,id,{headers:headers})
  }
}
