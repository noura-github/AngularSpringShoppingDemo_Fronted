import { Injectable } from '@angular/core';
import { RegisterComponent } from '../components/register/register.component';
import { CanDeactivate } from '@angular/router';


export interface RegisterGuardGuard {
  canDeactivate(component: RegisterComponent): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterGuardService implements  CanDeactivate<RegisterComponent>{

  canDeactivate(component: RegisterComponent): boolean  {

    if (component.registerForm.dirty&&!component.submitted){
      return confirm("Are you sure to leave this page and to discard your changes?");
    }

    return true;
  }

  constructor() { }
}
