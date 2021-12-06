import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DataGeneratorService, SensorData } from '../services/data-generator.service';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatTableComponent implements OnInit {
  displayedColumnsSplittedIntervals: string[] = [];
  tempSelectionDependedDataSource: any[] = [];
  dataSource!: SensorData[];

  @Input('dataSource') public set setDataSource(data: SensorData[]) {
    this.dataSource = data;
    if (!data) return;
    this.getFakeDevicesData();
  }; 


  constructor(public dataGeneratorService: DataGeneratorService) {
  }

  ngOnInit() {
  }

  public getFakeDeviceData(n: number) {
    let res: any = {
      name: `Device ${ n }`,
    };
    this.dataSource.forEach(el => res[el.timeRefDay] = el.tempDevice);
    return res;
  }

  getFakeDevicesData() {
    this.tempSelectionDependedDataSource = [
      {
        ...this.getFakeDeviceData(1),
      },
      {
        ...this.getFakeDeviceData(2),
      },
      {
        ...this.getFakeDeviceData(3),
      },
    ];
    console.log(this.tempSelectionDependedDataSource)

    this.displayedColumnsSplittedIntervals = Object.getOwnPropertyNames(this.tempSelectionDependedDataSource[0]);
  }
}
