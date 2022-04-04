import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userlist:any[];
  len:number;

  isUNameAvailable(username: string) {
    return this.http.get<any[]>("unameAvailable/"+username);
  }
  setTheUser(uname:string){
    return this.http.get<string>("setUser/"+uname);
  }
  userRegistration(data: any) {
    return this.http.post<string>("SignUp",data);
  }
  createDatabase(username: string) {
    return this.http.get<any[]>("createDatabase/"+username)
  }
  constructor(public http:HttpClient) { }
  isLoggedIn(){
    return !!localStorage.getItem("LoggedUser");
  }
  getAllUsernames(){
    return this.http.get<any[]>("getAllUsernames/");
  }
  userSelectedPolicy(uname:string){
    return this.http.get<any[]>("userselectedpolicy/"+uname);
  }
  isAdminLoggedIn(){
    return !!localStorage.getItem("AdminLoggedUser");
  }
  doUserLogin(data:any){
    return this.http.post<any[]>("Login",data);
  }
  doAdminLogin(data:any){
    return this.http.post<any[]>("AdminLogin",data);
  }

  getAllUsers(){
    return this.http.get<any[]>("allUsers/");
  }
  setToMyPolicy(data:any){
    return this.http.post<string>("setToMyPolicy",data);
  }
  dropCollection(data:string){
    return this.http.get<any[]>("dropcollection/"+data);
  }
  deleteUserData(userid:number){
    return this.http.delete<string>("deleteUser/"+userid);
  }
  searchUsers(searchdata:string){
    return this.http.get<any[]>("searchUser/"+searchdata);
  }
  getAllPolicies(){
    return this.http.get<any[]>("allpolicies/");  
  }
  searchProvider(searchdata:string){
    return this.http.get<any[]>("searchProvider/"+searchdata);
  }
  deletePolicy(policyid:number){
    return this.http.delete<string>("deletePolicy/"+policyid);
  }
  addpolicy(data:any){
    return this.http.post<any[]>("AddPolicy",data);
  }
  getAllMyPolicies(){
    return this.http.get<any[]>("allmypolicies/");  
  }
  getProfileData(userid:string){
    return this.http.get<any[]>("getprofileData/"+userid);
  }
  editSingleUserData(data:any){
    return this.http.put<string>("updateUser",data);
  }
  editSinglePolicyData(data:any){
    return this.http.put<any[]>("updatePolicy",data);
  }
  getSinglePolicyData(policyid:string){
    return this.http.get<any[]>("getSinglePolicyDetails/"+policyid);
  }
  getSingleUserData(userid:string){
    return this.http.get<any[]>("getSingleUserDetails/"+userid);
  }
}
