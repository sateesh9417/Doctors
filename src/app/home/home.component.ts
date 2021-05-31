
import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
// import { Worker } from '../worker'

import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

   Worker= new Worker("");
  name: any;

  rForm!: FormGroup;

  constructor(public es:EmployeeService,private fb:FormBuilder) {
    this.rForm=this.fb.group({
      arrayEmp:this.fb.array([])
    })
  }
  arrayEmp():FormArray{
    return this.rForm.get("arrayEmp") as FormArray
  }
  newEmployee():FormGroup{
    return this.fb.group({
      ename:'',
      number:'',
      email:'',
      place:''
    })
  }
  addEmployee(){
    this.arrayEmp().push(this.newEmployee());
  }
  onSubmit(){
    console.log(this.rForm.value);
  }
  removeEm(i:any){
    this.arrayEmp().removeAt(i)
  }

//Filter Pipe Declarations
  myControl = new FormControl();
  options: any=['Sanjay',"Sateesh","Abbas","Sivaji","Abhi"];
  filteredOptions!: Observable<string[]>;

  employees:any=[];
  empArray:any= [];

  //NgOnInit block
  ngOnInit() {
    this.empArray.push(this.Worker);

    this.es.getEmployee().subscribe(res => {
      this.employees = res;
      console.log(res);
      
    })

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    
   }
   addForm(){
     this.empArray.push(this.Worker);
   }
   remove(index: any){
     this.empArray.splice(index)
   }
   onFormSubmit(a:NgForm){
      console.log(a.value);
      this.es.getEmployee().subscribe(res => {
        this.options = this.employees.name;
        console.log(res);
        console.log(this.options);
        
      })
      a.reset()
   }
  
    private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: string) => option.toLowerCase().indexOf(filterValue) === 0);
  }
  

}