import { Component, OnInit } from "@angular/core";

import { NavController } from "ionic-angular";
import { WishListService } from "../../app/services/wishlist.services";

import { AddComponent } from "../agregar/agregar.component";
import { DetailComponent } from "../detail/detail.component";

@Component({
    selector: 'app-aquired',
    templateUrl: 'aquired.component.html'
})

export class AquiredComponent implements OnInit {
    constructor( private _wishlistService: WishListService, 
        private navCtrl: NavController ){

    }

    ngOnInit(){}

    irAgregar(){
        this.navCtrl.push( AddComponent );
    }
    
    verDetalle( lista, idx ){
        this.navCtrl.push( DetailComponent, { lista, idx } );
    }
}