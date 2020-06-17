import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { UnsubscriptionDoneComponent } from './components/account/unsubscription-done/unsubscription-done.component';
import { MainViewComponent } from './components/account/main-view/main-view.component';
import { PasswordUpdateComponent } from './components/account/password-update/password-update.component';
import { PasswordUpdateDoneComponent } from './components/account/password-update-done/password-update-done.component';
import { ProfileViewComponent } from './components/account/profile-view/profile-view.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { CartComponent } from './components/allproducts/cart/cart.component';
import { CartContainerComponent } from './components/allproducts/cart-container/cart-container.component';
import { FilterComponent } from './components/allproducts/filter/filter.component';
import { ItemDetailsComponent } from './components/allproducts/item-details/item-details.component';
import { LaptopComponent } from './components/allproducts/laptop/laptop.component';
import { PrinterComponent } from './components/allproducts/printer/printer.component';
import { SalelaptopComponent } from './components/allproducts/salelaptop/salelaptop.component';
import { SaleprinterComponent } from './components/allproducts/saleprinter/saleprinter.component';
import { SearchproductComponent } from './components/allproducts/searchproduct/searchproduct.component';
import { WishlistComponent } from './components/allproducts/wishlist/wishlist.component';
import { WishlistContainerComponent } from './components/allproducts/wishlist-container/wishlist-container.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterDoneComponent } from './components/register-done/register-done.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CartItemComponent } from './components/allproducts/cart/cart-item/cart-item.component';
import { WishItemComponent } from './components/allproducts/wishlist/wish-item/wish-item.component';
import { ItemComponent } from './components/allproducts/laptop/item/item.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { WarningDialogComponent } from './dialogs/warning-dialog/warning-dialog.component';
import { SaleproductsComponent } from './components/allproducts/saleproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './services/authentication.service';
import { ProductService } from './services/product.service';
import { MessengerService } from './services/messenger.service';
import { CartService } from './services/cart.service';
import { WishlistService } from './services/wishlist.service';
import { RegisterGuardService } from './guards/register-guard.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    UnsubscriptionDoneComponent,
    MainViewComponent,
    PasswordUpdateComponent,
    PasswordUpdateDoneComponent,
    ProfileViewComponent,
    AllproductsComponent,
    CartComponent,
    CartContainerComponent,
    FilterComponent,
    ItemDetailsComponent,
    LaptopComponent,
    PrinterComponent,
    SalelaptopComponent,
    SaleprinterComponent,
    SearchproductComponent,
    WishlistComponent,
    WishlistContainerComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterDoneComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    CartItemComponent,
    WishItemComponent,
    ItemComponent,
    ConfirmDialogComponent,
    WarningDialogComponent,
    SaleproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
 
    NgbModule,
  ],
  providers: [AuthenticationService, ProductService, 
    MessengerService, CartService, WishlistService,
    RegisterGuardService, AuthenticationGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
