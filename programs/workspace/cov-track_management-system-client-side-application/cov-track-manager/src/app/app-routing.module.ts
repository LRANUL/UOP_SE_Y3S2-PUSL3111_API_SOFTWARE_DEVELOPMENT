import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { CitizenListComponent } from './health-inspection/citizen-list/citizen-list.component';
import { CitizenViewComponent } from './health-inspection/citizen-view/citizen-view.component';
import { HealthInspectionComponent } from './health-inspection/health-inspection.component';
import { PlaceCreateComponent } from './places/place-create/place-create.component';
import { PlacesListComponent } from './places/places-list/places-list.component';
import { PlacesEditComponent } from './places/places-edit/places-edit.component'


import { DefaultComponent } from './dashboard/layouts/default/default.component';
import { DashboardComponent } from './dashboard/modules/dashboard/dashboard.component'
import { OfficersListComponent } from './officers/officers-list/officers-list.component';

import { NotificationComponent } from './notification/notification.component'

const routes: Routes = [
  // {path:'dashboard', component:DefaultComponent},
  // {path:'dashboard', component:DashboardComponent},

  {
    path: '', component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent },

    ]
  },


  {path:'health-inspection' ,component:HealthInspectionComponent },
  {path:'health-inspection/:citizenId' ,component:CitizenViewComponent},
  {path:"officers" ,component: OfficersListComponent},
  {path:"places" ,component:PlacesListComponent },
  {path:"places/create" , component:PlaceCreateComponent },
  {path:"places/edit/:placeId", component:PlaceCreateComponent },
  {path:"login", component:LoginComponent},
  {path:"signup" , component: SignupComponent},
  {path:"places/edit_place" , component: PlacesEditComponent},
  {path:"notifications" , component: NotificationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
