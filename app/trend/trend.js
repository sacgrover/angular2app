"use strict";
var Trend = (function () {
    function Trend(trend) {
        this.id = trend.id;
        this.name = trend.name;
        this.caption = trend.caption;
        this.likes = trend.likes;
        this.createdBy = trend.createdBy;
        this.dateCreated = trend.dateCreated;
    }
    return Trend;
}());
exports.Trend = Trend;
//# sourceMappingURL=trend.js.map