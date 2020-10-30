import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esPostulante'
})
export class EsPostulantePipe implements PipeTransform {

  transform(value: boolean): string {
    return value === true ? "Sí" : "No";
  }

}
