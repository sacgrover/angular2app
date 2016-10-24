import {Injectable} from 'angular2/core'
import {Trend} from './trend/trend'
@Injectable()

export class AppComponentService{
welcomeMessage:string="Welcome to angular session !!";
title:string="Angular 2";
currentTime:Date=new Date();
getMockedTrends():Trend[]{
return [
  new Trend({name:"ng2",caption:"Hey wassup angular2 evanglist !!",likes:0,createdBy:"Komal Jain"}),
  new Trend({name:'mongodb',caption:"Hey wassup mongodb evanglist !!",likes:0,createdBy:"Komal Jain"}),
  new Trend({name:'angularJS',caption:"Hey wassup NAular evanglist !!",likes:0,createdBy:"Komal Jain"}),
  new Trend({name:'React',caption:"Hey wassup react evanglist !!",likes:0,createdBy:"Komal Jain"})
]
}
}
