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
var childComponent_1 = require('./childComponent');
var AppComponent = (function () {
    function AppComponent(_AppComponentService) {
        this._AppComponentService = _AppComponentService;
        this.object = { name: "Komal Jain" };
        this.message = this._AppComponentService.welcomeMessage;
        this.title = this._AppComponentService.title;
        this.date = this._AppComponentService.currentTime;
        this.trends = _AppComponentService.getMockedTrends();
    }
    AppComponent.prototype.changeData = function ($event) {
        this.message = $event.target.value;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "message", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "Helloo Everyone...!!!\n<br/>\n<span>message -----   {{message}}</span>\n<br/>\n<span>{{title}}</span>\n<span>{{date}}</span>\n<ul>\n<li *ngFor=\"let trend of trends | angularTrend\">\n{{trend.name}}\n</li>\n</ul>\n\n<input [(ngModel)]=\"object.name\" />\n\n<child-component [title]=\"message\"></child-component>\n  ",
            directives: [childComponent_1.ChildComponent],
            providers: [appComponent_service_1.AppComponentService]
        }), 
        __metadata('design:paramtypes', [appComponent_service_1.AppComponentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map