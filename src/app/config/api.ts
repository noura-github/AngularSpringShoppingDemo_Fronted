
import { environment } from './../../environments/environment';

//If it is production url, otherwise
//export const baseUrl = environment.production ? "https://api.shoppingcart.com":"http://localhost:8080";
export const baseUrl = environment.production ? "https://api.shoppingcart.com":"/api";
export const productsUrl = baseUrl + '/products';
export const laptopsUrl = baseUrl + '/laptops';
export const printersUrl = baseUrl + '/printers';


export const saleProductsUrl = baseUrl + '/products/sale';
export const saleLaptopsUrl = baseUrl + '/laptops/sale';
export const salePrintersUrl = baseUrl + '/printers/sale';

export const cartUrl = baseUrl + '/cart';
export const wishlistUrl = baseUrl + '/wishlist';

export const loginUrl = baseUrl + '/login';
export const logoutUrl = baseUrl + '/logout';
export const customerUrl = baseUrl + '/customer';