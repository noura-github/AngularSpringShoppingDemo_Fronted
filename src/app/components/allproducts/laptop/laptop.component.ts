import { Laptop } from './../../../models/laptop';
import { MessengerService } from '../../../services/messenger.service';
import { WishlistService } from './../../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

import { Filter } from './../../../models/filter';
import { WishItem } from 'src/app/models/wish-item';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {


  customerId:number;
  filterdProductList: Laptop[] = [];
  productList: Laptop[] = [];
  wishlist: WishItem[] = [];
  wishlistIds: number[] = [];

  from:number=0;
  to:number=0;

  constructor(private productService: ProductService,
    private wishlistService: WishlistService,
    private messengerService: MessengerService) { }

  ngOnInit() {

    this.customerId = parseInt(localStorage.getItem("customerId"));

    this.loadProducts();
    this.handleFilterSubscription();
  }

  loadProducts(){
      this.productService.getLaptops().subscribe((products) => {

        this.productList = products;
        this.filterdProductList = this.productList;

        //Save productList inside messenger service to be shared by other components
        this.messengerService.sendCartItemsMsg(this.productList);

        this.loadWishlist();
    });
  }
  

  loadWishlist(){

    this.wishlistService.getWishlist(this.customerId).subscribe((wishItems: WishItem[]) => { 
      this.wishlist = wishItems;

      this.wishlist.forEach(wishItem=>{
        this.wishlistIds.push(wishItem.productId);
      });
    })
  }


  handleFilterSubscription(){
    this.messengerService.getFilterMsg().subscribe((filter: Filter) =>{

      this.from = filter.from;
      this.to = filter.to;
      this.filterdProductList = this.productList.filter(
        (product) => (product.buyPrice>=this.from&&product.buyPrice<=this.to)
        );
    });
  }

}
