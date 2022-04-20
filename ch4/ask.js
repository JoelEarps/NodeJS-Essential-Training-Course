//readline is a module used to ask questions for a terminal user
//interface around readable and writeable streams that allows us to write code to prompt user and write answers

const readline = require("readline");

//readline requires a created interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//to ask a question we can use the question functions
//first argument is the question, second arguemnet is the call back function to perform when this is done
rl.question(" How do you like Node? ", answer => {
    console.log(`Your answer ${answer}`);
});

