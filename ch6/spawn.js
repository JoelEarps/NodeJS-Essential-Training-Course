//execute is designed to run sync process - run a command and return data
//not designed to run asynchronous processes, this could mean long running process, ones that remain open
//e.g. the questions.js - don't want to execute we want to spawn it

const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Joel \n");
questionApp.stdin.write("is \n");
questionApp.stdin.write("king \n");

questionApp.stdout.on("data", data =>{
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", ()=>{
    console.log(`questionApp process exited`);
});