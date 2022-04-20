const collectAnswers = require("../Ex_Files_NodeJS_EssT/Exercise Files/ch06/06_04/start/lib/collectAnswers");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("complete", answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
});
answerEvents.on("complete", () => process.exit());
