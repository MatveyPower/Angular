import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Good } from './service.service';


@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(goods: Good[],search:string = ''): Good[]  {
    if (!search.trim()){
      return goods
    }

    return goods.filter(good => {
      return good.category.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }

}
