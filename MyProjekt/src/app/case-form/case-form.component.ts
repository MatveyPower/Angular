import { CaseService } from './../case.service';
import { Component, OnInit } from '@angular/core';
import { Case } from '../case.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-case-form',
  templateUrl: './case-form.component.html',
  styleUrls: ['./case-form.component.css']
})
export class CaseFormComponent implements OnInit {
  id: number;
  title: string = '';
  data: string = '';
  date: any = '';
  disabledForms = false;
  userForm: FormGroup;
  constructor(private caseservice: CaseService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      // firstName: new FormControl()
      // firstName: new FormControl('Чем инициализируется')
      title: new FormControl({ value: '', disabled: this.disabledForms },
        [Validators.required]),
      date: new FormControl({ value: '0', disabled: this.disabledForms },
        [Validators.required]),
      data: new FormControl({ value: '', disabled: this.disabledForms },
        [Validators.required]),

    });
  }

  onUserFormSubmit() {
    console.log(this.userForm.value)
    this.userForm.value.id = this.caseservice.cases[this.caseservice.cases.length - 1].id + 1;
    this.caseservice.add(this.userForm.value);
    this.userForm.reset();
  }



  // add() {
  //   const case1: Case = {
  //     id: this.caseservice.cases[this.caseservice.cases.length - 1].id + 1,
  //     title: this.title,
  //     data: this.data,
  //     date: this.date,
  //     succes: false

  //   }

  //   this.caseservice.add(case1)

  // }


}
