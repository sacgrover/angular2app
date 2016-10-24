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
<li *ngFor="let trend of trends | angularTrend">
{{trend.name}}
</li>
</ul>


<child-component [title]="message"></child-component>
  `,
  directives:[ChildComponent]
  providers:[AppComponentService]
})
export class AppComponent {
message:string;
title:string;
date:Date;
trends:Trend[];
person:any={name:"Komal Jain"};

changeData($event:any){
this.message=$event.target.value;
}

constructor(private _AppComponentService:AppComponentService){
this.message=this._AppComponentService.welcomeMessage;
this.title=this._AppComponentService.title;
this.date=this._AppComponentService.currentTime;
this.trends=_AppComponentService.getMockedTrends();
}
}
