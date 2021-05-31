import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  // [x: string]: any;

  constructor(public ts:TodoListService,public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ToDoListComponent);
  }

  ngOnInit(): void {
    this.createTask(this.date)
  }
   todoTask:any=[];
   date:any=[];
   
   select: any;
   index: any;
   id!:number;
   updateSelect:any;

   editTask(index:any,id:number){
     console.log(index);
     console.log(id);
     const UpdatedTask = this.date;
     this.index = index;
     this.id = id;
     console.log(UpdatedTask);
     for( let obj in UpdatedTask){
     this.select = UpdatedTask[obj].tasks[index];
     console.log(this.select);
     }
   }


   deleteTask(index:any,id:number){
    console.log(index);
    console.log(id);
    const altData = this.date;
    console.log(altData);
    for( let obj in altData){
      console.log(altData[obj].tasks[index]);
      altData[obj].tasks.splice(index,1);
    }
    console.log(altData);
    let newData = new Object();
    newData = altData[0];
    console.log('below is the output for converting array into object');
    
    console.log(newData);
    
    this.ts.updateTask(id,newData).subscribe((res) => {
    })
    console.log(altData.date);
  }

  createTask(d:any){
    this.ts.getList().subscribe(data=>{
      this.todoTask=data
      console.log(data);
    })
    this.ts.getlist(d).subscribe(data=>{
      this.date=data
      console.log(this.date);
    })
    console.log(d);    
  }
  remove(index:any){
    this.ts.deleteList(index).subscribe(res=>{
      this.todoTask.splice(this.todoTask.indexOf(index),1)
    })
  }
 
  onTaskSubmit(){
    console.log(this.updateSelect);
    const updateTask = this.date
    for( let obj in updateTask){
      console.log(updateTask[obj].tasks[this.index]);
      updateTask[obj].tasks.splice(this.index,1,this.updateSelect);
      console.log(updateTask);
    }
    let newData = new Object();
    newData = updateTask[0];
    console.log('below is the output for converting array into object');
    
    console.log(newData);

    // console.log(updateTask);
    this.ts.updateTask(this.id,newData).subscribe((res) => {})
    console.log(this.id);

  }

 

}


