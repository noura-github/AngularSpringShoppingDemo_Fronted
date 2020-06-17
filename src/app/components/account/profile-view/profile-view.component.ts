import { Component, OnInit, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

 /*username:string;
 password:string;
 firstname:string;
 lastname:string;
 email:string;
 phone:string;
 gender:string;
 date_of_birth:string;

 street:string;
 number:number;
 city:string;
 state:string;
 zipcode:number;*/

 customer:Customer;

  constructor(private router: Router,
   private route: ActivatedRoute,) {

      this.getNavParams();
   }

   getNavParams(){

    /*this.route.queryParams.subscribe(params => {

      let customer = params["customer"];

      //console.log('customer='+customer)
    
    });*/

    let data = localStorage.getItem('customer');

    this.customer = JSON.parse(data);
    
    //console.log('customer='+this.customer)

  }

  ngOnInit() {
  }

}
