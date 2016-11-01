import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {AngularTrendPipe} from './myCustom.pipe';
import {TagTrendPipe} from './tag.pipe';
import {DateTrendPipe} from './myDate.pipe';
import {TrendListComponent} from './trendListComponent';
import {TrendDetailComponent} from './TrendDetailComponent';
import {AddTrendComponent} from './AddTrendComponent';
import {FormsModule} from '@angular/forms';
import { RouterModule}   from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {HttpModule} from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './trend/in-memory-trend-data.service';


@NgModule({
  imports:[BrowserModule,FormsModule,HttpModule,
  RouterModule.forRoot([
  {
  path: '',
  redirectTo: '/trendList',
  pathMatch: 'full'
},
{ path: 'trendList',  component: TrendListComponent },
{ path: 'addTrend',component: AddTrendComponent},
{ path: 'trend',component: TrendDetailComponent},
{ path: 'trend/:id',component: TrendDetailComponent}
  ]),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
],
providers: [{provide: APP_BASE_HREF, useValue : '/' }],
declarations: [ AppComponent,AngularTrendPipe,TrendListComponent,TrendDetailComponent,DateTrendPipe,AddTrendComponent,TagTrendPipe],
bootstrap:    [AppComponent]
})
export class AppModule { }
