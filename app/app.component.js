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
var appComponent_service_1 = require('./appComponent.service');
var AppComponent = (function () {
    function AppComponent(_AppComponentService) {
        this._AppComponentService = _AppComponentService;
        this.person = { name: 'Komal Jain' };
        console.log("constructing your component....");
    }
    AppComponent.prototype.changeData = function ($event) {
        this.message = $event.target.value;
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log("Initializing your component....");
        this.message = this._AppComponentService.welcomeMessage;
        this.title = this._AppComponentService.title;
        this.date = this._AppComponentService.currentTime;
        this.trends = this._AppComponentService.getMockedTrends();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<div>\n<h1>Whats in your mind today ????</h1>\n<div>\n<a routerLink=\"/trendList\" routerLinkActive=\"active\">Trends</a>\n<a routerLink=\"/trend\" routerLinkActive=\"active\">trend Detail</a>\n  <router-outlet></router-outlet>\n</div>\n</div>\n  ",
            providers: [appComponent_service_1.AppComponentService]
        }), 
        __metadata('design:paramtypes', [appComponent_service_1.AppComponentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map