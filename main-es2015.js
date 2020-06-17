(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n<div><app-footer></app-footer></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav *ngIf=\"isUserLoggedIn\" class=\"navbar navbar-expand-md navbar-light bg-light\">\n    <div class=\"mx-auto order-0\">\n        <label class=\"navbar-brand mb-0 h1\">\n          User: <span style=\"font-weight:bold;color:#1E9E1E;\">\n            {{customer.firstname}} {{customer.lastname}} ({{customer.email}})\n          </span>\n        </label>\n    </div>\n    <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item mr-1\">\n              <div class=\"dropdown\">\n                <button class=\"btn btn-outline-info dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" \n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings\n                </button>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n                      <button class=\"dropdown-item\" type=\"button\" (click)=\"onProfileView()\">View Profile</button>\n                      <button class=\"dropdown-item\" type=\"button\" (click)=\"onPasswordUpdate()\">Update Password</button>\n                      <button class=\"dropdown-item\" type=\"button\" data-toggle=\"modal\" \n                                data-target=\"#unsubscribeConfirmDialog\">Unsubscribe</button>\n                  </div>\n              </div>\n            </li>\n            <li class=\"nav-item mr-1\">     \n                <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"button\" (click)=\"onMainView()\">Main</button>\n            </li>\n            \n            <li class=\"nav-item\">              \n              <button class=\"btn btn-outline-danger my-2 my-sm-0\" type=\"submit\" (click)=\"logoutUser()\">\n              <span class=\"glyphicon glyphicon-log-out\"></span>Logout</button>\n            </li>\n  \n        </ul>\n    </div>\n  </nav>\n  \n  <router-outlet name='mainview'></router-outlet>\n  \n  \n  \n  <!-- Modal unsubscribe -->\n  <div id=\"unsubscribeConfirmDialog\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Unsubscribe User</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Are you sure, you want to unsubscribe from our Website?</p>\n        </div>\n        <div class=\"modal-footer\">\n             <button type=\"button\" class=\"btn btn-primary\"  data-dismiss=\"modal\" (click)=\"onUnsubscribe()\">Yes</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Modal delete user -->\n  \n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/main-view/main-view.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/main-view/main-view.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">SALE</h5>\n                <small>Only Today!</small>\n              </div>\n              <p class=\"mb-1\">50% on all selected products!</p>\n              <small>CODE (78459)</small>\n            </a>\n    </div>\n  </div>\n  \n  \n  <div class=\"container mycontainer\">\n  \n  \n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n          <h2>Welcome back {{customer.firstname}}!</h2>\n          <p>Check your new offers today!</p>\n          <img class=\"d-block w-100 vh-50\" src=\"assets/images/offer.jpg\" alt=\"First slide\">\n        \n        <br><br>\n        \n        <h2>Check your Emails, Notifications & Offers.</h2>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item list-group-item-info d-flex justify-content-between align-items-center\">\n            Inbox\n            <span class=\"badge badge-primary badge-pill\">8</span>\n          </li>\n          <li class=\"list-group-item list-group-item-info d-flex justify-content-between align-items-center\">\n           Notifications\n            <span class=\"badge badge-primary badge-pill\">25</span>\n          </li>\n          <li class=\"list-group-item list-group-item-info d-flex justify-content-between align-items-center\">\n           Offers\n            <span class=\"badge badge-primary badge-pill\">4</span>\n          </li>\n        </ul>\n        \n      </div>\n  \n  \n  \n  \n      <div class=\"col-md-6\">\n      \n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h2>Your Cart and Wishlist</h2>\n            </div>\n          </div>\n  \n          <div class=\"row\"><div class=\"col-md-12\"><app-cart></app-cart></div></div>\n          <div class=\"row\"><div class=\"col-md-12\"><app-wishlist></app-wishlist></div></div>\n        </div>\n  \n      </div>\n    </div>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/password-update-done/password-update-done.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/password-update-done/password-update-done.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n  \n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">SALE</h5>\n                <small>Shop now!</small>\n              </div>\n              <p class=\"mb-1\">50% on all selected products!</p>\n              <small>CODE (78459)</small>\n            </a>\n    </div>\n  </div>\n\n\n<div class=\"container mycontainer\">\n\n    <div class=\"row justify-content-center\">\n    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n        <div class=\"row\">\n\n            <h1>Your password is successfully updated.\n                <small>You should login again beacause your session is invalidateds.</small>\n            </h1>\n        </div>\n\n        <hr class=\"colorgraph\">\n\n        <div class=\"row\">\n            <a href=\"/login\" class=\"btn btn-success btn-block btn-lg\">Sign In</a>\n            \n        </div>\n    </div>\n</div>\n\n<br><br><br><br><br><br><br>\n<br><br><br><br><br><br><br>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/password-update/password-update.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/password-update/password-update.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container  mycontainer\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n            <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\">\n                <h2>Change your password.<small>It is always safe to change it.</small></h2>\n                <hr class=\"colorgraph\">\n\n  \n                <div class=\"form-group\">\n                    <label for=\"oldpassword\" class=\"title\">Old Password</label><span class=\"star\"> *</span>\n                    <input type=\"password\" name=\"oldpassword2\" id=\"oldpassword2\" class=\"form-control input-lg\" \n                    [(ngModel)]=\"oldpassword\" #oldpassword2=\"ngModel\" (blur)=\"checkOldPassword()\"\n                    [ngClass]=\"{ 'is-invalid': submitted && oldpassword2.errors }\" minlength=\"5\" maxlength=\"10\" required>\n                </div>\n    \n                <div class=\"form-group\">\n                    <div class=\"alert alert-danger\" *ngIf=\"oldpasswordwrong==true\">Password is wrong.</div>\n                </div>\n\n    \n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"password2\" class=\"title\">Password</label><span class=\"star\"> *</span>\n                            <input type=\"password\" name=\"password2\" id=\"password2\" class=\"form-control input-lg\" \n                            [(ngModel)]=\"password\" #password2=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': submitted && password2.errors }\" minlength=\"5\" maxlength=\"10\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"password_confirmation\" class=\"title\">Confirm Password</label><span class=\"star\"> *</span>\n                            <input type=\"password\" name=\"password_confirmation2\" id=\"password_confirmation2\" \n                        \n                            class=\"form-control input-lg\" \n                            [(ngModel)]=\"password_confirmation\" #password_confirmation2=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': submitted && password_confirmation2.errors }\" minlength=\"5\" maxlength=\"10\" required>\n\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"alert alert-danger\" *ngIf=\"submitted && passwordmismatch\">Password does not match</div>\n                </div>\n\n  \n                <hr class=\"colorgraph\">\n\n    \n                <div class=\"form-group\">\n                    <input type=\"submit\" value=\"Update\" class=\"btn btn-primary btn-block btn-lg\">\n                </div>\n    \n            </form>\n        </div>\n    </div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/profile-view/profile-view.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/profile-view/profile-view.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container mycontainer\">\n    <!--<div class=\"row justify-content-center\">\n        <div class=\"col-md-6\">\n\n        </div>\n    </div>-->\n\n  <h2>Your Profile</h2>\n  <p>The values you entered:</p>            \n  <table class=\"table\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Property</th>\n        <th colspan=\"2\">Value</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr class=\"table-info\"><td>Firstname</td><td colspan=\"2\">{{customer.firstname}}</td></tr>\n        <tr><td>Lastname</td><td colspan=\"2\">{{customer.lastname}}</td></tr>\n        <tr class=\"table-info\"><td>Username</td><td colspan=\"2\">{{customer.username}}</td></tr>\n        <tr><td>Email</td><td colspan=\"2\">{{customer.email}}</td></tr>\n        <tr class=\"table-info\"><td>Phone</td><td colspan=\"2\">{{customer.phone}}</td></tr>\n        <tr><td>Gender</td><td colspan=\"2\">{{customer.gender}}</td></tr>\n        <tr class=\"table-info\"><td>Date of birth</td><td colspan=\"2\">{{customer.date_of_birth}}</td></tr>\n        <tr><td colspan=\"3\"></td></tr>\n        <tr class=\"table-info\"><td colspan=\"3\">Address</td></tr>\n        <tr><td></td><td>Street</td><td>{{customer.address.street}}</td></tr>\n        <tr class=\"table-info\"><td></td><td>Number</td><td>{{customer.address.number}}</td></tr>\n        <tr><td></td><td>City</td><td>{{customer.address.city}}</td></tr>\n        <tr class=\"table-info\"><td></td><td>State</td><td>{{customer.address.state}}</td></tr>\n        <tr><td></td><td>Pincode</td><td>{{customer.address.pincode}}</td></tr>\n        <tr class=\"table-info\"><td colspan=\"3\"></td></tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/unsubscription-done/unsubscription-done.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/unsubscription-done/unsubscription-done.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n          <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n             <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">SALE</h5>\n                <small>Shop now!</small>\n             </div>\n             <p class=\"mb-1\">50% on all selected products!</p>\n             <small>CODE (68972)</small>\n          </a>\n    </div>\n  </div>\n\n\n<div class=\"container mycontainer\">\n\n    <div class=\"row justify-content-center\">\n    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n        <div class=\"row\">\n\n            <h1>Your unsubscription is successfully updated.\n                <small>You should register again if you want to have an account by us.</small>\n            </h1>\n        </div>\n\n        <hr class=\"colorgraph\">\n\n        <div class=\"row\">\n            <a href=\"/register\" class=\"btn btn-success btn-block btn-lg\">Register</a>\n            \n        </div>\n    </div>\n</div>\n\n<br><br><br><br><br><br><br>\n<br><br><br><br><br><br><br>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/allproducts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/allproducts.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n  \n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">SALE</h5>\n                <small>Shop now!</small>\n              </div>\n              <p class=\"mb-1\">50% on all selected products!</p>\n              <small>CODE (78459)</small>\n            </a>\n    </div>\n  </div>\n  \n  \n  <div class=\"container\">\n    <div class=\"page-header\">\n      <h1>{{text}}</h1>      \n    </div>    \n  </div>\n  \n  <div class=\"container mycontainer\">\n  \n      <div class=\"row justify-content-center\">\n  \n          <div class=\"col\">\n              <app-filter></app-filter> <!-- selector of the component filters -->\n          </div>\n      \n          <div class=\"col-md-8\">\n              <!--<router-outlet></router-outlet>-->\n              <router-outlet name='sub'></router-outlet>\n          </div>\n      </div>\n  \n    </div>\n  \n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/cart-container/cart-container.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/cart-container/cart-container.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mycontainer\">\n  <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n      <ul class=\"list-group\">\n          <li class=\"list-group-item list-group-item-danger text-center\">\n            <h2>Please, you should login to add products in the Cart or the Wishlist!</h2>\n          </li>\n      </ul>\n  </div>\n</div>\n\n<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">SALE</h5>\n                <small>Only Today!</small>\n              </div>\n              <p class=\"mb-1\">50% on all selected products!</p>\n              <small>CODE (78459)</small>\n            </a>\n    </div>\n  </div>\n\n  \n<div class=\"container mycontainer\">\n    <app-cart></app-cart>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/cart/cart-item/cart-item.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/cart/cart-item/cart-item.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cart-item\">\n    <span>{{ cartItem.productName }}</span> x <span>{{ cartItem.qty }}</span>: \n    <strong>{{ (cartItem.buyPrice-((cartItem.buyPrice*cartItem.sale)/100))*cartItem.qty | currency: 'EUR' }}</strong>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/cart/cart.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/cart/cart.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"card mb-4 box-shadow w-100\">\n    <div class=\"card-header\">\n        <strong>Shopping Cart</strong>\n    </div>\n    <div class=\"card-body\">\n        <div *ngIf=\"cartItems.length === 0\" class=\"alert alert-info\">Your Cart is Empty</div>\n            <ul *ngIf=\"cartItems.length > 0\" class=\"list-group\">\n\n                <li *ngFor=\"let item of cartItems\" class=\"list-group-item d-flex justify-content-start align-items-center\">\n                    <div class=\"p-2 flex-fill bd-highlight\"><app-cart-item [cartItem]=\"item\"></app-cart-item></div>\n                    <span class=\"badge badge-info badge-pill font-weight-bold mypointercursor\" (click)=\"reduceItemQty(item)\">−</span>\n                    <span class=\"badge badge-danger badge-pill font-weight-bold mypointercursor\" (click)=\"removeItem(item)\">X</span>\n                </li>\n\n                <li class=\"list-group-item active\">\n                    <strong>Total</strong> {{ cartTotal | currency: 'EUR'}}\n                </li>\n            </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/filter/filter.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/filter/filter.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"container  vh-100\">-->\n    <div class=\"card filters\">\n        <div class=\"card-header\">\n            <strong>Filter</strong>\n        </div>\n        <div class=\"card-body\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"from\">From</label>\n                    <input type=\"number\" id=\"from\" class=\"form-control\" [formControl]=\"from\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"to\">To</label>\n                    <input type=\"number\" id=\"to\" class=\"form-control\" [formControl]=\"to\">\n                </div>\n                \n                <button class=\"btn btn-primary btn-block\" \n                (click)=\"handleFilterByPrice()\">Filter by Price</button>\n            </form>\n        </div>\n    </div>\n    <!--</div>-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/item-details/item-details.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/item-details/item-details.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item list-group-item-danger text-center\">\n              <h2>Please, you should login to add products in the Cart or the Wishlist!</h2>\n            </li>\n        </ul>\n    </div>\n  </div>\n  \n  <div class=\"container mycontainer\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-6\">\n          <div class=\"card mb-4 box-shadow\">\n        \n            <img class=\"bd-placeholder-img card-img-top\" width=\"auto\" \n            [src]=\"productItem.imageUrl\" alt=\"Card image cap\">\n  \n            <div *ngIf=\"productItem.sale>0\" class=\"top-right\"><h1 class=\"badge badge-danger\">{{productItem.sale}}%</h1></div>  \n            \n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                  <strong>{{ productItem.buyPrice | currency: 'EUR'}}</strong>\n                  <i *ngIf=\"addedToWishlist\" class=\"fas fa-heart float-right\" (click)=\"handleRemoveFromWishlist(productItem)\"></i>\n                  <i *ngIf=\"!addedToWishlist\" class=\"far fa-heart float-right\" (click)=\"handleAddToWishlist(productItem)\"></i>\n              </p>\n                \n              <p class=\"card-text\">{{ productItem.productName | slice: 0:50 }}...</p>\n              <p class=\"card-text\">{{ productItem.productDescription | slice: 0:50 }}...</p>\n                <div class=\"d-flex justify-content-center\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" class=\"btn btn-sm btn-primary product-btn\" [disabled]=\"authenticatedUser==null\"\n                  (click)=\"handleAddToCart()\">Add to Cart</button>     \n                </div>\n              </div>\n            </div>\n        </div>\n        </div>\n    \n        <div class=\"col-md-6\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <h1>{{ productItem.productName }}</h1>\n                <h3>{{ productItem.buyPrice | currency: 'EUR'}}</h3>\n                <p>{{ productItem.productDescription }}</p>\n              </div>\n            </div>\n  \n            <div class=\"row\"><div class=\"col-md-12\"><app-cart></app-cart></div></div>\n            <div class=\"row\"><div class=\"col-md-12\"><app-wishlist></app-wishlist></div></div>\n          </div>\n  \n        </div>\n      </div>\n  </div>\n    \n    \n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/laptop/item/item.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/laptop/item/item.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4 box-shadow\">\n    \n    <img class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"200px;\"\n         [src]=\"productItem.imageUrl\" alt=\"Card image cap\">\n\n    <div *ngIf=\"productItem.sale>0\" class=\"top-right\"><h1 class=\"badge badge-danger\">{{productItem.sale}}%</h1></div>\n    \n    <div class=\"card-body\">\n      <p class=\"card-text\">\n          <strong>{{ productItem.buyPrice | currency: 'EUR'}}</strong>\n          <i *ngIf=\"addedToWishlist\" class=\"fas fa-heart float-right\" (click)=\"handleRemoveToWishlist(productItem)\"></i>\n          <i *ngIf=\"!addedToWishlist\" class=\"far fa-heart float-right\" (click)=\"handleAddToWishlist(productItem)\"></i>\n      </p>\n        \n      <p class=\"card-text\">{{ productItem.productDescription | slice: 0:50 }}...</p>\n\n      <div class=\"d-flex justify-content-center\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-sm btn-outline-secondary product-btn\" \n            (click)=\"viewItemDetails()\">View Details</button>\n        </div>\n        \n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/laptop/laptop.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/laptop/laptop.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let product of filterdProductList\">\n            <app-item [productItem]=\"product\" [addedToWishlist]=\"wishlistIds.indexOf(product.productId)>=0\"></app-item>\n      </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/printer/printer.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/printer/printer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      \n        <div class=\"col-md-4\" *ngFor=\"let product of filterdProductList\">\n            <app-item [productItem]=\"product\" \n            [addedToWishlist]=\"wishlistIds.indexOf(product.productId)>=0\"></app-item>\n        \n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/salelaptop/salelaptop.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/salelaptop/salelaptop.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let product of filterdProductList\">\n            <app-item [productItem]=\"product\" \n            [addedToWishlist]=\"wishlistIds.indexOf(product.productId)>=0\"></app-item>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/saleprinter/saleprinter.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/saleprinter/saleprinter.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"row\">\n      \n        <div class=\"col-md-4\" *ngFor=\"let product of filterdProductList\">\n            <app-item [productItem]=\"product\" \n            [addedToWishlist]=\"wishlistIds.indexOf(product.id)>=0\"></app-item>\n        \n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/saleproducts.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/saleproducts.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n\n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">List group item heading</h5>\n                <small>Buy now</small>\n              </div>\n              <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n              <small>Donec id elit non mi porta.</small>\n            </a>\n        \n    </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"page-header\">\n    <h1>{{article}}</h1>      \n  </div>    \n</div>\n\n<div class=\"container mycontainer\">\n\n    <div class=\"row justify-content-center\">\n\n        <div class=\"col\">\n            <app-filter></app-filter> <!-- selector of the component filters -->\n        </div>\n    \n        <div class=\"col-md-8\">\n            <router-outlet name='salesub'></router-outlet>\n        </div>\n    </div>\n\n  </div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/searchproduct/searchproduct.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/searchproduct/searchproduct.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let product of filterdProductList\">\n            <app-item [productItem]=\"product\" [addedToWishlist]=\"wishlistIds.indexOf(product.productId)>=0\"></app-item>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/wishlist-container/wishlist-container.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/wishlist-container/wishlist-container.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container mycontainer\">\n  <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n      <ul class=\"list-group\">\n          <li class=\"list-group-item list-group-item-danger text-center\">\n            <h2>Please, you should login to add products in the Cart or the Wishlist!</h2>\n          </li>\n      </ul>\n  </div>\n</div>\n\n<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">SALE</h5>\n                <small>Only Today!</small>\n              </div>\n              <p class=\"mb-1\">50% on all selected products!</p>\n              <small>CODE (78459)</small>\n            </a>\n    </div>\n</div>\n  \n<div class=\"container mycontainer\">\n    <app-wishlist></app-wishlist>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/wishlist/wish-item/wish-item.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/wishlist/wish-item/wish-item.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cart-item\">\n    <span>{{ wishItem.productName }}</span>: <strong>{{ wishItem.buyPrice | currency: 'EUR' }}</strong>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/wishlist/wishlist.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/wishlist/wishlist.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4 box-shadow w-100\">\n    <div class=\"card-header\">   \n        <span><strong>WishList</strong></span>\n    </div>\n    <div class=\"card-body\">\n        <div *ngIf=\"wishlist.length === 0\" class=\"alert alert-info\">Your Cart is Empty</div>\n            <ul *ngIf=\"wishlist.length > 0\" class=\"list-group\">\n\n                <li class=\"list-group-item\" *ngFor=\"let item of wishlist\">\n                    <app-wish-item [wishItem]=\"item\"></app-wish-item>\n                </li>\n            </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item list-group-item-danger text-center\">\n              <h2>Please, you should login to add products in the Cart or the Wishlist!</h2>\n            </li>\n        </ul>\n    </div>\n  </div>\n  \n  \n  <div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n        <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n          <div class=\"d-flex w-100 justify-content-between\">\n             <h5 class=\"mb-1\">SALE</h5>\n             <small>Shop now!</small>\n          </div>\n          <p class=\"mb-1\">50% on all selected products!</p>\n          <small>CODE (78459)</small>\n        </a>\n    </div>\n  </div>\n  \n  \n  <div class=\"container mycontainer\">\n    <div class=\"row justify-content-center\">\n  \n      <div class=\"col-md-8\">\n        <div class=\"card mb-4 box-shadow\">\n  \n      <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleControls\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleControls\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleControls\" data-slide-to=\"2\"></li>\n        </ol>\n  \n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100 vh-50\" src=\"assets/images/IMG_1.png\" alt=\"First slide\">\n          <div class=\"carousel-caption d-none d-md-block text-dark\">\n            <h5>Laptop HP</h5>\n            <p>Develop your dream programs with HP</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100 vh-50\" src=\"assets/images/IMG_2.jpg\" alt=\"Second slide\">\n          <div class=\"carousel-caption d-none d-md-block text-dark\">\n            <h5>Laptop Dell</h5>\n            <p>Top Precision with small price</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100 vh-50\" src=\"assets/images/IMG_3.jpg\" alt=\"Third slide\">\n          <div class=\"carousel-caption d-none d-md-block text-light\">\n            <h5>Laptop Sony</h5>\n            <p>Faster than ever</p>\n          </div>\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\" style=\"filter: invert(100%)\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\" style=\"filter: invert(100%)\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n    </div>\n    </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item list-group-item-danger text-center\">\n              <h2>Please, you should login to add products in the Cart or the Wishlist!</h2>\n            </li><!-- class=\"blink\"-->\n        </ul>\n    </div>\n</div>\n\n<div class=\"container mycontainer\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n            <form class=\"form\" role=\"form\" autocomplete=\"off\" (submit)=\"loginUser($event)\"\n            id=\"formLogin\" novalidate=\"\" method=\"POST\">\n                <h2>Please Sign Up <small>It's free. If you do not have an account, please register.</small></h2>\n                <hr class=\"colorgraph\">\n            \n                <div class=\"form-group\">\n\n                    <label for=\"username\" class=\"title\">Username</label><span class=\"star\"> *</span>\n                    <input id=\"username\" name=\"username\" class=\"form-control form-control-lg rounded-0\" \n                    [(ngModel)]=\"username\"  required>\n                    \n\n                    <!--[ngClass]=\"{ 'is-invalid': submitted && username.errors }\"-->\n                    <!--<div class=\"invalid-feedback\" *ngIf=\"submitted && username.errors && username.touched && !username.valid\">\n                        <div *ngIf=\"username.errors.required\">User Name is required.</div>\n                    </div>-->\n\n                </div>\n    \n                <div class=\"form-group\">\n                    <label for=\"password\" class=\"title\">Password</label><span class=\"star\"> *</span>\n                    <input type=\"password\" name=\"password\" class=\"form-control form-control-lg rounded-0\" \n                    [(ngModel)]=\"password\" required>\n                    \n                     <!-- [ngClass]=\"{ 'is-invalid': submitted && password.errors }\" \"-->\n                    <!--<div class=\"invalid-feedback\" *ngIf=\"submitted && password.errors && password.touched && !password.valid\">\n                        <div *ngIf=\"password.errors.required\">User Name is required.</div>\n                    </div>-->\n                </div>\n    \n                <div class=\"alert alert-danger\" *ngIf='invalidLogin&&badcredentials'>{{errorMessage401}}</div>\n                <div class=\"alert alert-danger\" *ngIf='invalidLogin&&noconnection'>{{errorMessage504}}</div>\n                <div class=\"alert alert-danger\" *ngIf='invalidLogin&&unknownproblem'>{{errorMessage}}</div>\n                \n                <hr class=\"colorgraph\">\n                <div class=\"form-group\">\n                     <button type=\"submit\" class=\"btn btn-success btn-block btn-lg\" id=\"btnLogin\">Sign In</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-done/register-done.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-done/register-done.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n  \n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">SALE</h5>\n                <small>Shop now!</small>\n              </div>\n              <p class=\"mb-1\">50% on all selected products!</p>\n              <small>CODE (78459)</small>\n            </a>\n    </div>\n  </div>\n\n\n<div class=\"container mycontainer\">\n\n    <div class=\"row justify-content-center\">\n    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n        <div class=\"row\">\n\n            <h1>Thanks {{firstname}} {{lastname}} for your registration under the name of {{username}}.\n                <small>You can login now or navigate to our home page.</small>\n            </h1>\n        </div>\n\n        <hr class=\"colorgraph\">\n\n        <div class=\"row\">\n\n            <div class=\"col-xs-12 col-md-6\">\n                <a href=\"/home\" class=\"btn btn-primary btn-block btn-lg\">Home</a>\n            </div>\n\n            <div class=\"col-xs-12 col-md-6\">\n                <a href=\"/login\" class=\"btn btn-success btn-block btn-lg\">Sign In</a>\n            </div>\n\n            \n        </div>\n    </div>\n</div>\n\n<br><br><br><br><br><br><br>\n<br><br><br><br><br><br><br>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mycontainer\">\n    <div class=\"row list-group justify-content-center\" style=\"margin-bottom: 20px;\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item list-group-item-danger text-center\">\n              <h2>Please, you should login to add products in the Cart or the Wishlist!</h2>\n            </li>\n        </ul>\n    </div>\n</div>\n\n<div class=\"container  mycontainer\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n            <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\">\n                <h2>Please Sign Up <small>It's free. I you do not have an account, please register.</small></h2>\n                <hr class=\"colorgraph\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"firstname\" class=\"title\">First Name</label><span class=\"star\"> *</span>\n                            <input type=\"text\" name=\"firstname\" id=\"firstname\"\n                             class=\"form-control input-lg\" \n                            [(ngModel)]=\"customer.firstname\" #firstname=\"ngModel\" minlength=\"3\" pattern=\"^[a-zA-Z]*$\"\n                                [ngClass]=\"{ 'is-invalid': submitted && firstname.errors }\" required>\t\n                            <div class=\"invalid-feedback\" *ngIf=\"submitted && firstname.errors\">\n                                <div *ngIf=\"firstname.errors.required\">First Name is required.</div>\n                                <div *ngIf=\"firstname.errors.minlength\">First Name should be minimun\n                                     {{ firstname.errors.minlength.requiredLength }} charcters.\n                                </div>\n                                <div *ngIf=\"firstname.errors.pattern\">First Name should be alphabetical and contain no space.</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"lastname\" class=\"title\">Last Name</label><span class=\"star\"> *</span>\n                            <input type=\"text\" name=\"lastname\" id=\"lastname\" class=\"form-control input-lg\" \n                            [(ngModel)]=\"customer.lastname\" #lastname=\"ngModel\" minlength=\"3\" pattern=\"^[a-zA-Z]*$\"\n                            [ngClass]=\"{ 'is-invalid': submitted && lastname.errors }\" required>\n                            <div class=\"invalid-feedback\" *ngIf=\"submitted && lastname.errors && lastname.touched && !lastname.valid\">\n                                <div *ngIf=\"lastname.errors.required\">Last Name is required.</div>\n                                <div *ngIf=\"lastname.errors.minlength\">Last Name should be minimun\n                                     {{ lastname.errors.minlength.requiredLength }} charcters.\n                                </div>\n                                <div *ngIf=\"lastname.errors.pattern\">Last Name should be alphabetical.</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"username\" class=\"title\">Username</label><span class=\"star\"> *</span>\n                    <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control input-lg\"\n                    [(ngModel)]=\"customer.username\" #username=\"ngModel\" minlength=\"3\" pattern=\"^([a-zA-Z0-9\\-\\.]+)$\"\n                    [ngClass]=\"{ 'is-invalid': submitted && username.errors }\" required (change)=\"onUsernameChange()\">\n    \n                    <div class=\"invalid-feedback\" *ngIf=\"submitted && username.errors && username.touched && !username.valid\">\n                        <div *ngIf=\"username.errors.required\">User Name is required.</div>\n                        <div *ngIf=\"username.errors.minlength\">User Name should be minimun\n                             {{ username.errors.minlength.requiredLength }} charcters.\n                        </div>\n                        <div *ngIf=\"username.errors.pattern\">User Name should be alphabetical.</div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"alert alert-danger\" \n                        *ngIf=\"submitted && usernameexists\">This username already exists. Choose another one!</div>\n                    </div>\n                </div>\n    \n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-4 col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"street\" class=\"title\">Street</label><span class=\"star\"> *</span>\n                            <input type=\"text\" name=\"street\" id=\"street\" class=\"form-control input-lg\" \n                            [(ngModel)]=\"customer.address.street\" #street=\"ngModel\" minlength=\"3\" pattern=\"^[a-zA-Z]*$\"\n                                [ngClass]=\"{ 'is-invalid': submitted && street.errors }\" required>\n                                \n                                <div class=\"invalid-feedback\" *ngIf=\"submitted && street.errors && street.touched && !street.valid\">\n                                    <div *ngIf=\"street.errors.required\">Street is required.</div>\n                                    \n                                </div>\n                            \n                        </div>\n                    </div>\n\n                    <div class=\"col-xs-12 col-sm-4 col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"num\" class=\"title\">Number</label><span class=\"star\"> *</span>\n                            <input type=\"text\" name=\"number\" id=\"number\" class=\"form-control input-lg\" \n                            [(ngModel)]=\"customer.address.number\" #number=\"ngModel\" \n                             pattern=\"^[0-9]*$\" \n                             [ngClass]=\"{ 'is-invalid': submitted && number.errors }\" required>\n                        </div>\n                        <div class=\"invalid-feedback\" *ngIf=\"submitted && number.errors && number.touched && !number.valid\">\n                            <div *ngIf=\"number.errors.required\">Number is required.</div>\n                            <div *ngIf=\"number.errors.pattern\">Number should be numeric.</div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"col-xs-12 col-sm-4 col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"city\" class=\"title\">City</label><span class=\"star\"> *</span>\n                            <input type=\"text\" name=\"city\" id=\"city\" class=\"form-control input-lg\" \n                            [(ngModel)]=\"customer.address.city\" #city=\"ngModel\" minlength=\"3\" pattern=\"^[a-zA-Z]*$\"\n                            [ngClass]=\"{ 'is-invalid': submitted && city.errors }\" required>\n    \n                            <div class=\"invalid-feedback\" *ngIf=\"submitted && city.errors && city.touched && !city.valid\">\n                                <div *ngIf=\"city.errors.required\">City is required.</div>\n                                <div *ngIf=\"city.errors.pattern\">City should be alphabetical.</div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"state\" class=\"title\">State</label><span class=\"star\"> *</span>\n                            <select class=\"browser-default custom-select\" name=\"state\" id=\"state\"\n                                [(ngModel)]=\"customer.address.state\" #state=\"ngModel\"\n                                [ngClass]=\"{ 'is-invalid': submitted && state.errors }\" placeholder=\"Select State\"\n                                required>\n                                <option value=\"Burgenland\">Burgenland</option>\n                                <option value=\"Kärnten\">Kärnten</option>\n                                <option value=\"Niederösterreich\">Niederösterreich</option>\t\t\t\t\t\t\t \n                                <option value=\"Oberösterreich\">Oberösterreich</option>\n                                <option value=\"Salzburg\">Salzburg</option>\n                                <option value=\"Steiermark\">Steiermark</option>\n                                <option value=\"Tirol\">Tirol</option>\n                                <option value=\"Vorarlberg\">Vorarlberg</option>\n                                <option value=\"Wien\">Wien</option>\n                            </select>\n    \n                            <div class=\"invalid-feedback\" *ngIf=\"submitted && state.errors && state.touched && !state.valid\">\n                                <div *ngIf=\"state.errors.required\">State is required.</div>\n                                <div *ngIf=\"state.errors.pattern\">State should be alphabetical.</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"pincode\" class=\"title\">Bincode</label><span class=\"star\"> *</span>\n                            <input type=\"text\" name=\"pincode\" id=\"pincode\" class=\"form-control input-lg\" \n                            [(ngModel)]=\"customer.address.pincode\" #pincode=\"ngModel\" minlength=\"3\" pattern=\"^[0-9]*$\"\n                            [ngClass]=\"{ 'is-invalid': submitted && pincode.errors }\" required>\n                            <div class=\"invalid-feedback\" *ngIf=\"submitted && pincode.errors && pincode.touched && !pincode.valid\">\n                                <div *ngIf=\"pincode.errors.required\">Pincode is required.</div>\n                                <div *ngIf=\"pincode.errors.pattern\">Pincode should be numerical.</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n    \n                <div class=\"form-group\">\n                    <label for=\"customer.date_of_birth\" class=\"title\">Date of Birth</label><span class=\"star\"> *</span>\n\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\"\n                               placeholder=\"yyyy-mm-dd\"\n                               [maxDate]=\"{day: 31, month: 12, year: 2002}\" \n                               data-date-format= \"yyyy-mm-dd\"\n                               id=\"dob\" name=\"dob\" [(ngModel)]=\"customer.date_of_birth\"\n                               ngbDatepicker #d=\"ngbDatepicker\" value=\"1880-10-15\"\n                               #dob=\"ngModel\" \n                               required readonly \n                               forceParse=\"true\" toggleActive=\"true\"\n                               [ngClass]=\"{'is-invalid': submitted && dob.invalid && (dob.dirty || dob.touched)}\"/>\n                        <div class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\">\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </div>\n\n\n                        <div class=\"invalid-feedback\" *ngIf=\"submitted && dob.invalid && (dob.dirty || dob.touched)\">\n                            <div *ngIf=\"dob.errors.required\">Date of birth is required.</div>\n                            <div *ngIf=\"dob.errors.pattern\">Date of birth should be a date.</div>\n                        </div>\n  \n                    </div>\n\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"customer.email\" class=\"title\">Email Address</label><span class=\"star\"> *</span>\n                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-lg\" \n                    [(ngModel)]=\"customer.email\" #email=\"ngModel\" \n                    [ngClass]=\"{ 'is-invalid': submitted && email.errors }\" required>\n    \n                    <div class=\"invalid-feedback\" *ngIf=\"submitted && email.errors && email.touched && !email.valid\">\n                        <div *ngIf=\"email.errors.required\">Email is required.</div>\n                    </div>\n                </div>\n    \n                <div class=\"form-group\">\n                    <label for=\"customer.phone\" class=\"title\">Phone Number</label><span class=\"star\"> *</span>\n                    <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control input-lg\" \n                    [(ngModel)]=\"customer.phone\" #phone=\"ngModel\" \n                    [ngClass]=\"{ 'is-invalid': submitted && phone.errors }\" required>\n    \n                    <div class=\"invalid-feedback\" *ngIf=\"submitted && phone.errors && phone.touched && !phone.valid\">\n                        <div *ngIf=\"phone.errors.required\">Phone number is required.</div>\n                    </div>\n                </div>\n    \n               <div class=\"form-group\">\n                    \n                    <div class=\"btn-group\">\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" name=\"options\" value=\"Male\"/>\n                            <span>Male</span>\n                        </label>\n    \n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" name=\"options\" value=\"Female\"/>\n                            <span>Female</span>\n                        </label>\n                  </div>\t\n                </div>\n    \n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"customer.password\" class=\"title\">Password</label><span class=\"star\"> *</span>\n                            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg\" \n                            [(ngModel)]=\"customer.password\" #password=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': submitted && password.errors }\" minlength=\"5\" maxlength=\"10\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"customer.password_confirmation\" class=\"title\">Confirm Password</label><span class=\"star\"> *</span>\n                            <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" \n                        \n                            class=\"form-control input-lg\" \n                            [(ngModel)]=\"customer.password_confirmation\" #password_confirmation=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': submitted && password_confirmation.errors }\" minlength=\"5\" maxlength=\"10\" required>\n\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"alert alert-danger\" *ngIf=\"submitted && passwordmismatch\">Password does not match</div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-xs-4 col-sm-3 col-md-3\">\n                        <span class=\"button-checkbox\">\n                            <button type=\"button\" class=\"btn\" data-color=\"info\">I Agree</button>\n                            <input type=\"checkbox\" name=\"t_and_c\" id=\"t_and_c\" class=\"hidden\" \n                            [(ngModel)]=\"customer.acceptTerms\" required>\n                        </span>\n\n                    </div>\n                    <div class=\"col-xs-8 col-sm-9 col-md-9\">\n                         By clicking <strong class=\"label label-primary\">Register</strong>, you agree to our\n                         <a href=\"#\" data-toggle=\"modal\" \n                         data-target=\"#t_and_c_m\">Terms and Conditions</a>.\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"alert alert-danger\" \n                    *ngIf=\"submitted && !customer.acceptTerms\">You should agree with our terms & conditions to register</div>\n                </div>\n                \n                <hr class=\"colorgraph\">\n    \n                <div class=\"form-group\">\n                    <input type=\"submit\" value=\"Register\" class=\"btn btn-primary btn-block btn-lg\">\n                </div>\n    \n            </form>\n        </div>\n    </div>\n    \n    \n    \n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"t_and_c_m\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Terms & Conditions</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">I Agree</button>\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div><!-- /.modal-content -->\n        </div><!-- /.modal-dialog -->\n    </div><!-- /.modal -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\n<footer class=\"page-footer font-small special-color-dark pt-4\"\n style=\"background-color: #504f55;\"> <!-- fixed-bottom -->\n\n  <!-- Footer Links -->\n  <div class=\"container text-center text-md-left mt-4\" >\n\n    <!-- Grid row -->\n    <div class=\"row justify-content-center mt-4 ml-0\">\n\n      <!-- Grid column -->\n      <div class=\"col col-lg-2\">\n\n        <!-- Content -->\n        <h6 class=\"text-uppercase font-weight-bold text-light\">Technou</h6>\n        <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;border-color:#536dfe;\">\n        <p class=\"text-light\">If you want to know more about us, feel free to contact us! Our employees will be enjoyed\n          to answer your questions.\n        </p>\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col col-lg-2\">\n\n        <!-- Links -->\n        <h6 class=\"text-uppercase font-weight-bold text-light\">Products</h6>\n        <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;border-color:#536dfe;\">\n        <p>\n          <a href=\"#!\" class=\"text-light\">Laptops</a>\n        </p>\n        <p>\n          <a href=\"#!\" class=\"text-light\">Printers</a>\n        </p>\n        <p>\n          <a href=\"#!\" class=\"text-light\">Sale Laptops</a>\n        </p>\n        <p>\n          <a href=\"#!\" class=\"text-light\">Sale Printers</a>\n        </p>\n        <p>\n          <a href=\"#!\">Special Offers</a>\n        </p>\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col col-lg-2\">\n\n        <!-- Links -->\n        <h6 class=\"text-uppercase font-weight-bold text-light\">Useful links</h6>\n        <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;border-color:#536dfe;\">\n        <p>\n          <a href=\"#!\">Your Account</a>\n        </p>\n        <p>\n          <a href=\"#!\">Shipping Rates</a>\n        </p>\n        <p>\n          <a href=\"#!\">Help</a>\n        </p>\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col col-lg-2\">\n\n        <!-- Links -->\n        <h6 class=\"text-uppercase font-weight-bold text-light\">Contact</h6>\n        <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;border-color:#536dfe;\">\n        <p class=\"text-light\">\n          <!--<i class=\"fas fa-home mr-3\"></i>-->Salzburg, Austria\n        </p>\n        <p class=\"text-light\">Email: noura@example.com</p>\n        <p class=\"text-light\">Phone: + 043 66 858 55</p>\n\n      </div>\n      <!-- Grid column -->\n\n\n       <!-- Grid column -->\n       <div class=\"col col-lg-2\"> <!--col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4-->\n\n        <!-- Links -->\n        <h6 class=\"text-uppercase font-weight-bold text-light\">Social Media</h6>\n        <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;border-color:#536dfe;\">\n        <p class=\"text-light\">\n          <a class=\"fb-ic\" href=\"https://www.facebook.com/\" target=\"_blank\">\n            <i class=\"fab fa-facebook-f white-text mr-4\"></i>\n          </a>\n        </p>\n        <p class=\"text-light\">\n          <a class=\"li-ic\" href=\"https://www.linkedin.com/\" target=\"_blank\">\n            <i class=\"fab fa-linkedin-in white-text mr-4\"> </i>\n          </a>\n        </p>\n\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- Footer Links -->\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3 text-light\">© 2020 Copyright:\n    <a href=\"https://mdbootstrap.com/\"> technou.com</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n\n\n  <!-- <div style=\"background-color: #6351ce;\">\n    <div class=\"container\">\n      <div class=\"row py-4 d-flex align-items-center\">\n        <div class=\"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0\">\n          <h6 class=\"mb-0\">Get connected with us on social networks!</h6>\n        </div>\n        <div class=\"col-md-6 col-lg-7 text-center text-md-right\">\n          <a class=\"fb-ic\">\n            <i class=\"fab fa-facebook-f white-text mr-4\"> </i>\n          </a>\n          <a class=\"tw-ic\">\n            <i class=\"fab fa-twitter white-text mr-4\"> </i>\n          </a>\n          <a class=\"gplus-ic\">\n            <i class=\"fab fa-google-plus-g white-text mr-4\"> </i>\n          </a>\n          <a class=\"li-ic\">\n            <i class=\"fab fa-linkedin-in white-text mr-4\"> </i>\n          </a>\n          <a class=\"ins-ic\">\n            <i class=\"fab fa-instagram white-text\"> </i>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"headerTitle\" (click)=\"backToHome()\">Shopping</span>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav/nav.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav/nav.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"/home\">TechNOU</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" \n      data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" \n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active current\">Home <span class=\"sr-only\"></span></a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" \n              aria-haspopup=\"true\" aria-expanded=\"false\">\n            Products\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n  \n            <a class=\"dropdown-item\" routerLink=\"/products\" \n                    routerLinkActive=\"active\" [queryParams]=\"{article: 'Laptops', text: 'Laptops'}\">Laptop</a>\n            <a class=\"dropdown-item\" routerLink=\"/products\" \n                    routerLinkActive=\"active\" [queryParams]=\"{article: 'Printers', text: 'Printers'}\">Printer</a>\n          </div>\n        </li>\n  \n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" \n                aria-haspopup=\"true\" aria-expanded=\"false\">\n              Sales\n          </a>\n  \n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"/sale\" [queryParams]=\"{article: 'Laptops'}\" routerLinkActive=\"active\">Laptop</a>\n            <a class=\"dropdown-item\" routerLink=\"/sale\" [queryParams]=\"{article: 'Printers'}\" routerLinkActive=\"active\">Printers</a>\n          </div>\n        </li>\n  \n  \n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"/wishlist\">WishList</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link  active\" href=\"/cart\">Cart</a>\n        </li>\n      </ul>\n      </div>\n  \n      <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item mr-1\">\n          <div class=\"form-inline my-2 my-lg-0 justify-content-right\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"\n            [(ngModel)]=\"searchItem\" #searchItem2=\"ngModel\" (keyup.enter)=\"onSearchItem()\">\n            <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"button\" (click)=\"onSearchItem()\">Search</button>\n          </div>\n        </li>\n  \n        <li class=\"nav-item mr-1\">\n          <a class=\"btn btn-outline-light\" routerLink=\"/register\" routerLinkActive=\"active current\">Register</a>\n        </li>\n  \n        <li class=\"nav-item mr-1\">\n          <a class=\"btn btn-outline-light\" routerLink=\"/login\" routerLinkActive=\"active current\">Sign In</a>\n        </li>\n  \n        <li class=\"nav-item\" [hidden]=\"authenticatedUser==null\">\n  \n          <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onShowAccount()\">\n            <i class=\"fas fa-user\"></i><span class=\"badge badge-success ml-2\">{{authenticatedUser}}</span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/confirm-dialog/confirm-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/confirm-dialog/confirm-dialog.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\n\n\t<div class=\"modal-header\">\n\t\t<h4 class=\"modal-title\" id=\"modal-title\">{{confirmOptions.title}} </h4>\n\t\t<button type=\"button\" class=\"close\" aria-describedby=\"modal-title\" (click)=\"closeCancel()\">\n\t\t  <span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\t<div class=\"modal-body\">\n\t\t<p><strong> {{confirmOptions.left_message}} <span class=\"text-primary\"> {{ confirmOptions.content }}</span> profile?</strong></p>\n\t\t<p>{{confirmOptions.right_message}}\n\t\t<span class=\"text-danger\">{{confirmOptions.right_message_warning}}</span>\n\t\t</p>\n\t  </div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"closeCancel()\">Cancel</button>\n\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"closeOk()\">Ok</button>\n\t</div>\n\t\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/warning-dialog/warning-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/warning-dialog/warning-dialog.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #warningcontent let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{warningOptions.title}}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{warningOptions.body}}&hellip;</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\n    </div>\n  </ng-template>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponent", function() { return routingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_account_unsubscription_done_unsubscription_done_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/account/unsubscription-done/unsubscription-done.component */ "./src/app/components/account/unsubscription-done/unsubscription-done.component.ts");
/* harmony import */ var _components_allproducts_searchproduct_searchproduct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/allproducts/searchproduct/searchproduct.component */ "./src/app/components/allproducts/searchproduct/searchproduct.component.ts");
/* harmony import */ var _components_account_password_update_done_password_update_done_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account/password-update-done/password-update-done.component */ "./src/app/components/account/password-update-done/password-update-done.component.ts");
/* harmony import */ var _components_account_password_update_password_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/account/password-update/password-update.component */ "./src/app/components/account/password-update/password-update.component.ts");
/* harmony import */ var _components_account_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account/main-view/main-view.component */ "./src/app/components/account/main-view/main-view.component.ts");
/* harmony import */ var _components_account_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/account/profile-view/profile-view.component */ "./src/app/components/account/profile-view/profile-view.component.ts");
/* harmony import */ var _components_register_done_register_done_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register-done/register-done.component */ "./src/app/components/register-done/register-done.component.ts");
/* harmony import */ var _components_allproducts_saleproducts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/allproducts/saleproducts.component */ "./src/app/components/allproducts/saleproducts.component.ts");
/* harmony import */ var _components_allproducts_wishlist_container_wishlist_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/allproducts/wishlist-container/wishlist-container.component */ "./src/app/components/allproducts/wishlist-container/wishlist-container.component.ts");
/* harmony import */ var _components_allproducts_cart_container_cart_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/allproducts/cart-container/cart-container.component */ "./src/app/components/allproducts/cart-container/cart-container.component.ts");
/* harmony import */ var _components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/allproducts/allproducts.component */ "./src/app/components/allproducts/allproducts.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_allproducts_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/allproducts/laptop/laptop.component */ "./src/app/components/allproducts/laptop/laptop.component.ts");
/* harmony import */ var _components_allproducts_printer_printer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/allproducts/printer/printer.component */ "./src/app/components/allproducts/printer/printer.component.ts");
/* harmony import */ var _components_allproducts_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/allproducts/item-details/item-details.component */ "./src/app/components/allproducts/item-details/item-details.component.ts");
/* harmony import */ var _components_allproducts_salelaptop_salelaptop_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/allproducts/salelaptop/salelaptop.component */ "./src/app/components/allproducts/salelaptop/salelaptop.component.ts");
/* harmony import */ var _components_allproducts_saleprinter_saleprinter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/allproducts/saleprinter/saleprinter.component */ "./src/app/components/allproducts/saleprinter/saleprinter.component.ts");
/* harmony import */ var _guards_register_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./guards/register-guard.service */ "./src/app/guards/register-guard.service.ts");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/guards/authentication.guard.ts");


























