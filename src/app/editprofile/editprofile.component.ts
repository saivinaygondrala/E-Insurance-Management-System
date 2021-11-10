import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  msg: string;
  clicked:boolean=false;
  userid=localStorage.getItem("LoggedUser");
  
  isSuccess:boolean=false;
  userdata: { _id: number, uname: string, uemail: string, upassword: string, uphone: string };
  constructor(public activeroute: ActivatedRoute, public userSer: UserService,public router:Router) { }

  ngOnInit(): void {
    console.log(this.userid);
    this.userSer.getProfileData(this.userid).subscribe((data:any[])=>{
     
      this.userdata=data[0];
    },(error:any)=>{console.log(error);this.isSuccess=false;})
  }
  editUser(form:NgForm){
    this.clicked=true;
    form.value._id=this.userdata._id;
   
    this.userSer.editSingleUserData(form.value).subscribe((data:string)=>{
      
      this.msg="You will be automatically redirected to Policies tab";
      this.isSuccess=true;
      setTimeout(() => {
        this.router.navigateByUrl("/AllServices");
        
      }, 5000);
    },(error:any)=>{console.log(error);this.isSuccess=false;})
  }
}
