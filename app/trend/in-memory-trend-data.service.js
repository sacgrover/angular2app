"use strict";
var trend_1 = require('./trend');
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var date1 = new Date("2013/10/03");
        var date2 = new Date("2011/11/29");
        var date3 = new Date("2014/08/25");
        var date4 = new Date("2010/10/20");
        var trends = [
            new trend_1.Trend({ id: 1, name: "ng2", caption: "Hey wassup angular2 evanglist !!", likes: 5, createdBy: "Komal Jain", dateCreated: date1 }),
            new trend_1.Trend({ id: 2, name: 'mongodb', caption: "Hey wassup mongodb evanglist !!", likes: 16, createdBy: "Komal Jain", dateCreated: date2 }),
            new trend_1.Trend({ id: 3, name: 'angularJS', caption: "Hey wassup NAular evanglist !!", likes: 7, createdBy: "Komal Jain", dateCreated: date3 }),
            new trend_1.Trend({ id: 4, name: 'React', caption: "Hey wassup react evanglist !!", likes: 9, createdBy: "Komal Jain", dateCreated: date4 })
        ];
        return { trends: trends };
    };
    ;
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-trend-data.service.js.map