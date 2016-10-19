"use strict";
var trend_1 = require('./trend');
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var trends = [
            new trend_1.Trend({ name: "ng2", caption: "Hey wassup angular2 evanglist !!", likes: 0, createdBy: "Komal Jain" }),
            new trend_1.Trend({ name: 'mongodb', caption: "Hey wassup mongodb evanglist !!", likes: 0, createdBy: "Komal Jain" }),
            new trend_1.Trend({ name: 'angularJS', caption: "Hey wassup NAular evanglist !!", likes: 0, createdBy: "Komal Jain" }),
            new trend_1.Trend({ name: 'React', caption: "Hey wassup react evanglist !!", likes: 0, createdBy: "Komal Jain" })
        ];
        return { trends: trends };
    };
    ;
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-trend-data.service.js.map