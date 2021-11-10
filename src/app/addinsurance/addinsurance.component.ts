import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addinsurance',
  templateUrl: './addinsurance.component.html',
  styleUrls: ['./addinsurance.component.css']
})
export class AddinsuranceComponent implements OnInit {

  constructor(public userSer:UserService,public router:Router) { }
  msg:string;
  success:boolean=false;
  ngOnInit(): void {
  }
  addInsurancePolicy(f:NgForm){
    this.userSer.addpolicy(f.value).subscribe((data:any[])=>{
      console.log(data);
      // this.msg=data;
      this.success=true;
      setTimeout(() => {
        this.router.navigateByUrl("/AllPolicies");
      }, 4000);
      f.reset();
    },
    (error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong...."
    },()=>{
      console.log("Successfully Health Policy Successfully");
    }
    );
  }
}
