import { Person } from './../shared/models/person.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
   open: boolean = false;
   id: number;
  itemForm: FormGroup;
  selectedItem;
 @Input() persons : Person;
 @Output() addperson = new EventEmitter<Person>();
 disabledForms = false;
  userForm: FormGroup;
  public mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/]
  constructor(private activatedRouter: ActivatedRoute,
        private router: Router) {
       
            this.activatedRouter.params.subscribe(param => {
              this.id = param.id;
            });
          }
     

  ngOnInit() {
    // this.selectedItem = this.person.getItemById(+this.id);
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
  edit(){
    this.open = !this.open;
  }
  onUserFormSubmit() {
    console.log(this.userForm.value)
     this.addperson.emit(this.userForm.value);
      this.userForm.reset();
   }
// getItemById(id: number) {
//       return this.person.find(this.person => this.person.id === id);
//     }
 

  

}
