import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  msg: string;
  clicked: boolean = false;
  isSuccess: boolean = false;
  userdata: { _id: number, uname: string, uemail: string, upassword: string, uphone: string };
  constructor(public activeroute: ActivatedRoute, public userSer: UserService, public router: Router) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe((param: Params) => {
      console.log(param.userid);
      if (param.userid) {
        this.userSer.getSingleUserData(param.userid).subscribe((data: any) => {
          console.log(data);
          this.userdata = data[0];
        },
          (error: any) => {
            console.log(error);
          }
        )
      }
    });
  }
  hide : boolean = true;

myFunction() {
  this.hide = !this.hide;
}
  editUser(form: NgForm) {
    this.clicked = true;
    form.value._id = this.userdata._id;
    console.log(form.value);
    this.userSer.editSingleUserData(form.value).subscribe((data: string) => {
      this.msg = "Successfully updated";
      setTimeout(() => {
        this.router.navigateByUrl("/aDashboard");
      }, 4000);
      this.isSuccess = true;
      // this.router.navigateByUrl('/aDashboard');
    }, (error: any) => { console.log(error); this.isSuccess = false; })
  }
}