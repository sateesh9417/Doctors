import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddListComponent } from './add-list/add-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PostalCodeComponent } from './postal-code/postal-code.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"todo",component:ToDoListComponent},
  {path:"add",component:AddListComponent},
  {path:"Login",component:LoginComponent},
  {path:'patient',component:PatientListComponent},
  {path:'movies',component:MoviesComponent},
  {path:'postal',component:PostalCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
