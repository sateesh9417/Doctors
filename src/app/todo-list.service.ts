import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Patient } from './patient';
import { Postal } from './postal';
import { Todolist } from './todolist'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  addTodoList(formData: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public http:HttpClient) { }

  getList(){
    return this.http.get<{tasks:Todolist}>("http://localhost:3100/todoList")
  }
  getlist(d: string){
    return this.http.get<{tasks:Todolist}>("http://localhost:3100/todoList?date="+d)
  }
  postList(date:any){
    return this.http.post<{tasks:Todolist}>("http://localhost:3100/todoList",date)
  }
  deleteList(id:any){
    return this.http.delete<{tasks:Todolist}>("http://localhost:3100/todoList",id)
  }
  updateTask(id:number,task:any){
    return this.http.put<{response:Todolist}>(`${environment.baseUrl}/${id}`,task)
  }


getPatients(){
   return this.http.get<{response:Patient}>(`${environment.patientUrl}`)
}
putPatients(id:number,d:any){
  return this.http.put<{response:Patient}>(`${environment.patientUrl}/${id}`,d)
}


  Pcode!:number;
getPostal(){
  return this.http.get<{response:Postal}>(`${environment.postalUrl}${this.Pcode}&countrycode=IN`)
}

}
