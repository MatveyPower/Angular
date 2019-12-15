import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workerElements = []; // массив объектов, отобращаемых при помощи компонента worker
  onWorkerAdded(workerData: { name: string, role: string }) { // обработчик события workerCreated из компонента Interface
    this.workerElements.push({
      name: workerData.name,
      role: workerData.role,
      type: 'сотрудник'
    });
  }
  onHeadWorkerAdded(workerData: { name: string, role: string }) { // обработчик события headWorkerCreated из компонента Interface
    this.workerElements.push({
      name: workerData.name,
      role: workerData.role,
      type: 'руководитель'
    });
  }
}
