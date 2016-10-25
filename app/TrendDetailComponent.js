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
var trend_service_1 = require('./trend/trend.service');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var TrendDetailComponent = (function () {
    function TrendDetailComponent(trendService, route, location) {
        this.trendService = trendService;
        this.route = route;
        this.location = location;
    }
    TrendDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            console.log(id);
            if (id) {
                var trend = _this.trendService.getTrend(id)
                    .then(function (_trend) { return _this.updateTrend = _trend; });
                _this.updateTrend = trend;
                console.log(_this.updateTrend);
            }
        });
    };
    TrendDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TrendDetailComponent = __decorate([
        core_1.Component({
            selector: 'trend-detail',
            template: "<div class=\"container\">\n      <h2> Trend Details </h2>\n      {{updateTrend.name}}\n      <a (click)=\"goBack()\">Go Back</a>\n   </div>\n    ",
            providers: [trend_service_1.TrendService]
        }), 
        __metadata('design:paramtypes', [trend_service_1.TrendService, router_1.ActivatedRoute, common_1.Location])
    ], TrendDetailComponent);
    return TrendDetailComponent;
}());
exports.TrendDetailComponent = TrendDetailComponent;
//# sourceMappingURL=TrendDetailComponent.js.map