import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Trend} from './trend'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let trends = [
      new Trend({name:"ng2",caption:"Hey wassup angular2 evanglist !!",likes:0,createdBy:"Komal Jain"}),
      new Trend({name:'mongodb',caption:"Hey wassup mongodb evanglist !!",likes:0,createdBy:"Komal Jain"}),
      new Trend({name:'angularJS',caption:"Hey wassup NAular evanglist !!",likes:0,createdBy:"Komal Jain"}),
      new Trend({name:'React',caption:"Hey wassup react evanglist !!",likes:0,createdBy:"Komal Jain"})
    ]
    return {trends};
  };
}
