import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router:Router,public userSer:UserService) { }
  msg:string;
  isErr=false;
  isSucc=false;
  ngOnInit(): void {
  }
  authAdmin(form:any){
    this.userSer.doAdminLogin(form.value).subscribe(
      (data:any)=>{
        
        if(data.length==0){
          this.msg="Invalid Admin User name Or Password";
          this.isErr=true;
        }else{
          // console.log(form.value);
          localStorage.setItem("AdminLoggedUser",data[0]._id);
          this.isSucc=true;
          this.msg="Admin Login Successfully";
          this.router.navigateByUrl('/aDashboard');
        }
      },(err:any)=>{
        console.log(err);
      }
      );
  }
}