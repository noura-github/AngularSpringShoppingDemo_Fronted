import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Customer } from 'src/app/models/customer';

import { Location } from '@angular/common';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {

  oldpassword:string;
  password:string;
  password_confirmation:string;

  passwordmismatch = false;

  oldpasswordwrong = false;
  submitted=false;

  customer:Customer = new Customer();
  customerId:number;
  
  constructor(private modalService: NgbModal,
    private authentication: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    private location: Location) { 
      
      this.getNavParams();
  }

  ngOnInit() {
  }

  getNavParams(){
    this.customer = JSON.parse(localStorage.getItem('customer'))
    this.customerId = this.customer.customerId;
  }

  onSubmit(form) {

    this.submitted = true;

    this.passwordmismatch = this.checkPasswords();

    let isInvalid = form.invalid || this.passwordmismatch || this.oldpasswordwrong;

    // Stop here if form is invalid
    if (isInvalid) {

        return;
    }
   
   this.updatePassword();
}

updatePassword(){

  this.authentication.updatePassword(this.customerId, this.password).subscribe((data:string)=>{
          
    let done = (data==='true');

    //console.log('done='+data)

    if (done===true){

      let navigationExtras: NavigationExtras = {
        queryParams: {
          'passwordupdatedone': "passwordupdatedone"
        }
      };
      
      //Navigate
      this.router.navigate(['account'], navigationExtras);
    }

 });
}


checkPasswords() { // here we have the 'passwords' group
      let pass = this.password;
      let confirmPass = this.password_confirmation;

      return pass === confirmPass ? false: true    
}
  
checkOldPassword(){

    
    if (this.oldpassword&&this.oldpassword.length>0){

      //console.log('>>this.customerId='+this.customerId)

      this.authentication.checkPassword(this.customerId, this.oldpassword).subscribe((data:string)=>{
          
          //console.log('checkPassword='+data)

          this.oldpasswordwrong = (data==='false');
          
          //console.log('this.oldpasswordwrong='+this.oldpasswordwrong)
       });
    }
  }



}
