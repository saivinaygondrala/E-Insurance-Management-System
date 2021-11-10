import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(public userSer:UserService,public router:Router) { }
  msg : string;
  istouched:boolean=false;
  newMsg:string;
  isAvai=false;
  ngOnInit(): void {
  }
  createADatabase(username:string){
    console.log(username);
    this.userSer.createDatabase(username).subscribe(
      (data:any)=>{
        console.log(data);
      },(error:any)=>{
        console.log(error);
      }
    );
  }
  doRegistration(f:NgForm){
    console.log("User registered");
    console.log(f.value);
    this.createADatabase(f.value.uname);
    this.userSer.userRegistration(f.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;
      this.router.navigateByUrl('/AllServices');
      f.reset();
    },
    (error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong....";
    },()=>{
      console.log("Successfully Registered");
    }
    );
  }
  checkUserNameAvailable(username:string){
    this.userSer.isUNameAvailable(username).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data.length==0){
          this.newMsg="User Name Available";  
          this.isAvai=true;
        }else{
          this.istouched=true;
          this.newMsg="User Name Not Available";  
          this.isAvai=false;
        }
    },
    (error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong....";
    }
    )
  }
  

}
