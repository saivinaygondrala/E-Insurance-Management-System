import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
mypolicies:any[];
msg:string;
name:string;
res:boolean=false;
  constructor(public userser:UserService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("LoggedUserName");
    this.userser.getAllMyPolicies().subscribe((data:any[])=>{
      console.log(data);
      this.mypolicies=data;
    },
    (error:any)=>{
      this.msg="Something went wrong";
      console.log(error);
    }
    )
    let user=localStorage.getItem("LoggedUserName")
    this.userser.setTheUser(user).subscribe((data:string)=>{
      console.log(data);
      if(data!=undefined){
      this.res=true;
      }
    })
  }
  print(){this.ngOnInit();
    const printContent = document.getElementById("tableofcontent");
  const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=500');
  WindowPrt.document.write(printContent.innerHTML);
  WindowPrt.document.close();
  WindowPrt.focus();
  WindowPrt.print();
  WindowPrt.close();
  }
 
}
