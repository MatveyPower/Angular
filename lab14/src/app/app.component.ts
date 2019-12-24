import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  data: object;
  constructor(private http:HttpClient) {
  }

  
  
  ngOnInit(): void {
    
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
    let data = {
      title: person.firstname,
      body: person.lastname,
      userId: person.phone,
      id: person.id
      }
      this.http.post('https://jsonplaceholder.typicode.com/posts', data)
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
  AddPersonJson(array:any){
    for (let person of array){
      this.persons.push(new Person(person.title, person.body, person.id, person.userId))
      this.search = ''
    }
  }

}
