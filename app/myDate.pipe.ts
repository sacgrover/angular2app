import { Pipe, PipeTransform } from '@angular/core';

import { Trend } from './trend/trend';

@Pipe({ name: 'dateTrend' })
export class DateTrendPipe implements PipeTransform {
    transform(value: any, args: any) {
        if(!args)
        return value;
        var date =new Date(args);
        return !isNaN( date.getTime() ) ? value.filter(tech=> (new Date(tech.dateCreated)).getTime()>date.getTime()) : value;
    }
}
