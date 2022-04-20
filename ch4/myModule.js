//every js file is it own module
//require loads module
//module.exports lets us export functionaloity and dat from a module

//module.exports = "Alex";

//within ever js file - all variables scoped to module - so files thta consume this module won't have access to the count
let count = 0;
const inc = () => ++count;
const dec = () => --count;
const getCount = () => count;

// so now i can export the functions in an object

module.exports = {
    inc,
    dec,
    getCount
}


