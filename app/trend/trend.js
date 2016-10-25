"use strict";
var Trend = (function () {
    function Trend(trend) {
        this.id = trend.id;
        this.name = trend.name;
        this.caption = trend.caption;
        this.likes = 0;
        this.createdBy = trend.createdBy;
        this.dateCreated = new Date();
    }
    return Trend;
}());
exports.Trend = Trend;
//# sourceMappingURL=trend.js.map