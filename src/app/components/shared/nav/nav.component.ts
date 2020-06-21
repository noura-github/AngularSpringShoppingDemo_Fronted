import { WishlistService } from 'src/app/services/wishlist.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchItem:string;
  authenticatedUser:string;
  cartTotal:number=0;
  wishlistCount:number=0;

  CUSTOMER_SESSION_ATTRIBUTE_USER = 'user';
  CUSTOMER_SESSION_ATTRIBUTE_CARTTOTAL = 'cartTotal';
  CUSTOMER_SESSION_ATTRIBUTE_WISHLISTCOUNT = 'wishlistCount';

  constructor(private router: Router,
    private productservice:ProductService,
    private messengerService:MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService) {
      this.handleSubscription();
   }

  ngOnInit() {

  }

  handleSubscription(){

    this.messengerService.getAutenticateUserMsg().subscribe((name:string)=>{

      this.authenticatedUser = name;

      if (name){
        localStorage.setItem(this.CUSTOMER_SESSION_ATTRIBUTE_USER, name);
      } else {
        localStorage.removeItem(this.CUSTOMER_SESSION_ATTRIBUTE_USER)
      }
    });

    this.cartTotal = isNaN(parseInt(localStorage.getItem(this.CUSTOMER_SESSION_ATTRIBUTE_CARTTOTAL)))?
                     0:parseInt(localStorage.getItem(this.CUSTOMER_SESSION_ATTRIBUTE_CARTTOTAL));
    this.wishlistCount = isNaN(parseInt(localStorage.getItem(this.CUSTOMER_SESSION_ATTRIBUTE_WISHLISTCOUNT)))?
                      0:parseInt(localStorage.getItem(this.CUSTOMER_SESSION_ATTRIBUTE_WISHLISTCOUNT));

    this.cartService.getCartTotalMsg().subscribe((cartTotal:number)=>{      
      this.cartTotal = cartTotal;
    });

    this.wishlistService.getWishlistCountMsg().subscribe((wishlistCount:number)=>{
      this.wishlistCount = wishlistCount;
    });

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
