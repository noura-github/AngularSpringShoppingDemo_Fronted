
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';
import { WishItem } from '../models/wish-item';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

    //Helping us to listen to the next message

    public subject: Subject<any> = new Subject();
    public filterSubject: Subject<any> = new Subject();
    public userSubject: Subject<any> = new Subject();
    public cartItemSubject: Subject<any> = new Subject();

    public wishItemSubject: Subject<any> = new Subject();
    public searchSubject: Subject<any> = new BehaviorSubject<any>(null);
    
  constructor() { }

  sendSearchProductMsg(searchproduct:string){

    this.searchSubject.next(searchproduct);
  }

  getSearchProductMsg(){
    return this.searchSubject.asObservable();
  }



  sendAutenticateUserMsg(authenticatedUser:string){
    this.userSubject.next(authenticatedUser); 
  }

  getAutenticateUserMsg(){
    return this.userSubject.asObservable();
  }

  sendCartItemMsg(cartItem:CartItem){
    this.subject.next(cartItem); 
  }

  getCartItemMsg(){
    return this.subject.asObservable();
  }

  sendFilterMsg(filter){
    this.filterSubject.next(filter); 
  }

  getFilterMsg(){
    return this.filterSubject.asObservable();
  }


  sendCartItemsMsg(productList: Product[]){
    this.cartItemSubject.next(productList); 
  }

  sendSaleCartItemsMsg(productList: Product[]){
    this.cartItemSubject.next(productList); 
  }

  getCartItemAsProductMsg(){
    return this.cartItemSubject.asObservable();
  }


  sendWishlistItemsMsg(wishlist: WishItem[]){
    this.wishItemSubject.next(wishlist); 
  }

  getWishlisttemAsProductMsg(){

    return this.wishItemSubject.asObservable();
  }




}
