import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-saleproducts',
  templateUrl: './saleproducts.component.html',
  styleUrls: ['./saleproducts.component.css']
})
export class SaleproductsComponent implements OnInit {

  article:string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location) {

      this.handleSubscription();
   }

  ngOnInit() {
  }


 handleSubscription(){

    this.route.queryParams.subscribe(params => {

      let article = params["article"];
      if (article){
        this.article = article;
      }

      switch (this.article){
        case "Laptops":
              this.router.navigate([{outlets: {salesub: ['salelaptops']}}], 
              { relativeTo: this.route, skipLocationChange: true });
              this.location.go('/sale/laptops');
              break;

        case "Printers":this.router.navigate([{outlets: {salesub: ['saleprinters']}}], 
              { relativeTo: this.route, skipLocationChange: true });
              this.location.go('/sale/printers');
              break;
        default:break;
      }
    });

  }

}
