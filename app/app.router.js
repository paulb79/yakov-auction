"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_1 = require("./components/home/home");
var product_detail_1 = require("./components/product-detail/product-detail");
var product_description_1 = require("./components/product-description/product-description");
var seller_info_1 = require("./components/seller-info/seller-info");
var routes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'product/:id', component: product_detail_1.ProductDetailComponent,
        children: [
            { path: '', component: product_description_1.ProductDescriptionComponent },
            { path: 'seller/:id', component: seller_info_1.SellerInfoComponent }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.router.js.map