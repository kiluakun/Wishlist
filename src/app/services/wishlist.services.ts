import { Injectable } from '@angular/core';
import { List } from '../classes/lists';


@Injectable()

export class WishListService {

    listas: List[] = [];

    constructor(){

        this.loadFromLocalStorage();
        console.log("Servicio Inicializado!");

    }

    actualizarData(){
        localStorage.setItem('data', JSON.stringify(this.listas) );
    }

    loadFromLocalStorage(){

        if( localStorage.getItem('data') ){
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
        
    }

    saveToLocalStorage( list: List){
        this.listas.push(list);
        this.actualizarData();
    }

    deleteFromLocalStorage( index: number){
        this.listas.splice(index, 1);
        this.actualizarData();
    }
}