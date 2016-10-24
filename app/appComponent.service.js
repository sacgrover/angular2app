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
var AppComponentService = (function () {
    function AppComponentService() {
        this.welcomeMessage = "Welcome to angular session !!";
        this.title = "Angular 2";
        this.currentTime = new Date();
    }
    AppComponentService.prototype.getMockedTrends = function () {
        return [
            new trend_1.Trend({ name: "ng2", caption: "Hey wassup angular2 evanglist !!", likes: 0, createdBy: "Komal Jain" }),
            new trend_1.Trend({ name: 'mongodb', caption: "Hey wassup mongodb evanglist !!", likes: 0, createdBy: "Komal Jain" }),
            new trend_1.Trend({ name: 'angularJS', caption: "Hey wassup NAular evanglist !!", likes: 0, createdBy: "Komal Jain" }),
            new trend_1.Trend({ name: 'React', caption: "Hey wassup react evanglist !!", likes: 0, createdBy: "Komal Jain" })
        ];
    };
    AppComponentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppComponentService);
    return AppComponentService;
}());
exports.AppComponentService = AppComponentService;
//# sourceMappingURL=appComponent.service.js.map