//another wayt to use nodejs asynchrnously is through timing functions - setTimeout, clearTimeout, setInterval, clearInteveral
//all work the same as they do in the browser and are all available globally
//3 second delay using setTimeout
const waitTime = 5000;

//declare most fo the values with const so that user cannot change them - use let fo others that need changing
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    //math.floor will clear off the decimal and make it an int
    const p = Math.floor((currentTime / waitTime) * 100);
    //clear last line that we wrote
    process.stdout.clearLine();
    //move cursor back to start position
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ...${p}%`);
    
};

console.log(`setting a ${waitTime / 1000} second delay`);

//arrow function that has one line doesn't need the brackets

const timerFinished = () => {
    clearInterval(interval);
    //clear last line that we wrote
    process.stdout.clearLine();
    //move cursor back to start position
    process.stdout.cursorTo(0);
    console.log("Done");
};
//setInterval(function, time inteverals to run function) -
//setTimeout(function ran when timer is finished, the time for the timer)
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);

//need to clear interval to stop it running indefiently, to clear it we need to store it

//we can use the setInterval function that can report how long we waited