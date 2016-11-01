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
var AddTrendComponent = (function () {
    function AddTrendComponent(trendService, route, location) {
        this.trendService = trendService;
        this.route = route;
        this.location = location;
        this.myTrend = new trend_1.Trend({});
    }
    AddTrendComponent.prototype.ngOnInit = function () {
    };
    AddTrendComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddTrendComponent.prototype.goCreate = function (trend) {
        this.myTrend.id = trend_service_1.TrendService.newId++;
        this.myTrend.likes = 0;
        this.myTrend.createdBy = "Sachin Grover";
        this.myTrend.dateCreated = new Date();
        console.log(trend);
        this.trendService.createTrend(trend);
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddTrendComponent.prototype, "myTrend", void 0);
    AddTrendComponent = __decorate([
        core_1.Component({
            selector: 'add-trend',
            template: "<div class=\"container\"><div class=\"row\">\n      <div class=\"col-md-4\"><h2> Create Trend </h2>\n      <strong>Trend id:</strong> Will be Assigned<br/>\n      <strong>Trend Name:</strong> <input type=\"text\" #name [(ngModel)]=\"myTrend.name\" /><br/>\n      <strong>Trend Caption:</strong>  <textarea  #caption [(ngModel)]=\"myTrend.caption\" rows=\"4\" cols=\"50\">\n        </textarea><br/>\n      <a class=\"btn btn-success\" (click)=\"goBack()\">Go Back</a>\n      <a class=\"btn btn-success\" (click)=\"goCreate(myTrend)\">Update</a>\n      </div></div>\n\n   </div>\n    ",
            providers: [trend_service_1.TrendService]
        }), 
        __metadata('design:paramtypes', [trend_service_1.TrendService, router_1.ActivatedRoute, common_1.Location])
    ], AddTrendComponent);
    return AddTrendComponent;
}());
exports.AddTrendComponent = AddTrendComponent;
//# sourceMappingURL=AddTrendComponent.js.map