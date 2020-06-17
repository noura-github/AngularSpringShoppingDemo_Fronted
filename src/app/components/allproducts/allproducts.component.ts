import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  article:string;
  text:string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private messengerService: MessengerService) {

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

      let text = params["text"];

      if (text){
        this.text = text;
      }
      
      switch (this.article){
        case "Laptops":
              this.router.navigate([{outlets: {sub: ['laptops']}}], 
              { relativeTo: this.route, skipLocationChange: true });
              this.location.go('/products/laptops');

              break;

        case "Printers":this.router.navigate([{outlets: {sub: ['printers']}}], 
              { relativeTo: this.route, skipLocationChange: true });
              this.location.go('/products/printers');
              break;

        case "Products":
          
              let searchproducts = params["searchproducts"];
              
              if (searchproducts){
                  this.router.navigate([{outlets: {sub: ['searchproducts']}}], 
                  { relativeTo: this.route, skipLocationChange: true });
                  this.location.go('/products/searchproducts');

                  this.messengerService.sendSearchProductMsg(searchproducts);
              }
              break;

        default:this.router.navigate(['/home']);
                break;
      }
    });

  }
}
