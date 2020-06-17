import { ProductService } from 'src/app/services/product.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchItem:string;
  authenticatedUser:string;

  constructor(private router: Router,
    private autentication:AuthenticationService,
    private productservice:ProductService,
    private messengerService:MessengerService,
    
    private route: ActivatedRoute,

    private location: Location) {
      this.handleSubscription();
   }

  ngOnInit() {

  }

  handleSubscription(){

    this.messengerService.getAutenticateUserMsg().subscribe((name:string)=>{

      this.authenticatedUser = name;

      if (name){
        localStorage.setItem('user', name);
      } else {
        localStorage.removeItem('user')
      }
    })

    let user = localStorage.getItem('user')

    if (user){
      this.authenticatedUser = user;
    }

  }

  onSearchItem(){
    this.productservice.getSearchProducts(this.searchItem).subscribe((data:Product[])=>{

        //Navigate
        localStorage.setItem('searchproducts', JSON.stringify(data));

        if (data.length>0){

          let navigationExtras: NavigationExtras = {
            queryParams: {
              'article': 'Products',
              'text': 'Found Products matching the search item "' + this.searchItem + '"',
              'searchproducts': JSON.stringify(data),
            }
         };


         this.router.navigate(['products'], navigationExtras)
        }
    })
  }


  onShowAccount(){

    this.authenticatedUser = localStorage.getItem('user')

    if (this.authenticatedUser){
      
      if (this.router.url.indexOf('account')<0){
          this.router.navigate(['account'])
      }
    } else {
      this.router.navigate(['login'])
    }
  }
}
