import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../app/classes/index';

@Pipe({
  name: 'aquired',
  pure: false
})

export class PendingPipe implements PipeTransform {

  transform( listas: List[], estado: boolean = false): List[] {

    let listasFiltradas:List[] = [];

    for(let lista of listas){
        if(lista.aquired == estado){
            listasFiltradas.push(lista);
        }
    }

    return listasFiltradas;
  }

}