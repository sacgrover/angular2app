import {Component,OnInit,OnDestroy,Input} from '@angular/core';
import {Trend} from './trend/trend';
import {TrendService} from './trend/trend.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'trend-detail',
    template: `<div class="container">
      <h2> Trend Details </h2>
      {{updateTrend.name}}
      <a (click)="goBack()">Go Back</a>
   </div>
    `,
    providers:[TrendService]
})
export class TrendDetailComponent implements OnInit{
updateTrend:Trend
constructor(private trendService:TrendService,private route: ActivatedRoute,private location: Location){}

ngOnInit():void{
this.route.params.forEach((params: Params) => {
   let id = +params['id'];
   console.log(id)
   if(id){
  let trend= this.trendService.getTrend(id)
     .then(_trend =>this.updateTrend= _trend)
     ;
     this.updateTrend=trend;
console.log(this.updateTrend)
     }

 });
}

goBack(){
this.location.back()
}

}
