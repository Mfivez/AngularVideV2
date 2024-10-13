import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false
})
export class ImpurePipe implements PipeTransform {
  transform(value: any): any {
    return Math.random();
  }
}