const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
        canDeactivate: [_guards_register_guard_service__WEBPACK_IMPORTED_MODULE_24__["RegisterGuardService"]] //we can add many guards
    },
    { path: 'register-done',
        component: _components_register_done_register_done_component__WEBPACK_IMPORTED_MODULE_7__["RegisterDoneComponent"],
    },
    { path: 'account',
        component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_17__["AccountComponent"],
        canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_25__["AuthenticationGuard"]],
        children: [
            {
                path: '', redirectTo: 'main-view', pathMatch: 'full'
            },
            {
                path: 'main-view',
                component: _components_account_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"], pathMatch: "full", outlet: 'mainview'
            },
            {
                path: 'profile-view',
                component: _components_account_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_6__["ProfileViewComponent"], pathMatch: "full", outlet: 'mainview'
            },
            {
                path: 'password-update',
                component: _components_account_password_update_password_update_component__WEBPACK_IMPORTED_MODULE_4__["PasswordUpdateComponent"], pathMatch: "full", outlet: 'mainview'
            },
            {
                path: 'password-update-done',
                component: _components_account_password_update_done_password_update_done_component__WEBPACK_IMPORTED_MODULE_3__["PasswordUpdateDoneComponent"], pathMatch: "full", outlet: 'mainview'
            },
            {
                path: 'unsubscription-done',
                component: _components_account_unsubscription_done_unsubscription_done_component__WEBPACK_IMPORTED_MODULE_1__["UnsubscriptionDoneComponent"], pathMatch: "full", outlet: 'mainview'
            }
        ]
    },
    { path: 'item-details', component: _components_allproducts_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_21__["ItemDetailsComponent"] },
    { path: 'cart', component: _components_allproducts_cart_container_cart_container_component__WEBPACK_IMPORTED_MODULE_10__["CartContainerComponent"] },
    { path: 'wishlist', component: _components_allproducts_wishlist_container_wishlist_container_component__WEBPACK_IMPORTED_MODULE_9__["WishlistContainerComponent"] },
    { path: 'products', component: _components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_11__["AllproductsComponent"],
        children: [
            {
                path: '', redirectTo: 'laptops', pathMatch: 'full'
            },
            {
                path: 'laptops',
                component: _components_allproducts_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_19__["LaptopComponent"], pathMatch: "full", outlet: 'sub'
            },
            {
                path: 'printers',
                component: _components_allproducts_printer_printer_component__WEBPACK_IMPORTED_MODULE_20__["PrinterComponent"], pathMatch: "full", outlet: 'sub'
            },
            {
                path: 'searchproducts',
                component: _components_allproducts_searchproduct_searchproduct_component__WEBPACK_IMPORTED_MODULE_2__["SearchproductComponent"], pathMatch: "full", outlet: 'sub'
            }
        ] },
    { path: 'sale', component: _components_allproducts_saleproducts_component__WEBPACK_IMPORTED_MODULE_8__["SaleproductsComponent"],
        children: [
            {
                path: '', redirectTo: 'salelaptops', pathMatch: 'full'
            },
            {
                path: 'salelaptops', component: _components_allproducts_salelaptop_salelaptop_component__WEBPACK_IMPORTED_MODULE_22__["SalelaptopComponent"], pathMatch: 'full', outlet: 'salesub'
            },
            {
                path: 'saleprinters', component: _components_allproducts_saleprinter_saleprinter_component__WEBPACK_IMPORTED_MODULE_23__["SaleprinterComponent"], pathMatch: 'full', outlet: 'salesub'
            },
        ] },
    { path: '**', redirectTo: '/home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes /*, { enableTracing: true }*/)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]],
    })
], AppRoutingModule);

