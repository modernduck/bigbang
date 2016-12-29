import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkin'
})
export class CheckinPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
