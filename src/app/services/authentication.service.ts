import { MessengerService } from './messenger.service';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Customer } from './../models/customer';

import { map } from 'rxjs/operators';
import { loginUrl, customerUrl, logoutUrl } from '../config/api';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  username: string;
  password: string;

  customer: Customer;
  customerId: number;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  CUSTOMER_SESSION_ATTRIBUTE_CUSTOMER = 'customer';
  CUSTOMER_SESSION_ATTRIBUTE_ID = 'customerId';

 constructor(private http: HttpClient,
   private messengerService:MessengerService) { }


 //Login a user
 loginUser(username: string, password: string){

      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});

      return this.http.get<any>(loginUrl, {headers, responseType: 'text' as 'json'}).pipe(map((data:any) => {
         
         this.username = username;
         this.password = password;


         if (data.length>0){
            this.customer = JSON.parse(data);
            this.registerSuccessfulLogin();
         }
      }));
   }

   //Return if a user is login
   isUserLoggedIn() {
      let user = localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
      if (user === null) return false
      return true
   }

   registerSuccessfulLogin() {

      localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, this.username);

      localStorage.setItem('password', this.password);
      
      localStorage.setItem(this.CUSTOMER_SESSION_ATTRIBUTE_CUSTOMER, JSON.stringify(this.customer));

      localStorage.setItem(this.CUSTOMER_SESSION_ATTRIBUTE_ID, this.customer.customerId.toString());

      this.messengerService.sendAutenticateUserMsg(this.username);
   }


   //Logout a user
   logoutUser(){
      return this.http.get(logoutUrl, {responseType: 'text'}).pipe(map((res) => {
         this.resetLoginParamters();
      }))
   }

   //Reset all login parameters after invalidate session
   resetLoginParamters(){

      localStorage.removeItem('password');
      localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
      localStorage.removeItem(this.CUSTOMER_SESSION_ATTRIBUTE_CUSTOMER);
      localStorage.removeItem(this.CUSTOMER_SESSION_ATTRIBUTE_ID);
      this.customerId = NaN;
      this.customer = null;
      this.username = null;
      this.password = null;

      //Empty the session storage content
      localStorage.clear();

      this.messengerService.sendAutenticateUserMsg(null);
   }

   //Check if a username already exists
   checkIfExistsUser(username){
      const headers = new HttpHeaders();
      return this.http.get(customerUrl+"/checkCustomerByName/" + username, {headers, responseType: 'text' as 'json'});
   }

   //Get the customer/user by the id
   getUserById(customerId){
      const headers = new HttpHeaders();
      return this.http.get<Customer>(customerUrl+"/getCustomer/" + customerId, 
      {headers, responseType: 'text' as 'json'});
   }

   //Check if the password exists
   checkPassword(customerId, password){
      const headers = new HttpHeaders();
      return this.http.get<any>(customerUrl+"/checkCustomerPassword/" + customerId + '/' + password,
             {headers, responseType: 'text' as 'json'});
   }

   //Update the password
   updatePassword(customerId, password){
      const headers = new HttpHeaders();
      return this.http.get<any>(customerUrl+"/updateCustomerPassword/" + customerId + '/' + password,
             {headers, responseType: 'text' as 'json'});
   }

   //Register new user
   registerUser(user:Customer){
      const headers = new HttpHeaders();
      return this.http.post(customerUrl+"/registerCustomer", user, {headers, responseType: 'text' as 'json'});
   }

   //Unsubscribe from web-site
   unsubscribeUser(customerId){

      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
      return this.http.post<string>(customerUrl+"/deleteCustomerById/" + customerId, {headers});
   }

}
