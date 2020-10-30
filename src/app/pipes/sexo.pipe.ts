import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase() === 'M' ? "Masculino" : "Femenino";
  }

}
