
import { CartItem } from '../models/cart-item';
import { cartUrl } from './../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, empty, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  username;
  password;

  cartItems:CartItem[]=[];
  cartTotal:number=0;
  cartTotalSubject: Subject<any> = new Subject();

  constructor(private http: HttpClient) { 

      this.username=localStorage.getItem('authenticatedUser');
      this.password=localStorage.getItem('password');
    }

  checkInValidCustomer(customerId){

    if (customerId==null||isNaN(customerId)) return true;

    return false;
  }

  getCartItems(customerId): Observable<CartItem[]>{

    if (this.checkInValidCustomer(customerId)) return empty();

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});

    return this.http.get<any>(cartUrl + '/getCart'+'/'+ customerId, {headers, responseType: 'text' as 'json'}).pipe(
      map((data: any) => {
          return this.getCartProduct(data); 
      })
    );
  }



  addProductToCart(customerId, cartItem: CartItem){

    if (this.checkInValidCustomer(customerId)) return empty();

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.post<any>(cartUrl +'/addCartProduct' +'/' + customerId, 
                cartItem, {headers, responseType: 'text' as 'json'}).pipe(
      map((data: any) => {
          return this.getCartProduct(data); 
      })
    );
  }

  reduceProductQty(customerId, cartItem: CartItem){

    if (this.checkInValidCustomer(customerId)) return empty();

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
     return this.http.post<any>(cartUrl +'/reduceCartProductQty' + '/' 
                + customerId, cartItem, {headers, responseType: 'text' as 'json'}).pipe(
      map((data: any) => {
          return this.getCartProduct(data); 
      })
    );
  }

  removeProductFromCart(customerId, cartItem: CartItem){

    if (this.checkInValidCustomer(customerId)) return empty();

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});

    return this.http.post<any>(cartUrl + '/deleteCartProduct/' 
              + customerId, cartItem, {headers, responseType: 'text' as 'json'}).pipe(
      map((data: any) => {

          console.log('data='+data)

          return this.getCartProduct(data); 
      })
    );
  }


  getCartProduct(data: any){

    let cartItems: CartItem[] = []; 

    if(data.length<=0) return cartItems;

      let jo = JSON.parse(data); 

      jo.forEach(element => {
          
        let cartItem = new CartItem();

        if (element){
          cartItem.cartProductId = element.cartProductId;  
          cartItem.productId = element.productId;   
          cartItem.qty = element.qty;
          cartItem.productName = element.mainProduct.productName;
          cartItem.buyPrice = element.mainProduct.buyPrice;
          cartItem.sale = element.mainProduct.sale;
          cartItems.push(cartItem);
        }
    });

 
    this.cartItems = cartItems;
    this.calcCartTotal();
    localStorage.setItem('cartTotal', this.cartTotal.toString());
    this.sendCartTotalMsg(this.cartTotal);

    return cartItems;
  }

  calcCartTotal(){

    this.cartTotal = 0;

    this.cartTotal = this.cartItems.map(item=>(item.buyPrice-((item.buyPrice*item.sale)/100))*item.qty)
        .reduce(function(acc, val){ return acc+val;
        }, this.cartTotal);
  }

  sendCartTotalMsg(cartTotal:number){
    this.cartTotalSubject.next(cartTotal); 
  }

  getCartTotalMsg(){
    return this.cartTotalSubject.asObservable();
  }
}
