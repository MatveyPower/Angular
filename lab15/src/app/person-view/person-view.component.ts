import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  persons: Person[] = [];
  userForm: FormGroup;
  search:string
  data: object;
  
  @Input() inPerson: Person;

  @Output() delete = new EventEmitter<number>()

  constructor(private http:HttpClient) {
  }
 

  ngOnInit() {
    // console.log(this.inPerson)
  }
 ondeletePerson(id:number){
   this.persons.findIndex
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
