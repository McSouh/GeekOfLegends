import {attaquants} from "../index.js";

export class Personnage{
    constructor(name, ptLife, ptAttack){
        this.name = name;
        this.maxLife = ptLife;
        this.maxAttack = ptAttack;
        this.ptLife = ptLife;
        this.ptAttack = ptAttack;
        this.attackMode = function(){
            this.ptAttack = Math.round(this.maxAttack * 1.4);
            this.ptLife = Math.round(this.maxLife * 0.75);
            alert(`${this.name} se met en posture de combat, ses points d'attaques sont désormais à ${this.ptAttack} et ses points de vie sont à ${this.ptLife}.`); 
        }
        this.defenseMode = function(){
            attaquants.push(this);
            this.ptAttack = Math.round(this.maxAttack * 0.5);
            this.ptLife = Math.round(this.maxLife * 2.5);
            alert(`${this.name} se met en posture de défense, ses points d'attaques sont désormais à ${this.ptAttack} et ses points de vie sont à ${this.ptLife}.`);   
        }
        this.hit = function (cible){
            cible.ptLife -= this.ptAttack;
            alert(`${this.name} attaque ${cible.name} pour ${this.ptAttack} points de dégats. ${cible.name} n'a plus que ${cible.ptLife} points de vie.`);
            cible.specialAttack();
        }
        this.pass = function(){
            alert(`${this.name} n'a pas assez de ressource et passe son tour.`);
        }
        this.attack = function(cible){
            if (this.ptLife > 0){
                let choice;
                while (choice != "attaque" && choice != "defense"){
                    choice = prompt(`${this.name}, choisissez le mode "attaque" ou "defense".`);
                    if (choice == "attaque"){
                        this.attackMode();
                    } else if (choice == "defense"){
                        this.defenseMode();
                    }
                }
            if(this.ptRage >= 0){ // ATTAQUE GUERRIER
                if(this.ptRage > 4){
                    this.ptRage = 0; 
                } else if (this.ptRage = 4){
                    this.ptAttack = this.ptAttack * 1.25;
                    this.ptRage++;
                } else if (this.ptRage < 4){
                    this.ptRage++;
                } 
                this.hit(cible);
            } else if (this.ptMana){ // ATTAQUE MAGE
                if (this.ptMana > 2){
                    this.ptMana -= 2;
                    this.hit(cible);
                } else {
                    this.ptMana += 7;
                    this.pass()
                }
            } else if (this.ptArrow){ // ATTAQUE ARCHER
                if (this.ptArrow > 2){
                    this.ptArrow -= 2;
                    this.hit(cible);
                } else {
                    this.ptArrow += 6;
                    this.pass()
                }
            }
          }
        }
    }
}