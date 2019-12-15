import { Injectable } from '@angular/core';

export interface sensor{
    id: number,
    name: string,
    status: boolean
  }
  var i: number = 0;
@Injectable({providedIn: 'root'})


export class SensorsService {



    public sensors: sensor[] = [
        {id: 1, name: 'Sasha', status: Boolean(Math.round(Math.random()))},
        {id: 2, name: 'Misha', status: Boolean(Math.round(Math.random()))},
        {id: 3, name: 'Ura', status: Boolean(Math.round(Math.random()))},
        {id: 4, name: 'Sasha', status: Boolean(Math.round(Math.random()))},
        {id: 5, name: 'Misha', status: Boolean(Math.round(Math.random()))},
        {id: 6, name: 'Ura', status: Boolean(Math.round(Math.random()))},
        {id: 7, name: 'Ura', status: Boolean(Math.round(Math.random()))},
        {id: 8, name: 'Ura', status: Boolean(Math.round(Math.random()))},
        {id: 9, name: 'Ura', status: Boolean(Math.round(Math.random()))},
        {id: 10, name: 'Ura', status: Boolean(Math.round(Math.random()))}
        
      ];
  static sensorsFull: any;

      public sensorsFull(){
        for(i = 0; i < 10; i++){
          this.sensors.push(
            {
              id: i + 1,
              name: 'Misha',
              status: Boolean(Math.round(Math.random()))
            }
          )
        } 
        
      }
      
    
    
      removeSensor(id: number){
        this.sensors = this.sensors.filter(t => t.id !== id);
      }

      addSensor(sensorForm: sensor){
        this.sensors.push(sensorForm);
          
          
      }
}
// SensorsService.sensorsFull();


// this.sensors.push(
//   {
//       id: this.sensors[this.sensors.length - 1].id+1,
//       name: newName,
//       status: Boolean(Math.round(Math.random()))
//   }