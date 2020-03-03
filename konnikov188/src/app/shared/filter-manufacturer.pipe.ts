import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from './service.service';

@Pipe({
  name: 'filterManufacturer'
})
export class FilterManufacturerPipe implements PipeTransform {

  transform(phones: Phone[], search:string = ''): Phone[]  {
    if (!search.trim()){
      return phones
    }

    return phones.filter(phone => {
      return phone.manufacturer.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }

}
