import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../todo-list.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,Color } from 'ng2-charts';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Circulatory', 'Digestive', 'Endocrine', 'Nervous', 'Renal', 'Respiratory'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [55, 55, 38, 85, 65, 52, 75, 65, 45], label: 'Inpatients' },
    { data: [80, 90, 55, 50, 58, 65, 55, 75, 0], label: 'Outpatients' }
  ];

  public barChartColors: Color[] = [
    { backgroundColor: '#0a0563' },
    { backgroundColor: '#d408a8' },
  ]

  constructor(public ps:TodoListService,public router:ActivatedRoute) { }

patientList:any=[];
pform!: FormGroup;
search:any="";
id!:number;
selectPatient:any;
  pId!:number
  pName!: string;
  pImage!: string;
  pEmail!: string;
  pDate!: string;
  pDiagnosis!:String
  pSymptoms!:String;

  index:any;
onSelectPatient(id:number,index:any){
  this.id=id
  this.index=index
  console.log(id);
  console.log(index);
  this.selectPatient = this.patientList[id]
  console.log(this.selectPatient);
  this.pId= this.selectPatient.id
  this.pName = this.selectPatient.name;
  this.pImage = this.selectPatient.Url;
  this.pEmail = this.selectPatient.email;
  this.pDate = this.selectPatient.date;
  this.pDiagnosis = this.selectPatient.diagnosis;
  this.pSymptoms = this.selectPatient.symptoms;
}

  ngOnInit(): void {
   this.pform= new FormGroup({
   name: new FormControl('Albert',[]),
   date: new FormControl('2021-06-28',[]),
   email:new FormControl('robert@gmail.com',[]),
   Url: new FormControl('https://www.htmlelements.com/demos/images/people/robert.jpg',[]),
 })

 this.addPatient()
    if(this.pName==null || this.pEmail==null || this.pImage==null || this.pDate){
          this.pName="Robert"
          this.pImage="https://www.htmlelements.com/demos/images/people/robert.jpg"
          this.pEmail="robert@gmail.com"
          this.pDate="2021-06-28"
    }else{
      return this.onSelectPatient(this.id,this.index)
    }

  }

addPatient(){
  this.ps.getPatients().subscribe(res=>{
    this.patientList=res
    console.log(res);
  })
}
onPatientFormSubmit(a:any){
  const newData = {id:this.pId,name:this.pName,date:this.pDate,email:this.pEmail,Url:this.pImage,diagnosis:this.pDiagnosis,symptoms:this.pSymptoms}
  console.log(newData);
  this.ps.putPatients(this.pId,newData).subscribe(data=>{
    console.log(data);
  })
}
}


