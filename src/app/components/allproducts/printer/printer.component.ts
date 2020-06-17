import { Printer } from './../../../models/printer';
import { MessengerService } from '../../../services/messenger.service';
import { WishlistService } from './../../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { Filter } from './../../../models/filter';
import { WishItem } from 'src/app/models/wish-item';


@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit {

  customerId:number;

  filterdProductList: Printer[] = [];
  productList: Printer[] = [];
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
    this.productService.getPrinters().subscribe((products) => {
      this.productList = products;
      this.filterdProductList = this.productList;
      this.messengerService.sendCartItemsMsg(this.productList);
      this.loadWishlist();
    })
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
