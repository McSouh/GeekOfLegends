import {
    Boss
} from "./partials/_boss.js";
import {
    Guerrier
} from "./partials/_guerrier.js";
import {
    Mage
} from "./partials/_mage.js";
import {
    Archer
} from "./partials/_archer.js";



let boss1 = new Boss("Sauron", 100, 13);
let boss2 = new Boss("Chronos", 100, 20);
let boss3 = new Boss("Lilith", 100, 7);
let listBoss = [boss1, boss2, boss3];
let chosenBoss = listBoss[Math.round(Math.random() * (listBoss.length - 1))];


alert("Bienvenue sur Geek of Legends ! Avant de commencer, nous allons devoir configuer vos différents personnages. Vous disposez de 150 points de vie ainsi que 50 points de d'attaque à répartir comme bon vous semble, entre votre guerrier, votre mage ainsi que votre guerrier.");

let bankLife = 150;
let bankAttack = 50;
let name, ptLife, ptAttack, ptSpec;

let init = function(classe) {
    name = prompt(`Veuillez entrer le nom de votre ${classe} :`);
    ptLife = prompt(`Choisissez les points de vie de ${name} (${bankLife} points disponibles.)`);
    while (ptLife > bankLife) {
        ptLife = prompt(`Veuillez insérer un montant plus petit. (${bankLife} points disponibles.)`);
    };
    bankLife -= ptLife;

    ptAttack = prompt(`Choisissez les points d'attaque de ${name} (${bankAttack} points disponibles.)`);
    while (ptAttack > bankAttack) {
        ptAttack = prompt(`Veuillez insérer un montant plus petit. (${bankAttack} points disponibles.)`);
    };
    bankAttack -= ptAttack;
    if(classe == 'guerrier'){
        ptSpec = 0;
    } else if (classe == 'mage'){
        let manas = [7, 9, 11];
        let numRand = Math.round(Math.random() * (manas.length - 1));
        ptSpec = manas[numRand];
    } else if (classe == 'archer'){
        let arrows = [7, 8, 9, 10, 11];
        let numRand = Math.round(Math.random() * (arrows.length - 1));
        ptSpec = arrows[numRand];

    }
}



// init('guerrier');
// let guerrier1 = new Guerrier(name, ptLife, ptAttack, ptSpec);
// console.log(guerrier1);
// init('mage');
// let mage1 = new Mage(name, ptLife, ptAttack, ptSpec);
// console.log(mage1);
// init('archer');
// let archer1 = new Archer(name, ptLife, ptAttack, ptSpec);
// console.log(archer1);

let guerrier1 = new Guerrier('guerrier', 100, 20, 0);
let mage1 = new Mage('mage', 10, 20, 7);
let archer1 = new Archer('archer', 10, 20, 9);

export let attaquants = [guerrier1, mage1, archer1];

let i = 0;
while(guerrier1.ptLife > 0 && mage1.ptLife > 0 && archer1.ptLife > 0 && chosenBoss.ptLife > 20){
    attaquants = [guerrier1, mage1, archer1];
    attaquants[i].attack(chosenBoss);
    if(i < 2){
        i++;
    } else {
        i = 0;
        let numRand = Math.round(Math.random() * (attaquants.length - 1));
        chosenBoss.attack(attaquants[numRand]);
    }
    
}