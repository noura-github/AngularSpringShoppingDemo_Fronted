
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Filter } from 'src/app/models/filter';
import { WishItem } from 'src/app/models/wish-item';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-salelaptop',
  templateUrl: './salelaptop.component.html',
  styleUrls: ['./salelaptop.component.css']
})
export class SalelaptopComponent implements OnInit {


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
    this.productService.getSaleLaptops().subscribe((products) => {
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
      this.from = filter.from;
      this.to = filter.to;
      this.filterdProductList = this.productList.filter(
        (product) => (product.buyPrice>=this.from&&product.buyPrice<=this.to)
        );
    });
  }
}
