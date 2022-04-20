//so we are going to look at inputs and outputs that provide questions and answers
//another feature of process object is standard input and standard output

//process.stdout is a writeable stream
//console.log uses stdout but puts a new line at the end of each log - whereas stdout.write gives us more control over the string
/*

process.stdout.write("hello ");
process.stdout.write("World \n\n");
*/

//so lets create some Questions - an array of strings

const Questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming langauge?"
];

//create an ask function to ask the questions
//pass an index for a question - if nothing passed then index 0 is asked
const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${Questions[i]}`);
    process.stdout.write(` > `);
}

//invoke function
ask();

//so this module - and everyone built so far runs synchronously - as in everything runs and then nodejs has nothing left to do so stops

//so lets create a listener to listen for events on the stdin
//so first thing is we create a listener to listen for a data input event (first arguement) - this is then passed to the listrener function (second argument)
const answers = [];
process.stdin.on('data', data => {
    //push reply to answers
    answers.push(data.toString().trim());
    //process.stdout.write(`\n\n ${data.toString().trim() } \n\n`);
    //exit after something is typed
    //check length of array and see if any remaining questions are left and exit if answer if at end of q's array
    if (answers.length < Questions.length){
        ask(answers.length);
    } else {
        //exit if no
        process.exit();
    }
    
});

//on exit listener
process.on('exit', () => {
    //now on the exit we can save the input to local variables
    const [name, activity, lang] = answers;
    //when using the template string you honour any white space
    console.log(`
    
    Thank you for your answers

    Go ${activity} ${name} you can write ${lang} later!
    
    `)
});
// so this is out first async app - using stdin.on - as we are listening for input data, the app will be open and running whilst we type