const routingComponent = [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], _components_register_done_register_done_component__WEBPACK_IMPORTED_MODULE_7__["RegisterDoneComponent"],
    _components_account_account_component__WEBPACK_IMPORTED_MODULE_17__["AccountComponent"],
    _components_allproducts_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_21__["ItemDetailsComponent"],
    _components_allproducts_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_19__["LaptopComponent"], _components_allproducts_printer_printer_component__WEBPACK_IMPORTED_MODULE_20__["PrinterComponent"], _components_allproducts_searchproduct_searchproduct_component__WEBPACK_IMPORTED_MODULE_2__["SearchproductComponent"], _components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_11__["AllproductsComponent"],
    _components_allproducts_cart_container_cart_container_component__WEBPACK_IMPORTED_MODULE_10__["CartContainerComponent"], _components_allproducts_wishlist_container_wishlist_container_component__WEBPACK_IMPORTED_MODULE_9__["WishlistContainerComponent"],
    _components_allproducts_saleproducts_component__WEBPACK_IMPORTED_MODULE_8__["SaleproductsComponent"],
    _components_allproducts_salelaptop_salelaptop_component__WEBPACK_IMPORTED_MODULE_22__["SalelaptopComponent"],
    _components_allproducts_saleprinter_saleprinter_component__WEBPACK_IMPORTED_MODULE_23__["SaleprinterComponent"],
    _components_account_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"],
    _components_account_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_6__["ProfileViewComponent"],
    _components_account_password_update_password_update_component__WEBPACK_IMPORTED_MODULE_4__["PasswordUpdateComponent"],
    _components_account_password_update_done_password_update_done_component__WEBPACK_IMPORTED_MODULE_3__["PasswordUpdateDoneComponent"],
    _components_account_unsubscription_done_unsubscription_done_component__WEBPACK_IMPORTED_MODULE_1__["UnsubscriptionDoneComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AngularSpringShoppingDemo-Frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_account_unsubscription_done_unsubscription_done_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/account/unsubscription-done/unsubscription-done.component */ "./src/app/components/account/unsubscription-done/unsubscription-done.component.ts");
/* harmony import */ var _components_account_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account/main-view/main-view.component */ "./src/app/components/account/main-view/main-view.component.ts");
/* harmony import */ var _components_account_password_update_password_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/account/password-update/password-update.component */ "./src/app/components/account/password-update/password-update.component.ts");
/* harmony import */ var _components_account_password_update_done_password_update_done_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/account/password-update-done/password-update-done.component */ "./src/app/components/account/password-update-done/password-update-done.component.ts");
/* harmony import */ var _components_account_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/account/profile-view/profile-view.component */ "./src/app/components/account/profile-view/profile-view.component.ts");
/* harmony import */ var _components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/allproducts/allproducts.component */ "./src/app/components/allproducts/allproducts.component.ts");
/* harmony import */ var _components_allproducts_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/allproducts/cart/cart.component */ "./src/app/components/allproducts/cart/cart.component.ts");
/* harmony import */ var _components_allproducts_cart_container_cart_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/allproducts/cart-container/cart-container.component */ "./src/app/components/allproducts/cart-container/cart-container.component.ts");
/* harmony import */ var _components_allproducts_filter_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/allproducts/filter/filter.component */ "./src/app/components/allproducts/filter/filter.component.ts");
/* harmony import */ var _components_allproducts_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/allproducts/item-details/item-details.component */ "./src/app/components/allproducts/item-details/item-details.component.ts");
/* harmony import */ var _components_allproducts_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/allproducts/laptop/laptop.component */ "./src/app/components/allproducts/laptop/laptop.component.ts");
/* harmony import */ var _components_allproducts_printer_printer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/allproducts/printer/printer.component */ "./src/app/components/allproducts/printer/printer.component.ts");
/* harmony import */ var _components_allproducts_salelaptop_salelaptop_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/allproducts/salelaptop/salelaptop.component */ "./src/app/components/allproducts/salelaptop/salelaptop.component.ts");
/* harmony import */ var _components_allproducts_saleprinter_saleprinter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/allproducts/saleprinter/saleprinter.component */ "./src/app/components/allproducts/saleprinter/saleprinter.component.ts");
/* harmony import */ var _components_allproducts_searchproduct_searchproduct_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/allproducts/searchproduct/searchproduct.component */ "./src/app/components/allproducts/searchproduct/searchproduct.component.ts");
/* harmony import */ var _components_allproducts_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/allproducts/wishlist/wishlist.component */ "./src/app/components/allproducts/wishlist/wishlist.component.ts");
/* harmony import */ var _components_allproducts_wishlist_container_wishlist_container_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/allproducts/wishlist-container/wishlist-container.component */ "./src/app/components/allproducts/wishlist-container/wishlist-container.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_register_done_register_done_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/register-done/register-done.component */ "./src/app/components/register-done/register-done.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/shared/nav/nav.component */ "./src/app/components/shared/nav/nav.component.ts");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _components_allproducts_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/allproducts/cart/cart-item/cart-item.component */ "./src/app/components/allproducts/cart/cart-item/cart-item.component.ts");
/* harmony import */ var _components_allproducts_wishlist_wish_item_wish_item_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/allproducts/wishlist/wish-item/wish-item.component */ "./src/app/components/allproducts/wishlist/wish-item/wish-item.component.ts");
/* harmony import */ var _components_allproducts_laptop_item_item_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/allproducts/laptop/item/item.component */ "./src/app/components/allproducts/laptop/item/item.component.ts");
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _dialogs_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dialogs/warning-dialog/warning-dialog.component */ "./src/app/dialogs/warning-dialog/warning-dialog.component.ts");
/* harmony import */ var _components_allproducts_saleproducts_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/allproducts/saleproducts.component */ "./src/app/components/allproducts/saleproducts.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/wishlist.service */ "./src/app/services/wishlist.service.ts");
/* harmony import */ var _guards_register_guard_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./guards/register-guard.service */ "./src/app/guards/register-guard.service.ts");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/guards/authentication.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
            _components_account_unsubscription_done_unsubscription_done_component__WEBPACK_IMPORTED_MODULE_6__["UnsubscriptionDoneComponent"],
            _components_account_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_7__["MainViewComponent"],
            _components_account_password_update_password_update_component__WEBPACK_IMPORTED_MODULE_8__["PasswordUpdateComponent"],
            _components_account_password_update_done_password_update_done_component__WEBPACK_IMPORTED_MODULE_9__["PasswordUpdateDoneComponent"],
            _components_account_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_10__["ProfileViewComponent"],
            _components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_11__["AllproductsComponent"],
            _components_allproducts_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
            _components_allproducts_cart_container_cart_container_component__WEBPACK_IMPORTED_MODULE_13__["CartContainerComponent"],
            _components_allproducts_filter_filter_component__WEBPACK_IMPORTED_MODULE_14__["FilterComponent"],
            _components_allproducts_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_15__["ItemDetailsComponent"],
            _components_allproducts_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_16__["LaptopComponent"],
            _components_allproducts_printer_printer_component__WEBPACK_IMPORTED_MODULE_17__["PrinterComponent"],
            _components_allproducts_salelaptop_salelaptop_component__WEBPACK_IMPORTED_MODULE_18__["SalelaptopComponent"],
            _components_allproducts_saleprinter_saleprinter_component__WEBPACK_IMPORTED_MODULE_19__["SaleprinterComponent"],
            _components_allproducts_searchproduct_searchproduct_component__WEBPACK_IMPORTED_MODULE_20__["SearchproductComponent"],
            _components_allproducts_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_21__["WishlistComponent"],
            _components_allproducts_wishlist_container_wishlist_container_component__WEBPACK_IMPORTED_MODULE_22__["WishlistContainerComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"],
            _components_register_done_register_done_component__WEBPACK_IMPORTED_MODULE_26__["RegisterDoneComponent"],
            _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
            _components_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_28__["NavComponent"],
            _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_29__["HeaderComponent"],
            _components_allproducts_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_30__["CartItemComponent"],
            _components_allproducts_wishlist_wish_item_wish_item_component__WEBPACK_IMPORTED_MODULE_31__["WishItemComponent"],
            _components_allproducts_laptop_item_item_component__WEBPACK_IMPORTED_MODULE_32__["ItemComponent"],
            _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_33__["ConfirmDialogComponent"],
            _dialogs_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_34__["WarningDialogComponent"],
            _components_allproducts_saleproducts_component__WEBPACK_IMPORTED_MODULE_35__["SaleproductsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__["NgbModule"],
        ],
        providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_39__["AuthenticationService"], _services_product_service__WEBPACK_IMPORTED_MODULE_40__["ProductService"],
            _services_messenger_service__WEBPACK_IMPORTED_MODULE_41__["MessengerService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_42__["CartService"], _services_wishlist_service__WEBPACK_IMPORTED_MODULE_43__["WishlistService"],
            _guards_register_guard_service__WEBPACK_IMPORTED_MODULE_44__["RegisterGuardService"], _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_45__["AuthenticationGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_46__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/account/account.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/account/account.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let AccountComponent = class AccountComponent {
    constructor(authentication, router, route, location) {
        this.authentication = authentication;
        this.router = router;
        this.route = route;
        this.location = location;
        this.isUserLoggedIn = true;
        this.getNavParams();
        this.onMainView();
    }
    getNavParams() {
        this.route.queryParams.subscribe(params => {
            let passwordupdatedone = params["passwordupdatedone"];
            if (passwordupdatedone != null) {
                this.invalidateSession();
                //Navigate
                this.router.navigate([{ outlets: { mainview: ['password-update-done'] } }], { relativeTo: this.route, skipLocationChange: true });
                this.location.go('/account/password-update-done');
            }
        });
        let data = localStorage.getItem('customer');
        this.customer = JSON.parse(data);
    }
    invalidateSession() {
        //Invalidate session
        this.authentication.resetLoginParamters();
        this.isUserLoggedIn = this.authentication.isUserLoggedIn();
    }
    ngOnInit() {
        this.username = localStorage.getItem("username");
        this.password = localStorage.getItem("password");
    }
    logoutUser() {
        this.authentication.logoutUser().subscribe(data => {
            //Return to home page
            this.router.navigate(['/home']);
        });
    }
    onMainView() {
        this.router.navigate([{ outlets: { mainview: ['main-view'] } }], { relativeTo: this.route, skipLocationChange: true });
        this.location.go('/account/main-view');
    }
    onProfileView() {
        this.router.navigate([{ outlets: { mainview: ['profile-view'] } }], { relativeTo: this.route, skipLocationChange: true });
        this.location.go('/account/profile-view');
    }
    onPasswordUpdate() {
        this.router.navigate([{ outlets: { mainview: ['password-update'] } }], { relativeTo: this.route, skipLocationChange: true });
        this.location.go('/account/password-update');
    }
    onUnsubscribe() {
        this.authentication.unsubscribeUser(this.customer.customerId).subscribe((data) => {
            let done = (data.toString() === "true");
            if (done == true) {
                //Invalidate session
                this.invalidateSession();
                this.router.navigate([{ outlets: { mainview: ['unsubscription-done'] } }], { relativeTo: this.route, skipLocationChange: true });
                this.location.go('/account/unsubscription-done');
            }
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.css */ "./src/app/components/account/account.component.css")).default]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/components/account/main-view/main-view.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/account/main-view/main-view.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9tYWluLXZpZXcvbWFpbi12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/account/main-view/main-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/account/main-view/main-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainViewComponent = class MainViewComponent {
    constructor() { }
    ngOnInit() {
        this.getNavParams();
    }
    getNavParams() {
        let data = localStorage.getItem('customer');
        this.customer = JSON.parse(data);
    }
};
MainViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/main-view/main-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-view.component.css */ "./src/app/components/account/main-view/main-view.component.css")).default]
    })
], MainViewComponent);



