import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  @Output() personJson = new EventEmitter<any>(); 

  userName: string = '';
  response : any;


  constructor(private http:HttpClient) {
    
    
   }

  

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts' + this.userName)
     .subscribe((response) => {
       this.response = response;
       console.log(this.response);
       this.personJson.emit(this.response);
       
     })
  }

}
