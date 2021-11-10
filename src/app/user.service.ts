import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userlist:any[];
  len:number;

  isUNameAvailable(username: string) {
    return this.http.get<any[]>("http://localhost:3000/unameAvailable/"+username);
  }
  setTheUser(uname:string){
    return this.http.get<string>("http://localhost:3000/setUser/"+uname);
  }
  userRegistration(data: any) {
    return this.http.post<string>("http://localhost:3000/SignUp",data);
  }
  createDatabase(username: string) {
    return this.http.get<any[]>("http://localhost:3000/createDatabase/"+username)
  }
  constructor(public http:HttpClient) { }
  isLoggedIn(){
    return !!localStorage.getItem("LoggedUser");
  }
  getAllUsernames(){
    return this.http.get<any[]>("http://localhost:3000/getAllUsernames/");
  }
  userSelectedPolicy(uname:string){
    return this.http.get<any[]>("http://localhost:3000/userselectedpolicy/"+uname);
  }
  isAdminLoggedIn(){
    return !!localStorage.getItem("AdminLoggedUser");
  }
  doUserLogin(data:any){
    return this.http.post<any[]>("http://localhost:3000/Login",data);
  }
  doAdminLogin(data:any){
    return this.http.post<any[]>("http://localhost:3000/AdminLogin",data);
  }

  getAllUsers(){
    return this.http.get<any[]>("http://localhost:3000/allUsers/");
  }
  setToMyPolicy(data:any){
    return this.http.post<string>("http://localhost:3000/setToMyPolicy",data);
  }
  dropCollection(data:string){
    return this.http.get<any[]>("http://localhost:3000/dropcollection/"+data);
  }
  deleteUserData(userid:number){
    return this.http.delete<string>("http://localhost:3000/deleteUser/"+userid);
  }
  searchUsers(searchdata:string){
    return this.http.get<any[]>("http://localhost:3000/searchUser/"+searchdata);
  }
  getAllPolicies(){
    return this.http.get<any[]>("http://localhost:3000/allpolicies/");  
  }
  searchProvider(searchdata:string){
    return this.http.get<any[]>("http://localhost:3000/searchProvider/"+searchdata);
  }
  deletePolicy(policyid:number){
    return this.http.delete<string>("http://localhost:3000/deletePolicy/"+policyid);
  }
  addpolicy(data:any){
    return this.http.post<any[]>("http://localhost:3000/AddPolicy",data);
  }
  getAllMyPolicies(){
    return this.http.get<any[]>("http://localhost:3000/allmypolicies/");  
  }
  getProfileData(userid:string){
    return this.http.get<any[]>("http://localhost:3000/getprofileData/"+userid);
  }
  editSingleUserData(data:any){
    return this.http.put<string>("http://localhost:3000/updateUser",data);
  }
  editSinglePolicyData(data:any){
    return this.http.put<any[]>("http://localhost:3000/updatePolicy",data);
  }
  getSinglePolicyData(policyid:string){
    return this.http.get<any[]>("http://localhost:3000/getSinglePolicyDetails/"+policyid);
  }
  getSingleUserData(userid:string){
    return this.http.get<any[]>("http://localhost:3000/getSingleUserDetails/"+userid);
  }
}