/***/ }),

/***/ "./src/app/components/account/password-update-done/password-update-done.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/account/password-update-done/password-update-done.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9wYXNzd29yZC11cGRhdGUtZG9uZS9wYXNzd29yZC11cGRhdGUtZG9uZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/account/password-update-done/password-update-done.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/account/password-update-done/password-update-done.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PasswordUpdateDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordUpdateDoneComponent", function() { return PasswordUpdateDoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PasswordUpdateDoneComponent = class PasswordUpdateDoneComponent {
    constructor() { }
    ngOnInit() {
    }
};
PasswordUpdateDoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-update-done',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-update-done.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/password-update-done/password-update-done.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-update-done.component.css */ "./src/app/components/account/password-update-done/password-update-done.component.css")).default]
    })
], PasswordUpdateDoneComponent);



/***/ }),

/***/ "./src/app/components/account/password-update/password-update.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/account/password-update/password-update.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9wYXNzd29yZC11cGRhdGUvcGFzc3dvcmQtdXBkYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/account/password-update/password-update.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/account/password-update/password-update.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PasswordUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordUpdateComponent", function() { return PasswordUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");








let PasswordUpdateComponent = class PasswordUpdateComponent {
    constructor(modalService, authentication, router, route, datepipe, location) {
        this.modalService = modalService;
        this.authentication = authentication;
        this.router = router;
        this.route = route;
        this.datepipe = datepipe;
        this.location = location;
        this.passwordmismatch = false;
        this.oldpasswordwrong = false;
        this.submitted = false;
        this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
        this.getNavParams();
    }
    ngOnInit() {
    }
    getNavParams() {
        this.customer = JSON.parse(localStorage.getItem('customer'));
        this.customerId = this.customer.customerId;
    }
    onSubmit(form) {
        this.submitted = true;
        this.passwordmismatch = this.checkPasswords();
        let isInvalid = form.invalid || this.passwordmismatch || this.oldpasswordwrong;
        // Stop here if form is invalid
        if (isInvalid) {
            return;
        }
        this.updatePassword();
    }
    updatePassword() {
        this.authentication.updatePassword(this.customerId, this.password).subscribe((data) => {
            let done = (data === 'true');
            //console.log('done='+data)
            if (done === true) {
                let navigationExtras = {
                    queryParams: {
                        'passwordupdatedone': "passwordupdatedone"
                    }
                };
                //Navigate
                this.router.navigate(['account'], navigationExtras);
            }
        });
    }
    checkPasswords() {
        let pass = this.password;
        let confirmPass = this.password_confirmation;
        return pass === confirmPass ? false : true;
    }
    checkOldPassword() {
        if (this.oldpassword && this.oldpassword.length > 0) {
            //console.log('>>this.customerId='+this.customerId)
            this.authentication.checkPassword(this.customerId, this.oldpassword).subscribe((data) => {
                //console.log('checkPassword='+data)
                this.oldpasswordwrong = (data === 'false');
                //console.log('this.oldpasswordwrong='+this.oldpasswordwrong)
            });
        }
    }
};
PasswordUpdateComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
PasswordUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/password-update/password-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-update.component.css */ "./src/app/components/account/password-update/password-update.component.css")).default]
    })
], PasswordUpdateComponent);



