import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {AngularTrendPipe} from './myCustom.pipe';
import {ChildComponent} from './childComponent';
import {FormsModule} from '@angular/forms'


@NgModule({
  imports:[BrowserModule,FormsModule],
  declarations: [ AppComponent,AngularTrendPipe,ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
