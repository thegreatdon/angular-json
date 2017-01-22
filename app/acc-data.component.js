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
var acc_data_service_1 = require('./acc-data.service');
var AccDataComponent = (function () {
    function AccDataComponent(accDataService) {
        this.accDataService = accDataService;
    }
    AccDataComponent.prototype.ngOnInit = function () {
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
                _this.member = accdat.member;
            }
        });
    };
    AccDataComponent = __decorate([
        core_1.Component({
            selector: 'acc-data',
            templateUrl: 'app/acc-data.component.html',
            styleUrls: ['app/acc-data.css']
        }), 
        __metadata('design:paramtypes', [acc_data_service_1.AccDataService])
    ], AccDataComponent);
    return AccDataComponent;
}());
exports.AccDataComponent = AccDataComponent;
//# sourceMappingURL=acc-data.component.js.map