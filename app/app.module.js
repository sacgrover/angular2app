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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var myCustom_pipe_1 = require('./myCustom.pipe');
var trendListComponent_1 = require('./trendListComponent');
var TrendDetailComponent_1 = require('./TrendDetailComponent');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_trend_data_service_1 = require('./trend/in-memory-trend-data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/trendList',
                        pathMatch: 'full'
                    },
                    { path: 'trendList', component: trendListComponent_1.TrendListComponent },
                    { path: 'trend', component: TrendDetailComponent_1.TrendDetailComponent },
                    { path: 'trend/:id', component: TrendDetailComponent_1.TrendDetailComponent }
                ]),
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_trend_data_service_1.InMemoryDataService),
            ],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
            declarations: [app_component_1.AppComponent, myCustom_pipe_1.AngularTrendPipe, trendListComponent_1.TrendListComponent, TrendDetailComponent_1.TrendDetailComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map