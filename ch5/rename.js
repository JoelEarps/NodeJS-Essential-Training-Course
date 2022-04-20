const fs = require("fs");

//rename as async and sync - first arguement path, second argument is new name
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

//can also use rename to move files - original path. path to move to
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err){
        throw err;
    }
});

//add a timeout - delete file after 4 seconds

setTimeout( () => {

    fs.unlinkSync("./assets/alex.jpg");

}, 4000);