import { Injectable } from '@angular/core';

import { Product } from './../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl, saleProductsUrl, salePrintersUrl, saleLaptopsUrl } from 'src/app/config/api';
import { laptopsUrl } from 'src/app/config/api';
import { printersUrl } from './../config/api';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(productsUrl);
  }

  getSearchProducts(searchItem): Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl+'/searchProducts' + '/' + searchItem);
  }

  getLaptops(): Observable<Product[]>{
    return this.http.get<Product[]>(laptopsUrl);
  }

  getPrinters(): Observable<Product[]>{
    return this.http.get<Product[]>(printersUrl);
  }


  getSaleProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(saleProductsUrl);
  }

  getSaleLaptops(): Observable<Product[]>{

    const headers = new HttpHeaders({});
    return this.http.get<Product[]>(saleLaptopsUrl);
  }

  getSalePrinters(): Observable<Product[]>{
    const headers = new HttpHeaders({});

    return this.http.get<Product[]>(salePrintersUrl);
  }

}
