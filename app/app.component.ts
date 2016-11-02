import { Component,OnInit,Input } from '@angular/core';
import {AppComponentService} from './appComponent.service'
import {Trend} from './trend/trend'

@Component({
  selector: 'my-app',
  template: `
<div>
<h2>Trend Dashboard</h2>
<div>
  <router-outlet></router-outlet>
</div>
</div>
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
