const fs = require("fs");

//read a file synchrnously - blocking again
//const text = fs.readFileSync("./assets/Readme.md", "UTF-8");
//asynch read - utf-8 is for text type
//can read bin files - don't supply encoding type
fs.readFile("./assets/alex.jpg", (err, img) => {
    if (err){
        console.log(`An error has occured: ${err}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
})
