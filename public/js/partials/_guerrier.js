import { Personnage } from "./_personnage.js";

export class Guerrier extends Personnage{
    constructor(name, ptLife, ptAttack, ptRage){
        super(name, ptLife, ptAttack);
        this.ptRage = ptRage;
    }
}