
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  customerId:number;
  authenticatedUser:string;
  
  cartItems = [];
  cartTotal:number=0;

  constructor(private messengerService: MessengerService,
    private cartService: CartService
    ) {

      this.handleSubscription();
    }

  ngOnInit() {

    this.customerId = parseInt(localStorage.getItem("customerId"));
    this.authenticatedUser = localStorage.getItem("authenticatedUser");

    this.loadCartItems();
  }

  handleSubscription(){
    
    this.messengerService.getCartItemMsg().subscribe(

      (next:CartItem) => {

        let newCartItems = [];

        let found = false;

        this.cartItems.forEach(elem=>{
          if (next.cartProductId==elem.cartProductId){
            newCartItems.push(next)
            found = true;
          } else {
            newCartItems.push(elem);
          }
        });

        if (!found){
          newCartItems.push(next);
        }

        this.cartItems = newCartItems;
        this.calcCartTotal();
     })
  }

  loadCartItems(){

    if (!this.authenticatedUser) return;
   
    this.cartService.getCartItems(this.customerId).subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    });
  }
  
 
  calcCartTotal(){

    this.cartTotal = 0;

    this.cartTotal = this.cartItems.map(item=>(item.buyPrice-((item.buyPrice*item.sale)/100))*item.qty)
        .reduce(function(acc, val){ return acc+val;
        }, this.cartTotal);
  }

  
  reduceItemQty(cartItem){

    this.cartService.reduceProductQty(this.customerId, cartItem).subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    });
  }


  removeItem(cartItem: CartItem){

    this.cartService.removeProductFromCart(this.customerId, cartItem).subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    });
  }
}
