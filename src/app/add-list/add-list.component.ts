import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  
rform:any=FormGroup;
todotasks:any;


  constructor(private fb:FormBuilder,public ts:TodoListService) { }

  ngOnInit(): void {
    this.ts.getList().subscribe((res:any) => { },(err: any) => {
      console.log('Server Busy please Try Again Later');
      })
    this.rform= new FormGroup({
      'date': new FormControl(),
      'id': new FormControl(),
      'tasks': new FormArray([
        new FormControl()
      ])
    })
    
  }
  addTodoList(form:NgForm){
    this.ts.postList(form.value).subscribe(data=>{
      this.todotasks=data
     })
    console.log(form.value);
    const formData = form.value;
    console.log(formData);
  }

  getTasks():FormArray {
    return this.rform.get('tasks') as FormArray;
  }


  addTask(){
    let tasksArray = this.rform.get('tasks') as FormArray;
    let newTask = new FormControl();
    tasksArray.push(newTask);
  }

}

