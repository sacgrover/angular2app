import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {AngularTrendPipe} from './myCustom.pipe';
import {ChildComponent} from './childComponent';


@NgModule({
  imports:      [
   BrowserModule   ],
  declarations: [ AppComponent,AngularTrendPipe,ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
