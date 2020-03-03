import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService, Phone } from '../shared/service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  title: string = ''
  vendorCode: string = ''
  price: number = 0
  manufacturer: string = ''
  yearIssue: number = 0
  numberOrders: number = 0
  mpx: number = 0
  screenResolution: any = ''
  disabledForms = false;
  userForm: FormGroup;
  constructor(private serviceService: ServiceService, private appRoutes: Router) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      // firstName: new FormControl()
      // firstName: new FormControl('Чем инициализируется')
      title: new FormControl({ value: '', disabled: this.disabledForms },
        [Validators.required]),
      vendorCode: new FormControl({ value: '', disabled: this.disabledForms },
        [Validators.required]),
      price: new FormControl({ value: '0', disabled: this.disabledForms }),
      manufacturer: new FormControl({ value: '', disabled: this.disabledForms },
      [Validators.required]),
      yearIssue: new FormControl({ value: '', disabled: this.disabledForms }),
      numberOrders: new FormControl({ value: '0', disabled: this.disabledForms }),
      mpx: new FormControl({ value: '', disabled: this.disabledForms }),
      screenResolution: new FormControl({ value: '', disabled: this.disabledForms }),
      disabledForms: new FormControl({ value: '', disabled: this.disabledForms }),
    });
  }

  onUserFormSubmit() {
    console.log(this.userForm.value)
    this.userForm.value.id = this.serviceService.phones[this.serviceService.phones.length - 1].id + 1;
    this.serviceService.addPhone(this.userForm.value);
    this.userForm.reset();
  }

  // addPhone() {
  //   const phone: Phone = {
  //     id: this.serviceService.phones[this.serviceService.phones.length - 1].id + 1,
  //     title: this.title,
  //     vendorCode: this.vendorCode,
  //     price: this.price,
  //     manufacturer: this.manufacturer,
  //     yearIssue: this.yearIssue,
  //     numberOrders: this.numberOrders,
  //     mpx: this.mpx,
  //     screenResolution: this.screenResolution

  //   }
  //   console.log(phone)
  //   this.serviceService.addPhone(phone)
  //   this.title = ''
  //   this.vendorCode = ''
  //   this.price = 0
  //   this.manufacturer = ''
  //   this.yearIssue = 0
  //   this.numberOrders = 0
  //   this.mpx = 0
  //   this.screenResolution = ''
  // }
  //   goToPhones(){
  //     this.appRoutes.navigate(['catalog']);
  // }

}
