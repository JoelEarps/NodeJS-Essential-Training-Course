//directory name and full path and current file name with full dir extension 
//nodejs also comes with tools to maniuplate file paths but they need loading with a seperate module
/*console.log(__dirname);
console.log(__filename); */


//global - common js module pattern
//require and exports

//import other modules using require
//can use modules installed using npm, ones we created ourselves or ones that come with node itself

const path = require("path");

//template string
//pluck file name from full path 
//every node js file we create is called a module - it contains its own code - when we want to load other modules we need to import them using the require function
console.log(`The file name is ${path.basename(__filename)}`);


