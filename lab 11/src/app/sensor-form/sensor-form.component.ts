import { Component, OnInit } from '@angular/core';
import { SensorsService, sensor } from '../shared/sensors.service';

@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.css']
})
export class SensorFormComponent implements OnInit {
  name: string = '';

  constructor(private sensorsService: SensorsService) { }

  ngOnInit() {
  }

  addSensor(id){
    console.log(id)
    const sensorForm: sensor = {
      id: id,
      name: this.name,
      status: Boolean(Math.round(Math.random()))
    }
    this.name = '';
    this.sensorsService.addSensor(sensorForm);
  }

}
