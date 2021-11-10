import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uleftpanel',
  templateUrl: './uleftpanel.component.html',
  styleUrls: ['./uleftpanel.component.css']
})
export class UleftpanelComponent implements OnInit {
  constructor(public router:Router) { }
  userid=localStorage.getItem("LoggedUser");
  ngOnInit(): void {
  }
  userLogout(){
    localStorage.clear();
    this.router.navigateByUrl("/Login");
  }

}
