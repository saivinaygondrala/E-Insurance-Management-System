import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.css']
})
export class AdashboardComponent implements OnInit {

  constructor(public userSer: UserService) { }
  msg: string;
  length:number=0;
  policiesLength:number=0;
  users: any[] = [];
  deleteTheUser:string;
  ngOnInit(): void {
    this.userSer.getAllUsers().subscribe((data: any[]) => {

      this.users = data;
      this.userSer.userlist=data;
      this.length=this.users.length;
      console.log(this.userSer.userlist);
    },
      (error: any) => {
        this.msg = "Something went wrong";
        console.log(error);
      }
    )
    this.userSer.getAllPolicies().subscribe((data:any[])=>{
      this.policiesLength=data.length;
    },(error:any)=>{
      console.log("Something went wrong");
    }
    )
  }
  deleteUser(userid: number) {
    // let start=0;
    // let end=this.users.length-1;
    // while(end>=start){
    //   let mid=start+(end-start)/2;
    //   if(this.users[mid]._id==userid){
    //     this.deleteTheUser=this.users[mid].uname;
    //   }
    //   else if(this.users[mid]._id>userid){
    //     end=mid-1;
    //   }else if(this.users[mid]._id<userid){
    //     start=mid+1;
    //   }
    // }
    for(let i=0;i<this.users.length;i++){
      if(this.users[i]._id==userid){
        this.deleteTheUser=this.users[i].uname;
        console.log(this.deleteTheUser);
      }
    }
    if (confirm("Are you sure wanna delete User")) {
      this.userSer.dropCollection(this.deleteTheUser).subscribe((data:any)=>{
        console.log(data);
      },(error:any)=>{
        console.log(error);
      })
      this.userSer.deleteUserData(userid).subscribe(
        (data: any) => {
          this.msg = data;
          var index = this.users.findIndex((obj) => {
            return obj._id == userid;
          });
          this.users.splice(index, 1);
        },
        (err: any) => {
          this.msg = "Something went wrong .....";
        })
    }
  }
  doSearch(data:string){
    this.userSer.searchUsers(data).subscribe((data:any[])=>{
      this.users=data;
    },
    (err:any)=>{
      console.log(err);
    })
  }
}
