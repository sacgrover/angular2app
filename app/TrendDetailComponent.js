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
var trend_1 = require('./trend/trend');
var trend_service_1 = require('./trend/trend.service');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var TrendDetailComponent = (function () {
    function TrendDetailComponent(trendService, route, location) {
        this.trendService = trendService;
        this.route = route;
        this.location = location;
        this.myTrend = new trend_1.Trend({});
    }
    TrendDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            console.log(id);
            if (id) {
                var trend = _this.trendService.getTrend(id).then(function (newtrend) { return _this.myTrend = newtrend; });
            }
        });
    };
    TrendDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TrendDetailComponent.prototype.goUpdate = function (trend) {
        console.log(trend);
        this.trendService.likeTrend(trend);
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TrendDetailComponent.prototype, "myTrend", void 0);
    TrendDetailComponent = __decorate([
        core_1.Component({
            selector: 'trend-detail',
            template: "<div class=\"container\"><div class=\"row\"><div class=\"col-md-4\">\n      <h2> Trend Details </h2>\n      <strong>Trend id:</strong> {{myTrend?.id}}<br/>\n      <strong>Trend Name:</strong> {{myTrend?.name}}<br/>\n      <strong>Trend Caption:</strong> {{myTrend?.caption}}<br/>\n      <strong>Trend Likes:</strong> {{myTrend?.likes}}<br/>\n      <strong>Trend Created Date:</strong> {{myTrend?.dateCreated|date}}<br/><br/><a class=\"btn btn-success\" (click)=\"goBack()\">Go Back</a></div>\n      <div class=\"col-md-4\"><h2> Update Trend </h2>\n      <strong>Trend id:</strong> {{myTrend?.id}}<br/>\n      <strong>Trend Name:</strong> <input type=\"text\" #name [(ngModel)]=\"myTrend.name\" /><br/>\n      <strong>Trend Caption:</strong>  <textarea  #caption [(ngModel)]=\"myTrend.caption\" rows=\"4\" cols=\"50\">\n        </textarea><br/>\n      <strong>Trend Likes:</strong> {{myTrend?.likes}}<br/>\n      <strong>Trend Created Date:</strong> {{myTrend?.dateCreated|date}}<br/><br/>\n      <a class=\"btn btn-success\" (click)=\"goUpdate(myTrend)\">Update</a>\n      </div></div>\n\n   </div>\n    ",
            providers: [trend_service_1.TrendService]
        }), 
        __metadata('design:paramtypes', [trend_service_1.TrendService, router_1.ActivatedRoute, common_1.Location])
    ], TrendDetailComponent);
    return TrendDetailComponent;
}());
exports.TrendDetailComponent = TrendDetailComponent;
//# sourceMappingURL=TrendDetailComponent.js.map