import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Input() inPerson: Person;

  @Output() delete = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
    console.log(this.inPerson)
  }
 ondeletePerson(id:number){
   this.delete.emit(id);
 }

}
