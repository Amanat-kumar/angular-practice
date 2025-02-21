import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenString',
  standalone: true
})
export class ShortenStringPipe implements PipeTransform {

  transform(value: string, limit:number) {
    if(value.length===limit){
      return value;
    }
    return value.substring(0, limit)+'...';
  }

}
