import { Pipe, PipeTransform } from '@angular/core';

import { Trend } from './trend/trend';

@Pipe({ name: 'tagTrend' })
export class TagTrendPipe implements PipeTransform {
    transform(value, args) {
        if (!args[0]) {
            return value;
        } else if (value) {
            value.sort((a, b) => {
                if (a.likes < b.likes) {
                    return 1;
                    //.completed because we want to sort the list by completed property
                } else if (a.likes > b.likes) {
                    return -1;
                } else {
                    return 0;
                }
            });
            return value.slice(0, 3);
        }
    }
}