import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userser:UserService) { 

  }
  user:string;
  ngOnInit(): void {
    var uname=localStorage.getItem("LoggedUserName");
    console.log(uname);
    this.userser.setTheUser(uname).subscribe((data:any)=>{
      console.log(data);
    },(error:any)=>{
      console.log(error);
    })
  }
  scrollToTop(){
    window.scroll(0,0);
  }
  scrollToDown(){
    window.scroll(100,100);
  }
}
