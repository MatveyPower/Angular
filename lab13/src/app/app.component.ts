import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  persons: Person[] = [];
  userForm: FormGroup;
  search:string
  constructor() {
  }

  
  
  ngOnInit(): void {
    this.persons.push(new Person('Ivan', 'Ivanov', 1));
    this.persons.push(new Person('Ivan', 'Ivanov', 2));
    this.persons.push(new Person('Ivan', 'Ivanov', 3));
    this.persons.push(new Person('Ivan', 'Ivanov', 4));
    this.persons.push(new Person('Ivan', 'Ivanov', 5));
  }

  ngOnDestroy(): void {
  }

  onAddPerson(person: Person) {
    let newId = this.persons.length == 0 ? 1 : this.persons[this.persons.length - 1].id + 1;
    person.id = newId;
    this.persons.push(person);
    this.search = ' '
    setTimeout(() => {
      this.search = ''
    }, 10);
  }

  test(even) {
    console.log(event);
  }

  deletePerson(id:number){
    let deleteId = this.persons.findIndex(t => t.id === id);
    this.persons.splice(deleteId,1);
    this.search = ' '
    setTimeout(() => {
      this.search = ''
    }, 10);

  }

}
