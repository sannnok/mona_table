import { Injectable } from '@angular/core';

export interface SensorData {
  time: number;
  bpmDevice: string;
  tempDevice: string;
  day: number;
  timeRefDay: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {

  public mockedData: SensorData[] = [];
  private minutesToAdd = 5;

  constructor() {
    this.extendDatePrototype();
    this.generateEmulatedData();
  }
  /**
   * Emulates data a sensor was producing every 5 mins for a month.
   */
  public generateEmulatedData() {
    let amountDaysInCurrentMonth = (new Date() as any).monthDays();
    let startDate = new Date(new Date((new Date).getFullYear(), (new Date).getMonth(), 1, 0, 0));

    console.log('Start Date: ', startDate.toISOString());
    // for each day in month
    for(let i=0; i<amountDaysInCurrentMonth; i++) {
      const dayOfMonth = i + 1;
      const pad = (num: any) => ("0" + num).slice(-2);

      // for each hour per day
      for(let k=0; k<24; k++) {
        // for each 5 mins a hour
        for(let k=0; k<12; k++) {
          const timestamp = startDate.getTime();
          const date = new Date(timestamp);
          let hours = date.getHours(),
            minutes = date.getMinutes();
          const time = pad(hours) + ":" + pad(minutes);
          const timeRefDay = `${time}-${dayOfMonth}`;

          startDate = new Date(startDate.getTime() + this.minutesToAdd*60000);

          this.mockedData.push({
            time: timestamp,
            bpmDevice: `Patient BPM: ${Math.round(Math.random() * 100 + 60)}, Date: ${startDate.toLocaleString()}`,
            tempDevice: `Patient °C: ${Math.round(Math.random() * 40 + 360) / 10}, Date: ${startDate.toLocaleString()}`,
            day: i+1,
            timeRefDay,
          });
        }
      }
    }

    console.log('Generated Data: ', this.mockedData);
  }

  private extendDatePrototype() {
    (Date.prototype as any).monthDays= function(){
      var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
      return d.getDate();
    }
  }
}
