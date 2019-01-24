export class Personnage{
    constructor(name, ptLife, ptAttack){
        this.name = name;
        this.ptLife = ptLife;
        this.ptAttack = ptAttack;
        this.attackMode = function(){
            this.ptAttack *= 1.4;
            this.ptLife *= 0.75;
            alert(`${this.name} se met en posture de combat, ses points d'attaques sont désormais à ${this.ptAttack} et ses points de vie sont à ${this.ptLife}.`); 
        }
        this.defenseMode = function(){
            this.ptAttack *= 0.5;
            this.ptLife *= 2.5;
            alert(`${this.name} se met en posture de défense, ses points d'attaques sont désormais à ${this.ptAttack} et ses points de vie sont à ${this.ptLife}.`);   
        }
        this.attack = function(){
            if(this.ptRage){ // ATTAQUE GUERRIER
                if(this.ptRage > 4){
                    this.ptAttack *= 0.8;
                    this.ptRage = 0; 
                } else if (this.ptRage = 4){
                    this.ptAttack *= 1.25;
                    this.ptRage++;
                } else {
                    this.ptRage++;
                } 
                // ATTAQUE ->
            } else if (this.ptMana){ // ATTAQUE MAGE
                if (this.ptMana > 2){
                    this.ptMana -= 2;
                    // ATTAQUE ->
                } else {
                    this.ptMana += 7;
                    // PASSE SON TOUR ->
                }
            } else if (this.ptArrow){
                if (this.ptArrow > 2){
                    this.ptArrow -= 2;
                    // ATTAQUE ->
                } else {
                    this.ptArrow += 6;
                    // PASSE SON TOUR ->
                }
            }
        }
    }
}