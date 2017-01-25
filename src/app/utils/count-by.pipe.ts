import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countBy',
  pure: false
})
export class CountByPipe implements PipeTransform {

  transform(value: any[], key:string, prop:any): number {
    return value.filter( item => item[key] === prop ).length;
  }

}
