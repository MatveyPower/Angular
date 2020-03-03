import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Case {
  id: number;
  title: string;
  data: string;
  date: any;
  succes: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(public http: HttpClient) {
    http.get('http://localhost:3000/data').subscribe(res => {
      for (let i in res) {

        this.cases.push(res[i])
      }
    });
  }
  dateNow() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
  }

  public cases: Case[] = [
    // { id: 1, title: 'suka', data: 'Misha', date: this.dateNow(), succes: true },
    // { id: 2, title: 'Tvar', data: 'Misha', date: this.dateNow(), succes: false },
    // { id: 3, title: 'Mraz', data: 'Misha', date: this.dateNow(), succes: false },
  ]
  add(cases: Case) {
    cases.succes = this.expired(cases.date)
    this.cases.push(cases)
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: cases, type: 'add',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })
  }

  remove(id: number) {
    this.cases = this.cases.filter(item => item.id != id)
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: { id: id }, type: 'del',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })
  }

  succesTrue(case1) {
    case1.succes = true
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: this.cases.indexOf(case1), type: 'edit',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })
  }

  succesFalse(case1) {
    // this.cases.map(item => {
    //   if (item.id === id) {
    //     return item.succes = false
    //   }
    // })
    case1.succes = false
    this.http.post('http://localhost:3000/data', {
      method: 'POST',
      body: this.cases.indexOf(case1), type: 'edit1',
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(request => { })
  }

  expired(date: any) {
    let now = new Date(this.dateNow())
    let before = new Date(date)
    if (now > before) {
      return true
    }
    return false

  }




}



