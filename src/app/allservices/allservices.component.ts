import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.css']
})
export class AllservicesComponent implements OnInit {
  constructor(public userser:UserService,public router:Router) { }
  msg:string;
  id:Number;
  i:Number;
  userid=localStorage.getItem("LoggedUser");
  policies:any[]=[];
  allpolicies: any=[];
  status: string[]=[];
  selectedPolicy={};
  isClicked=false;
  policyAmount:string="";
  selectedPolicyId:number;
  policyName:string="";
  policyProvider:string="";
  insuranceType:string="";
  isAleadyApplied:boolean=false;
  paymentbtnClick=false;
  ngOnInit(): void {
    this.userser.getAllPolicies().subscribe((data:any[])=>{
      console.log(data);
      this.policies=data;
    },
    (error:any)=>{
      this.msg="Something went wrong";
      console.log(error);
    }
    )
  }
  clicked(){
    console.log(this.id);  
    console.log(this.selectedPolicy);
    this.userser.setToMyPolicy(this.selectedPolicy).subscribe((data:any)=>{
      console.log(data);
      this.paymentbtnClick=true;
      setTimeout(() => {
        this.isClicked=false;
        this.router.navigateByUrl("/Dashboard");
      }, 3000);
    },(error:any)=>{
      console.log(error);
      this.isAleadyApplied=true;
      setTimeout(() => {
        this.router.navigateByUrl('Dashboard');
      }, 3000);
      
    })

  }
  saveDetails(id:Number,i:number){
    this.isClicked=true;
    this.id=id;
      this.i=i;
      for(let i=0;i<this.policies.length;i++){
        if(this.policies[i]._id==this.id){
          this.selectedPolicy=this.policies[i];
          this.policyAmount=this.policies[i].uamount;
          this.policyName=this.policies[i].policy;
          this.policyProvider=this.policies[i].ucompanyname;
          this.insuranceType=this.policies[i].uinsurancename;
          console.log(this.policyAmount);
        }
      }
     window.scroll(0,0);
      
  }
  doSearch(data:string){
    this.userser.searchProvider(data).subscribe((data:any[])=>{
      this.policies=data;
    },
    (err:any)=>{
      console.log(err);
    })
  }
 
}
