import { Customer } from './../../models/customer';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  username:string;
  password:string;

  customer:Customer;
  searchToken:string;
  isUserLoggedIn:boolean=true;


  constructor(private authentication: AuthenticationService, 
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) {

      this.getNavParams();
      this.onMainView();
  }

  getNavParams(){

    this.route.queryParams.subscribe(params => {

      let passwordupdatedone = params["passwordupdatedone"];

      if (passwordupdatedone!=null) {

        this.invalidateSession();

        //Navigate
        this.router.navigate([{outlets: {mainview: ['password-update-done']}}], 
        { relativeTo: this.route, skipLocationChange: true });
        this.location.go('/account/password-update-done');
      }  
    });

    let data = localStorage.getItem('customer');
    this.customer = JSON.parse(data);
  }

  invalidateSession(){

    //Invalidate session
    this.authentication.resetLoginParamters();

    this.isUserLoggedIn=this.authentication.isUserLoggedIn();
  }
  
  ngOnInit() {

    this.username = localStorage.getItem("username")
    this.password = localStorage.getItem("password");
  }

  logoutUser(){

    this.authentication.logoutUser().subscribe(
      data => {
            //Return to home page
            this.router.navigate(['/home'])
      });
  }


  onMainView(){

    this.router.navigate([{outlets: {mainview: ['main-view']}}], 
    { relativeTo: this.route, skipLocationChange: true });
    this.location.go('/account/main-view');
  }

  onProfileView(){

    this.router.navigate([{outlets: {mainview: ['profile-view']}}], 
    { relativeTo: this.route, skipLocationChange: true });

    this.location.go('/account/profile-view');
  }

  onPasswordUpdate(){

    this.router.navigate([{outlets: {mainview: ['password-update']}}], 
    { relativeTo: this.route, skipLocationChange: true });
    this.location.go('/account/password-update');
  }

  onUnsubscribe(){

   this.authentication.unsubscribeUser(this.customer.customerId).subscribe((data:string)=>{
      let done = (data.toString()==="true");
      if (done==true){
        
        //Invalidate session
        this.invalidateSession();

        this.router.navigate([{outlets: {mainview: ['unsubscription-done']}}], 
        { relativeTo: this.route, skipLocationChange: true });
        this.location.go('/account/unsubscription-done');
      }
   });
  }

}
