const express = require('express');
const Port = 3000;
//create new express object
const app = express();

//use middleware globally - standard option code
//built in part of express that looks at body of post request and will add named properties to reques.body so it easy to access values
app.use(express.urlencoded({extended: false}));

//controlling middleware could happen here
const getWeather = (req, res, next) =>{
    req.visitorWeather = true;
    //you dont't always have to call next - lets say you only want next to occur at certain points
    //then to move onto the next function you call next
    if (req.visitorWeather) {
        //perfect for login stuff, restricting access
        res.send("Please come back to our app when it is not raining");
    } else {
        next();
    }
}

//you dont't always have to call next - lets say you only want next to occur at certain points

//have to set up routes - so lets set up a route to home page
//so the get function requires two arguments - the get(route, function for request and repsonse)
//express calls function at appropriate time and will pass it two arguments, request and response
//express passes in incoming request from visitor, a response object 
//there is also a third object called next
app.get('/', getWeather , (req, res, next) => {
    //lets just show a post request
    //default browser will send get request - but will add it to the result URL
    //sepcify POST users value gets sent to the body of the request
    //action /result is where the result will be sent
    res.send(
        `<h1> What colour is the sky on a clear day?</h1>
        <form action="/result" method="POST">
            <input type="text" name="color">
            <button>Submit Answer</button>
        </form>

        <p>${req.visitorWeather ? "It is Raining" : "It isn't raining"}</p>
        `
    )
    //res.send("Welcome to our home page");
});

app.get('/about', (req, res) => {
    res.send("Welcome to our about page");
});

//so need a new route for post

app.post("/result", (req, res)=>{
    //dealing with user input - access value it is sent over - req.body.color json format access - needs enabling as it isnt enabled by defualt in request
    //trim removes whitespace
    //toUpperCase() makes sure that everything is put to upper case so BlUe would still work for example
    if (req.body.color.trim().toUpperCase() == "BLUE"){
        res.send("That is correct");
    } else {
        res.send("That is incorrect");
    }
});

//1st and 2nd fundamentals of WS -> listen on a port
app.listen(Port, (err)=>{
    if (err){
        throw err;
    };
    console.log(`Server listening on ${Port}`);
});