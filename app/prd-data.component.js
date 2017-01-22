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
var core_1 = require('@angular/core');
var prd_data_service_1 = require('./prd-data.service');
// import {Opportunity} from './opportunity';
// import{OppDataService} from './opp-data.service';
var PrdDataComponent = (function () {
    function PrdDataComponent(prdDataService) {
        this.prdDataService = prdDataService;
    }
    Object.defineProperty(PrdDataComponent.prototype, "getMemberStatus", {
        set: function (member) {
            this.member = member;
        },
        enumerable: true,
        configurable: true
    });
    PrdDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prdDataService.getPrdData().subscribe(function (products) {
            _this.products = products;
            //this.member = false;
            _this.adminfee = 2500;
            var subtotal = 0;
            for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                var show = _a[_i];
                if (show.include == true) {
                    subtotal += show.price;
                }
            }
            _this.subtotal = subtotal;
            if (_this.member == false) {
                _this.totalprice = _this.subtotal + 2500;
            }
            else {
                _this.totalprice = _this.subtotal;
            }
        });
    };
    PrdDataComponent.prototype.clickShow = function (show) {
        if (show.include == true) {
            show.include = false;
            this.subtotal -= show.price;
        }
        else {
            show.include = true;
            this.subtotal += show.price;
        }
        if (this.member == false) {
            this.totalprice = this.subtotal + 2500;
        }
        else {
            this.totalprice = this.subtotal;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], PrdDataComponent.prototype, "getMemberStatus", null);
    PrdDataComponent = __decorate([
        core_1.Component({
            selector: 'prd-data',
            templateUrl: 'app/prd-data.component.html',
            styleUrls: ['app/prd-data.component.css']
        }), 
        __metadata('design:paramtypes', [prd_data_service_1.PrdDataService])
    ], PrdDataComponent);
    return PrdDataComponent;
}());
exports.PrdDataComponent = PrdDataComponent;
//# sourceMappingURL=prd-data.component.js.map