const readline = require("readline");
const {EventEmitter} = require("events");
const { emit } = require("process");

//readline requires a created interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//created reusable function and export it as a module 
//make done callback optional
module.exports = (questions, done = f => f) =>{
    const answers = [];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter();
    const questionAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered)
            
        } else {
            //create default functions
            done(answers);
            emitter.emit("complete", answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
    return emitter;
};