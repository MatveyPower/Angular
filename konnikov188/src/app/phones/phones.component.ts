
import { ServiceService } from './../shared/service.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  open: number = 0;
  buttonPlus:boolean = true;
  constructor(private serviceService: ServiceService) {
    
   }

  ngOnInit() {
    
  }

  

async removePhone(id: number){
  await this.serviceService.removePhone(id)
}
async editPhone(phone){
  console.log("phone title" + phone.title);
  if(phone.title !== '')
 await this.serviceService.editPhone(phone)
}
async edit(phone){
  if(phone.title !== '')
  this.open = this.open == phone.id ? 0 : phone.id

}

sortById(){
  this.serviceService.sortById();
}
sortById1(){
  this.serviceService.sortById1();
}

sortByPrice(){
  this.serviceService.sortByPrice();
}
sortByPrice1(){
  this.serviceService.sortByPrice1();
}
sortByNumberOrders(){
  this.serviceService.sortByNumberOrders();
}
sortByNumberOrders1(){
  this.serviceService.sortByNumberOrders1();
}


 async addOne(phone){
    this.buttonPlus = false;
    this.serviceService.addOne(phone);
    setTimeout(() => {
      this.buttonPlus =true;
    }, 200);
  }
  
}
