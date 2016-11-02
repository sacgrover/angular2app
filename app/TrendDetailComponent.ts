import {Component,OnInit,OnDestroy,Input} from '@angular/core';
import {Trend} from './trend/trend';
import {TrendService} from './trend/trend.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'trend-detail',
    template: `<div class="container"><div class="row"><div class="col-md-4">
      <h2> Trend Details </h2>
      <strong>Trend id:</strong> {{myTrend?.id}}<br/>
      <strong>Trend Name:</strong> {{myTrend?.name}}<br/>
      <strong>Trend Caption:</strong> {{myTrend?.caption}}<br/>
      <strong>Trend Likes:</strong> {{myTrend?.likes}}<br/>
      <strong>Trend Created Date:</strong> {{myTrend?.dateCreated|date}}<br/><br/><a class="btn btn-success" (click)="goBack()">Go Back</a></div>
      <div class="col-md-4"><h2> Update Trend </h2>
      <strong>Trend id:</strong> {{myTrend?.id}}<br/>
      <strong>Trend Name:</strong> <input type="text" #name [(ngModel)]="myTrend.name" /><br/>
      <strong>Trend Caption:</strong>  <textarea  #caption [(ngModel)]="myTrend.caption" rows="4" cols="50">
        </textarea><br/>
      <strong>Trend Likes:</strong> {{myTrend?.likes}}<br/>
      <strong>Trend Created Date:</strong> {{myTrend?.dateCreated|date}}<br/><br/>
      <a class="btn btn-success" (click)="goUpdate(myTrend)">Update</a>
      </div></div>

   </div>
    `,
    providers:[TrendService]
})
export class TrendDetailComponent implements OnInit{
@Input() myTrend:any;
constructor(private trendService:TrendService,private route: ActivatedRoute,private location: Location){
    this.myTrend = new Trend({});
}

ngOnInit():void{
this.route.params.forEach((params: Params) => {
   let id = +params['id'];
   console.log(id)
   if(id){
  let trend= this.trendService.getTrend(id).then(newtrend=> this.myTrend=newtrend);
     }

 });
}

goBack(){
this.location.back()
}
    goUpdate(trend){
        console.log(trend);
        this.trendService.likeTrend(trend);
        this.location.back()
    }
}
