import { Product } from './../../../models/product';
import { MessengerService } from './../../../services/messenger.service';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { WishlistService } from 'src/app/services/wishlist.service';
import { WishItem } from 'src/app/models/wish-item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  customerId:number;
  authenticatedUser:string;
  cartItem: CartItem;

  productItem: Product;

  @Input() wishItem: WishItem;

  @Input() addedToWishlist: boolean = false;

  constructor(private route: ActivatedRoute,
    private cartService:CartService,
    private wishlistService: WishlistService,
    private messengerService: MessengerService) { 

      
    this.route.queryParams.subscribe(params => {

      let id: number = params["productId"];
      let name = params["productName"];
      let description = params["productDescription"];
      let price: number = params["buyPrice"];
      let sale: number = params["sale"];
      let imageUrl = params["imageUrl"];

      this.productItem = new Product();
      this.productItem.productId = id;
      this.productItem.productName = name;
      this.productItem.productDescription = description;
      this.productItem.buyPrice = price;
      this.productItem.sale = sale;
      this.productItem.imageUrl = imageUrl;

      this.cartItem = new CartItem();

      this.cartItem.productId = id;      
      this.cartItem.productName = name;
      this.cartItem.buyPrice = price;
      this.cartItem.qty = 1;

    });

   this.handleSubscription();
  }

  ngOnInit() { 

    this.authenticatedUser = localStorage.getItem("authenticatedUser");
    this.customerId = parseInt(localStorage.getItem("customerId"));

    this.loadWishlist(); 
  }

  loadWishlist(){

    this.wishlistService.getWishlist(this.customerId).subscribe((wishlist: WishItem[]) => { 
     
  
      wishlist.forEach(item=>{
        if (item.productId==this.productItem.productId){
          this.addedToWishlist=true;
        }
      });
    });
  }

  handleSubscription(){

    this.messengerService.getWishlisttemAsProductMsg().subscribe((wishItems:WishItem[]) =>{

      wishItems.forEach(wishItem=>{
        
        if (wishItem.productId==this.productItem.productId){
          this.addedToWishlist = true;
        }
      });

    });
  }


  handleAddToCart(){

    this.cartService.addProductToCart(this.customerId, this.cartItem).subscribe((data) => { 
      
         let filtered: CartItem[] = data.filter(x=>(x.productId==this.cartItem.productId));

         var element = filtered[0];

         this.cartItem.cartProductId = element.cartProductId;  
         this.cartItem.productId = element.productId;      
         this.cartItem.qty = element.qty;
         this.cartItem.productName = element.productName;
         this.cartItem.sale = element.sale;
         this.cartItem.buyPrice = element.buyPrice;

         this.messengerService.sendCartItemMsg(this.cartItem)
    });
  }

 handleAddToWishlist(productItem:Product){

  this.wishItem = new WishItem();
  this.wishItem.productId = productItem.productId;

     this.wishlistService.addToWishlist(this.customerId, this.wishItem).subscribe((wishItems:WishItem[]) => {
      
         this.addedToWishlist = true;     

         wishItems.forEach((item)=>{

            if (item.productId==this.wishItem.productId){
              this.wishItem = item;
            }
         })

         this.messengerService.sendWishlistItemsMsg(wishItems);
     });
}
 

  handleRemoveFromWishlist(productItem:Product){

    this.wishItem = new WishItem();

    this.wishItem.productId = productItem.productId;
    this.wishlistService.removeFromWishlist(this.customerId, this.wishItem).subscribe((wishItems:WishItem[]) => {
      this.addedToWishlist = false;     

      this.messengerService.sendWishlistItemsMsg(wishItems);
    });
  }

}

