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
var TrendListComponent = (function () {
    function TrendListComponent(trendService, _router, route, location) {
        this.trendService = trendService;
        this._router = _router;
        this.route = route;
        this.location = location;
    }
    ;
    TrendListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trendService.getTrends().then(function (trends) { return _this.trends = trends; });
        console.log(this.trends);
    };
    TrendListComponent.prototype.showTrend = function (trend) {
        this._router.navigate(['/trend', trend.id]);
    };
    TrendListComponent = __decorate([
        core_1.Component({
            selector: 'trend-list',
            template: "<div>Trends list</div>\n<ul>\n<li *ngFor=\"let trend of trends\">\n<a (click)=\"showTrend(trend)\">{{trend.name}}</a>\n</li>\n</ul>\n  ",
            providers: [trend_service_1.TrendService]
        }), 
        __metadata('design:paramtypes', [trend_service_1.TrendService, router_1.Router, router_1.ActivatedRoute, common_1.Location])
    ], TrendListComponent);
    return TrendListComponent;
}());
exports.TrendListComponent = TrendListComponent;
//# sourceMappingURL=trendListComponent.js.map