/***/ }),

/***/ "./src/app/components/account/profile-view/profile-view.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/account/profile-view/profile-view.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/account/profile-view/profile-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/account/profile-view/profile-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewComponent", function() { return ProfileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProfileViewComponent = class ProfileViewComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.getNavParams();
    }
    getNavParams() {
        /*this.route.queryParams.subscribe(params => {
    
          let customer = params["customer"];
    
          //console.log('customer='+customer)
        
        });*/
        let data = localStorage.getItem('customer');
        this.customer = JSON.parse(data);
        //console.log('customer='+this.customer)
    }
    ngOnInit() {
    }
};
ProfileViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProfileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/profile-view/profile-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-view.component.css */ "./src/app/components/account/profile-view/profile-view.component.css")).default]
    })
], ProfileViewComponent);



/***/ }),

/***/ "./src/app/components/account/unsubscription-done/unsubscription-done.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/account/unsubscription-done/unsubscription-done.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC91bnN1YnNjcmlwdGlvbi1kb25lL3Vuc3Vic2NyaXB0aW9uLWRvbmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/account/unsubscription-done/unsubscription-done.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/account/unsubscription-done/unsubscription-done.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UnsubscriptionDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionDoneComponent", function() { return UnsubscriptionDoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnsubscriptionDoneComponent = class UnsubscriptionDoneComponent {
    constructor() { }
    ngOnInit() {
    }
};
UnsubscriptionDoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unsubscription-done',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unsubscription-done.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/unsubscription-done/unsubscription-done.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unsubscription-done.component.css */ "./src/app/components/account/unsubscription-done/unsubscription-done.component.css")).default]
    })
], UnsubscriptionDoneComponent);



/***/ }),

/***/ "./src/app/components/allproducts/allproducts.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/allproducts/allproducts.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvYWxscHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/allproducts/allproducts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/allproducts/allproducts.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllproductsComponent", function() { return AllproductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let AllproductsComponent = class AllproductsComponent {
    constructor(route, router, location, messengerService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.messengerService = messengerService;
        this.handleSubscription();
    }
    ngOnInit() {
    }
    handleSubscription() {
        this.route.queryParams.subscribe(params => {
            let article = params["article"];
            if (article) {
                this.article = article;
            }
            let text = params["text"];
            if (text) {
                this.text = text;
            }
            switch (this.article) {
                case "Laptops":
                    this.router.navigate([{ outlets: { sub: ['laptops'] } }], { relativeTo: this.route, skipLocationChange: true });
                    this.location.go('/products/laptops');
                    break;
                case "Printers":
                    this.router.navigate([{ outlets: { sub: ['printers'] } }], { relativeTo: this.route, skipLocationChange: true });
                    this.location.go('/products/printers');
                    break;
                case "Products":
                    let searchproducts = params["searchproducts"];
                    if (searchproducts) {
                        this.router.navigate([{ outlets: { sub: ['searchproducts'] } }], { relativeTo: this.route, skipLocationChange: true });
                        this.location.go('/products/searchproducts');
                        this.messengerService.sendSearchProductMsg(searchproducts);
                    }
                    break;
                default:
                    this.router.navigate(['/home']);
                    break;
            }
        });
    }
};
AllproductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_1__["MessengerService"] }
];
AllproductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-allproducts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./allproducts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/allproducts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./allproducts.component.css */ "./src/app/components/allproducts/allproducts.component.css")).default]
    })
], AllproductsComponent);



/***/ }),

/***/ "./src/app/components/allproducts/cart-container/cart-container.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/allproducts/cart-container/cart-container.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvY2FydC1jb250YWluZXIvY2FydC1jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/allproducts/cart-container/cart-container.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/allproducts/cart-container/cart-container.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CartContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContainerComponent", function() { return CartContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartContainerComponent = class CartContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/cart-container/cart-container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-container.component.css */ "./src/app/components/allproducts/cart-container/cart-container.component.css")).default]
    })
], CartContainerComponent);



/***/ }),

/***/ "./src/app/components/allproducts/cart/cart-item/cart-item.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/allproducts/cart/cart-item/cart-item.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvY2FydC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/allproducts/cart/cart-item/cart-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/allproducts/cart/cart-item/cart-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartItemComponent = class CartItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartItemComponent.prototype, "cartItem", void 0);
CartItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/cart/cart-item/cart-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-item.component.css */ "./src/app/components/allproducts/cart/cart-item/cart-item.component.css")).default]
    })
], CartItemComponent);



/***/ }),

/***/ "./src/app/components/allproducts/cart/cart.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/allproducts/cart/cart.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/allproducts/cart/cart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/allproducts/cart/cart.component.ts ***!
  \***************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");




let CartComponent = class CartComponent {
    constructor(messengerService, cartService) {
        this.messengerService = messengerService;
        this.cartService = cartService;
        this.cartItems = [];
        this.cartTotal = 0;
        this.handleSubscription();
    }
    ngOnInit() {
        this.customerId = parseInt(localStorage.getItem("customerId"));
        this.authenticatedUser = localStorage.getItem("authenticatedUser");
        this.loadCartItems();
    }
    handleSubscription() {
        this.messengerService.getCartItemMsg().subscribe((next) => {
            let newCartItems = [];
            let found = false;
            this.cartItems.forEach(elem => {
                if (next.cartProductId == elem.cartProductId) {
                    newCartItems.push(next);
                    found = true;
                }
                else {
                    newCartItems.push(elem);
                }
            });
            if (!found) {
                newCartItems.push(next);
            }
            this.cartItems = newCartItems;
            this.calcCartTotal();
        });
    }
    loadCartItems() {
        if (!this.authenticatedUser)
            return;
        this.cartService.getCartItems(this.customerId).subscribe((items) => {
            this.cartItems = items;
            this.calcCartTotal();
        });
    }
    calcCartTotal() {
        this.cartTotal = 0;
        this.cartTotal = this.cartItems.map(item => (item.buyPrice - ((item.buyPrice * item.sale) / 100)) * item.qty)
            .reduce(function (acc, val) {
            return acc + val;
        }, this.cartTotal);
    }
    reduceItemQty(cartItem) {
        this.cartService.reduceProductQty(this.customerId, cartItem).subscribe((items) => {
            this.cartItems = items;
            this.calcCartTotal();
        });
    }
    removeItem(cartItem) {
        this.cartService.removeProductFromCart(this.customerId, cartItem).subscribe((items) => {
            this.cartItems = items;
            this.calcCartTotal();
        });
    }
};
CartComponent.ctorParameters = () => [
    { type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_1__["MessengerService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/components/allproducts/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/components/allproducts/filter/filter.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/allproducts/filter/filter.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/allproducts/filter/filter.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/allproducts/filter/filter.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/filter */ "./src/app/models/filter.ts");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let FilterComponent = class FilterComponent {
    constructor(messengerService) {
        this.messengerService = messengerService;
        this.from = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("15");
        this.to = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("200");
    }
    ngOnInit() {
    }
    handleFilterByPrice() {
        let filter = new _models_filter__WEBPACK_IMPORTED_MODULE_1__["Filter"](this.from.value, this.to.value);
        //Send this information to be shred by other compnents throw this service
        this.messengerService.sendFilterMsg(filter);
    }
};
FilterComponent.ctorParameters = () => [
    { type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"] }
];
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/filter/filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.css */ "./src/app/components/allproducts/filter/filter.component.css")).default]
    })
], FilterComponent);



