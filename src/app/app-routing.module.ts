import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RequeststatusComponent } from './componenet/requeststatus/requeststatus.component';
import { UserDashboardComponent } from './componenet/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AllrequestsComponent } from './component/allrequests/allrequests.component';
import { BeautifyComponent } from './component/beautify/beautify.component';
import { HistoryComponent } from './component/history/history.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { VolunteerDashboardComponent } from './component/volunteer-dashboard/volunteer-dashboard.component';
import { VolunteerDetailsComponent } from './component/volunteer-details/volunteer-details.component';
import { VolunteerListComponent } from './component/volunteer-list/volunteer-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:UserDashboardComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'volunteer',component:VolunteerDashboardComponent},
  {path:'requeststatus',component:RequeststatusComponent},
  {path:'volunteer-details/:id',component:VolunteerDetailsComponent},
  {path:'history',component:HistoryComponent},
  {path:'userlist',component:UserListComponent},
  {path:'volunteerlist',component:VolunteerListComponent},
  {path:'allrequest',component:AllrequestsComponent},
  {path:'beautify',component:BeautifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
