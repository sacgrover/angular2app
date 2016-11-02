import {Trend} from './trend'

import {Injectable} from '@angular/core'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class TrendService {

    static newId:number=5;
    private trendsUrl = 'app/trends';  // URL to web api
    private trendUrl = 'app/trend';  // URL to web api

    constructor(private http:Http) {
    }

    getTrends():Promise<Trend[]> {
        return this.http.get(this.trendsUrl)
            .toPromise()
            .then(response => response.json().data as Trend[])
            .catch(this.handleError);
    }
    getTrend(id:number):Promise<Trend> {
        return this.http.get(this.trendsUrl + "/" + id)
            .toPromise()
            .then(response => response.json().data as Trend)
            .catch(this.handleError);
    }

    deleteTrend(id:number):Promise<Trend> {
        return this.http.delete(this.trendsUrl + "/" + id)
            .toPromise()
            .then()
            .catch(this.handleError);
    }
    likeTrend(trend:Trend):Promise<Trend> {
        return this.http.put(this.trendsUrl + "/" + trend.id,trend)
            .toPromise()
            .then()
            .catch(this.handleError);
    }


    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


    createTrend(trend:Trend):Promise<Trend> {
        return this.http.post(this.trendsUrl,trend)
            .toPromise()
            .then()
            .catch(this.handleError);
    }

}
