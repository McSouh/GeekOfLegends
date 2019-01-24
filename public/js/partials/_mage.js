import { Personnage } from "./_personnage.js";

export class Mage extends Personnage{
    constructor(name, ptLife, ptAttack, ptMana){
        super(name, ptLife, ptAttack);
        this.ptMana = ptMana;
    }
}