import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userSer:UserService,public router:Router) { }
  
  ngOnInit(): void {
  }
  doLoggOut(){
    localStorage.clear();
    this.router.navigateByUrl("/home");
  }
  adminLogout(){
    localStorage.clear();
    this.router.navigateByUrl("/home");
  }
}
