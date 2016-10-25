import { Component,OnInit,Input} from '@angular/core';
import {Trend} from './trend/trend';
import {TrendService} from './trend/trend.service';
import { ActivatedRoute, Params,Router }   from '@angular/router';
import { Location }                 from '@angular/common';



@Component({
  selector: 'trend-list',
  template: `<div>Trends list</div>
<ul>
<li *ngFor="let trend of trends">
<a (click)="showTrend(trend)">{{trend.name}}</a>
</li>
</ul>
  `,
  providers:[TrendService]
  })
  export class TrendListComponent{
  trends:Trend[];
  id:number;
  constructor(private trendService:TrendService,private _router:Router,private route: ActivatedRoute,private location: Location){};

  ngOnInit(): void {
    this.trendService.getTrends().then(trends=> this.trends=trends);
    console.log(this.trends)
  }

  showTrend(trend:Trend){
  this._router.navigate(['/trend',trend.id])
  }
  }
