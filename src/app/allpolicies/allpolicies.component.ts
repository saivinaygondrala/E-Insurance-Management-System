import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-allpolicies',
  templateUrl: './allpolicies.component.html',
  styleUrls: ['./allpolicies.component.css']
})
export class AllpoliciesComponent implements OnInit {

  constructor(public userSer:UserService) { }
  msg:string;
  usersPolicy:any[]=[];
  
  ngOnInit(): void {
    this.userSer.getAllPolicies().subscribe((data:any[])=>{
      console.log(data);
      this.usersPolicy=data;
      
    },
    (error:any)=>{
      this.msg="Something went wrong";
      console.log(error);
    }
    )
  }
  doSearch(data:string){
    this.userSer.searchProvider(data).subscribe((data:any[])=>{
      this.usersPolicy=data;
    },
    (err:any)=>{
      console.log(err);
    })
  }
  deletePolicy(policyid: number) {
    if (confirm("Are you sure wanna delete this Policy")) {
      this.userSer.deletePolicy(policyid).subscribe(
        (data: any) => {
          this.msg = data;
          var index = this.usersPolicy.findIndex((obj) => {
            return obj._id == policyid;
          });
          this.usersPolicy.splice(index, 1);
        },
        (err: any) => {
          this.msg = "Something went wrong .....";
        })
    }
  }

}
