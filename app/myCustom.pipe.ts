import { Pipe, PipeTransform } from '@angular/core';

import { Trend } from './trend/trend';

@Pipe({ name: 'angularTrend' })
export class AngularTrendPipe implements PipeTransform {
  transform(allTrends: Trend[],filterOption:string) {
  console.log(filterOption)
    return allTrends.filter(trend =>{return trend.name.indexOf(filterOption)>-1});
  }
}
