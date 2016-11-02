import { Component,OnInit,Input } from '@angular/core';
import {AppComponentService} from './appComponent.service'
import {Trend} from './trend/trend'

@Component({
  selector: 'my-app',
  template: `
<div class="row">
<h2 style="text-align: center;color: yellowgreen;">Trend Dashboard</h2>
<div class="col-md-12 col-md-offset-3">
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
