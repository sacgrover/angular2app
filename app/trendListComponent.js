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
        var _this = this;
        this.trendService = trendService;
        this._router = _router;
        this.route = route;
        this.location = location;
        this.trendService.getTrends().then(function (trends) {
            trends.sort(function (a, b) {
                var adate = new Date(a["dateCreated"]);
                var bdate = new Date(b["dateCreated"]);
                if (adate.getTime() < bdate.getTime())
                    return 1;
                if (bdate.getTime() < adate.getTime())
                    return -1;
                return 0;
            });
            _this.trends = trends;
        });
    }
    TrendListComponent.prototype.showTrend = function (trend) {
        this._router.navigate(['/trend', trend.id]);
    };
    TrendListComponent.prototype.deleteTrend = function (trend) {
        var _this = this;
        this.trendService.deleteTrend(trend.id);
        this.trendService.getTrends().then(function (trends) {
            trends.sort(function (a, b) {
                var adate = new Date(a["dateCreated"]);
                var bdate = new Date(b["dateCreated"]);
                if (adate.getTime() < bdate.getTime())
                    return 1;
                if (bdate.getTime() < adate.getTime())
                    return -1;
                return 0;
            });
            _this.trends = trends;
        });
    };
    TrendListComponent.prototype.likeTrend = function (trend) {
        var _this = this;
        trend.likes++;
        this.trendService.likeTrend(trend);
        this.trendService.getTrends().then(function (trends) {
            trends.sort(function (a, b) {
                var adate = new Date(a["dateCreated"]);
                var bdate = new Date(b["dateCreated"]);
                if (adate.getTime() < bdate.getTime())
                    return 1;
                if (bdate.getTime() < adate.getTime())
                    return -1;
                return 0;
            });
            _this.trends = trends;
        });
    };
    TrendListComponent = __decorate([
        core_1.Component({
            selector: 'trend-list',
            template: "\n   <div class=\"list-group col-md-6\"><hr/><div style=\"clear:both\"></div><h4>Popular Trends</h4><input #tags class=\"form-control\"  (keyup)=\"0\" type=\"hidden\" value=\"10\">\n                <span class=\"tag tag-pill tag-primary\" *ngFor=\"let tag of trends \">{{tag.name}}</span>\n                <a routerLink=\"/addTrend\" routerLinkActive=\"active\" class=\"btn btn-success pull-right\" href=\"javascript:void(0);\">Add Trend</a><hr/></div>\n<div class=\"row\"><div style=\"clear:both\"></div><div class=\"col-md-3\">Search By Name:<input  class=\"form-control\"  #name (keyup)=\"0\" placeholder=\"Name\"  type=\"text\"/></div>\n<div class=\"col-md-3\" >Filter By DateCreated:<div class='input-group date' id='datetimepicker1'>\n                    <input type='text' class=\"form-control\"  #date (keyup)=\"0\" placeholder=\"2013/10/03\"  type=\"text\"/>\n                    <span class=\"input-group-addon\">\n                        <span class=\"glyphicon glyphicon-calendar\"></span>\n                    </span>\n                </div></div></div>\n\n  <div><hr width=\"50%\" class=\"pull-left\" /><br style=\"clear:both\"/><h4>Trends list</h4></div>\n  <ul class=\"list-group col-md-6\">\n  <li style=\"min-height: 50px;\" class=\"list-group-item\" *ngFor=\"let trend of trends |angularTrend:name.value| dateTrend:date.value \">{{trend.name}} ({{trend.dateCreated|date}})\n  <a (click)=\"showTrend(trend)\"  class=\"pull-right\"><span class=\"btn btn-default glyphicon glyphicon-pencil\"></span></a>\n  <a (click)=\"deleteTrend(trend)\"  class=\"pull-right\"><span class=\"btn btn-default glyphicon glyphicon-trash\"></span></a>\n  <a (click)=\"likeTrend(trend)\"   class=\"pull-right\"><span class=\"btn btn-default glyphicon glyphicon-thumbs-up\"></span></a>\n  <span class=\"pull-right badge\" style=\"padding: 9px; margin: 3px; color: green; background-color: wheat;\">{{trend.likes}}&nbsp;</span></li>\n</ul>\n  ",
            providers: [trend_service_1.TrendService]
        }), 
        __metadata('design:paramtypes', [trend_service_1.TrendService, router_1.Router, router_1.ActivatedRoute, common_1.Location])
    ], TrendListComponent);
    return TrendListComponent;
}());
exports.TrendListComponent = TrendListComponent;
//# sourceMappingURL=trendListComponent.js.map