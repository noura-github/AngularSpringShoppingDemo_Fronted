import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authentication: AuthenticationService, private router:Router){

  }
  canActivate(): boolean {
      if (this.authentication.isUserLoggedIn()){
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
