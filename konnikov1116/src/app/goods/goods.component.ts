import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  open: number = 0;
  buttonPlus: boolean = true;
  searchString: any;
  searchManufacturer: any;
  constructor(public serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  async removeGood(id: number) {
    console.log(id)
    await this.serviceService.removeGood(id)
  }
  async editGood(good) {
    if (good.title !== '')
      await this.serviceService.editGood(good)
  }
  async edit(good) {
    if (good.title !== '')
      this.open = this.open == good.id ? 0 : good.id

  }

  sortById() {
    this.serviceService.sortById();
  }
  sortById1() {
    this.serviceService.sortById1();
  }

  sortByPrice() {
    this.serviceService.sortByPrice();
  }
  sortByPrice1() {
    this.serviceService.sortByPrice1();
  }
  sortByQuantity(){
    this.serviceService.sortByQuantity();
  }
  sortByQuantity1(){
    this.serviceService.sortByQuantity1();
  }


  async addOne(good) {
    this.buttonPlus = false;
    this.serviceService.addOne(good);
    setTimeout(() => {
      this.buttonPlus = true;
    }, 200);
  }
  async minusOne(good) {
    this.buttonPlus = false;
    this.serviceService.minusOne(good);
    setTimeout(() => {
      this.buttonPlus = true;
    }, 200);
  }
}