/***/ }),

/***/ "./src/app/components/allproducts/item-details/item-details.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/allproducts/item-details/item-details.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottom-left {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    left: 16px;\r\n  }\r\n  \r\n  .top-left {\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 16px;\r\n  }\r\n  \r\n  .top-right {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 16px;\r\n  }\r\n  \r\n  .bottom-right {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    right: 16px;\r\n  }\r\n  \r\n  .centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGxwcm9kdWN0cy9pdGVtLWRldGFpbHMvaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbHByb2R1Y3RzL2l0ZW0tZGV0YWlscy9pdGVtLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3AtbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3AtcmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdHRvbS1yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/allproducts/item-details/item-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/allproducts/item-details/item-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsComponent", function() { return ItemDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_cart_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/cart-item */ "./src/app/models/cart-item.ts");
/* harmony import */ var src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/wishlist.service */ "./src/app/services/wishlist.service.ts");
/* harmony import */ var src_app_models_wish_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/wish-item */ "./src/app/models/wish-item.ts");









let ItemDetailsComponent = class ItemDetailsComponent {
    constructor(route, cartService, wishlistService, messengerService) {
        this.route = route;
        this.cartService = cartService;
        this.wishlistService = wishlistService;
        this.messengerService = messengerService;
        this.addedToWishlist = false;
        this.route.queryParams.subscribe(params => {
            let id = params["productId"];
            let name = params["productName"];
            let description = params["productDescription"];
            let price = params["buyPrice"];
            let sale = params["sale"];
            let imageUrl = params["imageUrl"];
            this.productItem = new _models_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
            this.productItem.productId = id;
            this.productItem.productName = name;
            this.productItem.productDescription = description;
            this.productItem.buyPrice = price;
            this.productItem.sale = sale;
            this.productItem.imageUrl = imageUrl;
            this.cartItem = new src_app_models_cart_item__WEBPACK_IMPORTED_MODULE_6__["CartItem"]();
            this.cartItem.productId = id;
            this.cartItem.productName = name;
            this.cartItem.buyPrice = price;
            this.cartItem.qty = 1;
        });
        this.handleSubscription();
    }
    ngOnInit() {
        this.authenticatedUser = localStorage.getItem("authenticatedUser");
        this.customerId = parseInt(localStorage.getItem("customerId"));
        this.loadWishlist();
    }
    loadWishlist() {
        this.wishlistService.getWishlist(this.customerId).subscribe((wishlist) => {
            wishlist.forEach(item => {
                if (item.productId == this.productItem.productId) {
                    this.addedToWishlist = true;
                }
            });
        });
    }
    handleSubscription() {
        this.messengerService.getWishlisttemAsProductMsg().subscribe((wishItems) => {
            wishItems.forEach(wishItem => {
                if (wishItem.productId == this.productItem.productId) {
                    this.addedToWishlist = true;
                }
            });
        });
    }
    handleAddToCart() {
        this.cartService.addProductToCart(this.customerId, this.cartItem).subscribe((data) => {
            let filtered = data.filter(x => (x.productId == this.cartItem.productId));
            var element = filtered[0];
            this.cartItem.cartProductId = element.cartProductId;
            this.cartItem.productId = element.productId;
            this.cartItem.qty = element.qty;
            this.cartItem.productName = element.productName;
            this.cartItem.sale = element.sale;
            this.cartItem.buyPrice = element.buyPrice;
            this.messengerService.sendCartItemMsg(this.cartItem);
        });
    }
    handleAddToWishlist(productItem) {
        this.wishItem = new src_app_models_wish_item__WEBPACK_IMPORTED_MODULE_8__["WishItem"]();
        this.wishItem.productId = productItem.productId;
        this.wishlistService.addToWishlist(this.customerId, this.wishItem).subscribe((wishItems) => {
            this.addedToWishlist = true;
            wishItems.forEach((item) => {
                if (item.productId == this.wishItem.productId) {
                    this.wishItem = item;
                }
            });
            this.messengerService.sendWishlistItemsMsg(wishItems);
        });
    }
    handleRemoveFromWishlist(productItem) {
        this.wishItem = new src_app_models_wish_item__WEBPACK_IMPORTED_MODULE_8__["WishItem"]();
        this.wishItem.productId = productItem.productId;
        this.wishlistService.removeFromWishlist(this.customerId, this.wishItem).subscribe((wishItems) => {
            this.addedToWishlist = false;
            this.messengerService.sendWishlistItemsMsg(wishItems);
        });
    }
};
ItemDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_7__["WishlistService"] },
    { type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], ItemDetailsComponent.prototype, "wishItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], ItemDetailsComponent.prototype, "addedToWishlist", void 0);
ItemDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-item-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/item-details/item-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-details.component.css */ "./src/app/components/allproducts/item-details/item-details.component.css")).default]
    })
], ItemDetailsComponent);



/***/ }),

/***/ "./src/app/components/allproducts/laptop/item/item.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/allproducts/laptop/item/item.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottom-left {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    left: 16px;\r\n  }\r\n  \r\n  .top-left {\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 16px;\r\n  }\r\n  \r\n  .top-right {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 16px;\r\n  }\r\n  \r\n  .bottom-right {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    right: 16px;\r\n  }\r\n  \r\n  .centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGxwcm9kdWN0cy9sYXB0b3AvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbHByb2R1Y3RzL2xhcHRvcC9pdGVtL2l0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3AtbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3AtcmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdHRvbS1yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/allproducts/laptop/item/item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/allproducts/laptop/item/item.component.ts ***!
  \**********************************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models_wish_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/wish-item */ "./src/app/models/wish-item.ts");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/wishlist.service */ "./src/app/services/wishlist.service.ts");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");







let ItemComponent = class ItemComponent {
    constructor(messengerService, cartService, wishlistService, router) {
        this.messengerService = messengerService;
        this.cartService = cartService;
        this.wishlistService = wishlistService;
        this.router = router;
        this.addedToWishlist = false;
    }
    ngOnInit() {
        this.customerId = parseInt(localStorage.getItem("customerId"));
    }
    handleAddToCart() {
        this.cartService.addProductToCart(this.customerId, this.cartItem).subscribe(() => {
            this.messengerService.sendCartItemMsg(this.cartItem);
        });
    }
    handleAddToWishlist(productItem) {
        this.wishItem = new src_app_models_wish_item__WEBPACK_IMPORTED_MODULE_1__["WishItem"]();
        this.wishItem.productId = productItem.productId;
        this.wishlistService.addToWishlist(this.customerId, this.wishItem).subscribe(() => {
            this.addedToWishlist = true;
        });
    }
    handleRemoveToWishlist(productItem) {
        this.wishItem = new src_app_models_wish_item__WEBPACK_IMPORTED_MODULE_1__["WishItem"]();
        this.wishItem.productId = productItem.productId;
        this.wishlistService.removeFromWishlist(this.customerId, this.wishItem).subscribe(() => {
            this.addedToWishlist = false;
        });
    }
    viewItemDetails() {
        let navigationExtras = {
            queryParams: {
                'productId': this.productItem.productId,
                'productName': this.productItem.productName,
                'productDescription': this.productItem.productDescription,
                'buyPrice': this.productItem.buyPrice,
                'sale': this.productItem.sale,
                'imageUrl': this.productItem.imageUrl
            }
        };
        this.router.navigate(['item-details'], navigationExtras);
    }
};
ItemComponent.ctorParameters = () => [
    { type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_3__["MessengerService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], ItemComponent.prototype, "productItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], ItemComponent.prototype, "addedToWishlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], ItemComponent.prototype, "cartItem", void 0);
ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/laptop/item/item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item.component.css */ "./src/app/components/allproducts/laptop/item/item.component.css")).default]
    })
], ItemComponent);



/***/ }),

/***/ "./src/app/components/allproducts/laptop/laptop.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/allproducts/laptop/laptop.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvbGFwdG9wL2xhcHRvcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/allproducts/laptop/laptop.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/allproducts/laptop/laptop.component.ts ***!
  \*******************************************************************/
/*! exports provided: LaptopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopComponent", function() { return LaptopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/wishlist.service */ "./src/app/services/wishlist.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");





let LaptopComponent = class LaptopComponent {
    constructor(productService, wishlistService, messengerService) {
        this.productService = productService;
        this.wishlistService = wishlistService;
        this.messengerService = messengerService;
        this.filterdProductList = [];
        this.productList = [];
        this.wishlist = [];
        this.wishlistIds = [];
        this.from = 0;
        this.to = 0;
    }
    ngOnInit() {
        this.customerId = parseInt(localStorage.getItem("customerId"));
        this.loadProducts();
        this.handleFilterSubscription();
    }
    loadProducts() {
        this.productService.getLaptops().subscribe((products) => {
            this.productList = products;
            this.filterdProductList = this.productList;
            //Save productList inside messenger service to be shared by other components
            this.messengerService.sendCartItemsMsg(this.productList);
            this.loadWishlist();
        });
    }
    loadWishlist() {
        this.wishlistService.getWishlist(this.customerId).subscribe((wishItems) => {
            this.wishlist = wishItems;
            this.wishlist.forEach(wishItem => {
                this.wishlistIds.push(wishItem.productId);
            });
        });
    }
    handleFilterSubscription() {
        this.messengerService.getFilterMsg().subscribe((filter) => {
            this.from = filter.from;
            this.to = filter.to;
            this.filterdProductList = this.productList.filter((product) => (product.buyPrice >= this.from && product.buyPrice <= this.to));
        });
    }
};
LaptopComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"] },
    { type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_1__["MessengerService"] }
];
LaptopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-laptop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./laptop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/laptop/laptop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./laptop.component.css */ "./src/app/components/allproducts/laptop/laptop.component.css")).default]
    })
], LaptopComponent);



/***/ }),

/***/ "./src/app/components/allproducts/printer/printer.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/allproducts/printer/printer.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvcHJpbnRlci9wcmludGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/allproducts/printer/printer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/allproducts/printer/printer.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrinterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterComponent", function() { return PrinterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/wishlist.service */ "./src/app/services/wishlist.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");





let PrinterComponent = class PrinterComponent {
    constructor(productService, wishlistService, messengerService) {
        this.productService = productService;
        this.wishlistService = wishlistService;
        this.messengerService = messengerService;
        this.filterdProductList = [];
        this.productList = [];
        this.wishlist = [];
        this.wishlistIds = [];
        this.from = 0;
        this.to = 0;
    }
    ngOnInit() {
        this.customerId = parseInt(localStorage.getItem("customerId"));
        this.loadProducts();
        this.handleFilterSubscription();
    }
    loadProducts() {
        this.productService.getPrinters().subscribe((products) => {
            this.productList = products;
            this.filterdProductList = this.productList;
            this.messengerService.sendCartItemsMsg(this.productList);
            this.loadWishlist();
        });
    }
    loadWishlist() {
        this.wishlistService.getWishlist(this.customerId).subscribe((wishItems) => {
            this.wishlist = wishItems;
            this.wishlist.forEach(wishItem => {
                this.wishlistIds.push(wishItem.productId);
            });
        });
    }
    handleFilterSubscription() {
        this.messengerService.getFilterMsg().subscribe((filter) => {
            this.from = filter.from;
            this.to = filter.to;
            this.filterdProductList = this.productList.filter((product) => (product.buyPrice >= this.from && product.buyPrice <= this.to));
        });
    }
};
PrinterComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"] },
    { type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_1__["MessengerService"] }
];
PrinterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-printer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./printer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/printer/printer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./printer.component.css */ "./src/app/components/allproducts/printer/printer.component.css")).default]
    })
], PrinterComponent);



/***/ }),

/***/ "./src/app/components/allproducts/salelaptop/salelaptop.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/allproducts/salelaptop/salelaptop.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvc2FsZWxhcHRvcC9zYWxlbGFwdG9wLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/allproducts/salelaptop/salelaptop.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/allproducts/salelaptop/salelaptop.component.ts ***!
  \***************************************************************************/
/*! exports provided: SalelaptopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalelaptopComponent", function() { return SalelaptopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wishlist.service */ "./src/app/services/wishlist.service.ts");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/messenger.service */ "./src/app/services/messenger.service.ts");





let SalelaptopComponent = class SalelaptopComponent {
    constructor(productService, wishlistService, messengerService) {
        this.productService = productService;
        this.wishlistService = wishlistService;
        this.messengerService = messengerService;
        this.filterdProductList = [];
        this.productList = [];
        this.wishlist = [];
        this.wishlistIds = [];
        this.from = 0;
        this.to = 0;
    }
    ngOnInit() {
        this.customerId = parseInt(localStorage.getItem("customerId"));
        this.loadProducts();
        this.handleFilterSubscription();
    }
    loadProducts() {
        this.productService.getSaleLaptops().subscribe((products) => {
            this.productList = products;
            this.filterdProductList = this.productList;
            //Save productList inside messenger service to be shared by other components
            this.messengerService.sendSaleCartItemsMsg(this.productList);
            this.loadWishlist();
        });
    }
    loadWishlist() {
        this.wishlistService.getWishlist(this.customerId).subscribe((wishItems) => {
            this.wishlist = wishItems;
            this.wishlist.forEach(wishItem => {
                this.wishlistIds.push(wishItem.productId);
            });
        });
    }
    handleFilterSubscription() {
        this.messengerService.getFilterMsg().subscribe((filter) => {
            this.from = filter.from;
            this.to = filter.to;
            this.filterdProductList = this.productList.filter((product) => (product.buyPrice >= this.from && product.buyPrice <= this.to));
        });
    }
};
SalelaptopComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] },
    { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"] }
];
SalelaptopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-salelaptop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salelaptop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/salelaptop/salelaptop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./salelaptop.component.css */ "./src/app/components/allproducts/salelaptop/salelaptop.component.css")).default]
    })
], SalelaptopComponent);



/***/ }),

