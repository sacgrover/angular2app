import { Pipe, PipeTransform } from '@angular/core';

import { Trend } from './trend/trend';

@Pipe({ name: 'tagTrend' })
export class TagTrendPipe implements PipeTransform {
    transform(value: any, args: any) {
        let filter = parseInt(args);
        return filter ? value.filter(tech=> tech.likes>10) : value;
    }
}
