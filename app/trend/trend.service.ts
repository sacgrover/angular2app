import {Trend} from './trend'

import {Injectable} from 'angular2/core'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class TrendService{



private trendsUrl = 'app/trends';  // URL to web api

 constructor(private http: Http) { }

 getTrends(): Promise<Trend[]> {
   return this.http.get(this.trendsUrl)
              .toPromise()
              .then(response => response.json().data as Trend[])
              .catch(this.handleError);
 }

 private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}


 createTrend(json):Trend{
 return new Trend(json);
 }

}
