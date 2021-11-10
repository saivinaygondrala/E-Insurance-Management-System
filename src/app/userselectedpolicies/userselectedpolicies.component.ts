import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userselectedpolicies',
  templateUrl: './userselectedpolicies.component.html',
  styleUrls: ['./userselectedpolicies.component.css']
})
export class UserselectedpoliciesComponent implements OnInit {
  // i:number=0;
  userArr:any[]=[];
  userSelectedPolicy:any[];
  usersSelectedPolicies:string[]=[];
  constructor(public userser:UserService) { }
  ngOnInit(): void {
    this.userser.getAllUsernames().subscribe((data:any[])=>{
      this.userArr=data;
      let j=0;
      for(let i=0;i<data.length;i++){
        let temp="";
      this.userser.userSelectedPolicy(data[i].uname).subscribe((data:any[])=>{
        this.userSelectedPolicy=data;let temp="";
        console.log(this.userSelectedPolicy);
        if(data.length!=0){
        for(let i=0;i<data.length-1;i++){
          temp=temp+data[i].policy+' , ';
        }
        temp+=data[data.length-1].policy;
        
      }
       else {
          temp="null";
       }
        this.usersSelectedPolicies.push(temp);
      },(error:any)=>{
        console.log(error);
      })
    } 
    },(error:any)=>{
      console.log(error);
    })
  }
}