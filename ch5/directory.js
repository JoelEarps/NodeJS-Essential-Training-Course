const fs = require("fs");

if (fs.existsSync("storage-files")){
    console.log("already there");
} else {
    //writing only returns a potential error - no data as it isn't read
    fs.mkdir("storage-files", err =>{
        if (err){
            throw err;
        }
        console.log("directory created");
    })
}

