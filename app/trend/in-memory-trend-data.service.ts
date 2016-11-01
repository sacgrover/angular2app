import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Trend} from './trend'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   let date1 =  new Date("2013/10/03");
   let date2 = new Date("2011/11/29");
   let date3 = new Date("2014/08/25");
   let date4 = new Date("2010/10/20");
    let trends = [
      new Trend({id:1,name:"ng2",caption:"Hey wassup angular2 evanglist !!",likes:5,createdBy:"Komal Jain",dateCreated:date1}),
      new Trend({id:2,name:'mongodb',caption:"Hey wassup mongodb evanglist !!",likes:16,createdBy:"Komal Jain",dateCreated:date2}),
      new Trend({id:3,name:'angularJS',caption:"Hey wassup NAular evanglist !!",likes:7,createdBy:"Komal Jain",dateCreated:date3}),
      new Trend({id:4,name:'React',caption:"Hey wassup react evanglist !!",likes:9,createdBy:"Komal Jain",dateCreated:date4})
    ]
    return {trends};
  };
}
