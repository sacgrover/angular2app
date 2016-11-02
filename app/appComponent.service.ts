import {Injectable} from '@angular/core'
import {Trend} from './trend/trend'
@Injectable()

export class AppComponentService{
welcomeMessage:string="Welcome to angular session !!";
title:string="Angular 2";
currentTime:Date=new Date();
getMockedTrends():Trend[]{
return [
]
}
}
