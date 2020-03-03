
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Phone {
  id: number,
  title: string,
  vendorCode: any,
  price: number,
  manufacturer: string,
  yearIssue: number,
  numberOrders: number,
  mpx: number,
  screenResolution: any
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(public http: HttpClient) {
    http.get('http://localhost:3000/data').subscribe(res => {
      for (let i in res) {

        this.phones.push(res[i])
      }
    });
  }

  public phones: Phone[] = [

  ]


 async removePhone(id: number) {
    this.phones = this.phones.filter(t => t.id !== id)
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: { id: id }, type: 'del',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })
  }


  async addPhone(phone: Phone) {
    this.phones.push(phone)
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: phone, type: 'add',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })

  }

  sortById() {
    this.phones = this.phones.filter(function price(id) {
      return id

    }).sort(function (a, b) {
      return a.id - b.id

    })
  }
  sortById1() {
    this.phones = this.phones.filter(function price(id) {
      return id

    }).sort(function (a, b) {
      return b.id - a.id

    })
  }

  sortByPrice() {
    this.phones = this.phones.filter(function price(price) {
      return price

    }).sort(function (a, b) {
      return a.price - b.price

    })

  }
  sortByPrice1() {
    this.phones = this.phones.filter(function price(price) {
      return price

    }).sort(function (a, b) {
      return b.price - a.price

    })

  }
  sortByNumberOrders() {
    this.phones = this.phones.filter(function price(numberOrders) {
      return numberOrders

    }).sort(function (a, b) {
      return a.numberOrders - b.numberOrders

    })
  }
  sortByNumberOrders1() {
    this.phones = this.phones.filter(function price(numberOrders) {
      return numberOrders

    }).sort(function (a, b) {
      return b.numberOrders - a.numberOrders

    })
  }

  async addOne(phone) {
    console.log(this.phones.indexOf(phone))

    phone.numberOrders++;
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: this.phones.indexOf(phone), type: 'edit',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })
  }

  async editPhone(phone) {
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: phone, type: 'editPhone',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })

  }


}
