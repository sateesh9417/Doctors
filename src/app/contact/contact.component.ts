import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  value:any;
  q1:any=[]
  q2:any=[]
  q3:any=[]
  q4:any=[]

  q1Flag=true
  q2Flag=false
  q3Flag=false
  q4Flag=false
  yearlyFlag=false

    date1="April 2021-22"
    date2="May 2021-22"
    date3="June 2021-22"

  ngOnInit(): void {

  this.value="Q1"

  for(let j=1000;j<64000;j=j+j){
    this.q1.push(j)
  }
  for(let j=2000;j<85000;j=j+j){
    this.q2.push(j)
  }
  for(let j=3000;j<162000;j=j+j){
    this.q3.push(j)
  }
  for(let j=4000;j<172000;j=j+j){
    this.q4.push(j)
  }

  }
  Q1Click(){
    this.q1Flag=true
    this.q2Flag=false
    this.q3Flag=false
    this.q4Flag=false
    this.yearlyFlag=false 
    this.value="Q1"
    this.date1="April 2021-22"
    this.date2="May 2021-22"
    this.date3="June 2021-22"
    document.getElementsByTagName("thead")
 
  }
  Q2Click(){
    this.q1Flag=false
    this.q2Flag=true
    this.q3Flag=false
    this.q4Flag=false
    this.yearlyFlag=false 
    this.value="Q2"
    this.date1="july 2021-22"
    this.date2="Aug 2021-22"
    this.date3="Sep 2021-22"
  }
  Q3Click(){
    this.q1Flag=false
    this.q2Flag=false
    this.q3Flag=true
    this.q4Flag=false
    this.yearlyFlag=false 
    this.value="Q3"
    this.date1="Oct 2021-22"
    this.date2="Nov 2021-22"
    this.date3="Dec 2021-22"
  }
    Q4Click(){
      this.q1Flag=false
      this.q2Flag=false
      this.q3Flag=false
      this.q4Flag=true
      this.yearlyFlag=false 
      this.value="Q4"
      this.date1="Jan 2021-22"
      this.date2="Feb 2021-22"
      this.date3="Mar 2021-22"
    }
    yearClick(){
      this.yearlyFlag=true
      this.q1Flag=false
      this.q2Flag=false
      this.q3Flag=false
      this.q4Flag=false
    }

}
