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
// import {AccDataComponent} from './acc-data.component';
var acc_data_service_1 = require('./acc-data.service');
var AppComponent = (function () {
    // shareMember:boolean;
    function AppComponent(accDataService) {
        this.accDataService = accDataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accDataService.getAccData().subscribe(function (account) {
            _this.account = account;
            for (var _i = 0, _a = _this.account; _i < _a.length; _i++) {
                var accdat = _a[_i];
                if (accdat.member == true) {
                    _this.memberstatus = "Member Station";
                }
                else {
                    _this.memberstatus = "Non-Member Station";
                }
                // this.shareMember = accdat.member;
                _this.member = accdat.member;
                _this.call = accdat.call;
                _this.state = accdat.state;
                _this.city = accdat.city;
                _this.zip = accdat.zip;
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // templateUrl:'app/app.component.html'
            template: "\n  <div id=\"oppdiv\">\n    <div class=\"objdiv\">\n      <div id=\"acc-spn\">\n      {{call}} [{{memberstatus}}] | {{city}}, {{state}} {{zip}}\n      </div>\n       <!-- <acc-data></acc-data> -->\n    </div>\n\n    <div class=\"objdiv\">\n        <opp-data></opp-data>\n    </div>\n\n    <div class=\"objdiv\">\n        <prd-data [getMemberStatus]=\"member\"></prd-data>\n    </div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [acc_data_service_1.AccDataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map