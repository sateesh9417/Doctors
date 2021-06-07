import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { environment } from 'src/environments/environment';
import { Postal } from '../postal';


@Component({
  selector: 'app-postal-code',
  templateUrl: './postal-code.component.html',
  styleUrls: ['./postal-code.component.css']
})
export class PostalCodeComponent implements OnInit {

  constructor(public http:HttpClient,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }
  Pcode=517644;
postalDetails:any=[];
Details:any=[]
lat!:number;
lng!:number;
spinner!:boolean;
private geoCoder:any;

  zoom = 12

  @ViewChild('search')
  public PostalCodeComponent!: ElementRef;

  ngOnInit(): void {
    this.getDetails();
    this.mapsAPILoader.load().then(() => { 
      this.geoCoder = new google.maps.Geocoder;
      const autocomplete = new google.maps.places.Autocomplete(this.PostalCodeComponent.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
        }); 
      });
    });
  }
  
 getDetails(){
   this.spinner=true
  this.http.get<{response:Postal}>(`${environment.postalUrl}${this.Pcode}&countrycode=IN`).subscribe(res=>{
    this.postalDetails=res
    this.Details=this.postalDetails.result
    console.log(this.Details);
    this.spinner=false
    this.lat=this.Details[0].latitude
    this.lng=this.Details[0].longitude
   console.log(this.lat);
   console.log(this.lng);
  })
 }
}
