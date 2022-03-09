import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  berechtigungAdmin: boolean = false;
  
  constructor(
    private userService: UsersService,
    private _router: Router){
    }

  canActivate(): boolean {
    if (this.userService.loggedInAsAdmin()){
    return true
  } else {
    this._router.navigate(['login'])
    return false
  }
}
  
}
