import { questions } from "./_questions.js";

export class Boss {
    constructor(name, ptLife, ptAttack){
        this.name = name;
        this.ptLife = ptLife;
        this.ptAttack = ptAttack;
        this.specialAttack = function(){
            if(true){ // TOGGLE :  true --- this.ptLife <= 20
                let numRand = Math.round(Math.random() * (questions.length - 1));
                let playerAnswer;
                let i = 1;
                while(playerAnswer != questions[numRand].answer && i <= 3){
                    playerAnswer = prompt(questions[numRand].question);
                    if (playerAnswer == questions[numRand].answer){
                        this.ptVie = 0;
                        alert("Félicitations, vous avez vaincu " + this.name + ".");
                        break;
                    } else if(i < 3){
                        i++;
                        continue;
                    }
                    alert("Vous avez été vaincu par " + this.name + ".");
                    i++;
                }
            }
        }
    }
}