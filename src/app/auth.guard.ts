import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public userSer:UserService,public router:Router){

  }
  canActivate(): boolean {
    if(!this.userSer.isLoggedIn()){
      this.router.navigateByUrl("/Login");
      return false;
    }
    return this.userSer.isLoggedIn();
  }
  
  
}
