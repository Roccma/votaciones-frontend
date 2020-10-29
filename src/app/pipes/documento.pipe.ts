import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documento'
})
export class DocumentoPipe implements PipeTransform {

  transform(value: string): string {
    let cedula = value.substr(0, 1) + "." + value.substr(1, 3) + "." + value.substr(4, 3) + "-" + value.substr(7, 1);
    return cedula;
  }

}
