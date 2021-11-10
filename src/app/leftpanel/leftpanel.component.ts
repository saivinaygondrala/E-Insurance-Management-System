import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  adminLogout(){
    localStorage.clear();
    this.router.navigateByUrl("/AdminLogin");
  }


}
