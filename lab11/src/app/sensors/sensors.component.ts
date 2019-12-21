import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  
  sensors = [];
  sensor:Sensor;
  constructor() { 
    for (let i = 0; i <= 10; i++){ 
      this.sensor = {
        id: i,
        name: 'name' + i,
        status: Boolean(Math.round(Math.random()))
      }
      this.sensors.push(this.sensor);
    }
  }
  

  addSensor(name: string, status:boolean){
     console.log(name)
    this.sensor = {
      id: this.sensors.length == 0 ? 1 : this.sensors[this.sensors.length -1].id + 1,
      name: name,
      status
    }
    
    
    this.sensors.push(this.sensor);
    return false;
  }

  removeSensor(id:number): void{
    console.log(id);
    this.sensors.splice(id,1);
  
  }

  ngOnInit() {



  }


  

}

interface Sensor {
    id:number,
    name:string,
    status: boolean;
}
