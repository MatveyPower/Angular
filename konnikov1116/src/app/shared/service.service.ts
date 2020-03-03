import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Good {
  id: number,
  title: string,
  vendorCode: any,
  price: number,
  manufacturer: string,
  category: string,
  weight: any,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(public http: HttpClient) {
    http.get('http://localhost:3000/data').subscribe(res => {
      for (let i in res) {

        this.goods.push(res[i])
      }
    });
  }



  public goods: Good[] = [

  ]


  async removeGood(id: number) {
    this.goods = this.goods.filter(t => t.id !== id)
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: { id: id }, type: 'del',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })
  }


  async addGood(good: Good) {
    this.goods.push(good)
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: good, type: 'add',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })

  }

  sortById() {
    this.goods = this.goods.filter(function price(id) {
      return id

    }).sort(function (a, b) {
      return a.id - b.id

    })
  }
  sortById1() {
    this.goods = this.goods.filter(function price(id) {
      return id

    }).sort(function (a, b) {
      return b.id - a.id

    })
  }

  sortByPrice() {
    
    this.goods = this.goods.filter(function price(price) {
      
      return price

    }).sort(function (a, b) {
      return a.price - b.price

    })

  }
  sortByPrice1() {
    this.goods = this.goods.filter(function price(price) {
      return price

    }).sort(function (a, b) {
      return b.price - a.price

    })

  }
  sortByQuantity() {
    this.goods = this.goods.filter(function price(quantity) {
      
      return quantity
      
    }).sort(function (a, b) {
      console.log(a.quantity)
      console.log(b.quantity)
      return a.quantity - b.quantity

    })
  }
  sortByQuantity1() {
    this.goods = this.goods.filter(function price(quantity) {
      return quantity

    }).sort(function (a, b) {
      return b.quantity - a.quantity

    })
  }

  async addOne(good) {
    console.log(this.goods.indexOf(good))

    good.quantity++;
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: this.goods.indexOf(good), type: 'edit',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })
  }
  async minusOne(good) {
    console.log(this.goods.indexOf(good))
    if (good.quantity > 0) {
      good.quantity--;
      this.http.post('http://localhost:3000/data', {
        method: 'POST',
        body: this.goods.indexOf(good), type: 'edit1',
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(request => { })
    }
  }

  async editGood(good) {
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: good, type: 'editGood',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })

  }
}
