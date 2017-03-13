"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var luxury_component_1 = require("./luxury.component");
var LuxuryModule = (function () {
    function LuxuryModule() {
    }
    return LuxuryModule;
}());
LuxuryModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                { path: 'luxury', component: luxury_component_1.LuxuryComponent }
            ])
        ],
        declarations: [luxury_component_1.LuxuryComponent]
    })
], LuxuryModule);
exports.LuxuryModule = LuxuryModule;
//# sourceMappingURL=luxury.module.js.map