import { Component,OnInit } from '@angular/core';
import {TrendService} from './trend/trend.service';
import {Trend} from './trend/trend'

@Component({
  selector: 'my-app',
  template: `    <ul>
      <li *ngFor="let trend of trendList">
        {{trend.caption}}
      </li>
    </ul>`,
  providers:[TrendService]
})
export class AppComponent implements OnInit {
  trendList:Trend[];

  constructor(private _trendService:TrendService){}
  ngOnInit(){
    this._trendService.getTrends().then(trends=> this.trendList=trends)
  }
}
