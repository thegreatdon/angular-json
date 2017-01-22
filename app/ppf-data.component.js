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
var ppf_data_service_1 = require('./ppf-data.service');
var PpfDataComponent = (function () {
    function PpfDataComponent(ppfDataService) {
        this.ppfDataService = ppfDataService;
    }
    PpfDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ppfDataService.getPpfData().subscribe(function (shows) { return _this.shows = shows; });
    };
    PpfDataComponent = __decorate([
        core_1.Component({
            selector: 'ppf-shows',
            templateUrl: 'app/ppf-data.component.html'
        }), 
        __metadata('design:paramtypes', [ppf_data_service_1.PpfDataService])
    ], PpfDataComponent);
    return PpfDataComponent;
}());
exports.PpfDataComponent = PpfDataComponent;
//# sourceMappingURL=ppf-data.component.js.map