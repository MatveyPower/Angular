import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-goods-form',
  templateUrl: './goods-form.component.html',
  styleUrls: ['./goods-form.component.css']
})
export class GoodsFormComponent implements OnInit {

  title: string = ''
  vendorCode: string = ''
  price: number = 0
  manufacturer: string = ''
  category: number = 0
  numberOrders: number = 0
  weight: number = 0
  quantity: any = ''
  disabledForms = false;
  userForm: FormGroup;
  constructor(private serviceService: ServiceService, private appRoutes: Router) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      title: new FormControl({ value: '', disabled: this.disabledForms },
        [Validators.required]),
      vendorCode: new FormControl({ value: '', disabled: this.disabledForms },
        [Validators.required]),
      price: new FormControl({ value: '1', disabled: this.disabledForms },
      [Validators.required, Validators.pattern('^[0-9]+$',)]),
      manufacturer: new FormControl({ value: '', disabled: this.disabledForms }),
      category: new FormControl({ value: '', disabled: this.disabledForms },
      [Validators.required]),
      weight: new FormControl({ value: '1', disabled: this.disabledForms },
      [Validators.required, Validators.pattern('^[0-9]+$',)]),
      quantity: new FormControl({ value: '1', disabled: this.disabledForms },
      [Validators.required, Validators.pattern('^[0-9]+$',)]),
      disabledForms: new FormControl({ value: '', disabled: this.disabledForms }),
    });
  }

  onUserFormSubmit() {
    console.log(this.userForm.value)
    this.userForm.value.id = this.serviceService.goods[this.serviceService.goods.length - 1].id + 1;
    this.serviceService.addGood(this.userForm.value);
    this.userForm.reset();
  }

}
