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
var opp_data_service_1 = require('./opp-data.service');
var OppDataComponent = (function () {
    function OppDataComponent(oppDataService) {
        this.oppDataService = oppDataService;
    }
    OppDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.oppDataService.getOppData().subscribe(function (opportunity) {
            _this.opportunity = opportunity;
            for (var _i = 0, _a = _this.opportunity; _i < _a.length; _i++) {
                var opp = _a[_i];
                _this.opptotfee = opp.totalprice;
                _this.oppadminfee = opp.adminfee;
            }
        });
    };
    OppDataComponent = __decorate([
        core_1.Component({
            selector: 'opp-data',
            template: "\n<span *ngFor = \"let oppdat of opportunity\">\n{{oppdat.name}} |status: {{oppdat.status}} | oppadminfee: {{oppadminfee | currency:'USD':true}} |totalfee: {{opptotfee | currency:'USD':true}}\n</span>"
        }), 
        __metadata('design:paramtypes', [opp_data_service_1.OppDataService])
    ], OppDataComponent);
    return OppDataComponent;
}());
exports.OppDataComponent = OppDataComponent;
//# sourceMappingURL=opp-data.component.js.map