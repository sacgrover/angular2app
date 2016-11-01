import { Pipe, PipeTransform } from '@angular/core';

import { Trend } from './trend/trend';

@Pipe({ name: 'angularTrend' })
export class AngularTrendPipe implements PipeTransform {
    transform(value: any, args: any) {
        let filter = args.toLocaleLowerCase();
        return filter ? value.filter(tech=> tech.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}
