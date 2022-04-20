//so we made reusable 
//consumer module
const collectAnswers = require("./lib/collectAnswers");

//rebuild questions and answer app that built in last chapter
const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with Node js? "
];

//removed function
//collect answers that we sent an array of questions  and answers
const answerEvents = collectAnswers(questions /*, answers => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();} */
);

//now we have listeners rather than functions
answerEvents.on("answer", answer => console.log(`question answered: ${answer}`));

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());
