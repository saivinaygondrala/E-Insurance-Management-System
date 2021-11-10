import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  msg: string;
  succ = false;
  err = false;
  isLoggedIn=false;
  constructor(public userSer: UserService,public router:Router) { }
  ngOnInit(): void {
  }
  doLogin(f: NgForm) {
    this.userSer.doUserLogin(f.value).subscribe(
      (data: any[]) => { 
        console.log(data); 
        if(data.length==0){
          this.msg="Invalid Username or Password";
        this.err=true;
        }else{
          localStorage.setItem("LoggedUser",data[0]._id);
          localStorage.setItem("LoggedUserName",data[0].uname);
          this.succ=true;
        this.msg="Successfully Logged";
        this.router.navigateByUrl('/Dashboard');
        }
      }, 
      (error: any) => { 
        console.log(error);
      },);
  }
}