import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Trend} from './trend'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let trends = [
      new Trend({id:1,name:"ng2",caption:"Hey wassup angular2 evanglist !!",likes:0,createdBy:"Komal Jain"}),
      new Trend({id:2,name:'mongodb',caption:"Hey wassup mongodb evanglist !!",likes:0,createdBy:"Komal Jain"}),
      new Trend({id:3,name:'angularJS',caption:"Hey wassup NAular evanglist !!",likes:0,createdBy:"Komal Jain"}),
      new Trend({id:4,name:'React',caption:"Hey wassup react evanglist !!",likes:0,createdBy:"Komal Jain"})
    ]
    return {trends};
  };
}
