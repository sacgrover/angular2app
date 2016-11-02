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
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, orderFields) {
        var orderType = 'DESC';
        if (orderFields) {
            orderType = orderFields;
        }
        return value;
        value.sort(function (a, b) {
            if (orderType === 'ASC') {
                var adate = new Date(a["dateCreated"]);
                var bdate = new Date(b["dateCreated"]);
                if (adate.getTime() < bdate.getTime())
                    return -1;
                if (bdate.getTime() < adate.getTime())
                    return 1;
                return 0;
            }
            else {
                var adate = new Date(a["dateCreated"]);
                var bdate = new Date(b["dateCreated"]);
                if (adate.getTime() < bdate.getTime())
                    return 1;
                if (bdate.getTime() < adate.getTime())
                    return -1;
                return 0;
            }
        });
        return value;
    };
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: "orderby"
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=orderBy.js.map