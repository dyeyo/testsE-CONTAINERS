import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHeroe'
})
export class FilterHeroePipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if (arg === '' || arg.length < 2) return value

    const resultado = []

    for (const heroe of value) {
      if (heroe.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado.push(heroe)
      }
    }
    return resultado
  }
}