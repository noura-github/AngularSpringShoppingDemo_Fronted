import { Subscription } from 'rxjs';
import { WishItem } from 'src/app/models/wish-item';
import { CartItem } from './../../../../models/cart-item';
import { WishlistService } from './../../../../services/wishlist.service';
import { MessengerService } from './../../../../services/messenger.service';
import { Product } from './../../../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  customerId:number;
   //It is coming from the parent, we are storing it
   @Input() productItem: Product;
   @Input() addedToWishlist: boolean = false;

   wishItem: WishItem;

   @Input() cartItem: CartItem;
 
   constructor(private messengerService: MessengerService,
      private cartService: CartService,
      private wishlistService: WishlistService,
      private router: Router
     ) {
        

     }
 
   ngOnInit() {

    this.customerId = parseInt(localStorage.getItem("customerId"));
   }

 
   handleAddToCart(){
     this.cartService.addProductToCart(this.customerId, this.cartItem).subscribe(() => { 
         this.messengerService.sendCartItemMsg(this.cartItem)
     });
   }
 
   handleAddToWishlist(productItem:Product){

    this.wishItem = new WishItem();
    this.wishItem.productId = productItem.productId;

     this.wishlistService.addToWishlist(this.customerId, this.wishItem).subscribe(() => {
         this.addedToWishlist = true;     
     })
   }
 
   handleRemoveToWishlist(productItem:Product){
    this.wishItem = new WishItem();
    this.wishItem.productId = productItem.productId;
     this.wishlistService.removeFromWishlist(this.customerId, this.wishItem).subscribe(() => {
         this.addedToWishlist = false;     
     })
   }
 
   viewItemDetails(){
     let navigationExtras: NavigationExtras = {
       queryParams: {
         'productId': this.productItem.productId,
         'productName': this.productItem.productName,
         'productDescription': this.productItem.productDescription,
         'buyPrice': this.productItem.buyPrice,
         'sale': this.productItem.sale,
         'imageUrl': this.productItem.imageUrl
       }
    };
     this.router.navigate(['item-details'], navigationExtras);
   }
}
