//fs module can be used to list files and directories, stream, watch and modify file permissions
//lets list content of directory assets

const fs = require("fs");

//read contents of directory
//read dir sync - synchronous read - this line is blocking and means the script will not move on till done
//console.log("started reading files");
//const files = fs.readdirSync("./assets");
//another way is to use an async functions
fs.readdir("./assets", (err, files)=>{

    if (err){
        throw err;
    }
    console.log("complete")
    console.log(files);
})

//so this happens first because of async function
console.log("started reading files");


