import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import  {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddListComponent } from './add-list/add-list.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PatientListComponent } from './patient-list/patient-list.component';
import { FilterPatientPipe } from './filter-patient.pipe';
import { ChartsModule } from 'ng2-charts';
import { MoviesComponent } from './movies/movies.component';
import { PostalCodeComponent } from './postal-code/postal-code.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ToDoListComponent,
    AddListComponent,
    LoginComponent,
    PatientListComponent,
    FilterPatientPipe,
    MoviesComponent,
    PostalCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatStepperModule,
    MatIconModule,
    MatDialogModule,
    ChartsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyAuQNLLvC99DNsuyQaFMcj7YCLRjz5gisQ',
    libraries: ["places"],
    apiVersion: 'quarterly'})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
