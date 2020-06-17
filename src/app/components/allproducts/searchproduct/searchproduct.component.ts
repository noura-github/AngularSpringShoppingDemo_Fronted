import { Component, OnInit, Input } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { WishItem } from 'src/app/models/wish-item';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {

  customerId:number;
  filterdProductList: Product[] = [];
  productList: Product[] = [];
  wishlist: WishItem[] = [];
  wishlistIds: number[] = [];

  from:number=0;
  to:number=0;

  constructor(private productService: ProductService,
    private wishlistService: WishlistService,
    private messengerService: MessengerService,
    private route: ActivatedRoute) {

      this.handleSubscription();

      this.handleFilterSubscription();
  }


  handleSubscription(){
    this.messengerService.getSearchProductMsg().subscribe((products:string)=>{
      
        this.productList = JSON.parse(products);
        this.filterdProductList = this.productList;

        this.loadWishlist();
    })
  }


  ngOnInit() {

    this.customerId = parseInt(sessionStorage.getItem("customerId"));
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
