import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './componenet/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { VolunteerDashboardComponent } from './component/volunteer-dashboard/volunteer-dashboard.component';
import { RequeststatusComponent } from './componenet/requeststatus/requeststatus.component';
import { VolunteerDetailsComponent } from './component/volunteer-details/volunteer-details.component';
import { HistoryComponent } from './component/history/history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserListComponent } from './component/user-list/user-list.component';
import { VolunteerListComponent } from './component/volunteer-list/volunteer-list.component';
import { AllrequestsComponent } from './component/allrequests/allrequests.component';
import { BeautifyComponent } from './component/beautify/beautify.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    VolunteerDashboardComponent,
    RequeststatusComponent,
    VolunteerDetailsComponent,
    HistoryComponent,
    UserListComponent,
    VolunteerListComponent,
    AllrequestsComponent,
    BeautifyComponent,
    
   
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,FormsModule,CommonModule,RouterModule, BrowserAnimationsModule,Ng2SearchPipeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
