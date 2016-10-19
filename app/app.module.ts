import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './trend/in-memory-trend-data.service';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [
   BrowserModule,
    HttpModule,
   InMemoryWebApiModule.forRoot(InMemoryDataService)
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
