import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(public userser:UserService) { }
  isClicked:boolean=false;
  msg:string;
  newMsg:string;
  isAvai=false;
  timeout=true;

  ngOnInit(): void {
  }
  doRegistration(f:NgForm){
    console.log("User registered");
    console.log(f.value);
    
    this.userser.userRegistration(f.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;
      this.isClicked=true;
      
      this.createADatabase(f.value.uname);
      f.reset();
    },
    (error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong...."
    },()=>{
      console.log("Successfully Registered");
    }
    );
  }
  isUserNameAvailable(uname:string){
    this.userser.isUNameAvailable(uname).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data.length==0){
          this.newMsg="User Name Available";  
          this.isAvai=true;
          setTimeout(() => {
            this.timeout=false;
          }, 3000);
        }else{
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
  createADatabase(username:string){
    console.log(username);
    this.userser.createDatabase(username).subscribe(
      (data:any)=>{
        console.log(data);
      },(error:any)=>{
        console.log(error);
      }
    );
  }

}
