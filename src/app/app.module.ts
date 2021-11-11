import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddinsuranceComponent } from './addinsurance/addinsurance.component';
import { AllpoliciesComponent } from './allpolicies/allpolicies.component';
import { AllservicesComponent } from './allservices/allservices.component';
import { AllusersComponent } from './allusers/allusers.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UleftpanelComponent } from './uleftpanel/uleftpanel.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { MypoliciesComponent } from './mypolicies/mypolicies.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserselectedpoliciesComponent } from './userselectedpolicies/userselectedpolicies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AdminloginComponent,
    NotfoundComponent,
    DashboardComponent,
    AdashboardComponent,
    AdduserComponent,
    AddinsuranceComponent,
    AllpoliciesComponent,
    AllservicesComponent,
    AllusersComponent,
    EditpolicyComponent,
    EdituserComponent,
    EditprofileComponent,
    UleftpanelComponent,
    LeftpanelComponent,
    MypoliciesComponent,
    SignupComponent,
    UserselectedpoliciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
