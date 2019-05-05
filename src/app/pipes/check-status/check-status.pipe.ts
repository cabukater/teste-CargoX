import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkStatus'
})
export class CheckStatusPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    switch (value) {
      case 'Agendado':
      return 'checked';
      case 'Indo coletar':
      return 'checked';
      case 'Em transito':
      return 'checked';
      case 'Fila coleta':
      return 'checked';
      case 'Carregando':
      return 'checked';
      case 'Desarregando':
      return 'checked';
      case 'Entregue':
      return 'checked';
      default:
        break;
    }
  }
}