/***/ "./src/app/components/allproducts/saleprinter/saleprinter.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/allproducts/saleprinter/saleprinter.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvc2FsZXByaW50ZXIvc2FsZXByaW50ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/allproducts/saleprinter/saleprinter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/allproducts/saleprinter/saleprinter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SaleprinterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleprinterComponent", function() { return SaleprinterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wishlist.service */ "./src/app/services/wishlist.service.ts");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/messenger.service */ "./src/app/services/messenger.service.ts");





let SaleprinterComponent = class SaleprinterComponent {
    constructor(productService, wishlistService, messengerService) {
        this.productService = productService;
        this.wishlistService = wishlistService;
        this.messengerService = messengerService;
        this.filterdProductList = [];
        this.productList = [];
        this.wishlist = [];
        this.wishlistIds = [];
        this.from = 0;
        this.to = 0;
    }
    ngOnInit() {
        this.customerId = parseInt(localStorage.getItem("customerId"));
        this.loadProducts();
        this.handleFilterSubscription();
    }
    loadProducts() {
        this.productService.getSalePrinters().subscribe((products) => {
            this.productList = products;
            this.filterdProductList = this.productList;
            //Save productList inside messenger service to be shared by other components
            this.messengerService.sendSaleCartItemsMsg(this.productList);
            this.loadWishlist();
        });
    }
    loadWishlist() {
        this.wishlistService.getWishlist(this.customerId).subscribe((wishItems) => {
            this.wishlist = wishItems;
            this.wishlist.forEach(wishItem => {
                this.wishlistIds.push(wishItem.productId);
            });
        });
    }
    handleFilterSubscription() {
        this.messengerService.getFilterMsg().subscribe((filter) => {
            //console.log('*filter.from='+ filter.from);
            this.from = filter.from;
            this.to = filter.to;
            //console.log('this.productList='+ this.productList.length);
            this.filterdProductList = this.productList.filter((product) => (product.buyPrice >= this.from && product.buyPrice <= this.to));
            //console.log('*this.filterdProductList='+ this.filterdProductList.length);
        });
    }
};
SaleprinterComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] },
    { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"] }
];
SaleprinterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saleprinter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./saleprinter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/saleprinter/saleprinter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./saleprinter.component.css */ "./src/app/components/allproducts/saleprinter/saleprinter.component.css")).default]
    })
], SaleprinterComponent);



/***/ }),

/***/ "./src/app/components/allproducts/saleproducts.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/allproducts/saleproducts.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvc2FsZXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/allproducts/saleproducts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/allproducts/saleproducts.component.ts ***!
  \******************************************************************/
/*! exports provided: SaleproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleproductsComponent", function() { return SaleproductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let SaleproductsComponent = class SaleproductsComponent {
    constructor(route, router, location) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.handleSubscription();
    }
    ngOnInit() {
    }
    handleSubscription() {
        this.route.queryParams.subscribe(params => {
            let article = params["article"];
            if (article) {
                this.article = article;
            }
            switch (this.article) {
                case "Laptops":
                    this.router.navigate([{ outlets: { salesub: ['salelaptops'] } }], { relativeTo: this.route, skipLocationChange: true });
                    this.location.go('/sale/laptops');
                    break;
                case "Printers":
                    this.router.navigate([{ outlets: { salesub: ['saleprinters'] } }], { relativeTo: this.route, skipLocationChange: true });
                    this.location.go('/sale/printers');
                    break;
                default: break;
            }
        });
    }
};
SaleproductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
SaleproductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saleproducts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./saleproducts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/saleproducts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./saleproducts.component.css */ "./src/app/components/allproducts/saleproducts.component.css")).default]
    })
], SaleproductsComponent);



/***/ }),

/***/ "./src/app/components/allproducts/searchproduct/searchproduct.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/allproducts/searchproduct/searchproduct.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvc2VhcmNocHJvZHVjdC9zZWFyY2hwcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/allproducts/searchproduct/searchproduct.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/allproducts/searchproduct/searchproduct.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchproductComponent", function() { return SearchproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/wishlist.service */ "./src/app/services/wishlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SearchproductComponent = class SearchproductComponent {
    constructor(productService, wishlistService, messengerService, route) {
        this.productService = productService;
        this.wishlistService = wishlistService;
        this.messengerService = messengerService;
        this.route = route;
        this.filterdProductList = [];
        this.productList = [];
        this.wishlist = [];
        this.wishlistIds = [];
        this.from = 0;
        this.to = 0;
        this.handleSubscription();
        this.handleFilterSubscription();
    }
    handleSubscription() {
        this.messengerService.getSearchProductMsg().subscribe((products) => {
            this.productList = JSON.parse(products);
            this.filterdProductList = this.productList;
            this.loadWishlist();
        });
    }
    ngOnInit() {
        this.customerId = parseInt(sessionStorage.getItem("customerId"));
    }
    loadWishlist() {
        this.wishlistService.getWishlist(this.customerId).subscribe((wishItems) => {
            this.wishlist = wishItems;
            this.wishlist.forEach(wishItem => {
                this.wishlistIds.push(wishItem.productId);
            });
        });
    }
    handleFilterSubscription() {
        this.messengerService.getFilterMsg().subscribe((filter) => {
            this.from = filter.from;
            this.to = filter.to;
            this.filterdProductList = this.productList.filter((product) => (product.buyPrice >= this.from && product.buyPrice <= this.to));
        });
    }
};
SearchproductComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"] },
    { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_3__["MessengerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
SearchproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchproduct',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./searchproduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/searchproduct/searchproduct.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./searchproduct.component.css */ "./src/app/components/allproducts/searchproduct/searchproduct.component.css")).default]
    })
], SearchproductComponent);



/***/ }),

/***/ "./src/app/components/allproducts/wishlist-container/wishlist-container.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/allproducts/wishlist-container/wishlist-container.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvd2lzaGxpc3QtY29udGFpbmVyL3dpc2hsaXN0LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/allproducts/wishlist-container/wishlist-container.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/allproducts/wishlist-container/wishlist-container.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: WishlistContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistContainerComponent", function() { return WishlistContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WishlistContainerComponent = class WishlistContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
WishlistContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wishlist-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/wishlist-container/wishlist-container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wishlist-container.component.css */ "./src/app/components/allproducts/wishlist-container/wishlist-container.component.css")).default]
    })
], WishlistContainerComponent);



/***/ }),

/***/ "./src/app/components/allproducts/wishlist/wish-item/wish-item.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/allproducts/wishlist/wish-item/wish-item.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvd2lzaGxpc3Qvd2lzaC1pdGVtL3dpc2gtaXRlbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/allproducts/wishlist/wish-item/wish-item.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/allproducts/wishlist/wish-item/wish-item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WishItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishItemComponent", function() { return WishItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WishItemComponent = class WishItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WishItemComponent.prototype, "wishItem", void 0);
WishItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wish-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wish-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/wishlist/wish-item/wish-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wish-item.component.css */ "./src/app/components/allproducts/wishlist/wish-item/wish-item.component.css")).default]
    })
], WishItemComponent);



/***/ }),

/***/ "./src/app/components/allproducts/wishlist/wishlist.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/allproducts/wishlist/wishlist.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/allproducts/wishlist/wishlist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/allproducts/wishlist/wishlist.component.ts ***!
  \***********************************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wishlist.service */ "./src/app/services/wishlist.service.ts");




let WishlistComponent = class WishlistComponent {
    constructor(messengerService, wishlistService) {
        this.messengerService = messengerService;
        this.wishlistService = wishlistService;
        this.wishlist = [];
        this.handleSubscription();
    }
    ngOnInit() {
        this.customerId = parseInt(localStorage.getItem("customerId"));
        this.authenticatedUser = localStorage.getItem("authenticatedUser");
        this.loadWishItems();
    }
    handleSubscription() {
        this.messengerService.getWishlisttemAsProductMsg().subscribe((wishItems) => {
            this.wishlist = wishItems;
        });
    }
    loadWishItems() {
        if (!this.authenticatedUser)
            return;
        this.wishlistService.getWishlist(this.customerId).subscribe((items) => {
            this.wishlist = items;
        });
    }
    removeItem(wishItem) {
        this.wishlistService.removeFromWishlist(this.customerId, wishItem).subscribe((items) => {
            this.wishlist = items;
        });
    }
};
WishlistComponent.ctorParameters = () => [
    { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"] },
    { type: src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] }
];
WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allproducts/wishlist/wishlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wishlist.component.css */ "./src/app/components/allproducts/wishlist/wishlist.component.css")).default]
    })
], WishlistComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-indicators li {\r\n    border-radius: 12px;\r\n    width: 12px;\r\n    height: 12px;\r\n    background-color: #404040;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authentication, router) {
        this.authentication = authentication;
        this.router = router;
        this.username = '';
        this.password = '';
        this.submitted = false;
        this.invalidLogin = false;
        this.loginSuccess = false;
        this.badcredentials = false;
        this.errorMessage401 = 'Invalid Credentials';
        this.noconnection = false;
        this.errorMessage504 = 'Connection with server is lost';
        this.unknownproblem = false;
        this.errorMessage = 'Unknown problem occurred';
    }
    ngOnInit() {
    }
    loginUser(event) {
        event.preventDefault();
        this.submitted = true;
        this.authentication.loginUser(this.username, this.password).subscribe((customer) => {
            this.invalidLogin = false;
            this.loginSuccess = true;
            this.router.navigate(['account']);
        }, (error) => {
            this.invalidLogin = true;
            this.loginSuccess = false;
            this.badcredentials = false;
            this.noconnection = false;
            this.unknownproblem = false;
            switch (error.status) {
                case 401:
                    this.badcredentials = true;
                    break;
                case 504:
                    this.noconnection = true;
                    break;
                default:
                    this.unknownproblem = true;
                    break;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/register-done/register-done.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/register-done/register-done.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItZG9uZS9yZWdpc3Rlci1kb25lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/register-done/register-done.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-done/register-done.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDoneComponent", function() { return RegisterDoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RegisterDoneComponent = class RegisterDoneComponent {
    constructor(route) {
        this.route = route;
        this.route.queryParams.subscribe(params => {
            this.username = params["username"];
            this.firstname = params["firstname"];
            this.lastname = params["lastname"];
        });
    }
    ngOnInit() {
    }
};
RegisterDoneComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RegisterDoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-done',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-done.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-done/register-done.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-done.component.css */ "./src/app/components/register-done/register-done.component.css")).default]
    })
], RegisterDoneComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_dialogs_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialogs/warning-dialog/warning-dialog.component */ "./src/app/dialogs/warning-dialog/warning-dialog.component.ts");
/* harmony import */ var src_app_dialogs_warning_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialogs/warning-options */ "./src/app/dialogs/warning-options.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let RegisterComponent = class RegisterComponent {
    constructor(modalService, authentication, router, route, datepipe) {
        this.modalService = modalService;
        this.authentication = authentication;
        this.router = router;
        this.route = route;
        this.datepipe = datepipe;
        this.closeResult = '';
        this.submitted = false;
        this.passwordmismatch = false;
        this.usernameexists = false;
        this.customer = new _models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    ngOnInit() {
    }
    getFormattedDate(value) {
        let year = parseInt(value.year);
        let month = parseInt(value.month) - 1;
        let day = parseInt(value.day);
        let date = new Date(year, month, day);
        return this.datepipe.transform(date, "yyyy-MM-dd");
    }
    onSubmit(form) {
        this.submitted = true;
        this.passwordmismatch = this.checkPasswords();
        let isInvalid = form.invalid || this.passwordmismatch;
        // Stop here if form is invalid
        if (isInvalid) {
            return;
        }
        if (!this.customer.date_of_birth) {
            return;
        }
        this.customer.date_of_birth = new Date(this.getFormattedDate(form.controls.dob.value));
        this.authentication.checkIfExistsUser(this.customer.username).subscribe(data => {
            if (data == "false") {
                this.usernameexists = false;
                this.doRegistration();
            }
            else {
                this.usernameexists = true;
            }
        });
    }
    doRegistration() {
        this.authentication.registerUser(this.customer).subscribe((data) => {
            let username = "";
            let firstname = "";
            let lastname = "";
            if (data.length > 0) {
                let jo = JSON.parse(data);
                username = jo.username;
                firstname = jo.firstname;
                lastname = jo.lastname;
            }
            ;
            let navigationExtras = {
                queryParams: {
                    'username': username,
                    'firstname': firstname,
                    'lastname': lastname,
                }
            };
            this.router.navigate(['/register-done'], navigationExtras);
        });
    }
    onUsernameChange() {
        this.usernameexists = false;
    }
    checkPasswords() {
        let pass = this.customer.password;
        let confirmPass = this.customer.password_confirmation;
        return pass === confirmPass ? false : true;
    }
    receiveMessage($event) {
        this.closeResult = $event;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    registerUser() {
        if (!this.acceptTerms) {
            this.warningOptions = new src_app_dialogs_warning_options__WEBPACK_IMPORTED_MODULE_6__["WarningOptions"]("Terms and Conditions Violation", "You did not agree on the terms and conditions of this registration");
            this.warningDialogComponent.warningOptions = this.warningOptions;
            this.open(this.warningDialogComponent.getContent());
            return;
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerForm', { static: false })
], RegisterComponent.prototype, "registerForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_dialogs_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_5__["WarningDialogComponent"], { static: false })
], RegisterComponent.prototype, "warningDialogComponent", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/shared/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToHome() {
        this.router.navigate(['/home']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/shared/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/shared/nav/nav.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/shared/nav/nav.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/shared/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let NavComponent = class NavComponent {
    constructor(router, autentication, productservice, messengerService, route, location) {
        this.router = router;
        this.autentication = autentication;
        this.productservice = productservice;
        this.messengerService = messengerService;
        this.route = route;
        this.location = location;
        this.handleSubscription();
    }
    ngOnInit() {
    }
    handleSubscription() {
        this.messengerService.getAutenticateUserMsg().subscribe((name) => {
            this.authenticatedUser = name;
            if (name) {
                localStorage.setItem('user', name);
            }
            else {
                localStorage.removeItem('user');
            }
        });
        let user = localStorage.getItem('user');
        if (user) {
            this.authenticatedUser = user;
        }
    }
    onSearchItem() {
        this.productservice.getSearchProducts(this.searchItem).subscribe((data) => {
            //Navigate
            localStorage.setItem('searchproducts', JSON.stringify(data));
            if (data.length > 0) {
                let navigationExtras = {
                    queryParams: {
                        'article': 'Products',
                        'text': 'Found Products matching the search item "' + this.searchItem + '"',
                        'searchproducts': JSON.stringify(data),
                    }
                };
                this.router.navigate(['products'], navigationExtras);
            }
        });
    }
    onShowAccount() {
        this.authenticatedUser = localStorage.getItem('user');
        if (this.authenticatedUser) {
            if (this.router.url.indexOf('account') < 0) {
                this.router.navigate(['account']);
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
};
NavComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_5__["MessengerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/components/shared/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/config/api.ts":
/*!*******************************!*\
  !*** ./src/app/config/api.ts ***!
  \*******************************/
/*! exports provided: baseUrl, productsUrl, laptopsUrl, printersUrl, saleProductsUrl, saleLaptopsUrl, salePrintersUrl, cartUrl, wishlistUrl, loginUrl, logoutUrl, customerUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsUrl", function() { return productsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "laptopsUrl", function() { return laptopsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printersUrl", function() { return printersUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saleProductsUrl", function() { return saleProductsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saleLaptopsUrl", function() { return saleLaptopsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salePrintersUrl", function() { return salePrintersUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartUrl", function() { return cartUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistUrl", function() { return wishlistUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUrl", function() { return loginUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUrl", function() { return logoutUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerUrl", function() { return customerUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");


//If it is production url, otherwise
//export const baseUrl = environment.production ? "https://api.shoppingcart.com":"http://localhost:8080";
const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? "https://api.shoppingcart.com" : "/api";
const productsUrl = baseUrl + '/products';
const laptopsUrl = baseUrl + '/laptops';
const printersUrl = baseUrl + '/printers';
const saleProductsUrl = baseUrl + '/products/sale';
const saleLaptopsUrl = baseUrl + '/laptops/sale';
const salePrintersUrl = baseUrl + '/printers/sale';
const cartUrl = baseUrl + '/cart';
const wishlistUrl = baseUrl + '/wishlist';
const loginUrl = baseUrl + '/login';
const logoutUrl = baseUrl + '/logout';
const customerUrl = baseUrl + '/customer';


/***/ }),

/***/ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/confirm-dialog/confirm-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.css")).default]
    })
], ConfirmDialogComponent);



/***/ }),

