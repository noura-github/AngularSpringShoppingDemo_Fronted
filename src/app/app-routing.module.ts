import { UnsubscriptionDoneComponent } from './components/account/unsubscription-done/unsubscription-done.component';
import { SearchproductComponent } from './components/allproducts/searchproduct/searchproduct.component';
import { PasswordUpdateDoneComponent } from './components/account/password-update-done/password-update-done.component';
import { PasswordUpdateComponent } from './components/account/password-update/password-update.component';
import { MainViewComponent } from './components/account/main-view/main-view.component';
import { ProfileViewComponent } from './components/account/profile-view/profile-view.component';
import { RegisterDoneComponent } from './components/register-done/register-done.component';
import { SaleproductsComponent } from './components/allproducts/saleproducts.component';
import { WishlistContainerComponent } from './components/allproducts/wishlist-container/wishlist-container.component';
import { CartContainerComponent } from './components/allproducts/cart-container/cart-container.component';
import { WishlistComponent } from './components/allproducts/wishlist/wishlist.component';
import { CartComponent } from './components/allproducts/cart/cart.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { LaptopComponent } from './components/allproducts/laptop/laptop.component';
import { PrinterComponent } from './components/allproducts/printer/printer.component';
import { ItemDetailsComponent } from './components/allproducts/item-details/item-details.component';
import { SalelaptopComponent } from './components/allproducts/salelaptop/salelaptop.component';
import { SaleprinterComponent } from './components/allproducts/saleprinter/saleprinter.component';
import { RegisterGuardService } from './guards/register-guard.service';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', 
    component: RegisterComponent,
    canDeactivate: [RegisterGuardService] //we can add many guards
  },

  { path: 'register-done', 
    component: RegisterDoneComponent,
  },

  { path: 'account', 
    component: AccountComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '', redirectTo: 'main-view', pathMatch: 'full'
      },
      {
        path: 'main-view',
        component: MainViewComponent, pathMatch: "full", outlet: 'mainview'
      },
 
      {
        path: 'profile-view',
        component: ProfileViewComponent, pathMatch: "full", outlet: 'mainview'
      },

      {
        path: 'password-update',
        component: PasswordUpdateComponent, pathMatch: "full", outlet: 'mainview'
      },

      {
        path: 'password-update-done',
        component: PasswordUpdateDoneComponent, pathMatch: "full", outlet: 'mainview'
      },

      {
        path: 'unsubscription-done',
        component: UnsubscriptionDoneComponent, pathMatch: "full", outlet: 'mainview'
      }
 
    ]
  },

  { path: 'item-details', component: ItemDetailsComponent },

  { path: 'cart', component: CartContainerComponent },
  { path: 'wishlist', component: WishlistContainerComponent },
  
  { path: 'products', component: AllproductsComponent,

  children: [
    {
      path: '', redirectTo: 'laptops', pathMatch: 'full'
    },
    {
      path: 'laptops',
      component: LaptopComponent, pathMatch: "full", outlet: 'sub'
    },
    {
      path: 'printers',
      component: PrinterComponent, pathMatch: "full", outlet: 'sub'
    },
    {
      path: 'searchproducts',
      component: SearchproductComponent, pathMatch: "full", outlet: 'sub'
    }


  ]},
  { path: 'sale', component: SaleproductsComponent,
     children: [
    {
        path: '', redirectTo: 'salelaptops', pathMatch: 'full'
    },
    {
      path: 'salelaptops', component: SalelaptopComponent, pathMatch: 'full', outlet: 'salesub'
    },
    {
      path: 'saleprinters', component: SaleprinterComponent, pathMatch: 'full', outlet: 'salesub'
    },
  ]},
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponent = [AppComponent, LoginComponent, RegisterComponent, RegisterDoneComponent,
  AccountComponent, 
  ItemDetailsComponent,
  LaptopComponent, PrinterComponent, SearchproductComponent, AllproductsComponent, 
  CartContainerComponent, WishlistContainerComponent,
  SaleproductsComponent,
  SalelaptopComponent,
  SaleprinterComponent,
  MainViewComponent,
  ProfileViewComponent,
  PasswordUpdateComponent,
  PasswordUpdateDoneComponent,
  UnsubscriptionDoneComponent
];


