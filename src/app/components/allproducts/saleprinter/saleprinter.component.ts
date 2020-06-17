
import { Component, OnInit } from '@angular/core';
import { Printer } from 'src/app/models/printer';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Filter } from 'src/app/models/filter';
import { HttpHeaders } from '@angular/common/http';
import { WishItem } from 'src/app/models/wish-item';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-saleprinter',
  templateUrl: './saleprinter.component.html',
  styleUrls: ['./saleprinter.component.css']
})
export class SaleprinterComponent implements OnInit {

  customerId:number;
  filterdProductList: Product[] = [];
  productList: Product[] = [];
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

    this.productService.getSalePrinters().subscribe((products) => {
      this.productList = products;
      this.filterdProductList = this.productList;

      //Save productList inside messenger service to be shared by other components
      this.messengerService.sendSaleCartItemsMsg(this.productList);

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
      //console.log('*filter.from='+ filter.from);
      this.from = filter.from;
      this.to = filter.to;

      //console.log('this.productList='+ this.productList.length);

      this.filterdProductList = this.productList.filter(
        (product) => (product.buyPrice>=this.from&&product.buyPrice<=this.to)
        );

      //console.log('*this.filterdProductList='+ this.filterdProductList.length);
    });
  }

}