/***/ "./src/app/dialogs/warning-dialog/warning-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/warning-dialog.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3Mvd2FybmluZy1kaWFsb2cvd2FybmluZy1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dialogs/warning-dialog/warning-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/warning-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: WarningDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningDialogComponent", function() { return WarningDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _warning_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../warning-options */ "./src/app/dialogs/warning-options.ts");



let WarningDialogComponent = class WarningDialogComponent {
    constructor() {
        this.warningOptions = new _warning_options__WEBPACK_IMPORTED_MODULE_2__["WarningOptions"]();
    }
    ngOnInit() {
    }
    getContent() {
        return this.content;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('warningcontent', { static: false })
], WarningDialogComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WarningDialogComponent.prototype, "warningOptions", void 0);
WarningDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-warning-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./warning-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/warning-dialog/warning-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./warning-dialog.component.css */ "./src/app/dialogs/warning-dialog/warning-dialog.component.css")).default]
    })
], WarningDialogComponent);



/***/ }),

/***/ "./src/app/dialogs/warning-options.ts":
/*!********************************************!*\
  !*** ./src/app/dialogs/warning-options.ts ***!
  \********************************************/
/*! exports provided: WarningOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningOptions", function() { return WarningOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class WarningOptions {
    constructor(title = "", body = "") {
        this.title = title;
        this.body = body;
    }
}


/***/ }),

/***/ "./src/app/guards/authentication.guard.ts":
/*!************************************************!*\
  !*** ./src/app/guards/authentication.guard.ts ***!
  \************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthenticationGuard = class AuthenticationGuard {
    constructor(authentication, router) {
        this.authentication = authentication;
        this.router = router;
    }
    canActivate() {
        if (this.authentication.isUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/guards/register-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/guards/register-guard.service.ts ***!
  \**************************************************/
/*! exports provided: RegisterGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterGuardService", function() { return RegisterGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterGuardService = class RegisterGuardService {
    constructor() { }
    canDeactivate(component) {
        if (component.registerForm.dirty && !component.submitted) {
            return confirm("Are you sure to leave this page and to discard your changes?");
        }
        return true;
    }
};
RegisterGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegisterGuardService);



/***/ }),

/***/ "./src/app/models/address.ts":
/*!***********************************!*\
  !*** ./src/app/models/address.ts ***!
  \***********************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Address {
}


/***/ }),

/***/ "./src/app/models/cart-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/cart-item.ts ***!
  \*************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CartItem {
    constructor() { }
}


/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address */ "./src/app/models/address.ts");


class Customer {
    constructor(id = -1, firstname = "", lastname = "", username = "", password = "", password_confirmation = "", gender = "Male", date_of_birth = new Date(), street = "", number = 0, city = "", state = "", pincode = 0, phone = "", email = "", acceptTerms = false) {
        this.customerId = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.password_confirmation = password_confirmation;
        this.gender = gender;
        this.date_of_birth = date_of_birth;
        /*this.street=street;
        this.number=number;
        this.city=city;
        this.state=state;
        this.zipcode=zipcode;*/
        this.address = new _address__WEBPACK_IMPORTED_MODULE_1__["Address"]();
        this.address.street = street;
        this.address.number = number;
        this.address.city = city;
        this.address.state = state;
        this.address.pincode = pincode;
        this.phone = phone;
        this.email = email;
        this.acceptTerms = acceptTerms;
    }
}


/***/ }),

/***/ "./src/app/models/filter.ts":
/*!**********************************!*\
  !*** ./src/app/models/filter.ts ***!
  \**********************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Filter {
    constructor(from = 0, to = 0) {
        this.from = from;
        this.to = to;
    }
}


/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Product {
    constructor(productId = -1, productName = "", productDescription = "", imageUrl = "", quantityInStock = 0, buyPrice = 0, sale = 0) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.imageUrl = imageUrl;
        this.quantityInStock = quantityInStock;
        this.buyPrice = buyPrice;
        this.buyPrice = buyPrice;
        this.sale = sale;
    }
}


/***/ }),

/***/ "./src/app/models/wish-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/wish-item.ts ***!
  \*************************************/
/*! exports provided: WishItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishItem", function() { return WishItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class WishItem {
    constructor() { }
}


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _messenger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger.service */ "./src/app/services/messenger.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/api */ "./src/app/config/api.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http, messengerService) {
        this.http = http;
        this.messengerService = messengerService;
        this.USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
        this.CUSTOMER_SESSION_ATTRIBUTE_CUSTOMER = 'customer';
        this.CUSTOMER_SESSION_ATTRIBUTE_ID = 'customerId';
    }
    //Login a user
    loginUser(username, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["loginUrl"], { headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            this.username = username;
            this.password = password;
            if (data.length > 0) {
                this.customer = JSON.parse(data);
                this.registerSuccessfulLogin();
            }
        }));
    }
    //Return if a user is login
    isUserLoggedIn() {
        let user = localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null)
            return false;
        return true;
    }
    registerSuccessfulLogin() {
        localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, this.username);
        localStorage.setItem('password', this.password);
        localStorage.setItem(this.CUSTOMER_SESSION_ATTRIBUTE_CUSTOMER, JSON.stringify(this.customer));
        localStorage.setItem(this.CUSTOMER_SESSION_ATTRIBUTE_ID, this.customer.customerId.toString());
        this.messengerService.sendAutenticateUserMsg(this.username);
    }
    //Logout a user
    logoutUser() {
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["logoutUrl"], { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            this.resetLoginParamters();
        }));
    }
    //Reset all login parameters after invalidate session
    resetLoginParamters() {
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
    checkIfExistsUser(username) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["customerUrl"] + "/checkCustomerByName/" + username, { headers, responseType: 'text' });
    }
    //Get the customer/user by the id
    getUserById(customerId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["customerUrl"] + "/getCustomer/" + customerId, { headers, responseType: 'text' });
    }
    //Check if the password exists
    checkPassword(customerId, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["customerUrl"] + "/checkCustomerPassword/" + customerId + '/' + password, { headers, responseType: 'text' });
    }
    //Update the password
    updatePassword(customerId, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["customerUrl"] + "/updateCustomerPassword/" + customerId + '/' + password, { headers, responseType: 'text' });
    }
    //Register new user
    registerUser(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_5__["customerUrl"] + "/registerCustomer", user, { headers, responseType: 'text' });
    }
    //Unsubscribe from web-site
    unsubscribeUser(customerId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_5__["customerUrl"] + "/deleteCustomerById/" + customerId, { headers });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _messenger_service__WEBPACK_IMPORTED_MODULE_1__["MessengerService"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cart-item */ "./src/app/models/cart-item.ts");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config/api */ "./src/app/config/api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.username = localStorage.getItem('authenticatedUser');
        this.password = localStorage.getItem('password');
    }
    checkInValidCustomer(customerId) {
        if (customerId == null || isNaN(customerId))
            return true;
        return false;
    }
    getCartItems(customerId) {
        if (this.checkInValidCustomer(customerId))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"])();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_2__["cartUrl"] + '/getCart' + '/' + customerId, { headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => {
            return this.getCartProduct(data);
        }));
    }
    getCartProduct(data) {
        let cartItems = [];
        if (data.length <= 0)
            return cartItems;
        let jo = JSON.parse(data);
        jo.forEach(element => {
            let cartItem = new _models_cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"]();
            if (element) {
                cartItem.cartProductId = element.cartProductId;
                cartItem.productId = element.productId;
                cartItem.qty = element.qty;
                cartItem.productName = element.mainProduct.productName;
                cartItem.buyPrice = element.mainProduct.buyPrice;
                cartItem.sale = element.mainProduct.sale;
                cartItems.push(cartItem);
            }
        });
        return cartItems;
    }
    addProductToCart(customerId, cartItem) {
        if (this.checkInValidCustomer(customerId))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"])();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_2__["cartUrl"] + '/addCartProduct' + '/' + customerId, cartItem, { headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => {
            return this.getCartProduct(data);
        }));
    }
    reduceProductQty(customerId, cartItem) {
        if (this.checkInValidCustomer(customerId))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"])();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_2__["cartUrl"] + '/reduceCartProductQty' + '/'
            + customerId, cartItem, { headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => {
            return this.getCartProduct(data);
        }));
    }
    removeProductFromCart(customerId, cartItem) {
        if (this.checkInValidCustomer(customerId))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"])();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_2__["cartUrl"] + '/deleteCartProduct/'
            + customerId + '/' + cartItem.cartProductId, { headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => {
            return this.getCartProduct(data);
        }));
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/services/messenger.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/messenger.service.ts ***!
  \***********************************************/
/*! exports provided: MessengerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerService", function() { return MessengerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MessengerService = class MessengerService {
    constructor() {
        //Helping us to listen to the next message
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.filterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.cartItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.wishItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    sendSearchProductMsg(searchproduct) {
        this.searchSubject.next(searchproduct);
    }
    getSearchProductMsg() {
        return this.searchSubject.asObservable();
    }
    sendAutenticateUserMsg(authenticatedUser) {
        this.userSubject.next(authenticatedUser);
    }
    getAutenticateUserMsg() {
        return this.userSubject.asObservable();
    }
    sendCartItemMsg(cartItem) {
        this.subject.next(cartItem);
    }
    getCartItemMsg() {
        return this.subject.asObservable();
    }
    sendFilterMsg(filter) {
        this.filterSubject.next(filter);
    }
    getFilterMsg() {
        return this.filterSubject.asObservable();
    }
    sendCartItemsMsg(productList) {
        this.cartItemSubject.next(productList);
    }
    sendSaleCartItemsMsg(productList) {
        this.cartItemSubject.next(productList);
    }
    getCartItemAsProductMsg() {
        return this.cartItemSubject.asObservable();
    }
    sendWishlistItemsMsg(wishlist) {
        this.wishItemSubject.next(wishlist);
    }
    getWishlisttemAsProductMsg() {
        return this.wishItemSubject.asObservable();
    }
};
MessengerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessengerService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api */ "./src/app/config/api.ts");






let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    getProducts() {
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_3__["productsUrl"]);
    }
    getSearchProducts(searchItem) {
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_3__["productsUrl"] + '/searchProducts' + '/' + searchItem);
    }
    getLaptops() {
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_3__["laptopsUrl"]);
    }
    getPrinters() {
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_3__["printersUrl"]);
    }
    getSaleProducts() {
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_3__["saleProductsUrl"]);
    }
    getSaleLaptops() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({});
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_3__["saleLaptopsUrl"]);
    }
    getSalePrinters() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({});
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_3__["salePrintersUrl"]);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/wishlist.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/wishlist.service.ts ***!
  \**********************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models_wish_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/wish-item */ "./src/app/models/wish-item.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config/api */ "./src/app/config/api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let WishlistService = class WishlistService {
    constructor(http) {
        this.http = http;
        this.wishlist = [];
        this.username = localStorage.getItem('authenticatedUser');
        this.password = localStorage.getItem('password');
    }
    checkInValidCustomer(customerId) {
        if (customerId == null || isNaN(customerId))
            return true;
        return false;
    }
    getWishlist(customerId) {
        if (this.checkInValidCustomer(customerId))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["empty"])();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["wishlistUrl"] + '/getWishlist' + '/' + customerId, { headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            return this.getWishProduct(data);
        }));
    }
    addToWishlist(customerId, wishItem) {
        if (this.checkInValidCustomer(customerId))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["empty"])();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["wishlistUrl"] + '/addWishProduct' + '/' + customerId, wishItem, { headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            return this.getWishProduct(data);
        }));
    }
    removeFromWishlist(customerId, wishItem) {
        if (this.checkInValidCustomer(customerId))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["empty"])();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["wishlistUrl"] + '/deleteWishProduct' + '/' + customerId, wishItem, { headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            if (data instanceof Array) {
                return data;
            }
            return this.getWishProduct(data);
        }));
    }
    getWishProduct(data) {
        let wishItems = [];
        if (data.length <= 0)
            return wishItems;
        let jo = JSON.parse(data);
        jo.forEach(element => {
            let wishItem = new src_app_models_wish_item__WEBPACK_IMPORTED_MODULE_1__["WishItem"]();
            if (element) {
                wishItem.wishProductId = element.wishProductId;
                wishItem.productId = element.mainProduct.productId;
                wishItem.productName = element.mainProduct.productName;
                wishItem.buyPrice = element.mainProduct.buyPrice;
                wishItems.push(wishItem);
            }
            this.wishlist = wishItems;
        });
        return wishItems;
    }
};
WishlistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WishlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    })
], WishlistService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\KamachoPC\Documents\Angular\AngularSpringShoppingDemo-Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map