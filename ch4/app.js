const counter = require("./myModule");
//so can import the functions directly then don't need to use counter
//don't have to provide the path for npm or core modules - but custom modules we do

counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());

