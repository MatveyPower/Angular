// import { Person } from './../../../../lab12/src/app/shared/models/person.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../shared/models/person.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',

  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  public myModel = ''
  public mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/]
 @Input() persons : Person[];
  @Output() addperson = new EventEmitter<Person>();
  disabledForms = false;
  userForm: FormGroup;



  constructor() { 
    
   }

  ngOnInit() {

    this.userForm = new FormGroup({
      // firstName: new FormControl()
      // firstName: new FormControl('Чем инициализируется')
      firstname: new FormControl({ value: '', disabled: this.disabledForms },
        [Validators.required]),
      lastname: new FormControl({ value: '', disabled: this.disabledForms },
        [Validators.required]),
      phone: new FormControl({ value: '', disabled: this.disabledForms }, 
        [Validators.required ,Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)])
    });
    
  }

  // test(elm) {
  //   console.log(elm)
  // }

  
  onUserFormSubmit() {
    console.log(this.userForm.value)
     this.addperson.emit(this.userForm.value);
      this.userForm.reset();
   }

}
