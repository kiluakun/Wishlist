import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { LisItem, List } from '../../app/classes/index';

import { WishListService } from "../../app/services/wishlist.services";

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {

    lista: List;
    idx: number;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public _wishlistSvc: WishListService,
        public alertCtrl: AlertController
     ){
         //console.log(this.navParams);
         this.lista = this.navParams.get('lista');
         this.idx = this.navParams.get('idx');
     }

    ngOnInit(){}

    borrarItem() {
        let confirm = this.alertCtrl.create({
            title: 'Borrar \'' + this.lista.nombre + '\'',
            message: 'Está seguro que desea eliminar la lista?',
            buttons: [ 'Cancelar'
                // {
                //     text: 'Cancelar',
                //     handler: () => {
                //         console.log('cancel clicked');
                //     }
                // }
                ,
                {
                    text: 'Borrar',
                    handler: () => {
                        console.log('delete clicked', this.idx);
                        //modificar el local storage a traves del service
                        this._wishlistSvc.deleteFromLocalStorage(this.idx);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }

    actualizar(item: LisItem){

        item.aquired = !item.aquired;

        let todosMarcados = true;
        for( let item of this.lista.items){
            if(!item.aquired){
                todosMarcados = false;
                break;
            }
        }
        this.lista.aquired = todosMarcados;

        this._wishlistSvc.actualizarData();

    }
}