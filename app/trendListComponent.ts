import { Component,Input} from '@angular/core';
import {Trend} from './trend/trend';
import {TrendService} from './trend/trend.service';
import { ActivatedRoute, Params,Router }   from '@angular/router';
import { Location }                 from '@angular/common';



@Component({
  selector: 'trend-list',
  template: `
   <div class="list-group col-md-6"><hr/><div style="clear:both"></div><h4>Popular Trends</h4><input #tags class="form-control"  (keyup)="0" type="hidden" value="10">
                <span class="tag tag-pill tag-primary" *ngFor="let tag of trends | tagTrend : 'likes'">{{tag.name}}</span>
                <a routerLink="/addTrend" routerLinkActive="active" class="btn btn-success pull-right" href="javascript:void(0);">Add Trend</a><hr/></div>
<div class="row"><div style="clear:both"></div><div class="col-md-3">Search By Name:<input  class="form-control"  #name (keyup)="0" placeholder="Name"  type="text"/></div>
<div class="col-md-3" >Filter By DateCreated:<div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control"  #date (keyup)="0" placeholder="2013/10/03"  type="text"/>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div></div></div>

  <div><hr width="50%" class="pull-left" /><br style="clear:both"/><h4>Trends list</h4></div>
  <ul class="list-group col-md-6">
  <li style="min-height: 50px;" class="list-group-item" *ngFor="let trend of trends |angularTrend:name.value| dateTrend:date.value ">{{trend.name}} ({{trend.dateCreated|date}})
  <a (click)="showTrend(trend)"  class="pull-right"><span class="btn btn-default glyphicon glyphicon-pencil"></span></a>
  <a (click)="deleteTrend(trend)"  class="pull-right"><span class="btn btn-default glyphicon glyphicon-trash"></span></a>
  <a (click)="likeTrend(trend)"   class="pull-right"><span class="btn btn-default glyphicon glyphicon-thumbs-up"></span></a>
  <span class="pull-right badge" style="padding: 9px; margin: 3px; color: green; background-color: wheat;">{{trend.likes}}&nbsp;</span></li>
</ul>
  `,
  providers:[TrendService]
  })
  export class TrendListComponent{
  public trends:any;
  id:number;
  constructor(private trendService:TrendService,private _router:Router,private route: ActivatedRoute,private location: Location){
    this.trendService.getTrends().then((trends)=>{
      trends.sort(function(a, b) {
          var adate =new Date(a["dateCreated"]);
          var bdate =new Date(b["dateCreated"]);
          if (adate.getTime() < bdate.getTime()) return 1;
          if (bdate.getTime() < adate.getTime()) return -1;
          return 0;
      });
      this.trends=trends

    });

  }

  showTrend(trend:Trend){
  this._router.navigate(['/trend',trend.id])
  }
    deleteTrend(trend:Trend){
        this.trendService.deleteTrend(trend.id);
        this.trendService.getTrends().then((trends)=>{
            trends.sort(function(a, b) {
                var adate =new Date(a["dateCreated"]);
                var bdate =new Date(b["dateCreated"]);
                if (adate.getTime() < bdate.getTime()) return 1;
                if (bdate.getTime() < adate.getTime()) return -1;
                return 0;
            });
            this.trends=trends

        });
    }
    likeTrend(trend:Trend){
        trend.likes++;
        this.trendService.likeTrend(trend);
        this.trendService.getTrends().then((trends)=>{
            trends.sort(function(a, b) {
                var adate =new Date(a["dateCreated"]);
                var bdate =new Date(b["dateCreated"]);
                if (adate.getTime() < bdate.getTime()) return 1;
                if (bdate.getTime() < adate.getTime()) return -1;
                return 0;
            });
            this.trends=trends

        });
    }
  }
