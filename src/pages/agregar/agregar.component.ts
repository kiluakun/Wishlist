import { Component, OnInit } from "@angular/core";
import { LisItem, List } from '../../app/classes/index';

import { AlertController, NavController } from 'ionic-angular';

import { WishListService } from "../../app/services/wishlist.services";

@Component({
    selector: 'app-add',
    templateUrl: 'agregar.component.html'
})

export class AddComponent implements OnInit {

    listName: string = '';
    itemName: string = '';

    items:LisItem[] = [];

    constructor( public alertCtrl: AlertController,
                 public navCtrl: NavController,
                 public _wishlistSvc: WishListService ){}

    ngOnInit(){}

    showAlert(titulo: string, mensaje: string) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    }

    agregarItem(){

        if(this.itemName.length == 0){
            this.showAlert('Error', 'No se puede agregar item vacio.');
            return;
        }
        
        let item = new LisItem();
        item.name = this.itemName;

        this.items.push(item);
        this.itemName = '';
    }

    eliminarItem( indice: number){
        this.items.splice(indice, 1);
    }

    guardarLista(){
        if(this.listName.length == 0){
            this.showAlert('Nombre de la lista', 'Nombre de la lista es necesario.');
            return;
        }
        if(this.items.length == 0){
            this.showAlert('Items', 'No se puede agregar lista sin items.');
            return;
        }

        let lista = new List( this.listName );
        lista.items = this.items;

        //this._wishlistSvc.listas.push( lista );
        this._wishlistSvc.saveToLocalStorage(lista);
        this.navCtrl.pop();

    }
}