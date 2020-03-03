import { Pipe, PipeTransform } from '@angular/core';
import { Good } from './service.service';

@Pipe({
  name: 'filterQuantity'
})
export class FilterQuantityPipe implements PipeTransform {

  transform(goods: Good[],search:string = ''): Good[]  {
    if (!search.trim()){
      return goods
    }

    return goods.filter(good => { good.price > 0
      
    })
  }

}
