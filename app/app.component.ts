import { Component,OnInit,Input } from '@angular/core';
import {AppComponentService} from './appComponent.service'
import {Trend} from './trend/trend'
import {ChildComponent} from './childComponent'

@Component({
  selector: 'my-app',
  template: `Helloo Everyone...!!!
<br/>
<span>message -----   {{message}}</span>
<br/>
<span>{{title}}</span>
<span>{{date|date:'fullDate'}}</span>
<ul>
<li *ngFor="let trend of trends | angularTrend:'act'">
{{trend.name}}
</li>
</ul>
<input [(ngModel)]="person.name"/>
{{person.name}}
<child-component [title]="message"></child-component>
  `,
  providers:[AppComponentService]
})
export class AppComponent implements OnInit {
message:string;
title:string;
date:Date;
trends:Trend[];
person:any={name:'Komal Jain'};
changeData($event:any){
this.message=$event.target.value;
}

constructor(private _AppComponentService:AppComponentService){
console.log("constructing your component....")

}

ngOnInit(){
console.log("Initializing your component....");
this.message=this._AppComponentService.welcomeMessage;
this.title=this._AppComponentService.title;
this.date=this._AppComponentService.currentTime;
this.trends=this._AppComponentService.getMockedTrends();
}
}
