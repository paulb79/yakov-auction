"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var application_1 = require("./components/application/application");
var home_1 = require("./components/home/home");
var carousel_1 = require("./components/carousel/carousel");
var footer_1 = require("./components/footer/footer");
var navbar_1 = require("./components/navbar/navbar");
var product_item_1 = require("./components/product-item/product-item");
var product_detail_1 = require("./components/product-detail/product-detail");
var product_description_1 = require("./components/product-description/product-description");
var seller_info_1 = require("./components/seller-info/seller-info");
var search_1 = require("./components/search/search");
var stars_1 = require("./components/stars/stars");
var luxury_module_1 = require("./components/luxury/luxury.module");
var product_service_1 = require("./services/product-service");
var app_router_1 = require("./app.router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            luxury_module_1.LuxuryModule,
            app_router_1.AppRoutingModule
        ],
        declarations: [
            application_1.AppComponent,
            home_1.HomeComponent,
            carousel_1.CarouselComponent,
            footer_1.FooterComponent,
            navbar_1.NavbarComponent,
            product_item_1.ProductItemComponent,
            product_detail_1.ProductDetailComponent,
            product_description_1.ProductDescriptionComponent,
            seller_info_1.SellerInfoComponent,
            search_1.SearchComponent,
            stars_1.StarsComponent
        ],
        providers: [
            product_service_1.ProductService
        ],
        bootstrap: [
            application_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map