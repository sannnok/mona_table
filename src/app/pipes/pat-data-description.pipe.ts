import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patDataDescription'
})
export class PatDataDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value
      .replace('Patient BPM:', '<span class="device-param-props">Patient BPM:</span>')
      .replace('Date:', '<span class="device-param-props">Date:</span>')
      .replace('Patient °C:', '<span class="device-param-props">Patient °C</span>:');
  }

}
