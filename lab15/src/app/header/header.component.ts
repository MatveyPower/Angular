import { Person } from './../../../../lab13/src/app/shared/models/person.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Input() persons:Person;
  constructor() { }

  ngOnInit() {
  }

}
