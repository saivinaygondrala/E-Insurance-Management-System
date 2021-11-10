import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AddinsuranceComponent } from './addinsurance/addinsurance.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AllpoliciesComponent } from './allpolicies/allpolicies.component';
import { AllservicesComponent } from './allservices/allservices.component';
import { AuthGuard } from './auth.guard';
import { AuthadminGuard } from './authadmin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MypoliciesComponent } from './mypolicies/mypolicies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { UserselectedpoliciesComponent } from './userselectedpolicies/userselectedpolicies.component';


const routes: Routes = [
  {path: "" ,component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"SignUp",component:SignupComponent},
  {path: "Login",component:LoginComponent},
  {path:"AllServices",component:AllservicesComponent,canActivate:[AuthGuard||AuthadminGuard]},
  {path:"AdminLogin",component:AdminloginComponent},
  // {path:"AdminPanel",component:AdminPanelComponent,canActivate:[AuthAdminGuard]},
  // {path:"UserPanel",component:UserpanelComponent,canActivate:[AuthGuard]},
  {path:"Userselectedpolicies",component:UserselectedpoliciesComponent,canActivate:[AuthadminGuard]},
  {path:"Dashboard",component:DashboardComponent,canActivate:[AuthGuard || AuthadminGuard]},
  {path:"aDashboard",component:AdashboardComponent,canActivate:[AuthadminGuard]},
  {path:"AllServices",component:AllservicesComponent,canActivate:[AuthadminGuard]},
  {path:"AllPolicies",component:AllpoliciesComponent,canActivate:[AuthadminGuard]},
  {path:"MyPolicies",component:MypoliciesComponent,canActivate:[AuthGuard]},
  {path:"AddInsurance",component:AddinsuranceComponent,canActivate:[AuthadminGuard]},
  {path:"AddUser",component:AdduserComponent,canActivate:[AuthadminGuard]},
  {path:"EditPolicy/:policyid",component:EditpolicyComponent,canActivate:[AuthadminGuard]},
  {path:"EditUser/:userid",component:EdituserComponent,canActivate:[AuthadminGuard]},
  {path:"EditProfile/:userid",component:EditprofileComponent,canActivate:[AuthGuard]},
  // {path:"AboutUs",component:AboutComponent},
  {path:"UserSelectedPolicies",component:UserselectedpoliciesComponent,canActivate:[AuthadminGuard]},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
