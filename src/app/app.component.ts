import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DataGeneratorService, SensorData } from './services/data-generator.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{

  selectedTimeInterval!: string;
  deviceData: SensorData[] = [];
  loader = false;

  constructor(public dataGeneratorService: DataGeneratorService) {
  }

  ngOnInit() {
    this.onIntervalChange({value: '5'} as any);
  }

  onIntervalChange(event: MatSelectChange) {
    this.selectedTimeInterval = event.value;
    this.deviceData = this.dataGeneratorService.mockedData
      .filter(el => event.value === '5' ? true : (new Date(el.time)).getMinutes() % +event.value === 0);
  }

  triggerLoader(event:  MatTabChangeEvent, trigger?: boolean) {
    if ((event as MatTabChangeEvent)?.index === 1 && trigger) {
      this.loader = true;
    }
    if ((event as MatTabChangeEvent)?.index === 1 && !trigger) {
      this.loader = false;
    }
    console.log(this.loader)
  }
}
