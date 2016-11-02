import {Component,Input} from '@angular/core';
import {Trend} from './trend/trend';
import {TrendService} from './trend/trend.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'add-trend',
    template: `<div class="container"><div class="row">
      <div class="col-md-4"><h2> Create Trend </h2>
      <strong>Trend id:</strong> Will be Assigned<br/>
      <strong>Trend Name:</strong> <input type="text" #name [(ngModel)]="myTrend.name" /><br/>
      <strong>Trend Caption:</strong>  <textarea  #caption [(ngModel)]="myTrend.caption" rows="4" cols="50">
        </textarea><br/>
      <a class="btn btn-success" (click)="goBack()">Go Back</a>
      <a class="btn btn-success" (click)="goCreate(myTrend)">Update</a>
      </div></div>

   </div>
    `,
    providers:[TrendService]
})
export class AddTrendComponent{
@Input() myTrend:any;
constructor(private trendService:TrendService,private route: ActivatedRoute,private location: Location){
    this.myTrend = new Trend({});
}

ngOnInit():void{
}

goBack(){
this.location.back()
}
 goCreate(trend){
        this.myTrend.id=TrendService.newId++;
        this.myTrend.likes=0;
        this.myTrend.createdBy="Sachin Grover";
        this.myTrend.dateCreated=new Date();
        console.log(trend);
        this.trendService.createTrend(trend);
        this.location.back()
    }
}
