import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-worker-element',
  templateUrl: './worker-element.component.html',
  styleUrls: ['./worker-element.component.css']
})
export class WorkerElementComponent {
  @Input() worker: { name: string, type: string, role: string };
  constructor() { }
}
