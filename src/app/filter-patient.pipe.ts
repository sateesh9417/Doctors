import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPatient'
})
export class FilterPatientPipe implements PipeTransform {

  transform(patientList:any,search:any): any {
    if(!patientList || !search){
      return patientList;
    }
    return patientList.filter((item:any) =>
     item.name.toLowerCase().includes(search.toLowerCase())
     );
  }

}
