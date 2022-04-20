//node js comes with a child process module which allows you to execute external process in your environment
//so the app can communicate with other process in the environment

const cp = require("child_process");

//so all commands ran are sync - exec are for synchronous commands

//cp.exec("open https://www.youtube.com/watch?v=VShtPwEkDD0");

//cp.exec("open -a Terminal .");

//if process we run returns data - like ls we can grab the data and then 

cp.exec("node readStream", (err, data, stderr)=> {
    
    console.log(data);
});