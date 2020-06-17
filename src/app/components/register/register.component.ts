
import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from './../../models/customer';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ConfirmOptions } from 'src/app/dialogs/confirm-options';

import { WarningDialogComponent } from 'src/app/dialogs/warning-dialog/warning-dialog.component';
import { WarningOptions } from 'src/app/dialogs/warning-options';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acceptTerms: boolean;
  confirmOptions: ConfirmOptions;
  warningOptions: WarningOptions;

  closeResult = '';


  public submitted = false;

  passwordmismatch = false;
  usernameexists = false;

  @ViewChild('registerForm', {static: false}) public registerForm:NgForm;

  @ViewChild(WarningDialogComponent, {static: false}) warningDialogComponent: WarningDialogComponent;

  customer:Customer = new Customer();


  constructor(private modalService: NgbModal,
    private authentication: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe) { 
      
  }

  ngOnInit() {

  }

  getFormattedDate(value) {

    let year:number=parseInt(value.year); 
    let month:number=parseInt(value.month)-1;
    let day:number=parseInt(value.day);

      let date = new Date(year, month, day);

     return this.datepipe.transform(date,"yyyy-MM-dd")

  }

   onSubmit(form) {


      this.submitted = true;

      this.passwordmismatch = this.checkPasswords();

      let isInvalid = form.invalid || this.passwordmismatch;

      // Stop here if form is invalid
      if (isInvalid) {

          return;
      }

      if (!this.customer.date_of_birth) {

        return;
      }
      
      this.customer.date_of_birth = new Date(this.getFormattedDate(form.controls.dob.value))

      this.authentication.checkIfExistsUser(this.customer.username).subscribe(data=>{
              
         if (data=="false"){
            this.usernameexists = false;
            this.doRegistration();
         } else {
            this.usernameexists = true;
         }
      });
      
   }

   doRegistration(){

    this.authentication.registerUser(this.customer).subscribe((data:any)=>{
      let username = "";
      let firstname = "";
      let lastname = "";

      if(data.length>0) {
        let jo = JSON.parse(data); 
        username = jo.username
        firstname = jo.firstname
        lastname = jo.lastname
      };
      let navigationExtras: NavigationExtras = {
        queryParams: {
          'username': username,
          'firstname': firstname,
          'lastname': lastname,
        }
      };
      this.router.navigate(['/register-done'], navigationExtras);
    })
  }

   onUsernameChange(){
        this.usernameexists = false;
   }


  checkPasswords() {
      let pass = this.customer.password;
      let confirmPass = this.customer.password_confirmation;
      return pass === confirmPass ? false: true    
  }



  receiveMessage($event) {  
    this.closeResult = $event
  }

  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }


  registerUser(){
 
    if (!this.acceptTerms){

      this.warningOptions = new WarningOptions("Terms and Conditions Violation", 
                             "You did not agree on the terms and conditions of this registration");

      this.warningDialogComponent.warningOptions = this.warningOptions

      this.open(this.warningDialogComponent.getContent());

      return;
    }
    
  }

}
