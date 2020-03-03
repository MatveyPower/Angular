import { Phone } from './service.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPhone'
})
export class FilterPhonePipe implements PipeTransform {

  transform(phones: Phone[], search:string = ''): Phone[]  {
    if (!search.trim()){
      return phones
    }

    return phones.filter(phone => {
      return phone.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }

}
