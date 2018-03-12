import { LisItem } from "./list-item";

export class List{
    nombre: string;
    aquired: boolean;
    items: LisItem[];

    constructor(nombre:string){
        this.nombre = nombre;
        this.aquired = false;
    }
}