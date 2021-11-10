import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editpolicy',
  templateUrl: './editpolicy.component.html',
  styleUrls: ['./editpolicy.component.css']
})
export class EditpolicyComponent implements OnInit {
  activeroute: any;
  msg: string;
  clicked: boolean = false;
  isSuccess: boolean = false;
  policydata: { _id: number, ucompanyname: string, uinsurancename: string, uamount: string, ulifecover: string, uclaimsettle: string, policy: string };
  constructor(public userser: UserService, public activateroute: ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.activateroute.params.subscribe((param: Params) => {
      console.log(param.policyid);
      if (param.policyid) {
        this.userser.getSinglePolicyData(param.policyid).subscribe((data: any) => {
          console.log(data);
          this.policydata = data[0];
        },
          (error: any) => {
            console.log(error);
          }
        )
      }
    })
  }
  EditPolicy(form: NgForm) {
    this.clicked = true;
    form.value._id = this.policydata._id;
    console.log(form.value);
    this.userser.editSinglePolicyData(form.value).subscribe((data:any[])=>{
      console.log(data);
      this.msg="Successfully Updated and redirected to AllPolicies"
      setTimeout(() => {
        this.router.navigateByUrl("/AllPolicies");
      }, 5000);
    },(error:any)=>{
      console.log(error);
    })
  }

}
