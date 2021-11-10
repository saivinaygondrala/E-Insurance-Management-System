import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthadminGuard implements CanActivate {
  constructor(public userSer:UserService,public router:Router){}
  canActivate(): boolean {
    if(!this.userSer.isAdminLoggedIn()){
      this.router.navigateByUrl('/AdminLogin');
      return false;
    }
    return this.userSer.isAdminLoggedIn();
  }
  
}
