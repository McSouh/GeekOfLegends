import { Personnage } from "./_personnage.js";

export class Archer extends Personnage{
    constructor(name, ptLife, ptAttack, ptArrow){
        super(name, ptLife, ptAttack);
        this.ptArrow = ptArrow;
    }
}