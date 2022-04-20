//powerful tool that ships with node js is eventEmitter
//design for pub sub design pattern and allows us to create custom events and wire up listeners and handlers for events

const events = require("events");

//even emitter constructor to raise custom events
//using emit()
const emitter = new events.EventEmitter();

//when a custom event happens we call this callback function
emitter.on("customEvent", ( message, User ) => {
    console.log(`${User} ${message}`);
});

//emit function() - name of event, then the subsequent arguements are variables to pass
//emitter.emit("customEvent", "Hello World", "Computer");
//emitter.emit("customEvent", "Thats Pretty Cool", "Joel");

//these events are asynchronous - these are raised when they happen
//so lets listen for user input

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit"){
        emitter.emit("customEvent", "Goodbye", "process")
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
})

// so lets go collect answers into event based
