//another important object is the process object
//the process object can be accessed global and it conatins info about the current process as well as tools to interact with that process

//get current pid and version of nodejs being used ot run the process

/*
console.log(process.pid);
console.log(process.versions.node);
*/

//with the process we can - get env info, read env variables, communicate with inputs and outpurs from terminal - also exit current process
//collect info from terminal when load application

//the argv value is the variables sent to the process to run it
//this command outputs the path to node and the path to the current module

//console.log(process.argv);

//so typing anything with the node code will add it to the argv array - node globalProcess.js Joel
//as it is an array we can work with it the same way  
//lets say we type - node globalProcess Joel Earps - destructure array (don't care abotu first two variables hence two commas and then store the last two as firts and second name)
/*onst [, , firstName, lastName] = process.argv;

console.log(`Your name is ${firstName} ${lastName}`); */

//so we normally wouldn't pass a first and last name in you would normally pass flags to know what type of variable was passed
// node globalProcess.js --user Joel --greeting "Hello Joel" - " " used so Hello Joel is treated as one string an dno seperated by whitespace
//To grab flags - we need to grab index of greeting and user and the return its value
//use arrow function - will grab flag we send to it - find the index after the flag - using process.argv array - indexof will give us index of the flag and adding +1 will get us the value
//using this function means the user can add the arguements in any particualr order
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}


const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);