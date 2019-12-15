import { Component, OnInit, Input } from '@angular/core';
import {SensorsService} from '../shared/sensors.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})


export class SensorComponent implements OnInit {


  public newName: string;
  
  constructor(private sensorsService: SensorsService) { }
  
  ngOnInit() {
  }
  removeSensor(id: number){
    this.sensorsService.removeSensor(id);
  }

  
  // addSensor(name: string){
  //   this.sensorsService.addSensor(name);
  // }

}
