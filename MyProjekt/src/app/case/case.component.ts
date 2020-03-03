import { CaseService } from './../case.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  open:number;
  constructor(public caseservice:CaseService) { }

  ngOnInit() {
  }
  
  edit(id:number){
    if (this.open != id){
    this.open = id;
  }else{
    this.open = undefined;
  }
}

  remove(id:number){
    this.caseservice.remove(id)
  }

  succesTrue(case1){
    this.caseservice.succesTrue(case1)
  }

  succesFalse(case1){
    this.caseservice.succesFalse(case1)
  }

  expired(date:any){
   return this.caseservice.expired(date)
  }

  


  

}
