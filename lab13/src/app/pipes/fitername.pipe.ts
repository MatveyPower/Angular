import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Pipe({
  name: 'fitername'
})
export class FiternamePipe implements PipeTransform {

  transform(persons: Person[], value: string = '') {
    return persons.filter(person => {
      
      return person.firstname.indexOf(value)!= -1 || person.lastname.indexOf(value)!=-1;
       })
  }

}
