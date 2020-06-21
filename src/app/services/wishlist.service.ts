import { WishItem } from 'src/app/models/wish-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { wishlistUrl, productsUrl } from './../config/api';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Observable, of, empty, Subject } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishlist:WishItem[] = [];

  username;
  password;
  wishlistCount:number=0;
  wishlistCountSubject: Subject<any> = new Subject();

  constructor(private http:HttpClient) { 
      this.username=localStorage.getItem('authenticatedUser');
      this.password=localStorage.getItem('password');
    }

  checkInValidCustomer(customerId){

    if (customerId==null||isNaN(customerId)) return true;

    return false;
  }

  getWishlist(customerId){

    if (this.checkInValidCustomer(customerId)) return empty();

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    
    return this.http.get(wishlistUrl + '/getWishlist' + '/' + customerId, {headers, responseType: 'text' as 'json'}).pipe(
      map((data: any) => {

        return this.getWishProduct(data); 
      })
    );
  }



  addToWishlist(customerId:number,wishItem:WishItem){

    if (this.checkInValidCustomer(customerId)) return empty();
    
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});

    return this.http.post<WishItem[]>(wishlistUrl +'/addWishProduct' + '/' + customerId, wishItem, 
          {headers, responseType: 'text' as 'json'}).pipe(
          map((data: any) => {
              return this.getWishProduct(data); 
          })
    );
  }

  removeFromWishlist(customerId:number, wishItem:WishItem){

    if (this.checkInValidCustomer(customerId)) return empty();

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});

    return this.http.post<WishItem[]>(wishlistUrl + '/deleteWishProduct' + '/' + customerId, wishItem,
                    {headers, responseType: 'text' as 'json'}).pipe(map((data: any) => {

                          /*if (data instanceof Array){
                            return data;
                          }*/
                          return this.getWishProduct(data); 
                      })
                );
  }


    getWishProduct(data: any){

      //console.log('#### data='+data)

      let wishItems: WishItem[] = []; 

      if(data.length<=0) return wishItems;

      let jo = JSON.parse(data); 

      jo.forEach(element => {
        
        let wishItem = new WishItem();

        if (element){

          wishItem.wishProductId = element.wishProductId;  
          wishItem.productId = element.mainProduct.productId;  
          wishItem.productName = element.mainProduct.productName;     
          wishItem.buyPrice = element.mainProduct.buyPrice;   
          wishItems.push(wishItem);
        }
      });

      
      this.wishlist=wishItems;
      this.wishlistCount=this.wishlist.length;
      localStorage.setItem("wishlistCount", this.wishlistCount.toString());
      this.sendWishlistCountMsg(this.wishlistCount);

      return wishItems;
  }



  sendWishlistCountMsg(wishlistCount:number){
    this.wishlistCountSubject.next(wishlistCount); 
  }

  getWishlistCountMsg(){
    return this.wishlistCountSubject.asObservable();
  }
}
