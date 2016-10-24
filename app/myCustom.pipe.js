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
var AngularTrendPipe = (function () {
    function AngularTrendPipe() {
    }
    AngularTrendPipe.prototype.transform = function (allTrends) {
        return allTrends.filter(function (trend) { return trend.name.indexOf('ng') > -1; });
    };
    AngularTrendPipe = __decorate([
        core_1.Pipe({ name: 'angularTrend' }), 
        __metadata('design:paramtypes', [])
    ], AngularTrendPipe);
    return AngularTrendPipe;
}());
exports.AngularTrendPipe = AngularTrendPipe;
//# sourceMappingURL=myCustom.pipe.js.map