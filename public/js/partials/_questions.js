class Question {
    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }
};

let question1 = new Question("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ? ", "silence");
let question2 = new Question("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?", "courant");


export let questions = [question1, question2];