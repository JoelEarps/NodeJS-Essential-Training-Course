const fs = require("fs");

//can rename and remove directories too

//fs.renameSync("./storage-files", "./storage");

//remove a directory - if files inside you will get an error 
//so need to delete all files

fs.readdirSync("./storage").forEach(fileName =>{
    fs.unlinkSync(`./storage/${fileName}`);
});

fs.rmdir("./storage", err => {
    if (err){
        throw err;
    }

    console.log("./storage directory removed");

});

