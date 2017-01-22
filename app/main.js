"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var app_component_1 = require('./app.component');
var acc_data_component_1 = require('./acc-data.component');
var acc_data_service_1 = require('./acc-data.service');
var opp_data_component_1 = require('./opp-data.component');
var opp_data_service_1 = require('./opp-data.service');
var prd_data_component_1 = require('./prd-data.component');
var prd_data_service_1 = require('./prd-data.service');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, acc_data_component_1.AccDataComponent, opp_data_component_1.OppDataComponent, prd_data_component_1.PrdDataComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [acc_data_service_1.AccDataService, opp_data_service_1.OppDataService, prd_data_service_1.PrdDataService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map